// Controleert alle oefenstof: structuur, en dat de nakijker de eigen antwoorden accepteert
// en de vastgelegde foute antwoorden afwijst.
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { buildCourse } from '../src/build.js';
import { validateChapter } from '../src/validate.js';
import { gradeText, gradeOrder, clockSpec } from '../src/check/grade.js';
import { expand, normalize } from '../src/check/normalize.js';

const root = path.resolve(import.meta.dirname, '..', 'content');
const index = yaml.load(fs.readFileSync(path.join(root, 'index.yaml'), 'utf8'));
const files = fs.readdirSync(path.join(root, 'chapters')).filter((f) => f.endsWith('.yaml'));
const raw = files.map((f) => ({ file: f, data: yaml.load(fs.readFileSync(path.join(root, 'chapters', f), 'utf8')) }));
const course = buildCourse(index, raw.map((r) => r.data)).filter((c) => c.available);

function textSpecs(item) {
  switch (item.type) {
    case 'gap': return item.gaps.filter((g) => !g.options);
    case 'translate': return [item];
    case 'table': return item.rows.flat().filter((c) => c && typeof c === 'object');
    case 'clock': return [clockSpec(item)];
    case 'truefalse': return item.correction ? [item.correction] : [];
    case 'steps': return item.steps.flatMap(textSpecs);
    default: return [];
  }
}
const allTopics = course.flatMap((c) => c.grammar.map((g) => g.id));
const allItems = (ex) => ex.items.flatMap((i) => (i.type === 'steps' ? [i, ...i.steps] : [i]));

it('elk bestand hoort bij een hoofdstuk uit index.yaml', () => {
  const known = new Set(index.chapters.map((c) => c.chapter));
  for (const r of raw) expect(known.has(r.data.chapter), r.file).toBe(true);
});

for (const ch of course) {
  describe(`hoofdstuk ${ch.chapter}`, () => {
    it('grammatica-id’s zijn uniek over de hele cursus', () => {
      for (const g of ch.grammar) expect(allTopics.filter((t) => t === g.id).length, g.id).toBe(1);
    });

    it('heeft een geldige structuur', () => expect(validateChapter(ch, allTopics)).toEqual([]));

    it('accepteert alle eigen antwoorden', () => {
      for (const ex of ch.exercises) for (const item of allItems(ex)) for (const spec of textSpecs(item)) {
        for (const a of spec.answers) for (const v of expand(a)) {
          expect(gradeText(v, spec).correct, `${ex.id}: "${v}"`).toBe(true);
        }
      }
    });

    it('wijst alle vastgelegde fouten af', () => {
      for (const ex of ch.exercises) for (const item of allItems(ex)) for (const spec of textSpecs(item)) {
        for (const f of spec.feedback ?? []) for (const m of [].concat(f.match ?? [])) for (const v of expand(m)) {
          expect(gradeText(v, spec).correct, `${ex.id}: fout "${v}" wordt goed gerekend`).toBe(false);
          expect(f.tip, `${ex.id}: lege tip`).toBeTruthy();
        }
      }
    });

    it('zinsbouw: de tegels vormen precies een goed antwoord', () => {
      for (const ex of ch.exercises) for (const item of allItems(ex).filter((i) => i.type === 'order')) {
        const words = (s) => normalize(s).split(' ').sort().join(' ');
        const tiles = words([item.start, ...item.tokens].filter(Boolean).join(' '));
        for (const a of item.answers) expect(words(expand(a)[0]), `${ex.id}: ${a}`).toBe(tiles);
        expect(gradeOrder(item.tokens, item).correct !== undefined).toBe(true);
      }
    });

    it('gap met keuzelijst: antwoord staat tussen de opties', () => {
      for (const ex of ch.exercises) for (const item of allItems(ex).filter((i) => i.type === 'gap')) {
        for (const g of item.gaps.filter((x) => x.options)) expect(g.options).toContain(g.answers[0]);
      }
    });
  });
}

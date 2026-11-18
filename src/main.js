import './styles.css';
import { h } from './dom.js';
import { markdown, inline } from './md.js';
import { course } from './content.js';
import { itemCard } from './render/item-card.js';
import { shuffle } from './build.js';
import { getResult, saveResult, chapterProgress, resetProgress } from './progress.js';

const app = document.getElementById('app');
const chapterByNo = (n) => course.find((c) => c.chapter === Number(n));

function findTopic(topic, preferChapter) {
  const order = [preferChapter, ...course.filter((c) => c !== preferChapter)].filter(Boolean);
  for (const ch of order) {
    const card = ch.grammar?.find((g) => g.id === topic);
    if (card) return { card, href: `#/k/${ch.chapter}/g/${card.id}`, chapter: ch };
  }
  return null;
}


function crumbs(...parts) {
  return h('nav', { class: 'crumbs', 'aria-label': 'Kruimelpad' },
    parts.map((p, i) => [i ? h('span', { class: 'sep', 'aria-hidden': 'true' }, '›') : null, p.href ? h('a', { href: p.href }, p.label) : h('span', {}, p.label)]),
  );
}

// ---------- Startpagina ----------
function viewHome() {
  document.title = 'Svenska övningar';
  return h('div', { class: 'home' },
    h('section', { class: 'hero' },
      h('h1', {}, 'Svenska övningar'),
      h('p', { class: 'lead' }, 'Oefen Zweedse grammatica en woordenschat, hoofdstuk voor hoofdstuk. Elke oefening wordt meteen nagekeken, en bij een fout krijg je een tip.'),
    ),
    h('ol', { class: 'chapters' },
      course.map((ch) => {
        const p = ch.available ? chapterProgress(ch) : null;
        const pct = p && p.total ? Math.round((p.done / p.total) * 100) : 0;
        const inner = [
          h('span', { class: 'ch-title' }, ch.title),
          h('span', { class: 'ch-theme' }, ch.theme),
          ch.available
            ? h('span', { class: 'progress', title: `${p.done} van ${p.total} oefeningen gedaan` },
                h('span', { class: 'bar' }, h('span', { style: `width:${pct}%` })),
                h('span', { class: 'pct' }, `${p.done}/${p.total}`))
            : h('span', { class: 'soon' }, 'Binnenkort'),
        ];
        return h('li', { class: `ch-card${ch.available ? '' : ' disabled'}` },
          ch.available ? h('a', { href: `#/k/${ch.chapter}` }, inner) : h('div', {}, inner));
      }),
    ),
  );
}

// ---------- Hoofdstuk ----------
function viewChapter(ch) {
  document.title = `${ch.title} · Svenska övningar`;
  return h('div', {},
    crumbs({ label: 'Start', href: '#/' }, { label: ch.title }),
    h('header', { class: 'page-head' },
      h('h1', {}, ch.title),
      h('p', { class: 'lead' }, ch.theme),
    ),
    ch.grammar.length
      ? h('section', { class: 'block' },
          h('h2', {}, 'Grammatica'),
          h('ul', { class: 'cards' }, ch.grammar.map((g) =>
            h('li', {}, h('a', { class: 'card', href: `#/k/${ch.chapter}/g/${g.id}` }, h('strong', {}, g.title), h('span', { html: inline(g.summary) }))))),
        )
      : null,
    ch.sections.map((s) =>
      h('section', { class: 'block' },
        h('h2', {}, s.title),
        s.intro ? h('p', { class: 'muted' }, s.intro) : null,
        h('ol', { class: 'exercise-list' }, s.exercises.map((ex) => {
          const res = getResult(ch.chapter, ex.id);
          const types = [...new Set(ex.items.flatMap((i) => (i.type === 'steps' ? i.steps.map((s) => s.type) : [i.type])))];
          return h('li', {},
            h('a', { href: `#/k/${ch.chapter}/o/${ex.id}` },
              h('span', { class: 'ex-title' }, ex.title),
              h('span', { class: 'ex-meta' }, `${ex.items.length} vragen · ${types.map(typeName).join(', ')}`),
              res ? h('span', { class: `badge ${res.best >= 0.8 ? 'good' : 'mid'}` }, `${Math.round(res.best * 100)}%`) : null,
            ));
        })),
      ),
    ),
    h('section', { class: 'block mix' },
      h('h2', {}, 'Gemengd oefenen'),
      h('p', { class: 'muted' }, 'Tien willekeurige vragen uit dit hoofdstuk, in verschillende vraagvormen.'),
      h('a', { class: 'btn primary', href: `#/k/${ch.chapter}/mix` }, 'Start de mix'),
    ),
  );
}

const TYPE_NAMES = {
  mc: 'meerkeuze', multi: 'meerdere antwoorden', gap: 'invullen', translate: 'vertalen', order: 'zinsbouw',
  match: 'koppelen', table: 'tabel', truefalse: 'rätt/fel', clock: 'klok', dialogue: 'dialoog', free: 'schrijven',
};
const typeName = (t) => TYPE_NAMES[t] ?? t;

// ---------- Oefening ----------
function exerciseRunner(items, { onFinish }) {
  const total = items.filter((x) => x.item.type !== 'free').length;
  let done = 0;
  let good = 0;
  const score = h('div', { class: 'score', 'aria-live': 'polite' });
  const summary = h('div', { class: 'summary', hidden: true });
  const updateScore = () => {
    score.replaceChildren(...[h('span', {}, `${done} van ${items.length} beantwoord`), total ? h('span', {}, ` · ${good} in één keer goed`) : ''].filter(Boolean));
  };
  updateScore();
  const cards = [];
  const list = h('div', { class: 'items' },
    items.map(({ item, ctx, label }, i) => {
      const card = itemCard(item, ctx, i + 1, (r) => {
        done++;
        if (r.firstTry && !r.neutral) good++;
        updateScore();
        if (done === items.length) {
          summary.hidden = false;
          summary.replaceChildren(...onFinish(good, total));
          setTimeout(() => {
            summary.scrollIntoView({ behavior: 'smooth', block: 'center' });
            summary.querySelector('.btn.primary')?.focus({ preventScroll: true });
          }, r.revealed ? 1200 : 700);
          return;
        }
        // Na een goed antwoord automatisch door naar de volgende open vraag.
        if (r.revealed) return;
        const next = cards.slice(i + 1).find((c) => !c.isFinished()) ?? cards.find((c) => !c.isFinished());
        if (next) setTimeout(() => next.focusFirst(), 700);
      }, label);
      cards.push(card);
      return card;
    }),
  );
  // Bij openen: cursor in de eerste vraag zonder te scrollen (niet op touchscreens, i.v.m. het toetsenbord).
  if (matchMedia('(pointer: fine)').matches) setTimeout(() => cards[0]?.focusFirst({ scroll: false }), 50);
  return [list, score, summary];
}

function viewExercise(ch, ex) {
  document.title = `${ex.title} · ${ch.title}`;
  const items = (ex.shuffle ? shuffle(ex.items) : ex.items).map((item) => ({
    item,
    ctx: { topic: ex.topic, findTopic: (t) => findTopic(t, ch) },
  }));
  const pos = ch.exercises.indexOf(ex);
  const next = ch.exercises[pos + 1];
  const topicCard = ex.topic ? findTopic(ex.topic, ch) : null;
  const [list, score, summary] = exerciseRunner(items, {
    onFinish: (good, total) => {
      if (total) saveResult(ch.chapter, ex.id, good, total);
      else saveResult(ch.chapter, ex.id, 1, 1);
      return [
        h('h2', {}, total ? `Klaar! ${good} van ${total} in één keer goed.` : 'Klaar!'),
        h('p', {}, total && good / total >= 0.8 ? 'Knap gedaan.' : 'Herhaal de oefening later nog eens; dan blijft het beter hangen.'),
        h('div', { class: 'actions' },
          h('a', { class: 'btn ghost', href: `#/k/${ch.chapter}/o/${ex.id}?${Date.now()}` }, 'Opnieuw'),
          next ? h('a', { class: 'btn primary', href: `#/k/${ch.chapter}/o/${next.id}` }, `Volgende: ${next.title}`) : h('a', { class: 'btn primary', href: `#/k/${ch.chapter}` }, 'Terug naar het hoofdstuk'),
        ),
      ];
    },
  });
  return h('div', {},
    crumbs({ label: 'Start', href: '#/' }, { label: ch.title, href: `#/k/${ch.chapter}` }, { label: ex.title }),
    h('header', { class: 'page-head' },
      h('h1', {}, ex.title),
      h('p', { class: 'instruction', html: inline(ex.instruction) }),
      topicCard ? h('p', { class: 'muted' }, 'Uitleg: ', h('a', { href: topicCard.href }, topicCard.card.title)) : null,
    ),
    ex.text ? h('section', { class: 'passage', lang: 'sv' }, ex.textTitle ? h('h2', {}, ex.textTitle) : null, h('div', { html: markdown(ex.text) })) : null,
    score, list, summary,
  );
}

function viewMix(ch) {
  document.title = `Mix · ${ch.title}`;
  const pool = ch.exercises
    .filter((ex) => !ex.text)
    .flatMap((ex) => ex.items.filter((i) => i.type !== 'free').map((item) => ({ item, ex })));
  const picked = shuffle(pool).slice(0, 10).map(({ item, ex }) => ({
    item,
    label: ex.instruction.replace(/\*\*|\*/g, ''),
    ctx: { topic: ex.topic, findTopic: (t) => findTopic(t, ch) },
  }));
  const [list, score, summary] = exerciseRunner(picked, {
    onFinish: (good, total) => [
      h('h2', {}, `Klaar! ${good} van ${total} in één keer goed.`),
      h('div', { class: 'actions' },
        h('a', { class: 'btn primary', href: `#/k/${ch.chapter}/mix?${Date.now()}` }, 'Nieuwe mix'),
        h('a', { class: 'btn ghost', href: `#/k/${ch.chapter}` }, 'Terug naar het hoofdstuk'),
      ),
    ],
  });
  return h('div', {},
    crumbs({ label: 'Start', href: '#/' }, { label: ch.title, href: `#/k/${ch.chapter}` }, { label: 'Mix' }),
    h('header', { class: 'page-head' }, h('h1', {}, `Mix: ${ch.title}`), h('p', { class: 'instruction' }, 'Tien willekeurige vragen uit het hele hoofdstuk.')),
    score, list, summary,
  );
}

// ---------- Grammatica ----------
function viewGrammar(ch, card) {
  document.title = `${card.title} · ${ch.title}`;
  const related = ch.exercises.filter((e) => e.topic === card.id || e.items.some((i) => i.topic === card.id));
  return h('div', {},
    crumbs({ label: 'Start', href: '#/' }, { label: ch.title, href: `#/k/${ch.chapter}` }, { label: card.title }),
    h('article', { class: 'grammar' },
      h('p', { class: 'eyebrow' }, 'Grammatica'),
      h('h1', {}, card.title),
      h('p', { class: 'summary-rule', html: inline(card.summary) }),
      h('div', { class: 'prose', html: markdown(card.body) }),
    ),
    related.length
      ? h('section', { class: 'block' }, h('h2', {}, 'Oefen dit'),
          h('ul', { class: 'exercise-list' }, related.map((e) => h('li', {}, h('a', { href: `#/k/${ch.chapter}/o/${e.id}` }, h('span', { class: 'ex-title' }, e.title))))))
      : null,
  );
}

function viewAbout() {
  document.title = 'Over · Svenska övningar';
  return h('div', { class: 'prose about' },
    crumbs({ label: 'Start', href: '#/' }, { label: 'Over deze site' }),
    h('h1', {}, 'Over deze site'),
    h('p', {}, 'Svenska övningar is een gratis oefensite voor Nederlandstaligen die Zweeds leren op beginnersniveau. De grammatica wordt in dertien hoofdstukken (0 tot en met 12) in een vaste volgorde opgebouwd, zoals gebruikelijk in een basiscursus.'),
    h('p', {}, 'Alle oefenzinnen, teksten en uitleg op deze site zijn zelf geschreven. De site is niet verbonden aan een uitgever of lesmethode.'),
    h('h2', {}, 'Hoe werkt het nakijken?'),
    h('ul', {},
      h('li', {}, 'Hoofdletters, leestekens en extra spaties tellen niet mee.'),
      h('li', {}, 'Bij een fout krijg je eerst een tip, bijvoorbeeld over de woordvolgorde, een uitgang of de puntjes op de å, ä en ö.'),
      h('li', {}, 'Na een tweede fout zie je de regel met een link naar de uitleg. Na drie pogingen kun je het antwoord laten zien.'),
      h('li', {}, 'Bij een schrijfopdracht controleert de site alleen een paar dingen en krijg je een voorbeeldantwoord om mee te vergelijken.'),
    ),
    h('h2', {}, 'Snel werken'),
    h('ul', {},
      h('li', {}, 'Meerkeuze, keuzelijsten, koppelen en zinsbouw worden meteen nagekeken zodra je antwoord compleet is.'),
      h('li', {}, 'Typ je antwoord en druk op Enter. Bij meerkeuze kun je de cijfertoetsen 1–9 gebruiken.'),
      h('li', {}, 'Na een goed antwoord ga je vanzelf door naar de volgende vraag; aan het eind brengt Enter je naar de volgende oefening.'),
    ),
    h('h2', {}, 'Voortgang'),
    h('p', {}, 'Je voortgang wordt alleen in deze browser bewaard.'),
    h('button', { type: 'button', class: 'btn ghost', onclick: () => { if (confirm('Alle voortgang wissen?')) { resetProgress(); location.hash = '#/'; } } }, 'Voortgang wissen'),
  );
}

function notFound() {
  return h('div', { class: 'prose' }, h('h1', {}, 'Pagina niet gevonden'), h('p', {}, h('a', { href: '#/' }, 'Terug naar de start')));
}

// ---------- Router ----------
function route() {
  const path = location.hash.replace(/^#/, '').split('?')[0] || '/';
  const parts = path.split('/').filter(Boolean);
  let view;
  if (!parts.length) view = viewHome();
  else if (parts[0] === 'over') view = viewAbout();
  else if (parts[0] === 'k') {
    const ch = chapterByNo(parts[1]);
    if (!ch?.available) view = notFound();
    else if (parts.length === 2) view = viewChapter(ch);
    else if (parts[2] === 'o') {
      const ex = ch.exercises.find((e) => e.id === parts[3]);
      view = ex ? viewExercise(ch, ex) : notFound();
    } else if (parts[2] === 'g') {
      const card = ch.grammar.find((g) => g.id === parts[3]);
      view = card ? viewGrammar(ch, card) : notFound();
    } else if (parts[2] === 'mix') view = viewMix(ch);
    else view = notFound();
  } else view = notFound();
  app.replaceChildren(view);
  window.scrollTo(0, 0);
  app.focus({ preventScroll: true });
}

// ---------- Å Ä Ö-knoppen ----------
function charBar() {
  const bar = h('div', { class: 'charbar', hidden: true, role: 'toolbar', 'aria-label': 'Zweedse letters' });
  let target = null;
  for (const c of ['å', 'ä', 'ö', 'Å', 'Ä', 'Ö']) {
    bar.append(h('button', {
      type: 'button',
      onmousedown: (e) => e.preventDefault(),
      onclick: () => {
        if (!target) return;
        const s = target.selectionStart ?? target.value.length;
        const e = target.selectionEnd ?? s;
        target.value = target.value.slice(0, s) + c + target.value.slice(e);
        target.setSelectionRange(s + 1, s + 1);
        target.dispatchEvent(new Event('input', { bubbles: true }));
        target.focus();
      },
    }, c));
  }
  document.addEventListener('focusin', (e) => {
    if (e.target.matches('input[type="text"], textarea')) {
      target = e.target;
      bar.hidden = false;
    }
  });
  document.addEventListener('focusout', (e) => {
    setTimeout(() => {
      if (!document.activeElement?.matches('input[type="text"], textarea')) bar.hidden = true;
    }, 150);
  });
  document.body.append(bar);
}

// ---------- Thema ----------
function themeToggle() {
  const btn = document.getElementById('theme');
  const apply = (t) => {
    if (t) document.documentElement.dataset.theme = t;
    else delete document.documentElement.dataset.theme;
  };
  let saved = null;
  try { saved = localStorage.getItem('svensk-ovningar:theme'); } catch { /* */ }
  apply(saved);
  btn?.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme
      ? document.documentElement.dataset.theme === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;
    const t = dark ? 'light' : 'dark';
    apply(t);
    try { localStorage.setItem('svensk-ovningar:theme', t); } catch { /* */ }
  });
}

window.addEventListener('hashchange', route);
charBar();
themeToggle();
route();

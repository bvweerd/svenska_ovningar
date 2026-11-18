// Voortgang in localStorage: per vraag én per oefening.
//
// state = {
//   v: 2,
//   items: { "<hoofdstuk>/<oefening>/<index>": { s: 'good'|'wrong'|'revealed'|'free', at, h } },
//   ex:    { "<hoofdstuk>/<oefening>": { best, score, total, completedAt?, runStart? } },
//   last:  { href, title, at }
// }
// - 'good' = in één keer goed, 'wrong' = goed na fouten, 'revealed' = antwoord bekeken.
// - h is een hash van de vraag; verandert de vraag in de inhoud, dan telt het oude resultaat niet meer.
// - Een "ronde" van een oefening begint bij runStart; vragen met at >= runStart zijn in deze ronde gedaan.

const KEY = 'svensk-ovningar:progress:v2';
const OLD_KEY = 'svensk-ovningar:progress:v1';
const empty = () => ({ v: 2, items: {}, ex: {}, last: null });
let memory = empty();

function migrate() {
  try {
    const old = JSON.parse(localStorage.getItem(OLD_KEY) ?? 'null');
    if (!old) return null;
    const state = empty();
    for (const [k, r] of Object.entries(old)) {
      state.ex[k] = { best: r.best ?? 0, score: r.score, total: r.total, completedAt: r.at };
    }
    localStorage.removeItem(OLD_KEY);
    return state;
  } catch {
    return null;
  }
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const s = JSON.parse(raw);
      if (s?.v === 2) return { ...empty(), ...s };
    }
    const migrated = migrate();
    if (migrated) {
      save(migrated);
      return migrated;
    }
    return memory;
  } catch {
    return memory;
  }
}

function save(state) {
  memory = state;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* geen opslag beschikbaar: alleen in het geheugen */
  }
}

export function hashItem(item) {
  const s = JSON.stringify(item);
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return h.toString(36);
}

const exKey = (ch, exId) => `${ch}/${exId}`;
const itemKey = (ch, exId, idx) => `${ch}/${exId}/${idx}`;
const gradable = (ex) => ex.items.map((it, idx) => ({ it, idx })).filter(({ it }) => it.type !== 'free');

/** Status van één vraag, of null als die (nog) niet of in een oudere versie gemaakt is. */
function itemRecord(state, ch, ex, idx) {
  const r = state.items[itemKey(ch, ex.id, idx)];
  return r && r.h === hashItem(ex.items[idx]) ? r : null;
}

export function recordItem(ch, ex, idx, status) {
  const state = load();
  state.items[itemKey(ch, ex.id, idx)] = { s: status, at: Date.now(), h: hashItem(ex.items[idx]) };
  save(state);
}

/** Welke vragen zijn in de lopende ronde al gedaan? */
export function runState(ch, ex) {
  const state = load();
  const rec = state.ex[exKey(ch, ex.id)];
  const start = rec?.runStart;
  const done = new Map();
  if (start) {
    ex.items.forEach((_, idx) => {
      const r = itemRecord(state, ch, ex, idx);
      if (r && r.at >= start) done.set(idx, r.s);
    });
  }
  return { started: !!start, done, total: ex.items.length };
}

export function startRun(ch, ex) {
  const state = load();
  const k = exKey(ch, ex.id);
  state.ex[k] = { ...(state.ex[k] ?? { best: 0 }), runStart: Date.now() };
  save(state);
}

/** Sluit een ronde af en geeft de score van die ronde terug. */
export function completeRun(ch, ex) {
  const { done } = runState(ch, ex);
  const items = gradable(ex);
  const score = items.filter(({ idx }) => done.get(idx) === 'good').length;
  const total = items.length;
  const state = load();
  const k = exKey(ch, ex.id);
  const prev = state.ex[k] ?? { best: 0 };
  const ratio = total ? score / total : 1;
  state.ex[k] = { best: Math.max(prev.best ?? 0, ratio), score, total, completedAt: Date.now() };
  save(state);
  return { score, total };
}

export function getResult(ch, exId) {
  return load().ex[exKey(ch, exId)] ?? null;
}

/** Voortgang van een hoofdstuk: afgeronde oefeningen en beantwoorde vragen. */
export function chapterProgress(chapter) {
  const state = load();
  const exercises = chapter.exercises ?? [];
  let itemsDone = 0;
  let itemsTotal = 0;
  let completed = 0;
  for (const ex of exercises) {
    if (state.ex[exKey(chapter.chapter, ex.id)]?.completedAt) completed++;
    ex.items.forEach((_, idx) => {
      itemsTotal++;
      if (itemRecord(state, chapter.chapter, ex, idx)) itemsDone++;
    });
  }
  return { completed, exercises: exercises.length, itemsDone, itemsTotal };
}

/** Vragen die fout gingen of waarvan het antwoord bekeken is (laatste poging). */
export function weakItems(chapter) {
  const state = load();
  const out = [];
  for (const ex of chapter.exercises ?? []) {
    ex.items.forEach((item, idx) => {
      const r = itemRecord(state, chapter.chapter, ex, idx);
      if (r && (r.s === 'wrong' || r.s === 'revealed')) out.push({ ex, idx, item });
    });
  }
  return out;
}

export function setLast(href, title) {
  const state = load();
  state.last = { href, title, at: Date.now() };
  save(state);
}

export function getLast() {
  return load().last;
}

export function resetProgress() {
  save(empty());
}

export function exportProgress() {
  return JSON.stringify(load(), null, 2);
}

/** Importeert een export. Gooit een fout bij een ongeldig bestand. */
export function importProgress(text) {
  const data = JSON.parse(text);
  if (data?.v !== 2 || typeof data.items !== 'object' || typeof data.ex !== 'object') {
    throw new Error('Dit is geen geldig voortgangsbestand.');
  }
  save({ ...empty(), ...data });
}

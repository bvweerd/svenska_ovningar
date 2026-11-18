// Voortgang per oefening in localStorage. Werkt ook als opslag niet beschikbaar is.
const KEY = 'svensk-ovningar:progress:v1';
let memory = {};

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}') ?? {};
  } catch {
    return memory;
  }
}

function store(data) {
  memory = data;
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* geen opslag: alleen in geheugen */
  }
}

export function getResult(chapter, exId) {
  return load()[`${chapter}/${exId}`] ?? null;
}

export function saveResult(chapter, exId, score, total) {
  const data = load();
  const key = `${chapter}/${exId}`;
  const prev = data[key];
  data[key] = {
    score,
    total,
    best: Math.max(score / Math.max(total, 1), prev?.best ?? 0),
    at: new Date().toISOString(),
  };
  store(data);
}

export function chapterProgress(chapter) {
  const data = load();
  const total = chapter.exercises?.length ?? 0;
  const done = (chapter.exercises ?? []).filter((e) => data[`${chapter.chapter}/${e.id}`]).length;
  return { done, total };
}

export function resetProgress() {
  store({});
}

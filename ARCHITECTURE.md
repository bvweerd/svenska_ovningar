# Architectuur

Doelarchitectuur voor de gedeelde code van beide sites (`svenska_ovningar` en `svenska_ovningar_b`).
Dit bestand staat alleen hier, net als `PLAN.md`. Elke stap is los te publiceren: zelfde gedrag, id's en
opslag; `npm test`, `npm run build` en `npm run check-sync` groen in beide repo's.

## Uitgangspunten

- **Blijft zo**: statische PWA, vanilla JS + Vite, YAML-inhoud, offline, geen framework, geen eigen
  server behalve de Worker. Voortgangsformaat (`progress:v2`), id's en URL's (`#/k/13/o/…`) veranderen
  niet; elke stap is voor de leerling onzichtbaar.
- **Probleem dat we oplossen**: de app groeit in vraagtypen, oefenvormen (herhaling, toets, spel,
  flitskaarten, dictee, sync) en inhoud. Nu kost elke uitbreiding wijzigingen op veel plekken tegelijk.
- **Geen framework, geen TypeScript-bouwstap.** De DOM-helper `h()` is genoeg voor deze schermen;
  een framework voegt bundelgrootte, een bouwstap en afhankelijkheden toe zonder het echte probleem
  (verspreide kennis per vraagtype, globale toestand) op te lossen. Types via JSDoc + `// @ts-check`.

## Stand (november 2026)

Gebouwd: lagen met bewakingstest, register van vraagtypen, routetabel met één bestand per pagina, opslag alleen
in `platform/storage.js`, pure voortgangsregels met een store (`subscribe`), rooktest `npm run smoke`.
Bundel ±1,1 MB JS (±330 kB gzip). Nog open, alleen als het nodig is: inhoud bij het bouwen en per hoofdstuk
laden (zie „Inhoud”).

## Lagen

Afhankelijkheden lopen alleen **naar beneden**. Een test bewaakt dit (zie „Bewaking”).

```
 main.js            compositie: maakt store, diensten en router, verder niets
   │
 ui/                DOM: router, views, componenten, renderers per vraagtype
   │
 app/               toestand van de draaiende app: store (+ subscribe), acties
   │
 platform/          bijwerkingen: opslag, netwerk (sync, melden), spraak, PWA, GoatCounter
   │
 core/              puur: geen window/document/localStorage/fetch; draait in Node
 config.js          per site (enige verschil in src/)
```

### `core/` — puur, in Node te draaien

Gebruikt door de browser, `scripts/`, de tests en (voor `merge`) eventueel de Worker.

```
core/
  content/   build.js, validate.js, known-words.js
  check/     normalize, grade, diagnose, adverbial, clock   (nakijken)
  items/     register van vraagtypen: index.js + choice.js, text.js, other.js (per familie)
  progress/  schema.js (vorm, sleutels, antwoordhash, v1 → v2, plek → id), srs.js, record.js
             (antwoorden, rondes, hoofdstukvoortgang), cando.js, extras.js (toets, spel, prefs,
             flitskaarten, dictee), merge.js
  hash.js, verbs.js
```

Regel: een functie in `core/progress/` krijgt de toestand mee en geeft een nieuwe terug
(`recordItem(state, ref, status, now) → state`). Tijd (`now`) en toeval (`rand`) worden meegegeven,
zodat tests deterministisch zijn.

### `platform/` — de buitenwereld

```
platform/
  storage.js    kv-opslag (enige plek met localStorage), JSON-helpers
  sync.js       Worker-synchronisatie; krijgt de voortgang mee via bindProgress(snapshot, merge)
  analytics.js  GoatCounter
  speech.js     browserstem; krijgt de voorkeuren mee via usePrefs(get, set)
  pwa.js        service worker, installeren; meldt een nieuwe versie via initPwa({ onUpdate })
```

Een dienst kent de voortgang niet: `main.js` geeft mee wat hij nodig heeft. `config.js` mag elke laag
lezen. „Fout gezien?” is vooral een formulier en staat daarom in `ui/components/report.js`.

### `app/` — één store

```js
const store = createStore({ storage, key: `${STORAGE_PREFIX}:progress:v2`, oldKey: '…:v1' });
store.get();                                   // toestand in het geheugen; opnieuw lezen na het storage-event van een ander tabblad
store.update((s) => recordItem(s, 13, ex, idx, 'good'));   // pure functie uit core/progress
store.subscribe((s, { reason, prev }) => …);   // reason: 'local' | 'sync' | 'import' | 'reset'
```

- `app/progress.js` is de laag die pagina's gebruiken (`recordItem(ch, ex, idx, status)`,
  `getPref`, `canDoStatus`, …): elke functie roept de pure functie aan op `store.get()`, of laat de
  store veranderen. De API is dezelfde als vóór de overgang.
- `app/course-progress.js`: wat af is en waar je verder gaat (`exerciseDone`, `onwardFrom`, `claimCanDo`).
- Wie wil reageren op een verandering (de router na een sync, straks badges) gebruikt `subscribe`.
- Voorkeuren in de voortgang blijven daar (ze synchroniseren mee); thema, opt-out en synccode staan
  per apparaat in `platform/storage.js`.

### `ui/` — schermen

```
ui/
  dom.js, md.js, shared.js (crumbs, progressBar, exerciseRunner …), menu.js, nav.js, onboarding.js
  router.js, routes.js
  components/      chapter, charbar, theme, speak, pwa, report, support
  items/           renderers per familie (choice, text, listen, clock, order, tap) + index.js
                   (register), item-card.js, fields.js, tiles.js
  views/           home, chapter, exercise, review, grammar, about, sync, listen,
                   practice/{common,hub,daily,verbs,flashcards,test,games}
```

**Routetabel** in plaats van de if-keten:

```js
export const routes = [
  { path: '/',                 view: home,     refresh: true },
  { path: '/k/:ch',            view: chapter,  refresh: true },
  { path: '/k/:ch/o/:ex',      view: exercise },
  { path: '/oefenen/spel/:id', view: game },
  …
];
```

**Viewcontract**: `view({ params, query, signal }) → element | { el, title } | null` (null = niet gevonden).
- `signal` is een `AbortSignal` dat de router afbreekt bij weggaan: `addEventListener(…, { signal })`
  en `signal.addEventListener('abort', …)` voor timers (zo doen de flitskaarten en snelle rondes het).
- `refresh: true`: de router tekent de pagina opnieuw als de store meldt dat er voortgang van buiten
  binnenkwam (`sync`, `import`, `reset`). Alleen voor pagina's zonder invoer.
- De router zet `wide`, menu, `trackPage`, scroll en focus: één plek.
- Hoe een ronde begint (alles, een ronde uit een woordenlijst, alleen nieuwe vragen) beslist
  `prepareRun` in `core/progress/record.js`; deelpunten komen uit het nakijken (`share`).
- Pagina's halen de inhoud (`app/content.js`) en de voortgang (`app/progress.js`) zelf op. Dat mag
  volgens de laagregel (ui staat boven app). Een volledig meegegeven `ctx` (om pagina's met nep-voortgang
  te testen) is bewust niet gebouwd: de pure regels zijn los getest en `npm run smoke` opent elke pagina.
  Is het later nodig, dan kan de router een `ctx` meegeven zonder dat routes veranderen.

## Vraagtypen als register

Het belangrijkste uitbreidingspunt. Elk type heeft twee helften met dezelfde naam:

```js
// core/items/text.js — puur
export const translate = {
  type: 'translate',
  name: 'vertalen',                  // naam in het hoofdstukoverzicht
  validate(item, err) { … },         // controle van de inhoud (npm test)
  answerPart(item) { … },            // wat bepaalt wat goed is (antwoordhash); standaard [type, answers]
  spoken(item) { … },                // de goede zin om voor te lezen
  selfChecking: (item) => false,     // kijkt zichzelf na zodra je kiest?
  produce: true,                     // telt als „zelf maken” (difficulty-report)
  answerSentence: true,              // eerste goede antwoord telt als antwoordzin
};

// ui/items/text.js — DOM
export function translate(item, ctx) { … return { el, check, reveal, lock }; }
```

- `core/items/index.js` (`ITEM_TYPES`, `answerPart`, `spokenText`, `selfChecking`, `isGradable`,
  `typeName` …) en `ui/items/index.js` (`RENDERERS`) zijn de twee registers. `tests/items.test.js`
  eist dat ze dezelfde types hebben.
- Nakijken zelf staat in `core/check/grade.js`; de renderer roept het aan.
- `steps` is een samengesteld type dat het register zelf gebruikt voor zijn stappen.
- Een nieuw vraagtype: een definitie in `core/items/`, een renderer in `ui/items/`, meer niet.

## Voorbeeld: badges (toetssteen voor nieuwe functies)

Een beloningsstructuur past zonder nieuwe mechanismen; de kan-doen-vinkjes (`canDoStatus`/`newCanDo`)
werken al zo.

- `core/rewards/badges.js`: badges als lijst van gegevens, `{ id, title, text, rule(state, course) →
  { earned, progress } }`. Puur, dus te testen met een gemaakte toestand. De id is vast, net als
  vraag-id's.
- De toestand krijgt `badges: { "<id>": tijdstip }`. Een behaalde badge blijft staan, ook als de inhoud
  later verandert. `core/progress/merge.js` neemt de vereniging, met het vroegste tijdstip; sync en
  import werken daarna vanzelf.
- Een luisteraar op de store (`subscribe`) vergelijkt `newBadges(voor, na)`; nieuwe badges worden
  opgeslagen, gemeld aan analytics (`badge/<id>`) en getoond.
- `ui/components/toast.js` toont de melding; `ui/views/badges.js` is één regel in de routetabel
  (bijv. `/prestaties`), en het menu bouwt de link uit dezelfde tabel.
- Spelregels: een badge hangt alleen aan wat de app zelf nakijkt (doos, kan-doen, afgeronde oefening,
  toetsscore), nooit aan zelfbeoordeling. Didactisch voorkeur voor beheersing boven hoeveelheid; welke
  badges er komen, beslist de eigenaar.

## Inhoud

- **Nu**: YAML → JSON via de Vite-plugin, `buildCourse` en (in tests) `validateChapter` op runtime.
- **Doel**: de Vite-plugin draait `buildChapter` + `validateChapter` al tijdens `npm run build`
  (bouwen faalt bij ongeldige inhoud) en levert:
  - `course-index`: per hoofdstuk titel, thema, niveau, kan-doen, oefening-id's, aantallen en de
    antwoordhashes die home, menu en voortgang nodig hebben (klein, altijd geladen);
  - per hoofdstuk een eigen chunk, geladen met `import()` als je het opent.
- Wat alle stof nodig heeft (dagelijkse herhaling, snelle rondes, dictee) laadt de hoofdstukken waarin
  vragen klaarstaan; de router toont zolang „Laden…”. De service worker precachet alle chunks, dus
  offline blijft alles werken.
- Doe deze stap pas als het nodig is: als de bundel boven ±2 MB komt of het opstarten op een middelmatige
  telefoon merkbaar traag wordt. Tot dan is één bundel eenvoudiger.

## Twee repo's

Gedeelde code wordt nu gekopieerd en met `npm run check-sync` vergeleken. Dat blijft, met twee
aanvullingen:
- de laagregels en het register maken `src/config.js` en `content/` het enige verschil per site;
- de workflow `Tests` haalt de zusterrepo op (zelfde branch, anders `main`) en draait `check-sync`.

Eén repo (monorepo met `sites/a`, `sites/b` en gedeelde `src/`) maakt kopiëren overbodig, maar verandert
publicatie en URL's. **Beslissing van de eigenaar**; niet nodig voor de rest van dit ontwerp.

## Bewaking

`tests/architecture.test.js` (gedeeld) leest de imports van `src/` en controleert:
- alleen imports naar dezelfde of een lagere laag (`core` < `platform` < `app` < `ui` < `main.js`);
  `config.js` mag overal;
- geen cycli;
- in `core/` geen `window`, `document`, `localStorage`, `navigator` of `fetch`;
- `localStorage` alleen in `platform/storage.js`;
- geen bestand in `src/` boven 400 regels (behalve `styles.css`).

`tests/items.test.js` eist dat elk vraagtype in beide registers staat. Uitzonderingen zijn er niet
meer: elke regel van de architectuurtest moet leeg blijven. `npm run smoke` (ook in de workflow) opent
elke pagina in een browser. Types met `// @ts-check` + JSDoc zijn nog niet ingevoerd (eventueel later,
met `tsc --noEmit`, zonder bouwstap).

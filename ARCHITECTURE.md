# Architectuur

Doelarchitectuur voor de gedeelde code van beide sites (`svenska_ovningar` en `svenska_ovningar_b`).
Dit bestand staat alleen hier, net als `PLAN.md`. De stappen om er te komen staan onderaan; een afgeronde
stap wordt één regel onder „Gedaan” in `PLAN.md`.

## Uitgangspunten

- **Blijft zo**: statische PWA, vanilla JS + Vite, YAML-inhoud, offline, geen framework, geen eigen
  server behalve de Worker. Voortgangsformaat (`progress:v2`), id's en URL's (`#/k/13/o/…`) veranderen
  niet; elke stap is voor de leerling onzichtbaar.
- **Probleem dat we oplossen**: de app groeit in vraagtypen, oefenvormen (herhaling, toets, spel,
  flitskaarten, dictee, sync) en inhoud. Nu kost elke uitbreiding wijzigingen op veel plekken tegelijk.
- **Geen framework, geen TypeScript-bouwstap.** De DOM-helper `h()` is genoeg voor deze schermen;
  een framework voegt bundelgrootte, een bouwstap en afhankelijkheden toe zonder het echte probleem
  (verspreide kennis per vraagtype, globale toestand) op te lossen. Types via JSDoc + `// @ts-check`.

## Huidige toestand (november 2026, B-repo)

Goed: geen importcycli; nakijken (`src/check/`) is puur en goed getest; inhoud is los van code.

| Knelpunt | Waar | Gevolg |
|---|---|---|
| Godmodule | `main.js` (1000 regels): router, 15 views, thema, Å Ä Ö-balk, sync-koppeling, opstart | Elke nieuwe pagina raakt hetzelfde bestand |
| Vraagtype verspreid | `validate.js` (switch), `check/grade.js`, `render/items.js` (`RENDERERS`), `item-card.js` (`selfChecking`), `difficulty-report.mjs` (`PRODUCE`), `analytics.js` | Een nieuw vraagtype = 5–6 bestanden, makkelijk er één vergeten |
| Toestand + opslag + regels in één | `progress.js` (673 regels): localStorage, SRS, rondes, kan-doen, toetsen, spellen, flitskaarten, dictee, prefs, import, merge, migraties | Moeilijk te testen zonder localStorage; elke oefenvorm erbij maakt het groter |
| Globale singletons | views importeren `course` (`content.js`) en lezen/schrijven direct via `progress.js` | Views niet los te testen; geen manier om „voortgang veranderd” te melden |
| Verversen na sync | `main.js` herkent paden met een regex-lijst | Elke nieuwe pagina moet daar handmatig bij |
| Opruimen bij weggaan | ad-hoc (`onKeys` in `views/practice.js` controleert `document.body.contains`) | Luisteraars en timers lekken bij complexere schermen |
| Alles in één bundel | 1,07 MB JS (324 kB gzip); `buildCourse` draait bij elke start in de browser | Groeit lineair met de inhoud; trager starten op oude telefoons |
| Losse opslagsleutels | thema, opt-out, synccode, prefs: elk eigen `localStorage`-code met try/catch | Herhaalde code, privémodus-fouten op meer plekken |

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
  content/   build.js, validate.js, course.js (chapterByNo, findTopic, practiceEntries)
  check/     normalize, grade, diagnose, adverbial, clock   (bestaat al)
  items/     register van vraagtypen: één bestand per type + index.js
  progress/  schema.js (lege toestand, migraties), record.js, srs.js, rounds.js,
             cando.js, tests.js, cards.js, dictation.js, merge.js
  practice/  selectie: dueItems, balancedSample, pickRound, weakItems
  verbs.js
```

Regel: een functie in `core/progress/` krijgt de toestand mee en geeft een nieuwe terug
(`recordItem(state, ref, status, now) → state`). Tijd (`now`) en toeval (`rand`) worden meegegeven,
zodat tests deterministisch zijn.

### `platform/` — de buitenwereld

```
platform/
  storage.js    kv-opslag met geheugenfallback (enige plek met localStorage), JSON-helpers
  sync.js       Worker-synchronisatie (gebruikt core/progress/merge)
  report.js     „Fout gezien?” (Worker + Turnstile)
  analytics.js  GoatCounter
  speech.js     browserstem
  pwa.js        service worker, installeren
```

Elke dienst krijgt zijn configuratie mee bij het aanmaken (`createSync({ url, storage, fetch })`),
in plaats van zelf `config.js` te importeren. Zo zijn ze te testen met nep-opslag en nep-`fetch`.

### `app/` — één store

```js
const store = createStore({ storage, key: `${STORAGE_PREFIX}:progress:v2`, migrations });
store.get();                 // huidige toestand (gecachet, zoals nu)
store.update((s) => recordItem(s, ref, status, Date.now()));  // pure functie uit core
store.subscribe((s, reason) => …);  // reason: 'local' | 'sync' | 'import' | 'reset'
```

- `app/actions.js` bundelt de bekende handelingen (`answer`, `finishRun`, `rateCard`, …) zodat views
  niet zelf core-functies en store combineren. Een actie mag een gebeurtenis naar analytics sturen.
- Voorkeuren (`prefs`), thema en synccode gaan via `platform/storage.js`; wat nu in de voortgang zit,
  blijft daar (het formaat verandert niet).
- Migraties staan als lijst in `core/progress/schema.js` (`[{ from: 'v1', run }, { ids: true, run }]`)
  in plaats van losse functies die `main.js` bij het opstarten aanroept.

### `ui/` — schermen

```
ui/
  dom.js, md.js
  router.js        routetabel + levenscyclus
  components/      progressBar, crumbs, foldSection, charBar, themeToggle, menu, …
  items/           één renderer per vraagtype (zelfde namen als core/items/)
  views/           home.js, chapter.js, exercise.js, grammar.js, about.js, link.js,
                   practice/{hub,daily,verbs,flashcards,test,games}.js, listen/{settings,dictation}.js
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

**Viewcontract**: `view(params, query, ctx) → { el, title, wide? }` (of een Promise daarvan).
- `ctx` bevat alles wat een view nodig heeft: `course`, `store`, `actions`, de diensten, `config`,
  `navigate` en `signal`. Views importeren geen singletons meer; in tests geef je een nep-`ctx`.
- `ctx.signal` is een `AbortSignal` dat de router afbreekt bij weggaan: `addEventListener(…, { signal })`
  en timers ruimen zichzelf op. Vervangt `onKeys`.
- `refresh: true`: de router tekent de pagina opnieuw als de store meldt dat er voortgang van buiten
  binnenkwam (`reason: 'sync' | 'import'`). Vervangt de regex-lijst in `main.js`.
- De router zet titel, `wide`, menu, `trackPage`, scroll en focus: één plek.

## Vraagtypen als register

Het belangrijkste uitbreidingspunt. Elk type heeft twee helften met dezelfde naam:

```js
// core/items/translate.js — puur
export default {
  type: 'translate',
  validate(item, ctx) { … },          // nu: case in validate.js
  grade(input, item, ctx) { … },      // nu: check/grade.js
  answers(item) { … },                // goede antwoorden, voor answerHash en de test „elk goed antwoord is goed”
  produce: true,                      // telt als „zelf maken” (difficulty-report)
  selfChecking: false,                // nu: selfChecking() in item-card.js
  summary(item) { … },                // nu: itemSummary() in analytics.js
};

// ui/items/translate.js — DOM
export default { type: 'translate', render(item, ctx) → { el, check, reveal, lock } };
```

- `core/items/index.js` en `ui/items/index.js` exporteren de lijsten; validatie, nakijken, rapporten
  en item-card vragen het register in plaats van zelf een switch te hebben.
- Een test controleert dat elk type in beide registers staat en dat elk type in de inhoud bekend is.
- `steps` blijft een samengesteld type dat het register zelf gebruikt voor zijn stappen.

Hetzelfde patroon, kleiner, voor **oefenvormen** (`ui/views/practice/`): elke vorm (herhaling, toets,
spel, flitskaarten, dictee) is een module met `{ id, title, path, pick(ctx), view }`, zodat de hub
en het menu ze uit één lijst opbouwen.

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
- de GitHub-workflow haalt de zusterrepo op en draait `check-sync`, zodat een vergeten kopie niet
  publiceert.

Eén repo (monorepo met `sites/a`, `sites/b` en gedeelde `src/`) maakt kopiëren overbodig, maar verandert
publicatie en URL's. **Beslissing van de eigenaar**; niet nodig voor de rest van dit ontwerp.

## Bewaking

`tests/architecture.test.js` (gedeeld) leest de imports van `src/` en controleert:
- alleen imports naar dezelfde of een lagere laag (`core` < `platform` < `app` < `ui` < `main.js`);
  `config.js` mag overal;
- geen cycli;
- in `core/` geen `window`, `document`, `localStorage`, `navigator` of `fetch`;
- `localStorage` alleen in `platform/storage.js`;
- elk vraagtype in beide registers;
- geen bestand in `src/` boven 400 regels (behalve `styles.css`).

Tijdens de overgang heeft de test een lijst met bekende uitzonderingen; die lijst mag alleen korter
worden. `// @ts-check` + JSDoc in `core/` en `app/`, gecontroleerd met `tsc --noEmit` in `npm test`.

## Stappen

Elke stap is los te publiceren: zelfde gedrag, zelfde id's en opslag, `npm test`, `npm run build` en
`npm run check-sync` groen in beide repo's, en de schermen nagelopen op telefoonformaat (licht en donker).

1. **Vastleggen**: `tests/architecture.test.js` met de huidige uitzonderingen; workflow draait `check-sync`.
2. **Register vraagtypen**: `core/items/` en `ui/items/`; `validate.js`, `grade.js`, `items.js`,
   `item-card.js`, `difficulty-report` en `analytics` gebruiken het register.
3. **Router en views uit `main.js`**: routetabel, viewcontract met `signal`, één bestand per view;
   `main.js` alleen nog compositie.
4. **Opslag en store**: `platform/storage.js`; `progress.js` opgesplitst in pure `core/progress/*`
   + `app/store.js`; migraties als lijst; sync en import melden zich via `subscribe`.
5. **Injectie**: views en diensten krijgen `ctx`/configuratie mee; rooktest met Playwright die elke
   route opent (Pixel 7, licht en donker).
6. **Inhoud bij het bouwen** en per hoofdstuk laden — alleen als de drempel hierboven bereikt is.

Volgorde: 1 eerst (bewaking voordat er verbouwd wordt), 2 levert het meest op voor nieuwe stof,
3–5 bouwen op elkaar voort.

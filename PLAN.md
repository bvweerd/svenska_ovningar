# Plan: Svenska övningar – interactieve oefensite (GitHub Pages)

Een statische, interactieve oefensite voor Zweeds taalgebruik, met dezelfde opbouw als
een gangbare basiscursus: 13 genummerde hoofdstukken (0 = uitspraak, 1–12), elk met
de hoofdonderwerpen als ondertitel. Oefeningen combineren meerkeuze en open vragen, worden
automatisch nagekeken en geven gerichte tips bij fouten.

---

## 0. Uitgangspunt: auteursrecht

Beide antwoordenmodellen (© Boom 2025) behouden het recht op tekst- en datamining
uitdrukkelijk voor. Een **openbare** GitHub Pages-site mag daarom geen teksten, zinnen,
dialogen of antwoorden uit de boeken overnemen.

Wat we wel overnemen is het **stramien**:
- de indeling in hoofdstukken en per hoofdstuk *Oefeningen → Herhaling → Woordenschat*
  (de hoofdstukken zijn genummerd 0–12, niet naar de maandnamen uit het boek);
- de volgorde van grammatica en thema's (welke stof wanneer aan bod komt);
- de soorten oefeningen (invullen, vertalen, zinnen ordenen, R/F, tabellen, klok, dialoog ordenen).

Alle zinnen, woordenlijsten en uitleg schrijven we zelf. Wie het boek heeft, kan het
naast de site gebruiken; de site verwijst alleen naar het hoofdstuknummer.

---

## 1. Inhoudelijke opbouw (afgeleid uit de bijlagen)

| # | Hoofdstuk | Grammatica | Thema / woordenschat |
|---|-----------|------------|----------------------|
| 0 | Uitspraak | sj-ljud / tj-ljud, harde/zachte klinkers na k/sk/g, klemtoon, spreektaalvormen (*ru*, *rin*) | klanken |
| 1 | Hoofdstuk 1 | presens (-ar, -er, -r, onregelmatig), V2-regel en inversie, persoonlijke vnw. (subjekt), ja/nee-vragen, ontkenning *inte*, *en/ett* + bepaalde vorm | kennismaken, landen en talen, getallen, klokkijken |
| 2 | Hoofdstuk 2 | tijdsbepaling in het fundament (subjekt op plaats 3), meervoud substantiv, imperativ, modale hulpwerkwoorden (*kan, vill, får, måste*) | dagritme, weekdagen |
| 3 | Hoofdstuk 3 | frequentie-adverbia (*ofta, aldrig, ibland, brukar*), *gilla / tycka om (att)*, subjekt- vs objektvormen | hobby's, vrije tijd |
| 4 | Hoofdstuk 4 | preteritum (zwak en sterk), subjekt-/objekt-/possessieve voornaamwoorden | familie, verleden week |
| 5 | Hoofdstuk 5 | perfekt + supinum (*har*), keuze preteritum ↔ perfekt (dåtidsadverb), positions- vs destinationsadverb (*hemma/hem*, *där/dit*), *än* + subjektvorm | ervaringen, uitjes |
| 6 | Hoofdstuk 6 | tijdsuitdrukkingen (*om, för … sedan, i, på*), vervoer met *åka/ta/gå* | reizen, OV, geld |
| 7 | Hoofdstuk 7 | nevenschikkende voegwoorden (*och, men, så, för, eller*), *Det gör jag också / Inte jag heller* | zomer, natuur, regels en verboden |
| 8 | Hoofdstuk 8 | *tycka / tro / tänka*, vertellen in de verleden tijd, då- vs nutidsadverb | eten, feesten (kräftskiva) |
| 9 | Hoofdstuk 9 | stamtijden-tabel (infinitiv, presens, preteritum, supinum), indirecte rede | telefoneren, digitaal |
| 10 | Hoofdstuk 10 | onderschikkende voegwoorden + bijzinvolgorde (*inte* vóór het werkwoord), *sin/sitt/sina*, plaatsvoorzetsels | wonen, interieur |
| 11 | Hoofdstuk 11 | positionsverb (*ligger/sitter/står/går och …*) | gezondheid, bij de dokter |
| 12 | Hoofdstuk 12 | adjektiv: onbepaald / bepaald / meervoud (*en fin bok – den fina boken – fina böcker*), *liten/lilla/små*, vergelijking | Kerst, Lucia |

Elk hoofdstuk krijgt:
1. **Grammatica-kaart** – korte eigen uitleg met voorbeelden (wordt ook als tip-bron gebruikt).
2. **Oefeningen** – 8–15 sets, per grammaticaonderwerp opklimmend in moeilijkheid.
3. **Herhaling** – gemengde set met stof uit dit en eerdere hoofdstukken (vanaf hoofdstuk 2).
4. **Woordenschat** – flitskaarten en oefeningen NL ↔ SV, inclusief *en/ett* en meervoud.

---

## 2. Vraagtypen

### Basistypen

| Type | Beschrijving | Nakijken |
|------|--------------|----------|
| `mc` | meerkeuze, één antwoord goed | exact |
| `multi` | meerkeuze, meerdere antwoorden goed | verzameling vergelijken, deelscore |
| `gap` | open invulveld in een zin (`Igår ___ (äta) jag fisk.`) | normaliseren + lijst van goede antwoorden |
| `gap-select` | invulplek met keuzelijst | exact |
| `translate` | vrije vertaling NL → SV | meerdere goede varianten + woordvolgorde-analyse |
| `order` | woorden in de goede volgorde slepen/klikken (V2, bijzin) | volgorde vergelijken, meerdere volgordes toegestaan |
| `match` | paren koppelen (woord ↔ vertaling, vraag ↔ antwoord) | per paar |
| `table` | tabel invullen (vervoeging, bepaalde vorm, stamtijden) | per cel |
| `truefalse` | R/F bij een (eigen) tekst | exact |
| `clock` | klokje tonen → tijd in het Zweeds typen (of omgekeerd) | genereerbaar, meerdere vormen goed |
| `dialogue` | zinnen van een dialoog in de goede volgorde zetten | volgorde |
| `free` | eigen antwoord (schrijfopdracht) | alleen lichte controles + modelantwoord ter zelfcontrole |

### Gecombineerde vragen (meerkeuze + open)

Een vraag kan uit meerdere **stappen** bestaan, waarbij een volgende stap pas opengaat
als de vorige goed is, of tegelijk worden getoond:

- **R/F + verbetering**: kies *Fel* (meerkeuze) en schrijf de juiste zin (open).
- **Kies + vorm**: kies *en* of *ett* (mc) en typ de bepaalde vorm (open): `ett hus → huset`.
- **Diagnose + oplossing**: welk woord staat verkeerd in deze zin? (mc) → schrijf de zin goed (open).
- **Tijd kiezen + vervoegen**: preteritum of perfekt? (mc, met *igår* / *någon gång*) → vul de vorm in (open).
- **Regel herkennen**: wat is de regel? (mc) → pas toe in drie nieuwe zinnen (gap).

Daarnaast wordt per set de **mix** gevarieerd: een set kan bestaan uit alleen mc,
alleen open, of afwisselend; in *Herhaling* en *Toets*-modus worden vraagtypen en
items willekeurig gemengd en kan dezelfde stof eerst als mc en later als open vraag
terugkomen (van herkennen naar zelf produceren).

---

## 3. Automatisch nakijken en tips

### Normalisatie (voor elke open vraag)
- hoofdletters, dubbele spaties, slotpunt en typografische aanhalingstekens negeren
  (instelbaar per vraag, bijv. hoofdletter aan zinsbegin wel controleren);
- meerdere goede antwoorden (`answers: ["sa", "sade"]`) en optionele delen
  (`Jag mår bra[, tack]`).

### Foutanalyse, van specifiek naar algemeen
1. **Verwachte fouten per vraag** – auteur legt bekende fouten vast:
   ```yaml
   feedback:
     - match: "ätade"
       tip: "äta is een sterk werkwoord: de verleden tijd heeft klinkerwisseling (ä → å)."
   ```
2. **Ingebouwde diagnosefuncties** (algemeen, voor alle vragen):
   - *å/ä/ö-check*: alleen verschil in diakritische tekens → "Let op: **ä**, niet a." 
   - *spelfout*: Levenshtein-afstand 1 bij een woord van ≥ 5 letters → "Bijna goed, controleer de spelling."
   - *woordvolgorde*: zelfde woorden, andere volgorde → tip over V2 / inversie / bijzin
     (welke tip hangt af van het `topic` van de vraag).
   - *en/ett*: verkeerd lidwoord of uitgang (-en/-et, -n/-t) → tip over het geslacht.
   - *werkwoordsgroep*: -ar/-er/-r-uitgang verwisseld → tip over de uitgang.
   - *inte-plaats*: *inte* op de verkeerde plek in hoofd- of bijzin.
3. **Algemene tip** uit de grammatica-kaart van het onderwerp (`topic`), met link ernaar.

### Escalerende hulp
1e fout → korte tip · 2e fout → regel + voorbeeld + link naar grammatica-kaart ·
3e fout → knop "Toon antwoord" (vraag telt als fout, komt later terug in *Herhaling*).

### Open schrijfopdrachten (`free`)
Worden niet "goed/fout" beoordeeld. Wel lichte controles (bijv. staat er een werkwoord
op plaats 2, komt het gevraagde woord voor, minimale lengte) en een modelantwoord ter
vergelijking.

---

## 4. Techniek

- **Statische site**, geen server: HTML + CSS + JavaScript (ES-modules), zonder
  build-stap of met een lichte bundler (Vite). Advies: **vanilla JS + Vite**, zodat de
  site snel is en de oefeningen als losse databestanden onderhouden kunnen worden.
- **Inhoud in YAML/JSON** per hoofdstuk, los van de code. Nieuwe oefeningen toevoegen
  = een bestand bewerken, geen code.
- **Voortgang** in `localStorage` (per vraag: aantal pogingen, goed/fout, datum) →
  overzicht per hoofdstuk en een "zwakke punten"-herhaalset. Werkt ook zonder opslag.
- **Invoerhulp**: knoppen voor å, ä, ö (en sneltoetsen, bijv. `a` + `:`).
- **Taal van de interface**: Nederlands; opdrachten in het Nederlands, oefenstof in het Zweeds.
- **Toegankelijk en mobiel**: werkt op telefoon, met toetsenbord te bedienen, licht/donker thema.
- **Publicatie**: GitHub Actions bouwt de site en zet hem op GitHub Pages bij elke push naar `main`.

### Mappenstructuur

```
/
├─ index.html                 # startpagina: hoofdstukkenoverzicht + voortgang
├─ src/
│  ├─ main.js                 # routing (#/kapitel/3/ovning/2)
│  ├─ render/                 # één renderer per vraagtype
│  ├─ check/
│  │  ├─ normalize.js
│  │  ├─ diagnose.js          # å/ä/ö, spelling, woordvolgorde, en/ett, inte, ...
│  │  └─ grade.js
│  ├─ progress.js             # localStorage
│  └─ styles.css
├─ content/
│  ├─ grammar/                # grammatica-kaarten (markdown)
│  ├─ 00-uttal.yaml
│  ├─ 01-januari.yaml
│  └─ … 12-december.yaml
├─ schema/exercise.schema.json
├─ tests/                     # unit-tests nakijklogica + inhoudsvalidatie + e2e
└─ .github/workflows/pages.yml
```

### Voorbeeld van een oefening

```yaml
id: 04-preteritum-sterk
chapter: 4
section: oefeningen
topic: preteritum
title: Sterke werkwoorden in de verleden tijd
instruction: Vul de verleden tijd in.
mode: mixed               # mc, open of mixed
items:
  - type: gap
    text: "Igår ___ (äta) vi fisk på en restaurang."
    answers: ["åt"]
    feedback:
      - match: "ätade"
        tip: "äta is sterk: ä wordt å, zonder uitgang."
  - type: steps            # gecombineerde vraag
    steps:
      - type: mc
        prompt: "Welke tijd past bij 'för en vecka sedan'?"
        options: ["preteritum", "perfekt"]
        answer: 0
        tip: "Een afgesloten moment in het verleden vraagt om preteritum."
      - type: gap
        text: "För en vecka sedan ___ (skriva) jag ett brev."
        answers: ["skrev"]
```

---

## 5. Kwaliteitsborging

- **JSON-schema** voor alle inhoudsbestanden; CI faalt bij een fout in een oefening.
- **Unit-tests** voor normalisatie en elke diagnosefunctie (bijv. "ata" ↔ "åt", "kommer jag" ↔ "jag kommer").
- **Inhoudstest**: elk goed antwoord moet door de eigen nakijker als goed worden gerekend; elke
  `feedback.match` moet als fout worden gerekend.
- **E2E-rooktest** (Playwright): elk hoofdstuk laadt, één vraag per type goed en fout beantwoorden.
- Taalcontrole van de Zweedse oefenstof door een moedertaalspreker/docent waar mogelijk.

---

## 6. Fasering

| Fase | Inhoud | Resultaat |
|------|--------|-----------|
| 1. Fundament | projectopzet, Vite, Pages-workflow, routing, schema, vraagtypen `mc`, `gap`, `gap-select`, normalisatie | lege site live op GitHub Pages |
| 2. Nakijken & tips | diagnosefuncties, escalerende hulp, `steps` (gecombineerde vragen), unit-tests | nakijkmotor compleet |
| 3. Pilot hoofdstuk 1 | grammatica-kaarten + oefeningen + woordenschat hoofdstuk 1; typen `translate`, `order`, `table`, `clock`, `match`, `truefalse` | één volledig hoofdstuk om te testen |
| 4. Evaluatie | zelf/met medecursisten uitproberen, tips en vraagvormen bijstellen | vastgesteld sjabloon |
| 5. Hoofdstuk 0 en 2–6 | inhoud schrijven volgens sjabloon, *Herhaling*-sets, `dialogue`, `free` | eerste helft van het jaar |
| 6. Hoofdstuk 7–12 | idem | volledige cursus |
| 7. Extra's | "zwakke punten"-herhaling, toetsmodus | afronding |

---

## 7. Beslissingen

1. De site is **openbaar** → alle oefenstof is zelf geschreven.
2. **Vanilla JS + Vite**.
3. **Geen** voorleesfunctie (TTS).
4. De Zweedse oefenstof wordt door Claude gereviewd bij het schrijven van elk hoofdstuk.
5. Hoofdstukken zijn **genummerd 0–12** met de hoofdonderwerpen als ondertitel.

## 8. Stand van zaken

- [x] Fase 1: fundament, routing, Pages-workflow
- [x] Fase 2: nakijkmotor met foutanalyse, oplopende hulp, samengestelde vragen, tests
- [x] Fase 3: hoofdstuk 0 (uitspraak) en hoofdstuk 1 (kennismaken), alle vraagtypen
- [ ] Fase 4: evaluatie met gebruiker
- [x] Hoofdstuk 2 (dagritme), met de eerste herhalingsset
- [x] Fase 5–6: hoofdstuk 3–12, elk met herhaling; hoofdstuk 12 met eindherhaling
- [x] Voortgang per vraag, verdergaan, foutenlijst, export/import
- [x] Fase 7: dagelijkse herhaling, werkwoordtrainer, zoek de fout, toetsmodus, flitskaarten, snelle rondes

## Uitbreiding: meer woorden en oefeningen (plan van november 2026)

Uitgangspunt (gemeten): de woordenlijsten zijn klein (A1–A2: 284 woorden, B1–B2: 348) en
oefeningen hebben 4–5 vragen, waardoor herhalen steeds dezelfde zinnen oplevert.
Dit plan geldt voor beide sites; de code is gedeeld (zie README, „Twee sites, één code”).

**Taalreview.** Elke stap met nieuwe of gewijzigde Zweedse stof krijgt een aparte reviewronde
op Zweedse taal en grammatica, vóórdat de stof wordt gepubliceerd. De reviewer is iemand (of
een aparte AI-sessie) die de stof leest zonder het werk van de schrijver te kennen. Die
controleert:
- spelling, woordgeslacht (en/ett), bepaalde vorm, meervoud en werkwoordsvormen;
- grammatica en woordvolgorde van voorbeeldzinnen en antwoorden;
- of de Nederlandse vertaling klopt en eenduidig is (geen tweede lezing die ook goed is);
- of woorden en zinnen passen bij het niveau (A1–A2 of B1–B2) en idiomatisch Zweeds zijn;
- of alle goede antwoorden worden goedgekeurd en de foutregels (`feedback`) terecht zijn.
Bevindingen worden verwerkt of met reden afgewezen; twijfelgevallen gaan naar de eigenaar.
Daarna leest de eigenaar steekproefsgewijs mee. Pas dan wordt er gepubliceerd.

- [x] **Fase 1 – techniek**: rondes van 15 woorden bij lange woordenlijsten (eerst nieuwe en
      foute woorden; voortgang blijft bewaard); per woord optioneel meervoud (`pl`) en een
      voorbeeldzin (`ex`, `exNl`) met automatisch gemaakte oefeningen; controle op dubbele
      woorden; `npm run vocab-report`.
- [x] **Proef**: hoofdstuk 2 naar 63 woorden → **taalreview** (twee rondes) → goedgekeurd door de eigenaar.
- [x] **Fase 2**: hoofdstuk 1–12 naar ±60 woorden per hoofdstuk, per hoofdstuk een **taalreview**.
      Hoofdstuk 1 en 3–12 naar 55–64 woorden (715 in totaal) → **taalreview** (twee rondes) →
      goedgekeurd door de eigenaar.
- [x] **Fase 3**: hoofdstuk 13–30 naar ±60 woorden (meer uitdrukkingen en partikelwerkwoorden),
      per hoofdstuk een **taalreview**.
      Hoofdstuk 13–30 naar 58–62 woorden (1083 in totaal) → **taalreview** (twee rondes) →
      goedgekeurd door de eigenaar.
- [x] **Fase 4**: kernoefeningen naar 8–10 vragen, luistervragen in de A1–A2-site,
      ±80 werkwoorden erbij in de werkwoordtrainer; per hoofdstuk of per lijst een **taalreview**.
      Gedaan en na **taalreview** verwerkt: 82 werkwoorden erbij (146 in totaal); alle kernoefeningen
      (grammatica, zonder lezen/luisteren/schrijven/herhaling) hebben nu minstens 8 vragen
      (±420 vragen erbij); in hoofdstuk 0–12 een onderdeel Luisteren met een meerkeuze-
      luisteroefening en een dictee (130 vragen).
- [ ] **Fase 5**: aan de hand van GoatCounter kijken welke oefeningen gebruikt worden en vaak
      fout gaan, en daar verder uitbreiden (met **taalreview** voor nieuwe stof).
      `npm run stats` maakt het overzicht (README, „Statistieken”). Eerste meting (19 november):
      nog maar ±200 antwoorden, vooral uit tests. Wat er is, wijst op de sje-/tje-klank en de
      zachte klinkers (hoofdstuk 0: tips verduidelijkt, vragen erbij) en op de correctievraag in
      lasa-annons (meer goede antwoorden). Op de B1–B2-site meldt Chrome vaak geen Zweedse stem.
      Over een paar weken opnieuw meten, met `--min 5`.

## Verbeterplan didactiek (plan van november 2026)

Uitgangspunt: een didactische review van beide sites. Sterk zijn de directe, gerichte feedback,
de herhaling met intervallen en de uitleg die Nederlands en Zweeds vergelijkt. Zwak: bijna 90% van
de vragen gaat over vorm, vertalen of herkennen, vrij schrijven is ±1% en spreken ontbreekt. Op B2
toetst de site vooral grammatica, en de eindtoetsen beloven meer dan ze meten.
Dit plan geldt voor beide sites. Elke stap met nieuwe of gewijzigde Zweedse stof krijgt een
**taalreview** (zie hierboven); gedeelde code gaat naar beide repo's (`npm run check-sync`).
Elke fase eindigt met een meetmoment; pas daarna begint de volgende fase.
**Geen AI en geen externe diensten**: alles werkt in de browser en offline, er gaan geen teksten of
opnames naar een server (alleen de bestaande anonieme tellingen via GoatCounter blijven).
**De app kijkt na, niet de leerling**: geen zelfbeoordeling; wat de app niet kan nakijken, is
oefenen zonder oordeel.
**Buiten het plan: spreken en uitspraak.** Spraakherkenning is niet goed genoeg om uitspraak na te
kijken en werkt in de browser alleen via een externe dienst, zelf terugluisteren vraagt
zelfbeoordeling, en er is geen moedertaalspreker voor echte opnames. Spreken en de computerstem
blijven daarom open punten; fase 1 meldt de computerstem, en de handleiding kan voor spreken een
docent of taalpartner aanraden.

- [x] **Fase 1 – snelle verbeteringen**
  - [x] Eindtoetsen H24 en H30 herformuleren: „Herhaling B1-/B2-grammatica”, met wat 16/20
        betekent en dat B1/B2 ook lezen, luisteren, spreken en schrijven omvat. Id's blijven gelijk.
  - [x] Per hoofdstuk 2–3 kan-doen-uitspraken (ERK) in een veld `canDo`, elk met de onderwerpen
        (`topics`) waar hij op rust, met validatietest.
  - [x] Automatisch afvinken: ✓ als de vragen van die onderwerpen grotendeels (±80%) in doos 3 of
        hoger staan; berekend in `progress.js` uit de bestaande voortgang. Telling
        `kandoen/<hoofdstuk>/<nr>/behaald` bij de eerste ✓.
  - [x] Bij luisteroefeningen melden dat het een computerstem is.
      Gedaan in november 2026: 2–4 uitspraken per hoofdstuk (31 hoofdstukken), afgevinkt bij 80% in
      doos 3 of hoger (`canDoStatus` in `src/progress.js`), getoond op de hoofdstukpagina en bij een
      nieuw behaald doel op het eindscherm.
- [x] **Fase 1b – opbouw, volgorde en moeilijkheid** (vóór fase 2). Analyse van november 2026:
      geen grammatica uit latere hoofdstukken (goed), nieuwe woorden gelijkmatig (55–64), zinnen in
      leesteksten worden langer (goed). Maar: antwoordzinnen blijven 4–8 woorden van H1 tot H30,
      leesteksten groeien nauwelijks (A 61–94, B 117–170 woorden; B-plan noemt 300–600), het aantal
      vragen daalt juist (A 150 → 67, B 91 → 50), Zoek de fout staat in H14–H30 ná de herhaling,
      herkennen komt in 15 oefeningen na zelf maken, en de woordenschat staat steeds onderaan.
  - [x] Vaste volgorde. A-site: woorden (eerste ronde) → per onderwerp herkennen → vorm → kiezen →
        gemengd (vertalen, zoek de fout) → gebruiken (lezen, dialoog/taak, geleid schrijven) →
        luisteren → herhaling → overige woordenoefeningen. B-site: Läsa → Ord (met eerste
        woordenronde) → Grammatik (herkennen → maken → kiezen) → Zoek de fout → Lyssna → Praktiskt →
        Skriva → Herhaling → overige woordenoefeningen.
  - [x] Verplaatsen: Zoek de fout vóór Lyssna (H13–H30); herkennen vóór maken in modaal-vorm (H2),
        var-vart (H5), seizoenen (H6), biff-kiezen (H10), ligt-of-staat (H11), mer-mest (H12),
        passiv-of-niet en som-weglaten (H13), vara-of-bli (H14), villkor-sorteren en rad-kiezen
        (H18), nagon-goed-fout (H20), samband-sorteren (H22), hade-weg en bekend-nieuw (H29), per
        geval nagekeken; lezen/dialoog/zoek de fout op vaste plek in H1, H4, H6, H9; in H10
        „För att of eftersom?” direct na „Welk voegwoord?”.
  - [x] Eerste woordenoefening vooraan (`build.js`); „Begin/Verder” slaat een oefening in rondes over
        zodra één ronde gedaan is.
  - [x] Test: onderdelen in de vaste volgorde, geen topic uit een later hoofdstuk.
  - [x] Moeilijkheidslijn (zaagtand: binnen een hoofdstuk oplopend, oudere stof in de herhaling op
        het niveau van toen; getallen zijn een eigen richtlijn, A1/A2-grens bij H6/H7 een aanname):
        H1–H6 (A1) tekst 70–120 woorden, antwoordzin 4–6, ≥ 80 vragen; H7–H12 (A2) 120–200, 6–9,
        ≥ 80; H13–H24 (B1) 200–350, 8–12, ≥ 70; H25–H30 (B2) 350–500, 10–15, ≥ 70.
  - [x] `npm run difficulty-report` (zoals vocab-report) om de lijn te bewaken; aanvullen waar een
        hoofdstuk eronder zit (vooral H9–H12 en H16–H30); B-herhalingssets naar 10 vragen; taalreview
        controleert ook „alleen stof uit dit en eerdere hoofdstukken” en de lijn.
      Gedaan in november 2026: alle hoofdstukken in de vaste volgorde (test in `tests/content.test.js`);
      17 oefeningen verplaatst (herkennen vóór maken, onderwerpen bij elkaar); „Mag som weg?” (H13) en
      „Mag hade weg?” (H29) bleven staan: dat zijn keuzes die op de vorm volgen; „Wat betekent het?” vooraan, „Verder” slaat een woordenoefening
      over na één ronde; de test vond dat H1 al het meervoud vroeg (uitleg pas in H2): de meervoudsoefening
      verschijnt nu pas vanaf het hoofdstuk met die uitleg; B-herhalingssets van 6 naar 10 vragen
      (60 nieuwe vragen, na taalreview). Aanvullen tot de lijn (meer vragen, langere zinnen en teksten)
      loopt mee in fase 2 en 3; `npm run difficulty-report` laat zien waar.
- [x] **Fase 2 – keuzeoefeningen**: per grammaticaonderwerp één oefening waarin de leerling eerst
      kiest welke vorm past en die dan maakt (8–10 vragen, `shuffle`, tips die de keuze uitleggen,
      één `steps`-vraag met „Waarom?”). Onderwerpen: inversie (H1), subjekt/objekt/possessief (H4),
      preteritum/perfekt en hemma/hem (H5), om/för … sedan/i (H6), tycka/tro/tänka (H8),
      sin/hans (H10), ligger/står/sitter (H11), adjectiefvormen (H12), där/dit/vars (H15),
      ska/kommer att/tänker (H17), någon/ingen (H20).
      Gedaan in november 2026: 12 oefeningen „… Kies en vertaal/maak” (108 vragen), telkens eerst
      een keuze (mc) en dan zelf maken (vertalen of omzetten), met één „Waarom?”-stap per oefening;
      inversie, voornaamwoorden (H3/H4), tijd en plaats/richting (H5) enz. als in de lijst hierboven.
      Taalreview door aparte reviewers: vooral ontbrekende goede varianten, dubbele zinnen en woorden
      uit latere hoofdstukken verbeterd. Let op: feedbackregels worden vóór het verplaatsen van een
      tijdsbepaling getoetst; een `contains`-regel mag dus geen goede volgorde-variant raken.
      `difficulty-report` werkt nu ook op Windows.
- [x] **Fase 3 – schrijven, lezen en taken**
  - [x] Geleid schrijven: elke schrijfopdracht voorafgaan door 3–5 stappen die de app nakijkt
        (openingszin kiezen, bijzin afmaken, tegenargument ordenen, signaalwoord kiezen). De vrije
        tekst blijft als laatste, optionele stap met voorbeeldantwoord, zonder vinkjes of oordeel;
        de `require`-controle heet voortaan „Hulp”. Stappen voor alle 30 schrijfopdrachten.
        Gedaan (november 2026): 124 stappen vóór de 30 schrijfopdrachten (4–5 per opdracht); de vrije tekst
        is het laatste item, zonder oordeel, met „Klaar”, „Toon voorbeeld” en de lijst „Hulp”
        (`checkWriting` in `src/validate.js`: 3–5 stappen, `free` als laatste).
  - [x] Langere leesteksten volgens de moeilijkheidslijn: A-site de bestaande tekst per hoofdstuk
        (nu 61–94 woorden, 6 vragen) met 8–10 vragen; B-site naar 200–350 (B1) en 350–500 (B2).
        Vaste personages, alleen stof uit dit en eerdere hoofdstukken. Eerst H1–H4 en H13–H16, dan meten.
        Eerste ronde gedaan (november 2026): H1–H4 naar 98–113 woorden en 9–10 vragen, H13–H16 naar
        211–226 woorden en 10 vragen. Tweede ronde (zonder tussentijdse meting, op verzoek van de
        eigenaar): H5–H12 naar 104–151 woorden, H17–H24 naar 220–280, H25–H30 naar 382–409, elk met 10
        vragen; daarbij langere productievragen tot alle hoofdstukken op de moeilijkheidslijn zitten
        (`difficulty-report`: 0 hoofdstukken eronder). Nakijker: een tijdsbepaling wordt alleen nog
        binnen een eenvoudige hoofdzin verplaatst, en de tip bij `fixedOrder` volgt de opdracht.
  - [x] Taken met een doel (situatie + dialoog met keuzes), te beginnen met H2, H6, H11, H17, H22.
        Gedaan (november 2026): vijf taken van 6–7 beurten (sportafspraak, jeugdherberg, 112 bellen,
        apotheek, geschrapte trein); op de A-site vlak vóór „Zoek de fout” (volgorde-test).
  - [x] H25–H30: een betoog in stappen bouwen (standpunt, argumenten, tegenargument, conclusie),
        elke stap nagekeken; de vrije versie is optioneel.
        Gedaan (november 2026): oefening `skriva-betoog` in H25–H30 met vier stappen (standpunt,
        argumenten, tegenargument + weerlegging, conclusie), 9–10 nagekeken vragen; H27 zonder vrije tekst.
- [ ] **Meten na elke fase** (`npm run stats -- --min 5`): behaalde kan-doen-doelen (fase 1);
      `difficulty-report` en fout/bekeken per hoofdstuk (fase 1b);
      fout/bekeken bij keuzeoefeningen en aandeel vragen in doos 4+ (fase 2); afgemaakte geleide
      stappen, vrije teksten en leesteksten (fase 3).
      Geen gebruikerstest: er is geen vaste groep leerlingen (besloten november 2026); meten gaat alleen
      via de tellingen.

Geen open vragen meer: een testgroep is er niet.

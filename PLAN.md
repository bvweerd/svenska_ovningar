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
- [ ] **Fase 3**: hoofdstuk 13–30 naar ±60 woorden (meer uitdrukkingen en partikelwerkwoorden),
      per hoofdstuk een **taalreview**.
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

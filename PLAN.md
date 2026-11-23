# Plan: Svenska övningar (A1–A2 en B1–B2)

Statische, interactieve oefensite Zweeds voor Nederlandstaligen, in twee repo's met gedeelde code:
[svenska_ovningar](https://github.com/bvweerd/svenska_ovningar) (A1–A2, hoofdstuk 0–12) en
[svenska_ovningar_b](https://github.com/bvweerd/svenska_ovningar_b) (B1–B2, hoofdstuk 13–30).
Dit is het enige planbestand, ook voor werk aan de B-site. Hoe het werkt (vraagtypen, nakijken,
id's, statistieken, publicatie) staat in de README van elke repo; werkafspraken in `CLAUDE.md`.

## Uitgangspunt: auteursrecht

De site is openbaar. De antwoordenmodellen van de cursus (© Boom 2025) behouden het recht op tekst- en
datamining uitdrukkelijk voor, dus **alle oefenstof is zelf geschreven**: teksten, zinnen, dialogen,
woordenlijsten, hoofdstuktitels en uitleg. Niets uit een lesmethode overnemen.
Wel mag het **stramien** een gangbare cursus volgen: de volgorde van grammatica en thema's en de soorten
oefeningen. Hoofdstukken zijn genummerd (0–30), niet naar de boekindeling; wie het boek heeft, kan het
ernaast gebruiken.

## De twee sites

**A1–A2** (`svenska_ovningar`): per hoofdstuk woorden, grammatica, lezen, dialoog/taak, schrijven,
luisteren, herhaling (vanaf H2); H12 met eindherhaling.

| # | Grammatica | Thema |
|---|---|---|
| 0 | sj-/tj-klank, harde/zachte klinkers, klemtoon, spreektaalvormen | uitspraak |
| 1 | presens, V2 en inversie, persoonlijke vnw., ja/nee-vragen, *inte*, *en/ett* + bepaalde vorm | kennismaken, landen, getallen, klok |
| 2 | tijdsbepaling vooraan, meervoud, imperativ, modale hulpwerkwoorden | dagritme, weekdagen |
| 3 | frequentie-adverbia, *gilla / tycka om*, subjekt- vs objektvormen | hobby's, vrije tijd |
| 4 | preteritum (zwak, sterk), subjekt/objekt/possessief | familie, verleden week |
| 5 | perfekt + supinum, preteritum ↔ perfekt, *hemma/hem*, *där/dit* | ervaringen, uitjes |
| 6 | tijdsuitdrukkingen (*om, för … sedan, i, på*), *åka/ta/gå* | reizen, OV, geld |
| 7 | nevenschikkende voegwoorden, *Det gör jag också / Inte jag heller* | zomer, natuur, regels |
| 8 | *tycka / tro / tänka*, vertellen in de verleden tijd | eten, feesten |
| 9 | stamtijden, indirecte rede | telefoneren, digitaal |
| 10 | onderschikkende voegwoorden + bijzinvolgorde, *sin/sitt/sina*, plaatsvoorzetsels | wonen, interieur |
| 11 | positionsverb (*ligger/sitter/står*) | gezondheid, dokter |
| 12 | adjectief (onbepaald/bepaald/meervoud), *liten/lilla/små*, vergelijking | Kerst, Lucia |

**B1–B2** (`svenska_ovningar_b`): per hoofdstuk een thema, praktisch doel en schrijfdoel (`content/index.yaml`);
onderdelen Läsa, Ord, Grammatik, Zoek de fout, Lyssna, Praktiskt, Skriva, Herhaling (vanaf H14).
Zweeds wordt voorgelezen met de spraakfunctie van de browser.

| # | Niv. | Thema | Grammatica |
|---|---|---|---|
| 13 | B1 | werk en solliciteren | passief met -s, som-zinnen, formele mail |
| 14 | B1 | opleiding | passief met bli, deelwoorden |
| 15 | B1 | wonen en buurt | partikelwerkwoorden (1), *där/dit/vars* |
| 16 | B1 | instanties en regels | werkwoorden op -s, formeel taalgebruik |
| 17 | B1 | gezondheid en zorg | *ska / kommer att / tänker*, voorzetsels bij werkwoorden |
| 18 | B1 | relaties | *skulle*, voorwaarde en wens |
| 19 | B1 | media en nieuws | indirecte rede, *vem som* |
| 20 | B1 | natuur en milieu | *någon/ingen*, *man/en/ens* |
| 21 | B1 | cultuur en tradities | bepaalde vorm zonder lidwoord, samenstellingen |
| 22 | B1 | reizen en verkeer | partikelwerkwoorden (2), verbindingswoorden |
| 23 | B1 | eten en consumeren | woordvorming, vergelijken |
| 24 | B1 | samenleving | mening geven, *trots att / även om / medan*; herhaling B1-grammatica |
| 25 | B2 | werk en economie | nominalisatie |
| 26 | B2 | wetenschap | deelwoordconstructies, lange naamwoordgroepen |
| 27 | B2 | politiek en debat | betoog, *det är … som* |
| 28 | B2 | taal en identiteit | register, uitdrukkingen |
| 29 | B2 | geschiedenis | lange bijzinnen, keuze van het eerste zinsdeel |
| 30 | B2 | toekomst | herhaling; herhaling B2-grammatica |

## Spelregels (vastgesteld met de eigenaar)

- **Geen AI en geen externe diensten.** Alles werkt offline in de browser; er gaan geen teksten of opnames
  naar een server. Alleen de anonieme tellingen via GoatCounter blijven.
- **De app kijkt na, niet de leerling.** Geen zelfbeoordeling; wat de app niet kan nakijken (vrije tekst),
  is oefenen zonder oordeel, met hulp en voorbeeldantwoord.
- **Geen spreken en uitspraak nakijken.** Spraakherkenning is daarvoor niet goed genoeg en werkt in de
  browser alleen via een externe dienst; terugluisteren vraagt zelfbeoordeling; er is geen
  moedertaalspreker voor echte opnames. Luisteren gebruikt de computerstem (en meldt dat).
- **Taalreview** voor elke nieuwe of gewijzigde Zweedse zin, vóór publicatie, door iemand (of een aparte
  sessie) die het werk van de schrijver niet kent: spelling, en/ett, vormen, woordvolgorde, eenduidige
  Nederlandse vertaling, niveau en idiomatisch Zweeds, alle goede antwoorden goedgekeurd en foutregels
  terecht, alleen stof uit dit en eerdere hoofdstukken, passend in de moeilijkheidslijn. Bevindingen
  verwerken of met reden afwijzen; twijfel → eigenaar, die steekproefsgewijs meeleest.
- Op B1/B2 vooral opdrachten met een vast antwoord; vrij schrijven als laatste, vrijblijvende stap.
- **Voortgang hangt aan id's**: nooit een vraag-id, oefening-id of hoofdstuknummer veranderen.

## Moeilijkheidslijn en volgorde

Zaagtand: binnen een hoofdstuk oplopend; oudere stof komt in de herhaling terug op het niveau van toen.
De getallen zijn een eigen richtlijn; de A1/A2-grens bij H6/H7 is een aanname.
`npm run difficulty-report` bewaakt de lijn (`!` = eronder; hoe er gemeten wordt: `CLAUDE.md`).

| Hoofdstuk | Niveau | Leestekst (woorden) | Antwoordzin (woorden) | Vragen |
|---|---|---|---|---|
| H1–H6 | A1 | 70–120 | 4–6 | ≥ 80 |
| H7–H12 | A2 | 120–200 | 6–9 | ≥ 80 |
| H13–H24 | B1 | 200–350 | 8–12 | ≥ 70 |
| H25–H30 | B2 | 350–500 | 10–15 | ≥ 70 |

Vaste volgorde per hoofdstuk (`npm test` controleert hem; details in README, „Volgorde in een hoofdstuk”):
- A-site: woorden → per onderwerp herkennen → vorm → kiezen → gemengd (vertalen, zoek de fout) → lezen →
  dialoog en taak → schrijven → luisteren → herhaling → overige woordenschat.
- B-site: Läsa → Ord → Grammatik (herkennen → maken → kiezen) → Zoek de fout → Lyssna → Praktiskt →
  Skriva → Herhaling → overige woordenschat.

Geen grammatica uit een later hoofdstuk (ook getest).

## Gedaan

Alles in november 2026.
- **Opbouw A-site**: fundament (Vite, vanilla JS, YAML-inhoud, Pages-workflow), nakijkmotor met
  foutanalyse en oplopende hulp, hoofdstuk 0–12 met herhaling, voortgang, dagelijkse herhaling,
  werkwoordtrainer, toetsen, flitskaarten, snelle rondes, PWA.
- **Opbouw B-site**: niveaus, luisteren met browserstem, `sort`/`transform`, hoofdstuk 13–30 met
  eindherhalingen; werkwoordtrainer met 45 partikelwerkwoorden.
- **Uitbreiding woorden en oefeningen**: rondes van 15 woorden, meervoud en voorbeeldzin per woord,
  `npm run vocab-report`; woordenlijsten naar ±60 per hoofdstuk (H1–H12: 715, H13–H30: 1083);
  82 werkwoorden erbij (146); kernoefeningen naar ≥ 8 vragen (±420 erbij); Luisteren in H0–H12
  (130 vragen); `npm run stats`. Alles na taalreview en goedkeuring door de eigenaar.
- **Didactiek fase 1**: kan-doen-uitspraken (2–4 per hoofdstuk, door de app afgevinkt bij 80% in doos 3+),
  eindtoetsen H24/H30 eerlijk benoemd als „Herhaling B1-/B2-grammatica”, melding computerstem.
- **Fase 1b**: vaste volgorde per hoofdstuk (17 oefeningen verplaatst), moeilijkheidslijn,
  `npm run difficulty-report`, B-herhalingssets naar 10 vragen.
- **Fase 2**: 12 keuzeoefeningen „Kies en vertaal/maak” (108 vragen) met een „Waarom?”-stap.
- **Fase 3**: geleid schrijven (124 nagekeken stappen vóór de 30 schrijfopdrachten), langere leesteksten
  tot op de lijn in alle hoofdstukken (`difficulty-report`: 0 eronder), vijf doeltaken (H2, H6, H11,
  H17, H22), betoog in stappen in H25–H30.
- **Nakijker-fix**: een tijdsbepaling wordt alleen binnen een enkelvoudige hoofdzin verplaatst, ook bij
  samengestelde onderwerpen (*Fleur och Bram*); de tip bij `fixedOrder` volgt de opdracht.
- **Twijfelronde**: open taalreview-twijfels in H1–H30 opgelost (meer goede antwoorden, zachtere tips,
  geen stof uit later hoofdstuk); doeltaken met `kind: taak` op vaste plek.
- **Voortgang op meer apparaten**: importeren voegt samen (`mergeStates`); synchroniseren met een synccode
  via de Worker en Cloudflare D1 (opt-in, besloten door de eigenaar). Nog te doen: D1 aanmaken, Worker
  deployen, `SYNC_URL` zetten (`worker/README.md`, „Synchronisatie”).

- **Architectuur** (`ARCHITECTURE.md`, stap 1–5, branch `dev`): code in lagen (core, platform, app, ui)
  met bewakingstest, register van vraagtypen, routetabel, pure voortgangsregels met store, rooktest in
  de browser (`npm run smoke`, ook in CI). Gedrag, opslag en antwoordhashes ongewijzigd.

- **Issues november 2026** (branch `dev`): #11/#12 hoofdletters bij tegels en hints die het antwoord
  verklapten (knop Hint); #10 code alle rechten voorbehouden; #7 prestaties (badges); #8 hand-outs A4 per
  uitlegkaart; #6 gebruikersfeedback (overslaan, slepen, deelpunten, dagdoel herhaling, statistieken,
  getallen als woord in H6, groepen in H2/H4, met taalreview); #9 UX-analyse (`UX-REVIEW.md`); afgesloten met een
  code-review (10 bevindingen, alle verwerkt).

## Open / volgende stappen

1. **Meten na publicatie** met `npm run stats -- --min 5` (README, „Statistieken”). Er is geen
   testgroep (besloten november 2026); meten gaat alleen via de tellingen. Kijk naar:
   - fout/bekeken per oefening en per hoofdstuk, vooral bij de keuzeoefeningen;
   - aandeel vragen in doos 4+ en behaalde kan-doen-doelen (`kandoen/…/behaald`);
   - afgemaakte geleide schrijfstappen, vrije teksten, leesteksten en doeltaken.
   De eerste meting (19 november, ±200 antwoorden, vooral uit tests) wees op de sje-/tje-klank en
   zachte klinkers (H0) en de correctievraag in lasa-annons; die zijn aangepast.
2. **Uitbreiden waar het vaak misgaat** of veel gebruikt wordt, met taalreview; nieuwe stof op de
   moeilijkheidslijn en op de plek die de vaste volgorde voorschrijft.
3. **Computerstem (B-site)**: Chrome meldt vaak geen Zweedse stem. De oordelen op „Luisteren instellen”
   (`/b/luisteren/oordeel/…`) en de status (`/b/luisteren/status/…`) laten zien of de browserstemmen
   goed genoeg zijn.
5. **Didactisch review** (`REVIEW-DIDACTIEK.md`, november 2026): voorstellen om af te wegen, o.a. meer
   betekenisgerichte input en vloeiendheid, kan-doen-uitspraken die meten wat ze beloven, minder vertalen,
   flitskaarten nakijken, plaatsingstoets, afdrukbaar voortgangsoverzicht en huiswerkpagina voor leraren.
4. **Spreken** blijft buiten de site; de handleiding kan daarvoor een docent of taalpartner aanraden.

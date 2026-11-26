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
  naar een server. Uitzonderingen: anonieme tellingen (GoatCounter), „Fout gezien?” en opt-in synchroniseren
  via de eigen Worker.
- **De app kijkt na, niet de leerling.** Geen zelfbeoordeling; wat de app niet kan nakijken (vrije tekst),
  is oefenen zonder oordeel, met hulp en voorbeeldantwoord.
- **Geen spreken en uitspraak nakijken.** Spraakherkenning is daarvoor niet goed genoeg en werkt in de
  browser alleen via een externe dienst; terugluisteren vraagt zelfbeoordeling; er is geen
  moedertaalspreker voor echte opnames. Luisteren gebruikt de computerstem (en meldt dat).
- **Taalreview** voor elke nieuwe of gewijzigde Zweedse zin, vóór publicatie, door iemand (of een aparte
  sessie) die het werk van de schrijver niet kent: spelling, en/ett, vormen, woordvolgorde, eenduidige
  Nederlandse vertaling, niveau en idiomatisch Zweeds, alle goede antwoorden goedgekeurd en foutregels
  terecht, alleen stof uit dit en eerdere hoofdstukken, passend in de moeilijkheidslijn. Bevindingen
  verwerken of met reden afwijzen. Twijfel → eigenaar; kan die het niet beoordelen, dan weglaten.
- Op B1/B2 vooral opdrachten met een vast antwoord; vrij schrijven als laatste, vrijblijvende stap.
- **Voortgang hangt aan id's**: nooit een vraag-id, oefening-id of hoofdstuknummer veranderen.

## Onderwijskundige lijn (altijd volgen)

Elke nieuwe oefening, oefenvorm of functie past in deze lijn. Wat meetbaar is, controleert `npm test`,
`npm run difficulty-report` of `npm run content-report`; de rest hoort in de taalreview en de code-review.

1. **Vier strands in balans** (Nation): naast vormgerichte oefening ook
   - *input met aandacht voor betekenis*: de leestekst van het hoofdstuk plus **minstens 4 makkelijke
     teksten** per hoofdstuk (`kind: makkelijk`, vanaf H1): bijna alleen bekende woorden, 2–3 nagekeken
     begripsvragen; korter dan de leestekst (A1 30–80, A2 40–120, B1 60–180, B2 80–250 woorden, `LINE` in `difficulty-report`);
   - *output met aandacht voor betekenis*: geleid schrijven en, vanaf H1, **„Wat zeg je?”**
     (`kind: situatie`, minstens 4 vragen): een situatie in het Nederlands, de leerling zegt het in het
     Zweeds; meer goede antwoorden toestaan;
   - *vloeiendheid*: de vloeiendheidsronde (snelle ronde met alleen al gekende stof) en de snelle rondes.
2. **Ophalen, spreiden en afwisselen**: elke nagekeken vraag komt in de dagelijkse herhaling; nieuwe
   oefenvormen gebruiken de Leitner-dozen, niet hun eigen geheugen.
3. **Feedback in lagen**: tip (foutregel of diagnose) → regel met link naar de uitleg → antwoord. Bij een
   nieuwe vraag horen foutregels voor de te verwachten fouten.
4. **De app kijkt na**: geen zelfbeoordeling; wat niet na te kijken is, is oefenen zonder oordeel.
5. **Van vorm naar gebruik**: per onderwerp herkennen → maken → kiezen → gemengd → gebruik (lezen, taak,
   situatie, schrijven); vertalen is één van de vormen, niet de hoofdvorm (vanaf A2 gaat er een deel naar
   situatieopdrachten en Zweeds → Zweeds).
6. **Kan-doen-uitspraken beloven wat de app meet**: formuleer ze als wat de vragen erover toetsen.
7. **Instap op niveau**: de plaatsingstoets per hoofdstuk zet wat je al kunt meteen hoger in de herhaling.
8. **Uitspraak**: luisteren met de computerstem (en dat melden); onderscheid horen (sj/tj, lang/kort,
   woordaccent 1/2) komt in H0 en in de herhaling terug. Geen spreken nakijken.
9. **Woordenschat**: per hoofdstuk thematisch én frequent; op B1–B2 gericht op de meest gebruikte woorden.
10. **Eigen werk**: alle stof zelf geschreven; methoden (ook hun antwoordmodellen) worden niet ingelezen of
    gemined.

## Moeilijkheidslijn en volgorde

Zaagtand: binnen een hoofdstuk oplopend; oudere stof komt in de herhaling terug op het niveau van toen.
De getallen zijn een eigen richtlijn; de A1/A2-grens bij H6/H7 is een aanname.
`npm run difficulty-report` bewaakt de lijn (`!` = eronder; hoe er gemeten wordt: bovenaan het script).

| Hoofdstuk | Niveau | Leestekst (woorden) | Antwoordzin (woorden) | Vragen |
|---|---|---|---|---|
| H1–H6 | A1 | 70–120 | 4–6 | ≥ 80 |
| H7–H12 | A2 | 120–200 | 6–9 | ≥ 80 |
| H13–H24 | B1 | 200–350 | 8–12 | ≥ 70 |
| H25–H30 | B2 | 350–500 | 10–15 | ≥ 70 |

Vaste volgorde per hoofdstuk (`npm test` controleert hem; details in README, „Volgorde in een hoofdstuk”):
- A-site: woorden → per onderwerp herkennen → vorm → kiezen → gemengd (vertalen, „Wat zeg je?”, zoek de
  fout) → lezen (ook makkelijk lezen) → dialoog en taak → schrijven → luisteren → herhaling → overige woordenschat.
- B-site: Läsa (ook makkelijk lezen) → Ord → Grammatik (herkennen → maken → kiezen) → Zoek de fout → Lyssna →
  Praktiskt (ook „Wat zeg je?”) → Skriva → Herhaling → overige woordenschat.

Geen grammatica uit een later hoofdstuk (ook getest).

## Gedaan (november 2026)

- **Opbouw**: A-site H0–H12 en B-site H13–H30 (Vite, vanilla JS, YAML, PWA, GitHub Pages); nakijker met
  foutanalyse, oplopende hulp en `retry`-regels; dagelijkse herhaling (Leitner), toetsen, flitskaarten (nagekeken),
  snelle rondes, werkwoordtrainer, hand-outs, prestaties, statistieken, pagina Verantwoording.
- **Didactiek**: kan-doen-uitspraken (afgevinkt bij 80% in doos 3+), vaste volgorde en moeilijkheidslijn met
  rapporten (`difficulty-report`, `content-report`, beide op 0), keuzeoefeningen met „Waarom?”, geleid schrijven,
  doeltaken, 4 makkelijke teksten en „Wat zeg je?” per hoofdstuk, luisterdialogen, Zweeds → Zweeds, ontdek de
  regel, woorden en onderwerpen komen terug in latere herhalingen, instaptoets, woordaccent.
- **Woordenschat**: A H1–H6 ±60, H7–H12 100 woorden per hoofdstuk (963 in totaal, ±1.530 verschillende woorden
  in de stof); B ±60–70 per hoofdstuk; elk woord met vormen en een voorbeeldzin, „Woorden in een zin”;
  `vocab-report` met Kelly-lijst (`scripts/data/kelly-sv.tsv`, CC BY 4.0).
- **Antwoordzinnen A2**: 50 lange zinsbouw- en omvormvragen in H10–H12.
- **Hints A** (H0–H12): de regel of denkstap in plaats van beginletters; `hint` op de grammaticakaart, `help` op
  oefening of vraag; `npm test` controleert dat een hint het antwoord niet bevat.
- **Browsers tellen**: één anoniem event per browser (`nieuw/<jjjj-mm>`, `nieuw/al-bezig`), in `npm run stats`.
- **Techniek**: code in lagen met register van vraagtypen (`ARCHITECTURE.md`), store, rooktest in de browser,
  UI-tests (dekking ±85%), spellingtest (hunspell); voortgang samenvoegen en synchroniseren via de Worker en
  Cloudflare D1 (`worker/README.md` in de B-repo).

Alles met taalreview.

## Open / volgende stappen

1. **Meten na publicatie** met `npm run stats -- --min 5` (README, „Statistieken”); er is geen testgroep.
   Kijk naar fout/bekeken per oefening (vooral keuzevragen en de nieuwe lange zinnen), doos 4+, behaalde
   kan-doen-doelen, afgemaakte schrijfstappen, leesteksten en doeltaken.
2. **Antwoordzinnen A2** (`difficulty-report`): H7–H12 nu 7,4 · 7,5 · 7,7 · 7,5 · 7,2 · 7,3. H11 en H12 blijven
   lager door de korte vormoefeningen; naar ±8 vraagt nog ±30 lange vragen per hoofdstuk. Eerst meten.
3. **Uitbreiden waar het vaak misgaat** of veel gebruikt wordt, met taalreview, op de lijn en in de vaste volgorde.
4. **Computerstem (B-site)**: Chrome meldt vaak geen Zweedse stem; de oordelen op „Luisteren instellen”
   (`/b/luisteren/oordeel/…`, `/b/luisteren/status/…`) laten zien of de browserstemmen goed genoeg zijn.
5. **Hints B** (H13–H30): de gedeelde code geeft geen beginletters meer bij invullen en zinsbouw met vast begin;
   daar staan nu geen hints. Schrijf `hint:` op de B-kaarten en `help` waar de kaart niet past, zoals op de A-site.
6. **Spreken** blijft buiten de site; de handleiding kan een docent of taalpartner aanraden.

# Didactisch review A-site (tweede ronde, eind november 2026)

De eerste review (begin november) stelde voor: meer betekenisgerichte input en vloeiendheid, kan-doen die meet
wat hij belooft, minder vertalen, flitskaarten nakijken, woordaccent, plaatsingstoets. Daarvan zijn makkelijk
lezen (4 per hoofdstuk), „Wat zeg je?” (vanaf H1), woordaccent in H0, de vloeiendheidsronde, de instaptoets en
de hand-outs gedaan. Deze tweede ronde kijkt opnieuw naar H0–H12 met dezelfde brillen (Nation, Ellis,
ophalen/spreiden, feedback, ERK) en binnen de spelregels (geen AI, de app kijkt na, geen spreken, eigen werk).

Basis: `dev`, `npm run content-report` en `npm run difficulty-report` (0 aandachtspunten, niets onder de lijn),
telling van vraagtypen en steekproeven in H4, H5, H8, H12, de nakijker en de flitskaarten. Statistieken van
gebruikers waren niet beschikbaar.

## Bevindingen en wat ermee gedaan is

1. **Vertalen nam op A2 niet af; Zweeds → Zweeds ontbrak.** H8–H12 vertaalden 30–32% (A1: 18–34%), en de
   A-site had geen `transform`. → Omvormoefeningen in H7–H12 (o.a. directe → indirecte rede, twee zinnen → bijzin,
   onbepaald → bepaald bijvoeglijk naamwoord).
2. **Luisteren bleef op zinsniveau** (±10 losse zinnen, vooral „welk woord hoor je?” en dictee; geen luistertekst).
   → Een korte dialoog om te beluisteren met begripsvragen in H3–H12 (`listen: true`).
3. **De typische fout *är gått* (naar „ik ben gegaan”) werd niet herkend.** → Algemene diagnose in de nakijker:
   *är/var* + voltooid deelwoord waar *har/hade* hoort geeft een gerichte tip (beide sites).
4. **Kernonderwerpen kwamen nauwelijks in nieuwe zinnen terug** (presens, *inte*, voornaamwoorden, sterke
   werkwoorden, bijzinnen, *sig*, bijvoeglijk naamwoord: 1 nieuwe vraag later). Steeds dezelfde zin herhalen leert de
   zin, niet de regel. → Nieuwe vragen in latere herhalingsonderdelen; `content-report` meldt een kaart met een
   kan-doen-uitspraak die minder dan 3 keer later terugkomt.
5. **Woorden kwamen weinig terug** (H6 49%, H7 50%, H10 42%; H6 had 36 woorden alleen in de lijst). → Die woorden
   in herhalingsvragen van latere hoofdstukken.
6. **Kan-doen beloofde soms communicatie maar mat grammatica** (H1 voorstellen, H3 vrije tijd, H4 familie). →
   Herformuleerd naar wat de vragen toetsen.
7. **Flitskaarten waren zelfbeoordeling** („Wist ik / Nog niet”, daarna „je kent nu X woorden”). → De app kijkt
   na: bij elke kaart een keuze uit vier betekenissen.
8. **Kleiner**: weinig zinsbouw (`order`) in H4–H6 en H12, geen inductieve „ontdek de regel”-oefeningen, lange
   zinnen met één goed antwoord. → Zinsbouw aangevuld, ontdek-de-regel bij een paar regelmatige patronen,
   antwoordruimte verruimd.

Alle nieuwe Zweedse zinnen zijn vóór publicatie door een aparte taalreview gegaan (drie rondes); de
bevindingen zijn verwerkt. De twijfels zijn daarna uitgezocht: *vila sig* (H11) is vervangen door het
gangbaardere *tvätta sig*; *så* met inversie (spreektaal) en *försent* (Språkrådet raadt *för sent* aan) zijn
goed Zweeds maar niet wat geoefend wordt. Daarvoor is er nu een foutregel met `retry: true`: geen fout, wel
een tip en nog een poging. Echte foutregels gaan altijd voor.

## B-site (zelfde ronde)

Metingen: output met aandacht voor betekenis op B1 laag (8–12% in H14–H16, H18–H21; 4 situaties per
hoofdstuk), 26–38 woorden per hoofdstuk alleen in de lijst (H15, H17, H20–H24), geen inductieve oefeningen,
kan-doen H13 beloofde „vacature begrijpen” maar mat de lijdende vorm, en 8 kan-doen-onderwerpen kwamen later
te weinig terug. Gedaan:
- „Wat zeg je?” in H13–H18 en H20–H24 van 4 naar 8 situaties (44 nieuw, ruime antwoordsets, `retry` waar
  goed Zweeds niet de geoefende vorm is);
- per hoofdstuk H15, H17, H20–H24 „Woorden in een zin” (139 zinnen): op een paar onregelmatige vormen na staat
  elk woord nu in een zin;
- ontdek de regel bij de lijdende vorm met -s (H13), deelwoorden (H14) en woordvorming (H23);
- kan-doen H13 herschreven, de leesvragen bij de vacature tellen niet meer mee voor de lijdende vorm;
- 11 herhalingsvragen voor de 8 onderwerpen die te weinig terugkwamen.
Alles na taalreview. Open voor de eigenaar: *läss* naast *läses* (nu: geen fout, wel „schrijf läses”).

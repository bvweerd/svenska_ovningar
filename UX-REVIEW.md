# UX-analyse (issue #9, november 2026)

Uitgevoerd op `dev`, na alle andere issues. Gedaan met Playwright-screenshots; `npm run smoke` controleert
daarnaast elke pagina op JS-fouten en horizontaal scrollen (Pixel 7, licht en donker).

## Plan

| Wat | Hoe |
|---|---|
| Schermen | start (nieuw en met voortgang), hoofdstuk, oefening per vraagtype (meerkeuze, koppelen, invullen, tegels, dialoog, tabel), leestekst, uitslag, oefenen, dagelijkse herhaling, snelle ronde, uitleg, hand-out, prestaties, statistieken, over, menu |
| Toestanden | vóór het antwoord, na een fout (1e en 3e poging), na goed, antwoord bekeken, einde van de ronde |
| Formaten | Pixel 7 en iPhone 13, desktop 1280 px; licht en donker; schermtoetsenbord nagebootst (lage viewport, cursor in een veld) |
| Criteria | overzicht en hiërarchie, consistentie (knoppen, labels, kleuren), uitlijning en witruimte, aanraakdoelen (≥ 40 px), leesbaarheid, duidelijke feedback, niets dat verspringt |

## Bevindingen en wat ermee gedaan is

| # | Bevinding | Ernst | Opgelost |
|---|---|---|---|
| 1 | Vijf pagina's breder dan een telefoon (tabellen in uitleg, lange hints, snelheidskeuze) | hoog | ✓ tabellen scrollen in hun kader, hints breken af; rooktest bewaakt het |
| 2 | Knoppenrij van een vraag na drie fouten: vier even grote knoppen over twee regels | middel | ✓ Controleer blijft groot; Hint, Toon antwoord en Later zijn kleiner en passen op één regel |
| 3 | Hoofdstukpagina: vier losse knoppen onder „Verder”, over drie regels | middel | ✓ hoofdknop over de hele breedte, Mix/Toets/Flitskaarten/Fouten klein eronder |
| 4 | „Start (Enter)” op een telefoon | laag | ✓ „(Enter)” alleen met muis/toetsenbord |
| 5 | Na een fout niet duidelijk dat je zelf verbetert (#6) | middel | ✓ regel „Verbeter je antwoord en kijk opnieuw na” |
| 6 | Toetsenbord klapt dicht bij „Controleer” → scherm verspringt (#6) | middel | ✓ de cursor blijft in het veld |
| 7 | Dialoog in volgorde: twee blokken met veel lege ruimte (#6) | middel | ✓ één lijst, regels wisselen |
| 8 | Invoerveld verraadt de lengte van het antwoord (#6) | middel | ✓ vaste breedtes |
| 9 | Vinkje niet in het midden van het rondje (#6) | laag | ✓ SVG-vinkje |
| 10 | Statistieken: tabel met vijf kolommen past niet op een telefoon | middel | ✓ kaartjes, alleen begonnen hoofdstukken |
| 11 | Tegelbank: gebruikte tegels laten lege plekken achter | — | bewust zo (niets verschuift onder je vinger) |
| 12 | Kleuren en contrast in donker thema | — | in orde; hand-outs houden eigen lichte kleuren |

Niet gevonden: overlappende elementen, onleesbare tekst, ontbrekende terugweg (elke oefening heeft nu
onderaan „Terug naar hoofdstuk …”).

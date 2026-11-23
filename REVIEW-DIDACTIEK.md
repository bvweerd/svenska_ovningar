# Didactisch review (november 2026)

Twee brillen:

1. **Onderwijskundige:** taalverwerving en leren in het algemeen. Daarbij gebruik ik:
   - de *vier strands* van Nation: input met aandacht voor betekenis, output met aandacht voor betekenis, aandacht voor vorm, en vloeiendheid;
   - de principes voor gestuurde tweedetaalverwerving van Ellis;
   - ophalen uit het geheugen, gespreid oefenen en afwisselen;
   - feedback volgens Hattie en Shute;
   - de kan-doen-beschrijvingen van het ERK.
2. **Leraar die met *Året runt* (Boom) werkt:** dat is een communicatieve basiscursus Zweeds tot en met A2, met uitleg in het Nederlands en een verhaallijn. De lessen draaien om spreken en interactie; thuis werken de cursisten met het oefenboek. Ik kon de docentenhandleiding niet inzien, dus dit deel gaat uit van de openbare beschrijving van de cursus.

Basis: de inhoud en code op `dev` (A: 225 oefeningen, 1580 vragen, 718 woorden; B: 312 oefeningen, 1963 vragen, 1083 woorden) en `npm run difficulty-report` (geen hoofdstuk onder de lijn).

## Wat sterk is

| | Waarom het werkt |
|---|---|
| **Ophalen en spreiden** | Elke vraag wordt uit het geheugen opgehaald, niet herkend uit een lijst. Leitner-dozen, een dagdoel van 20 en afwisseling tussen onderwerpen sluiten aan bij wat het best onderbouwd is in leeronderzoek. Een vraag die je de eerste keer goed hebt, start in doos 2; dat houdt rekening met wat iemand al kan. |
| **Feedback** | Feedback in lagen: eerst een gerichte tip (diagnose van de fout of een vastgelegde foutregel), dan de regel met een link naar de uitleg, en pas na drie pogingen het antwoord. Dat is uitgewerkte, taakgerichte feedback; het werkt beter dan alleen goed/fout. „Verbeter je antwoord” en deelpunten maken het voor beginners duidelijker. |
| **Opbouw binnen een hoofdstuk** | De vaste volgorde **herkennen → maken → kiezen → gemengd → lezen/taak → schrijven → herhaling** is een goede glijdende schaal: van gerichte vormoefening naar kiezen tussen vormen (onderscheiden) naar gebruik. De zaagtand (oude stof op het oude niveau) houdt eerdere hoofdstukken levend. |
| **Veel zelf maken** | 50–71% van de vragen vraagt om zelf een vorm of zin te maken. Herkennen alleen beklijft slecht; dit is een goede verhouding. |
| **Geleid schrijven** | Drie tot vijf nagekeken stappen vóór een vrije tekst zijn een vorm van ondersteuning (*scaffolding*): de vrije tekst wordt haalbaar en het nakijken blijft eerlijk. |
| **Moeilijkheidslijn** | Leestekst, antwoordzin en aantal vragen per niveau worden gemeten en getest. Dat zie je zelden bij zelfgemaakt materiaal. |
| **Motivatie die om beheersing draait** | Prestaties, statistieken en dozen gaan over wat je beheerst, niet over klikken of reeksen. Een gemiste dag kost niets. Dat is gunstig voor volwassen leerders. |

## Wat beter kan (op volgorde van belang)

**1. De vier strands zijn uit balans: veel vorm, weinig betekenis.**
- Het overgrote deel is vormgericht: invullen (A 459, B 556), vertalen (A 345, B 272), meerkeuze.
- Input met aandacht voor betekenis is één leestekst van ±100–150 woorden per A-hoofdstuk, plus luisteren met de computerstem.
- Vloeiendheid zit alleen in de snelle rondes en de werkwoordtrainer.
- Nation adviseert grofweg een kwart per strand.

*Voorstel:*
- **Extensief lezen en luisteren:** per hoofdstuk 3–5 korte, makkelijke teksten (95–98% bekende woorden) met één begripsvraag, los van de grammatica.
- **Vloeiendheidsrondes:** bekende zinnen snel lezen of beluisteren en begrijpen, onder tijd, zonder nieuwe stof.

Dit kan de app nakijken en past binnen de spelregels.

**2. Kan-doen-uitspraken meten iets anders dan ze beloven.**
- Een uitspraak als „Ik kan een vacature begrijpen en vertellen wat er op het werk gebeurt” wordt afgevinkt op basis van grammaticavragen over het passief in doos 3+.
- Dat is beheersing van een vorm, niet de communicatieve vaardigheid. De begripsvaliditeit is zwak, en een cursist kan zich een vaardigheid toedichten die hij in de klas niet laat zien.

*Voorstel:* formuleer de uitspraken als wat de app werkelijk meet („Ik kan de lijdende vorm met -s herkennen en maken”). Of laat het vinkje ook afhangen van een **taakvraag** (lees- of luisteropdracht met een vast antwoord) die bij de uitspraak hoort.

**3. Veel vertalen vanuit het Nederlands.**
- Voor Nederlandstaligen werkt vertalen tussen twee verwante talen goed bij vormoefening.
- Maar het houdt het denken in het Nederlands en lokt woord-voor-woordzinnen uit.

*Voorstel:* vervang op A2/B1 een deel door **opdrachten vanuit een situatie** („Je bent te laat voor een afspraak. Wat zeg je?”, met een vaste set goede antwoorden), of door Zweeds → Zweeds (omvormen bestaat al op B).

**4. Flitskaarten zijn zelfbeoordeling.**
- „Ik wist het / ik wist het niet” is precies wat de spelregel „De app kijkt na, niet de leerling” uitsluit.
- Ze tellen niet mee voor de dozen of prestaties, maar het is wel een uitzondering.

*Voorstel:* maak er een snelle **typ- of kiesronde** van die de app nakijkt, of noem het nadrukkelijk „bladeren zonder score”.

**5. Uitspraak en prosodie.**
- Spreken valt terecht buiten de site.
- Maar ook het **horen** van verschillen is nu beperkt tot H0: sj-/tj-klank en lange/korte klinker. Het woordaccent (accent 1/2, *anden – anden*) en lange/korte medeklinkers komen daarna niet meer terug.

*Voorstel:* luisteronderscheid met minimale paren, in de herhaling verweven, met de duidelijke kanttekening dat het een computerstem is.

**6. Uitleg alleen deductief.**
- Elke kaart geeft eerst de regel. Dat sluit aan bij *Året runt* (uitleg in het Nederlands) en is efficiënt voor volwassenen.
- Maar af en toe zelf de regel ontdekken (eerst voorbeelden, dan de vraag „wat valt op?”) beklijft beter, vooral bij regelmatige patronen zoals -ar/-er of het passief.

*Voorstel:* bij een paar onderwerpen per niveau een „ontdek de regel”-oefening vóór de kaart.

**7. Woordenschat op B1–B2 is dun.**
- 1083 woorden voor B1–B2 is weinig: B2 vraagt al gauw enkele duizenden woordfamilies.
- De woorden zijn per thema gekozen, niet op frequentie.

*Voorstel:* vul elk B-hoofdstuk aan met de meest frequente ontbrekende woorden, bijvoorbeeld getoetst aan een vrije frequentielijst. Gebruik geen lijst van een methode; dat hangt samen met het auteursrecht.

**8. Nog geen instaptoets.**
- Iemand die al wat Zweeds kent, begint nu bij H1 en moet alles doorlopen.

*Voorstel:* een korte **plaatsingstoets** per hoofdstuk; wie die haalt, krijgt die vragen meteen in doos 2–3. Dat beantwoordt ook de vraag uit #6 over verschillende instapniveaus.

## Als leraar met *Året runt*: hoe ik de site zou gebruiken

- **Als huiswerk en verwerking na de les.** De site volgt het stramien van een gangbare cursus (volgorde van grammatica en thema's), dus ik kan „maak H4 tot en met de herhaling” opgeven. In de les blijft het om spreken en interactie gaan; de site neemt het slijpen van vormen en de herhaling over. Dat is een goede verdeling.
- **Wat ik mis als leraar:**
  - **Geen zicht op de voortgang van mijn groep.** Accounts en een docentenomgeving passen niet bij de spelregels (geen externe diensten, privacy). *Alternatief zonder server:* de leerling kan op de pagina Statistieken een **voortgangsoverzicht afdrukken of als PDF delen** (per hoofdstuk gemaakt, beheerst, doelen en de lastigste onderwerpen). Dan neemt de leerling het mee naar de les.
  - **Geen koppeling per les.** Een pagina „Huiswerk bij hoofdstuk N” met de oefeningen, de uitlegkaart als hand-out en de kan-doen-doelen zou het opgeven makkelijker maken.
  - **Spreekopdrachten om mee te nemen.** De site mag spreken niet nakijken, maar kan wel een korte **voorbereidingsopdracht voor de les** geven: „Bereid voor: vertel in drie zinnen wat je vorig weekend deed”. Er is geen oordeel en geen opname; de leraar pakt het in de les op. Dat past binnen de spelregels („wat de app niet kan nakijken, is oefenen zonder oordeel”).
- **Let op het auteursrecht.** De verhaallijn van de site (Nederlands stel in Västerås, buren Ingrid en Olle) lijkt in opzet op die van *Året runt* (Nederlands gezin dat een jaar in Zweden woont). Een idee is niet beschermd, en de teksten zijn zelf geschreven. Toch is het verstandig dat de personages en gebeurtenissen duidelijk eigen blijven.

## Samengevat

Voor oefenen van vormen en herhalen is de site didactisch sterk en beter onderbouwd dan de meeste oefenboeken: uit het geheugen ophalen, gespreid, met goede feedback en een eerlijke moeilijkheidslijn. De grootste winst zit in:
1. meer input en vloeiendheid met aandacht voor betekenis;
2. kan-doen-uitspraken die meten wat ze beloven;
3. minder vertalen en meer opdrachten vanuit een situatie;
4. flitskaarten die de app nakijkt.

Voor een leraar met *Året runt* is de site een goede aanvulling als huiswerk. Een afdrukbaar voortgangsoverzicht en een huiswerkpagina per hoofdstuk zouden het in de klas bruikbaar maken.

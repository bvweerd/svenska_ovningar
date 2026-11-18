# Svenska övningar

Interactieve oefensite voor Zweeds op beginnersniveau, voor Nederlandstaligen.
Dertien hoofdstukken (0–12) met grammatica-uitleg, oefeningen en woordenschat.
Alle vragen worden automatisch nagekeken, met gerichte tips bij fouten.

Alle oefenstof is zelf geschreven; de site is niet verbonden aan een uitgever of lesmethode.

## Lokaal draaien

```bash
npm install
npm run dev      # ontwikkelserver
npm test         # nakijklogica + controle van alle oefenstof
npm run build    # statische site in dist/
```

## Publiceren

Elke push naar `main` wordt via GitHub Actions getest, gebouwd en op GitHub Pages gezet
(`.github/workflows/pages.yml`). Zet in de repository-instellingen onder
**Settings → Pages → Build and deployment** de bron op **GitHub Actions**.

## Oefeningen toevoegen

De oefenstof staat in `content/chapters/NN-onderwerp.yaml`, één bestand per hoofdstuk.
Een hoofdstuk verschijnt automatisch zodra het bestand bestaat (het nummer moet in
`content/index.yaml` staan). Zie `PLAN.md` voor de opzet en `content/chapters/01-kennismaken.yaml`
voor voorbeelden van alle vraagtypen.

| Type | Wat |
|---|---|
| `mc` | meerkeuze (één goed) |
| `multi` | meerkeuze (meerdere goed) |
| `gap` | invullen, met `___`; per gat open veld of keuzelijst (`options`) |
| `translate` | vrije zin (vertalen, omzetten) |
| `order` | woorden in de goede volgorde klikken (optioneel vast begin `start`) |
| `match` | paren koppelen |
| `table` | tabel invullen |
| `truefalse` | rätt/fel, met optionele `correction` (open verbetering) |
| `clock` | klok aflezen (`time: "07:30"`), antwoorden worden gegenereerd |
| `dialogue` | dialoog ordenen (regels in de goede volgorde opgeven) |
| `free` | schrijfopdracht met lichte controles en voorbeeldantwoord |
| `steps` | samengestelde vraag: meerdere van bovenstaande na elkaar |

Antwoordpatronen: `[optioneel]` en `{keuze|andere keuze}`, bijvoorbeeld
`"[Nej, ]vi {talar|pratar} inte finska."`. Bekende fouten met eigen tip:
`feedback: [{ match: "läsar", tip: "…" }]` of `{ contains: "…", tip: "…" }`.

Met `vocab:` in een hoofdstuk worden drie woordenschatoefeningen automatisch gemaakt.
`npm test` controleert dat elk goed antwoord ook echt goed gerekend wordt en elke
vastgelegde fout als fout.

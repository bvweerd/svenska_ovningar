// Instellingen van de site.
//
// De code in src/ en tests/ is in svenska_ovningar (A1–A2) en svenska_ovningar_b (B1–B2) gelijk.
// Alleen dit bestand verschilt per site. Controleer met: npm run check-sync

// ---------- Per site ----------
/** Voorvoegsel voor de opslag in de browser; beide sites staan op hetzelfde domein. */
export const STORAGE_PREFIX = 'svensk-ovningar';

/** Paden in GoatCounter krijgen dit voorvoegsel, zodat ze los staan van de andere site. */
export const PATH_PREFIX = '';

/** In deze repo komen de issues van „Fout gezien?”. De Worker accepteert alleen repo's uit zijn eigen lijst. */
export const REPORT_REPO = 'bvweerd/svenska_ovningar';

/** Teksten op de start- en overpagina. */
export const SITE_TEXT = {
  lead: 'Oefen Zweedse grammatica en woordenschat, hoofdstuk voor hoofdstuk. Elke oefening wordt meteen nagekeken, en bij een fout krijg je een tip.',
  about: 'Svenska övningar is een gratis oefensite voor Nederlandstaligen die Zweeds leren op beginnersniveau. De grammatica wordt in dertien hoofdstukken (0 tot en met 12) in een vaste volgorde opgebouwd, zoals gebruikelijk in een basiscursus.',
};

/** Naam en beschrijving als app (manifest, beginscherm). */
export const APP = {
  name: 'Svenska övningar A1–A2',
  shortName: 'Svenska A1–A2',
  description: 'Zweeds oefenen voor beginners (A1–A2), automatisch nagekeken met tips.',
};

/** De andere site: [tekst voor de link, linktekst, tekst na de link]. */
export const SIBLING = {
  href: 'https://bvweerd.github.io/svenska_ovningar_b/',
  home: ['Al verder? Hoofdstuk 13–30 (B1–B2) staan op ', 'de vervolgsite', '.'],
  about: ['Gevorderde stof vind je op ', 'de B1–B2-site', '. Je voortgang wordt per site apart bewaard.'],
};

// ---------- Voor beide sites gelijk ----------
// GoatCounter-code voor anonieme bezoekers- en vraagstatistieken (https://www.goatcounter.com).
// Laat leeg om niets te meten. De gegevens gaan naar https://<code>.goatcounter.com.
export const GOATCOUNTER_CODE = import.meta.env?.VITE_GOATCOUNTER || 'bvweerd';

// Foutmeldingen: adres van de Cloudflare Worker (staat in de B1–B2-repo, map worker/) en de
// openbare sitekey van Turnstile. Laat een van beide leeg om de knop „Fout gezien?” te verbergen.
export const REPORT_URL = import.meta.env?.VITE_REPORT_URL || '';
export const TURNSTILE_SITEKEY = import.meta.env?.VITE_TURNSTILE_SITEKEY || '';

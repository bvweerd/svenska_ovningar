// Instellingen van de site.

// GoatCounter-code voor anonieme bezoekers- en vraagstatistieken (https://www.goatcounter.com).
// Laat leeg om niets te meten. Bij code "svensk-ovningar" gaan de gegevens naar
// https://svensk-ovningar.goatcounter.com.
export const GOATCOUNTER_CODE = import.meta.env?.VITE_GOATCOUNTER || 'bvweerd';

// Foutmeldingen: adres van de Cloudflare Worker (staat in de B1–B2-repo, map worker/) en de
// openbare sitekey van Turnstile. Laat een van beide leeg om de knop „Fout gezien?” te verbergen.
export const REPORT_URL = import.meta.env?.VITE_REPORT_URL || '';
export const TURNSTILE_SITEKEY = import.meta.env?.VITE_TURNSTILE_SITEKEY || '';
// In deze repo komen de issues. De Worker accepteert alleen repo's uit zijn eigen lijst.
export const REPORT_REPO = 'bvweerd/svensk_ovningar';

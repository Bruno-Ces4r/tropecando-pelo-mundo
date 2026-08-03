import type { Locale } from "./i18n";

// Server-side dictionary loader. Each locale's copy lives in dictionaries/<locale>.json.
// Typed against the PT dictionary so missing keys in other languages are caught.
import pt from "@/dictionaries/pt.json";
import en from "@/dictionaries/en.json";

export type Dictionary = typeof pt;

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.pt;
}

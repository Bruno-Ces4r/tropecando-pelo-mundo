// Central i18n config. Add a locale here and create its dictionary file to
// introduce a new language; generateStaticParams reads from `locales`.
export const i18n = {
  defaultLocale: "pt",
  locales: ["pt", "en"],
} as const;

export type Locale = (typeof i18n.locales)[number];

export const localeLabels: Record<Locale, string> = {
  pt: "Português",
  en: "English",
};

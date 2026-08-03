import type { Metadata } from "next";
import Link from "next/link";
import { i18n, localeLabels, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

// Pre-render one tree per locale at build time — fully static, no server needed.
export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  return { title: `${dict.meta.title} · ${dict.brand}` };
}

// Maps each locale to the "other" locale, for the language-switch link.
// The switch links to the equivalent page by swapping the [lang] segment of
// the current path (see LangSwitch below).
function otherLocale(lang: Locale): Locale {
  return i18n.locales.find((l) => l !== lang) ?? i18n.defaultLocale;
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = getDictionary(lang);
  const alt = otherLocale(lang);

  return (
    <div lang={lang}>
      <a className="skip-link" href="#main">
        {dict.skipToContent}
      </a>

      <header className="site-header">
        <Link className="brand" href={`/${lang}/`}>
          {dict.brand}
        </Link>
        <nav className="lang-switch" aria-label="Language">
          {/* v1: switches to the equivalent language's home page. Once city/country
              pages exist (Phase 1), this should preserve the current sub-path. */}
          <Link href={`/${alt}/`} hrefLang={alt}>
            {localeLabels[alt]}
          </Link>
        </nav>
      </header>

      <main id="main" className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <p>{dict.footerNote}</p>
      </footer>
    </div>
  );
}

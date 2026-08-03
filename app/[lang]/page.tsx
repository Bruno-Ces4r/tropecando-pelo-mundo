import { i18n, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <>
      <section className="hero">
        <p className="eyebrow">{dict.channel}</p>
        <h1>{dict.brand}</h1>
        <p className="tagline">{dict.tagline}</p>
        <p className="intro">{dict.homeIntro}</p>
      </section>

      {/* Country/city listing arrives in Phase 1 (docs/TASKS.md, task 1.1+). Skeleton for now. */}
      <section className="placeholder">
        <p>{dict.placeholder}</p>
      </section>
    </>
  );
}

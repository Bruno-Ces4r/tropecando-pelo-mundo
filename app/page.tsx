import { i18n } from "@/lib/i18n";

// Static export can't do server redirects, so the root path sends visitors to the
// default locale with a client-side meta refresh. basePath is prepended so it works
// under the GitHub Pages subpath.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const target = `${basePath}/${i18n.defaultLocale}/`;

export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <p style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
        <a href={target}>Bruno Tropeçando pelo Mundo</a>
      </p>
    </>
  );
}

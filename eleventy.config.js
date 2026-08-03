// Eleventy config for Guia do Nômade.
// Source lives in src/, built output goes to _site/ (which is gitignored and
// published to GitHub Pages by the deploy workflow).
export default function (eleventyConfig) {
  // Copy static assets straight through to the build output.
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  // .nojekyll at the output root tells GitHub Pages not to run Jekyll on it.
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    // Use .html and .md as templates; Nunjucks for templating logic.
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    // pathPrefix matters on GitHub Pages project sites, which are served from
    // /<repo-name>/. Override at build time: `npx @11ty/eleventy --pathprefix=/guia-do-nomade/`.
    // Left as "/" for local dev so links resolve correctly when serving locally.
    pathPrefix: "/",
  };
}

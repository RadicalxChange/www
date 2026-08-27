# /density-done-well — Sydney Density Deliberations microsite

Standalone single-page microsite for **"Density Done Well"**, the summary of
findings of the Sydney Density Deliberations — a joint program of AMPLIFY and
the RadicalxChange Foundation (Sydney, June–July 2026).

Unlike `/geneva-reflections` and `/aspire-canberra-policy-lab`, this page
shares **nothing** with the rest of the site: it deliberately does not extend
`layouts/_base.njk`, carries its own `<style>`, nav, footer and inline
`<script>`, and must not inherit the site's global CSS, header or footer. The
design (pure-black ground, Google-hosted Archivo/Public Sans/JetBrains Mono,
the canvas-driven "Beyond" wordmark) is final — do not restyle it or fold it
into site components.

`index.njk` is raw HTML wrapped in `{% raw %}` so Nunjucks passes it through
untouched; the only Eleventy features used are the front-matter `permalink`
and the site-wide posthtml transform (minification in prod, beautify in dev),
which every page gets. The only asset it takes from the site is the shared
favicon (`/images/logos/favicon.png`).

Like the sibling deliberation pages, it carries no analytics or tracking.

This file is excluded from the build via `.eleventyignore`.

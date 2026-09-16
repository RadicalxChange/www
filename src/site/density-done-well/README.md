# /density-done-well — Sydney Density Deliberations microsite

Standalone single-page microsite for **"Density Done Well"**, the summary of
findings of the Sydney Density Deliberations — a joint program of AMPLIFY and
the RadicalxChange Foundation (Sydney, June–July 2026).

Unlike `/geneva-reflections` and `/aspire-canberra-policy-lab`, this page
shares **nothing** with the rest of the site: it deliberately does not extend
`layouts/_base.njk`, carries its own `<style>`, nav, footer and inline
`<script>`, and must not inherit the site's global CSS, header or footer. The
design (black hero over a cream lower half, Google-hosted Archivo/Public
Sans/JetBrains Mono, the canvas-driven "Beyond" wordmark, AMPLIFY and RxC
logos embedded as data URIs) is final — do not restyle it or fold it into
site components. The page frames itself with its own thin RxC-branded
breadcrumb bar and footer bar (`.rxc-shell`, Bricolage Grotesque) linking
back to `/`, `/projects/`, the newsletter and donations; these are part of
the delivered HTML, not the site's `menu`/`footer` components.

`index.njk` is raw HTML wrapped in `{% raw %}` so Nunjucks passes it through
untouched; the only Eleventy features used are the front-matter `permalink`
and the site-wide posthtml transform (minification in prod, beautify in dev),
which every page gets. The only asset it takes from the site is the shared
favicon (`/images/logos/favicon.png`).

Unlike the Geneva/ASPIRE pages, this one does carry the site's Fathom
analytics snippet (`rabbit.radicalxchange.org/script.js`, restricted to
`www.radicalxchange.org`, so it is inert on deploy previews and localhost).

This file is excluded from the build via `.eleventyignore`.

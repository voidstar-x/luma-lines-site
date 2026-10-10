# luma-lines-site

Luma Lines web presence — one page: landing + privacy policy (the App Store
privacy URL points here).

- `DESIGN.md` — brand tokens (Google DESIGN.md format), source of truth for
  both this site and the game's UI
- `index.html` — landing + privacy policy section (verbatim policy text)
- `vendor/anime.umd.min.js` — anime.js v4.5.0 (MIT, vendored from the official
  npm tarball; zero third-party requests on the page)
- `assets/` — self-hosted Poppins subsets, hero art (text-free crop of the
  approved store header), store screenshots, site css/js

Static GitHub Pages. No build step. Motion respects `prefers-reduced-motion`.

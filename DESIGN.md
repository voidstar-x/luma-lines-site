---
name: Luma Lines
description: Calm block puzzle, neon glow — brand tokens for the Luma Lines web presence.
colors:
  navy-900: "#101322"
  navy-800: "#18263B"
  navy-700: "#203B56"
  navy-border: "#356477"
  text-primary: "#E8ECF4"
  text-secondary: "#BEC6D8"
  accent-teal: "#4DB6AC"
  accent-violet: "#BA68C8"
  accent-gold: "#FFD54F"
typography:
  display:
    fontFamily: Poppins
    fontWeight: 600
    letterSpacing: "0.04em"
  body:
    fontFamily: Poppins
    fontWeight: 500
rounded:
  sm: 8px
  md: 14px
  lg: 22px
spacing:
  xs: 8px
  sm: 16px
  md: 32px
  lg: 64px
  xl: 128px
motion:
  place-settle: "spring, high damping, no overshoot"
  reveal: "600ms ease-out, 24px rise, staggered 90ms"
  glow-pulse: "6s ease-in-out infinite alternate, opacity only"
---

# Luma Lines — Web Presence

Calm, premium, dark. The page should feel like the game looks: deep navy, soft
neon, generous space, nothing shouting.

## Colors

- **navy-900 (#101322)**: page background. The single canonical navy — the app
  board and the store art use this exact value.
- **navy-800 / navy-700**: raised surfaces (cards, phone frames). Never pure
  black or pure white anywhere on the page.
- **text-primary / text-secondary**: the only two text greys. No mid-greys.
- **accent-teal (#4DB6AC) / accent-violet (#BA68C8) / accent-gold (#FFD54F)**:
  the three cube colors from the app icon. Teal = links and primary CTA.
  Gold = the ignition accent (line clears, highlights) — use sparingly, it is
  the loudest color we own. Violet = secondary accent only.

## Typography

- Poppins 600 for the wordmark and headings, +4% tracking, soft teal glow on
  the wordmark only (text-shadow, subtle).
- Poppins 500 for everything else. No bold body text, no all-caps except the
  small tagline treatment (+30% tracking).

## Motion

- Spring settle for anything that "lands" — high damping, no visible bounce.
- Scroll reveals: rise 24px + fade, 600ms ease-out, 90ms stagger.
- One ambient motion on the page maximum (hero glow pulse, opacity only).
- **`prefers-reduced-motion: reduce` disables every animation** — content
  renders in its final state. Non-negotiable.

## Do

- Keep whole-page weight tiny (this site makes zero third-party requests:
  self-hosted fonts, vendored anime.js, local images only).
- Let the art carry the frame; text stays minimal.
- Keep the privacy policy on the page (the store's privacy URL points here).

## Don't

- No bounce, no parallax, no auto-playing video, no cookie banners, no
  newsletter forms, no analytics.
- No color outside the tokens above.
- No feature creep: one page, one message — calm block puzzle.

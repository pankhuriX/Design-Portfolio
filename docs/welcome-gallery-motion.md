# Welcome motion and strict About gallery

## Motion values

Hero ambient motion uses a scoped `--hero-drift-duration` of 40 × the existing 320ms slow token (12.8 seconds). CSS individual `translate` composes with the existing pointer transform. Red: up to 8px pointer + 4px drift per axis; blue: 4px pointer + 4px drift; structural rule: 2px pointer + 2px drift. The existing 320ms interpolation remains. The headline and body have no continuous animation.

Ambient and pointer motion are desktop (1280px+), fine-pointer, no-reduced-motion only. IntersectionObserver pauses drift offscreen. A keyboard-focus-visible pause/resume button provides explicit control without changing the visible composition. The lower-left signature is the existing micro type token. No optional yellow dot or extra Welcome tagline was added. The CTA arrow retains its 4px hover/focus motion; the underline translates 4px.

## Gallery

Uses the six supplied renamed files directly from `public/images/about-gallery`:

1. Design Influence.png
2. Hiking.jpg
3. research.jpg
4. Clay modelling.jpg
5. Board Games.jpg
6. Books.jpg

Pizza.jpg is retained on disk but excluded from the main gallery.

At 1280px: two six-column anchors, then four three-column supporting images. At 1024px: four-column anchors and two-column supports on the actual eight-column grid. At 768px: two columns throughout. At 390px: one column. Equal-height 4:5 anchor frames and equal-height 4:3 support frames use object-fit cover; making is bottom-aligned to retain the actual clay figures, reading uses a 65% vertical focal point to retain the book. These localized crop settings replace the prior collage treatment. Captions sit 8px below every frame. Grid gaps use the existing responsive gutter (24px tablet/desktop, 16px mobile), with 24px row gaps.

Each tile uses the existing Reveal utility. Entry moves 8px over 320ms with 120ms index staggering. Hover retains the existing 1.01 scale (below the requested maximum). Reduced motion disables all entrance and hover animations. No image recoloring, new shapes or dependencies were added.

## Changed files

- src/components/home/Hero.tsx
- src/hooks/useHomeInteractions.ts
- src/styles/hero.css
- src/styles/interactions.css (hero rules only)
- src/components/about/AboutGallery.tsx
- src/data/gallery.ts
- src/styles/about-gallery.css (gallery rules only)
- tests/home-interactions.test.cjs
- tests/grid-controls.test.mjs
- docs/welcome-gallery-motion.md

## Validation

Production build and nine automated interaction checks pass. Browser checks at 1280, 1024, 768 and 390px confirm six loaded images, equal image heights within each row, and no overflow on Home or About. Keyboard pause/resume verified; browser console clean. Reduced-motion behavior is checked through media-rule inspection and automated hook tests, not OS-level emulation. Desktop hover styles retain fine-pointer gating.

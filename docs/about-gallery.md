# About gallery and system reveal

The supplied folder is `public/images/About` (the requested `references/About page` does not exist). Original files are untouched. Seven browser-compatible JPEG derivatives are resized to a maximum 1440px edge in `public/images/about-gallery`.

## Curated selection

| Original | Derivative | Visible theme |
| --- | --- | --- |
| b5872c49-7536-4000-ada4-25c414d9c9ff.JPG | design-influence.jpg | Exhibition wall / design influence |
| IMG_0158.HEIC | outdoors.jpg | Alpine hike |
| IMG_8575 3.HEIC | research.jpg | Research presentation |
| IMG_0736.HEIC | making.jpg | Handmade clay figures |
| IMG_0740.JPG | systems-play.jpg | Catan / systems and play |
| IMG_5226 2.HEIC | reading.jpg | Reading on a train |
| IMG_6873.heic | everyday.jpg | Café moment |

Excluded: 1000056991 2.JPG and 1000066834.JPG repeat the presenting theme with weaker framing; IMG_0521 2.heic is a photographed thank-you document; IMG_1526.PNG and IMG_2919.PNG are raw phone screenshots; IMG_1702.JPG is a documentation-like room view; IMG_7278.HEIC repeats the outdoor theme; IMG_8697.HEIC is a very dark performance photograph; IMG_9655.jpg is primarily museum label text. No unverified stories are attached to any image.

## Layout and interactions

The collage uses the current PageContainer and column/gutter tokens: 12 desktop, 8 tablet, 4 mobile. Desktop has two anchors, an inset research image and four supporting portraits. Tablet simplifies to two visual columns; mobile preserves every image's intrinsic aspect ratio in a single column. Figures have no lightbox or false clickable affordance. Fine-pointer hover uses the existing 1.01 scale token and is disabled for reduced motion.

GridProvider/GridToggle share one fixed, pointer-transparent GridOverlay. Guides use the actual PageContainer width/padding and grid tokens. The only new visual value is the inspection-only `--grid-guide-opacity: 0.08`, scoped to the overlay to keep content legible. Desktop hover previews; touch/pen activation and Enter/Space toggle. The principle button also previews on keyboard focus. Other principles remain static to avoid visual noise. Reduced motion removes the fade; print hides both controls and overlay.

## Files changed in this pass

- `src/components/about/AboutGallery.tsx` — AboutGallery and GalleryItem
- `src/components/about/SystemPrinciples.tsx` — compact four-principle block
- `src/components/layout/GridOverlay.tsx` — GridProvider, GridOverlay markup and GridToggle
- `src/components/layout/PageShell.tsx` — shared grid provider
- `src/components/home/Hero.tsx` — Show Grid beside the scroll cue
- `src/components/home/Experience.tsx` — section number 04
- `src/components/home/Testimonials.tsx` — section number 05
- `src/pages/AboutPage.tsx` — insert gallery between How I Work and Experience
- `src/data/gallery.ts` — curated image configuration and alt text
- `src/styles/about-gallery.css` — collage and principles
- `src/styles/grid-overlay.css` — responsive guides and control
- `src/styles/interactions.css` — preserve the existing full-width hero rule motion on its new control wrapper
- `tests/grid-controls.test.mjs` — mouse, touch/pen, keyboard and reduced-motion checks
- `docs/about-gallery.md` — selection, system decisions and this manifest
- Seven JPEG derivatives listed above in `public/images/about-gallery/`

## Verification

Production build passes. Existing interaction tests and four new grid-control tests pass. Browser inspection at 1280, 1024, 768 and 390px confirms seven loaded images, natural proportions, matching overlay margins/columns and no horizontal overflow. Enter/Space and visible keyboard focus verified on both controls. Touch/pen handler behavior and reduced-motion CSS are covered by automated checks; no physical touch-device or OS reduced-motion emulation was performed. Browser console reports no errors.

## Gallery refinement

Desktop now uses a six-column design portrait (4:5 crop centered on the subject), a four-column outdoor anchor offset by the 48px token, and a second group of five supporting images spanning 2–3 columns. Support images and all tablet/mobile images keep their intrinsic aspect ratios. The 4:5 portrait frame is local to the primary gallery anchor; it establishes hierarchy without changing global media tokens. Internal gaps are 24px, with 48px between the two desktop groups. Captions sit 8px below imagery at the existing label size and regular weight. System numbers use 16px semibold, titles 20px semibold, descriptions 12px; the Weimar line sits 8px below the title. A 96px lead-in and 48px top padding distinguish the system block while the page's major-section gap remains unchanged.

This refinement changes only `src/styles/about-gallery.css` and this documentation.

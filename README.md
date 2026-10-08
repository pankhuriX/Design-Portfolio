# Pankhuri — portfolio

React + TypeScript + Vite, following the installed portfolio-design-system skill.

Run `npm install`, `npm run dev`, `npm run build` (TypeScript + production bundle), and `npm run preview`.

## Locked information architecture

- `/`: 00 Welcome → 01 Selected Work → 02 Design Experiments → shared footer.
- `/about`: 01 About Me → 02 Experience → 03 What People Say → shared footer.

`App.tsx` selects pages from the URL. Native links support browser history and direct route loading without an extra routing dependency. Configure a deployment fallback to `index.html` for `/about`; Vite development and preview support it. Unknown paths show a not-found view. No case-study pages or password authentication are implemented.

`refrences/homepage-mockup.png` and `refrences/moodboard.png` guide the composition. The current portfolio screenshot is a content reference only. The latest user-supplied information architecture and experience entries supersede the earlier homepage sections and experience labels.

## Shared system

The app imports one token layer: `src/styles/tokens.css`. Space Grotesk is self-hosted. Grid: 4 / 8 / 12 columns, with 20 / 32 / 64px gutters. Max content width: 1440px. Breakpoints: 48rem and 64rem. Reading width: 65ch. Focus outline: 2px ink. These documented implementation values supplement the source skill.

All five projects use one metadata layout and the same `--project-media-ratio: 16 / 10` frame. The ratio is a documented shared media pattern, approximating the supplied Reckitt source proportions. Content is contained without cropping; NDA logos are centered inside the same frame. Project gaps are 48px mobile / 64px tablet and desktop; adjacent major sections have 96px mobile / 128px desktop spacing from their combined padding.

Design Experiments is a horizontal, scrollable system: up to three modules across on desktop, two on tablet, and horizontally scrollable modules on mobile. Add entries to the array in `Experiments.tsx`. Optional image/video previews are typed in `ExperimentPreview.tsx`; videos require real poster assets.

Motion uses existing 120 / 200 / 320ms tokens, ease-out, and spacing-token translations. `--motion-hover-scale: 1.01` allows a restrained 1% media hover scale. Reduced motion uses still posters instead of videos and disables reveals, shape movement, smooth scrolling, and carousel animation. Videos pause outside the viewport; playback controls appear on keyboard focus. The skip link appears only on keyboard focus and is excluded from print.

## Real assets

Used from `public/images/homepage/`:

- `Reckitt admin Cover.mp4`, `Reckitt Intranet Cover.mp4`
- `Bajaj Cover.png`, `Hyundai.png`, `Allianz.png`
- `About me.png`
- `randheer.png`, `milan.jpeg`, `Payal.jpeg`, `daiana.jpeg`
- `reckitt-admin-poster.jpg`, `reckitt-intranet-poster.jpg` — previously generated from the two real videos.

Only the German Word Game preview and destination URL are missing. Its supplied title, description, and disciplines are displayed with a clearly labelled placeholder. No confidential project screenshots are used or fabricated.

## Files changed in the architecture refactor

New:
- `src/App.tsx`
- `src/pages/AboutPage.tsx`
- `src/components/layout/SiteFooter.tsx`

Updated:
- `src/main.tsx`
- `src/pages/HomePage.tsx`
- `src/components/layout/PageShell.tsx`
- `src/components/layout/SiteHeader.tsx`
- `src/components/home/Hero.tsx`
- `src/components/home/About.tsx`
- `src/components/home/Experience.tsx`
- `src/components/home/Testimonials.tsx`
- `src/components/home/Experiments.tsx`
- `src/components/home/ExperimentPreview.tsx`
- `src/components/work/ProjectPreview.tsx`
- `src/data/home.ts`
- `src/data/projects.ts`
- `src/data/experience.ts`
- `src/styles/tokens.css`
- `src/styles/layout.css`
- `src/styles/hero.css`
- `src/styles/about-experience.css`
- `src/styles/editorial.css`
- `README.md`

Replaced: `src/components/home/Contact.tsx` by the shared `SiteFooter.tsx`, preserving the supplied contact content. `dist/` is regenerated. No source assets or package dependencies changed.

Verification: production build, direct Home/About loading, cross-route navigation, carousel controls, equal project-frame measurements, and no horizontal overflow at 320 / 390 / 768 / 1440px. The reduced-motion hook and shared motion rules remain in place.

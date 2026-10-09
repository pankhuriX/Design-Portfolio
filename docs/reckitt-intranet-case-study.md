# Reckitt Sales Intranet case study

Route: `/work/reckitt-intranet`. The existing second Selected Work module links here without visual changes. Next project links to `/#bajaj-health` until a dedicated Bajaj page exists.

## Sources

Primary narrative: https://app.notion.com/p/cc39ba4aa096833e90d781ec214b8cb4
Supporting project notes: https://app.notion.com/p/30b9ba4aa0968228a69f81849e4bcc62
Both were fetched on 2026-10-09. The final Notion narrative governs role, 12-month duration, decisions, trade-offs, and qualitative outcomes. The 14-participant research count and team metadata come from the explicit user brief; the final Notion page does not specify a participant count. No numeric outcome metrics are used. The referenced Case Study 2 PDF was not found; its path was requested.

## Asset mapping

All assets are under `public/images/reckitt-intranet/`.

| File | Use |
|---|---|
| Cover.png | Hero |
| Legacy portal.png | Challenge |
| Persona.png | Research |
| Information Arch.png | Task-led navigation |
| Dasboard.mp4 | Role-aware dashboard; original filename spelling retained |
| dashboard-poster.jpg | Actual frame extracted at 0.5 seconds from Dasboard.mp4, used as poster and comparison final view |
| Launchpad.png | Comparison wireframe, top-aligned crop with full-image link |
| Ongoing image.png | Ongoing Orders (the available equivalent of the brief's 1st Image.png) |
| Forecast.png | Forecasting |
| Components.png | Decision 03.3: reusable components and states |
| Error validation.png | Decision 03.4: forecasting notice within the entry form |

The supplied Components.png now illustrates the reusable-system decision. The corrected Error validation.png illustrates the feedback decision, showing the forecasting notice above the entry fields. No full-length final Launchpad export was found. The comparison is explicitly labeled as the Launchpad upper section; layouts evolved, so it is not a pixel-identical before/after. No images were generated or recolored.

## Shared components and responsive behavior

CaseMedia now accepts an optional asset root, preserving the Admin Portal default. CaseNavigation accepts chapter data and a case number, preserving its original defaults and scrollspy implementation. Case Study 1 page and styles are not edited in this task.

ImageComparison is a reusable local image pair, defaulting to 50%. A captured pointer supports mouse/touch drag, clamped to 0–100%. A labeled native range supports keyboard arrows/Home/End and exposes its current meaning. A visible focus outline, 48px handle, normal page scrolling outside the handle, full-image links, and no automatic animation support accessibility and reduced motion.

The established desktop rail starts after metadata and ends within the article before the footer. Below 1280px it becomes the existing compact sticky selector. Outcomes use two columns from 768px and a single column below. Nonessential geometry hides below 1024px, as in the existing case system.

## Validation

- Production build passes.
- All 14 automated tests pass, including new touch/mouse pointer capture, bounds, range-state tests and existing video/reduced-motion tests.
- At 1280px: hero, comparison, nav/scrollspy, project-card entry link, no horizontal overflow, no broken loaded images, no browser runtime errors.
- Browser keyboard ArrowRight moved 50 → 51; Home/End reached endpoints; actual mouse drag returned the divider to 50%.
- Dashboard media decoded to readyState 4; background visibility correctly kept playback paused. Offscreen pause is covered by tests.
- Browser viewport override requests for 1024/768/390px did not change innerWidth from 1280px. Those visual checks and real-device touch playback remain unverified; responsive CSS and synthetic touch/reduced-motion behavior are tested separately.

## Files changed in this task

- src/App.tsx
- src/data/projects.ts
- src/components/case-study/CaseMedia.tsx
- src/components/case-study/CaseNavigation.tsx
- src/components/case-study/ImageComparison.tsx (new)
- src/pages/ReckittIntranetPage.tsx (new)
- src/styles/intranet-case-study.css (new)
- public/images/reckitt-intranet/dashboard-poster.jpg (extracted)
- tests/image-comparison.test.mjs (new)
- docs/reckitt-intranet-case-study.md (new)

Other existing working-tree changes predate this task.

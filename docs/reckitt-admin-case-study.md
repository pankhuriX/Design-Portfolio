# Reckitt Admin Portal case study

Route: `/work/reckitt-admin`

## Source decisions

Primary narrative: Notion **Case Study 1**, https://app.notion.com/p/dfa9ba4aa09683a381f101be149534cd (read in full), with its parent Project 01 brief checked for context. The final Notion version takes precedence over older raw material: **12 months**, **sole hands-on UX/UI Designer**, with Payal Tanksale providing direction and design review. Team categories, the User Testing responsibility and the 0→1 tag are supplied explicitly in the implementation brief. No additional responsibilities or metrics are inferred.

The 40% and threefold figures are clearly attributed to stakeholder reporting, not independently verified product analytics. No separate case-study PDF was located in the supplied repository/attachments. The requested screenshots provide the visual evidence.

`Critical CTA'S.png` contains two redesigned screens, not an established legacy-versus-new comparison. Its caption is therefore “Action hierarchy and supporting context,” not misleading Before/After labels.

## Assets

All eight requested assets in `public/images/reckitt-admin` are used without replacement:

- Cover.png — hero
- Legacy Portal.png — challenge
- Critical CTA'S.png — consequences/action hierarchy
- Progress Visibility.png — guided flow
- Components.png — feedback states
- Price change journey.png — key journey
- 1st video.mp4 — product information workflow
- Forecast.mp4 — forecast workflow

Two JPEG poster frames were extracted from the actual videos at 0.5 seconds: `product-poster.jpg` and `forecast-poster.jpg`. Source media remain unchanged. Full-size image links make dense screenshots inspectable on smaller screens.

## System values and responsive behavior

Case-study-only `--case-accent: #c50074` is an accessible magenta for text and active navigation. Product screenshots retain their original pink. `--case-reading-width: 44rem` (704px) implements the requested reading measure. All other typography, spacing and borders reuse existing tokens. Hero uses the 72px display scale; chapter headings use the 56px H1 scale and decisions the 40px H2 scale. Chapters use 128px gaps; important chapters use 128+64 = 192px on tablet/desktop.

At 1280px, the article has a 224px left rail, 64px gutter, and 832px visual column within the existing 1120px content container. Rail begins after hero/metadata and sticks under the site header. At 1024px and below, the native section select replaces it. The existing site header is sticky on the case-study route only; ResizeObserver measures its height so the selector and anchor offsets clear wrapped mobile navigation. The selector is within the article, never above the hero.

Scrollspy batches native scroll events through requestAnimationFrame, chooses the last chapter that crosses the CSS-defined anchor offset, and sets aria-current, font weight and an accent border. Standard anchor links preserve native/smooth scrolling and reduced-motion behavior. No scroll interception or snapping.

Videos are vertically stacked for readable scale. They have native controls, actual poster frames, muted inline looping playback while visible, offscreen/background pause, and persistent manual pause intent. Reduced motion prevents autoplay but leaves manual playback available.

## Scope and compromises

Only the new case-study page and the linking code required to reach it were added. The homepage project module gains a stretched accessible title link; its content, media sizing and design stay the same. Its existing video pause button stays above the link layer. Project IDs and initial hash handling support the return link.

The Intranet case study does not exist yet. “Next project” therefore links to the real Intranet project on Home (`/#reckitt-intranet`), rather than a broken route or a fabricated second case study.

## Changed files

- src/pages/ReckittAdminPage.tsx
- src/components/case-study/CaseChapter.tsx
- src/components/case-study/CaseMedia.tsx
- src/components/case-study/CaseNavigation.tsx
- src/styles/case-study.css
- src/App.tsx
- src/data/projects.ts
- src/components/work/ProjectPreview.tsx
- public/images/reckitt-admin/product-poster.jpg
- public/images/reckitt-admin/forecast-poster.jpg
- tests/case-video.test.mjs
- docs/reckitt-admin-case-study.md

## Verification

Production build and 12 automated tests pass. The homepage title/cover link opens the new route. Browser checks at 1280, 1024, 768 and 390px show no horizontal overflow. Desktop rail stickiness, settled active section, mobile selector anchor navigation and keyboard focus were checked. All six images load. Reduced-motion video behavior is covered by automated tests rather than OS-level emulation.

## Final editorial refinement

This pass changes only `src/pages/ReckittAdminPage.tsx`, `src/components/case-study/CaseNavigation.tsx`, `src/styles/case-study.css`, and this document. The earlier implementation notes above describe the initial version; the values below supersede its type and spacing choices.

- Hero: broad two-line title, 56px at desktop with 500 weight and 1.08 leading.
- Chapter titles: existing H2 scale (38.4px at 1280), 500 weight, sentence case. Decision titles: existing 32px quote token, 500 weight.
- Requested 18px prose/metadata and 1.6 leading are documented as case-only `--case-body-size` and `--case-body-leading`; no global typography tokens change.
- Reading width is 640px (`--case-reading-width: 40rem`) versus 832px article media at 1280.
- Labels to headings: 16px; heading to prose: 24px; prose to images: 48px; image captions: 8px. Major transitions: 160px (128+32); decisions: 128px.
- Metadata combines Client & Partner, uses the requested responsibility wording, and stacks on mobile.
- Explanation text is shortened from the Notion-grounded narrative; outcomes retain stakeholder attribution.
- Removed RECKITT rail footer and repeating principle dividers. One strong rule introduces Outcome, with one 16px yellow square marking the conclusion.
- Outcome has a one-line desktop heading and three equal metric columns; mobile stacks them.
- Assets, video handling, scrollspy, shared navigation, homepage project styling and other pages are unchanged.

Validation: 1280px hero renders as two lines and Outcome as one; metrics share an identical top edge and width. 1024/768/390px have no horizontal overflow, all six images load, and the active rail updates to Outcome. Build and all 12 existing interaction/video tests pass, including reduced-motion autoplay prevention.

## Final polish

Only `src/styles/case-study.css`, `src/pages/ReckittAdminPage.tsx`, and this document change in this pass. Hero intro/tags gaps tighten from 32px to 24px and cover lead-in from 64px to 48px; image dimensions are unchanged. Labels use a scoped 11px token (requested 11–12px range), existing medium weight/micro tracking, and a 55% project-magenta mix with existing muted text for quieter emphasis without reduced opacity. Major type sizes remain as approved. Decision 01 is now two short sentences including its trade-off; the other decisions already meet the one/two-sentence target.

Outcome uses subgrid to guarantee a shared values row and description baseline, with equal columns and 24px gutters. Reflection gains 16px of separation (176px desktop/tablet, 144px mobile). Added one short black rule beside the hero identifier and one 24px vertical closing rule at Reflection. The single existing yellow Outcome square remains. These accents are static, and nonessential shapes/hero rule are hidden on mobile. No new image treatment, motion or navigation logic.

## Grid-integrated geometric framing

The hero circle and square share a vertical black rule and a common left edge. Local size tokens derive from existing spacing tokens: circle 192px / square 64px at desktop, 160px / 48px at tablet. Product imagery and content flow remain unchanged. The middle chapters have no decorative markers.

Outcome retains only a small yellow square anchored to its top structural rule. Reflection uses a 96px blue half-circle attached to a 128px vertical rule at the far-right edge, outside the reading column. Its existing 176px desktop separation remains. The previous floating Outcome circle and red closing square are removed.

Geometry is static, pointer-inert, and hidden from assistive technology. Large geometry is hidden below 1024px and in print. Verified Home, About, and case study at 1280, 1024, 768, and 390px without horizontal overflow. Case-study scrollspy still selects the closing chapter correctly.

# Case Study System

Case studies should feel like well-designed editorial articles, not Behance boards.

The work and thinking are the focus.

## Desktop structure

Preferred layout:

- sticky side navigation: `200–240px`
- gap between sidebar and article: `64–80px`
- reading column: approximately `680–760px`
- media may break beyond the reading column
- occasional near-full-width visuals are encouraged

## Suggested structure

1. Project introduction
2. Context
3. Research
4. Insights
5. Design
6. Validation
7. Outcome

Do not force every project to use identical headings if the story needs something different.

## Sticky side navigation

Example:

- `01 Context`
- `02 Research`
- `03 Insights`
- `04 Design`
- `05 Validation`
- `06 Outcome`

Rules:

- sticky on desktop
- active section should update while scrolling
- active state uses the project's accent color
- inactive items remain black or muted
- keep the treatment quiet and compact
- collapse to a compact section control or remove persistent stickiness on small screens

## Article rhythm

Do not repeat:

`heading → huge image → heading → huge image`

for the entire page.

Vary layouts using:

- heading + prose
- prose + supporting artifact
- two-column research evidence
- large insight statement
- full-width image
- image pair
- annotated detail
- before/after
- numbered findings
- short quote or observation
- captioned documentation

## Imagery patterns

Prefer reusable components:

- `ProjectHero`
- `ContainedImage`
- `FullBleedImage`
- `ImagePair`
- `ImageGrid`
- `DetailCrop`
- `CaptionedImage`
- `BeforeAfter`

### ProjectHero

One strong composed visual after the project introduction.
Should establish the project visually without overcrowding it.

### Research documentation

Keep authentic:

- journey maps
- workshop boards
- usability-test photography
- field research
- sketches
- early concepts

Do not over-polish evidence until it loses credibility.

### UI screenshots

Give screenshots breathing room.
Contained screenshots can sit on `--color-surface` or `--color-canvas`.

Do not automatically put every UI inside a device mockup.

### Detail crops

When discussing one interaction, crop into the relevant UI area instead of showing the entire screen.

### Full-bleed moments

Occasionally let a strong image break beyond the text column.
Use this as pacing, not as the default layout.

## Captions

Use concise captions such as:

`Fig. 03 — Journey mapping during the EV route-planning test trip.`

Captions should provide context rather than repeat the preceding paragraph.

## Project branding

The portfolio visual system frames the project.
The project itself keeps its own brand language.

Example:

- Hyundai screenshots remain Hyundai.
- Allianz artifacts remain Allianz.
- Threaded retains its own product identity.

Do not overlay unnecessary Bauhaus geometry onto project screenshots.

## Reading experience

Prioritize:

- comfortable line length
- strong headings
- meaningful whitespace
- clear transitions
- scannable section hierarchy
- evidence near the claim it supports

The reader should understand the project even when skimming.

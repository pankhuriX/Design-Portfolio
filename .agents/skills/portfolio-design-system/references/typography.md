# Typography

## Primary typeface

Use **Space Grotesk** as the primary portfolio typeface.

Fallback:

```css
font-family: "Space Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

## Type scale

| Style | Size | Line-height | Weight | Tracking |
|---|---:|---:|---:|---:|
| Display XL | 96px | 88px | 600 | -0.03em |
| Display | 72px | 68px | 600 | -0.025em |
| H1 | 56px | 56px | 600 | -0.02em |
| H2 | 40px | 44px | 600 | -0.015em |
| H3 | 24px | 30px | 600 | -0.01em |
| Body Large | 20px | 30px | 400 | normal |
| Body | 16px | 26px | 400 | normal |
| Label | 12px | 16px | 500 | 0.05em |
| Micro | 10px | 14px | 500 | 0.06em |

## Responsive typography

Scale display sizes down fluidly rather than simply clipping them.

Suggested approach:

```css
--text-display-xl: clamp(3.5rem, 7vw, 6rem);
--text-display: clamp(3rem, 5.5vw, 4.5rem);
--text-h1: clamp(2.5rem, 4vw, 3.5rem);
--text-h2: clamp(2rem, 3vw, 2.5rem);
```

Preserve tight display leading.

## Usage

Use uppercase primarily for:

- large display statements
- section identifiers
- navigation labels
- project numbering
- compact metadata labels

Use sentence case for:

- body copy
- explanatory headings where readability benefits
- captions
- long-form case-study text

Do not write long paragraphs in uppercase.

## Editorial hierarchy

Prefer strong contrast between:

- very large headlines
- small systematic metadata
- comfortable long-form body copy

This contrast is a key part of the portfolio's visual identity.

## Line length

Long-form case-study text should usually remain around `60–75ch` maximum.

Do not stretch body copy across the full page width.

## Numbering syntax

Homepage:

- `00 — HERO`
- `01 — WORK`
- `02 — ABOUT`
- `03 — EXPERIENCE`
- `04 — CONTACT`

Case study:

- `01.1 — CONTEXT`
- `01.2 — RESEARCH`
- `01.3 — INSIGHTS`
- `01.4 — DESIGN`
- `01.5 — VALIDATION`
- `01.6 — OUTCOME`

Numbers are structural information, not decoration.

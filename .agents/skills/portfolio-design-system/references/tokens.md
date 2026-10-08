# Design Tokens

## Color

### Core neutrals

| Token | Value | Purpose |
|---|---|---|
| `--color-canvas` | `#F3F0E8` | Main page background |
| `--color-surface` | `#E8E5DD` | Secondary surfaces / image containers |
| `--color-ink` | `#111111` | Primary text and strong rules |
| `--color-text-muted` | `#5B5A56` | Secondary copy and metadata |
| `--color-border` | `#CBC8C0` | Subtle rules and dividers |
| `--color-white` | `#FFFFFF` | Use sparingly where pure white is needed |

### Accent colors

| Token | Value | Purpose |
|---|---|---|
| `--color-red` | `#E63323` | Primary accent |
| `--color-blue` | `#1559C7` | Secondary accent |
| `--color-yellow` | `#F2C514` | Tertiary accent |

### Color rules

- Canvas + ink should dominate the interface.
- Accent colors should normally occupy no more than a small portion of a composition.
- Prefer one dominant accent per project or composition.
- Do not place red, blue, and yellow together simply to signal “Bauhaus.”
- Never recolor project screenshots to match the portfolio.
- Use accent colors for project identity, active states, section markers, and meaningful graphic hierarchy.

## Spacing

Base unit: `4px`.

| Token | Value |
|---|---:|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |
| `--space-12` | `48px` |
| `--space-16` | `64px` |
| `--space-24` | `96px` |
| `--space-32` | `128px` |

### Spacing rules

- Do not introduce arbitrary values such as `27px`, `53px`, or `91px` unless there is a documented optical reason.
- Major homepage sections: generally `96–128px` vertical separation on desktop.
- Case-study sections: generally `96–128px`.
- Heading to supporting copy: `24–32px`.
- Copy to media: `40–64px`.
- Metadata clusters: `8–16px`.
- Prefer generous negative space over additional decorative elements.

## Borders and radius

- Default rule: `1px solid var(--color-border)`.
- Strong rule: `1px solid var(--color-ink)`.
- Border radius should usually be `0–4px`.
- Avoid large-radius cards unless a real product screenshot naturally uses them.
- Avoid shadows unless necessary to distinguish a physical mockup or layered artifact.

## Motion

Suggested durations:

- fast: `120ms`
- standard: `200ms`
- slow: `320ms`

Use restrained easing and honor `prefers-reduced-motion`.

Motion should clarify state, scrolling, hover, focus, or content entry.
Do not use decorative perpetual animation.

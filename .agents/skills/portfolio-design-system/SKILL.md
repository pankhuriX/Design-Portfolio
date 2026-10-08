---
name: portfolio-design-system
description: Apply the Pankhuri portfolio design system whenever creating, editing, reviewing, or refactoring portfolio UI, page layouts, case studies, components, responsive behavior, typography, color, spacing, imagery, or visual hierarchy. Use this skill for any frontend work in the portfolio that affects appearance or interaction patterns.
---

# Portfolio Design System

Use this skill whenever working on the visual or interaction design of the portfolio.

The goal is a contemporary product-design portfolio inspired by Bauhaus principles:
functional, editorial, geometric, systematic, spacious, and highly readable.

The portfolio must **not** look like a retro Bauhaus poster or an art-school exercise.

## Core principle

Bauhaus influence should come from:

- grid
- hierarchy
- typography
- numbering
- functional use of color
- strong geometry
- purposeful asymmetry
- restraint

Do not add decorative circles, rectangles, primary colors, or graphic motifs unless they serve hierarchy, navigation, project identity, or composition.

## Required workflow

Before implementing or modifying UI:

1. Read `references/tokens.md`.
2. Read `references/typography.md`.
3. Read `references/layout.md`.
4. For project or case-study work, also read `references/case-studies.md`.
5. Reuse existing components and tokens before creating new ones.
6. Do not introduce new visual values unless the current system genuinely cannot support the requirement.
7. If a new value or pattern is necessary, add it to the design system rather than implementing it as an unexplained one-off.

## Implementation rules

- Use design tokens in CSS variables or the project's existing token system.
- Avoid magic numbers.
- Prefer semantic component APIs over repeated inline styles.
- Keep responsive behavior intentional rather than simply stacking everything.
- Preserve project-brand imagery and screenshots; the portfolio frame can be Bauhaus-inspired, the work itself should remain authentic.
- Use subtle motion only when it improves comprehension or spatial continuity.
- Maintain accessibility: sufficient contrast, visible keyboard focus, logical heading hierarchy, reduced-motion support, and usable touch targets.

## Visual tone

Aim for:

- contemporary
- editorial
- confident
- quiet
- precise
- architectural
- product-focused

Avoid:

- retro pastiche
- excessive primary colors
- gratuitous geometry
- over-animation
- glassmorphism
- heavy shadows
- overly rounded cards
- generic SaaS-dashboard styling
- portfolio pages made entirely of cards

## Final review checklist

Before finishing any UI task, verify:

- typography uses the defined scale
- spacing uses the defined spacing scale
- colors come from tokens
- layout aligns to the grid
- the page has enough negative space
- imagery has a deliberate presentation mode
- the current section hierarchy is obvious
- Bauhaus accents are purposeful rather than decorative
- responsive layouts remain editorial and readable
- no one-off styling was introduced unnecessarily

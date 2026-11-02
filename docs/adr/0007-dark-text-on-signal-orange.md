# 0007. Dark-gray text on signal-orange

- Status: Accepted
- Date: 2026-11-02
- Deciders: Jonas Höchst

## Context

The styleguide working draft shows primary CTA buttons as white text on signal-orange (`#FF6B35`) and rates the pair 3.0:1, passing for bold text. Measured, it is 2.84:1, which fails WCAG 2.1 AA even for large bold text (3:1 required).

Alternatives: darken the orange until white passes (`#F0612A` 3.26:1, bold text only), or keep the orange and use dark text.

## Decision

Keep signal-orange unchanged. Text and icons on it are dark-gray (`#222222`), 5.61:1, passing AA for all text sizes. Token: `color.role.on-cta`.

## Consequences

- The orange stays as defined in print and flyer.
- CTA buttons look different from the working draft; the styleguide should be updated to match.
- Button labels of any size and weight are readable, not only bold ones.

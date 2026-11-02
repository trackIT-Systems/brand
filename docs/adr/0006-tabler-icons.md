# 0006. Tabler Icons as icon set

- Status: Accepted
- Date: 2026-11-02
- Deciders: Jonas Höchst

## Context

The websites and other materials need a consistent set of UI and concept icons. Drawing our own is not worth it for generic icons. The set should fit the rounded shape language of [DESIGN.md](../../DESIGN.md) and be free for commercial use.

## Decision

Use [Tabler Icons](https://tabler.io/icons) (MIT license, ~6,200 icons, outline style with rounded caps and joins on a 24px grid).

- Consumers install the official package (`@tabler/icons`) at a pinned version; this repo does not copy the full set.
- [assets/icons/icons.yml](../../assets/icons/icons.yml) maps our concepts to icon names, so the same concept always gets the same icon.
- Custom icons (e.g. for our own devices) are drawn on the same grid and stroke, and live in `assets/icons/`.

## Consequences

- No cost. The MIT notice must stay with redistributed copies (the npm package includes it).
- Other tabler.io products (illustrations, templates) are separately licensed and not covered.
- Icon choices drift unless new concepts are added to the map first.

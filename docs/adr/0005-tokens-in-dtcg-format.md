# 0005. Design tokens in W3C DTCG format, built with Style Dictionary

- Status: Proposed
- Date: 2026-11-02
- Deciders: Jonas Höchst

## Context

Colors, type and spacing must be usable by the website (CSS, Tailwind) and possibly other tools (slides, documents, apps) without retyping values.

## Decision

- Tokens are authored as JSON in the W3C Design Tokens Community Group (DTCG) format, in [tokens/](../../tokens/).
- [Style Dictionary](https://styledictionary.com) builds them into `dist/` (`npm run build`):
  - `tokens.css`: CSS custom properties on `:root`; role tokens reference palette tokens.
  - `theme.css`: the same values as a Tailwind v4 `@theme` block.
  - `tokens.json`: resolved values for other tools.
- Variable names follow Tailwind's theme namespaces (`--color-*`, `--radius-*`, `--font-*`, `--font-weight-*`), so one name works in CSS and Tailwind: `--color-cta` is `bg-cta`.
- Both roles and palette are exported. Palette colors carry a `palette` prefix (`--color-palette-mint`), so they stand apart from roles in code.

Consumers get `dist/` from versioned releases, see [ADR-0010](0010-releases-on-github.md).

## Consequences

- One source for every value; outputs are generated, never edited, and not committed.
- Consumers can lint against raw values (no hex codes outside tokens).
- Adds Node and a build step to this repo.
- Style Dictionary 5.6 does not resolve DTCG dimensions written as `{ value, unit }`; [tokens/build.js](../../tokens/build.js) adds a small transform for them. Remove it once Style Dictionary handles the format.

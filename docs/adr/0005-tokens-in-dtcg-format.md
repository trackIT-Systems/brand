# 0005. Design tokens in W3C DTCG format

- Status: Proposed
- Date: 2026-10-29
- Deciders: Jonas Höchst

## Context

Colors, type and spacing must be usable by the website (CSS, Tailwind) and possibly other tools (slides, documents, apps) without retyping values.

## Decision

Tokens are authored as JSON in the W3C Design Tokens Community Group (DTCG) format. A build step (e.g. Style Dictionary) generates CSS custom properties and a Tailwind theme.

## Consequences

- One source for every value; outputs are generated, never edited.
- Consumers can lint against raw values (no hex codes outside tokens).
- Adds a small build step to this repo.

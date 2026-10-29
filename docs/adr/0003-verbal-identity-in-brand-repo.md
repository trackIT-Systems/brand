# 0003. Verbal identity is part of the brand

- Status: Accepted
- Date: 2026-10-29
- Deciders: Jonas Höchst

## Context

How we write (Sprachstil, terms, product names) affects how serious we appear as much as logo and color do. Texts that sound machine-written are easy to spot. Terms drift when every page or document picks its own words.

## Decision

The voice guide ([VOICE.md](../../VOICE.md)) and the glossary ([glossary/terms.yml](../../glossary/terms.yml)) live in this repo, next to the visual rules. In English we call it **Voice**; in German **Sprachstil**.

The glossary is machine-readable so it can generate lint rules (Vale) for consumers.

## Consequences

- Website, datasheets and newsletters follow the same terms.
- Voice rules get derived from real examples before they are enforced; until then they are guidance.

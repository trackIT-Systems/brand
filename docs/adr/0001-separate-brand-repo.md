# 0001. Keep the brand in its own repository

- Status: Accepted
- Date: 2026-10-29
- Deciders: Jonas Höchst

## Context

The brand is used by more than the website: product subdomains, datasheets, slides, newsletters, and later possibly other tools. If the rules live inside the website repo, every other consumer copies them and the copies drift.

Agents only see the repo they work in, so rules in a separate repo must reach consumers as local files.

## Decision

The brand identity (visual and verbal) lives in `trackIT-Systems/brand`. Consumers use it as a dependency. The published package includes the rule documents (`DESIGN.md`, `VOICE.md`, glossary), not only tokens and assets, so agents in consuming repos can read them locally.

## Consequences

- One place to change a color, a font or a term.
- Consumers pin a version and update deliberately; a brand change reaches the website through a dependency update PR.
- Packaging and versioning need to be set up (registry choice is open).

# 0002. Scope is brand identity, not product UI

- Status: Accepted
- Date: 2026-10-29
- Deciders: Jonas Höchst

## Context

A design system can cover the brand (logo, color, type, imagery, voice) or also a component library for application UI (tables, forms, dashboards). The two serve different needs and change at different speeds.

## Decision

This repo covers brand identity and corporate design only: tokens, assets, visual rules, voice, glossary. Product UI components are out of scope.

## Consequences

- The repo stays small and framework-independent.
- Web components for the websites live in the web repo and use the tokens from here.
- Product apps may adopt the tokens, but nothing here is built for them. Revisit if a second consumer needs shared components.

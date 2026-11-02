# 0009. Our display font is "trackIT Systems", matched to the wordmark

- Status: Accepted
- Date: 2026-11-02
- Deciders: Jonas Höchst

## Context

The wordmark has letters of its own: short capitals and ascenders, and an `r` with a cut arm. Headlines set in an off-the-shelf font look different from the logo. We compared open-source fonts (Mona Sans, Hubot Sans, Archivo, Anybody); each is close in parts, but none matches the logo.

## Decision

We use our own font, **trackIT Systems**, with two styles:

| Style | Weight | Matches |
|---|---|---|
| trackIT Systems Bold | 700 | "trackIT" in the wordmark |
| trackIT Systems Regular | 400 | "systems" in the wordmark |

Both styles form one family, `font-family: "trackIT Systems"`. Its use stays as before: a display font for selected cases, not for running text.

The font is built and kept in the private repo [trackIT-Systems/font](https://github.com/trackIT-Systems/font). Its origin, license and build live there, not in this repo.

## Consequences

- Typeset headlines match the logo.
- `font.family.display` is `trackIT Systems`.
- The font files are not in this repo and not on the public preview. To see the font in the local preview, clone the font repo into `assets/fonts/trackit-systems/` (ignored here).
- The font is not published on websites until its license is cleared; see the font repo.
- This leaves the text font (body text, UI, data) open.

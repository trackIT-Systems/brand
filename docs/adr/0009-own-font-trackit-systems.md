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

trackIT Systems is based on a commercial font, modified with the permission of its foundry. It may be used in this repo and in public.

- The built files (`otf/`, `woff2/`) live in [assets/fonts/trackit-systems/](../../assets/fonts/trackit-systems/), with a README on use and license. They are published with everything else: the brand preview and the releases ([ADR-0010](0010-releases-on-github.md)).
- The font is built in the private repo [trackIT-Systems/font](https://github.com/trackIT-Systems/font), which also holds its origin, license and the source files. Those stay private. A new build is copied here by pull request.

## Consequences

- Typeset headlines match the logo, on the websites and in the public preview.
- `font.family.display` is `trackIT Systems`.
- The files here are copies: after a change in the font repo, copy the new build here.
- Source files and the name of the original font stay out of this public repo; `.gitignore` blocks `source/` folders under `assets/fonts/`.
- The text typefaces (body text, UI, data) are Alegreya Sans and Alegreya ([ADR-0011](0011-text-typefaces-alegreya.md)).

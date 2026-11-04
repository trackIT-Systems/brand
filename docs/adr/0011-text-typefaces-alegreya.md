# 0011. Alegreya Sans and Alegreya as text typefaces

- Status: Accepted
- Date: 2026-11-04
- Deciders: Jonas Höchst, with the team

## Context

Our display font trackIT Systems is for selected cases only ([ADR-0009](0009-own-font-trackit-systems.md)). Body text, UI and data need a text typeface. We need a sans for screens and a serif for print, and the two should look like they belong together.

We compared four free pairings in a preview page: Alegreya Sans + Alegreya, Jost + Spectral, Schibsted Grotesk + Newsreader, and Libertinus Sans + Libertinus Serif. Each was shown in a news post, an A4 page and side-by-side specimens.

## Decision

The text typefaces are **Alegreya Sans** and **Alegreya** by Huerta Tipográfica:

| Family | Use | Token |
|---|---|---|
| Alegreya Sans | Screens: websites, UI, data, running text online | `font.family.text` |
| Alegreya | Print: running text in datasheets, flyers and other documents | `font.family.serif` |

Reasons:

- One type system with a sans and a serif, designed as a pair.
- Open license (SIL Open Font License 1.1): free to use, embed and redistribute.
- The team liked it best.

The files are self-hosted in [assets/fonts/alegreya-sans/](../../assets/fonts/alegreya-sans/) and [assets/fonts/alegreya/](../../assets/fonts/alegreya/), with the license next to them. We load no fonts from Google Fonts.

## Consequences

- `font.family.text` is Alegreya Sans; `font.family.serif` is Alegreya.
- Both families are complete in this repo: Alegreya Sans from Thin to Black, Alegreya from 400 to 900, each with italics. The tokens use Regular (400), Medium (500) and Bold (700).
- Alegreya Sans has no semibold; `font-weight: 600` falls back to Bold.
- Alegreya Sans looks smaller than most sans fonts at the same size, so text needs a slightly larger font size.
- Both families use old-style figures by default. Where numbers need to line up, we switch to lining figures ([ADR-0012](0012-lining-figures-for-numbers.md)).
- The release package grows by the font files (both complete families: about 1.5 MB as woff2, 4.4 MB as TTF). Web pages load only the weights they use.

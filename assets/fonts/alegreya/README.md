# Alegreya

Our text typeface for print: running text in datasheets, flyers and other documents ([ADR-0011](../../../docs/adr/0011-text-typefaces-alegreya.md)). Token: `font.family.serif`. For screens, use [Alegreya Sans](../alegreya-sans/).

| Style | Weights | Files |
|---|---|---|
| Roman | 400–900 (variable) | `Alegreya[wght]` |
| Italic | 400–900 (variable) | `Alegreya-Italic[wght]` |

`ttf/` for desktop apps (documents, slides), `woff2/` for the web. Both are variable fonts: one file covers every weight from Regular (400) to Black (900).

Figures are old-style by default. In tables and data, use lining, tabular figures ([ADR-0012](../../../docs/adr/0012-lining-figures-for-numbers.md)): `font-variant-numeric: lining-nums tabular-nums`.

## Web use

```css
@font-face { font-family: "Alegreya"; font-weight: 400 900; font-style: normal; font-display: swap; src: url("woff2/Alegreya%5Bwght%5D.woff2") format("woff2"); }
@font-face { font-family: "Alegreya"; font-weight: 400 900; font-style: italic; font-display: swap; src: url("woff2/Alegreya-Italic%5Bwght%5D.woff2") format("woff2"); }
```

## Source and license

Designed by Juan Pablo del Peral, Huerta Tipográfica ([github.com/huertatipografica/Alegreya](https://github.com/huertatipografica/Alegreya)). The TTF files are the Google Fonts build ([github.com/google/fonts/tree/main/ofl/alegreya](https://github.com/google/fonts/tree/main/ofl/alegreya), version 2.009); the woff2 files are converted from them with fontTools, unchanged otherwise.

License: SIL Open Font License 1.1, see [OFL.txt](OFL.txt). Free to use, embed and redistribute; keep OFL.txt with every copy.

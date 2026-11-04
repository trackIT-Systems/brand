# Alegreya Sans

Our text typeface for screens: websites, UI, data and running text online ([ADR-0011](../../../docs/adr/0011-text-typefaces-alegreya.md)). Token: `font.family.text`. For print, use [Alegreya](../alegreya/).

| Style | Weight | Files |
|---|---|---|
| Thin, Thin Italic | 100 | `AlegreyaSans-Thin`, `AlegreyaSans-ThinItalic` |
| Light, Light Italic | 300 | `AlegreyaSans-Light`, `AlegreyaSans-LightItalic` |
| Regular, Italic | 400 | `AlegreyaSans-Regular`, `AlegreyaSans-Italic` |
| Medium, Medium Italic | 500 | `AlegreyaSans-Medium`, `AlegreyaSans-MediumItalic` |
| Bold, Bold Italic | 700 | `AlegreyaSans-Bold`, `AlegreyaSans-BoldItalic` |
| ExtraBold, ExtraBold Italic | 800 | `AlegreyaSans-ExtraBold`, `AlegreyaSans-ExtraBoldItalic` |
| Black, Black Italic | 900 | `AlegreyaSans-Black`, `AlegreyaSans-BlackItalic` |

`ttf/` for desktop apps (documents, slides), `woff2/` for the web. This is the complete family, 14 styles. There is no semibold; `font-weight: 600` falls back to Bold. The tokens use Regular, Medium and Bold; the others are for display sizes and special cases. Thin is stored as weight 250 in the font files; on the web it is mapped to 100. Load only the weights a page uses.

Figures are old-style by default. In tables and data, use lining, tabular figures ([ADR-0012](../../../docs/adr/0012-lining-figures-for-numbers.md)): `font-variant-numeric: lining-nums tabular-nums`.

## Web use

```css
@font-face { font-family: "Alegreya Sans"; font-weight: 100; font-style: normal; font-display: swap; src: url("woff2/AlegreyaSans-Thin.woff2") format("woff2"); }
@font-face { font-family: "Alegreya Sans"; font-weight: 100; font-style: italic; font-display: swap; src: url("woff2/AlegreyaSans-ThinItalic.woff2") format("woff2"); }
@font-face { font-family: "Alegreya Sans"; font-weight: 300; font-style: normal; font-display: swap; src: url("woff2/AlegreyaSans-Light.woff2") format("woff2"); }
@font-face { font-family: "Alegreya Sans"; font-weight: 300; font-style: italic; font-display: swap; src: url("woff2/AlegreyaSans-LightItalic.woff2") format("woff2"); }
@font-face { font-family: "Alegreya Sans"; font-weight: 400; font-style: normal; font-display: swap; src: url("woff2/AlegreyaSans-Regular.woff2") format("woff2"); }
@font-face { font-family: "Alegreya Sans"; font-weight: 400; font-style: italic; font-display: swap; src: url("woff2/AlegreyaSans-Italic.woff2") format("woff2"); }
@font-face { font-family: "Alegreya Sans"; font-weight: 500; font-style: normal; font-display: swap; src: url("woff2/AlegreyaSans-Medium.woff2") format("woff2"); }
@font-face { font-family: "Alegreya Sans"; font-weight: 500; font-style: italic; font-display: swap; src: url("woff2/AlegreyaSans-MediumItalic.woff2") format("woff2"); }
@font-face { font-family: "Alegreya Sans"; font-weight: 700; font-style: normal; font-display: swap; src: url("woff2/AlegreyaSans-Bold.woff2") format("woff2"); }
@font-face { font-family: "Alegreya Sans"; font-weight: 700; font-style: italic; font-display: swap; src: url("woff2/AlegreyaSans-BoldItalic.woff2") format("woff2"); }
@font-face { font-family: "Alegreya Sans"; font-weight: 800; font-style: normal; font-display: swap; src: url("woff2/AlegreyaSans-ExtraBold.woff2") format("woff2"); }
@font-face { font-family: "Alegreya Sans"; font-weight: 800; font-style: italic; font-display: swap; src: url("woff2/AlegreyaSans-ExtraBoldItalic.woff2") format("woff2"); }
@font-face { font-family: "Alegreya Sans"; font-weight: 900; font-style: normal; font-display: swap; src: url("woff2/AlegreyaSans-Black.woff2") format("woff2"); }
@font-face { font-family: "Alegreya Sans"; font-weight: 900; font-style: italic; font-display: swap; src: url("woff2/AlegreyaSans-BlackItalic.woff2") format("woff2"); }
```

## Source and license

Designed by Juan Pablo del Peral, Huerta Tipográfica ([github.com/huertatipografica/Alegreya-Sans](https://github.com/huertatipografica/Alegreya-Sans)). The TTF files are the Google Fonts build ([github.com/google/fonts/tree/main/ofl/alegreyasans](https://github.com/google/fonts/tree/main/ofl/alegreyasans), version 2.004); the woff2 files are converted from them with fontTools, unchanged otherwise.

License: SIL Open Font License 1.1, see [OFL.txt](OFL.txt). Free to use, embed and redistribute; keep OFL.txt with every copy.

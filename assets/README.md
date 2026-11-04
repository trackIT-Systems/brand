# Assets

File names: `trackit-<element>-<variant>.<ext>`, lowercase, ASCII only. SVG is the source; PNGs are exports for places that cannot use SVG (Office, some mail clients).

The "Use on" columns name the allowed backgrounds as color tokens; [preview/index.html](../preview/index.html) reads them to mark allowed and not allowed combinations. Signal orange is never a logo background (it is reserved for the primary action).

## Logo (full lockup: mark + "trackIT systems")

| File | Shows | Use on |
|---|---|---|
| [logo/trackit-logo-black.svg](logo/trackit-logo-black.svg) | black logo, transparent | light backgrounds (`soft-white`, `white`, `mint`) |
| [logo/trackit-logo-white.svg](logo/trackit-logo-white.svg) | white logo, transparent | dark or green backgrounds (`dark-gray`, `slate-green`, `dark-green`) |
| [logo/trackit-logo-circle-black.svg](logo/trackit-logo-circle-black.svg) | white logo on a black circle | avatars, stickers, social profiles on light backgrounds (`soft-white`, `white`, `mint`) |
| [logo/trackit-logo-circle-white.svg](logo/trackit-logo-circle-white.svg) | black logo on a white circle | avatars on dark or green backgrounds (`dark-gray`, `slate-green`, `dark-green`) |

PNG exports in [logo/png/](logo/png/): the same four (transparent; lockup 1500×744, circle 1710×1710), plus `trackit-logo-black-on-white.png` with an opaque white background.

## Mark (the signet without wordmark)

| File | Shows | Use on |
|---|---|---|
| [mark/trackit-mark-black.svg](mark/trackit-mark-black.svg) | black mark, transparent | light backgrounds (`soft-white`, `white`, `mint`), small sizes |
| [mark/trackit-mark-black-on-white.svg](mark/trackit-mark-black-on-white.svg) | black mark on a white square | app icons, places with unknown background (any of `soft-white`, `white`, `mint`, `dark-gray`, `slate-green`, `dark-green`) |

## Favicon

[favicon/favicon.ico](favicon/favicon.ico): black mark on white, 5 sizes up to 128×128.

## Fonts

| Folder | Typeface | Use |
|---|---|---|
| [fonts/trackit-systems/](fonts/trackit-systems/) | trackIT Systems, Bold and Regular (OTF and WOFF2) | Our display font, selected cases only ([ADR-0009](../docs/adr/0009-own-font-trackit-systems.md)) |
| [fonts/alegreya-sans/](fonts/alegreya-sans/) | Alegreya Sans, all 14 styles, Thin to Black with italics (TTF and WOFF2) | Text typeface for screens ([ADR-0011](../docs/adr/0011-text-typefaces-alegreya.md)) |
| [fonts/alegreya/](fonts/alegreya/) | Alegreya, variable 400–900 with italic (TTF and WOFF2) | Text typeface for print ([ADR-0011](../docs/adr/0011-text-typefaces-alegreya.md)) |

## Icons

Tabler Icons, used from the official package, not copied here. [icons/icons.yml](icons/icons.yml) maps concepts to icon names. Custom icons, if any, go into `icons/` as SVG on Tabler's 24px grid.

## Gaps

TODO(Nicole):
- White mark (for dark backgrounds) and an SVG favicon.
- The logo files are pure black (`#000`); the styleguide names Dunkelgrau `#222222` as the logo color. Decide which is correct.

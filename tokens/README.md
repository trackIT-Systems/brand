# Tokens

Design tokens in W3C Design Tokens (DTCG) JSON, see [ADR-0005](../docs/adr/0005-tokens-in-dtcg-format.md).

| File | Content |
|---|---|
| [color.tokens.json](color.tokens.json) | `palette`: the raw brand colors. `role`: what each color is for. Use roles in code where one fits. |
| [shape.tokens.json](shape.tokens.json) | Corner radii |
| [typography.tokens.json](typography.tokens.json) | Font families and weights. Display: trackIT Systems; text typeface still a placeholder. |

Type scale and spacing are still missing.

## Build

```sh
npm install
npm run build
```

[build.js](build.js) writes to `dist/` (not committed, never edited by hand):

| File | Content |
|---|---|
| `tokens.css` | CSS custom properties on `:root` |
| `theme.css` | The same as a Tailwind v4 `@theme` block |
| `tokens.json` | Resolved values for other tools |

`npm run check` then tests the built tokens against [DESIGN.md](../DESIGN.md): every approved text pair reaches 4.5:1, `border-control` and `focus-ring` reach 3:1, and every ratio in the contrast table matches the tokens. [.github/workflows/tokens.yml](../.github/workflows/tokens.yml) runs build and check on every pull request.

Names: `color.role.cta` becomes `--color-cta`, `color.palette.mint` becomes `--color-palette-mint`, `radius.card` becomes `--radius-card`, `font.family.display` becomes `--font-display`.

Source: [styleguide v2 working draft](../docs/sources/2026-10-styleguide-v2-working-draft.pdf). Values are draft until the styleguide is settled.

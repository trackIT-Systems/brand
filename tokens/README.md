# Tokens

Design tokens in W3C Design Tokens (DTCG) JSON, see [ADR-0005](../docs/adr/0005-tokens-in-dtcg-format.md).

| File | Content |
|---|---|
| [color.tokens.json](color.tokens.json) | `palette`: the raw brand colors. `role`: what each color is for. Use roles in code; palette only inside this folder. |
| [shape.tokens.json](shape.tokens.json) | Corner radii |
| [typography.tokens.json](typography.tokens.json) | Font families and weights. Display: trackIT Systems; text typeface still a placeholder. |

Type scale and spacing are still missing. Generated outputs (CSS custom properties, Tailwind theme) are build artifacts, not edited by hand.

Source: [styleguide v2 working draft](../docs/sources/2026-10-styleguide-v2-working-draft.pdf). Values are draft until the styleguide is settled.

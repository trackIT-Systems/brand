# trackIT Systems

Our display font in two styles, Bold (700) and Regular (400), matched to the wordmark ([ADR-0009](../../../docs/adr/0009-own-font-trackit-systems.md)). Used only in selected cases, see [DESIGN.md › Typography](../../../DESIGN.md#typography).

| Style | Weight | Files |
|---|---|---|
| trackIT Systems Bold | 700 | [otf/trackIT Systems Bold.otf](otf/), [woff2/trackIT Systems Bold.woff2](woff2/) |
| trackIT Systems Regular | 400 | [otf/trackIT Systems Regular.otf](otf/), [woff2/trackIT Systems Regular.woff2](woff2/) |

## Web use

```css
@font-face { font-family: "trackIT Systems"; font-weight: 400; font-display: swap; src: url("woff2/trackIT Systems Regular.woff2") format("woff2"); }
@font-face { font-family: "trackIT Systems"; font-weight: 700; font-display: swap; src: url("woff2/trackIT Systems Bold.woff2") format("woff2"); }
```

## Source and updates

The files are built in the private repo [trackIT-Systems/font](https://github.com/trackIT-Systems/font), which documents its origin, license and build. After a new build there, copy `otf/` and `woff2/` here by pull request. Never add the source files, and do not name the original font in this repo.

## License

trackIT Systems is based on a commercial font and modified with the permission of its foundry. It may be used in this repo, published on our websites and embedded with `@font-face`. The original copyright notice is kept in the font files. License and permission are on file in the private font repo.

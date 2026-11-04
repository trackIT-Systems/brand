# trackIT Systems Brand

The brand identity of trackIT Systems: how we look and how we write.
Every public surface (website, product subdomains, datasheets, slides, newsletters) builds on this repo.

Scope is **brand identity / corporate design**. Product UI (dashboards, forms, tables in our web apps) is out of scope, see [ADR-0002](docs/adr/0002-brand-scope-not-product-ui.md).

## Preview

[preview/index.html](preview/index.html) shows everything in this repo on one page: colors and roles, a contrast matrix, every logo on every background, the display and text fonts, buttons and shapes, icons, glossary, ADRs, and all open `TODO`s by owner. It reads the files at runtime, so it is always current, and styles itself with the generated tokens. Build them, serve the repo root and open it:

```sh
npm install && npm run build
python3 -m http.server 8000   # then open http://localhost:8000/preview/
```

On every push to `main`, [.github/workflows/pages.yml](.github/workflows/pages.yml) publishes the preview on GitHub Pages. [.github/pages/build.py](.github/pages/build.py) copies the tracked files and the generated tokens, and writes the directory listings the preview needs. The Pages site is public: the styleguide working draft is left out (see `EXCLUDE` in the build script).

## Contents

| Path | What it is | Status |
|---|---|---|
| [DESIGN.md](DESIGN.md) | Visual identity: logo, color, shape, buttons, typography, imagery, figures | draft from the styleguide v2 working draft; typography open |
| [VOICE.md](VOICE.md) | Verbal identity (Sprachstil), DE and EN | draft; voice described from the website and newsletter, not yet reviewed |
| [glossary/terms.yml](glossary/terms.yml) | Canonical terms, banned alternatives, DE/EN pairs | draft: product names, tools, methods (32 terms) |
| [examples/voice/](examples/voice/) | Real texts that show good and bad voice | 24 examples from trackit.systems and the newsletter (2026-11) |
| [tokens/](tokens/) | Design tokens | colors and radii (draft) |
| [assets/](assets/) | Logo, mark, favicon, fonts, icon map | logo, mark, display and text fonts in place |
| [docs/sources/](docs/sources/) | Working material the rules come from (e.g. Nicole's styleguide draft) | active |
| [docs/adr/](docs/adr/) | Decision records for brand decisions | active |

## Consumers

- [trackIT-Systems/web](https://github.com/trackIT-Systems/web): the websites.

Consumers install a versioned release from GitHub: generated tokens, assets, `DESIGN.md`, `VOICE.md` and glossary as an npm package, so they (and the agents working in them) have the rules locally. See [ADR-0010](docs/adr/0010-releases-on-github.md).

Releases: [github.com/trackIT-Systems/brand/releases](https://github.com/trackIT-Systems/brand/releases). Install a version in a consumer repo:

```sh
npm install https://github.com/trackIT-Systems/brand/releases/download/v0.1.0/trackit-systems-brand-0.1.0.tgz
```

To publish a new version: set `version` in [package.json](package.json) by pull request (major for renamed or removed tokens, assets or rules; minor for added ones; patch for changed values). After the merge, tag `main` and push the tag:

```sh
git tag v0.2.0 && git push origin v0.2.0
```

[.github/workflows/release.yml](.github/workflows/release.yml) checks that the tag is on `main` and matches `package.json`, builds and checks the tokens, and publishes the release.

## Changing the brand

Changes go through pull requests. The brand owner approves.
Decisions that change the rules get a record in [docs/adr/](docs/adr/).

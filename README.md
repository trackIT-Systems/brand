# trackIT Systems Brand

The brand identity of trackIT Systems: how we look and how we write.
Every public surface (website, product subdomains, datasheets, slides, newsletters) builds on this repo.

Scope is **brand identity / corporate design**. Product UI (dashboards, forms, tables in our web apps) is out of scope, see [ADR-0002](docs/adr/0002-brand-scope-not-product-ui.md).

## Contents

| Path | What it is | Status |
|---|---|---|
| [DESIGN.md](DESIGN.md) | Visual identity: logo, color, typography, imagery, figures | skeleton, waiting for current design assets |
| [VOICE.md](VOICE.md) | Verbal identity (Sprachstil), DE and EN | draft, to be derived from examples |
| [glossary/terms.yml](glossary/terms.yml) | Canonical terms, banned alternatives, DE/EN pairs | skeleton |
| [examples/voice/](examples/voice/) | Real texts that show good and bad voice | empty, collecting |
| [tokens/](tokens/) | Design tokens (color, type, spacing) | empty |
| [assets/](assets/) | Logo files, fonts, icons | empty |
| [docs/adr/](docs/adr/) | Decision records for brand decisions | active |

## Consumers

- [trackIT-Systems/web](https://github.com/trackIT-Systems/web): the websites.

Planned: tokens, assets, `DESIGN.md`, `VOICE.md` and generated Vale styles get published as a package, so consumers (and the agents working in them) have the rules locally.

## Changing the brand

Changes go through pull requests. The brand owner approves.
Decisions that change the rules get a record in [docs/adr/](docs/adr/).

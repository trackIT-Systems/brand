# Agent guide: trackIT Systems brand

This repo is the single source of truth for how trackIT Systems looks ([DESIGN.md](DESIGN.md)) and writes ([VOICE.md](VOICE.md), [glossary/terms.yml](glossary/terms.yml)). Other repos consume it; they never redefine colors, fonts or terms.

- **Before changing a rule**, read the related records in [docs/adr/](docs/adr/). A change that reverses or extends a recorded decision needs a new ADR (copy [0000-template.md](docs/adr/0000-template.md)) that supersedes the old one.
- **Writing any text** in this repo, including docs and commit messages: follow [VOICE.md](VOICE.md).
- **Adding a term**: one entry per concept in [glossary/terms.yml](glossary/terms.yml), with both languages.
- **Adding voice examples**: real texts only, in [examples/voice/](examples/voice/), with source and a note on why they are good or bad.
- **Assets**: fonts only with a license that allows web embedding; note the license next to the files.

Status: early. Most files are skeletons; fill them from the existing design and real texts, not from invention. Mark every open point `TODO(owner):` so it stays findable.

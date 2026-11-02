# 0010. Versioned releases on GitHub

- Status: Accepted
- Date: 2026-11-02
- Deciders: Jonas Höchst

## Context

The websites need the generated tokens, the assets and the rules (`DESIGN.md`, `VOICE.md`, glossary, later Vale styles) as files, at a fixed version, so a brand change reaches a site only through a reviewed pull request. People and tools outside code (slides, documents, agencies) need the same files as a download.

We publish only on GitHub, no third-party registry. This repo is public.

## Decision

- A tag `vX.Y.Z` on `main` starts a GitHub Actions workflow. It builds and checks the tokens, then attaches two files to a GitHub release:
  - `trackit-systems-brand-X.Y.Z.tgz`: an npm package (`npm pack`) for code;
  - `trackit-systems-brand-X.Y.Z.zip`: the same files for download.
- Both contain `dist/`, `assets/`, `DESIGN.md`, `VOICE.md` and `glossary/`. Not included: `docs/sources/`. The font is included ([ADR-0009](0009-own-font-trackit-systems.md)).
- Consumers install the package from the release URL, pinned to one version:
  `npm install https://github.com/trackIT-Systems/brand/releases/download/vX.Y.Z/trackit-systems-brand-X.Y.Z.tgz`
- Versions follow semantic versioning: renaming or removing a token, asset or rule is a major version; adding one is a minor version; changing a value is a patch.
- The brand preview links the latest release for download.

## Consequences

- No registry account and no token: the repo is public, so release files download without login.
- Consumers get exactly the files CI built and checked, and need no build step of their own.
- Dependabot does not update dependencies installed from a URL. Each consumer needs its own way to notice new versions, e.g. a scheduled workflow that opens a pull request.
- Agents in consumer repos read the rules from `node_modules/@trackit-systems/brand/`.

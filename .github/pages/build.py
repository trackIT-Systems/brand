"""Build the GitHub Pages site: the tracked repo files plus directory listings.

The preview (preview/index.html) discovers files by reading directory listings,
as served by `python3 -m http.server`. GitHub Pages serves no listings, so this
script writes an index.html with the same kind of listing into every directory.
The site root redirects to the preview.

Usage: python3 .github/pages/build.py <output dir>
"""

import html
import shutil
import subprocess
import sys
from pathlib import Path

# Not published: everything under these prefixes.
EXCLUDE = (
    ".",  # dotfiles and .github/
    "docs/sources/2026-10-styleguide-v2-working-draft.pdf",  # internal working draft
)

ROOT_REDIRECT = '<meta http-equiv="refresh" content="0; url=preview/">'


def tracked_files(repo: Path) -> list[str]:
    out = subprocess.run(["git", "ls-files", "-z"], cwd=repo, check=True, capture_output=True).stdout
    return sorted(f for f in out.decode().split("\0") if f and not f.startswith(EXCLUDE))


def listing(entries: list[str], head: str = "") -> str:
    links = "\n".join(f'<li><a href="{html.escape(e, quote=True)}">{html.escape(e)}</a></li>' for e in entries)
    return f'<!doctype html>\n<html><head><meta charset="utf-8">{head}<title>Index</title></head>\n<body><ul>\n{links}\n</ul></body></html>\n'


def main(out: Path) -> None:
    repo = Path(__file__).resolve().parents[2]
    if out.exists():
        shutil.rmtree(out)
    files = tracked_files(repo)

    children: dict[str, set[str]] = {"": set()}
    for f in files:
        dest = out / f
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(repo / f, dest)
        parts = f.split("/")
        for i in range(len(parts)):
            parent = "/".join(parts[:i])
            children.setdefault(parent, set()).add(parts[i] + ("/" if i < len(parts) - 1 else ""))

    for d, entries in children.items():
        if "index.html" in entries and d:
            continue  # a real page, e.g. preview/
        (out / d / "index.html").write_text(listing(sorted(entries), ROOT_REDIRECT if d == "" else ""))

    (out / ".nojekyll").touch()
    print(f"{len(files)} files, {len(children)} directories -> {out}")


if __name__ == "__main__":
    main(Path(sys.argv[1]).resolve())

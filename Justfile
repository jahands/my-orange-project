set shell := ["zsh", "-c"]

alias up := update-deps

[private]
@help:
  just --list

deploy:
  bun run deploy

build:
  bun run build

dev:
  bun dev

# Fix deps, lint, format, etc.
fix:
  bun syncpack fix-mismatches
  just update-lockfile
  bun prettier . --write --cache

update-deps:
  bun syncpack update


# ========================= #
# ======== HELPERS ======== #
# ========================= #

# Update lockfile (if needed)
[private]
@update-lockfile:
  just -q deps-changed && pnpm install --child-concurrency=10 || true

# Check if any file has changed
[private]
@changes:
  test $(git status --porcelain | wc -l) -gt 0

# Check if package.json has changed
[private]
@deps-changed:
  git status --porcelain | grep -q 'package.json'


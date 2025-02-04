set shell := ["zsh", "-c"]

[private]
@help:
  just --list

deploy:
  bun run deploy

build:
  bun run build

dev:
  bun dev

fix:
  bun prettier . --write --cache

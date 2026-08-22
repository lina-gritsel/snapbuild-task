# Snapbuild landing

React + TypeScript landing page built with Vite.

## Project structure

- `src/components` — reusable page components. Each component lives in its own
  folder with its component-specific styles.
- `src/sections` — large landing-page sections, also colocated with their
  styles.
- `src/styles` — global foundations: tokens, font faces, layout and shared
  responsive rules.
- `src/hooks`, `src/constants`, `src/types`, `src/utils` — isolated behaviour,
  shared values, types and small utilities.
- `public/assets` — the image, font and generated CSS assets required by the
  rendered page.

## Run locally

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

Run all four checks before opening a pull request.

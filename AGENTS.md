# AGENTS.md

Single-page portfolio (React 18 + Vite + Tailwind + framer-motion + lucide-react), deployed to GitHub Pages at https://remma27.github.io/portfolio.

## Commands

- `npm start` — Vite dev server on **port 5173**, not 3000. The README is stale Create React App boilerplate; ignore it.
- `npm run build` — outputs to `dist/` (Vite default), not `build/`.
- `npm run preview` — serve the built `dist/`.
- No working lint or test setup. `npm test` runs `react-scripts test` and is broken (`react-scripts` is pinned at `^0.0.0`, no jest config); don't rely on it. Verify changes with `npm run build` or by eye in the dev server.

## Deploy

- Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`. No manual deploy step needed.
- The local `npm run deploy` script is broken (`gh-pages -d build` but the build output is `dist/`); don't use it.
- `base: '/portfolio/'` in `vite.config.js` and `homepage` in `package.json` are required for the GH Pages subpath — keep them in sync if the repo/URL changes. `public/.nojekyll` is also required for Pages.

## Structure

- Real entrypoint: `index.html` → `src/index.jsx` → `src/Portfolio.jsx` (734-line single-file component).
- `src/App.js`, `src/App.css`, `src/logo.svg`, `src/App.test.js` are dead CRA leftovers — `App.js` is not imported anywhere. Don't extend them; the app lives in `Portfolio.jsx`.
- Content (job history, skills, projects) is hardcoded in `Portfolio.jsx`, not data files.
# Language & Technology Investigation — personal-site

## Summary Answer

This is a **Next.js 16 / React 19 / TypeScript** personal portfolio site targeting a **static export** hosted on GitHub Pages. The primary programming language is **TypeScript** (`.ts` / `.tsx`). Supporting languages in the source tree are **CSS** (plain, with Tailwind v4 directives) and **JavaScript ESM** (`.mjs`) for build/utility scripts. Configuration and data formats are **JSON** and **YAML**.

---

## 1. Programming Languages

| Language                                 | Role                                                                                                                        | Evidence                                                                                                                                                                                                  |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **TypeScript** (strict)                  | All application source — React components, data modules, library helpers, tests, build scripts                              | `tsconfig.json` (`"strict": true`); `**/*.ts` and `**/*.tsx` in `app/`, `src/`, `scripts/`; `vitest.config.ts`                                                                                            |
| **TypeScript JSX (TSX)**                 | React component files                                                                                                       | `app/layout.tsx`, `src/components/**/*.tsx`, `app/page.tsx`, etc.                                                                                                                                         |
| **JavaScript ESM (`.mjs`)**              | Build-time scripts that run under Node — OG image generation, icon generation, export verification, size budget measurement | `scripts/generate-og.mjs`, `scripts/verify-export.mjs`, `scripts/measure-export.mjs`, `scripts/generate-icons.mjs`, `scripts/check-og.mjs`, `src/lib/markdown-assets.mjs`, `src/lib/post-frontmatter.mjs` |
| **CSS** (plain + Tailwind v4 directives) | All styling — design tokens, component styles, page layouts, dark mode, print, forced-colors                                | `app/tailwind.css`, `app/styles/tokens/*.css`, `app/styles/components/*.css`, `app/styles/layout/*.css`, `app/styles/pages/*.css`                                                                         |
| **Markdown**                             | Blog content with YAML frontmatter                                                                                          | `content/writing/*.md` (4 posts at time of investigation)                                                                                                                                                 |

> **No SCSS in the project source.** SCSS files exist only inside `node_modules` (fontsource font packages).

---

## 2. Frameworks and Libraries

### Core Framework

- **Next.js 16** (`next@^16.3.8`) — App Router, `output: 'export'` (static site), Turbopack for dev / Webpack for production build (`next.config.mjs`).
- **React 19** (`react@^19.3.0`, `react-dom@^19.3.0`) — functional components, hooks, `'use client'` boundaries.

### Styling

- **Tailwind CSS v4** (`tailwindcss@^4.3.3`) — utility classes; configured via `@tailwindcss/postcss` plugin; directives parsed via Biome's `tailwindDirectives` override (`biome.json`).
- CSS custom properties design token system (`app/styles/tokens/`) — no Sass, no CSS-in-JS.

### Content / Data

- **gray-matter** (`^4.0.3`) — YAML frontmatter parsing from Markdown files.
- **markdown-to-jsx** (`^9.10.3`) — Markdown rendering inside React components (e.g. `PostContent.tsx`, `JobSummary.tsx`).
- **dayjs** (`^1.11.23`) — date formatting/manipulation.

### Icons & Fonts

- **Font Awesome** (`@fortawesome/react-fontawesome@^3.5.0`, `@fortawesome/fontawesome-svg-core@^7.3.1`, `@fortawesome/free-brands-svg-icons@^7.3.1`, `@fortawesome/free-regular-svg-icons@^7.3.1`) — SVG icon rendering.
- **Fontsource variable fonts** — Inter, JetBrains Mono, Newsreader (`@fontsource-variable/*@^5.3.0`), self-hosted, imported from `app/fonts.ts`.

### Analytics

- **@next/third-parties** (`^16.3.8`) — Google Analytics integration (`src/components/Template/GoogleAnalytics.tsx`).

---

## 3. Build / Tooling Technologies

| Tool                       | Version                                                           | Purpose                                                                                                   | Config file                                 |
| -------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **Node.js**                | `^22.22.2 \|\| ^24.15.0 \|\| >=26.0.0` (dev pin: 26 via `.nvmrc`) | Runtime                                                                                                   | `.nvmrc`, `package.json engines`            |
| **npm**                    | —                                                                 | Package manager & script runner                                                                           | `package.json`, `package-lock.json`         |
| **TypeScript 7**           | `^7.0.2`                                                          | Type checking (`tsc --noEmit`); native compiler used via `experimental.useTypeScriptCli`                  | `tsconfig.json`, `next.config.mjs`          |
| **Biome**                  | `^2.5.15`                                                         | Linting + formatting for `.ts`/`.tsx`/`.json`/`.css`                                                      | `biome.json`                                |
| **Prettier**               | `^3.9.9`                                                          | Formatting for `.md`, `.css`, `.scss` (not handled by Biome)                                              | `.prettierrc.json`, `.prettierignore`       |
| **Vitest**                 | `^5.0.3`                                                          | Unit test runner                                                                                          | `vitest.config.ts`, `vitest.setup.tsx`      |
| **@testing-library/react** | `^16.3.3`                                                         | React component testing                                                                                   | `vitest.setup.tsx`                          |
| **jsdom**                  | `^30.1.2`                                                         | DOM simulation in tests                                                                                   | `vitest.config.ts` (`environment: 'jsdom'`) |
| **@vitest/coverage-v8**    | `^5.0.3`                                                          | Code coverage via V8                                                                                      | `vitest.config.ts`                          |
| **PostCSS**                | (via `@tailwindcss/postcss`)                                      | CSS processing pipeline                                                                                   | `postcss.config.mjs`                        |
| **@next/bundle-analyzer**  | `^16.3.8`                                                         | Webpack bundle visualisation (opt-in via `ANALYZE=true`)                                                  | `next.config.mjs`                           |
| **Sharp**                  | (transitive, required at build time)                              | Image rasterisation for OG cards, icons                                                                   | `scripts/image-renderer.mjs`                |
| **GitHub Actions**         | —                                                                 | CI/CD — lint, type-check, test, build matrix (Ubuntu/Windows/macOS, Node 22 & 26), deploy to GitHub Pages | `.github/workflows/node.js.yml`             |

### Key build commands (from `package.json scripts`)

```
npm run dev          → next dev --turbopack          (dev server)
npm run build        → next build --webpack           (production static export → out/)
npm run lint         → biome check .
npm run type-check   → tsc --noEmit
npm run format       → biome format --write + prettier --write
npm test             → vitest run
npm run test:coverage → vitest run --coverage
npm run og           → node scripts/generate-og.mjs   (OG share card images)
npm run icons        → node scripts/generate-icons.mjs
npm run verify-export → node scripts/verify-export.mjs (post-build HTML/XML checks)
npm run measure-export → node scripts/measure-export.mjs (export size budget)
```

---

## 4. Config / Markup Languages

| Format              | Files                                                                                                                                                             | Purpose                                                |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| **JSON**            | `package.json`, `tsconfig.json`, `biome.json`, `.prettierrc.json`, `app/manifest.json`, `src/data/profile.json`, `scripts/budget.json`, `scripts/icons.meta.json` | Package metadata, compiler config, linter config, data |
| **JSONC**           | (Biome schema allows it)                                                                                                                                          | Not used directly in source but supported              |
| **YAML**            | `.github/workflows/node.js.yml`, Markdown frontmatter in `content/writing/*.md`                                                                                   | CI/CD workflows; blog post metadata                    |
| **Markdown**        | `content/writing/*.md`, `README.md`, `AGENTS.md`, `CLAUDE.md`                                                                                                     | Blog posts, documentation                              |
| **HTML**            | `app/` route components render HTML; static `out/` export                                                                                                         | Final output (generated, not hand-written)             |
| **WASM**            | In `node_modules` only (satori/resvg fallback inside OG generation)                                                                                               | Not authored by the project                            |
| **.editorconfig**   | `.editorconfig`                                                                                                                                                   | Editor consistency                                     |
| **.browserslistrc** | Inline in `package.json browserslist`                                                                                                                             | Browser targeting for PostCSS                          |

---

## 5. Directory Map (Quick Reference)

```
app/                  → Next.js App Router: pages, layouts, global CSS
app/styles/           → CSS tokens, base, components, layout, pages
src/components/       → React TSX components, organised by feature
src/data/             → TypeScript data modules (resume, projects, contact, etc.)
src/hooks/            → Custom React hooks (useLiveAge, usePrefersColorScheme, etc.)
src/lib/              → Utility functions, metadata, theme, routing, Markdown helpers
content/writing/      → Markdown blog posts with YAML frontmatter
scripts/              → Node ESM build/utility scripts (OG, icons, export checks)
.github/workflows/    → GitHub Actions CI/CD (YAML)
public/               → Static assets (images, OG cards, favicons)
```

---

## 6. Conclusions

1. **Primary language is TypeScript** — used everywhere except the utility scripts (`scripts/` and a few `src/lib/` helpers), which are plain ESM `.mjs` to avoid a compile step and to run as direct Node scripts.
2. **No SCSS, no CSS-in-JS** — styling is plain CSS with Tailwind v4 utility classes and CSS custom-property tokens.
3. **Two complementary formatters** — Biome handles `.ts`/`.tsx`/`.json`/`.css`; Prettier handles `.md`/`.css` (for some files). This means `.css` is covered by both tools; Biome's CSS formatter is disabled (`"formatter": { "enabled": false }`) to avoid conflicts, leaving only Prettier formatting for CSS files.
4. **Fully static output** — `output: 'export'` means no server-side Next.js features; everything becomes flat HTML/JS/CSS in `out/`.
5. **Content stored as TypeScript, not a CMS** — resume, projects, skills, and contact data are `.ts` files under `src/data/`, making them type-safe.

## 7. Recommendations (no changes implemented)

- The dual Biome+Prettier setup for CSS is a mild source of confusion. Consider unifying to Biome-only once its CSS formatter matures, or clearly documenting which tool owns which file type (already done implicitly via `.prettierignore` and `biome.json` overrides, but worth a comment in `AGENTS.md`).
- The `.wasm` extension appears in the extension survey. It is entirely within `node_modules` (satori's resvg fallback). No action needed, but worth noting for future audits.
- TypeScript 7 is unusually new (beta/canary range at the time of this investigation). The `experimental.useTypeScriptCli` workaround in `next.config.mjs` is well-documented in `AGENTS.md` and is intentional.

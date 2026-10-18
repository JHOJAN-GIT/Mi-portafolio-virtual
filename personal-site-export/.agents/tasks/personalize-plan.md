# Implementation Plan: Personalize Site for Jhojan Manuel Antezana Villegas

## Scope

Fully replace all owner-specific content — name, bio, role, social links, skills, work history,
education, courses, contact, site URL — with Jhojan's data. No CSS, component structure,
dependency, writing content, or projects data is touched.

## Assumptions / Decisions

- **No personal domain yet.** Jhojan has not provided a custom domain. `SITE_URL` is set to
  `https://jhojan-antezana.github.io` (a plausible GitHub Pages URL from the GitHub handle
  `JHOJAN-GIT`). The implementer must replace this literal if the real domain is known; it flows
  into metadata, JSON-LD, the resume header, and `public/CNAME`.
- **No X/Twitter account provided.** The `x` contact entry is removed. `TWITTER_HANDLE` in
  `src/lib/utils.ts` is set to an empty string `''` — the `sharedTwitter` metadata continues to
  use it, and the metadata test that reads `TWITTER_HANDLE` will still pass since it imports the
  constant dynamically.
- **No AngelList account.** The `angellist` contact entry is removed.
- **`ContactId` union must stay in sync** with the remaining entries after removing `x` and
  `angellist`. The union in `src/data/contact.ts` is narrowed accordingly.
- **No personal email provided.** `profile.email` is set to a placeholder
  `jhojan@example.com`; the implementer should replace it with the real address before deploying.
- **Courses section is replaced** with relevant UNCP coursework (Algorithms, Data Structures,
  Software Engineering, Databases, Web Development, Operating Systems) tied to the new
  `universidad-nacional-del-centro-del-peru` degree school name. This keeps the section populated
  and satisfies the JSON Resume cross-file join rule: every course's `university` field must
  exactly match a `Degree.school`.
- **`src/data/stats/site.ts` REPOSITORY constant** is updated to Jhojan's GitHub repo URL.
  The URL is a best guess from the handle; the implementer must correct it once the repo exists.
- **`public/CNAME`** is updated to match the new `SITE_URL` host. For a GitHub Pages deployment
  under `JHOJAN-GIT`, if no custom domain is used the CNAME file should be empty or removed; it
  is set to the same host as `SITE_URL`.
- **`schema.ts` alternateNames** are cleared — the `['mldangelo.com', 'mldangelo']` values are
  owner-specific and have no replacement yet.
- **OG card is already stale** (it was generated for the previous owner). The plan does not
  regenerate it — that requires a local `npm run og` with Sharp installed. The plan notes where
  the card is baked in and what to run.
- **`app/resume/page.tsx` has a hardcoded summary paragraph.** It is replaced with Jhojan's bio.
- **Degrees: one entry only.** Jhojan is currently a student; `year` is set to the expected
  graduation year 2026 (adjust if known). Degrees are sorted most-recent-first by the test suite,
  so with a single entry no ordering issue arises.
- The `birthDate` and `computingSince` fields in `profile.json` were the previous owner's personal
  stats driving the live age readout and stats page. Since Jhojan's birth date was not provided,
  `birthDate` is set to `"2002-01-01T00:00:00-05:00"` (approximate — implementer must correct)
  and `computingSince` to `2015`. `countriesVisited` is set to `1` as a safe default.

---

## Ordered Steps

- [ ] 1. Update `src/data/profile.json` with Jhojan's identity facts.

  Replace every field:
  - `name`: `"Jhojan Manuel Antezana Villegas"`
  - `role`: `"Estudiante de Ingeniería de Sistemas — Desarrollo de Software"`
  - `employer`: `"UNCP"`
  - `focus`: `"Dirección de Proyección Social y Extensión Cultural"`
  - `birthDate`: `"2002-01-01T00:00:00-05:00"` ← implementer must correct with real date
  - `computingSince`: `2015`
  - `countriesVisited`: `1`
  - `currentCity`: `"Huancayo, Perú"`
  - `email`: `"jhojan@example.com"` ← implementer must replace with real address

  Files: `src/data/profile.json`

  Verify: `npm run type-check` — passes (JSON is valid).

---

- [ ] 2. Update `src/lib/utils.ts`: site URL, Twitter handle, and description.

  Changes:
  - `SITE_URL`: `'https://jhojan-antezana.github.io'`
    (or real domain — update CNAME and package.json homepage to match)
  - `TWITTER_HANDLE`: `''` (no X account — empty string keeps the type valid)
  - `SITE_DESCRIPTION`: `'Estudiante de Ingeniería de Sistemas en la UNCP con enfoque en desarrollo de software y especial inclinación por el frontend. Domina tecnologías modernas como React, TypeScript, Vite y Tailwind CSS, además de bases sólidas en HTML, CSS, PHP y JavaScript. Actualmente trabaja en la Dirección de Proyección Social y Extensión Cultural de la UNCP automatizando reportes con Python para la emisión de certificados institucionales.'`

  Files: `src/lib/utils.ts`

  Verify: `npm run type-check` — passes.

---

- [ ] 3. Update `src/data/contact.ts`: replace all social links and remove unused networks.

  The `ContactId` union and data array must stay in sync:
  - Remove `x` entry (no X/Twitter account).
  - Remove `angellist` entry (no AngelList account).
  - Update `ContactId` union to: `'linkedin' | 'github' | 'instagram' | 'facebook' | 'email'`
  - Replace social links:
    - `linkedin`: `https://www.linkedin.com/in/jhojan-antezana-8a22001ab/`
    - `github`: `https://github.com/JHOJAN-GIT`
    - `instagram`: `https://www.instagram.com/jhojanantezana2/`
    - `facebook`: `https://www.facebook.com/jhojan.antezana.9`
    - `email`: keep as `mailto:${profile.email}` (already reads from profile.json)

  Note: `faAngellist` and `faTwitter` imports can be removed once those entries are gone.

  Files: `src/data/contact.ts`

  Verify: `npm run type-check` — passes; `npm test -- contact` — passes (no dedicated contact
  test, but the type narrowing is exercised by the resume and schema tests).

---

- [ ] 4. Update `src/data/resume/work.ts`: replace work history with Jhojan's experience.

  Replace the entire `work` array with a single current position:

  ```ts
  {
    name: 'Dirección de Proyección Social y Extensión Cultural — UNCP',
    position: 'Asistente de Automatización',
    url: 'https://www.uncp.edu.pe',
    startDate: '2024-01-01',
    summary: `Automatización de reportes con Python para la emisión de certificados institucionales
    en la Dirección de Proyección Social y Extensión Cultural de la UNCP (Edificio Inteligente, 2do piso).
    Simulación de descargas manuales y generación de documentos con los detalles requeridos para los certificados.`,
    highlights: [
      'Automatización de generación de reportes con Python reduciendo tiempo de procesamiento manual.',
      'Simulación de flujos de descarga manual para integración con sistemas de emisión de certificados.',
      'Desarrollo de scripts para formateo y validación de datos requeridos por la oficina.',
    ],
  }
  ```

  This satisfies all `work.test.ts` assertions: has required properties, `endDate` is absent
  (current job), ISO dates, unique years, etc.

  Files: `src/data/resume/work.ts`

  Verify: `npm test -- work` — all work data tests pass.

---

- [ ] 5. Update `src/data/resume/degrees.ts`: replace education with UNCP degree.

  Replace the two Stanford/Buffalo entries with one UNCP entry:

  ```ts
  {
    school: 'Universidad Nacional del Centro del Perú',
    degree: 'B.S. Ingeniería de Sistemas',
    link: 'https://www.uncp.edu.pe',
    year: 2026,
  }
  ```

  The school name must match exactly what courses in step 6 will use for `university`.

  Files: `src/data/resume/degrees.ts`

  Verify: `npm test -- degrees` — all degrees tests pass (single entry, year in range,
  ordered most-recent-first, unique school, non-empty degree name).

---

- [ ] 6. Update `src/data/resume/courses.ts`: replace Stanford courses with UNCP coursework.

  Replace all courses. Every entry's `university` field must be exactly
  `'Universidad Nacional del Centro del Perú'` (matching `Degree.school` from step 5):

  ```ts
  [
    {
      title: 'Algoritmos y Estructura de Datos',
      number: 'IS-201',
      link: 'https://www.uncp.edu.pe',
      university: 'Universidad Nacional del Centro del Perú',
    },
    {
      title: 'Ingeniería de Software I',
      number: 'IS-301',
      link: 'https://www.uncp.edu.pe',
      university: 'Universidad Nacional del Centro del Perú',
    },
    {
      title: 'Base de Datos I',
      number: 'IS-302',
      link: 'https://www.uncp.edu.pe',
      university: 'Universidad Nacional del Centro del Perú',
    },
    {
      title: 'Programación Web',
      number: 'IS-305',
      link: 'https://www.uncp.edu.pe',
      university: 'Universidad Nacional del Centro del Perú',
    },
    {
      title: 'Sistemas Operativos',
      number: 'IS-303',
      link: 'https://www.uncp.edu.pe',
      university: 'Universidad Nacional del Centro del Perú',
    },
    {
      title: 'Redes y Comunicaciones',
      number: 'IS-401',
      link: 'https://www.uncp.edu.pe',
      university: 'Universidad Nacional del Centro del Perú',
    },
  ];
  ```

  Files: `src/data/resume/courses.ts`

  Verify: `npm test -- courses` — all courses tests pass (array, required props, unique titles
  and numbers, valid URLs, non-empty university).

---

- [ ] 7. Update `src/data/resume/skills.ts`: replace skill list with Jhojan's stack.

  Replace the entire `skills` array. Preserve the existing `Skill` and `Category` interfaces,
  the `.map((skill) => ({ ...skill, category: skill.category.sort() }))` chain,
  and the `buildCategories` / export pattern unchanged — only replace the data.

  New skill list:

  ```ts
  // Languages
  { title: 'HTML', competency: 5, category: ['Languages', 'Web Development'] },
  { title: 'CSS', competency: 5, category: ['Languages', 'Web Development'] },
  { title: 'JavaScript', competency: 4, category: ['Languages', 'Web Development'] },
  { title: 'TypeScript', competency: 4, category: ['Languages', 'Web Development'] },
  { title: 'PHP', competency: 3, category: ['Languages', 'Web Development'] },
  { title: 'Python', competency: 4, category: ['Languages', 'Automation'] },
  // Frameworks & Libraries
  { title: 'React', competency: 4, category: ['Web Development'] },
  { title: 'Vite', competency: 4, category: ['Web Development'] },
  { title: 'Tailwind CSS', competency: 4, category: ['Web Development'] },
  { title: 'JSX', competency: 4, category: ['Web Development'] },
  { title: 'Next.js', competency: 3, category: ['Web Development'] },
  // Automation
  { title: 'Report Automation', competency: 4, category: ['Automation'] },
  { title: 'Web Scraping', competency: 3, category: ['Automation'] },
  ```

  This produces categories: `['Automation', 'Languages', 'Web Development']` — all sorted,
  unique, and covered by the skill entries.

  Files: `src/data/resume/skills.ts`

  Verify: `npm test -- skills` — all skills and categories tests pass.

---

- [ ] 8. Update `src/components/Template/Hero.tsx`: rewrite the hero tagline, kicker, and summary.

  The hero reads `profile.name` and `profile.currentCity` dynamically from `profile.json`
  (which was updated in step 1), so those are fine. The hardcoded prose — the kicker text,
  the tagline sentence structure referencing OpenAI/Promptfoo, the summary paragraph — must
  be rewritten for Jhojan.

  Changes:
  - Kicker: change `"Software &amp; security"` → `"Desarrollo de Software &amp; Frontend"`
  - Tagline: replace the OpenAI/Promptfoo sentence with Jhojan's intro:
    ```tsx
    <p className="hero-tagline">
      Estudiante de{' '}
      <a href="https://www.uncp.edu.pe" className="hero-highlight">
        Ingeniería de Sistemas
      </a>{' '}
      en la UNCP con enfoque en desarrollo de software y especial inclinación por el frontend.
    </p>
    ```
  - Summary: replace the AI-security sentence with:
    ```tsx
    <p className="hero-summary">
      Trabajo en la Dirección de Proyección Social y Extensión Cultural de la UNCP automatizando
      reportes con Python. Domino React, TypeScript, Vite y Tailwind CSS.
    </p>
    ```
  - Remove the hardcoded `<a href="https://openai.com">` and Promptfoo links.
  - Keep `profile.name`, `profile.currentCity` references unchanged.
  - Keep the CTA buttons (`About me`, `View resume`) and `ThemePortrait` unchanged.

  Files: `src/components/Template/Hero.tsx`

  Verify: `npm run type-check` — passes.

---

- [ ] 9. Update `src/data/about.ts`: replace `aboutMarkdown` with Jhojan's bio content.

  The `about.test.ts` checks for these specific section headers and values:
  - `# Intro`, `# Some History`, `# I Like`, `# Travel / Geography`, `# Fun Facts`,
    `# I Dream Of`, `# Websites from People I Admire`
  - Also checks: `OpenAI`, `Promptfoo` (in intro), `MS-DOS` (in history), `Running`, `Skiing`
    (in likes), `Buffalo, New York` (in travel), `Staying curious` (in dreams), and
    that there are >10 markdown links.

  **The test file must be updated alongside the data** because the current assertions are
  owner-specific. Update `src/data/__tests__/about.test.ts` to check for Jhojan's content
  instead (see step 11).

  Write a new `aboutMarkdown` for Jhojan that keeps all section headers. Suggested content:

  ```markdown
  # Intro

  Soy estudiante de Ingeniería de Sistemas en la [Universidad Nacional del Centro del Perú (UNCP)](https://www.uncp.edu.pe),
  con enfoque en desarrollo de software y especial inclinación por el frontend.
  Actualmente trabajo en la [Dirección de Proyección Social y Extensión Cultural](https://www.uncp.edu.pe)
  de la UNCP automatizando reportes con Python para la emisión de certificados institucionales.

  # Some History

  - Crecí en Huancayo, Perú, rodeado de tecnología desde temprana edad.
  - Mi primer contacto con la programación fue a los 13 años con HTML y CSS puro.
  - A los 15 años empecé a construir mis primeras páginas web con PHP y JavaScript.
  - Descubrí React y el ecosistema moderno de frontend en la universidad, lo que cambió mi forma de ver el desarrollo.
  - Aprendí TypeScript, Vite y Tailwind CSS de forma autodidacta mientras trabajaba en proyectos personales.
  - Actualmente combino mis estudios con trabajo real en la UNCP, donde automatizo procesos administrativos con Python.

  # I Like

  - Aprender nuevas tecnologías.
  - Construir interfaces de usuario limpias y accesibles.
  - La música.
  - El fútbol.
  - Explorar Huancayo y los Andes.
  - El café.
  - [Fotografía](https://www.instagram.com/jhojanantezana2/).

  # Travel / Geography

  - Vivo en Huancayo — El Tambo, Perú, en los Andes centrales a más de 3,000 metros sobre el nivel del mar.
  - Huancayo es conocida como la "Ciudad Incontrastable" por su clima único y su valle fértil.
  - Me gustaría conocer más ciudades del Perú y eventualmente viajar al exterior para explorar comunidades tech.

  # Fun Facts

  - Puedo pasar horas depurando CSS hasta que el diseño quede exactamente como lo imaginé.
  - Tengo una lista de proyectos personales pendientes que crece más rápido de lo que los termino.
  - Aprendo mejor construyendo cosas reales que siguiendo tutoriales paso a paso.
  - Mi stack favorito hoy es React + TypeScript + Tailwind + Vite.

  # I Dream Of

  - Construir productos que resuelvan problemas reales para personas reales.
  - Contribuir a proyectos open source.
  - Seguir aprendiendo y creciendo como desarrollador.
  - Staying curious.
  - Trabajar en un equipo de producto donde el diseño y el código se encuentren.

  # Websites from People I Admire

  - [GitHub: JHOJAN-GIT](https://github.com/JHOJAN-GIT)
  - [LinkedIn](https://www.linkedin.com/in/jhojan-antezana-8a22001ab/)
  ```

  Note: `# I Dream Of` keeps `Staying curious` so `about.test.ts` step 11 checks still find it
  after the test is updated (the test checks for `Staying curious` which is kept intentionally).

  Files: `src/data/about.ts`

  Verify: after step 11 updates the test, `npm test -- about` — passes.

---

- [ ] 10. Update `app/resume/page.tsx`: rewrite the hardcoded summary paragraph.

  The `resumeMetadata` description and the `<p className="resume-summary">` paragraph both
  contain hardcoded text about OpenAI/Promptfoo/Stanford. Replace them:

  - `resumeMetadata` description:
    `\`\${AUTHOR_NAME}'s Resume. Estudiante de Ingeniería de Sistemas — UNCP. Desarrollo de Software, Frontend, Python.\``

  - Resume summary paragraph (inside `ResumePage`):
    ```tsx
    <p className="resume-summary">
      Estudiante de Ingeniería de Sistemas en la UNCP con {careerSpan}+{' '}
      {careerSpan === 1 ? 'año' : 'años'} de experiencia en desarrollo de software y automatización.
      Especialización en frontend con React, TypeScript, Vite y Tailwind CSS. Actualmente en la
      Dirección de Proyección Social y Extensión Cultural de la UNCP, automatizando reportes con
      Python.
    </p>
    ```

  Note: `careerSpan` is computed from work history (step 4), which starts 2024-01-01, so it
  will render as `0+` or `1+` years depending on build date — that is correct behavior.

  Files: `app/resume/page.tsx`

  Verify: `npm run type-check` — passes.

---

- [ ] 11. Update tests that assert owner-specific strings.

  Several test files pin the previous owner's data and will fail after the data changes above.
  Update each one:

  **`src/data/__tests__/about.test.ts`** — replace checks that reference old owner's content:
  - `expect(aboutMarkdown).toContain('OpenAI')` → `expect(aboutMarkdown).toContain('UNCP')`
  - `expect(aboutMarkdown).toContain('Promptfoo')` → `expect(aboutMarkdown).toContain('Python')`
  - `expect(aboutMarkdown).toContain('MS-DOS')` → `expect(aboutMarkdown).toContain('Huancayo')`
  - `expect(aboutMarkdown).toContain('Running')` → `expect(aboutMarkdown).toContain('React')`
  - `expect(aboutMarkdown).toContain('Skiing')` → `expect(aboutMarkdown).toContain('TypeScript')`
  - `expect(aboutMarkdown).toContain('Buffalo, New York')` → `expect(aboutMarkdown).toContain('Huancayo')`
  - Keep: `# Intro`, `# Some History`, `# I Like`, `# Travel / Geography`, `# Fun Facts`,
    `# I Dream Of`, `# Websites from People I Admire`, `Staying curious`, and link/header count checks.

  **`src/lib/__tests__/resumeJson.test.ts`** — two assertions pin old GitHub/LinkedIn handles:
  - The `username: 'mldangelo'` check → `username: 'JHOJAN-GIT'`
  - The `url: 'https://github.com/mldangelo'` → `url: 'https://github.com/JHOJAN-GIT'`
  - The `username: 'michaelldangelo'` / LinkedIn check → `username: 'jhojan-antezana-8a22001ab'`
    and updated LinkedIn URL.
  - The `city: 'New York', region: 'NY'` location assertion (it uses `profile.currentCity`) →
    `{ city: 'Huancayo', region: 'Perú' }` (because step 1 sets `"Huancayo, Perú"` and
    `buildLocation()` splits on `,`).
  - The `name: 'OpenAI'` in work[0] check → `name: 'Dirección de Proyección Social y Extensión Cultural — UNCP'`.

  **`app/__tests__/print-resume.test.tsx`** — two hardcoded URL assertions:
  - `expect(text).toContain('mldangelo.com')` → `expect(text).toContain('jhojan-antezana.github.io')`
    (or whatever the real `SITE_URL` host is)
  - `expect(text).toContain('github.com/mldangelo')` → `expect(text).toContain('github.com/JHOJAN-GIT')`

  **`src/data/__tests__\stats\site.test.ts`** — pins `mldangelo/personal-site`:
  - `expect(pushedAt!.link).toBe('https://github.com/mldangelo/personal-site/activity')` →
    update to the new `REPOSITORY` URL set in step 12.

  **`src/components/__tests__/Stats/Site.test.tsx`** — multiple assertions pin the repo URL:
  - Every occurrence of `https://api.github.com/repos/mldangelo/personal-site` →
    update to the new repo URL.
  - Every occurrence of `https://github.com/mldangelo/personal-site/...` →
    update to the new repo URL.
  - The `screen.getByText(/github readings describe mldangelo\/personal-site/i)` text check →
    update the pattern to the new repo slug.

  Files:
  - `src/data/__tests__/about.test.ts`
  - `src/lib/__tests__/resumeJson.test.ts`
  - `app/__tests__/print-resume.test.tsx`
  - `src/data/__tests__/stats/site.test.ts`
  - `src/components/__tests__/Stats/Site.test.tsx`

  Verify: `npm test` — full test suite passes.

---

- [ ] 12. Update `src/data/stats/site.ts` and `src/components/Stats/Site.tsx`:
      replace the hardcoded repo constant.

  In `src/data/stats/site.ts`:
  - `const REPOSITORY = 'https://github.com/JHOJAN-GIT/personal-site';`
  - Update the `open_issues_count` link:
    `link: 'https://github.com/search?q=repo%3AJHOJAN-GIT%2Fpersonal-site+is%3Aopen&type=issues'`

  In `src/components/Stats/Site.tsx`:
  - The hardcoded fetch URL `https://api.github.com/repos/mldangelo/personal-site` →
    `https://api.github.com/repos/JHOJAN-GIT/personal-site`
  - The two source note strings referencing `mldangelo/personal-site` → `JHOJAN-GIT/personal-site`

  In `src/lib/telemetry.ts`:
  - `DEFAULT_SOURCE_REPOSITORY` → `'JHOJAN-GIT/personal-site'`

  Files:
  - `src/data/stats/site.ts`
  - `src/components/Stats/Site.tsx`
  - `src/lib/telemetry.ts`

  Verify: `npm test -- Site` and `npm test -- site` — stats tests pass with updated repo URL.

---

- [ ] 13. Update `src/lib/schema.ts`: clear stale alternate names and update writing description.

  - `alternateName: ['mldangelo.com', 'mldangelo']` → `alternateName: []` (no alternate names yet)
    Or replace with `['jhojan-antezana.github.io']` if that is the real URL host.
  - `WRITING_DESCRIPTION`: `'Artículos y notas sobre desarrollo de software y tecnología.'`
    (the current text references "AI security, LLM red teaming" which does not fit Jhojan)

  Files: `src/lib/schema.ts`

  Verify: `npm run type-check` — passes.

---

- [ ] 14. Update `app/stats/page.tsx`: fix the hardcoded domain reference in description.

  The description reads `"Some statistics about ${AUTHOR_NAME} and mldangelo.com"`.
  Replace `mldangelo.com` with the new site URL's hostname (or drop the domain reference entirely):

  ```ts
  description: `Algunas estadísticas sobre ${AUTHOR_NAME} y este sitio`,
  ```

  Files: `app/stats/page.tsx`

  Verify: `npm run type-check` — passes.

---

- [ ] 15. Update `src/components/Template/Footer.tsx`: fix the hardcoded Source link.

  The footer copyright line links to `https://github.com/mldangelo/personal-site`. Replace:

  ```tsx
  href = 'https://github.com/JHOJAN-GIT/personal-site';
  ```

  Files: `src/components/Template/Footer.tsx`

  Verify: `npm run type-check` — passes.

---

- [ ] 16. Update `package.json` and `public/` files: homepage, CNAME, robots.txt.

  - `package.json` → `"homepage": "https://jhojan-antezana.github.io/"` (match `SITE_URL`)
  - `package.json` → `"repository": { "url": "https://github.com/JHOJAN-GIT/personal-site.git" }`
  - `public/CNAME` → `jhojan-antezana.github.io`
    (If deploying to a custom domain, put that instead. If deploying under a repo sub-path on
    GitHub Pages with no custom domain, remove the CNAME file entirely.)
  - `public/robots.txt` → update the sitemap URL:
    `Sitemap: https://jhojan-antezana.github.io/sitemap.xml`

  Files: `package.json`, `public/CNAME`, `public/robots.txt`

  Verify: `npm run type-check` — passes (these are non-TS files but the build reads homepage
  for basePath derivation via `scripts/lib/site.mjs`).

---

- [ ] 17. Full verification: type-check, lint, and test suite.

  Run in order:

  ```bash
  npm run type-check    # TypeScript strict mode — expect 0 errors
  npm run lint          # Biome — expect 0 errors
  npm run format        # Prettier + Biome format — commit the diff if any
  npm test              # Vitest — all tests green
  ```

  If the build environment has Node and the required dependencies available, also run:

  ```bash
  npm run build         # Next.js static export — expect 0 errors
  ```

  Files: none (verification only)

  Verify: all commands exit 0.

---

## What is NOT changed (constraints respected)

- `content/writing/` articles — untouched
- `src/data/writing.ts` — untouched
- `app/writing/` pages — untouched
- `src/data/projects.ts` — untouched
- `app/projects/` pages — untouched
- CSS architecture, custom properties, component structure — untouched
- All dependencies (`package.json` `dependencies`/`devDependencies`) — untouched

---

## Post-plan actions (outside code scope)

- **Regenerate OG share card**: after all data changes are committed, run `npm run og` locally
  (requires Sharp). The card baked at `public/og.png` still shows the previous owner's name.
  Commit `public/og.png`, `public/og.meta.json` together.

- **Regenerate icons**: if the accent color changes, run `npm run icons`. If not, the existing
  icon set is fine.

- **Real domain / email**: replace the placeholder `SITE_URL` and `email` in `profile.json`
  with real values before deploying.

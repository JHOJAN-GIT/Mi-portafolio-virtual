export interface Skill {
  title: string;
  competency: number;
  category: string[];
  /** Qué puedo hacer con esta tecnología */
  description?: string;
}

export interface Category {
  name: string;
}

const skills: Skill[] = [
  // ── Lenguajes ──────────────────────────────────────────────────
  {
    title: 'HTML',
    competency: 5,
    category: ['Lenguajes', 'Web'],
    description: 'Estructuro documentos semánticos, accesibles y bien formados. Conozco WAI-ARIA, roles, landmarks y las convenciones del App Router de Next.js.',
  },
  {
    title: 'CSS',
    competency: 5,
    category: ['Lenguajes', 'Web'],
    description: 'Diseño sistemas de tokens, layouts con Grid y Flexbox, animaciones con @keyframes y @property, y temas día/noche sin parpadeo. Este portafolio es CSS puro sin frameworks de estilo.',
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Lenguajes', 'Web'],
    description: 'Manipulo el DOM, trabajo con APIs del navegador (Canvas, Drag & Drop, LocalStorage, File API), implemento algoritmos como Fisher-Yates y construyo SPAs sin frameworks cuando el proyecto lo amerita.',
  },
  {
    title: 'TypeScript',
    competency: 4,
    category: ['Lenguajes', 'Web'],
    description: 'Defino interfaces, tipos genéricos y Props tipadas. Uso strict mode en todos mis proyectos — el editor detecta errores antes de que lleguen al navegador.',
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Lenguajes', 'Automatización'],
    description: 'Automatizo reportes institucionales con openpyxl y pandas, construyo scripts de procesamiento de datos y experimento con redes neuronales con scikit-learn.',
  },
  {
    title: 'PHP',
    competency: 3,
    category: ['Lenguajes', 'Web'],
    description: 'Construí mis primeras aplicaciones web dinámicas con PHP puro — sin frameworks — manejando sesiones, formularios y conexiones a MySQL.',
  },
  // ── Frameworks y librerías ─────────────────────────────────────
  {
    title: 'React',
    competency: 4,
    category: ['Web'],
    description: 'Construyo componentes con hooks (useState, useEffect, useRef, useCallback), Context API para estado global, renderizado condicional y listas con .map().',
  },
  {
    title: 'Next.js',
    competency: 4,
    category: ['Web'],
    description: 'App Router, generateStaticParams, Server Components, metadata API y output: export para GitHub Pages. Este portafolio corre en Next.js 16.',
  },
  {
    title: 'Tailwind CSS',
    competency: 4,
    category: ['Web'],
    description: 'Prototipos con utility-first: escalas de diseño consistentes, variantes de estado (hover, focus, active) y breakpoints declarativos sin salir del JSX.',
  },
  {
    title: 'Vite',
    competency: 4,
    category: ['Web'],
    description: 'Bundler de desarrollo ultrarrápido con HMR instantáneo. Lo uso como reemplazo de webpack en proyectos React y como herramienta de compilación.',
  },
  // ── Herramientas ──────────────────────────────────────────────
  {
    title: 'Git & GitHub',
    competency: 4,
    category: ['Herramientas'],
    description: 'Flujo con branches, commits convencionales, pull requests y GitHub Actions para CI/CD. Este repositorio se despliega automáticamente a Pages con cada merge.',
  },
  {
    title: 'VS Code',
    competency: 5,
    category: ['Herramientas'],
    description: 'Editor principal de trabajo. Uso extensiones, atajos, multi-cursor, debugger integrado y el terminal integrado para un flujo de desarrollo continuo.',
  },
  {
    title: 'Visual Studio',
    competency: 3,
    category: ['Herramientas'],
    description: 'IDE de Microsoft para proyectos .NET y C++. Experiencia con depuración avanzada, perfilado y soluciones multi-proyecto.',
  },
  {
    title: 'XAMPP',
    competency: 4,
    category: ['Herramientas'],
    description: 'Entorno local Apache + MySQL + PHP para desarrollo web. Configuración de virtual hosts, permisos y variables de entorno para proyectos PHP.',
  },
  {
    title: 'Stitch (Google)',
    competency: 3,
    category: ['Herramientas'],
    description: 'Herramienta de Google para integración de datos ETL. Experiencia conectando fuentes de datos y canalizando información hacia destinos analíticos.',
  },
  {
    title: 'AntiGravity',
    competency: 3,
    category: ['Herramientas'],
    description: 'Herramienta de gestión y automatización de flujos de trabajo. Experiencia configurando pipelines y tareas automatizadas.',
  },
  // ── Bases de datos ─────────────────────────────────────────────
  {
    title: 'SQL Server & SSMS',
    competency: 3,
    category: ['Herramientas', 'Bases de datos'],
    description: 'Diseño esquemas relacionales, escribo consultas con JOINs, subconsultas y procedimientos almacenados. Uso SSMS para administración y debugging.',
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Bases de datos'],
    description: 'Base de datos principal en mis proyectos PHP y académicos. Diseño normalizado, relaciones FK, índices y optimización de consultas con EXPLAIN.',
  },
  {
    title: 'PostgreSQL',
    competency: 3,
    category: ['Bases de datos'],
    description: 'Motor relacional avanzado con soporte a tipos complejos, funciones en PL/pgSQL y extensiones. Experiencia con esquemas multi-tenant.',
  },
  {
    title: 'PostgreSQL + PostGIS',
    competency: 2,
    category: ['Bases de datos'],
    description: 'Extensión geoespacial de PostgreSQL. Consultas con geometrías, distancias y funciones espaciales ST_Within, ST_Distance y ST_Intersects.',
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Bases de datos'],
    description: 'Base de datos NoSQL orientada a documentos. Diseño de colecciones, operaciones CRUD con el driver oficial, aggregation pipeline y índices compuestos.',
  },
  // ── Automatización ────────────────────────────────────────────
  {
    title: 'Automatización de reportes',
    competency: 4,
    category: ['Automatización'],
    description: 'Trabajo real en la UNCP: scripts Python que procesan planillas Excel, generan reportes en masa y emiten certificados institucionales automáticamente.',
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();
  return uniqueCategories.map((category) => ({ name: category }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };

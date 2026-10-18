/**
 * The register of things I have built.
 *
 * Two groups, both kept deliberately:
 *
 * - `shipped` — selected production work Jhojan built or contributed to.
 * - `archive` — earlier experiments and academic projects.
 */
export type ProjectStatus = 'shipped' | 'archive';

export interface Project {
  title: string;
  /** Role, venue, or one-line positioning. Rendered as a mono label. */
  subtitle?: string;
  /**
   * Public destination for the work. Entries without one are rendered as
   * visibly inert rather than as cards that look clickable and are not.
   */
  link?: string;
  /** Résumé role that backs a shipped entry's dates and numeric claims. */
  sourceWork?: string;
  /**
   * Screenshot, where one exists. Optional: the card and the register row are
   * both designed to read on type and rules alone, so a new entry does not
   * need art invented for it.
   */
  image?: string;
  /**
   * ISO date Jhojan's work on the project started, or a one-off shipped.
   * This is project activity, not necessarily a public launch date.
   */
  date: string;
  /** ISO date project activity ended. Omitted on one-offs and live work. */
  endDate?: string;
  /**
   * The project is still active. Drives the amber `Present` reading
   * and is mutually exclusive with `endDate`.
   */
  ongoing?: boolean;
  desc: string;
  /** Technologies the résumé names for this work. Omitted when it names none. */
  tech?: string[];
  status: ProjectStatus;
}

/**
 * Hand-ordered, most recent activity first within each group. Live work leads,
 * then sorts by its own start date; finished work sorts by its end (or one-off)
 * date.
 */
const data: Project[] = [
  // ─── TRABAJO SELECCIONADO ────────────────────────────────────────────────
  {
    title: 'Automatización de Reportes UNCP',
    subtitle: 'Dirección de Proyección Social y Extensión Cultural — UNCP',
    link: 'https://uncp.edu.pe/la-universidad/extension-cultural-y-proyeccion-social-2/',
    sourceWork: 'Dirección de Proyección Social y Extensión Cultural — UNCP',
    date: '2024-01-01',
    ongoing: true,
    desc: 'Automatización de reportes con Python para la emisión de certificados institucionales. Simulación de descargas manuales y generación de documentos con los detalles requeridos por la oficina.',
    tech: ['Python', 'Pandas', 'Openpyxl'],
    status: 'shipped',
  },

  // ─── ARCHIVO ─────────────────────────────────────────────────────────────
  {
    title: 'Sistema de Gestión Hotelera',
    subtitle: 'Proyecto académico — UNCP',
    link: 'https://github.com/JHOJAN-GIT/Sistema-de-Gestion-Hotelera',
    date: '2026-10-18',
    desc: 'Sistema web de administración hotelera desarrollado en PHP. Incluye gestión de reservas, check-out, registro de nuevos huéspedes, vista de huéspedes actuales, cancelación de reservas y envío de códigos de verificación por correo. Panel de administrador con autenticación y control de sesiones.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    status: 'archive',
  },
  {
    title: 'Dashboard de Gestión de Estudiantes',
    subtitle: 'Práctica Semana 07 Parte 2 — DAW, UNCP',
    link: 'https://github.com/JHOJAN-GIT/PRACTICA-SEM-07-PARTE-02',
    date: '2026-10-15',
    desc: 'SPA con React 19 + Vite que implementa un gestor de estudiantes con registro, filtrado, ordenación y persistencia. Aplica correctamente todos los hooks de React: useReducer, useContext, useEffect, useMemo, useCallback, useRef, y custom hooks (useLocalStorage, useDebounce).',
    tech: ['React', 'Vite', 'JavaScript', 'CSS'],
    status: 'archive',
  },
  {
    title: 'Sistema de Gestión de Biblioteca Universitaria',
    subtitle: 'Parcial DAW — UNCP',
    link: 'https://github.com/JHOJAN-GIT/PARCIAL-DAW',
    date: '2026-10-13',
    desc: 'Sistema fullstack con React 19, TypeScript, Vite y Tailwind CSS para gestión de libros, usuarios y préstamos universitarios. Incluye generación de comprobantes en PDF con jsPDF y persistencia con Local Storage.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'jsPDF'],
    status: 'archive',
  },
  {
    title: 'Práctica Semana 07',
    subtitle: 'React + Vite — DAW, UNCP',
    link: 'https://github.com/JHOJAN-GIT/PRACTICA-SEM-07',
    date: '2026-10-14',
    desc: 'Práctica académica de React con Vite desarrollada en el curso Desarrollo de Aplicaciones Web de la UNCP. Configuración de proyecto con HMR, Oxlint y plugins oficiales de React.',
    tech: ['React', 'Vite', 'JavaScript'],
    status: 'archive',
  },
  {
    title: 'Práctica Semana 06',
    subtitle: 'React + Vite — DAW, UNCP',
    link: 'https://github.com/JHOJAN-GIT/PRACTICA_SEM_06',
    date: '2026-10-07',
    desc: 'Práctica académica de React con Vite desarrollada en el curso Desarrollo de Aplicaciones Web de la UNCP. Implementación de componentes y manejo de estado con hooks.',
    tech: ['React', 'Vite', 'JavaScript'],
    status: 'archive',
  },
  {
    title: 'Práctica Calificada — Semana 3',
    subtitle: 'Práctica calificada — DAW, UNCP',
    link: 'https://github.com/JHOJAN-GIT/Practica_Calificada_Sem_3-2',
    date: '2026-09-17',
    desc: 'Práctica calificada del curso Desarrollo de Aplicaciones Web en la UNCP. Desarrollo de aplicación web con fundamentos de programación frontend.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    status: 'archive',
  },
  {
    title: 'Portafolio Personal',
    subtitle: 'Proyecto personal',
    link: 'https://github.com/JHOJAN-GIT/Mi-portafolio-virtual',
    date: '2026-10-18',
    desc: 'Sitio de portafolio personal construido con Next.js 15, TypeScript y Tailwind CSS. Incluye modo oscuro/claro, diseño responsivo, sección de proyectos, currículum y blog.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    status: 'archive',
  },
];

export default data;

/** The register: production work, most recent first. */
export const shipped = data.filter((project) => project.status === 'shipped');

/** Student-era history, most recent first. */
export const archive = data.filter((project) => project.status === 'archive');

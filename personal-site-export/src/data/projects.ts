/**
 * The register of things I have built.
 *
 * Two groups, both kept deliberately:
 *
 * - `shipped` — selected production work Jhojan built or contributed to.
 * - `archive` — earlier experiments and academic projects.
 *
 * Every shipped entry declares the role in `src/data/resume/work.ts` that
 * backs its dates and numeric claims. Archive entries are maintained here
 * directly. Those checks establish internal consistency; factual claims and
 * public destinations still need primary-source and live-link review.
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
 * date. `projects.test.ts` pins the complete comparator, including ties.
 */
const data: Project[] = [
  {
    title: 'Automatización de Reportes UNCP',
    subtitle: 'Dirección de Proyección Social y Extensión Cultural — UNCP',
    link: 'https://www.uncp.edu.pe',
    sourceWork: 'Dirección de Proyección Social y Extensión Cultural — UNCP',
    date: '2024-01-01',
    ongoing: true,
    desc: 'Automatización de reportes con Python para la emisión de certificados institucionales. Simulación de descargas manuales y generación de documentos con los detalles requeridos por la oficina.',
    tech: ['Python', 'Pandas', 'Openpyxl'],
    status: 'shipped',
  },
  {
    title: 'Portafolio Personal',
    subtitle: 'Proyecto personal',
    link: 'https://github.com/JHOJAN-GIT',
    date: '2024-06-01',
    desc: 'Sitio de portafolio personal construido con Next.js, TypeScript y Tailwind CSS.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    status: 'archive',
  },
];

export default data;

/** The register: production work, most recent first. */
export const shipped = data.filter((project) => project.status === 'shipped');

/** Student-era history, most recent first. */
export const archive = data.filter((project) => project.status === 'archive');

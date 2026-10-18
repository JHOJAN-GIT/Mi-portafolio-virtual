export interface Course {
  title: string;
  number: string;
  link: string;
  /**
   * Must match a `Degree.school` in `src/data/resume/degrees.ts` exactly.
   * `src/lib/resumeJson.ts` files coursework under the education entry with
   * this name, and it compares the two strings whole — a shortened form here
   * would silently drop the courses from `/resume.json`.
   */
  university: string;
}

const courses: Course[] = [
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

export default courses;

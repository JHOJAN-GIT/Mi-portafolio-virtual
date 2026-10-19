export interface Course {
  title: string;
  number: string;
  link: string;
  /**
   * Must match a `Degree.school` in `src/data/resume/degrees.ts` exactly.
   */
  university: string;
  /** Descripción breve del contenido del curso */
  description?: string;
}

const courses: Course[] = [
  {
    title: 'Algoritmos y Estructura de Datos',
    number: 'IS-201',
    link: 'https://www.uncp.edu.pe',
    university: 'Universidad Nacional del Centro del Perú',
    description: 'Análisis de complejidad, listas enlazadas, árboles, grafos y algoritmos de ordenamiento y búsqueda.',
  },
  {
    title: 'Metodología de la Programación',
    number: 'IS-101',
    link: 'https://www.uncp.edu.pe',
    university: 'Universidad Nacional del Centro del Perú',
    description: 'Fundamentos de lógica computacional, diseño de algoritmos, pseudocódigo y diagramas de flujo.',
  },
  {
    title: 'Ingeniería de Requerimientos',
    number: 'IS-401',
    link: 'https://www.uncp.edu.pe',
    university: 'Universidad Nacional del Centro del Perú',
    description: 'Elicitación, análisis y especificación de requerimientos. Casos de uso, historias de usuario y gestión del alcance.',
  },
  {
    title: 'Ingeniería de Software I',
    number: 'IS-301',
    link: 'https://www.uncp.edu.pe',
    university: 'Universidad Nacional del Centro del Perú',
    description: 'Ciclo de vida del software, metodologías ágiles (Scrum), patrones de diseño y principios SOLID.',
  },
  {
    title: 'Base de Datos I',
    number: 'IS-302',
    link: 'https://www.uncp.edu.pe',
    university: 'Universidad Nacional del Centro del Perú',
    description: 'Modelo relacional, normalización, SQL (DDL y DML), transacciones y gestión con SQL Server y SSMS.',
  },
  {
    title: 'JavaScript',
    number: 'IS-306',
    link: 'https://www.uncp.edu.pe',
    university: 'Universidad Nacional del Centro del Perú',
    description: 'DOM, eventos, ES6+, fetch API, promesas y async/await. Construcción de interfaces dinámicas sin frameworks.',
  },
  {
    title: 'Programación Web',
    number: 'IS-305',
    link: 'https://www.uncp.edu.pe',
    university: 'Universidad Nacional del Centro del Perú',
    description: 'HTML semántico, CSS avanzado, PHP, MySQL y arquitectura cliente-servidor. Primer contacto con el stack web completo.',
  },
  {
    title: 'Redes y Comunicaciones',
    number: 'IS-402',
    link: 'https://www.uncp.edu.pe',
    university: 'Universidad Nacional del Centro del Perú',
    description: 'Modelo OSI, TCP/IP, subnetting, protocolos HTTP/HTTPS, DNS y fundamentos de seguridad en redes.',
  },
];

export default courses;

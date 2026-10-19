/**
 * The register of things I have built.
 */
export type ProjectStatus = 'shipped' | 'archive';

export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  sourceWork?: string;
  image?: string;
  date: string;
  endDate?: string;
  ongoing?: boolean;
  desc: string;
  tech?: string[];
  status: ProjectStatus;
}

const data: Project[] = [
  // ─── TRABAJO SELECCIONADO ────────────────────────────────────────────────
  {
    title: 'Sistema de Gestión Hotelera con Chatbot',
    subtitle: 'Proyecto personal · Full-stack PHP',
    link: 'https://github.com/JHOJAN-GIT/Sistema-de-Gestion-Hotelera',
    image: '/images/projects/hotelera/hotelera_11zon.webp',
    date: '2025-03-01',
    endDate: '2025-08-01',
    desc: 'Sistema web completo de administración hotelera construido en PHP con MySQL. El sistema centraliza todas las operaciones de un hotel en un único panel: registro y autenticación de huéspedes, gestión del inventario de habitaciones por tipo (simple, doble, suite), reservas con selección de fechas y cálculo automático del costo total por noche, proceso de check-in con asignación de habitación disponible en tiempo real, check-out con generación del comprobante de estadía y desglose de cargos, cancelación de reservas con política de reembolso configurable, historial completo por huésped y por habitación, y panel administrativo con métricas de ocupación y facturación mensual. Incluye un chatbot integrado que responde consultas de disponibilidad, precios y servicios del hotel directamente desde la interfaz del cliente, usando lógica de reglas y conexión a la base de datos para dar respuestas en tiempo real. La autenticación distingue entre rol administrador y rol recepcionista, con permisos granulares por módulo.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'XAMPP'],
    status: 'shipped',
  },
  {
    title: 'Sistema de Puntajes en Tiempo Real para Jurados',
    subtitle: 'Proyecto académico · Next.js + WebSockets',
    link: 'https://github.com/JHOJAN-GIT',
    image: '/images/projects/puntajes/puntajes_11zon.webp',
    date: '2025-09-01',
    endDate: '2025-12-01',
    desc: 'Plataforma de votación y puntajes en tiempo real diseñada para jurados en eventos académicos y culturales de la UNCP. El sistema permite que múltiples jurados ingresen sus calificaciones de forma simultánea desde distintos dispositivos, y el puntaje total se actualiza instantáneamente en el panel de resultados sin necesidad de recargar la página. La primera versión fue construida en PHP con polling periódico (AJAX cada 2 segundos); la segunda versión fue reescrita completamente en Next.js con WebSockets para comunicación bidireccional real, eliminando la latencia y reduciendo la carga del servidor. Cada criterio de evaluación es configurable desde el panel del administrador del evento (originalidad, técnica, presentación, impacto, etc.), los pesos de cada criterio son ponderados automáticamente en el cálculo final, y el ranking de participantes se ordena y actualiza en vivo. Incluye panel de administrador para crear eventos, gestionar participantes, asignar jurados, abrir y cerrar rondas de votación, y exportar resultados en PDF o Excel al finalizar el evento.',
    tech: ['Next.js', 'React', 'TypeScript', 'WebSockets', 'PHP', 'MySQL'],
    status: 'shipped',
  },
  {
    title: 'Automatización de Descarga y Emisión de Certificados — UNCP',
    subtitle: 'Dirección de Proyección Social y Extensión Cultural — UNCP',
    link: 'https://uncp.edu.pe/la-universidad/extension-cultural-y-proyeccion-social-2/',
    sourceWork: 'Dirección de Proyección Social y Extensión Cultural — UNCP',
    image: '/images/projects/automatizacion/automatizacion_11zon.webp',
    date: '2024-01-01',
    ongoing: true,
    desc: 'Solución de automatización en Python para la Dirección de Proyección Social y Extensión Cultural de la UNCP, diseñada para eliminar el proceso manual de descarga de datos del ERP ADESA y la emisión individual de certificados institucionales. El sistema simula el comportamiento de un operario humano navegando el ERP: autentica sesión, navega a los módulos correspondientes, aplica los filtros de periodo y tipo de actividad, descarga las planillas de participantes en formato Excel, y las procesa con Pandas para limpiar, transformar y validar los datos. Con los datos limpios, el pipeline genera automáticamente los certificados en formato PDF para cada participante usando plantillas institucionales predefinidas, rellenando nombre completo, actividad, horas académicas, fecha y firma digital del director. El sistema maneja errores de conexión con reintentos, registra cada operación en un log de auditoría, y envía un resumen por correo al finalizar el proceso. Lo que antes tomaba horas de trabajo manual ahora se ejecuta en minutos con un solo comando.',
    tech: ['Python', 'Pandas', 'Openpyxl', 'Selenium', 'ReportLab', 'smtplib'],
    status: 'shipped',
  },

  // ─── ARCHIVO ─────────────────────────────────────────────────────────────
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
    desc: 'Sitio de portafolio personal construido con Next.js 16, TypeScript y Tailwind CSS. Incluye modo oscuro/claro, diseño responsivo, sección de proyectos, currículum, cuaderno de aprendizaje y blog.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    status: 'archive',
  },
];

export default data;

/** The register: production work, most recent first. */
export const shipped = data.filter((project) => project.status === 'shipped');

/** Student-era history, most recent first. */
export const archive = data.filter((project) => project.status === 'archive');

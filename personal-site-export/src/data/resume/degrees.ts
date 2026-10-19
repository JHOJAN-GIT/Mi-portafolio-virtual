export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
  /** Año de inicio del programa */
  startYear: number;
  /** Mes de inicio (1-12) */
  startMonth: number;
  /** Si sigue en curso */
  current: boolean;
  description?: string;
}

const degrees: Degree[] = [
  {
    school: 'Universidad Nacional del Centro del Perú',
    degree: 'B.S. Ingeniería de Sistemas',
    link: 'https://www.uncp.edu.pe',
    year: 2027,
    startYear: 2022,
    startMonth: 8,
    current: true,
    description:
      'Formación en desarrollo de software, estructuras de datos, bases de datos, redes y sistemas operativos. Trabajo paralelo en la Dirección de Proyección Social automatizando reportes con Python.',
  },
];

export default degrees;

export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Universidad Nacional del Centro del Perú',
    degree: 'B.S. Ingeniería de Sistemas',
    link: 'https://www.uncp.edu.pe',
    year: 2026,
  },
];

export default degrees;

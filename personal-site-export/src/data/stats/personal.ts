import type { StatDeclaration } from '@/lib/readings';
import { COUNTRIES_VISITED, CURRENT_CITY } from '@/lib/telemetry';

const data: StatDeclaration[] = [
  {
    key: 'age',
    label: 'Edad',
    source: 'profile',
  },
  {
    key: 'location',
    label: 'Ciudad',
    value: CURRENT_CITY,
    source: 'profile',
  },
  {
    key: 'countries',
    label: 'Países visitados',
    value: COUNTRIES_VISITED,
    source: 'profile',
  },
  {
    key: 'university',
    label: 'Universidad',
    value: 'UNCP — Huancayo, Perú',
    source: 'profile',
    link: 'https://www.uncp.edu.pe',
  },
  {
    key: 'career',
    label: 'Carrera',
    value: 'Ing. de Sistemas',
    source: 'profile',
  },
  {
    key: 'cycle',
    label: 'Ciclo actual',
    value: '8.°',
    source: 'profile',
  },
  {
    key: 'computing_since',
    label: 'Programando desde',
    value: '2019',
    source: 'profile',
  },
  {
    key: 'first_lang',
    label: 'Primer lenguaje',
    value: 'C++',
    source: 'profile',
  },
  {
    key: 'favorite_stack',
    label: 'Stack favorito',
    value: 'React + TypeScript + Tailwind + Vite',
    source: 'profile',
  },
  {
    key: 'events',
    label: 'Congresos asistidos',
    value: 'CONEII 2025 Piura · PERUMEC 2026 Cusco',
    source: 'profile',
  },
];

export default data;

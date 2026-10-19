import { AUTHOR_NAME } from '@/lib/utils';

export interface Route {
  label: string;
  path: string;
  index?: boolean;
  primary?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: AUTHOR_NAME,
    path: '/',
  },
  {
    label: 'Sobre mí',
    path: '/about',
  },
  {
    label: 'Currículum',
    path: '/resume',
  },
  {
    label: 'Proyectos',
    path: '/projects',
  },
  {
    label: 'Cuaderno',
    path: '/cuaderno',
  },
  {
    label: 'Estadísticas',
    path: '/stats',
    primary: false,
  },
  {
    label: 'Contacto',
    path: '/contact',
  },
];

export default routes;

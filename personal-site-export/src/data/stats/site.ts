import type { StatDeclaration } from '@/lib/readings';
import {
  buildSourceTreeUrl,
  builtCommitUrl,
  SHORT_SHA_LENGTH,
  utcDate,
} from '@/lib/telemetry';

const REPOSITORY = 'https://github.com/JHOJAN-GIT/Mi-portafolio-virtual';

const data: StatDeclaration[] = [
  {
    label: 'Repositorio',
    value: 'JHOJAN-GIT/Mi-portafolio-virtual',
    source: 'github',
    link: REPOSITORY,
  },
  {
    label: 'Último push al repositorio',
    key: 'pushed_at',
    source: 'github',
    link: `${REPOSITORY}/activity`,
    format: (value: unknown) => utcDate(new Date(String(value)).getTime()),
  },
  {
    label: 'Construido desde el commit',
    key: 'built_commit',
    source: 'measured',
    format: (value: unknown) => String(value).slice(0, SHORT_SHA_LENGTH),
    link: builtCommitUrl,
  },
  {
    label: 'Fecha de compilación',
    key: 'built_at',
    source: 'measured',
  },
  {
    label: 'Tecnología principal',
    value: 'Next.js 16 · React 19 · TypeScript',
    source: 'measured',
    link: buildSourceTreeUrl,
  },
  {
    label: 'Desplegado en',
    value: 'GitHub Pages · Vercel',
    source: 'measured',
  },
];

export default data;

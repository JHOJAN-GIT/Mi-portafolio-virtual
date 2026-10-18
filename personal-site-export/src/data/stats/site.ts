import type { StatDeclaration } from '@/lib/readings';
import {
  buildSourceFileUrl,
  buildSourceTreeUrl,
  builtCommitUrl,
  SHORT_SHA_LENGTH,
  utcDate,
} from '@/lib/telemetry';

const REPOSITORY = 'https://github.com/JHOJAN-GIT/personal-site';

/**
 * Keys are filled by `src/components/Stats/Site.tsx`. GitHub rows describe the
 * public upstream repository; measured rows describe this exact build and link
 * to its repository and immutable revision when CI provides that identity.
 */
const data: StatDeclaration[] = [
  {
    label: 'Estrellas en GitHub',
    key: 'stargazers_count',
    source: 'github',
    link: `${REPOSITORY}/stargazers`,
  },
  {
    label: 'Personas siguiendo este repositorio',
    key: 'subscribers_count',
    source: 'github',
    link: `${REPOSITORY}/watchers`,
  },
  {
    label: 'Número de forks',
    key: 'forks',
    source: 'github',
    link: `${REPOSITORY}/network`,
  },
  {
    label: 'Issues y pull requests abiertos en GitHub',
    key: 'open_issues_count',
    source: 'github',
    link: 'https://github.com/search?q=repo%3AJHOJAN-GIT%2Fpersonal-site+is%3Aopen&type=issues',
  },
  {
    label: 'Último push al repositorio (UTC)',
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
    label: 'Fecha de compilación (UTC)',
    key: 'built_at',
    source: 'measured',
  },
  {
    label: 'Líneas de TypeScript en este sitio',
    key: 'source_lines',
    source: 'measured',
    link: buildSourceTreeUrl,
  },
  {
    label: 'Dependencias declaradas directamente',
    key: 'direct_dependencies',
    source: 'measured',
    unit: 'paquetes',
    link: () => buildSourceFileUrl('package.json'),
  },
  {
    label: 'Ubicaciones de paquetes no-dev instalados',
    key: 'installed_non_dev_packages',
    source: 'measured',
  },
  {
    label: 'Ubicaciones de paquetes en el lockfile',
    key: 'locked_packages',
    source: 'measured',
    link: () => buildSourceFileUrl('package-lock.json'),
  },
  {
    label: 'Reglas de Biome activas en CI',
    key: 'lint_rules',
    source: 'measured',
    link: () => buildSourceFileUrl('biome.json'),
  },
  {
    label: 'Número de cucharas',
    value: 0,
  },
];

export default data;

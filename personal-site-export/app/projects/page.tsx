import type { Metadata } from 'next';

import Cell from '@/components/Projects/Cell';
import Entry from '@/components/Projects/Entry';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import { archive, shipped } from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';
import {
  breadcrumbNode,
  collectionPageNode,
  HOME_URL,
  SITE_URL,
} from '@/lib/schema';
import { AUTHOR_NAME } from '@/lib/utils';

const PROJECTS_URL = `${SITE_URL}/projects/`;

const PAGE_TITLE = 'Proyectos';

const PROJECTS_DESCRIPTION = `Trabajo seleccionado de ${AUTHOR_NAME} — ${shipped
  .slice(0, 3)
  .map((project) => project.title)
  .join(', ')} — además de proyectos y experimentos anteriores.`;

function projectCountLabel(count: number): string {
  return `${count} ${count === 1 ? 'proyecto' : 'proyectos'}`;
}

export const metadata: Metadata = createPageMetadata({
  title: PAGE_TITLE,
  description: PROJECTS_DESCRIPTION,
  path: '/projects/',
});

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          collectionPageNode({
            url: PROJECTS_URL,
            name: PAGE_TITLE,
            description: PROJECTS_DESCRIPTION,
            hasBreadcrumb: true,
          }),
          breadcrumbNode(PROJECTS_URL, [
            { name: 'Inicio', url: HOME_URL },
            { name: PAGE_TITLE, url: PROJECTS_URL },
          ]),
        ]}
      />
      <div className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">{PAGE_TITLE}</h1>
          <p className="page-subtitle">
            Trabajo que he construido, liderado y al que he contribuido, además de proyectos estudiantiles anteriores.
          </p>
        </header>

        <section className="projects-group" aria-labelledby="projects-selected">
          <div className="projects-group-header">
            <h2 id="projects-selected" className="projects-section-title">
              Trabajo seleccionado
            </h2>
            {/* Counted, never typed. */}
            <span className="projects-section-count">
              {projectCountLabel(shipped.length)}
            </span>
          </div>
          <ol className="projects-register">
            {shipped.map((project) => (
              <li key={project.title}>
                <Entry data={project} />
              </li>
            ))}
          </ol>
        </section>

        <section className="projects-group" aria-labelledby="projects-archive">
          <div className="projects-group-header">
            <h2 id="projects-archive" className="projects-section-title">
              Archivo
            </h2>
            <span className="projects-section-count">
              {projectCountLabel(archive.length)}
            </span>
          </div>
          <p className="projects-group-note">
            Proyectos estudiantiles, hackathons y experimentos, conservados como registro.
          </p>
          <ol className="projects-grid">
            {archive.map((project) => (
              <li key={project.title}>
                <Cell data={project} />
              </li>
            ))}
          </ol>
        </section>
      </div>
    </PageWrapper>
  );
}

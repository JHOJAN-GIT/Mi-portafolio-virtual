import type { Metadata } from 'next';
import Link from 'next/link';

import { SchemaGraph } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import { shipped } from '@/data/projects';
import { HOME_URL, profilePageNode } from '@/lib/schema';
import {
  AUTHOR_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
} from '@/lib/utils';

/** Genera el mismo slug que Entry.tsx usa para los IDs */
function projectSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
};

export default function HomePage() {
  const featuredProjects = shipped.slice(0, 3);

  return (
    <PageWrapper mainClassName="page-main--hero">
      <SchemaGraph
        nodes={[profilePageNode({ url: HOME_URL, name: AUTHOR_NAME })]}
      />
      <Hero />

      {/* ── Proyectos destacados ── */}
      <section className="home-writing" aria-labelledby="home-projects-title">
        <div className="home-writing-header">
          <h2 id="home-projects-title">Proyectos</h2>
          <Link href="/projects/" className="home-writing-all">
            Ver todos <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="home-writing-list">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href={`/projects/#${projectSlug(project.title)}`}
              className="home-writing-item"
            >
              <span className="home-writing-meta">
                {project.subtitle}
              </span>
              <div className="home-writing-copy">
                <h3>{project.title}</h3>
                <p className="home-project-brief">{
                  /* Descripción recortada: primera oración solamente */
                  project.desc.split('. ')[0] + '.'
                }</p>
              </div>
              <span className="home-writing-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}


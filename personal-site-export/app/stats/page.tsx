import type { Metadata } from 'next';

import Personal from '@/components/Stats/Personal';
import Site from '@/components/Stats/Site';

import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';
import { AUTHOR_NAME } from '@/lib/utils';

export const metadata: Metadata = createPageMetadata({
  title: 'Stats',
  description: `Algunas estadísticas sobre ${AUTHOR_NAME} y este sitio`,
  path: '/stats/',
});

export default function StatsPage() {
  return (
    <PageWrapper>
      <section className="stats-page">
        <header className="stats-header">
          <h1 className="stats-title">Estadísticas</h1>
          <p className="stats-subtitle">Algunos números</p>
        </header>
        <div className="stats-content">
          <section>
            <h2 className="stats-section-title">Sobre mí</h2>
            <Personal />
          </section>
          <section>
            <h2 className="stats-section-title">Este sitio</h2>
            <Site />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}

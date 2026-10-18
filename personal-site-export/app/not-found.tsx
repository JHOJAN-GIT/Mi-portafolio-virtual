import type { Metadata } from 'next';
import Link from 'next/link';
import { MAIN_CONTENT_ID } from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Página no encontrada',
  description: 'La página que buscas no existe o fue movida.',
});

export default function NotFound() {
  return (
    <main id={MAIN_CONTENT_ID} tabIndex={-1} className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">Página no encontrada</h1>
        <p className="not-found-message">
          La página que buscas no existe o fue movida.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="button">
            Ir al inicio
          </Link>
          <Link href="/contact" className="button button-secondary">
            Contáctame
          </Link>
        </div>
      </div>
    </main>
  );
}

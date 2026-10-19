import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from '@/components/Template/PageWrapper';
import { unidades } from '@/data/cuaderno';
import { createPageMetadata } from '@/lib/metadata';
import { AUTHOR_NAME } from '@/lib/utils';

export const metadata: Metadata = createPageMetadata({
  title: 'Cuaderno',
  description: `Cuaderno de aprendizaje de ${AUTHOR_NAME} — Desarrollo de Aplicaciones Web, UNCP. Dos unidades con reflexiones semanales.`,
  path: '/cuaderno/',
});

export default function CuadernoPage() {
  return (
    <PageWrapper>
      <article className="cuaderno-page">

        {/* ── Hero del cuaderno ── */}
        <header className="cuaderno-hero">
          <h1 className="cuaderno-hero-titulo">Cuaderno</h1>
          <p className="cuaderno-hero-desc">
            Registro semana a semana del aprendizaje en el curso de
            Desarrollo de Aplicaciones Web. Dos unidades, catorce semanas,
            catorce reflexiones.
          </p>
          {/* Stat pills */}
          <div className="cuaderno-hero-stats">
            <span className="cuaderno-stat">
              <span className="cuaderno-stat-num">2</span>
              <span className="cuaderno-stat-label">Unidades</span>
            </span>
            <span className="cuaderno-stat-sep" aria-hidden="true" />
            <span className="cuaderno-stat">
              <span className="cuaderno-stat-num">14</span>
              <span className="cuaderno-stat-label">Semanas</span>
            </span>
            <span className="cuaderno-stat-sep" aria-hidden="true" />
            <span className="cuaderno-stat">
              <span className="cuaderno-stat-num">14</span>
              <span className="cuaderno-stat-label">Reflexiones</span>
            </span>
          </div>
        </header>

        {/* ── Unidades ── */}
        <div className="cuaderno-unidades">
          {unidades.map((unidad) => (
            <section
              key={unidad.numero}
              className="cuaderno-unidad"
              aria-labelledby={`unidad-${unidad.numero}-titulo`}
            >
              {/* Cabecera de unidad */}
              <div className="cuaderno-unidad-header">
                <span className="cuaderno-unidad-numero">
                  Unidad {unidad.numero}
                </span>
                <h2
                  id={`unidad-${unidad.numero}-titulo`}
                  className="cuaderno-unidad-titulo"
                >
                  {unidad.titulo}
                </h2>
                <p className="cuaderno-unidad-desc">{unidad.descripcion}</p>
              </div>

              {/* Lista de semanas */}
              <ol className="cuaderno-semanas-lista">
                {unidad.semanas.map((semana, idx) => {
                  const tieneContenido = semana.contenido.trim().length > 0;
                  const href = `/cuaderno/unidad-${unidad.numero}/semana-${semana.numeroStr}`;

                  return (
                    <li key={semana.numero}>
                      <Link
                        href={href}
                        className={`cuaderno-semana-row${tieneContenido ? ' cuaderno-semana-row--activa' : ' cuaderno-semana-row--vacia'}`}
                      >
                        {/* Número */}
                        <div className="cuaderno-row-num" aria-hidden="true">
                          <span className="cuaderno-row-idx">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="cuaderno-row-sem">
                            Sem {semana.numeroStr}
                          </span>
                        </div>

                        {/* Contenido */}
                        <div className="cuaderno-row-body">
                          <h3 className="cuaderno-row-titulo">
                            {semana.titulo}
                          </h3>
                          <p className="cuaderno-row-subtitulo">
                            {semana.subtitulo}
                          </p>
                          <p className="cuaderno-row-desc">
                            {semana.descripcionBreve}
                          </p>

                          {/* Temas pill preview */}
                          {semana.temas.length > 0 && (
                            <div className="cuaderno-row-temas">
                              {semana.temas.slice(0, 3).map((t) => (
                                <span key={t} className="cuaderno-tema-pill">
                                  {t}
                                </span>
                              ))}
                              {semana.temas.length > 3 && (
                                <span className="cuaderno-tema-pill cuaderno-tema-pill--more">
                                  +{semana.temas.length - 3}
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Estado + flecha */}
                        <div className="cuaderno-row-end">
                          {tieneContenido ? (
                            <span className="cuaderno-row-badge cuaderno-row-badge--ok">
                              Completa
                            </span>
                          ) : (
                            <span className="cuaderno-row-badge cuaderno-row-badge--pending">
                              Pendiente
                            </span>
                          )}
                          <span
                            className="cuaderno-row-arrow"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </section>
          ))}
        </div>

      </article>
    </PageWrapper>
  );
}

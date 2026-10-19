import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import ReflexionCard from '@/components/Cuaderno/ReflexionCard';
import PageWrapper from '@/components/Template/PageWrapper';
import { getSemana, getUnidad, unidades } from '@/data/cuaderno';
import { createPageMetadata } from '@/lib/metadata';

interface Params {
  unidad: string; // "unidad-1" | "unidad-2"
  semana: string; // "semana-01" … "semana-15"
}

/** Genera todas las combinaciones estáticas para output: 'export' */
export async function generateStaticParams() {
  return unidades.flatMap((unidad) =>
    unidad.semanas.map((semana) => ({
      unidad: `unidad-${unidad.numero}`,
      semana: `semana-${semana.numeroStr}`,
    })),
  );
}

function parseParams(params: Params) {
  const numUnidad = parseInt(params.unidad.replace('unidad-', ''), 10);
  const numSemana = parseInt(params.semana.replace('semana-', ''), 10);
  return { numUnidad, numSemana };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { numUnidad, numSemana } = parseParams(await params);
  const semana = getSemana(numUnidad, numSemana);
  if (!semana) return {};
  return createPageMetadata({
    title: `${semana.titulo} — Cuaderno`,
    description:
      semana.temas.length > 0
        ? `${semana.temas.slice(0, 3).join(', ')}.`
        : semana.descripcionBreve,
    path: `/cuaderno/unidad-${numUnidad}/semana-${semana.numeroStr}/`,
  });
}

export default async function SemanaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { numUnidad, numSemana } = parseParams(await params);
  const unidad = getUnidad(numUnidad);
  const semana = getSemana(numUnidad, numSemana);
  if (!unidad || !semana) notFound();

  const idx = unidad.semanas.findIndex((s) => s.numero === semana.numero);
  const anterior = idx > 0 ? unidad.semanas[idx - 1] : null;
  const siguiente =
    idx < unidad.semanas.length - 1 ? unidad.semanas[idx + 1] : null;
  const tieneContenido = semana.contenido.trim().length > 0;
  const tieneReflexion = semana.reflexion.trim().length > 0;

  return (
    <PageWrapper>
      <article className="semana-page">

        {/* ── Navegación superior ── */}
        <div className="semana-topnav">
          <Link href="/cuaderno" className="semana-back-btn">
            <span aria-hidden="true">←</span> Cuaderno
          </Link>
          <span className="semana-topnav-sep" aria-hidden="true">·</span>
          <span className="semana-topnav-unidad">
            Unidad {unidad.numero} — {unidad.titulo}
          </span>
        </div>

        {/* ── Hero ── */}
        <header className="semana-hero">
          <div className="semana-hero-kicker">
            <span className="semana-kicker-sem">Semana {semana.numeroStr}</span>
            <span className="semana-kicker-sep" aria-hidden="true">·</span>
            <span className="semana-kicker-subtitulo">{semana.subtitulo}</span>
          </div>
          <h1 className="semana-hero-titulo">{semana.titulo}</h1>
          <p className="semana-hero-desc">{semana.descripcionBreve}</p>

          {semana.temas.length > 0 && (
            <div
              className="semana-hero-temas"
              role="list"
              aria-label="Temas de la semana"
            >
              {semana.temas.map((tema) => (
                <span key={tema} className="semana-hero-tema" role="listitem">
                  {tema}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* ── Cuerpo ── */}
        <div className="semana-cuerpo">

          {/* Contenido aprendido */}
          <section
            className="semana-seccion"
            aria-labelledby="contenido-h"
          >
            <div className="semana-seccion-label">
              <svg className="semana-seccion-icon" aria-hidden="true" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="11" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M6 7h5M6 10h5M6 13h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 6l3 0M14 10l3 0M14 14l3 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
              </svg>
              <h2 id="contenido-h" className="semana-seccion-titulo">
                Lo que aprendí
              </h2>
            </div>

            {tieneContenido ? (
              <div className="semana-contenido">
                {semana.contenido.split('\n\n').map((bloque, i) => {
                  const texto = bloque.trim();
                  // Subtítulo si termina en ':' y es corto
                  if (texto.endsWith(':') && texto.length < 90) {
                    return (
                      <h3 key={i} className="semana-contenido-subtitulo">
                        {texto.replace(/:$/, '')}
                      </h3>
                    );
                  }
                  return <p key={i}>{texto}</p>;
                })}
              </div>
            ) : (
              <div className="semana-vacio">
                <p>Contenido por agregar</p>
              </div>
            )}
          </section>

          {/* Imágenes ilustrativas */}
          {semana.imagenes && semana.imagenes.length > 0 && (
            <section
              className="semana-seccion semana-seccion--imagenes"
              aria-labelledby="imagenes-h"
            >
              <div className="semana-seccion-label">
                <svg className="semana-seccion-icon" aria-hidden="true" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="7" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M2 13l4-3.5 3 2.5 3-3 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2 id="imagenes-h" className="semana-seccion-titulo">
                  Recursos visuales
                </h2>
              </div>

              {/* Layout excéntrico: cada semana tiene su propio estilo */}
              <div className={`semana-imgs semana-imgs--layout-${semana.layoutImagenes ?? 'default'}`}>
                {semana.imagenes.map((img, i) => (
                  <figure
                    key={i}
                    className={`semana-img-figura semana-img-figura--${i === 0 ? 'a' : 'b'} semana-img-figura--${img.rol ?? 'normal'}`}
                  >
                    <div className="semana-img-marco">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className="semana-img-foto"
                        style={{ maxWidth: img.width, height: 'auto' }}
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="semana-img-caption">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* Reflexión semanal */}
          <section
            className="semana-seccion semana-seccion--reflexion"
            aria-labelledby="reflexion-h"
          >
            <div className="semana-seccion-label">
              <svg className="semana-seccion-icon" aria-hidden="true" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 5.5C4 4.67 4.67 4 5.5 4h9C15.33 4 16 4.67 16 5.5v7c0 .83-.67 1.5-1.5 1.5H11l-3 3v-3H5.5C4.67 16 4 15.33 4 14.5v-9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M7 8h6M7 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <h2 id="reflexion-h" className="semana-seccion-titulo">
                Reflexión semanal
              </h2>
            </div>

            {tieneReflexion ? (
              <ReflexionCard>
                <blockquote className="semana-reflexion">
                  <div
                    className="semana-reflexion-marca"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>
                  <div className="semana-reflexion-texto">
                    {semana.reflexion.split('\n\n').map((p, i) => (
                      <p key={i}>{p.trim()}</p>
                    ))}
                  </div>
                </blockquote>
              </ReflexionCard>
            ) : (
              <div className="semana-vacio">
                <p>Reflexión por agregar</p>
              </div>
            )}
          </section>

          {/* Referencias */}
          {semana.referencias && semana.referencias.length > 0 && (
            <section
              className="semana-seccion semana-seccion--referencias"
              aria-labelledby="referencias-h"
            >
              <div className="semana-seccion-label">
                <svg className="semana-seccion-icon" aria-hidden="true" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h12M4 8h8M4 12h10M4 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="15.5" cy="14.5" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M17.5 16.5l1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <h2 id="referencias-h" className="semana-seccion-titulo">
                  Referencias
                </h2>
              </div>
              <ul className="semana-referencias-lista">
                {semana.referencias.map((ref, i) => (
                  <li key={i} className="semana-referencia-item">
                    <div className="semana-referencia-body">
                      {ref.url ? (
                        <>
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="semana-referencia-link"
                          >
                            <span className="semana-referencia-texto">
                              {ref.texto}
                            </span>
                            <span className="sr-only">
                              {' '}(se abre en nueva pestaña)
                            </span>
                          </a>
                          <span className="semana-referencia-url" aria-hidden="true">
                            {ref.url.replace(/^https?:\/\//, '')}
                          </span>
                        </>
                      ) : (
                        <span className="semana-referencia-texto">
                          {ref.texto}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

        </div>

        {/* ── Navegación entre semanas ── */}
        <nav
          className="semana-footnav"
          aria-label="Navegación entre semanas"
        >
          <div className="semana-footnav-anterior">
            {anterior ? (
              <Link
                href={`/cuaderno/unidad-${numUnidad}/semana-${anterior.numeroStr}`}
                className="semana-footnav-link"
              >
                <span
                  className="semana-footnav-dir"
                  aria-hidden="true"
                >
                  ←
                </span>
                <span className="semana-footnav-info">
                  <span className="semana-footnav-hint">Anterior</span>
                  <span className="semana-footnav-nombre">
                    {anterior.titulo}
                  </span>
                </span>
              </Link>
            ) : (
              <Link href="/cuaderno" className="semana-footnav-link">
                <span
                  className="semana-footnav-dir"
                  aria-hidden="true"
                >
                  ←
                </span>
                <span className="semana-footnav-info">
                  <span className="semana-footnav-hint">Inicio</span>
                  <span className="semana-footnav-nombre">Cuaderno</span>
                </span>
              </Link>
            )}
          </div>

          <Link href="/cuaderno" className="semana-footnav-index">
            Ver índice
          </Link>

          <div className="semana-footnav-siguiente">
            {siguiente ? (
              <Link
                href={`/cuaderno/unidad-${numUnidad}/semana-${siguiente.numeroStr}`}
                className="semana-footnav-link semana-footnav-link--der"
              >
                <span className="semana-footnav-info">
                  <span className="semana-footnav-hint">Siguiente</span>
                  <span className="semana-footnav-nombre">
                    {siguiente.titulo}
                  </span>
                </span>
                <span
                  className="semana-footnav-dir"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ) : null}
          </div>
        </nav>

      </article>
    </PageWrapper>
  );
}

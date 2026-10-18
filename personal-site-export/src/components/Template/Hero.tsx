import Link from 'next/link';

import profile from '@/data/profile.json';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <p className="hero-kicker">Desarrollo de Software &amp; Frontend</p>
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>
          <p className="hero-tagline">
            Estudiante de{' '}
            <a href="https://www.uncp.edu.pe" className="hero-highlight">
              Ingeniería de Sistemas
            </a>{' '}
            en la UNCP con enfoque en desarrollo de software y especial
            inclinación por el frontend.
          </p>

          <p className="hero-summary">
            Trabajo en la Dirección de Proyección Social y Extensión Cultural de
            la UNCP automatizando reportes con Python. Domino React, TypeScript,
            Vite y Tailwind CSS.
          </p>

          <div className="hero-cta">
            <Link href="/about" className="button">
              Sobre mí <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/resume" className="hero-resume-link">
              Ver currículum
            </Link>
          </div>
        </div>

        <figure className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
          <figcaption>{profile.currentCity}</figcaption>
        </figure>
      </div>
    </section>
  );
}

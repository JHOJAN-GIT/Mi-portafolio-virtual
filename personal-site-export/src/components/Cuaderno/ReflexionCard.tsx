'use client';

import { useEffect, useRef, useState } from 'react';

interface ReflexionCardProps {
  children: React.ReactNode;
}

/**
 * Tarjeta de reflexión con efectos visuales:
 * - Entrada animada al hacer scroll (Intersection Observer)
 * - Borde aurora animado con gradiente giratorio
 * - Efecto spotlight que sigue al cursor
 * - Partículas de luz flotantes
 * - Respeta prefers-reduced-motion
 */
export default function ReflexionCard({ children }: ReflexionCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [spotX, setSpotX] = useState(50);
  const [spotY, setSpotY] = useState(50);
  const [reduced, setReduced] = useState(false);

  // Detectar prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
  }, []);

  // Intersection Observer — entrada al scroll
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Spotlight — sigue al cursor dentro de la tarjeta
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotX(((e.clientX - rect.left) / rect.width) * 100);
    setSpotY(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <div
      ref={cardRef}
      className={`reflexion-card${visible ? ' reflexion-card--visible' : ''}${reduced ? ' reflexion-card--reduced' : ''}`}
      onMouseMove={handleMouseMove}
      style={{
        '--spot-x': `${spotX}%`,
        '--spot-y': `${spotY}%`,
      } as React.CSSProperties}
    >
      {/* Aurora border — capa animada */}
      <div className="reflexion-aurora" aria-hidden="true" />

      {/* Partículas */}
      {!reduced && (
        <div className="reflexion-particulas" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <span key={i} className={`reflexion-particula reflexion-particula--${i + 1}`} />
          ))}
        </div>
      )}

      {/* Spotlight overlay */}
      <div className="reflexion-spotlight" aria-hidden="true" />

      {/* Contenido real */}
      <div className="reflexion-inner">
        {children}
      </div>
    </div>
  );
}

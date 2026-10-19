'use client';

import Image from 'next/image';
import Markdown from 'markdown-to-jsx';
import { Children, type ReactNode } from 'react';
import { createUniqueHeadingIds } from '@/lib/anchors';
import { extractLogMarker } from '@/lib/logEntry';
import { aboutImages } from '@/data/about';

interface AboutContentProps {
  markdown: string;
}

const LOG_VARIANT = 'about-section--log';

function LogEntry({ children }: { children?: ReactNode }) {
  const nodes = Children.toArray(children);
  const [first, ...rest] = nodes;
  const extracted = typeof first === 'string' ? extractLogMarker(first) : null;

  if (!extracted) {
    return (
      <li className="log-entry">
        <span className="log-entry-marker" />
        <span className="log-entry-body">{children}</span>
      </li>
    );
  }

  const markerRepeatsBody = extracted.rest === first;

  return (
    <li className="log-entry">
      <span
        className="log-entry-marker"
        aria-hidden={markerRepeatsBody || undefined}
      >
        {extracted.year ? (
          <span className="log-entry-year">{extracted.year}</span>
        ) : null}
        {extracted.age ? (
          <span className="log-entry-age">{extracted.age}</span>
        ) : null}
      </span>
      <span className="log-entry-body">
        {extracted.rest}
        {rest}
      </span>
    </li>
  );
}

const LOG_MARKDOWN_OPTIONS = {
  overrides: { li: { component: LogEntry } },
};

interface AboutSection {
  body: string;
  id: string;
  title: string;
}

interface ParsedAboutSection {
  body: string;
  title: string;
}

const sectionVariants: Record<string, string> = {
  'Algo de historia':     'about-section--log',
  'Viajes y geografía':   'about-section--log',
  'Datos curiosos':       'about-section--compact about-section--facts',
  'Lo que me gusta':      'about-section--compact about-section--likes',
  'Lo que sueño':         'about-section--compact about-section--dreams',
  'Recursos que sigo':    'about-section--links',
};

function splitAboutMarkdown(markdown: string) {
  const trimmed = markdown.trim();
  const introHeading = '# Intro';

  if (!trimmed.startsWith(introHeading)) {
    return { intro: '', sections: parseSections(trimmed) };
  }

  const withoutIntroHeading = trimmed.slice(introHeading.length).trimStart();
  const nextHeadingIndex = withoutIntroHeading.search(/\n# /);

  if (nextHeadingIndex === -1) {
    return { intro: withoutIntroHeading.trim(), sections: [] as AboutSection[] };
  }

  return {
    intro: withoutIntroHeading.slice(0, nextHeadingIndex).trim(),
    sections: parseSections(withoutIntroHeading.slice(nextHeadingIndex + 1).trim()),
  };
}

function parseSections(markdown: string): AboutSection[] {
  const sections: ParsedAboutSection[] = markdown
    .split(/\n(?=# )/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((section) => {
      const [heading, ...rest] = section.split('\n');
      return {
        title: heading.replace(/^#\s+/, '').trim(),
        body: rest.join('\n').trim(),
      };
    });

  const sectionIds = createUniqueHeadingIds(sections.map((s) => s.title));

  return sections.map((section, i) => ({
    ...section,
    id: sectionIds[i] ?? 'section',
  }));
}

function getSectionClassName(title: string) {
  const variant = sectionVariants[title];
  const hasImage = !!aboutImages[title];
  const base = variant ? `about-section ${variant}` : 'about-section';
  return hasImage ? `${base} about-section--has-image` : base;
}

function isLogSection(title: string) {
  return sectionVariants[title] === LOG_VARIANT;
}

export default function AboutContent({ markdown }: AboutContentProps) {
  const { intro, sections } = splitAboutMarkdown(markdown);

  return (
    <article className="about-content">
      {intro ? (
        <div className="about-intro">
          <Markdown>{intro}</Markdown>
        </div>
      ) : null}

      {sections.length > 0 ? (
        <nav className="about-section-nav" aria-label="Secciones de Sobre mí">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="about-section-nav-link"
            >
              {section.title}
            </a>
          ))}
        </nav>
      ) : null}

      {sections.map((section) => {
        const img = aboutImages[section.title];
        const side = img?.side ?? 'right';

        return (
          <section
            key={section.id}
            className={getSectionClassName(section.title)}
            data-img-side={img ? side : undefined}
          >
            <h2 id={section.id}>
              <a href={`#${section.id}`} className="about-section-heading-link">
                <span>{section.title}</span>
                <span className="about-section-heading-hash" aria-hidden="true">
                  #
                </span>
              </a>
            </h2>

            {/* Wrapper: grid texto+imagen, o columna si imagen es horizontal/ausente */}
            <div className={`about-section-body${img && img.width > img.height ? ' about-section-body--wide-img' : ''}`}>
              <div className="about-section-text">
                {isLogSection(section.title) ? (
                  <Markdown options={LOG_MARKDOWN_OPTIONS}>{section.body}</Markdown>
                ) : (
                  <Markdown>{section.body}</Markdown>
                )}
              </div>

              {img && (
                <figure
                  className={`about-section-img${img.width > img.height ? ' about-section-img--horizontal' : ''}`}
                >
                  <div className="about-section-img-marco">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className="about-section-img-foto"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="about-section-img-caption">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          </section>
        );
      })}
    </article>
  );
}

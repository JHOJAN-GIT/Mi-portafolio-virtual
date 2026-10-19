import Image from 'next/image';

import type { Project } from '@/data/projects';
import { PROJECT_IMAGE } from '@/lib/utils';

import DateRange from './DateRange';
import { externalLinkProps, NoLinkNote } from './shared';

interface EntryProps {
  data: Project;
}

/** Genera un ID CSS-seguro desde el título del proyecto */
function projectSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export { projectSlug };

export default function Entry({ data }: EntryProps) {
  const { title, subtitle, link, image, date, endDate, ongoing, desc, tech } = data;

  const className = [
    'project-entry',
    link ? 'project-entry--linked' : 'project-entry--static',
    ongoing ? 'project-entry--live' : '',
    image ? 'project-entry--has-image' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const body = (
    <>
      {/* Imagen del proyecto o placeholder */}
      <div className="project-entry-image-wrap">
        {image ? (
          <Image
            src={image}
            alt={`Captura de pantalla de ${title}`}
            width={PROJECT_IMAGE.width}
            height={PROJECT_IMAGE.height}
            className="project-entry-image"
            sizes="(max-width: 735px) 100vw, 680px"
          />
        ) : (
          <div className="project-entry-image-placeholder" aria-hidden="true">
            <span className="project-entry-image-placeholder-label">
              Imagen próximamente
            </span>
          </div>
        )}
      </div>

      <div className="project-entry-content">
        <div className="project-entry-meta">
          <DateRange date={date} endDate={endDate} ongoing={ongoing} />
          {subtitle && <span className="project-entry-role">{subtitle}</span>}
        </div>

        <div className="project-entry-body">
          <h3 className="project-entry-title">
            {title}
            {link && (
              <span className="project-entry-external" aria-hidden="true">
                ↗
              </span>
            )}
          </h3>
          <p className="project-entry-desc">{desc}</p>

          {tech && tech.length > 0 && (
            <div className="project-entry-tech">
              {tech.map((item) => (
                <span key={item} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>
          )}

          {!link && <NoLinkNote />}
        </div>
      </div>
    </>
  );

  if (!link) {
    return <div id={projectSlug(title)} className={className}>{body}</div>;
  }

  return (
    <a id={projectSlug(title)} className={className} {...externalLinkProps(link, title)}>
      {body}
    </a>
  );
}

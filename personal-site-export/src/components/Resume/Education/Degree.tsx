import type { Degree as DegreeType } from '@/data/resume/degrees';

interface DegreeProps {
  data: DegreeType;
}

const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

export default function Degree({ data }: DegreeProps) {
  const startLabel = `${MONTHS[(data.startMonth ?? 1) - 1]} ${data.startYear}`;
  const endLabel = data.current ? 'Presente' : String(data.year);
  const dateRange = `${startLabel} – ${endLabel}`;

  return (
    <article className="degree-container">
      <div className="degree-header">
        <div className="degree-meta">
          <h3 className="degree">{data.degree}</h3>
          <p className="school">
            <a href={data.link}>{data.school}</a>
          </p>
        </div>
        <div className="degree-dates">
          <time className="degree-date-range">
            {dateRange}
          </time>
          {data.current && (
            <span className="degree-current-badge">En curso</span>
          )}
        </div>
      </div>
      {data.description && (
        <p className="degree-description">{data.description}</p>
      )}
    </article>
  );
}

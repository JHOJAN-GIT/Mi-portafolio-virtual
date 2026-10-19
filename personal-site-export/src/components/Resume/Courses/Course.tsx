import type { Course as CourseType } from '@/data/resume/courses';

interface CourseProps {
  data: CourseType;
}

export default function Course({ data }: CourseProps) {
  return (
    <li className="course-container">
      <a href={data.link} className="course-link">
        <div className="course-header">
          <span className="course-name">{data.title}</span>
        </div>
        {data.description && (
          <p className="course-description">{data.description}</p>
        )}
      </a>
    </li>
  );
}

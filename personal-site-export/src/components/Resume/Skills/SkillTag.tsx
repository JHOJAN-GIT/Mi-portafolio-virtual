import type { Skill } from '@/data/resume/skills';
import { MAX_COMPETENCY } from '@/lib/utils';

interface SkillTagProps {
  data: Skill;
}

export type SkillTier = 'deep' | 'working' | 'familiar';

const TIER_LABEL: Record<SkillTier, string> = {
  deep: 'Avanzado',
  working: 'Intermedio',
  familiar: 'Básico',
};

export function knowledgeTier(competency: number): SkillTier {
  if (competency >= MAX_COMPETENCY) return 'deep';
  if (competency >= 4) return 'working';
  return 'familiar';
}

export default function SkillTag({ data }: SkillTagProps) {
  const { competency, title, description } = data;
  const tier = knowledgeTier(competency);

  return (
    <div className={`skill-tag skill-tag--${tier}`}>
      <div className="skill-tag-top">
        <span className="skill-tag-name">{title}</span>
        <span className={`skill-tag-tier skill-tag-tier--${tier}`}>
          {TIER_LABEL[tier]}
        </span>
      </div>
      {description && (
        <p className="skill-tag-desc">{description}</p>
      )}
    </div>
  );
}

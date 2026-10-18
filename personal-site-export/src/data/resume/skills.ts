export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
}

const skills: Skill[] = [
  // Languages
  {
    title: 'HTML',
    competency: 5,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'CSS',
    competency: 5,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'TypeScript',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'PHP',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Automation'],
  },
  // Frameworks & Libraries
  {
    title: 'React',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Vite',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Tailwind CSS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'JSX',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Next.js',
    competency: 3,
    category: ['Web Development'],
  },
  // Automation
  {
    title: 'Report Automation',
    competency: 4,
    category: ['Automation'],
  },
  {
    title: 'Web Scraping',
    competency: 3,
    category: ['Automation'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * The distinct category names, sorted, so the filter row and the group order
 * both fall out of the skill list itself.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({ name: category }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };

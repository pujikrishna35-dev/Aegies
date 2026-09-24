export interface CourseSeed {
  id: string;
  name: string;
  level: 'Bachelor' | 'Master' | 'Doctorate' | 'Diploma';
  category: string;
  durationMonths: number;
  popularJobs: string[];
}

export const coursesSeed: CourseSeed[] = [
  {
    id: 'course-cs',
    name: 'Computer Science & Software Engineering',
    level: 'Master',
    category: 'STEM',
    durationMonths: 24,
    popularJobs: ['Software Architect', 'AI Engineer', 'DevOps Specialist'],
  },
  {
    id: 'course-ds',
    name: 'Data Science & Artificial Intelligence',
    level: 'Master',
    category: 'STEM',
    durationMonths: 18,
    popularJobs: ['Data Scientist', 'ML Researcher', 'Data Analyst'],
  },
  {
    id: 'course-mba',
    name: 'Global Business Administration (MBA)',
    level: 'Master',
    category: 'Business',
    durationMonths: 12,
    popularJobs: ['Management Consultant', 'Product Director', 'Operations VP'],
  },
  {
    id: 'course-fintech',
    name: 'Finance & Financial Technology',
    level: 'Master',
    category: 'Finance',
    durationMonths: 12,
    popularJobs: ['Financial Analyst', 'Quantitative Trader', 'Risk Manager'],
  },
  {
    id: 'course-cyber',
    name: 'Cybersecurity & Information Assurance',
    level: 'Master',
    category: 'STEM',
    durationMonths: 24,
    popularJobs: ['Security Consultant', 'Threat Analyst', 'CISO'],
  }
];

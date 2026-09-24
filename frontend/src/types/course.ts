export interface Course {
  id: string;
  name: string;
  universityId?: string;
  level: 'Bachelor' | 'Master' | 'Doctorate' | 'Diploma';
  category: string;
  durationMonths: number;
  popularJobs: string[];
  tuitionFee?: string;
}

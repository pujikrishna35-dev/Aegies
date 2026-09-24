import { Injectable } from '@nestjs/common';

export interface CourseItem {
  id: string;
  name: string;
  category: string;
  country: string;
  university: string;
  duration: string;
  level: string;
  tuition: string;
  intakes: string[];
  description: string;
  eligibility: string;
  careerOpportunities: string;
  status: 'ACTIVE' | 'ARCHIVED';
}

@Injectable()
export class CoursesService {
  private courses: CourseItem[] = [
    {
      id: 'crs-1',
      name: 'MSc Advanced Computer Science',
      category: 'Computer Science & IT',
      country: 'United Kingdom',
      university: 'University of Birmingham',
      duration: '1 Year Full-Time',
      level: 'Postgraduate',
      tuition: '£27,500 / year',
      intakes: ['September 2026', 'January 2027'],
      description: 'Covers artificial intelligence, cyber security, and distributed cloud computing with industrial placements.',
      eligibility: '60%+ in B.Tech / BE Computer Science or related degree. IELTS 6.5 minimum.',
      careerOpportunities: 'Cloud Architect, Machine Learning Engineer, Senior Systems Developer',
      status: 'ACTIVE',
    },
    {
      id: 'crs-2',
      name: 'Master of Science in Data Science',
      category: 'Data Science & AI',
      country: 'United States',
      university: 'Arizona State University',
      duration: '2 Years',
      level: 'Postgraduate',
      tuition: '$34,000 / year',
      intakes: ['Fall 2026', 'Spring 2027'],
      description: 'STEM-designated program providing deep immersion into predictive modeling, big data analytics, and statistics.',
      eligibility: 'Bachelor degree in STEM with 3.0+ GPA. GRE recommended (305+). Duolingo 115 / IELTS 6.5.',
      careerOpportunities: 'Data Scientist, Business Intelligence Lead, AI Research Analyst',
      status: 'ACTIVE',
    },
    {
      id: 'crs-3',
      name: 'Master of Business Administration (Global MBA)',
      category: 'Business & Management',
      country: 'Australia',
      university: 'University of Wollongong',
      duration: '1.5–2 Years',
      level: 'Postgraduate',
      tuition: 'AUD $41,000 / year',
      intakes: ['February 2026', 'July 2026'],
      description: 'AACSB accredited business curriculum with Sydney business district industry consulting projects.',
      eligibility: 'Graduation in any discipline with 55%+ marks. Work experience advantageous.',
      careerOpportunities: 'Management Consultant, Project Director, Corporate Strategy Manager',
      status: 'ACTIVE',
    },
    {
      id: 'crs-4',
      name: 'MSc Mechanical & Automotive Engineering',
      category: 'Engineering',
      country: 'Germany',
      university: 'Technical University of Munich (TUM)',
      duration: '2 Years',
      level: 'Postgraduate',
      tuition: '€0 (Tuition Free, €150 semester fee)',
      intakes: ['Winter (October) 2026'],
      description: 'Premier automotive research institute with BMW and Audi industry project labs.',
      eligibility: 'Strong mechanical engineering curriculum match. German A2/B1 recommended, English taught.',
      careerOpportunities: 'Automotive Design Engineer, EV Powertrain Specialist, R&D Engineer',
      status: 'ACTIVE',
    },
  ];

  findAll(filters?: { country?: string; level?: string }) {
    let list = [...this.courses];
    if (filters?.country && filters.country !== 'ALL') {
      list = list.filter((c) => c.country.toLowerCase() === filters.country!.toLowerCase());
    }
    if (filters?.level && filters.level !== 'ALL') {
      list = list.filter((c) => c.level.toLowerCase() === filters.level!.toLowerCase());
    }
    return list;
  }

  findOne(id: string) {
    return this.courses.find((c) => c.id === id);
  }

  create(dto: Partial<CourseItem>) {
    const course: CourseItem = {
      id: 'crs-' + Date.now(),
      name: dto.name || 'New Course',
      category: dto.category || 'General',
      country: dto.country || 'UK',
      university: dto.university || '',
      duration: dto.duration || '1 Year',
      level: dto.level || 'Postgraduate',
      tuition: dto.tuition || 'Competitive',
      intakes: dto.intakes || ['Fall 2026'],
      description: dto.description || '',
      eligibility: dto.eligibility || '',
      careerOpportunities: dto.careerOpportunities || '',
      status: 'ACTIVE',
    };
    this.courses.unshift(course);
    return course;
  }

  update(id: string, dto: Partial<CourseItem>) {
    const idx = this.courses.findIndex((c) => c.id === id);
    if (idx !== -1) {
      this.courses[idx] = { ...this.courses[idx], ...dto };
      return this.courses[idx];
    }
    return null;
  }

  remove(id: string) {
    this.courses = this.courses.filter((c) => c.id !== id);
    return { success: true };
  }
}

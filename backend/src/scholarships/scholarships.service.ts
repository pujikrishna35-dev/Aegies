import { Injectable } from '@nestjs/common';

export interface ScholarshipItem {
  id: string;
  name: string;
  university: string;
  country: string;
  amount: string;
  eligibility: string;
  deadline: string;
  description: string;
  applicationUrl: string;
  featured: boolean;
  status: 'ACTIVE' | 'EXPIRED';
}

@Injectable()
export class ScholarshipsService {
  private scholarships: ScholarshipItem[] = [
    {
      id: 'sch-1',
      name: 'Vice-Chancellor Global Excellence Scholarship',
      university: 'University of Birmingham',
      country: 'UK',
      amount: '£4,000 – £5,000 Tuition Fee Waiver',
      eligibility: 'Outstanding academic background (75%+ in graduation) with unconditional offer.',
      deadline: '2026-06-30',
      description: 'Prestigious award dedicated to high-achieving international postgraduate students.',
      applicationUrl: 'https://birmingham.ac.uk/scholarships',
      featured: true,
      status: 'ACTIVE',
    },
    {
      id: 'sch-2',
      name: 'New American University Scholar Award',
      university: 'Arizona State University',
      country: 'USA',
      amount: 'Up to $15,000 / year renewable',
      eligibility: 'Automatic consideration upon university application with 3.5+ GPA equivalent.',
      deadline: '2026-05-01',
      description: 'Merit-based financial award based on academic achievement and SAT/GRE/IELTS performance.',
      applicationUrl: 'https://asu.edu/scholarships',
      featured: true,
      status: 'ACTIVE',
    },
    {
      id: 'sch-3',
      name: 'University Excellence Scholarship (South Asia)',
      university: 'University of Wollongong',
      country: 'Australia',
      amount: '20% to 30% Tuition Fee Reduction',
      eligibility: 'Applicants from India, Nepal, and Sri Lanka with 70%+ aggregate in previous study.',
      deadline: '2026-07-15',
      description: 'Encouraging South Asian academic talent across engineering, IT, and business faculties.',
      applicationUrl: 'https://uow.edu.au/scholarships',
      featured: true,
      status: 'ACTIVE',
    },
    {
      id: 'sch-4',
      name: 'DAAD Helmut-Schmidt-Programme',
      university: 'Public Universities Consortium',
      country: 'Germany',
      amount: 'Full Tuition + €934 Monthly Living Stipend',
      eligibility: 'First degree with exceptional marks in social science, economics, or law.',
      deadline: '2026-07-31',
      description: 'Funded by the German Federal Foreign Office for master degrees in public policy and good governance.',
      applicationUrl: 'https://daad.de',
      featured: false,
      status: 'ACTIVE',
    },
  ];

  findAll(filters?: { country?: string }) {
    let list = [...this.scholarships];
    if (filters?.country && filters.country !== 'ALL') {
      list = list.filter((s) => s.country.toLowerCase() === filters.country!.toLowerCase());
    }
    return list;
  }

  findOne(id: string) {
    return this.scholarships.find((s) => s.id === id);
  }

  create(dto: Partial<ScholarshipItem>) {
    const item: ScholarshipItem = {
      id: 'sch-' + Date.now(),
      name: dto.name || 'New Scholarship',
      university: dto.university || 'Partner University',
      country: dto.country || 'UK',
      amount: dto.amount || 'Partial Waiver',
      eligibility: dto.eligibility || 'Academic merit',
      deadline: dto.deadline || '2026-08-31',
      description: dto.description || '',
      applicationUrl: dto.applicationUrl || 'https://aegisoverseas.com',
      featured: dto.featured || false,
      status: 'ACTIVE',
    };
    this.scholarships.unshift(item);
    return item;
  }

  update(id: string, dto: Partial<ScholarshipItem>) {
    const idx = this.scholarships.findIndex((s) => s.id === id);
    if (idx !== -1) {
      this.scholarships[idx] = { ...this.scholarships[idx], ...dto };
      return this.scholarships[idx];
    }
    return null;
  }

  remove(id: string) {
    this.scholarships = this.scholarships.filter((s) => s.id !== id);
    return { success: true };
  }
}

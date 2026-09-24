import { Injectable } from '@nestjs/common';

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  icon: string;
  featured: boolean;
  status: 'ACTIVE' | 'DRAFT';
  inquiriesCount: number;
}

@Injectable()
export class ServicesService {
  private services: ServiceItem[] = [
    {
      id: 'srv-1',
      title: 'Free 1-on-1 Profile Counselling',
      slug: 'counselling',
      summary: 'Personalized evaluation of academic scores, financial background, and global career ambitions.',
      description: 'Our senior certified counselors provide structured gap analysis, country suitability mapping, and complete timeline planning from test prep to departure.',
      icon: 'Compass',
      featured: true,
      status: 'ACTIVE',
      inquiriesCount: 342,
    },
    {
      id: 'srv-2',
      title: 'University & Course Shortlisting',
      slug: 'university-selection',
      summary: 'Data-backed university shortlisting based on admission acceptance probability and budget.',
      description: 'Categorization into Dream, Target, and Safe institutions across 8 top international study destinations.',
      icon: 'GraduationCap',
      featured: true,
      status: 'ACTIVE',
      inquiriesCount: 289,
    },
    {
      id: 'srv-3',
      title: 'SOP, LOR & Application Processing',
      slug: 'applications',
      summary: 'End-to-end document proofreading, resume structuring, and error-free portal submissions.',
      description: 'Expert editorial support for Statement of Purpose (SOP) tailored to individual university prompts.',
      icon: 'FileText',
      featured: true,
      status: 'ACTIVE',
      inquiriesCount: 215,
    },
    {
      id: 'srv-4',
      title: 'Visa Guidance & Mock Interviews',
      slug: 'visa',
      summary: 'Comprehensive visa documentation filing and consular interview simulation with 99.2% success.',
      description: 'Specialized visa preparation covering DS-160, CAS verification, financial sponsorship justification, and biometric appointments.',
      icon: 'ShieldCheck',
      featured: true,
      status: 'ACTIVE',
      inquiriesCount: 310,
    },
    {
      id: 'srv-5',
      title: 'Education Loan Assistance',
      slug: 'education-loans',
      summary: 'Fast collateral and non-collateral education loan sanctions with premier banking partners.',
      description: 'Tie-ups with SBI, HDFC Credila, Avanse, and ICICI for competitive interest rates and zero-margin disbursements.',
      icon: 'Banknote',
      featured: false,
      status: 'ACTIVE',
      inquiriesCount: 164,
    },
  ];

  findAll() {
    return this.services;
  }

  findOne(id: string) {
    return this.services.find((s) => s.id === id || s.slug === id);
  }

  create(dto: Partial<ServiceItem>) {
    const item: ServiceItem = {
      id: 'srv-' + Date.now(),
      title: dto.title || 'New Service',
      slug: (dto.title || 'service').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      summary: dto.summary || '',
      description: dto.description || '',
      icon: dto.icon || 'Sparkles',
      featured: dto.featured || false,
      status: 'ACTIVE',
      inquiriesCount: 0,
    };
    this.services.push(item);
    return item;
  }

  update(id: string, dto: Partial<ServiceItem>) {
    const idx = this.services.findIndex((s) => s.id === id || s.slug === id);
    if (idx !== -1) {
      this.services[idx] = { ...this.services[idx], ...dto };
      return this.services[idx];
    }
    return null;
  }

  remove(id: string) {
    this.services = this.services.filter((s) => s.id !== id && s.slug !== id);
    return { success: true };
  }
}

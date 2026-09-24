import { Injectable } from '@nestjs/common';

export interface LeadRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  city?: string;
  preferredCountry?: string;
  preferredCourse?: string;
  intakeYear?: number | string;
  status: 'NEW' | 'CONTACTED' | 'FOLLOW_UP' | 'COUNSELLING' | 'APPLICATION' | 'CONVERTED' | 'LOST';
  source?: string;
  counselor?: string;
  notes?: string;
  followUpDate?: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class LeadsService {
  private leads: LeadRecord[] = [
    {
      id: 'lead-1',
      name: 'Rohan Verma',
      email: 'rohan.v@example.com',
      phone: '+91 9876543210',
      city: 'Hyderabad',
      preferredCountry: 'UK',
      preferredCourse: 'MSc Computer Science',
      intakeYear: 2026,
      status: 'APPLICATION',
      source: 'Hero Consultation Form',
      counselor: 'Pooja Sharma',
      notes: 'Russell Group applicant. IELTS 7.5 cleared. Conditional offer from Birmingham.',
      followUpDate: '2026-09-15',
      createdAt: 'Today, 10:45 AM',
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'lead-2',
      name: 'Ananya Deshmukh',
      email: 'ananya.d@example.com',
      phone: '+91 9123456780',
      city: 'Bangalore',
      preferredCountry: 'USA',
      preferredCourse: 'MS Data Science',
      intakeYear: 2026,
      status: 'COUNSELLING',
      source: 'University Finder Tool',
      counselor: 'Pooja Sharma',
      notes: 'Interested in STEM OPT institutions with tuition below $35k/year.',
      followUpDate: '2026-09-12',
      createdAt: 'Yesterday, 04:20 PM',
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'lead-3',
      name: 'Sneha Reddy',
      email: 'sneha.reddy@example.com',
      phone: '+91 9440112233',
      city: 'Nellore',
      preferredCountry: 'Canada',
      preferredCourse: 'MBA International Business',
      intakeYear: 2026,
      status: 'FOLLOW_UP',
      source: 'Direct Website Visit',
      counselor: 'Director Desk',
      notes: 'Requested bank loan options with ICICI / HDFC Credila.',
      followUpDate: '2026-09-14',
      createdAt: 'Sep 7, 2026',
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'lead-4',
      name: 'Karthik Naidu',
      email: 'karthik.n@example.com',
      phone: '+91 9703322114',
      city: 'Tirupati',
      preferredCountry: 'Germany',
      preferredCourse: 'MSc Mechanical Engineering',
      intakeYear: 2026,
      status: 'NEW',
      source: 'Landing Page Form',
      counselor: 'Unassigned',
      notes: 'Has completed mechanical engineering with 78%. Wants tuition-free university options.',
      followUpDate: '2026-09-10',
      createdAt: 'Today, 08:15 AM',
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'lead-5',
      name: 'Vikas Chowdary',
      email: 'vikas.c@example.com',
      phone: '+91 9988112233',
      city: 'Vijayawada',
      preferredCountry: 'Australia',
      preferredCourse: 'Master of Information Technology',
      intakeYear: 2026,
      status: 'CONVERTED',
      source: 'Referral',
      counselor: 'Pooja Sharma',
      notes: 'Visa subclass 500 granted! Pre-departure accommodation in Sydney arranged.',
      followUpDate: undefined,
      createdAt: 'Aug 28, 2026',
      updatedAt: new Date().toISOString(),
    },
  ];

  findAll(filters?: { status?: string; search?: string }) {
    let list = [...this.leads];
    if (filters?.status && filters.status !== 'ALL') {
      list = list.filter((l) => l.status === filters.status);
    }
    if (filters?.search) {
      const q = filters.search.toLowerCase();
      list = list.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.email.toLowerCase().includes(q) ||
          (l.city && l.city.toLowerCase().includes(q)) ||
          (l.preferredCountry && l.preferredCountry.toLowerCase().includes(q)),
      );
    }
    return list;
  }

  findOne(id: string) {
    return this.leads.find((l) => l.id === id);
  }

  create(dto: Partial<LeadRecord>) {
    const lead: LeadRecord = {
      id: 'lead-' + Date.now().toString().slice(-4),
      name: dto.name || 'New Lead',
      email: dto.email || '',
      phone: dto.phone || '',
      city: dto.city || 'Nellore',
      preferredCountry: dto.preferredCountry || 'UK',
      preferredCourse: dto.preferredCourse || 'General',
      intakeYear: dto.intakeYear || 2026,
      status: dto.status || 'NEW',
      source: dto.source || 'Admin Panel',
      counselor: dto.counselor || 'Pooja Sharma',
      notes: dto.notes || '',
      followUpDate: dto.followUpDate || '2026-09-20',
      createdAt: 'Just now',
      updatedAt: new Date().toISOString(),
    };
    this.leads.unshift(lead);
    return lead;
  }

  update(id: string, dto: Partial<LeadRecord>) {
    const idx = this.leads.findIndex((l) => l.id === id);
    if (idx !== -1) {
      this.leads[idx] = { ...this.leads[idx], ...dto, updatedAt: new Date().toISOString() };
      return this.leads[idx];
    }
    return null;
  }

  updateStatus(id: string, status: string) {
    const lead = this.leads.find((l) => l.id === id);
    if (lead) {
      lead.status = status as any;
      lead.updatedAt = new Date().toISOString();
      return lead;
    }
    return null;
  }

  assignCounselor(id: string, counselor: string) {
    const lead = this.leads.find((l) => l.id === id);
    if (lead) {
      lead.counselor = counselor;
      lead.updatedAt = new Date().toISOString();
      return lead;
    }
    return null;
  }

  remove(id: string) {
    this.leads = this.leads.filter((l) => l.id !== id);
    return { success: true };
  }
}

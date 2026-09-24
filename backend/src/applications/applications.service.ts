import { Injectable } from '@nestjs/common';

export interface ApplicationItem {
  id: string;
  studentName: string;
  studentEmail: string;
  universityName: string;
  courseName: string;
  country: string;
  stage: 'COUNSELLING' | 'UNIVERSITY_SELECTED' | 'DOCUMENTS_COLLECTED' | 'APPLICATION_SUBMITTED' | 'OFFER_LETTER' | 'VISA' | 'PRE_DEPARTURE' | 'COMPLETED';
  submissionDate?: string;
  intake?: string;
  counsellor?: string;
  notes?: string;
  updatedAt: string;
}

@Injectable()
export class ApplicationsService {
  private applications: ApplicationItem[] = [
    {
      id: 'app-101',
      studentName: 'Rohan Verma',
      studentEmail: 'rohan.v@example.com',
      universityName: 'University of Birmingham',
      courseName: 'MSc Advanced Computer Science',
      country: 'UK',
      stage: 'OFFER_LETTER',
      intake: 'Sept 2026',
      counsellor: 'Pooja Sharma',
      notes: 'Conditional offer letter received. Awaiting degree final transcripts.',
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'app-102',
      studentName: 'Ananya Deshmukh',
      studentEmail: 'ananya.d@example.com',
      universityName: 'Arizona State University',
      courseName: 'MS Data Science',
      country: 'USA',
      stage: 'APPLICATION_SUBMITTED',
      intake: 'Fall 2026',
      counsellor: 'Pooja Sharma',
      notes: 'Application submitted via portal. I-20 documentation under preparation.',
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'app-103',
      studentName: 'Karthik Naidu',
      studentEmail: 'karthik.n@example.com',
      universityName: 'Technical University of Munich',
      courseName: 'MSc Mechanical Engineering',
      country: 'Germany',
      stage: 'DOCUMENTS_COLLECTED',
      intake: 'Winter 2026',
      counsellor: 'Director Desk',
      notes: 'VPD evaluation completed via uni-assist.',
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'app-104',
      studentName: 'Sneha Reddy',
      studentEmail: 'sneha.reddy@example.com',
      universityName: 'University of Wollongong',
      courseName: 'Master of Information Technology',
      country: 'Australia',
      stage: 'VISA',
      intake: 'July 2026',
      counsellor: 'Pooja Sharma',
      notes: 'GTE assessment approved. Visa subclass 500 lodged.',
      updatedAt: new Date().toISOString(),
    },
  ];

  findAll() {
    return this.applications;
  }

  findOne(id: string) {
    return this.applications.find((a) => a.id === id);
  }

  create(dto: Partial<ApplicationItem>) {
    const item: ApplicationItem = {
      id: 'app-' + Date.now(),
      studentName: dto.studentName || 'New Student',
      studentEmail: dto.studentEmail || '',
      universityName: dto.universityName || '',
      courseName: dto.courseName || '',
      country: dto.country || 'UK',
      stage: dto.stage || 'COUNSELLING',
      intake: dto.intake || 'Fall 2026',
      counsellor: dto.counsellor || 'Pooja Sharma',
      notes: dto.notes || '',
      updatedAt: new Date().toISOString(),
    };
    this.applications.unshift(item);
    return item;
  }

  updateStage(id: string, stage: string) {
    const item = this.applications.find((a) => a.id === id);
    if (item) {
      item.stage = stage as any;
      item.updatedAt = new Date().toISOString();
      return item;
    }
    return null;
  }

  remove(id: string) {
    this.applications = this.applications.filter((a) => a.id !== id);
    return { success: true };
  }
}

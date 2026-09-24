import { Injectable } from '@nestjs/common';

export interface ConsultationRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  studyLevel: string;
  fieldOfStudy?: string;
  preferredOffice?: string;
  scheduledDate?: string;
  scheduledTime?: string;
  counsellor?: string;
  status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
  notes?: string;
  createdAt: string;
}

@Injectable()
export class ConsultationsService {
  private consultations: ConsultationRecord[] = [
    {
      id: 'c-101',
      fullName: 'Rahul Varma',
      email: 'rahul.varma@example.com',
      phone: '+91 9848022334',
      destination: 'United Kingdom',
      studyLevel: 'Postgraduate (Masters)',
      fieldOfStudy: 'Data Science',
      preferredOffice: 'Nellore',
      scheduledDate: '2026-09-12',
      scheduledTime: '11:00 AM',
      counsellor: 'Pooja Sharma',
      status: 'CONFIRMED',
      notes: 'Focus on Russell Group universities with £4k+ scholarships.',
      createdAt: 'Today, 10:15 AM',
    },
    {
      id: 'c-102',
      fullName: 'Sneha Reddy',
      email: 'sneha.reddy@example.com',
      phone: '+91 9440112233',
      destination: 'United States',
      studyLevel: 'Postgraduate',
      fieldOfStudy: 'Computer Science',
      preferredOffice: 'Tirupati',
      scheduledDate: '2026-09-14',
      scheduledTime: '02:30 PM',
      counsellor: 'Pooja Sharma',
      status: 'PENDING',
      notes: 'Interested in Fall 2026 intake and STEM OPT opportunities.',
      createdAt: 'Yesterday',
    },
    {
      id: 'c-103',
      fullName: 'Vikramaditya Rao',
      email: 'vikram.rao@example.com',
      phone: '+91 9988776655',
      destination: 'Germany',
      studyLevel: 'Masters',
      fieldOfStudy: 'Automotive Engineering',
      preferredOffice: 'Nellore',
      scheduledDate: '2026-09-15',
      scheduledTime: '04:00 PM',
      counsellor: 'Director Desk',
      status: 'CONFIRMED',
      notes: 'Tuition-free public universities evaluation requested.',
      createdAt: 'Sep 7, 2026',
    },
  ];

  findAll() {
    return this.consultations;
  }

  create(dto: Partial<ConsultationRecord>) {
    const item: ConsultationRecord = {
      id: 'c-' + Date.now().toString().slice(-4),
      fullName: dto.fullName || 'Student',
      email: dto.email || '',
      phone: dto.phone || '',
      destination: dto.destination || 'UK',
      studyLevel: dto.studyLevel || 'Postgraduate',
      fieldOfStudy: dto.fieldOfStudy || 'General',
      preferredOffice: dto.preferredOffice || 'Nellore',
      scheduledDate: dto.scheduledDate || '2026-09-18',
      scheduledTime: dto.scheduledTime || '10:00 AM',
      counsellor: dto.counsellor || 'Pooja Sharma',
      status: (dto.status as any) || 'PENDING',
      notes: dto.notes || '',
      createdAt: 'Just now',
    };
    this.consultations.unshift(item);
    return item;
  }

  updateStatus(id: string, status: string, counsellor?: string) {
    const item = this.consultations.find((c) => c.id === id);
    if (item) {
      item.status = status as any;
      if (counsellor) item.counsellor = counsellor;
      return item;
    }
    return null;
  }

  remove(id: string) {
    this.consultations = this.consultations.filter((c) => c.id !== id);
    return { success: true };
  }
}

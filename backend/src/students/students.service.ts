import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentEntity } from './entities/student.entity';

@Injectable()
export class StudentsService {
  private students: any[] = [
    {
      id: 'std-101',
      name: 'Priya Sharma',
      email: 'priya.s@student.com',
      phone: '+91 9848022338',
      targetCountry: 'United Kingdom',
      intendedDegree: 'MSc Data Science',
      university: 'University of Birmingham',
      ieltsGpa: 'IELTS 8.0 / CGPA 9.2',
      status: 'OFFER_UNCONDITIONAL',
      stage: 'Offer Letter',
      counsellor: 'Pooja Sharma',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'std-102',
      name: 'Karthik Reddy',
      email: 'karthik.r@student.com',
      phone: '+91 9988776655',
      targetCountry: 'United States',
      intendedDegree: 'MS Computer Science',
      university: 'Arizona State University',
      ieltsGpa: 'GRE 324 / TOEFL 108',
      status: 'VISA_APPROVED',
      stage: 'Pre-Departure',
      counsellor: 'Pooja Sharma',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'std-103',
      name: 'Rohan Verma',
      email: 'rohan.v@example.com',
      phone: '+91 9876543210',
      targetCountry: 'United Kingdom',
      intendedDegree: 'MSc Advanced Computer Science',
      university: 'University of Birmingham',
      ieltsGpa: 'IELTS 7.5 / CGPA 8.2',
      status: 'OFFER_CONDITIONAL',
      stage: 'Offer Letter',
      counsellor: 'Pooja Sharma',
      createdAt: new Date().toISOString(),
    },
  ];

  findAll() {
    return this.students;
  }

  findOne(id: string) {
    return this.students.find((s) => s.id === id);
  }

  create(dto: any) {
    const student = {
      id: 'std-' + Date.now(),
      name: dto.name || 'New Student',
      email: dto.email,
      phone: dto.phone,
      targetCountry: dto.targetCountry || 'UK',
      intendedDegree: dto.intendedDegree || 'Master Program',
      university: dto.university || 'Selected University',
      ieltsGpa: dto.ieltsGpa || 'Assessment Pending',
      status: 'DOCUMENTS_SUBMITTED',
      stage: 'Documents Collected',
      counsellor: dto.counsellor || 'Pooja Sharma',
      createdAt: new Date().toISOString(),
    };
    this.students.unshift(student);
    return student;
  }

  update(id: string, dto: any) {
    const idx = this.students.findIndex((s) => s.id === id);
    if (idx !== -1) {
      this.students[idx] = { ...this.students[idx], ...dto };
      return this.students[idx];
    }
    return null;
  }

  remove(id: string) {
    this.students = this.students.filter((s) => s.id !== id);
    return { success: true };
  }
}

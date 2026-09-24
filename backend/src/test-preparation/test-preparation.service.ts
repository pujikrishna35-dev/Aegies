import { Injectable } from '@nestjs/common';

export interface TestPrepItem {
  id: string;
  title: string;
  slug: string;
  examType: 'IELTS' | 'TOEFL' | 'GRE' | 'GMAT' | 'PTE' | 'DUOLINGO';
  duration: string;
  fee: string;
  mode: 'Online Live' | 'Classroom' | 'Hybrid';
  batchSchedule: string;
  features: string[];
  averageScoreIncrease: string;
  status: 'ACTIVE' | 'UPCOMING';
}

@Injectable()
export class TestPreparationService {
  private courses: TestPrepItem[] = [
    {
      id: 'tp-1',
      title: 'IELTS Academic Masterclass',
      slug: 'ielts',
      examType: 'IELTS',
      duration: '6 Weeks (45 Hours)',
      fee: '₹9,500',
      mode: 'Hybrid',
      batchSchedule: 'Morning 7:30 AM & Evening 7:00 PM',
      features: ['10 Full-Length Mock Exams', 'One-on-One Speaking Diagnostics', 'British Council Certified Faculty', 'Cambridge Material Access'],
      averageScoreIncrease: '+1.5 Band Improvement',
      status: 'ACTIVE',
    },
    {
      id: 'tp-2',
      title: 'GRE Comprehensive Quantitative & Verbal',
      slug: 'gre',
      examType: 'GRE',
      duration: '8 Weeks (60 Hours)',
      fee: '₹18,000',
      mode: 'Online Live',
      batchSchedule: 'Weekend Intensive & Weekday Batches',
      features: ['5000+ Practice Question Bank', 'Adaptive Diagnostic Testing Engine', 'Vocabulary Flashcard Application', 'Quant Shortcut Workshops'],
      averageScoreIncrease: '318+ Target Average',
      status: 'ACTIVE',
    },
    {
      id: 'tp-3',
      title: 'TOEFL iBT High-Score Accelerator',
      slug: 'toefl',
      examType: 'TOEFL',
      duration: '4 Weeks (30 Hours)',
      fee: '₹8,500',
      mode: 'Online Live',
      batchSchedule: 'Daily 6:30 PM – 8:00 PM',
      features: ['Official ETS Preparation Software', 'Speech Recognition Speaking Feedback', 'Writing Task 1 & 2 Scoring Rubrics'],
      averageScoreIncrease: '100+ Benchmark Achieved',
      status: 'ACTIVE',
    },
    {
      id: 'tp-4',
      title: 'PTE Academic Fast-Track',
      slug: 'pte',
      examType: 'PTE',
      duration: '3 Weeks (25 Hours)',
      fee: '₹8,000',
      mode: 'Hybrid',
      batchSchedule: 'Alternate Days & Weekend Batches',
      features: ['AI Mock Test Scoring System', 'Pronunciation & Oral Fluency Training', 'Template Strategy Sessions'],
      averageScoreIncrease: '72+ Score Target (8 Band Equivalent)',
      status: 'ACTIVE',
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find((c) => c.id === id || c.slug === id);
  }

  create(dto: Partial<TestPrepItem>) {
    const item: TestPrepItem = {
      id: 'tp-' + Date.now(),
      title: dto.title || 'New Test Prep Course',
      slug: (dto.title || 'test').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      examType: dto.examType || 'IELTS',
      duration: dto.duration || '4 Weeks',
      fee: dto.fee || '₹10,000',
      mode: dto.mode || 'Online Live',
      batchSchedule: dto.batchSchedule || 'Flexible',
      features: dto.features || ['Certified Mentors', 'Mock Tests'],
      averageScoreIncrease: dto.averageScoreIncrease || 'Guaranteed Improvement',
      status: 'ACTIVE',
    };
    this.courses.push(item);
    return item;
  }

  update(id: string, dto: Partial<TestPrepItem>) {
    const idx = this.courses.findIndex((c) => c.id === id || c.slug === id);
    if (idx !== -1) {
      this.courses[idx] = { ...this.courses[idx], ...dto };
      return this.courses[idx];
    }
    return null;
  }

  remove(id: string) {
    this.courses = this.courses.filter((c) => c.id !== id && c.slug !== id);
    return { success: true };
  }
}

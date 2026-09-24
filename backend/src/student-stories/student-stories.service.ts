import { Injectable } from '@nestjs/common';

export interface StudentStoryItem {
  id: string;
  studentName: string;
  photoUrl: string;
  country: string;
  university: string;
  course: string;
  story: string;
  gallery: string[];
  videoUrl?: string;
  featured: boolean;
  status: 'PUBLISHED' | 'DRAFT';
}

@Injectable()
export class StudentStoriesService {
  private stories: StudentStoryItem[] = [
    {
      id: 'story-1',
      studentName: 'Praveen Chalamalasetty',
      photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
      country: 'United Kingdom',
      university: 'University of Birmingham',
      course: 'MSc Data Science & Artificial Intelligence',
      story: 'Moving from Andhra Pradesh to the historic Edgbaston campus in Birmingham was the turning point in my career. With Aegis team guidance on coursework prerequisite checks and pre-departure briefings, settlement was seamless. Today I am conducting AI research on campus!',
      gallery: [
        'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80'
      ],
      videoUrl: 'https://youtube.com/watch?v=mock-story-1',
      featured: true,
      status: 'PUBLISHED',
    },
    {
      id: 'story-2',
      studentName: 'Harshitha Kamineni',
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      country: 'United States',
      university: 'Arizona State University',
      course: 'MS Industrial Engineering',
      story: 'Aegis helped me review my statement of purpose 4 times until it was airtight. I secured admission with a $10,000 scholarship and now lead the graduate student council at ASU.',
      gallery: [
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80'
      ],
      videoUrl: 'https://youtube.com/watch?v=mock-story-2',
      featured: true,
      status: 'PUBLISHED',
    },
  ];

  findAll() {
    return this.stories;
  }

  create(dto: Partial<StudentStoryItem>) {
    const item: StudentStoryItem = {
      id: 'story-' + Date.now(),
      studentName: dto.studentName || 'Student Name',
      photoUrl: dto.photoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      country: dto.country || 'UK',
      university: dto.university || 'University',
      course: dto.course || 'Master Program',
      story: dto.story || '',
      gallery: dto.gallery || [],
      videoUrl: dto.videoUrl || '',
      featured: dto.featured || false,
      status: dto.status || 'PUBLISHED',
    };
    this.stories.unshift(item);
    return item;
  }

  update(id: string, dto: Partial<StudentStoryItem>) {
    const idx = this.stories.findIndex((s) => s.id === id);
    if (idx !== -1) {
      this.stories[idx] = { ...this.stories[idx], ...dto };
      return this.stories[idx];
    }
    return null;
  }

  remove(id: string) {
    this.stories = this.stories.filter((s) => s.id !== id);
    return { success: true };
  }
}

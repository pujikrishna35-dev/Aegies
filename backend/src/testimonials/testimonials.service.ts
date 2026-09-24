import { Injectable } from '@nestjs/common';

export interface TestimonialItem {
  id: string;
  studentName: string;
  photoUrl?: string;
  course: string;
  university: string;
  country: string;
  testimonial: string;
  rating: number;
  featured: boolean;
  status: 'PUBLISHED' | 'DRAFT';
}

@Injectable()
export class TestimonialsService {
  private testimonials: TestimonialItem[] = [
    {
      id: 'test-1',
      studentName: 'Rohan Verma',
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      course: 'MSc Computer Science',
      university: 'University of Birmingham',
      country: 'UK',
      testimonial: 'Aegis Overseas made my study abroad transition effortless! From shortlisting Russell Group universities to helping me secure a £4,000 scholarship and obtaining my CAS in record time, their counselors were always by my side.',
      rating: 5,
      featured: true,
      status: 'PUBLISHED',
    },
    {
      id: 'test-2',
      studentName: 'Ananya Deshmukh',
      photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      course: 'MS Data Science',
      university: 'Arizona State University',
      country: 'USA',
      testimonial: 'The F-1 visa mock interview sessions with Pooja Ma’am were the deciding factor in my confidence. I received my US student visa on the first attempt without any hassle. Highly recommended for all ambitious students!',
      rating: 5,
      featured: true,
      status: 'PUBLISHED',
    },
    {
      id: 'test-3',
      studentName: 'Karthik Naidu',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      course: 'MSc Mechanical Engineering',
      university: 'Technical University of Munich (TUM)',
      country: 'Germany',
      testimonial: 'Germany admission processes like APS verification and blocked account setup can be overwhelming. The Aegis team handled my VPD assessment flawlessly and secured my seat at TUM with zero tuition fee.',
      rating: 5,
      featured: true,
      status: 'PUBLISHED',
    },
  ];

  findAll() {
    return this.testimonials;
  }

  create(dto: Partial<TestimonialItem>) {
    const item: TestimonialItem = {
      id: 'test-' + Date.now(),
      studentName: dto.studentName || 'Student Name',
      photoUrl: dto.photoUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
      course: dto.course || 'Master Program',
      university: dto.university || 'University',
      country: dto.country || 'UK',
      testimonial: dto.testimonial || '',
      rating: dto.rating || 5,
      featured: dto.featured || false,
      status: dto.status || 'PUBLISHED',
    };
    this.testimonials.unshift(item);
    return item;
  }

  update(id: string, dto: Partial<TestimonialItem>) {
    const idx = this.testimonials.findIndex((t) => t.id === id);
    if (idx !== -1) {
      this.testimonials[idx] = { ...this.testimonials[idx], ...dto };
      return this.testimonials[idx];
    }
    return null;
  }

  remove(id: string) {
    this.testimonials = this.testimonials.filter((t) => t.id !== id);
    return { success: true };
  }
}

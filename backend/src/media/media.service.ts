import { Injectable } from '@nestjs/common';

export interface MediaRecord {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'video' | 'document';
  size: string;
  dimensions?: string;
  uploadedAt: string;
  altText?: string;
}

@Injectable()
export class MediaService {
  private items: MediaRecord[] = [
    {
      id: 'med-1',
      name: 'birmingham-campus-hero.jpg',
      url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
      type: 'image',
      size: '1.4 MB',
      dimensions: '1920x1080',
      uploadedAt: 'Today, 10:00 AM',
      altText: 'University of Birmingham Clock Tower Campus',
    },
    {
      id: 'med-2',
      name: 'asu-innovation-center.jpg',
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
      type: 'image',
      size: '980 KB',
      dimensions: '1600x900',
      uploadedAt: 'Yesterday',
      altText: 'Arizona State University Students',
    },
    {
      id: 'med-3',
      name: 'tum-munich-engineering.jpg',
      url: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
      type: 'image',
      size: '2.2 MB',
      dimensions: '2048x1152',
      uploadedAt: 'Sep 5, 2026',
      altText: 'Technical University of Munich Campus',
    },
    {
      id: 'med-4',
      name: 'student-visa-briefing-2026.mp4',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video',
      size: '14.2 MB',
      uploadedAt: 'Sep 6, 2026',
      altText: 'Student Visa Orientation Video',
    },
  ];

  findAll(filters?: { type?: string; search?: string }) {
    let list = [...this.items];
    if (filters?.type && filters.type !== 'ALL') {
      list = list.filter((m) => m.type === filters.type);
    }
    if (filters?.search) {
      const q = filters.search.toLowerCase();
      list = list.filter((m) => m.name.toLowerCase().includes(q) || (m.altText && m.altText.toLowerCase().includes(q)));
    }
    return list;
  }

  create(dto: Partial<MediaRecord>) {
    const item: MediaRecord = {
      id: 'med-' + Date.now(),
      name: dto.name || 'uploaded_asset_' + Date.now(),
      url: dto.url || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
      type: dto.type || 'image',
      size: dto.size || '1.1 MB',
      dimensions: dto.dimensions || '1920x1080',
      uploadedAt: 'Just now',
      altText: dto.altText || dto.name,
    };
    this.items.unshift(item);
    return item;
  }

  remove(id: string) {
    this.items = this.items.filter((m) => m.id !== id);
    return { success: true };
  }
}

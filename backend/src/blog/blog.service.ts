import { Injectable } from '@nestjs/common';

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  featuredImage: string;
  excerpt: string;
  content: string;
  status: 'PUBLISHED' | 'DRAFT';
  author: string;
  publishedAt?: string;
  viewsCount: number;
  seoTitle?: string;
  seoDescription?: string;
}

@Injectable()
export class BlogService {
  private posts: BlogPostItem[] = [
    {
      id: 'post-1',
      title: 'Complete Guide to UK Graduate Route Visa 2026: Rules, Costs & FAQs',
      slug: 'complete-guide-uk-graduate-route-visa-2026',
      category: 'Visa & Immigration',
      tags: ['UK Visa', 'Graduate Route', 'PSW', 'Work in UK'],
      featuredImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Everything Indian students need to know about the 2-year post-study work visa in the UK after graduating from higher education.',
      content: 'The UK Graduate Route provides international students who have successfully completed an undergraduate or postgraduate degree with the opportunity to stay in the UK to work, or look for work, at any skill level for 2 years (3 years for doctoral students). Unlike the Skilled Worker Visa, no job offer or employer sponsorship is required upon application.',
      status: 'PUBLISHED',
      author: 'Aegis Visa Desk',
      publishedAt: '2026-08-15',
      viewsCount: 1420,
      seoTitle: 'UK Graduate Route Visa 2026: Complete Guide for Indian Students',
      seoDescription: 'Learn everything about UK 2-year stay back post-study work rights, eligibility requirements, and visa application timeline.',
    },
    {
      id: 'post-2',
      title: 'Top 10 High-Paying STEM Master Degrees in the US for 2026–2027',
      slug: 'top-10-high-paying-stem-master-degrees-usa',
      category: 'Destinations',
      tags: ['USA', 'STEM OPT', 'Computer Science', 'Data Science'],
      featuredImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Explore the top specialized MS fields in America eligible for 36 months of Optional Practical Training and high entry compensation.',
      content: 'STEM-designated degree programs enable international graduates on F-1 visas to extend their training in the United States by an additional 24 months, for a total of 3 years. This provides significant runway to secure an H-1B specialty occupation petition or international company transfer.',
      status: 'PUBLISHED',
      author: 'Pooja Sharma',
      publishedAt: '2026-08-28',
      viewsCount: 980,
      seoTitle: 'Top 10 STEM Programs in USA | 3-Year OPT Guide',
      seoDescription: 'High ROI master degrees in Computer Science, Data Science, AI, and Analytics in top US universities.',
    },
    {
      id: 'post-3',
      title: 'Germany Public University Deadlines for Winter Intake: Step-by-Step Checklist',
      slug: 'germany-public-university-deadlines-winter-intake',
      category: 'Education Insights',
      tags: ['Germany', 'APS Certificate', 'Free Tuition', 'Uni-Assist'],
      featuredImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'From mandatory APS certificate verification to VPD evaluations and blocked account deposits, here is your Winter intake calendar.',
      content: 'Studying in Germany at zero tuition fees is one of the most cost-effective routes for engineering and technology graduates. However, German universities adhere strictly to submission cutoffs.',
      status: 'DRAFT',
      author: 'Director Desk',
      publishedAt: undefined,
      viewsCount: 120,
      seoTitle: 'German Winter Intake Checklist | Aegis Overseas',
      seoDescription: 'Complete step-by-step admission timeline for German public universities.',
    },
  ];

  findAll(filters?: { category?: string; status?: string }) {
    let list = [...this.posts];
    if (filters?.category && filters.category !== 'ALL') {
      list = list.filter((p) => p.category.toLowerCase() === filters.category!.toLowerCase());
    }
    if (filters?.status && filters.status !== 'ALL') {
      list = list.filter((p) => p.status === filters.status);
    }
    return list;
  }

  findBySlug(slug: string) {
    return this.posts.find((p) => p.slug === slug || p.id === slug);
  }

  create(dto: Partial<BlogPostItem>) {
    const item: BlogPostItem = {
      id: 'post-' + Date.now(),
      title: dto.title || 'New Article',
      slug: (dto.slug || dto.title || 'article').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category: dto.category || 'Study Abroad',
      tags: dto.tags || ['Study Abroad'],
      featuredImage: dto.featuredImage || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
      excerpt: dto.excerpt || '',
      content: dto.content || '',
      status: dto.status || 'DRAFT',
      author: dto.author || 'Aegis Editorial',
      publishedAt: dto.status === 'PUBLISHED' ? new Date().toISOString().split('T')[0] : undefined,
      viewsCount: 0,
      seoTitle: dto.seoTitle || dto.title,
      seoDescription: dto.seoDescription || dto.excerpt,
    };
    this.posts.unshift(item);
    return item;
  }

  update(id: string, dto: Partial<BlogPostItem>) {
    const idx = this.posts.findIndex((p) => p.id === id || p.slug === id);
    if (idx !== -1) {
      this.posts[idx] = { ...this.posts[idx], ...dto };
      if (dto.status === 'PUBLISHED' && !this.posts[idx].publishedAt) {
        this.posts[idx].publishedAt = new Date().toISOString().split('T')[0];
      }
      return this.posts[idx];
    }
    return null;
  }

  remove(id: string) {
    this.posts = this.posts.filter((p) => p.id !== id && p.slug !== id);
    return { success: true };
  }
}

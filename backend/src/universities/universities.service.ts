import { Injectable } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UniversityEntity } from './entities/university.entity';

@Injectable()
export class UniversitiesService {
  private universities: any[] = [
    {
      id: 'uni-1',
      name: 'University of Oxford',
      slug: 'oxford',
      country: 'UK',
      city: 'Oxford',
      ranking: 1,
      acceptanceRate: '17%',
      tuitionRange: '£28,000 - £44,000',
      status: 'ACTIVE',
      programsCount: 180,
    },
    {
      id: 'uni-2',
      name: 'University of Birmingham',
      slug: 'birmingham',
      country: 'UK',
      city: 'Birmingham',
      ranking: 80,
      acceptanceRate: '65%',
      tuitionRange: '£18,000 - £28,000',
      status: 'ACTIVE',
      programsCount: 220,
    },
    {
      id: 'uni-3',
      name: 'Arizona State University',
      slug: 'asu',
      country: 'USA',
      city: 'Tempe, AZ',
      ranking: 115,
      acceptanceRate: '88%',
      tuitionRange: '$28,000 - $38,000',
      status: 'ACTIVE',
      programsCount: 350,
    },
    {
      id: 'uni-4',
      name: 'University of Toronto',
      slug: 'toronto',
      country: 'Canada',
      city: 'Toronto',
      ranking: 21,
      acceptanceRate: '43%',
      tuitionRange: 'CAD 35,000 - CAD 58,000',
      status: 'ACTIVE',
      programsCount: 240,
    },
    {
      id: 'uni-5',
      name: 'University of Wollongong',
      slug: 'uow',
      country: 'Australia',
      city: 'Wollongong, NSW',
      ranking: 162,
      acceptanceRate: '68%',
      tuitionRange: 'AUD 32,000 - AUD 44,000',
      status: 'ACTIVE',
      programsCount: 190,
    },
    {
      id: 'uni-6',
      name: 'Technical University of Munich (TUM)',
      slug: 'tum',
      country: 'Germany',
      city: 'Munich',
      ranking: 37,
      acceptanceRate: '28%',
      tuitionRange: '€0 - €4,000',
      status: 'ACTIVE',
      programsCount: 140,
    },
  ];

  findAll(query?: { country?: string; search?: string }) {
    let result = this.universities;
    if (query?.country && query.country !== 'ALL') {
      result = result.filter(
        (u) => u.country.toLowerCase() === query.country!.toLowerCase()
      );
    }
    if (query?.search) {
      const s = query.search.toLowerCase();
      result = result.filter(
        (u) => u.name.toLowerCase().includes(s) || u.city.toLowerCase().includes(s)
      );
    }
    return result;
  }

  findBySlug(slug: string) {
    return this.universities.find((u) => u.slug === slug || u.id === slug);
  }

  create(dto: any) {
    const slug = (dto.slug || dto.name || 'university').toLowerCase().replace(/[^a-z0-9]/g, '-');
    const uni = {
      id: 'uni-' + Date.now(),
      name: dto.name || 'New University',
      slug,
      country: dto.country || 'UK',
      city: dto.city || 'City',
      ranking: dto.ranking || 100,
      acceptanceRate: dto.acceptanceRate || 'N/A',
      tuitionRange: dto.tuitionRange || 'Varies',
      status: dto.status || 'ACTIVE',
      programsCount: dto.programsCount || 10,
    };
    this.universities.unshift(uni);
    return uni;
  }

  update(id: string, dto: any) {
    const idx = this.universities.findIndex((u) => u.id === id || u.slug === id);
    if (idx !== -1) {
      this.universities[idx] = { ...this.universities[idx], ...dto };
      return this.universities[idx];
    }
    return null;
  }

  remove(id: string) {
    this.universities = this.universities.filter((u) => u.id !== id && u.slug !== id);
    return { success: true };
  }
}

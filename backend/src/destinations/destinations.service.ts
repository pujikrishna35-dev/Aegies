import { Injectable } from '@nestjs/common';

export interface DestinationItem {
  id: string;
  name: string;
  code: string;
  slug: string;
  currency: string;
  heroImage: string;
  description: string;
  whyStudyThere: string[];
  popularCourses: string[];
  universitiesCount: number;
  averageTuition: string;
  intakes: string[];
  visaInfo: string;
  postStudyWorkVisa: string;
  faqsCount: number;
  status: 'ACTIVE' | 'DRAFT';
}

@Injectable()
export class DestinationsService {
  private destinations: DestinationItem[] = [
    {
      id: 'dst-1',
      name: 'United Kingdom',
      code: 'UK',
      slug: 'uk',
      currency: 'GBP (£)',
      heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
      description: 'One-year master degrees, globally recognized Russell Group institutions, and a 2-year Graduate Route visa.',
      whyStudyThere: ['1-Year Master Degrees saving cost and time', '2-Year Graduate Post-Study Work Visa', 'Global Russell Group Heritage', 'High Visa Success Rate for Indians'],
      popularCourses: ['Computer Science & AI', 'Data Analytics', 'Finance & Accounting', 'MBA', 'Healthcare & Public Health'],
      universitiesCount: 160,
      averageTuition: '£14,000 – £28,000 / year',
      intakes: ['September (Major)', 'January / February', 'May'],
      visaInfo: 'Student Visa (Points-based system, requires CAS from university, 28-day financial evidence).',
      postStudyWorkVisa: '2 Years (3 Years for PhD graduates)',
      faqsCount: 8,
      status: 'ACTIVE',
    },
    {
      id: 'dst-2',
      name: 'United States of America',
      code: 'USA',
      slug: 'usa',
      currency: 'USD ($)',
      heroImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80',
      description: 'World-leading universities, unmatched cutting-edge research opportunities, and up to 3 years of STEM OPT extensions.',
      whyStudyThere: ['Top #1 Global Higher Education Destination', 'Up to 3-Year STEM OPT Work Authorization', 'Extensive Graduate Assistantships (RA/TA)', 'Silicon Valley & Wall Street Industry Ties'],
      popularCourses: ['Computer Science', 'Data Science', 'Electrical Engineering', 'MIS & Business Analytics', 'Biotechnology'],
      universitiesCount: 400,
      averageTuition: '$25,000 – $48,000 / year',
      intakes: ['Fall (August/Sept - Major)', 'Spring (January)'],
      visaInfo: 'F-1 Student Visa with mandatory in-person consular interview and DS-160/SEVIS.',
      postStudyWorkVisa: '1 Year standard OPT + 2-Year STEM extension (Total 3 Years)',
      faqsCount: 10,
      status: 'ACTIVE',
    },
    {
      id: 'dst-3',
      name: 'Canada',
      code: 'Canada',
      slug: 'canada',
      currency: 'CAD ($)',
      heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80',
      description: 'Affordable world-class education, high standard of living, and attractive Post-Graduation Work Permit (PGWP).',
      whyStudyThere: ['Post-Graduation Work Permit up to 3 Years', 'Pathway to Permanent Residency (PR)', 'Safe, multicultural welcoming society', 'Affordable tuition compared to US'],
      popularCourses: ['Artificial Intelligence', 'Software Engineering', 'Supply Chain Management', 'Healthcare Administration', 'Cybersecurity'],
      universitiesCount: 100,
      averageTuition: 'CAD $18,000 – $36,000 / year',
      intakes: ['Fall (September)', 'Winter (January)', 'Summer (May)'],
      visaInfo: 'Study Permit with PAL (Provincial Attestation Letter) requirement and GIC account proof.',
      postStudyWorkVisa: 'Up to 3 Years PGWP',
      faqsCount: 9,
      status: 'ACTIVE',
    },
    {
      id: 'dst-4',
      name: 'Australia',
      code: 'Australia',
      slug: 'australia',
      currency: 'AUD ($)',
      heroImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80',
      description: 'Group of Eight (Go8) world-leading research universities, generous post-study work rights, and supreme quality of life.',
      whyStudyThere: ['Top 100 World Ranked Universities (Go8)', 'Post-Study Work Visa up to 3-5 Years in regional hubs', 'High minimum wage & part-time rights', 'Subtropical climate and vibrant lifestyle'],
      popularCourses: ['Information Technology', 'Civil & Mining Engineering', 'Nursing & Public Health', 'Business & Commerce', 'Hospitality Management'],
      universitiesCount: 42,
      averageTuition: 'AUD $30,000 – $46,000 / year',
      intakes: ['Semester 1 (Feb/March - Major)', 'Semester 2 (July)'],
      visaInfo: 'Subclass 500 Student Visa with Genuine Student (GS) assessment.',
      postStudyWorkVisa: '2 to 4 Years (depending on qualification and location)',
      faqsCount: 7,
      status: 'ACTIVE',
    },
    {
      id: 'dst-5',
      name: 'Germany',
      code: 'Germany',
      slug: 'germany',
      currency: 'EUR (€)',
      heroImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
      description: 'Tuition-free public universities, world engineering hub, and 18-month stay-back job seeker visa.',
      whyStudyThere: ['Tuition-Free Public Higher Education', 'European Powerhouse for Automotive & Tech', '18-Month Post-Study Job Seeker Visa', 'English-taught Master degree options'],
      popularCourses: ['Mechanical Engineering', 'Automotive Engineering', 'Data Engineering', 'Renewable Energy', 'International Management'],
      universitiesCount: 80,
      averageTuition: '€0 to €3,000 / year (Nominal admin fees €250/sem)',
      intakes: ['Winter (October - Major)', 'Summer (April)'],
      visaInfo: 'National Visa (Type D) with APS Certificate and Blocked Account (€11,904).',
      postStudyWorkVisa: '18 Months Job Seeker Residence Permit',
      faqsCount: 8,
      status: 'ACTIVE',
    },
    {
      id: 'dst-6',
      name: 'Ireland',
      code: 'Ireland',
      slug: 'ireland',
      currency: 'EUR (€)',
      heroImage: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1200&q=80',
      description: 'Silicon Docks European tech headquarters (Google, Meta, Apple, Pfizer) with 2-year post-study work visa.',
      whyStudyThere: ['European Headquarters for Global Tech & Pharma Giants', '2-Year Third Level Graduate Scheme (1G)', 'Only English-speaking Eurozone nation', 'Rapidly booming tech economy'],
      popularCourses: ['Cloud Computing', 'Pharmaceutical Sciences', 'FinTech', 'Data Analytics', 'Digital Marketing'],
      universitiesCount: 25,
      averageTuition: '€12,000 – €24,000 / year',
      intakes: ['Autumn (September)', 'Spring (January)'],
      visaInfo: 'Irish Long Stay ‘D’ Study Visa with AVATS portal.',
      postStudyWorkVisa: '2 Years for Master graduates (Third Level Graduate Scheme)',
      faqsCount: 6,
      status: 'ACTIVE',
    },
    {
      id: 'dst-7',
      name: 'New Zealand',
      code: 'NewZealand',
      slug: 'new-zealand',
      currency: 'NZD ($)',
      heroImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80',
      description: 'All 8 state universities ranked in the global top 3%, stunning natural beauty, and up to 3 years post-study work rights.',
      whyStudyThere: ['100% of Universities in Global Top 3%', 'Post-Study Work Visa up to 3 Years', 'Green List fast-track residency pathways', 'Peaceful, high-safety index nation'],
      popularCourses: ['Agriculture & Environmental Science', 'IT & Software Development', 'Construction Management', 'Tourism & Hospitality', 'Nursing'],
      universitiesCount: 8,
      averageTuition: 'NZD $26,000 – $40,000 / year',
      intakes: ['Semester 1 (Feb)', 'Semester 2 (July)'],
      visaInfo: 'Fee Paying Student Visa with immigration New Zealand financial criteria.',
      postStudyWorkVisa: 'Up to 3 Years',
      faqsCount: 6,
      status: 'ACTIVE',
    },
    {
      id: 'dst-8',
      name: 'Europe',
      code: 'Europe',
      slug: 'europe',
      currency: 'EUR (€)',
      heroImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80',
      description: 'France, Netherlands, Sweden, Italy, and Poland offering affordable English-taught degrees with Schengen visa travel.',
      whyStudyThere: ['Schengen Area 29-Nation Free Travel', 'Extensive English-Taught Programs', 'Generous Government & Erasmus+ Scholarships', 'Rich cultural heritage and cosmopolitan life'],
      popularCourses: ['Luxury Brand Management', 'Design & Architecture', 'International Business', 'Computer Science', 'Aerospace Engineering'],
      universitiesCount: 150,
      averageTuition: '€6,000 – €18,000 / year',
      intakes: ['September / October (Major)', 'February'],
      visaInfo: 'National Long-Stay Study Visa matching respective host country.',
      postStudyWorkVisa: '1 to 2 Years depending on member state',
      faqsCount: 8,
      status: 'ACTIVE',
    },
  ];

  findAll() {
    return this.destinations;
  }

  findByCode(code: string) {
    return this.destinations.find((d) => d.code.toLowerCase() === code.toLowerCase() || d.slug.toLowerCase() === code.toLowerCase());
  }

  update(code: string, dto: Partial<DestinationItem>) {
    const idx = this.destinations.findIndex((d) => d.code.toLowerCase() === code.toLowerCase() || d.slug.toLowerCase() === code.toLowerCase());
    if (idx !== -1) {
      this.destinations[idx] = { ...this.destinations[idx], ...dto };
      return this.destinations[idx];
    }
    return null;
  }
}

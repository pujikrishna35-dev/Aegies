export interface DestinationSeed {
  id: string;
  name: string;
  code: string;
  slug: string;
  currency: string;
  popularCities: string[];
  avgTuitionPerYear: string;
  stayBackPeriod: string;
}

export const destinationsSeed: DestinationSeed[] = [
  {
    id: 'dest-uk',
    name: 'United Kingdom',
    code: 'UK',
    slug: 'uk',
    currency: 'GBP',
    popularCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham'],
    avgTuitionPerYear: '£15,000 - £35,000',
    stayBackPeriod: '2 Years Graduate Route',
  },
  {
    id: 'dest-usa',
    name: 'United States',
    code: 'USA',
    slug: 'usa',
    currency: 'USD',
    popularCities: ['Boston', 'New York', 'San Francisco', 'Chicago'],
    avgTuitionPerYear: '$25,000 - $55,000',
    stayBackPeriod: 'Up to 3 Years (STEM OPT)',
  },
  {
    id: 'dest-canada',
    name: 'Canada',
    code: 'CAN',
    slug: 'canada',
    currency: 'CAD',
    popularCities: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
    avgTuitionPerYear: 'CAD 18,000 - CAD 38,000',
    stayBackPeriod: 'Up to 3 Years PGWP',
  },
  {
    id: 'dest-australia',
    name: 'Australia',
    code: 'AUS',
    slug: 'australia',
    currency: 'AUD',
    popularCities: ['Melbourne', 'Sydney', 'Brisbane', 'Perth'],
    avgTuitionPerYear: 'AUD 22,000 - AUD 45,000',
    stayBackPeriod: '2 to 4 Years PSWP',
  },
  {
    id: 'dest-germany',
    name: 'Germany',
    code: 'DEU',
    slug: 'germany',
    currency: 'EUR',
    popularCities: ['Berlin', 'Munich', 'Frankfurt', 'Stuttgart'],
    avgTuitionPerYear: 'Free or €1,500/yr (Public)',
    stayBackPeriod: '18 Months Jobseeker Visa',
  },
  {
    id: 'dest-ireland',
    name: 'Ireland',
    code: 'IRL',
    slug: 'ireland',
    currency: 'EUR',
    popularCities: ['Dublin', 'Cork', 'Galway', 'Limerick'],
    avgTuitionPerYear: '€12,000 - €28,000',
    stayBackPeriod: '2 Years Third Level Graduate Scheme',
  },
  {
    id: 'dest-nz',
    name: 'New Zealand',
    code: 'NZL',
    slug: 'new-zealand',
    currency: 'NZD',
    popularCities: ['Auckland', 'Wellington', 'Christchurch'],
    avgTuitionPerYear: 'NZD 24,000 - NZD 42,000',
    stayBackPeriod: 'Up to 3 Years Post-Study Visa',
  },
  {
    id: 'dest-europe',
    name: 'Europe (Schengen)',
    code: 'EUR',
    slug: 'europe',
    currency: 'EUR',
    popularCities: ['Paris', 'Amsterdam', 'Stockholm', 'Milan'],
    avgTuitionPerYear: '€8,000 - €25,000',
    stayBackPeriod: '1 to 2 Years depending on member state',
  }
];

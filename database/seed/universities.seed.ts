export interface UniversitySeed {
  id: string;
  name: string;
  country: string;
  city: string;
  ranking: number;
  acceptanceRate: string;
  tuitionRange: string;
}

export const universitiesSeed: UniversitySeed[] = [
  {
    id: 'uni-oxford',
    name: 'University of Oxford',
    country: 'UK',
    city: 'Oxford',
    ranking: 1,
    acceptanceRate: '17%',
    tuitionRange: '£28,000 - £44,000',
  },
  {
    id: 'uni-cambridge',
    name: 'University of Cambridge',
    country: 'UK',
    city: 'Cambridge',
    ranking: 2,
    acceptanceRate: '20%',
    tuitionRange: '£26,000 - £42,000',
  },
  {
    id: 'uni-harvard',
    name: 'Harvard University',
    country: 'USA',
    city: 'Cambridge, MA',
    ranking: 4,
    acceptanceRate: '4%',
    tuitionRange: '$54,000 - $62,000',
  },
  {
    id: 'uni-toronto',
    name: 'University of Toronto',
    country: 'Canada',
    city: 'Toronto',
    ranking: 21,
    acceptanceRate: '43%',
    tuitionRange: 'CAD 35,000 - CAD 58,000',
  },
  {
    id: 'uni-melbourne',
    name: 'University of Melbourne',
    country: 'Australia',
    city: 'Melbourne',
    ranking: 33,
    acceptanceRate: '70%',
    tuitionRange: 'AUD 34,000 - AUD 48,000',
  },
  {
    id: 'uni-tum',
    name: 'Technical University of Munich (TUM)',
    country: 'Germany',
    city: 'Munich',
    ranking: 37,
    acceptanceRate: '28%',
    tuitionRange: '€0 - €4,000',
  },
  {
    id: 'uni-tcd',
    name: 'Trinity College Dublin',
    country: 'Ireland',
    city: 'Dublin',
    ranking: 81,
    acceptanceRate: '34%',
    tuitionRange: '€18,000 - €26,000',
  }
];

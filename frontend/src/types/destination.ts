export interface Destination {
  id: string;
  name: string;
  code: string;
  slug: string;
  currency: string;
  popularCities: string[];
  avgTuitionPerYear: string;
  stayBackPeriod: string;
  overview?: string;
}

export interface University {
  id: string;
  name: string;
  slug: string;
  country: string;
  city: string;
  ranking: number;
  acceptanceRate: string;
  tuitionRange: string;
  logoUrl?: string;
  bannerUrl?: string;
  description?: string;
}

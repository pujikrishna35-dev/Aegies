export interface RawDirectoryItem {
  directory_id?: string;
  id?: string;
  number?: number;
  country?: string;
  section?: string;
  name: string;
  location: string;
  website_domain?: string;
  website_url?: string;
  website?: string;
  logo_available?: boolean;
  logo_file?: string | null;
  logo?: string | null;
}

export interface UniversityDirectoryItem {
  id: string;
  number: number;
  displayIndex: string;
  name: string;
  location: string;
  city: string;
  websiteDomain: string;
  websiteUrl: string;
  logoUrl: string | null;
  section?: string;
}

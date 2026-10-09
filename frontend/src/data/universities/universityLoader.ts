import { RawDirectoryItem, UniversityDirectoryItem } from '../../types/universityDirectory';

// In-memory cache to avoid repeated file fetching or parsing
const directoryCache: Record<string, UniversityDirectoryItem[]> = {};

const AUSTRALIA_IMAGE_MAP: Record<string, string> = {
  'australian-national-university': '/images/universities/australian-national-university.png',
  'monash-university': '/images/universities/monash-university.png',
  'university-of-melbourne': '/images/universities/university-of-melbourne.png',
  'university-of-new-south-wales': '/images/universities/unsw-sydney.jpg',
  'the-university-of-sydney': '/images/universities/unsw-sydney.jpg',
  'university-of-sydney': '/images/universities/unsw-sydney.jpg',
};

function normalizeUrl(url?: string): string {
  if (!url) return '#';
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url}`;
}

function normalizeDomain(domain?: string, url?: string): string {
  if (domain && domain.trim().length > 0) {
    return domain.replace(/^https?:\/\//i, '').replace(/^www\./i, '').replace(/\/$/, '');
  }
  if (url) {
    return url.replace(/^https?:\/\//i, '').replace(/^www\./i, '').split('/')[0];
  }
  return '';
}

function extractCity(location: string): string {
  if (!location) return 'Other';
  // Split by comma or bullet/middle-dot (\xb7 / \u00b7) or slash
  const parts = location.split(/[,·\u00b7/]/);
  const primary = parts[0]?.trim();
  return primary || 'Other';
}

function normalizeRawItem(item: RawDirectoryItem, index: number): UniversityDirectoryItem {
  const num = typeof item.number === 'number' ? item.number : index + 1;
  const displayIndex = String(index + 1).padStart(3, '0');
  const id = item.directory_id || item.id || `uni-${index + 1}`;
  
  // Format location nicely (replace encoded middle dots with clean bullet)
  const cleanLocation = (item.location || '').replace(/[\u00b7\xb7]/g, '·').trim();
  const city = extractCity(cleanLocation);

  const websiteUrl = normalizeUrl(item.website_url || item.website);
  const websiteDomain = normalizeDomain(item.website_domain, websiteUrl);

  let logoUrl: string | null = null;

  if (item.logo_file) {
    const filename = item.logo_file.split('/').pop();
    if (filename) {
      logoUrl = `/logos/university_logos/${filename}`;
    }
  } else if (item.logo) {
    logoUrl = item.logo.startsWith('/') ? item.logo : `/images/universities/${item.logo}`;
  } else {
    // Check known Australian images by normalized name
    const slugName = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (AUSTRALIA_IMAGE_MAP[slugName]) {
      logoUrl = AUSTRALIA_IMAGE_MAP[slugName];
    }
  }

  return {
    id,
    number: num,
    displayIndex,
    name: item.name,
    location: cleanLocation,
    city,
    websiteDomain,
    websiteUrl,
    logoUrl,
    section: item.section,
  };
}

export async function loadCountryUniversityDirectory(countrySlug: string): Promise<UniversityDirectoryItem[]> {
  const normalizedSlug = countrySlug.toLowerCase().trim();

  if (directoryCache[normalizedSlug]) {
    return directoryCache[normalizedSlug];
  }

  let rawData: RawDirectoryItem[] = [];

  try {
    switch (normalizedSlug) {
      case 'uk':
      case 'united-kingdom': {
        const mod = await import('./uk_universities.json');
        rawData = (mod.default || mod) as RawDirectoryItem[];
        break;
      }
      case 'usa':
      case 'united-states': {
        const mod = await import('./usa_universities.json');
        rawData = (mod.default || mod) as RawDirectoryItem[];
        break;
      }
      case 'canada': {
        const mod = await import('./canada_universities.json');
        rawData = (mod.default || mod) as RawDirectoryItem[];
        break;
      }
      case 'germany': {
        const mod = await import('./germany_universities.json');
        rawData = (mod.default || mod) as RawDirectoryItem[];
        break;
      }
      case 'ireland': {
        const mod = await import('./ireland_universities.json');
        rawData = (mod.default || mod) as RawDirectoryItem[];
        break;
      }
      case 'new-zealand': {
        const mod = await import('./new_zealand_universities.json');
        rawData = (mod.default || mod) as RawDirectoryItem[];
        break;
      }
      case 'australia': {
        const mod = await import('./australia.json');
        rawData = (mod.default || mod) as RawDirectoryItem[];
        break;
      }
      case 'europe':
      case 'europe-schengen':
      case 'schengen': {
        const mod = await import('./europe_universities.json');
        rawData = (mod.default || mod) as RawDirectoryItem[];
        break;
      }
      default: {
        // Fallback: check if the slug matches a European country location (e.g. 'france', 'italy', 'spain')
        try {
          const mod = await import('./europe_universities.json');
          const europeData = (mod.default || mod) as RawDirectoryItem[];
          const filtered = europeData.filter(
            (item) => item.location && item.location.toLowerCase().replace(/[^a-z0-9]+/g, '-') === normalizedSlug
          );
          if (filtered.length > 0) {
            rawData = filtered;
            break;
          }
        } catch (_) {}
        return [];
      }
    }

    const normalized = rawData.map((item, idx) => normalizeRawItem(item, idx));
    directoryCache[normalizedSlug] = normalized;
    return normalized;
  } catch (err) {
    console.error(`Failed to load university directory for ${countrySlug}:`, err);
    return [];
  }
}

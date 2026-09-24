import os

src = r"c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas\frontend\src"

# Config
os.makedirs(os.path.join(src, "config"), exist_ok=True)
with open(os.path.join(src, "config", "site.ts"), "w", encoding="utf-8") as f:
    f.write('''export const siteConfig = {
  name: "Aegis Overseas",
  tagline: "Premier Global Education Consultants",
  description: "Guiding students to world-class universities in UK, USA, Canada, Australia, Germany, Ireland, and New Zealand.",
  url: "https://aegisoverseas.com",
  phonePrimary: "+91 9246220044",
  phoneSecondary: "+91 9246220066",
  whatsapp: "919246220044",
  email: "Info@aegisoverseas.com",
  offices: [
    { title: "Hyderabad (Headquarters)", address: "Aegis House, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033" },
    { title: "Bangalore", address: "Prestige Meridian, MG Road, Bengaluru, Karnataka 560001" },
    { title: "Vijayawada", address: "MG Road, Opposite Gateway Hotel, Vijayawada, AP 520010" }
  ]
};
''')

with open(os.path.join(src, "config", "navigation.ts"), "w", encoding="utf-8") as f:
    f.write('''export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  children?: { title: string; href: string; description?: string }[];
}

export const navigationConfig: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Destinations",
    href: "/destinations",
    children: [
      { title: "United Kingdom", href: "/destinations/uk", description: "World-class education with 2-yr Graduate Visa" },
      { title: "United States", href: "/destinations/usa", description: "Top Ivy Leagues & 3-yr STEM OPT" },
      { title: "Canada", href: "/destinations/canada", description: "Affordable tuition with up to 3-yr PGWP" },
      { title: "Australia", href: "/destinations/australia", description: "Group of Eight universities & vibrant life" },
      { title: "Germany", href: "/destinations/germany", description: "Zero-tuition public universities & engineering" },
      { title: "Ireland", href: "/destinations/ireland", description: "European tech hub with 2-yr stay back" },
      { title: "New Zealand", href: "/destinations/new-zealand", description: "Globally ranked institutions & pristine nature" },
      { title: "Europe", href: "/destinations/europe", description: "Schengen mobility & historic universities" }
    ]
  },
  { title: "Universities", href: "/universities" },
  { title: "Courses", href: "/courses" },
  {
    title: "Services",
    href: "/services",
    children: [
      { title: "Career Counselling", href: "/services/counselling" },
      { title: "University Shortlisting", href: "/services/university-selection" },
      { title: "Application & SOP Review", href: "/services/applications" },
      { title: "Scholarships", href: "/services/scholarships" },
      { title: "Education Loans", href: "/services/education-loans" },
      { title: "Visa Guidance", href: "/services/visa" },
      { title: "Student Accommodation", href: "/services/accommodation" },
      { title: "Forex & Cards", href: "/services/forex" },
      { title: "Pre-Departure Briefing", href: "/services/pre-departure" }
    ]
  },
  { title: "Test Prep", href: "/test-preparation" },
  { title: "Student Stories", href: "/student-stories" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" }
];
''')

with open(os.path.join(src, "config", "api.ts"), "w", encoding="utf-8") as f:
    f.write('''export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
''')

# Types
types_dir = os.path.join(src, "types")
os.makedirs(types_dir, exist_ok=True)

with open(os.path.join(types_dir, "university.ts"), "w", encoding="utf-8") as f:
    f.write('''export interface University {
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
''')

with open(os.path.join(types_dir, "course.ts"), "w", encoding="utf-8") as f:
    f.write('''export interface Course {
  id: string;
  name: string;
  universityId?: string;
  level: 'Bachelor' | 'Master' | 'Doctorate' | 'Diploma';
  category: string;
  durationMonths: number;
  popularJobs: string[];
  tuitionFee?: string;
}
''')

with open(os.path.join(types_dir, "destination.ts"), "w", encoding="utf-8") as f:
    f.write('''export interface Destination {
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
''')

with open(os.path.join(types_dir, "scholarship.ts"), "w", encoding="utf-8") as f:
    f.write('''export interface Scholarship {
  id: string;
  title: string;
  country: string;
  amount: string;
  deadline: string;
  eligibility: string;
}
''')

with open(os.path.join(types_dir, "enquiry.ts"), "w", encoding="utf-8") as f:
    f.write('''export interface Enquiry {
  id?: string;
  name: string;
  email: string;
  phone: string;
  preferredCountry?: string;
  preferredCourse?: string;
  city?: string;
  message?: string;
}
''')

with open(os.path.join(types_dir, "consultation.ts"), "w", encoding="utf-8") as f:
    f.write('''export interface Consultation {
  id?: string;
  studentName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  mode: 'online' | 'in-person';
  preferredOffice?: string;
}
''')

with open(os.path.join(types_dir, "blog.ts"), "w", encoding="utf-8") as f:
    f.write('''export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  category: string;
}
''')

# Utils
utils_dir = os.path.join(src, "utils")
os.makedirs(utils_dir, exist_ok=True)

with open(os.path.join(utils_dir, "formatters.ts"), "w", encoding="utf-8") as f:
    f.write('''export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};
''')

with open(os.path.join(utils_dir, "validators.ts"), "w", encoding="utf-8") as f:
    f.write('''export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  return /^\+?[\d\s-]{10,15}$/.test(phone);
};
''')

with open(os.path.join(utils_dir, "helpers.ts"), "w", encoding="utf-8") as f:
    f.write('''import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToId = (elementId: string) => {
  const el = document.getElementById(elementId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
''')

# Hooks
hooks_dir = os.path.join(src, "hooks")
os.makedirs(hooks_dir, exist_ok=True)

with open(os.path.join(hooks_dir, "useAuth.ts"), "w", encoding="utf-8") as f:
    f.write('''import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('aegis_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
        setIsAuthenticated(true);
      } catch (e) {
        localStorage.removeItem('aegis_user');
      }
    }
  }, []);

  return { user, isAuthenticated };
};
''')

with open(os.path.join(hooks_dir, "useApi.ts"), "w", encoding="utf-8") as f:
    f.write('''import { useState, useCallback } from 'react';

export function useApi<T>(apiFunc: (...args: any[]) => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async (...args: any[]) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiFunc(...args);
      setData(result);
      return result;
    } catch (err: any) {
      setError(err.message || 'Request failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunc]);

  return { data, loading, error, execute };
}
''')

with open(os.path.join(hooks_dir, "useScroll.ts"), "w", encoding="utf-8") as f:
    f.write('''import { useState, useEffect } from 'react';

export const useScroll = (threshold = 20) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};
''')

with open(os.path.join(hooks_dir, "useDebounce.ts"), "w", encoding="utf-8") as f:
    f.write('''import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
''')

with open(os.path.join(hooks_dir, "useUniversitySearch.ts"), "w", encoding="utf-8") as f:
    f.write('''import { useState, useMemo } from 'react';
import { University } from '../types/university';

export const useUniversitySearch = (initialList: University[] = []) => {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('All');

  const filtered = useMemo(() => {
    return initialList.filter((uni) => {
      const matchesCountry = country === 'All' || uni.country.toLowerCase() === country.toLowerCase();
      const matchesQuery = !query || uni.name.toLowerCase().includes(query.toLowerCase()) || uni.city.toLowerCase().includes(query.toLowerCase());
      return matchesCountry && matchesQuery;
    });
  }, [initialList, query, country]);

  return { query, setQuery, country, setCountry, filtered };
};
''')

# Services
services_dir = os.path.join(src, "services")
os.makedirs(services_dir, exist_ok=True)

with open(os.path.join(services_dir, "api.ts"), "w", encoding="utf-8") as f:
    f.write('''import { API_BASE_URL } from '../config/api';

export const apiClient = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  return response.json();
};
''')

with open(os.path.join(services_dir, "auth.service.ts"), "w", encoding="utf-8") as f:
    f.write('''import { apiClient } from './api';

export const authService = {
  login: async (credentials: any) => apiClient('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  register: async (data: any) => apiClient('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
};
''')

with open(os.path.join(services_dir, "university.service.ts"), "w", encoding="utf-8") as f:
    f.write('''import { apiClient } from './api';

export const universityService = {
  getAll: async (params?: { country?: string; search?: string }) => {
    const query = new URLSearchParams(params as any).toString();
    return apiClient(`/universities?${query}`);
  },
  getBySlug: async (slug: string) => apiClient(`/universities/${slug}`),
};
''')

with open(os.path.join(services_dir, "course.service.ts"), "w", encoding="utf-8") as f:
    f.write('''import { apiClient } from './api';

export const courseService = {
  getAll: async () => apiClient('/courses'),
};
''')

with open(os.path.join(services_dir, "destination.service.ts"), "w", encoding="utf-8") as f:
    f.write('''import { apiClient } from './api';

export const destinationService = {
  getAll: async () => apiClient('/destinations'),
  getBySlug: async (slug: string) => apiClient(`/destinations/${slug}`),
};
''')

with open(os.path.join(services_dir, "scholarship.service.ts"), "w", encoding="utf-8") as f:
    f.write('''import { apiClient } from './api';

export const scholarshipService = {
  getAll: async () => apiClient('/scholarships'),
};
''')

with open(os.path.join(services_dir, "enquiry.service.ts"), "w", encoding="utf-8") as f:
    f.write('''import { apiClient } from './api';

export const enquiryService = {
  submit: async (data: any) => apiClient('/leads', { method: 'POST', body: JSON.stringify(data) }),
};
''')

with open(os.path.join(services_dir, "consultation.service.ts"), "w", encoding="utf-8") as f:
    f.write('''import { apiClient } from './api';

export const consultationService = {
  book: async (data: any) => apiClient('/consultations', { method: 'POST', body: JSON.stringify(data) }),
};
''')

with open(os.path.join(services_dir, "blog.service.ts"), "w", encoding="utf-8") as f:
    f.write('''import { apiClient } from './api';

export const blogService = {
  getAll: async () => apiClient('/blog'),
};
''')

print("Foundation files created successfully.")

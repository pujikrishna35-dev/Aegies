export type DestinationCountry =
  | 'usa'
  | 'uk'
  | 'canada'
  | 'australia'
  | 'germany'
  | 'new-zealand'
  | 'ireland'
  | 'europe'
  | 'sweden'
  | 'singapore'
  | 'netherlands';

export interface Destination {
  id: string;
  slug: DestinationCountry;
  name: string;
  heroTitle: string;
  tagline: string;
  emotionalPhrase: string;
  shortDescription: string;
  fullDescription: string;
  flag: string;
  image: string;
  popularUniversitiesCount: number;
  averageTuition: string;
  postStudyWorkVisa: string;
  intakes: string[];
  keyHighlights: string[];
  topCourses: string[];
}

export interface University {
  id: string;
  name: string;
  country: DestinationCountry;
  countryName: string;
  city: string;
  ranking: string;
  foundedYear?: number;
  image: string;
  logo: string;
  tuitionFeeRange: string;
  acceptanceRate?: string;
  popularCourses: string[];
  ieltsRequirement: string;
  intakes: string[];
  scholarshipsAvailable: boolean;
  featured: boolean;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  universityId: string;
  universityName: string;
  country: DestinationCountry;
  countryName: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Doctorate' | 'Diploma';
  discipline: string;
  duration: string;
  annualFee: string;
  intake: string;
  description: string;
}

export interface StudentReview {
  id: string;
  name: string;
  studentLocation: string;
  destinationCountry: string;
  university: string;
  course: string;
  rating: number;
  quote: string;
  avatar: string;
  counselorMentioned?: string;
}

export interface ConsultationRequest {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  destination: DestinationCountry | 'not-sure';
  studyLevel: 'Undergraduate' | 'Postgraduate' | 'Doctorate' | 'Other';
  fieldOfStudy: string;
  academicScore?: string;
  englishTest?: 'IELTS' | 'PTE' | 'TOEFL' | 'Duolingo' | 'GRE' | 'GMAT' | 'Not Taken';
  budgetRange?: string;
  preferredIntake?: string;
  preferredOffice: 'Nellore' | 'Tirupati' | 'Online / Virtual';
  message?: string;
  status?: 'New' | 'Contacted' | 'In Progress' | 'Converted' | 'Closed';
  createdAt?: string;
}

export interface UniversityFinderFilter {
  studyLevel: string;
  preferredCountry: string;
  fieldOfStudy: string;
  academicScore: string;
  englishTest: string;
  budgetInr: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  isHeadquarters: boolean;
  title: string;
  address: string;
  phone: string[];
  email: string;
  hours: string;
  mapEmbedUrl: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  destination: string;
  service: string;
  status: 'New' | 'Follow-up' | 'Application Submitted' | 'Visa Approved' | 'Archived';
  source: string;
  assignedCounselor: string;
  createdDate: string;
}

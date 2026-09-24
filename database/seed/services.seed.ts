export interface ServiceSeed {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  highlights: string[];
}

export const servicesSeed: ServiceSeed[] = [
  {
    id: 'srv-counselling',
    slug: 'counselling',
    title: 'Career & Course Counselling',
    shortDescription: 'In-depth psychometric analysis and profile-matched course curation.',
    highlights: ['1-on-1 Certified Mentors', 'ROI Assessment', 'Career Mapping'],
  },
  {
    id: 'srv-univ-selection',
    slug: 'university-selection',
    title: 'University Shortlisting',
    shortDescription: 'Balanced university portfolio: Dream, Target, and Safe institutions.',
    highlights: ['Ambitious vs Safe mix', 'Location & Cost Insights', 'Alumni Placement Rates'],
  },
  {
    id: 'srv-applications',
    slug: 'applications',
    title: 'Application & SOP Editing',
    shortDescription: 'Tailored Statement of Purpose, LOR reviews, and dossier compilation.',
    highlights: ['Native English Editors', 'Application fee waivers', 'Zero rejection formatting'],
  },
  {
    id: 'srv-scholarships',
    slug: 'scholarships',
    title: 'Scholarship Assistance',
    shortDescription: 'Securing merit, sports, and need-based institutional scholarships.',
    highlights: ['Over $5M+ awards secured', 'Dedicated application tracking', 'Direct university liaison'],
  },
  {
    id: 'srv-loans',
    slug: 'education-loans',
    title: 'Education Loans & Funding',
    shortDescription: 'Fast collateral and non-collateral loan sanctioning through top banking partners.',
    highlights: ['Subsidized interest rates', 'Fast 48-hr approvals', 'No margin money options'],
  },
  {
    id: 'srv-visa',
    slug: 'visa',
    title: 'Student Visa Filing & Mock Interviews',
    shortDescription: '99.4% visa approval track record with certified visa experts.',
    highlights: ['Comprehensive financial vetting', 'Embassy mock interviews', 'CAS / I-20 assistance'],
  },
  {
    id: 'srv-accommodation',
    slug: 'accommodation',
    title: 'Student Accommodation',
    shortDescription: 'Safe, verified on-campus and private student residences worldwide.',
    highlights: ['University hall bookings', 'PBSA partnerships', 'Airport pickup coordination'],
  },
  {
    id: 'srv-forex',
    slug: 'forex',
    title: 'Forex & International SIM',
    shortDescription: 'Zero forex markup multi-currency cards and pre-activated international SIMs.',
    highlights: ['Best live exchange rates', 'Student multi-currency card', 'Instant remittance'],
  },
  {
    id: 'srv-pre-departure',
    slug: 'pre-departure',
    title: 'Pre-Departure Briefing',
    shortDescription: 'Orientation on luggage, customs, healthcare, banking, and cultural nuances.',
    highlights: ['Alumni network introduction', 'Packing checklists', 'Survival guides'],
  }
];

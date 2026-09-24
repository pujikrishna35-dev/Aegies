export interface DestinationData {
  country: string;
  slug: string;
  headline: string;
  phrase: string;
  flag: string;
  image: string;
  universitiesCount: string;
  tuition: string;
  workRights: string;
  popularCourses: string[];
  overview: string;
  keyFacts: { label: string; value: string }[];
  topUniversities: { name: string; ranking: string; location: string }[];
  costOfLiving: string;
  admissionRequirements: {
    ug: string;
    pg: string;
    english: string;
    intakes: string;
  };
  workRightsDetail: string;
  visaChecklist: string[];
  whyStudyHere: string[];
  faqs: { q: string; a: string }[];
}

export const DESTINATIONS: DestinationData[] = [
  {
    country: 'United Kingdom',
    slug: 'uk',
    headline: 'Tradition Inspires Tomorrow',
    phrase: 'Learn. Grow. Belong.',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '160+',
    tuition: '£14,000 - £30,000/yr',
    workRights: '2-Year Graduate Visa',
    popularCourses: ['Computer Science', 'Data Analytics', 'Business Management', 'Law', 'Artificial Intelligence', 'Finance'],
    overview: 'The United Kingdom is home to world-renowned universities with centuries of academic prestige and cutting-edge research. One-year Master\'s degrees and three-year Bachelor\'s degrees make studying in the UK time-efficient and cost-effective.',
    keyFacts: [
      { label: 'Intakes', value: 'September (Major) & January / May' },
      { label: 'Average Degree Length', value: '1 Year (Master\'s) / 3 Years (Bachelor\'s)' },
      { label: 'Part-Time Work', value: '20 Hours/Week during term' },
      { label: 'Post-Study Work', value: '2 Years (3 Years for PhD)' }
    ],
    topUniversities: [
      { name: 'University of Oxford', ranking: 'QS World #3', location: 'Oxford, England' },
      { name: 'Imperial College London', ranking: 'QS World #2', location: 'London, England' },
      { name: 'University of Edinburgh', ranking: 'QS World #27', location: 'Edinburgh, Scotland' },
      { name: 'University of Manchester', ranking: 'QS World #34', location: 'Manchester, England' },
      { name: 'University of Warwick', ranking: 'QS World #69', location: 'Coventry, England' }
    ],
    costOfLiving: '£9,207 to £12,006/yr outside London; ~£15,000/yr in Inner London',
    admissionRequirements: {
      ug: 'Minimum 70% in Class 12 (CBSE / ISC / State Board)',
      pg: 'Minimum 60% in Bachelor\'s degree from recognized university',
      english: 'IELTS 6.5 (min 6.0 each) or PTE 62+ (IELTS waiver possible with 75%+ in 12th English)',
      intakes: 'September (Autumn) & January (Spring)'
    },
    workRightsDetail: 'Under the UK Graduate Route, international graduates can work or look for work at any skill level for 2 years (3 years for doctoral graduates) without requiring company sponsorship.',
    visaChecklist: [
      'Confirmation of Acceptance for Studies (CAS) from licensed sponsor',
      'Valid Passport with at least 6 months validity',
      'Proof of financial maintenance funds held for continuous 28-day period',
      'Tuberculosis (TB) test certificate from IOM approved clinic',
      'Academic transcripts and English language test certificate'
    ],
    whyStudyHere: [
      'Intensive 1-Year Master\'s degrees save significant tuition and living costs.',
      'Internationally recognized degrees backed by rigorous Quality Assurance Agency (QAA).',
      'Vibrant multicultural student cities with global networking opportunities.',
      'Generous 2-year post-study work visa (Graduate Route).'
    ],
    faqs: [
      {
        q: 'Can I get an IELTS waiver for UK universities?',
        a: 'Yes, many UK universities waive IELTS requirements if you have scored 70% or higher in English in your Class 12 exams from CBSE or ICSE boards.'
      },
      {
        q: 'How much funds do I need to show for a UK student visa?',
        a: 'You must show unpaid tuition fees plus £9,207 for living costs outside London (or £12,006 inside London) held continuously in your bank account for at least 28 consecutive days.'
      }
    ]
  },
  {
    country: 'United States',
    slug: 'usa',
    headline: 'Innovation Meets Ambition',
    phrase: 'Dream. Study. Achieve.',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '4,000+',
    tuition: '$25,000 - $55,000/yr',
    workRights: 'Up to 3 Years STEM OPT',
    popularCourses: ['Artificial Intelligence', 'Software Engineering', 'MBA', 'Finance', 'Biotechnology', 'Data Science'],
    overview: 'The United States is the world\'s leading destination for international students, renowned for academic flexibility, generous research funding, and unmatched industry integration with Silicon Valley and Wall Street.',
    keyFacts: [
      { label: 'Intakes', value: 'Fall (August/Sept) & Spring (January)' },
      { label: 'Degree Duration', value: '2 Years (Master\'s) / 4 Years (Bachelor\'s)' },
      { label: 'Part-Time Work', value: '20 Hours/Week on-campus' },
      { label: 'Post-Study OPT', value: '1 Year + 24 Month STEM Extension (3 Years total)' }
    ],
    topUniversities: [
      { name: 'Massachusetts Institute of Technology (MIT)', ranking: 'QS World #1', location: 'Cambridge, MA' },
      { name: 'Stanford University', ranking: 'QS World #5', location: 'Stanford, CA' },
      { name: 'Northeastern University', ranking: 'Top 40 US Research', location: 'Boston, MA' },
      { name: 'University of Southern California (USC)', ranking: 'Top 30 US', location: 'Los Angeles, CA' },
      { name: 'Arizona State University (ASU)', ranking: '#1 Most Innovative', location: 'Tempe, AZ' }
    ],
    costOfLiving: '$12,000 to $20,000/yr depending on university town and state',
    admissionRequirements: {
      ug: 'Class 12 diploma with 75%+ GPA, SAT/ACT optional at many universities',
      pg: '4-year Bachelor\'s degree (or 3-year with evaluation/bridge), GPA 3.0+',
      english: 'TOEFL 90+, IELTS 6.5 - 7.0, or Duolingo 120+',
      intakes: 'Fall (Priority: Dec - March), Spring (Priority: August - October)'
    },
    workRightsDetail: 'F-1 student visa holders can participate in Curricular Practical Training (CPT) during their degree and Optional Practical Training (OPT) for 12 months after graduation, extendable by 24 additional months for STEM graduates.',
    visaChecklist: [
      'Official Form I-20 issued by SEVP-approved institution',
      'SEVIS I-901 fee payment receipt ($350)',
      'DS-160 confirmation barcode page',
      'US Visa appointment confirmation letter',
      'Proof of liquid financial assets covering first-year expenses listed on I-20'
    ],
    whyStudyHere: [
      'Unrivaled access to global Fortune 500 tech, biotech, and finance internships.',
      '3-Year STEM OPT extension gives graduates multiple attempts at the H-1B work visa.',
      'Curriculum flexibility allowing minors, double majors, and custom interdisciplinary tracks.',
      'Extensive Graduate Assistantship (TA / RA) tuition waivers and monthly stipends.'
    ],
    faqs: [
      {
        q: 'Do I need a GRE score to study MS in the USA?',
        a: 'While many US universities now offer GRE waivers or have GRE-optional policies, submitting a strong GRE score (320+) substantially boosts your chances for competitive STEM admits and merit scholarships.'
      }
    ]
  },
  {
    country: 'Canada',
    slug: 'canada',
    headline: 'Welcoming Culture & World-Class Degrees',
    phrase: 'Opportunities Await.',
    flag: '🇨🇦',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '100+',
    tuition: 'CAD 18,000 - CAD 38,000/yr',
    workRights: 'Up to 3 Years PGWP',
    popularCourses: ['Cloud Computing', 'Data Science', 'Business Administration', 'Biotechnology', 'Mechanical Engineering'],
    overview: 'Canada combines globally top-tier education with safe, welcoming communities and one of the world\'s most transparent post-graduation work and immigration pathways.',
    keyFacts: [
      { label: 'Intakes', value: 'Fall (Sept), Winter (Jan) & Summer (May)' },
      { label: 'Degree Duration', value: '1 to 2 Years (Master\'s/PGD) / 4 Years (UG)' },
      { label: 'Part-Time Work', value: '20 Hours/Week during academic terms' },
      { label: 'Post-Graduation Work', value: 'Up to 3-Year Post-Graduation Work Permit (PGWP)' }
    ],
    topUniversities: [
      { name: 'University of Toronto', ranking: 'QS World #25', location: 'Toronto, Ontario' },
      { name: 'McGill University', ranking: 'QS World #29', location: 'Montreal, Quebec' },
      { name: 'University of British Columbia', ranking: 'QS World #38', location: 'Vancouver, BC' },
      { name: 'University of Waterloo', ranking: 'Top Tech & Co-op', location: 'Waterloo, Ontario' },
      { name: 'McMaster University', ranking: 'Top 100 World', location: 'Hamilton, Ontario' }
    ],
    costOfLiving: 'CAD 15,000 to CAD 20,635/yr (as required by IRCC Guaranteed Investment Certificate)',
    admissionRequirements: {
      ug: 'Class 12 with 70%+ overall and relevant subject prerequisites',
      pg: '4-year Bachelor\'s degree or 3-year + Master\'s, minimum 65% - 75%',
      english: 'IELTS Academic 6.5 (no band < 6.0) or PTE Academic 60+',
      intakes: 'September (Fall) & January (Winter)'
    },
    workRightsDetail: 'Graduates from designated learning institutions (DLI) pursuing programs of 2 years or longer can qualify for a 3-year Post-Graduation Work Permit (PGWP) with open work authorization.',
    visaChecklist: [
      'Provincial Attestation Letter (PAL) where applicable & Official Letter of Acceptance',
      'Guaranteed Investment Certificate (GIC) of CAD $20,635',
      'Proof of upfront first-year tuition payment receipt',
      'Upfront Immigration Medical Examination (IME) report',
      'Clean Police Clearance Certificate (PCC)'
    ],
    whyStudyHere: [
      'High standard of living in world-renowned safe, clean student cities.',
      'Co-op work terms integrated into academic programs providing paid Canadian work experience.',
      'Direct immigration points awarded under Express Entry Canadian Experience Class (CEC).'
    ],
    faqs: [
      {
        q: 'What is the Guaranteed Investment Certificate (GIC)?',
        a: 'The GIC is a mandatory Canadian investment account of CAD $20,635 opened with a recognized Canadian financial institution (such as CIBC or Scotiabank) that pays out monthly living stipends upon arrival in Canada.'
      }
    ]
  },
  {
    country: 'Australia',
    slug: 'australia',
    headline: 'High Standard of Living & Global Recognition',
    phrase: 'A World of Discovery.',
    flag: '🇦🇺',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '43+',
    tuition: 'AUD 22,000 - AUD 45,000/yr',
    workRights: '2–4 Years Post-Study Work',
    popularCourses: ['Information Technology', 'Civil Engineering', 'Accounting', 'Nursing', 'Cybersecurity', 'Public Health'],
    overview: 'Australia boasts 7 of the world\'s top 100 universities, breathtaking cities, and an exceptional lifestyle. Australian qualifications are recognized globally and held in high esteem by international employers.',
    keyFacts: [
      { label: 'Intakes', value: 'Semester 1 (Feb/March) & Semester 2 (July/Aug)' },
      { label: 'Degree Duration', value: '1.5 - 2 Years (Master\'s) / 3 Years (Bachelor\'s)' },
      { label: 'Part-Time Work', value: '48 Hours per Fortnight' },
      { label: 'Post-Study Work', value: '2 to 4 Years (Subclass 485 Temporary Graduate Visa)' }
    ],
    topUniversities: [
      { name: 'University of Melbourne', ranking: 'QS World #13', location: 'Melbourne, VIC' },
      { name: 'The University of Sydney', ranking: 'QS World #18', location: 'Sydney, NSW' },
      { name: 'UNSW Sydney', ranking: 'QS World #19', location: 'Sydney, NSW' },
      { name: 'Australian National University (ANU)', ranking: 'QS World #30', location: 'Canberra, ACT' },
      { name: 'Monash University', ranking: 'QS World #37', location: 'Melbourne, VIC' }
    ],
    costOfLiving: 'AUD $24,505/yr standard living allowance required by Australian Department of Home Affairs',
    admissionRequirements: {
      ug: 'Class 12 with 65% - 80% depending on university and faculty',
      pg: 'Recognized Bachelor\'s degree with 60%+ marks',
      english: 'IELTS 6.5 (min 6.0) or PTE 58 - 65+',
      intakes: 'February (Semester 1) & July (Semester 2)'
    },
    workRightsDetail: 'Under the Subclass 485 Temporary Graduate Visa, students completing an eligible bachelor\'s or master\'s program can work full-time in Australia for 2 to 4 years, with additional regional stay incentives.',
    visaChecklist: [
      'Electronic Confirmation of Enrolment (eCoE)',
      'Genuine Student (GS) declaration and statement of purpose',
      'Overseas Student Health Cover (OSHC) policy for full study duration',
      'Financial capacity documentation (bank deposits or education loan sanction)',
      'Biometrics collection and health examination'
    ],
    whyStudyHere: [
      'Home to the prestigious Group of Eight (Go8) research-intensive universities.',
      'High minimum hourly wages for part-time student employment (~AUD $23.23/hr).',
      'Regional study migration pathways offering up to 4 years post-study stay.'
    ],
    faqs: [
      {
        q: 'What is the Genuine Student (GS) requirement for Australia?',
        a: 'The GS requirement assesses whether an applicant genuinely intends to obtain a quality Australian education and understands how the degree connects to their future career prospects back home.'
      }
    ]
  },
  {
    country: 'Germany',
    slug: 'germany',
    headline: 'Engineering Powerhouse of Europe',
    phrase: 'Engineered for a Better Future.',
    flag: '🇩🇪',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '380+',
    tuition: 'Zero or Low Tuition (€500–€3,000/yr)',
    workRights: '18-Month Jobseeker Visa',
    popularCourses: ['Automotive Engineering', 'Mechanical & Robotics', 'Informatics', 'Renewable Energy', 'Data Science'],
    overview: 'Germany is Europe\'s economic engine, offering tuition-free or extremely low-cost education at prestigious public universities with world-leading industrial research partnerships.',
    keyFacts: [
      { label: 'Intakes', value: 'Winter (October - Major) & Summer (April)' },
      { label: 'Degree Duration', value: '1.5 - 2 Years (Master\'s) / 3 Years (Bachelor\'s)' },
      { label: 'Part-Time Work', value: '140 Full Days or 280 Half Days per calendar year' },
      { label: 'Jobseeker Visa', value: '18 Months Post-Graduation Work Search Visa' }
    ],
    topUniversities: [
      { name: 'Technical University of Munich (TUM)', ranking: 'QS World #28', location: 'Munich, Bavaria' },
      { name: 'LMU Munich', ranking: 'QS World #59', location: 'Munich, Bavaria' },
      { name: 'Heidelberg University', ranking: 'QS World #84', location: 'Heidelberg, Baden-Württemberg' },
      { name: 'RWTH Aachen University', ranking: 'Top Engineering World', location: 'Aachen, NRW' },
      { name: 'Technical University of Berlin (TU Berlin)', ranking: 'Top STEM EU', location: 'Berlin' }
    ],
    costOfLiving: '€11,208/yr required in an official German Blocked Account (Sperrkonto)',
    admissionRequirements: {
      ug: '12 years schooling + 1 year Studienkolleg / 1 year Indian Bachelor\'s / JEE Advanced rank',
      pg: 'Strict ECTS subject-credit matching with undergraduate engineering degree, 70%+',
      english: 'IELTS 6.5+ or TOEFL 90+ for English-taught master\'s programs',
      intakes: 'Winter (Deadline: July 15) & Summer (Deadline: January 15)'
    },
    workRightsDetail: 'Graduates receive an 18-month Jobseeker residence permit to find a role matching their qualification. Once employed, they can switch to the EU Blue Card leading to fast-track permanent residency in 21-27 months.',
    visaChecklist: [
      'Akademische Prüfstelle (APS) India Certificate (Mandatory)',
      'University admission letter (Zulassungsbescheid)',
      'Proof of blocked account (€934/month for 12 months) via Expatrio or Coracle',
      'Statutory German public student health insurance (TK / Barmer)',
      'Europass CV and Letter of Motivation'
    ],
    whyStudyHere: [
      'Almost zero tuition fees at public universities saves upwards of €30,000.',
      'Close industry integration with BMW, Siemens, Bosch, SAP, and Mercedes-Benz.',
      'Fastest EU Blue Card permanent residency pathway in Europe.'
    ],
    faqs: [
      {
        q: 'Do I need to know German to study MS in Germany?',
        a: 'No! Over 1,500 Master\'s programs in Germany are taught 100% in English. However, learning conversational German (A1/A2 level) significantly helps in finding internships and daily living.'
      }
    ]
  },
  {
    country: 'Ireland',
    slug: 'ireland',
    headline: 'The Silicon Valley of Europe',
    phrase: 'More Than a Degree.',
    flag: '🇮🇪',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '30+',
    tuition: '€12,000 - €26,000/yr',
    workRights: '2-Year Third Level Graduate Visa',
    popularCourses: ['Pharmaceuticals', 'Cybersecurity', 'Financial Tech', 'Data Analytics', 'Cloud Architecture'],
    overview: 'Ireland is Europe\'s premier technology and pharmaceuticals hub, hosting the European headquarters of Google, Apple, Meta, Pfizer, and Microsoft in Dublin\'s vibrant Silicon Docks.',
    keyFacts: [
      { label: 'Intakes', value: 'Autumn (September) & Spring (January)' },
      { label: 'Degree Duration', value: '1 Year (Master\'s) / 3 - 4 Years (UG)' },
      { label: 'Part-Time Work', value: '20 Hours/Week (40 hrs during holidays)' },
      { label: 'Stay Back Visa', value: '2-Year Third Level Graduate Scheme' }
    ],
    topUniversities: [
      { name: 'Trinity College Dublin', ranking: 'QS World #87', location: 'Dublin' },
      { name: 'University College Dublin (UCD)', ranking: 'QS World #126', location: 'Dublin' },
      { name: 'University of Galway', ranking: 'Top 300 World', location: 'Galway' },
      { name: 'University College Cork (UCC)', ranking: 'Top 300 World', location: 'Cork' },
      { name: 'Dublin City University (DCU)', ranking: 'Top Young Uni', location: 'Dublin' }
    ],
    costOfLiving: '€10,000 to €15,000/yr depending on Dublin vs regional cities like Galway or Cork',
    admissionRequirements: {
      ug: 'Class 12 with 70%+ overall',
      pg: 'Bachelor\'s degree with 60% - 65%+',
      english: 'IELTS 6.5 (min 6.0) or Duolingo 120+',
      intakes: 'September (Autumn) & January (Spring)'
    },
    workRightsDetail: 'Under the Third Level Graduate Scheme (Stamp 1G), non-EEA master\'s graduates can stay and work full-time in Ireland for 24 months without a separate work permit.',
    visaChecklist: [
      'Offer letter from Irish university and tuition payment receipt',
      'Proof of €10,000 immediate access living funds',
      'Private medical insurance coverage',
      'Evidence of financial ties and sponsorship history',
      'Statement of purpose detailing study and return plans'
    ],
    whyStudyHere: [
      'European headquarters for 9 of the world\'s top 10 tech companies.',
      'Only English-speaking country in the Eurozone post-Brexit.',
      'Streamlined 2-year post-study work visa.'
    ],
    faqs: [
      {
        q: 'Why is Ireland called the Silicon Valley of Europe?',
        a: 'Ireland hosts the European headquarters for Google, Apple, Meta, LinkedIn, Amazon, and Microsoft, creating exceptional career opportunities for tech and finance graduates.'
      }
    ]
  },
  {
    country: 'New Zealand',
    slug: 'new-zealand',
    headline: 'Safe, Supportive & Globally Ranked',
    phrase: 'Realise Your True Potential.',
    flag: '🇳🇿',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '8 World-Class Universities',
    tuition: 'NZD 24,000 - NZD 40,000/yr',
    workRights: 'Up to 3-Year Post-Study Visa',
    popularCourses: ['Environmental Science', 'Agribusiness', 'Software Dev', 'Hospitality', 'Data Science'],
    overview: 'All eight of New Zealand\'s universities rank in the top 3% worldwide. Known for its safety, progressive research, and natural beauty, New Zealand provides an exceptional quality of life.',
    keyFacts: [
      { label: 'Intakes', value: 'Semester 1 (February) & Semester 2 (July)' },
      { label: 'Degree Duration', value: '1 to 2 Years (Master\'s) / 3 Years (Bachelor\'s)' },
      { label: 'Part-Time Work', value: '20 Hours/Week' },
      { label: 'Post-Study Work', value: 'Up to 3-Year Post Study Work Visa' }
    ],
    topUniversities: [
      { name: 'University of Auckland', ranking: 'QS World #65', location: 'Auckland' },
      { name: 'University of Otago', ranking: 'Top 250 World', location: 'Dunedin' },
      { name: 'Victoria University of Wellington', ranking: 'Top 250 World', location: 'Wellington' },
      { name: 'University of Canterbury', ranking: 'Top 300 World', location: 'Christchurch' }
    ],
    costOfLiving: 'NZD $20,000/yr standard maintenance requirement',
    admissionRequirements: {
      ug: 'Class 12 with 75%+',
      pg: 'Bachelor\'s degree with 60%+',
      english: 'IELTS 6.5 (min 6.0) or PTE 58+',
      intakes: 'February and July'
    },
    workRightsDetail: 'International students completing a master\'s degree in New Zealand can work for up to 3 years on an open post-study work visa with spouse open work rights.',
    visaChecklist: [
      'Offer of Place from an approved New Zealand education provider',
      'Proof of paid tuition fees or evidence of loan sanction',
      'Proof of funds (NZD $20,000 per year of study)',
      'Medical and chest X-ray certificates',
      'Police clearance certificate'
    ],
    whyStudyHere: [
      'Consistently ranked among the top 3 safest and most peaceful countries in the world.',
      'Spouses of master\'s students are eligible for open work rights in New Zealand.',
      'Up to 3-year post-study work visa upon degree completion.'
    ],
    faqs: [
      {
        q: 'Can my spouse work while I study in New Zealand?',
        a: 'Yes, if you are enrolled in an eligible Level 8 (Postgraduate) or Level 9 (Master\'s) qualification, your partner can apply for an open work visa for the duration of your studies.'
      }
    ]
  },
  {
    country: 'Europe (Schengen)',
    slug: 'europe',
    headline: 'Multi-Cultural Academic Excellence',
    phrase: 'Unbounded European Horizons.',
    flag: '🇪🇺',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '500+ Partner Campuses',
    tuition: '€8,000 - €22,000/yr',
    workRights: '1–2 Years Stay Back depending on state',
    popularCourses: ['International Business', 'Renewable Energy', 'Design & Architecture', 'Fashion Management', 'Data Engineering'],
    overview: 'Study across France, Italy, Netherlands, Sweden, and Switzerland. Europe offers affordable, high-calibre programs with Schengen visa privileges allowing free travel across 29 European countries.',
    keyFacts: [
      { label: 'Key Hubs', value: 'France, Italy, Netherlands, Sweden, Poland' },
      { label: 'Degree Duration', value: '1 to 2 Years (Master\'s)' },
      { label: 'Travel Rights', value: 'Visa-Free Travel across 29 Schengen Countries' },
      { label: 'Post-Study Stay', value: '1 to 2 Years depending on member state' }
    ],
    topUniversities: [
      { name: 'Institut Polytechnique de Paris', ranking: 'QS World #46', location: 'France' },
      { name: 'Politecnico di Milano', ranking: 'QS World #111', location: 'Italy' },
      { name: 'Delft University of Technology (TU Delft)', ranking: 'QS World #49', location: 'Netherlands' },
      { name: 'KTH Royal Institute of Technology', ranking: 'QS World #73', location: 'Sweden' }
    ],
    costOfLiving: '€8,000 to €14,000/yr depending on country',
    admissionRequirements: {
      ug: 'High School Diploma with 65%+',
      pg: 'Bachelor\'s degree with 60%+',
      english: 'IELTS 6.5 or TOEFL 90+',
      intakes: 'September (Autumn) & February (Spring)'
    },
    workRightsDetail: 'European member states provide 1-2 years post-graduation residence permits (e.g. APS in France, Search Year Visa in Netherlands) to find qualified employment.',
    visaChecklist: [
      'University acceptance certificate',
      'Campus France authentication (for France)',
      'Proof of sufficient accommodation and monthly living expenses',
      'Schengen-compliant international medical insurance',
      'Passport and certified transcripts'
    ],
    whyStudyHere: [
      'Erasmus+ mobility allows you to study in 2 or more European nations during one degree.',
      'Schengen visa opens border-free travel and networking across 29 European nations.',
      'France offers a 5-year short-stay Schengen visa for Master\'s alumni.'
    ],
    faqs: [
      {
        q: 'Can I travel across Europe with my student visa?',
        a: 'Yes! A student residence permit issued by any Schengen member country allows you to travel freely throughout all 29 Schengen zone nations for tourism and networking.'
      }
    ]
  }
];

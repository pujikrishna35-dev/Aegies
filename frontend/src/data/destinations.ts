export interface DestinationUniversity {
  name: string;
  ranking: string;
  location: string;
  image: string;
  popularPrograms?: string[];
  tuition?: string;
  slug?: string;
  acceptanceRate?: string;
}

export interface RouteStep {
  stepNumber: string; // e.g. "01"
  title: string;
  shortDesc: string;
  fullDesc?: string;
  keyAction?: string;
  tip?: string;
}

export interface RoutePhase {
  phaseNumber: string; // "01", "02", "03", "04", "05"
  name: string; // "Discover", "Apply", "Secure Your Place", "Get Your Visa", "Arrive & Begin"
  subtitle: string; // "Choose & Explore", "Apply to Universities", "Get Your Offer", "Student Visa Process", "Travel & Enrolment"
  color?: string;
  steps: RouteStep[];
}

export interface CountryJourneyMap {
  totalSteps: number;
  title: string;
  subtitle: string;
  phases: RoutePhase[];
}

export interface DetailedAdmissionReq {
  undergraduate: {
    title: string;
    points: string[];
    disclaimer?: string;
  };
  postgraduate: {
    title: string;
    points: string[];
    disclaimer?: string;
  };
  englishProficiency: {
    title: string;
    points: string[];
    disclaimer?: string;
  };
}

export interface GuideChapter {
  title: string;
  summary: string;
  items: string[];
}

export interface DestinationData {
  country: string;
  slug: string;
  headline: string;
  phrase: string;
  flag: string;
  image: string;
  heroImage?: string;
  quoteAnnotation?: string;
  universitiesCount: string;
  tuition: string;
  workRights: string;
  popularCourses: string[];
  overview: string;
  keyFacts: { label: string; value: string; iconType?: string }[];
  topUniversities: DestinationUniversity[];
  allUniversities?: {
    name: string;
    city: string;
    ranking: string;
    tuition: string;
    popularCourses: string[];
    type: string;
  }[];
  costOfLiving: string;
  admissionRequirements: {
    ug: string;
    pg: string;
    english: string;
    intakes: string;
    ugPoints?: string[];
    pgPoints?: string[];
    englishPoints?: string[];
    disclaimer?: string;
  };
  workRightsDetail: string;
  visaChecklist: string[];
  journeyMap: CountryJourneyMap;
  whyStudyHere: string[];
  faqs: { q: string; a: string }[];
  guideChapters?: GuideChapter[];
}

export const DESTINATIONS: DestinationData[] = [
  {
    country: 'United Kingdom',
    slug: 'uk',
    headline: 'Tradition Inspires Tomorrow',
    phrase: 'Learn. Grow. Belong.',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
    quoteAnnotation: 'Tradition Inspires Tomorrow',
    universitiesCount: '160+',
    tuition: '£14,000 - £30,000/yr',
    workRights: '2 Years Post-Study Work',
    popularCourses: ['Computer Science', 'Data Analytics', 'Business Management', 'Law', 'Artificial Intelligence', 'Finance'],
    overview: 'World-class education, global career opportunities and a truly multicultural student experience. Home to world-renowned universities with centuries of academic prestige and cutting-edge research.',
    keyFacts: [
      { label: 'Intakes', value: 'September (Major) & January / May', iconType: 'calendar' },
      { label: 'Average Degree Length', value: "1 Year (Master's) / 3 Years (Bachelor's)", iconType: 'graduation' },
      { label: 'Part-Time Work', value: '20 Hours / Week during term', iconType: 'briefcase' },
      { label: 'Post-Study Work', value: '2 Years (3 Years for PhD) under Graduate Route', iconType: 'file' }
    ],
    topUniversities: [
      {
        name: 'University of Oxford',
        ranking: 'QS World #3',
        location: 'Oxford, England',
        image: '/images/universities/university-of-oxford.jpg',
        popularPrograms: ['Computer Science', 'Philosophy & Politics', 'Law'],
        tuition: '£33,000 - £48,000/yr',
        slug: 'university-of-oxford'
      },
      {
        name: 'Imperial College London',
        ranking: 'QS World #2',
        location: 'London, England',
        image: '/images/universities/imperial-college-london.jpg',
        popularPrograms: ['Engineering', 'Computing', 'Data Science'],
        tuition: '£36,000 - £42,000/yr',
        slug: 'imperial-college-london'
      },
      {
        name: 'University of Edinburgh',
        ranking: 'QS World #27',
        location: 'Edinburgh, Scotland',
        image: '/images/universities/university-of-edinburgh.jpg',
        popularPrograms: ['Informatics & AI', 'Business', 'Biomedical Science'],
        tuition: '£25,000 - £35,000/yr',
        slug: 'university-of-edinburgh'
      },
      {
        name: 'University of Manchester',
        ranking: 'QS World #34',
        location: 'Manchester, England',
        image: '/images/universities/university-of-manchester.jpg',
        popularPrograms: ['Computer Science', 'Aerospace Eng', 'Finance'],
        tuition: '£24,000 - £32,000/yr',
        slug: 'university-of-manchester'
      },
      {
        name: 'University of Warwick',
        ranking: 'QS World #69',
        location: 'Coventry, England',
        image: '/images/universities/university-of-warwick.jpg',
        popularPrograms: ['Management (WBS)', 'Data Analytics', 'Economics'],
        tuition: '£23,000 - £31,000/yr',
        slug: 'university-of-warwick'
      },
      {
        name: 'University of Birmingham',
        ranking: 'QS World #84',
        location: 'Birmingham, England',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
        popularPrograms: ['Advanced Computer Science', 'Mechanical', 'Biotech'],
        tuition: '£22,000 - £29,500/yr',
        slug: 'university-of-birmingham'
      },
      {
        name: 'University of Bristol',
        ranking: 'QS World #54',
        location: 'Bristol, England',
        image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=800&auto=format&fit=crop',
        popularPrograms: ['Robotics', 'Civil Engineering', 'Law'],
        tuition: '£23,500 - £31,000/yr',
        slug: 'university-of-bristol'
      },
      {
        name: 'University of Glasgow',
        ranking: 'QS World #78',
        location: 'Glasgow, Scotland',
        image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop',
        popularPrograms: ['Computing Science', 'Life Sciences', 'MBA'],
        tuition: '£22,000 - £30,000/yr',
        slug: 'university-of-glasgow'
      }
    ],
    allUniversities: [
      { name: 'University of Oxford', city: 'Oxford', ranking: 'QS #3', tuition: '£33,000 - £48,000', popularCourses: ['Computer Science', 'Law', 'Politics'], type: 'Russell Group' },
      { name: 'Imperial College London', city: 'London', ranking: 'QS #2', tuition: '£36,000 - £42,000', popularCourses: ['Engineering', 'Computing', 'Data Science'], type: 'Russell Group' },
      { name: 'University of Edinburgh', city: 'Edinburgh', ranking: 'QS #27', tuition: '£25,000 - £35,000', popularCourses: ['Informatics', 'AI', 'Business'], type: 'Russell Group' },
      { name: 'University of Manchester', city: 'Manchester', ranking: 'QS #34', tuition: '£24,000 - £32,000', popularCourses: ['Computer Science', 'Finance', 'Engineering'], type: 'Russell Group' },
      { name: 'University of Warwick', city: 'Coventry', ranking: 'QS #69', tuition: '£23,000 - £31,000', popularCourses: ['Management', 'Data Analytics', 'Economics'], type: 'Russell Group' },
      { name: 'University of Birmingham', city: 'Birmingham', ranking: 'QS #84', tuition: '£22,000 - £29,500', popularCourses: ['Computer Science', 'Biotech', 'Mechanical'], type: 'Russell Group' },
      { name: 'University of Bristol', city: 'Bristol', ranking: 'QS #54', tuition: '£23,500 - £31,000', popularCourses: ['Robotics', 'Civil Engineering', 'Law'], type: 'Russell Group' },
      { name: 'University of Glasgow', city: 'Glasgow', ranking: 'QS #78', tuition: '£22,000 - £30,000', popularCourses: ['Computing Science', 'Life Sciences', 'MBA'], type: 'Russell Group' },
      { name: 'University of Leeds', city: 'Leeds', ranking: 'QS #82', tuition: '£21,500 - £28,500', popularCourses: ['Business Analytics', 'Digital Media', 'Engineering'], type: 'Russell Group' },
      { name: 'University of Southampton', city: 'Southampton', ranking: 'QS #81', tuition: '£21,000 - £28,000', popularCourses: ['Computer Science', 'Electronics', 'Maritime Law'], type: 'Russell Group' },
      { name: 'Newcastle University', city: 'Newcastle', ranking: 'QS #110', tuition: '£20,000 - £26,500', popularCourses: ['Data Science', 'Architecture', 'Business'], type: 'Russell Group' },
      { name: 'Queen Mary University of London', city: 'London', ranking: 'QS #145', tuition: '£22,000 - £29,000', popularCourses: ['Law', 'AI', 'Commercial Management'], type: 'Russell Group' }
    ],
    costOfLiving: '£9,207 to £12,006/yr outside London; ~£15,000/yr in Inner London',
    admissionRequirements: {
      ug: "Typical: 70%+ in Class 12 (CBSE / ISC / State Board) — varies significantly by university and degree discipline.",
      pg: "Typical: 60%+ in Bachelor's degree from recognized university — course-specific criteria apply.",
      english: "IELTS 6.5 (min 6.0 each) or PTE 62+; IELTS waiver possible with 75%+ in 12th English at select universities.",
      intakes: 'September (Major Autumn) & January / May (Spring / Summer)',
      ugPoints: [
        'Typical 70% in Class 12 (CBSE / ISC / State Board) — institution-specific',
        'Subject-specific requirements vary by university (e.g. Maths for STEM)',
        'Portfolio or interview may be required for specific creative/clinical courses'
      ],
      pgPoints: [
        'Typical 60% in Bachelor’s degree from a recognized university',
        'Relevant academic background required for specialized programs',
        'Work experience may be required for specific courses (e.g. MBA / Clinical)'
      ],
      englishPoints: [
        'IELTS 6.5 (min 6.0 each) or PTE 62+ (typical baseline)',
        'IELTS waiver possible with 75%+ in 12th English at select partner institutions',
        'Other accepted evidence varies by university (Duolingo, Oxford ELLT, MOI)'
      ],
      disclaimer: 'There is no single UK-wide minimum percentage or CGPA for Indian students. Exact cut-offs, score thresholds, and waiver policies are determined individually by each university and department.'
    },
    workRightsDetail: 'Under the UK Graduate Route, international graduates can work or look for work at any skill level for 2 years (3 years for doctoral graduates) without requiring company sponsorship.',
    visaChecklist: [
      'Confirmation of Acceptance for Studies (CAS) from licensed sponsor',
      'Academic transcripts and degree certificates',
      'Valid Passport with at least 6 months validity',
      'English language test certificate or verified waiver documentation',
      'Proof of financial maintenance funds (held for continuous 28-day rule)',
      'ATAS certificate (Academic Technology Approval Scheme, if required for sensitive STEM)',
      'Tuberculosis (TB) test certificate from approved clinic',
      'Statement of Purpose and supporting documentation'
    ],
    journeyMap: {
      totalSteps: 15,
      title: 'Your Journey from India to the UK',
      subtitle: 'A complete 15-step guide from application to arrival.',
      phases: [
        {
          phaseNumber: '01',
          name: 'Discover',
          subtitle: 'Choose & Explore',
          color: '#3B82F6',
          steps: [
            {
              stepNumber: '01',
              title: 'Decide your course, intake and budget',
              shortDesc: 'Identify your target field of study, preferred intake (Sept/Jan), and realistic tuition and living cost expectations.',
              fullDesc: 'Evaluate your long-term career goals, review specialized disciplines (such as Data Science, Management, or Engineering), and set a complete financial plan including tuition fees and living maintenance.',
              keyAction: 'Draft study budget & pick target intake'
            },
            {
              stepNumber: '02',
              title: 'Shortlist universities and verify eligibility',
              shortDesc: 'Shortlist UK universities and verify academic entry percentage, course modules, and accreditation.',
              fullDesc: 'Review institutional entry criteria across Russell Group and modern universities. Note that there is no universal UK cut-off; requirements depend on your degree background and institution.',
              keyAction: 'Build a balanced shortlist of 4–6 universities'
            }
          ]
        },
        {
          phaseNumber: '02',
          name: 'Apply',
          subtitle: 'Apply to Universities',
          color: '#6366F1',
          steps: [
            {
              stepNumber: '03',
              title: 'Prepare your documents',
              shortDesc: 'Gather academic marksheets, degree certificates, academic/professional LORs, CV, and a bespoke Statement of Purpose.',
              fullDesc: 'Prepare high-quality scanned academic documents, transcripts, 2 Letters of Recommendation (LORs), an updated resume, and a compelling course-specific Statement of Purpose (SOP).',
              keyAction: 'Complete SOP & academic document dossier'
            },
            {
              stepNumber: '04',
              title: 'Meet the English-language requirement',
              shortDesc: 'Take IELTS Academic, PTE Academic, or check if eligible for a Class 12 English waiver (typically 70–75%+).',
              fullDesc: 'Most UK universities require IELTS 6.5 overall (min 6.0 in all bands) or PTE 62+. Several universities offer English waivers based on high Class 12 CBSE/ICSE English marks or Medium of Instruction (MOI).',
              keyAction: 'Secure test score or confirm waiver eligibility'
            },
            {
              stepNumber: '05',
              title: 'Submit applications',
              shortDesc: 'Submit applications through UCAS (undergraduate) or directly via university applicant portals (postgraduate).',
              fullDesc: 'Our counsellors ensure error-free online submission before priority university scholarship deadlines, tracking applicant reference numbers.',
              keyAction: 'Lodge applications and track portal status'
            },
            {
              stepNumber: '06',
              title: 'Complete assessments',
              shortDesc: 'Attend admissions interviews (credibility/faculty), submit academic portfolios, or complete written tasks if required.',
              fullDesc: 'Certain competitive disciplines or universities require a pre-CAS credibility interview or creative portfolio review. Aegis provides mock interview sessions.',
              keyAction: 'Participate in university interview or portfolio review'
            }
          ]
        },
        {
          phaseNumber: '03',
          name: 'Secure Your Place',
          subtitle: 'Get Your Offer',
          color: '#10B981',
          steps: [
            {
              stepNumber: '07',
              title: 'Review your offers',
              shortDesc: 'Review conditional and unconditional offers; compare tuition discounts, scholarship awards, and deposit deadlines.',
              fullDesc: 'Carefully examine offer conditions (e.g. final degree transcripts or English proof). Evaluate scholarship offers and fee payment terms.',
              keyAction: 'Select firm and insurance choices'
            },
            {
              stepNumber: '08',
              title: 'Accept your place',
              shortDesc: 'Firmly accept your chosen offer and pay the mandatory tuition fee deposit to reserve your university place.',
              fullDesc: 'Confirm acceptance on the university portal and transfer the required initial tuition deposit (typically £2,000 to £5,000) through an authorized payment channel.',
              keyAction: 'Transfer deposit and confirm unconditional status'
            },
            {
              stepNumber: '09',
              title: 'Arrange funding',
              shortDesc: 'Arrange education loans, personal savings, or sponsorship; ensure funds are held for the continuous 28-day rule.',
              fullDesc: 'UK Student Visa rules mandate proof of unpaid first-year tuition plus living costs (£9,207 outside London / £12,006 inside London) held continuously in your bank account for at least 28 days.',
              keyAction: 'Maintain 28-day continuous funds'
            },
            {
              stepNumber: '10',
              title: 'Complete TB testing and ATAS, if needed',
              shortDesc: 'Obtain Tuberculosis test certificate from an approved clinic; secure ATAS clearance for sensitive STEM subjects.',
              fullDesc: 'Book an appointment at an IOM-approved medical centre for chest X-ray screening. Students studying designated advanced STEM or research courses must secure ATAS clearance prior to CAS.',
              keyAction: 'Secure TB certificate and ATAS certificate'
            }
          ]
        },
        {
          phaseNumber: '04',
          name: 'Get Your Visa',
          subtitle: 'Student Visa Process',
          color: '#F59E0B',
          steps: [
            {
              stepNumber: '11',
              title: 'Obtain and check your CAS',
              shortDesc: 'Receive your Confirmation of Acceptance for Studies (CAS) and meticulously verify personal details and fee receipts.',
              fullDesc: 'The university issues a unique electronic CAS reference number. Check your passport number, course title, start/end dates, and tuition deposit balance recorded on the CAS statement.',
              keyAction: 'Thoroughly audit CAS statement details'
            },
            {
              stepNumber: '12',
              title: 'Apply for your Student visa from India',
              shortDesc: 'Submit online UKVI Student visa application, pay the Immigration Health Surcharge (IHS), and attend VFS biometrics.',
              fullDesc: 'Complete the UK visa application up to 6 months before course commencement. Pay the visa fee and mandatory IHS health surcharge, then attend your biometric appointment at VFS Global.',
              keyAction: 'Submit UKVI application and attend VFS biometric appointment'
            },
            {
              stepNumber: '13',
              title: 'Check the decision and access your eVisa',
              shortDesc: 'Receive your visa decision letter and set up your UKVI digital account to access your digital eVisa.',
              fullDesc: 'With the transition to eVisas, verify your digital immigration status via your UK Visas and Immigration (UKVI) account, and collect your passport vignette if issued.',
              keyAction: 'Verify digital eVisa status & share code'
            }
          ]
        },
        {
          phaseNumber: '05',
          name: 'Arrive & Begin',
          subtitle: 'Travel & Enrolment',
          color: '#EC4899',
          steps: [
            {
              stepNumber: '14',
              title: 'Arrange accommodation and travel',
              shortDesc: 'Finalize student accommodation (on-campus halls or PBSA), book flights, arrange Forex, and attend Aegis pre-departure.',
              fullDesc: 'Lock in student accommodation near campus, purchase student flight tickets with extra baggage allowance, exchange currency/forex card, and attend our comprehensive pre-departure briefing.',
              keyAction: 'Book accommodation, flights & travel insurance'
            },
            {
              stepNumber: '15',
              title: 'Complete enrolment in the UK',
              shortDesc: 'Arrive in the UK, complete in-person identity verification at university, collect BRP if required, and begin classes.',
              fullDesc: 'Travel through UK border control, reach your university campus during International Welcome Week, complete document registration with your CAS/eVisa, open a UK bank account, and attend induction.',
              keyAction: 'Complete on-campus enrolment and start studies'
            }
          ]
        }
      ]
    },
    whyStudyHere: [
      "Intensive 1-Year Master's degrees save significant tuition and living costs.",
      'Internationally recognized degrees backed by rigorous Quality Assurance Agency (QAA).',
      'Vibrant multicultural student cities with global networking opportunities.',
      'Generous 2-year post-study work visa (Graduate Route).'
    ],
    faqs: [
      {
        q: 'Can I get an IELTS waiver for UK universities?',
        a: 'Yes, many UK universities waive IELTS requirements if you have scored 70% or higher in English in your Class 12 exams from CBSE, ICSE, or select State boards. Requirements and waiver thresholds vary strictly by university.'
      },
      {
        q: 'How much funds do I need to show for a UK student visa?',
        a: 'Under UKVI rules, you must show unpaid tuition fees plus £9,207 for living costs outside London (or £12,006 inside London) held continuously in your bank account for at least 28 consecutive days.'
      },
      {
        q: 'Can international students work part-time in the UK?',
        a: 'Yes! International students enrolled in a degree-level course at a higher education institution are permitted to work up to 20 hours per week during term time and full-time during official vacation periods.'
      },
      {
        q: 'What are the main intakes for UK universities?',
        a: 'The primary intake is September/October (Autumn), offering the broadest range of undergraduate and postgraduate courses. A secondary intake runs in January/February (Spring), with select courses available in May.'
      },
      {
        q: 'What is a CAS and when is it issued?',
        a: 'A Confirmation of Acceptance for Studies (CAS) is an electronic reference number generated by your UK university on the UK Home Office system after you accept an unconditional offer and pay your tuition deposit.'
      }
    ],
    guideChapters: [
      {
        title: 'Cover & Why Study in the UK',
        summary: 'Overview of UK higher education, Russell Group prestige, and career benefits.',
        items: [
          'World-class academic standards governed by the Quality Assurance Agency (QAA)',
          "Accelerated 1-year Master's and 3-year Bachelor's curriculums saving total expenditure",
          'Access to Europe’s premier financial and technological capital in London and tech clusters across the country'
        ]
      },
      {
        title: 'Choosing Course & University',
        summary: 'Strategic evaluation of courses, intake timelines, and institutional focus.',
        items: [
          'Balancing Russell Group research universities with industry-focused applied institutions',
          'Evaluating September vs January entry based on graduation timelines and internship availability',
          'Course accreditation checks (BCS for IT, AACSB/AMBA for Business, IET/IMechE for Engineering)'
        ]
      },
      {
        title: 'UK Application Routes & Document Checklist',
        summary: 'Undergraduate UCAS process and direct postgraduate admissions requirements.',
        items: [
          'Certified marksheets and degree completion certificates from Class 10 onward',
          'Structured Statement of Purpose articulating academic motivation and future career trajectory',
          'Two formal academic letters of recommendation on institutional letterheads'
        ]
      },
      {
        title: 'English Requirements & Waivers',
        summary: 'Official language tests, minimum component bands, and waiver eligibility.',
        items: [
          'Standard requirements: IELTS 6.5 (min 6.0 each), PTE 62+, or equivalent',
          'Class 12 English waiver guidelines for CBSE/ICSE board students with 70–75%+ marks',
          'Alternative evidence accepted by select universities: Oxford ELLT, Duolingo, MOI'
        ]
      },
      {
        title: 'Offers, Funding & 28-Day Maintenance',
        summary: 'Navigating conditional offers, tuition deposits, and visa finance rules.',
        items: [
          'Condition clearance: Submitting final semester grades and provisional certificates',
          'Deposit payment: Safely transferring initial tuition fee via Flywire or Convera',
          '28-Day Financial Rule: Maintaining funds continuously without dropping below threshold'
        ]
      },
      {
        title: 'CAS, Student Visa & eVisa Transition',
        summary: 'Official UKVI visa lodgement, IHS health surcharge, and digital eVisa.',
        items: [
          'CAS audit: Verifying sponsor license, course qualification, and fees paid',
          'UKVI application submission, Immigration Health Surcharge payment, and VFS biometric appointment',
          'Accessing the UKVI online portal to generate digital eVisa share codes for travel and enrolment'
        ]
      },
      {
        title: 'Pre-Departure, Travel & Campus Enrolment',
        summary: 'Accommodation booking, packing checklist, airport arrival, and registration.',
        items: [
          'Securing Purpose-Built Student Accommodation (PBSA) or university residential halls',
          'Travel checklist: Forex card, international student SIM card, TB certificate, and flight arrangements',
          'On-campus registration: Presenting passport and eVisa share code during Welcome Week'
        ]
      }
    ]
  },
  {
    country: 'United States',
    slug: 'usa',
    headline: 'Innovation Meets Ambition',
    phrase: 'Dream. Study. Achieve.',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1200&auto=format&fit=crop',
    quoteAnnotation: 'Innovation Meets Ambition',
    universitiesCount: '4,000+',
    tuition: '$25,000 - $55,000/yr',
    workRights: 'Up to 3 Years STEM OPT',
    popularCourses: ['Artificial Intelligence', 'Software Engineering', 'MBA', 'Finance', 'Biotechnology', 'Data Science'],
    overview: "The world's leading destination for international students, renowned for academic flexibility, generous research funding, and unmatched industry integration with Silicon Valley and Wall Street.",
    keyFacts: [
      { label: 'Intakes', value: 'Fall (August/Sept) & Spring (January)', iconType: 'calendar' },
      { label: 'Average Degree Length', value: "2 Years (Master's) / 4 Years (Bachelor's)", iconType: 'graduation' },
      { label: 'Part-Time Work', value: '20 Hours/Week on-campus during semester', iconType: 'briefcase' },
      { label: 'Post-Study Work', value: '1 Year + 24 Month STEM OPT (3 Years Total)', iconType: 'file' }
    ],
    topUniversities: [
      {
        name: 'Massachusetts Institute of Technology (MIT)',
        ranking: 'QS World #1',
        location: 'Cambridge, MA',
        image: '/images/universities/mit.jpg',
        popularPrograms: ['Computer Science', 'AI & Machine Learning', 'Engineering'],
        tuition: '$57,000 - $62,000/yr',
        slug: 'mit'
      },
      {
        name: 'Stanford University',
        ranking: 'QS World #5',
        location: 'Stanford, CA',
        image: '/images/universities/stanford-university.jpg',
        popularPrograms: ['Computer Science', 'MBA', 'Robotics'],
        tuition: '$58,000 - $64,000/yr',
        slug: 'stanford-university'
      },
      {
        name: 'Northeastern University',
        ranking: 'Top 40 US Research',
        location: 'Boston, MA',
        image: '/images/universities/northeastern-university.jpg',
        popularPrograms: ['MS Computer Science (Co-op)', 'Data Science', 'Analytics'],
        tuition: '$34,000 - $42,000/yr',
        slug: 'northeastern-university'
      },
      {
        name: 'University of Southern California (USC)',
        ranking: 'Top 30 US',
        location: 'Los Angeles, CA',
        image: '/images/universities/university-of-southern-california.png',
        popularPrograms: ['Engineering', 'Business Analytics', 'Computer Science'],
        tuition: '$38,000 - $48,000/yr',
        slug: 'university-of-southern-california'
      },
      {
        name: 'Arizona State University (ASU)',
        ranking: '#1 Most Innovative',
        location: 'Tempe, AZ',
        image: '/images/universities/arizona-state-university.jpg',
        popularPrograms: ['Data Science & AI', 'Supply Chain Management', 'Software Eng'],
        tuition: '$31,000 - $37,000/yr',
        slug: 'arizona-state-university'
      }
    ],
    allUniversities: [
      { name: 'Massachusetts Institute of Technology', city: 'Cambridge, MA', ranking: 'QS #1', tuition: '$57,000 - $62,000', popularCourses: ['Computer Science', 'AI', 'Robotics'], type: 'Private Tier 1' },
      { name: 'Stanford University', city: 'Stanford, CA', ranking: 'QS #5', tuition: '$58,000 - $64,000', popularCourses: ['Computer Science', 'MBA', 'Electrical Eng'], type: 'Private Tier 1' },
      { name: 'Northeastern University', city: 'Boston, MA', ranking: 'Top 40 US', tuition: '$34,000 - $42,000', popularCourses: ['MS Computer Science', 'Data Analytics', 'Bioengineering'], type: 'Co-op Leader' },
      { name: 'University of Southern California', city: 'Los Angeles, CA', ranking: 'Top 30 US', tuition: '$38,000 - $48,000', popularCourses: ['Business Analytics', 'Viterbi CS', 'Cinema'], type: 'Tier 1 Research' },
      { name: 'Arizona State University', city: 'Tempe, AZ', ranking: '#1 Innovative', tuition: '$31,000 - $37,000', popularCourses: ['Data Science', 'Software Engineering', 'Supply Chain'], type: 'Public Flagship' },
      { name: 'University of Texas at Dallas', city: 'Richardson, TX', ranking: 'Top 60 Public', tuition: '$29,000 - $36,000', popularCourses: ['Computer Science', 'ITM', 'Finance'], type: 'Public Research' }
    ],
    costOfLiving: '$12,000 to $20,000/yr depending on university location and living arrangements',
    admissionRequirements: {
      ug: "Typical: Class 12 with 75%+ GPA, SAT/ACT optional at many universities; holistically assessed.",
      pg: "Typical: 4-year Bachelor's (or 3-year with bridge/WES), GPA 3.0+, GRE optional or required by department.",
      english: "TOEFL 90+, IELTS 6.5–7.0, or Duolingo 120+ depending on institutional guidelines.",
      intakes: 'Fall (August/Sept - Priority) & Spring (January)',
      ugPoints: [
        'Class 12 academic performance (typical 75%+ GPA, evaluated holistically)',
        'SAT/ACT test-optional at many universities; strong scores boost merit scholarships',
        'Holistic review: Extracurriculars, Common App essay, and teacher recommendations'
      ],
      pgPoints: [
        'Recognized 4-year Bachelor’s degree (or 3-year degree accepted with WES evaluation)',
        'Target GPA 3.0+ / 4.0 (approx 60–65%+ in Indian marks system)',
        'GRE/GMAT required for competitive programs; many institutions offer departmental waivers'
      ],
      englishPoints: [
        'TOEFL iBT 80–100+, IELTS 6.5–7.5, or Duolingo English Test 115–130+',
        'Score waivers available for applicants with instruction completed in English'
      ],
      disclaimer: 'Admissions, I-20 issuance, and visa grants are three independent decisions. Meeting university minimums does not guarantee I-20 generation or F-1 visa issuance.'
    },
    workRightsDetail: 'F-1 student visa holders can participate in Curricular Practical Training (CPT) during their degree and Optional Practical Training (OPT) for 12 months after graduation, extendable by 24 additional months for STEM graduates.',
    visaChecklist: [
      'Official Form I-20 issued by SEVP-approved US institution',
      'SEVIS I-901 fee payment receipt ($350)',
      'DS-160 online nonimmigrant visa confirmation barcode page',
      'US Visa appointment confirmation letter (VAC and Consular interview)',
      'Proof of liquid financial assets covering first-year expenses listed on I-20',
      'Academic transcripts, standardized test reports, and English proficiency proofs'
    ],
    journeyMap: {
      totalSteps: 12,
      title: 'Your Journey from India to the USA',
      subtitle: 'A complete 12-step guide from planning to campus enrolment.',
      phases: [
        {
          phaseNumber: '01',
          name: 'Plan & Research',
          subtitle: 'Academic Strategy',
          color: '#3B82F6',
          steps: [
            {
              stepNumber: '01',
              title: 'Plan your degree, intake and budget',
              shortDesc: 'Define career goals, select target degree level (MS, MBA, BS), target intake (Fall/Spring), and estimate funding needs.',
              keyAction: 'Set study timeline and budget parameters'
            },
            {
              stepNumber: '02',
              title: 'Research and shortlist universities',
              shortDesc: 'Research accredited US universities across Dream, Target, and Safe categories based on curriculum and STEM designation.',
              keyAction: 'Finalize 6–8 university targets'
            }
          ]
        },
        {
          phaseNumber: '02',
          name: 'Prepare & Apply',
          subtitle: 'Application Dossier',
          color: '#6366F1',
          steps: [
            {
              stepNumber: '03',
              title: 'Prepare standardized tests and documents',
              shortDesc: 'Sit exams (GRE/GMAT if required, TOEFL/IELTS/Duolingo); prepare evaluated transcripts, SOP, and 3 LORs.',
              keyAction: 'Complete test scores & application dossier'
            },
            {
              stepNumber: '04',
              title: 'Submit applications',
              shortDesc: 'Submit applications via university admissions portals or Common App before priority institutional deadlines.',
              keyAction: 'Lodge applications and pay review fees'
            }
          ]
        },
        {
          phaseNumber: '03',
          name: 'Select & Fund',
          subtitle: 'Offer Evaluation',
          color: '#10B981',
          steps: [
            {
              stepNumber: '05',
              title: 'Select your admission offer',
              shortDesc: 'Evaluate university admission decisions, assistantship offers (TA/RA), and tuition merit scholarships.',
              keyAction: 'Accept target university admit'
            },
            {
              stepNumber: '06',
              title: 'Arrange financial proof for I-20',
              shortDesc: 'Compile liquid bank balances, fixed deposits, and sanctioned education loan letters to prove first-year funding.',
              keyAction: 'Submit financial affidavit to university DSO'
            }
          ]
        },
        {
          phaseNumber: '04',
          name: 'I-20 & Visa',
          subtitle: 'F-1 Visa Pathway',
          color: '#F59E0B',
          steps: [
            {
              stepNumber: '07',
              title: 'Obtain official Form I-20',
              shortDesc: 'Receive your Certificate of Eligibility (Form I-20) from the university DSO and verify SEVIS ID and financial estimates.',
              keyAction: 'Audit Form I-20 details thoroughly'
            },
            {
              stepNumber: '08',
              title: 'Pay SEVIS I-901 fee',
              shortDesc: 'Pay the mandatory $350 SEVIS fee online via FMJfee.com and retain the official payment confirmation receipt.',
              keyAction: 'Pay fee and generate SEVIS receipt'
            },
            {
              stepNumber: '09',
              title: 'Complete Form DS-160',
              shortDesc: 'Fill out the online Nonimmigrant Visa Application (DS-160) accurately and save the confirmation barcode page.',
              keyAction: 'Submit DS-160 and save confirmation'
            },
            {
              stepNumber: '10',
              title: 'Attend F-1 visa interview',
              shortDesc: 'Schedule biometric appointment (VAC) and in-person F-1 visa interview at the US Embassy/Consulate.',
              keyAction: 'Complete mock interview & attend consular appointment'
            }
          ]
        },
        {
          phaseNumber: '05',
          name: 'Travel & Enrol',
          subtitle: 'Arrival in USA',
          color: '#EC4899',
          steps: [
            {
              stepNumber: '11',
              title: 'Book travel and housing',
              shortDesc: 'Book flights to arrive within 30 days before program start date, secure student housing, and obtain health insurance.',
              keyAction: 'Lock housing and flight travel'
            },
            {
              stepNumber: '12',
              title: 'Enrol on campus and begin classes',
              shortDesc: 'Pass US Port of Entry inspection, attend mandatory international student orientation, and register for courses.',
              keyAction: 'Complete I-94 check-in and begin studies'
            }
          ]
        }
      ]
    },
    whyStudyHere: [
      'Unrivaled access to global Fortune 500 tech, biotech, and finance internships.',
      '3-Year STEM OPT extension gives graduates multiple attempts at the H-1B work visa.',
      'Curriculum flexibility allowing minors, double majors, and custom interdisciplinary tracks.',
      'Extensive Graduate Assistantship (TA / RA) tuition waivers and monthly stipends.'
    ],
    faqs: [
      {
        q: 'Do I need a GRE score to study MS in the USA?',
        a: 'While many US universities now offer GRE waivers or have GRE-optional policies, submitting a strong GRE score (315–325+) substantially boosts your profile for competitive STEM admits and assistantship funding.'
      },
      {
        q: 'What is the difference between CPT and OPT?',
        a: 'Curricular Practical Training (CPT) allows off-campus internships while actively enrolled in your degree program. Optional Practical Training (OPT) provides 12 to 36 months of full-time work authorization upon graduation.'
      },
      {
        q: 'How does the F-1 visa interview work?',
        a: 'The F-1 visa interview takes 2–5 minutes with a Consular officer who assesses your academic preparedness, financial viability, and nonimmigrant intent. Aegis conducts one-on-one mock interview sessions.'
      }
    ],
    guideChapters: [
      {
        title: 'US Higher Education Overview',
        summary: 'Understanding Tier-1 research institutions, state universities, and credit systems.',
        items: ['Credit-based academic curriculum and semester system', 'STEM OPT extension opportunities', 'Research assistantships and tuition waivers']
      },
      {
        title: 'Application Preparation & Deadlines',
        summary: 'Priority Fall deadlines, transcript evaluation, SOP, and LOR criteria.',
        items: ['Transcript evaluation (WES/ECE) where required', 'Statement of Purpose and resume architecture', 'Letters of Recommendation submission']
      },
      {
        title: 'Form I-20, SEVIS & F-1 Visa Guide',
        summary: 'Step-by-step guidance through SEVIS fee, DS-160, and Consular interview prep.',
        items: ['Form I-20 financial verification', 'SEVIS I-901 payment protocol', 'Consular interview preparation and financial proofs']
      }
    ]
  },
  {
    country: 'Canada',
    slug: 'canada',
    headline: 'Welcoming Culture & World-Class Degrees',
    phrase: 'Opportunities Await.',
    flag: '🇨🇦',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1200&auto=format&fit=crop',
    quoteAnnotation: 'Welcoming Culture & World-Class Degrees',
    universitiesCount: '100+',
    tuition: 'CAD 18,000 - CAD 38,000/yr',
    workRights: 'Up to 3 Years PGWP',
    popularCourses: ['Cloud Computing', 'Data Science', 'Business Administration', 'Biotechnology', 'Mechanical Engineering'],
    overview: "Globally top-tier education with safe, welcoming communities and one of the world's most transparent post-graduation work and immigration pathways.",
    keyFacts: [
      { label: 'Intakes', value: 'Fall (Sept), Winter (Jan) & Summer (May)', iconType: 'calendar' },
      { label: 'Average Degree Length', value: "1 to 2 Years (Master's/PGD) / 4 Years (UG)", iconType: 'graduation' },
      { label: 'Part-Time Work', value: '20 Hours/Week during academic terms', iconType: 'briefcase' },
      { label: 'Post-Study Work', value: 'Up to 3-Year Post-Graduation Work Permit (PGWP)', iconType: 'file' }
    ],
    topUniversities: [
      {
        name: 'University of Toronto',
        ranking: 'QS World #25',
        location: 'Toronto, Ontario',
        image: '/images/universities/university-of-toronto.jpg',
        popularPrograms: ['Computer Science', 'Rotman MBA', 'Data Analytics'],
        tuition: 'CAD 38,000 - CAD 58,000/yr',
        slug: 'university-of-toronto'
      },
      {
        name: 'McGill University',
        ranking: 'QS World #29',
        location: 'Montreal, Quebec',
        image: '/images/universities/mcgill-university.jpg',
        popularPrograms: ['Biomedical Sciences', 'Software Eng', 'Management'],
        tuition: 'CAD 28,000 - CAD 45,000/yr',
        slug: 'mcgill-university'
      },
      {
        name: 'University of British Columbia',
        ranking: 'QS World #38',
        location: 'Vancouver, BC',
        image: '/images/universities/university-of-british-columbia.jpg',
        popularPrograms: ['Data Science', 'Forestry & Sustainability', 'Business'],
        tuition: 'CAD 32,000 - CAD 48,000/yr',
        slug: 'university-of-british-columbia'
      },
      {
        name: 'University of Waterloo',
        ranking: 'Top Tech & Co-op',
        location: 'Waterloo, Ontario',
        image: '/images/universities/university-of-waterloo.jpg',
        popularPrograms: ['Computer Science', 'Electrical Eng (Co-op)', 'Mathematics'],
        tuition: 'CAD 30,000 - CAD 46,000/yr',
        slug: 'university-of-waterloo'
      },
      {
        name: 'McMaster University',
        ranking: 'Top 100 World',
        location: 'Hamilton, Ontario',
        image: '/images/universities/mcmaster-university.jpg',
        popularPrograms: ['Engineering', 'Health Sciences', 'DeGroote MBA'],
        tuition: 'CAD 28,000 - CAD 42,000/yr',
        slug: 'mcmaster-university'
      }
    ],
    allUniversities: [
      { name: 'University of Toronto', city: 'Toronto, ON', ranking: 'QS #25', tuition: 'CAD 38,000 - CAD 58,000', popularCourses: ['Computer Science', 'Rotman MBA', 'Data Analytics'], type: 'U15 Research' },
      { name: 'McGill University', city: 'Montreal, QC', ranking: 'QS #29', tuition: 'CAD 28,000 - CAD 45,000', popularCourses: ['Biomedical Sciences', 'Software Eng', 'Management'], type: 'U15 Research' },
      { name: 'University of British Columbia', city: 'Vancouver, BC', ranking: 'QS #38', tuition: 'CAD 32,000 - CAD 48,000', popularCourses: ['Data Science', 'Sustainability', 'Business'], type: 'U15 Research' },
      { name: 'University of Waterloo', city: 'Waterloo, ON', ranking: 'Top Tech', tuition: 'CAD 30,000 - CAD 46,000', popularCourses: ['Computer Science', 'Co-op Engineering', 'Math'], type: 'Tech Leader' },
      { name: 'McMaster University', city: 'Hamilton, ON', ranking: 'Top 100 World', tuition: 'CAD 28,000 - CAD 42,000', popularCourses: ['Engineering', 'Health Sciences', 'Management'], type: 'U15 Research' }
    ],
    costOfLiving: 'CAD 20,635/yr (as required by IRCC Guaranteed Investment Certificate - GIC)',
    admissionRequirements: {
      ug: 'Typical: Class 12 with 70%+ overall and relevant subject prerequisites (Maths for STEM/Business).',
      pg: "Typical: 4-year Bachelor's degree or 3-year + Master's, minimum 65%–75% depending on faculty.",
      english: 'IELTS Academic 6.5 (no band < 6.0) or PTE Academic 60+; institution-specific thresholds apply.',
      intakes: 'September (Fall) & January (Winter)',
      ugPoints: [
        'Class 12 diploma with typical 70%+ aggregate',
        'Specific grade requirements in core subjects (Mathematics for STEM & Business)',
        'Institution and faculty-specific guidelines apply'
      ],
      pgPoints: [
        'Recognized 4-year Bachelor’s or 3-year degree + 2-year Master’s',
        'Minimum academic aggregate typically 65%–75%+',
        'Relevant academic background or work experience required for PGD/Master’s'
      ],
      englishPoints: [
        'IELTS Academic 6.5 with no band under 6.0',
        'PTE Academic 60+ (institution-dependent)',
        'Check university requirements for Duolingo or waiver policies'
      ],
      disclaimer: 'Study permits and travel visas are not the same document. Admission from a DLI does not guarantee study permit issuance by IRCC.'
    },
    workRightsDetail: 'Graduates from designated learning institutions (DLI) pursuing programs of 2 years or longer can qualify for a 3-year Post-Graduation Work Permit (PGWP) with open work authorization.',
    visaChecklist: [
      'Provincial Attestation Letter (PAL) or Territorial Attestation Letter (TAL) where applicable',
      'Official Letter of Acceptance (LOA) from a Designated Learning Institution (DLI)',
      'Guaranteed Investment Certificate (GIC) of CAD $20,635 from approved Canadian bank',
      'Proof of upfront first-year tuition payment receipt',
      'Upfront Immigration Medical Examination (IME) report from IRCC panel physician',
      'Clean Police Clearance Certificate (PCC) and biometrics collection'
    ],
    journeyMap: {
      totalSteps: 15,
      title: 'Your Journey from India to Canada',
      subtitle: 'A complete 15-step guide from planning to border entry and enrolment.',
      phases: [
        {
          phaseNumber: '01',
          name: 'Plan & Verify',
          subtitle: 'Program & Institution Check',
          color: '#3B82F6',
          steps: [
            {
              stepNumber: '01',
              title: 'Plan course, credential and budget',
              shortDesc: 'Choose your academic credential (Degree / Post-Graduate Certificate), target intake, and budget.',
              keyAction: 'Select field and establish total budget'
            },
            {
              stepNumber: '02',
              title: 'Verify DLI and PGWP eligibility',
              shortDesc: 'Verify that target institution is a Designated Learning Institution (DLI) with PGWP-eligible programs.',
              keyAction: 'Confirm DLI number and PGWP status'
            }
          ]
        },
        {
          phaseNumber: '02',
          name: 'Prepare & Apply',
          subtitle: 'College/University Lodgement',
          color: '#6366F1',
          steps: [
            {
              stepNumber: '03',
              title: 'Prepare academic dossier',
              shortDesc: 'Gather transcripts, take IELTS Academic or PTE, draft Statement of Purpose, and obtain work letters.',
              keyAction: 'Assemble complete application file'
            },
            {
              stepNumber: '04',
              title: 'Submit DLI application',
              shortDesc: 'Lodge application to Canadian institution before deadlines and track student portal.',
              keyAction: 'Submit application to DLI'
            }
          ]
        },
        {
          phaseNumber: '03',
          name: 'LOA & PAL/TAL',
          subtitle: 'Official Acceptance & Attestation',
          color: '#10B981',
          steps: [
            {
              stepNumber: '05',
              title: 'Accept admission offer',
              shortDesc: 'Review conditional/unconditional offer of admission and confirm acceptance terms.',
              keyAction: 'Accept offer letter'
            },
            {
              stepNumber: '06',
              title: 'Pay tuition and secure final LOA',
              shortDesc: 'Pay initial/first-year tuition fee to receive the final Official Letter of Acceptance (LOA).',
              keyAction: 'Transfer tuition & obtain official LOA'
            },
            {
              stepNumber: '07',
              title: 'Obtain PAL / TAL (where applicable)',
              shortDesc: 'Obtain Provincial Attestation Letter (PAL) from province through your institution where required.',
              keyAction: 'Secure PAL/TAL documentation'
            }
          ]
        },
        {
          phaseNumber: '04',
          name: 'Funds & Study Permit',
          subtitle: 'IRCC Permit Filing',
          color: '#F59E0B',
          steps: [
            {
              stepNumber: '08',
              title: 'Purchase GIC certificate',
              shortDesc: 'Open Canadian bank account and deposit CAD $20,635 to receive official GIC certificate.',
              keyAction: 'Obtain GIC certificate from CIBC/Scotiabank'
            },
            {
              stepNumber: '09',
              title: 'Complete medical exam (IME)',
              shortDesc: 'Undergo upfront medical screening with an IRCC panel physician and obtain eMedical sheet.',
              keyAction: 'Complete upfront medical exam'
            },
            {
              stepNumber: '10',
              title: 'Apply for Study Permit online',
              shortDesc: 'Submit Study Permit application on IRCC portal with LOA, PAL, GIC, and tuition receipts.',
              keyAction: 'Lodge IRCC Study Permit application'
            },
            {
              stepNumber: '11',
              title: 'Complete biometrics at VFS',
              shortDesc: 'Book and attend biometric appointment (fingerprints & photo) at VFS Global centre.',
              keyAction: 'Submit biometrics at VFS'
            },
            {
              stepNumber: '12',
              title: 'Receive decision & POE Letter',
              shortDesc: 'Submit passport upon PPR (Passport Request) and receive Port of Entry (POE) Introduction Letter.',
              keyAction: 'Collect stamped visa and POE letter'
            }
          ]
        },
        {
          phaseNumber: '05',
          name: 'Travel & Enrol',
          subtitle: 'Port of Entry & Campus',
          color: '#EC4899',
          steps: [
            {
              stepNumber: '13',
              title: 'Book flights and student housing',
              shortDesc: 'Book flight travel, secure Canadian student accommodation, and finalize travel insurance.',
              keyAction: 'Arrange flight and accommodation'
            },
            {
              stepNumber: '14',
              title: 'Present documents at border',
              shortDesc: 'Present POE Letter, LOA, PAL, and proof of funds to CBSA border officer to issue physical Study Permit.',
              keyAction: 'Receive physical Study Permit at border'
            },
            {
              stepNumber: '15',
              title: 'Enrol on campus & obtain SIN',
              shortDesc: 'Attend campus orientation, obtain Social Insurance Number (SIN) for part-time work, and commence studies.',
              keyAction: 'Complete campus registration & get SIN'
            }
          ]
        }
      ]
    },
    whyStudyHere: [
      'High standard of living in world-renowned safe, clean student cities.',
      'Co-op work terms integrated into academic programs providing paid Canadian work experience.',
      'Direct immigration points awarded under Express Entry Canadian Experience Class (CEC).'
    ],
    faqs: [
      {
        q: 'What is a Provincial Attestation Letter (PAL)?',
        a: 'A PAL is a document issued by provincial governments in Canada to institutions, confirming that the student falls within the federal study permit allocation cap. It is required for most post-secondary study permit applications.'
      },
      {
        q: 'What is the Guaranteed Investment Certificate (GIC)?',
        a: 'The GIC is a mandatory Canadian investment account of CAD $20,635 opened with an approved bank that disburses monthly living funds upon arrival in Canada.'
      },
      {
        q: 'Is a study permit the same as a visa?',
        a: 'No. A study permit allows you to study in Canada, while a Temporary Resident Visa (TRV) or eTA allows you to enter the country. IRCC issues both upon approval of your study permit application.'
      }
    ]
  },
  {
    country: 'Australia',
    slug: 'australia',
    headline: 'High Standard of Living & Global Recognition',
    phrase: 'A World of Discovery.',
    flag: '🇦🇺',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop',
    quoteAnnotation: 'High Standard of Living & Global Recognition',
    universitiesCount: '43+',
    tuition: 'AUD 22,000 - AUD 45,000/yr',
    workRights: '2–4 Years Post-Study Work',
    popularCourses: ['Information Technology', 'Civil Engineering', 'Accounting', 'Nursing', 'Cybersecurity', 'Public Health'],
    overview: 'Australia boasts 7 of the world’s top 100 universities, breathtaking cities, and an exceptional lifestyle. Australian qualifications are recognized globally and held in high esteem by international employers.',
    keyFacts: [
      { label: 'Intakes', value: 'Semester 1 (Feb/March) & Semester 2 (July/Aug)', iconType: 'calendar' },
      { label: 'Average Degree Length', value: "1.5 - 2 Years (Master's) / 3 Years (Bachelor's)", iconType: 'graduation' },
      { label: 'Part-Time Work', value: '48 Hours per Fortnight during semester', iconType: 'briefcase' },
      { label: 'Post-Study Work', value: '2 to 4 Years (Subclass 485 Temporary Graduate Visa)', iconType: 'file' }
    ],
    topUniversities: [
      {
        name: 'University of Melbourne',
        ranking: 'QS World #13',
        location: 'Melbourne, VIC',
        image: '/images/universities/university-of-melbourne.png',
        popularPrograms: ['IT & Software', 'Finance', 'Biomedical Science'],
        tuition: 'AUD 38,000 - AUD 48,000/yr',
        slug: 'university-of-melbourne'
      },
      {
        name: 'The University of Sydney',
        ranking: 'QS World #18',
        location: 'Sydney, NSW',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop',
        popularPrograms: ['Data Science', 'Project Management', 'Law'],
        tuition: 'AUD 40,000 - AUD 50,000/yr',
        slug: 'university-of-sydney'
      },
      {
        name: 'UNSW Sydney',
        ranking: 'QS World #19',
        location: 'Sydney, NSW',
        image: '/images/universities/unsw-sydney.jpg',
        popularPrograms: ['Engineering', 'IT', 'AGSM MBA'],
        tuition: 'AUD 39,000 - AUD 49,000/yr',
        slug: 'unsw-sydney'
      },
      {
        name: 'Australian National University (ANU)',
        ranking: 'QS World #30',
        location: 'Canberra, ACT',
        image: '/images/universities/australian-national-university.png',
        popularPrograms: ['Computing', 'Public Policy', 'Natural Sciences'],
        tuition: 'AUD 36,000 - AUD 46,000/yr',
        slug: 'anu'
      },
      {
        name: 'Monash University',
        ranking: 'QS World #37',
        location: 'Melbourne, VIC',
        image: '/images/universities/monash-university.png',
        popularPrograms: ['Pharmacy', 'Banking & Finance', 'AI'],
        tuition: 'AUD 37,000 - AUD 47,000/yr',
        slug: 'monash-university'
      }
    ],
    allUniversities: [
      { name: 'University of Melbourne', city: 'Melbourne, VIC', ranking: 'QS #13', tuition: 'AUD 38,000 - AUD 48,000', popularCourses: ['IT', 'Finance', 'Biomedical Science'], type: 'Group of Eight' },
      { name: 'The University of Sydney', city: 'Sydney, NSW', ranking: 'QS #18', tuition: 'AUD 40,000 - AUD 50,000', popularCourses: ['Data Science', 'Project Management', 'Law'], type: 'Group of Eight' },
      { name: 'UNSW Sydney', city: 'Sydney, NSW', ranking: 'QS #19', tuition: 'AUD 39,000 - AUD 49,000', popularCourses: ['Engineering', 'IT', 'Business'], type: 'Group of Eight' },
      { name: 'Australian National University', city: 'Canberra, ACT', ranking: 'QS #30', tuition: 'AUD 36,000 - AUD 46,000', popularCourses: ['Computing', 'Public Policy', 'Science'], type: 'Group of Eight' },
      { name: 'Monash University', city: 'Melbourne, VIC', ranking: 'QS #37', tuition: 'AUD 37,000 - AUD 47,000', popularCourses: ['Pharmacy', 'Banking & Finance', 'AI'], type: 'Group of Eight' }
    ],
    costOfLiving: 'AUD $24,505/yr standard living allowance required by Australian Department of Home Affairs',
    admissionRequirements: {
      ug: 'Typical: Class 12 with 65%–80% depending on university, faculty and board.',
      pg: "Typical: Recognized Bachelor's degree with 60%+ marks; discipline-specific prerequisites.",
      english: 'IELTS 6.5 (min 6.0) or PTE 58–65+; check provider specific criteria.',
      intakes: 'February (Semester 1) & July (Semester 2)',
      ugPoints: [
        'Class 12 aggregate 65%–80% depending on faculty and university tier',
        'Mathematics or science prerequisites required for engineering and computing',
        'Genuine Student (GS) assessment criteria applies to all applicants'
      ],
      pgPoints: [
        'Recognized undergraduate degree with minimum 60% aggregate',
        'Discipline background required for specialized technical masters',
        'Work experience required for specialized MBA/clinical degrees'
      ],
      englishPoints: [
        'IELTS Academic 6.5 with min 6.0 in all bands or PTE Academic 58–65+',
        'Institution-specific minimum score variations apply'
      ],
      disclaimer: 'Offer Letter, Confirmation of Enrolment (CoE), and Subclass 500 visa grant are three distinct stages. Receiving an offer letter does not guarantee visa approval.'
    },
    workRightsDetail: 'Under the Subclass 485 Temporary Graduate Visa, students completing an eligible bachelor’s or master’s program can work full-time in Australia for 2 to 4 years, with additional regional stay incentives.',
    visaChecklist: [
      'Electronic Confirmation of Enrolment (eCoE) issued by CRICOS provider',
      'Genuine Student (GS) statement of purpose demonstrating academic intention',
      'Overseas Student Health Cover (OSHC) policy for full study duration',
      'Financial capacity documentation (bank deposits or education loan sanction)',
      'Subclass 500 online visa lodgement via ImmiAccount',
      'Biometrics collection and health examination at panel clinic'
    ],
    journeyMap: {
      totalSteps: 10,
      title: 'Your Journey from India to Australia',
      subtitle: 'A complete 10-step guide from planning to campus enrolment.',
      phases: [
        {
          phaseNumber: '01',
          name: 'Plan & Verify',
          subtitle: 'Course & Provider Choice',
          color: '#3B82F6',
          steps: [
            {
              stepNumber: '01',
              title: 'Plan course, provider and intake',
              shortDesc: 'Choose course, CRICOS-registered provider, and intake (Feb Semester 1 or July Semester 2).',
              keyAction: 'Select study field & CRICOS provider'
            },
            {
              stepNumber: '02',
              title: 'Verify entry criteria and GS rules',
              shortDesc: 'Verify academic entry marks, prerequisite courses, and Genuine Student (GS) criteria.',
              keyAction: 'Check entry & GS guidelines'
            }
          ]
        },
        {
          phaseNumber: '02',
          name: 'Prepare & Apply',
          subtitle: 'Application Lodgement',
          color: '#6366F1',
          steps: [
            {
              stepNumber: '03',
              title: 'Prepare transcripts and English test',
              shortDesc: 'Collate certified academic transcripts, sit IELTS/PTE Academic, and draft GS statement.',
              keyAction: 'Prepare documents & GS draft'
            },
            {
              stepNumber: '04',
              title: 'Submit application to university',
              shortDesc: 'Submit application directly or via Aegis authorized representative to CRICOS provider.',
              keyAction: 'Submit university application'
            }
          ]
        },
        {
          phaseNumber: '03',
          name: 'Offer & CoE',
          subtitle: 'Enrolment Confirmation',
          color: '#10B981',
          steps: [
            {
              stepNumber: '05',
              title: 'Accept Letter of Offer',
              shortDesc: 'Receive conditional/unconditional Offer Letter, review conditions, and sign acceptance form.',
              keyAction: 'Sign and submit offer acceptance'
            },
            {
              stepNumber: '06',
              title: 'Pay deposit and obtain CoE',
              shortDesc: 'Pay initial tuition deposit to university to generate electronic Confirmation of Enrolment (eCoE).',
              keyAction: 'Receive electronic CoE'
            }
          ]
        },
        {
          phaseNumber: '04',
          name: 'OSHC & Visa',
          subtitle: 'Subclass 500 Visa Filing',
          color: '#F59E0B',
          steps: [
            {
              stepNumber: '07',
              title: 'Purchase OSHC and compile funds',
              shortDesc: 'Purchase Overseas Student Health Cover (OSHC) and organize verified financial proof.',
              keyAction: 'Obtain OSHC policy & financial dossier'
            },
            {
              stepNumber: '08',
              title: 'Lodge Student Visa (Subclass 500)',
              shortDesc: 'Submit visa application online via ImmiAccount attaching eCoE, GS statement, OSHC, and financial evidence.',
              keyAction: 'Lodge ImmiAccount subclass 500 visa'
            },
            {
              stepNumber: '09',
              title: 'Complete biometrics and medical exam',
              shortDesc: 'Attend biometric appointment at VFS Global and undergo health examination with panel doctor.',
              keyAction: 'Complete biometrics & health check'
            }
          ]
        },
        {
          phaseNumber: '05',
          name: 'Travel & Enrol',
          subtitle: 'Arrival & Enrolment',
          color: '#EC4899',
          steps: [
            {
              stepNumber: '10',
              title: 'Receive visa grant, travel & enrol',
              shortDesc: 'Receive Visa Grant Notice (VGN), book flights, arrange student accommodation, and enrol on campus.',
              keyAction: 'Travel to Australia and begin classes'
            }
          ]
        }
      ]
    },
    whyStudyHere: [
      'Home to the prestigious Group of Eight (Go8) research-intensive universities.',
      'High minimum hourly wages for part-time student employment (~AUD $23.23/hr).',
      'Regional study migration pathways offering up to 4 years post-study stay.'
    ],
    faqs: [
      {
        q: 'What is the Genuine Student (GS) requirement for Australia?',
        a: 'The GS requirement assesses whether an applicant genuinely intends to obtain a quality Australian education and understands how the degree connects to their future career prospects back home.'
      },
      {
        q: 'What is a CoE?',
        a: 'The Confirmation of Enrolment (CoE) is an official document issued by your Australian institution confirming you have accepted an offer and paid your tuition deposit. It is required to apply for the Subclass 500 student visa.'
      }
    ]
  },
  {
    country: 'Germany',
    slug: 'germany',
    headline: 'Engineering Powerhouse of Europe',
    phrase: 'Engineered for a Better Future.',
    flag: '🇩🇪',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop',
    quoteAnnotation: 'Engineering Powerhouse of Europe',
    universitiesCount: '380+',
    tuition: 'Zero or Low Tuition (€500–€3,000/yr)',
    workRights: '18-Month Jobseeker Visa',
    popularCourses: ['Automotive Engineering', 'Mechanical & Robotics', 'Informatics', 'Renewable Energy', 'Data Science'],
    overview: 'Tuition-free or low-cost education at prestigious public universities with world-leading industrial research partnerships.',
    keyFacts: [
      { label: 'Intakes', value: 'Winter (October - Major) & Summer (April)', iconType: 'calendar' },
      { label: 'Average Degree Length', value: "1.5 - 2 Years (Master's) / 3 Years (Bachelor's)", iconType: 'graduation' },
      { label: 'Part-Time Work', value: '140 Full Days or 280 Half Days per calendar year', iconType: 'briefcase' },
      { label: 'Post-Study Work', value: '18 Months Post-Graduation Work Search Visa', iconType: 'file' }
    ],
    topUniversities: [
      {
        name: 'Technical University of Munich (TUM)',
        ranking: 'QS World #28',
        location: 'Munich, Bavaria',
        image: '/images/universities/tum.jpg',
        popularPrograms: ['Informatics', 'Automotive Engineering', 'Robotics'],
        tuition: 'Zero / Nominal admin fee (€150/sem)',
        slug: 'tum'
      },
      {
        name: 'LMU Munich',
        ranking: 'QS World #59',
        location: 'Munich, Bavaria',
        image: '/images/universities/lmu-munich.jpg',
        popularPrograms: ['Data Science', 'Economics', 'Life Sciences'],
        tuition: 'Zero tuition (nominal semester fee)',
        slug: 'lmu-munich'
      },
      {
        name: 'Heidelberg University',
        ranking: 'QS World #84',
        location: 'Heidelberg, Baden-Württemberg',
        image: '/images/universities/heidelberg-university.jpg',
        popularPrograms: ['Scientific Computing', 'Physics', 'Biomedical'],
        tuition: '€1,500/sem for non-EU students',
        slug: 'heidelberg-university'
      },
      {
        name: 'RWTH Aachen University',
        ranking: 'Top Engineering World',
        location: 'Aachen, NRW',
        image: '/images/universities/rwth-aachen.jpg',
        popularPrograms: ['Mechanical Engineering', 'Production Eng', 'Automated Systems'],
        tuition: 'Zero tuition (€300 semester ticket)',
        slug: 'rwth-aachen'
      },
      {
        name: 'Technical University of Berlin (TU Berlin)',
        ranking: 'Top STEM EU',
        location: 'Berlin',
        image: '/images/universities/tu-berlin.png',
        popularPrograms: ['Computer Science', 'Renewable Energy', 'Architecture'],
        tuition: 'Zero tuition',
        slug: 'tu-berlin'
      }
    ],
    allUniversities: [
      { name: 'Technical University of Munich (TUM)', city: 'Munich', ranking: 'QS #28', tuition: 'Zero / Nominal admin fee', popularCourses: ['Informatics', 'Automotive', 'Robotics'], type: 'TU9 Research' },
      { name: 'LMU Munich', city: 'Munich', ranking: 'QS #59', tuition: 'Zero tuition', popularCourses: ['Data Science', 'Economics', 'Life Sciences'], type: 'Excellence Uni' },
      { name: 'Heidelberg University', city: 'Heidelberg', ranking: 'QS #84', tuition: '€1,500/sem (non-EU)', popularCourses: ['Scientific Computing', 'Physics', 'Biomedical'], type: 'Excellence Uni' },
      { name: 'RWTH Aachen University', city: 'Aachen', ranking: 'Top Engineering', tuition: 'Zero tuition', popularCourses: ['Mechanical Eng', 'Production', 'Automation'], type: 'TU9 Research' },
      { name: 'TU Berlin', city: 'Berlin', ranking: 'Top STEM', tuition: 'Zero tuition', popularCourses: ['Computer Science', 'Renewable Energy', 'Architecture'], type: 'TU9 Research' }
    ],
    costOfLiving: '€11,208/yr required in an official German Blocked Account (Sperrkonto)',
    admissionRequirements: {
      ug: '12 years schooling + 1 year Studienkolleg / 1 year Indian Bachelor’s / JEE Advanced rank.',
      pg: 'Strict ECTS subject-credit matching with undergraduate engineering degree, typical 70%+ aggregate.',
      english: 'IELTS 6.5+ or TOEFL 90+ for English-taught master’s programs.',
      intakes: 'Winter (Deadline: July 15) & Summer (Deadline: January 15)',
      ugPoints: [
        'Direct entry requires 12 years schooling + 1 year recognized higher education or Studienkolleg',
        'Valid Feststellungsprüfung (FSP) or JEE Advanced qualification',
        'APS Certificate mandatory for Indian applicants'
      ],
      pgPoints: [
        'Recognized 4-year Bachelor’s degree in closely matching discipline',
        'Strict ECTS subject-credit matching in core mathematical and engineering modules',
        'Typical 70%+ / 2.5 German grade scale equivalent'
      ],
      englishPoints: [
        'IELTS 6.5+ or TOEFL 90+ for English-taught master’s programs',
        'Conversational German (A1/A2) strongly recommended for internships and daily living'
      ],
      disclaimer: 'APS Certificate verification, VPD/uni-assist evaluation, university admission (Zulassungsbescheid), and national visa issuance are sequential, separate steps.'
    },
    workRightsDetail: 'Graduates receive an 18-month Jobseeker residence permit to find a role matching their qualification. Once employed, they can switch to the EU Blue Card leading to fast-track permanent residency in 21-27 months.',
    visaChecklist: [
      'Akademische Prüfstelle (APS) India Certificate (Mandatory for Indian students)',
      'University admission letter (Zulassungsbescheid) or conditional admission',
      'Proof of blocked account (~€934/month for 12 months = €11,208) via Expatrio or Coracle',
      'Statutory German public student health insurance (TK / Barmer / DAK)',
      'Europass CV and Letter of Motivation (Motivationsschreiben)',
      'Certified translations of academic degrees and marks lists'
    ],
    journeyMap: {
      totalSteps: 10,
      title: 'Your Journey from India to Germany',
      subtitle: 'A complete 10-step guide from APS verification to German residence registration.',
      phases: [
        {
          phaseNumber: '01',
          name: 'Plan & Check Entry',
          subtitle: 'Eligibility & VPD Verification',
          color: '#3B82F6',
          steps: [
            {
              stepNumber: '01',
              title: 'Plan course, language and intake',
              shortDesc: 'Choose university (TU9 / Applied Sciences), curriculum language (English/German), and target intake.',
              keyAction: 'Select course & check language track'
            },
            {
              stepNumber: '02',
              title: 'Verify entry qualification (HZB / VPD)',
              shortDesc: 'Check higher education entrance qualification; determine whether uni-assist or preliminary evaluation (VPD) applies.',
              keyAction: 'Check HZB on anabin database'
            }
          ]
        },
        {
          phaseNumber: '02',
          name: 'Prepare & APS',
          subtitle: 'Mandatory APS Certification',
          color: '#6366F1',
          steps: [
            {
              stepNumber: '03',
              title: 'Prepare academic dossier & Europass CV',
              shortDesc: 'Prepare certified English translations, Europass CV, and academic Statement of Motivation.',
              keyAction: 'Draft Europass CV & Motivation letter'
            },
            {
              stepNumber: '04',
              title: 'Apply for and obtain APS Certificate',
              shortDesc: 'Apply for mandatory Akademische Prüfstelle (APS) India verification certificate early.',
              keyAction: 'Submit APS verification dossier'
            }
          ]
        },
        {
          phaseNumber: '03',
          name: 'Apply & Admission',
          subtitle: 'University Zulassung',
          color: '#10B981',
          steps: [
            {
              stepNumber: '05',
              title: 'Submit application via uni-assist / portal',
              shortDesc: 'Submit application through uni-assist or directly to university admissions portal before July 15 (Winter) / Jan 15 (Summer).',
              keyAction: 'Lodge applications before deadlines'
            },
            {
              stepNumber: '06',
              title: 'Receive admission letter (Zulassungsbescheid)',
              shortDesc: 'Receive official admission letter (Zulassungsbescheid) and confirm your acceptance.',
              keyAction: 'Accept Zulassung admission letter'
            }
          ]
        },
        {
          phaseNumber: '04',
          name: 'Blocked Account & Visa',
          subtitle: 'German National Visa',
          color: '#F59E0B',
          steps: [
            {
              stepNumber: '07',
              title: 'Open Blocked Account & Health Insurance',
              shortDesc: 'Open German Blocked Account (Sperrkonto with ~€11,208) and arrange statutory student health insurance (TK/Barmer).',
              keyAction: 'Fund blocked account & activate insurance'
            },
            {
              stepNumber: '08',
              title: 'Apply for German National Visa (Type D)',
              shortDesc: 'Book visa appointment at VFS / German Mission and submit visa documents with APS, Zulassung, and blocked account proof.',
              keyAction: 'Attend visa appointment at VFS/Consulate'
            }
          ]
        },
        {
          phaseNumber: '05',
          name: 'Travel & Settle',
          subtitle: 'Anmeldung & Matriculation',
          color: '#EC4899',
          steps: [
            {
              stepNumber: '09',
              title: 'Travel and move into accommodation',
              shortDesc: 'Fly to Germany, reach student city, and check into student dormitory or flatshare (WG).',
              keyAction: 'Travel and move into residence'
            },
            {
              stepNumber: '10',
              title: 'Complete Anmeldung & matriculation',
              shortDesc: 'Complete City Registration (Anmeldung) at Bürgeramt, complete university matriculation, and obtain residence permit.',
              keyAction: 'Complete city registration & get residence permit'
            }
          ]
        }
      ]
    },
    whyStudyHere: [
      'Almost zero tuition fees at public universities saves upwards of €30,000.',
      'Close industry integration with BMW, Siemens, Bosch, SAP, and Mercedes-Benz.',
      'Fastest EU Blue Card permanent residency pathway in Europe.'
    ],
    faqs: [
      {
        q: 'What is the APS Certificate for Germany?',
        a: 'The APS (Akademische Prüfstelle) certificate is a mandatory document issued by the German Embassy in New Delhi that verifies the authenticity of Indian academic records before you can submit university applications or apply for a student visa.'
      },
      {
        q: 'Do I need German to study an English-taught master’s?',
        a: 'No, over 1,500 Master’s programs in Germany are taught 100% in English. However, conversational German (A1/A2) is very valuable for part-time student jobs and internships.'
      }
    ]
  },
  {
    country: 'Ireland',
    slug: 'ireland',
    headline: 'The Silicon Valley of Europe',
    phrase: 'More Than a Degree.',
    flag: '🇮🇪',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1200&auto=format&fit=crop',
    quoteAnnotation: 'The Silicon Valley of Europe',
    universitiesCount: '30+',
    tuition: '€12,000 - €26,000/yr',
    workRights: '2-Year Third Level Graduate Visa',
    popularCourses: ['Pharmaceuticals', 'Cybersecurity', 'Financial Tech', 'Data Analytics', 'Cloud Architecture'],
    overview: 'Europe’s premier technology and pharmaceuticals hub, hosting the European headquarters of Google, Apple, Meta, Pfizer, and Microsoft in Dublin’s vibrant Silicon Docks.',
    keyFacts: [
      { label: 'Intakes', value: 'Autumn (September) & Spring (January)', iconType: 'calendar' },
      { label: 'Average Degree Length', value: "1 Year (Master's) / 3 - 4 Years (UG)", iconType: 'graduation' },
      { label: 'Part-Time Work', value: '20 Hours/Week (40 hrs during holidays)', iconType: 'briefcase' },
      { label: 'Post-Study Work', value: '2-Year Third Level Graduate Scheme (Stamp 1G)', iconType: 'file' }
    ],
    topUniversities: [
      {
        name: 'Trinity College Dublin',
        ranking: 'QS World #87',
        location: 'Dublin',
        image: '/images/universities/trinity-college-dublin.jpg',
        popularPrograms: ['Computer Science', 'Immunology', 'Business'],
        tuition: '€18,000 - €26,000/yr',
        slug: 'trinity-college-dublin'
      },
      {
        name: 'University College Dublin (UCD)',
        ranking: 'QS World #126',
        location: 'Dublin',
        image: '/images/universities/ucd.png',
        popularPrograms: ['Smurfit MBA', 'Data Analytics', 'Biotechnology'],
        tuition: '€16,000 - €25,000/yr',
        slug: 'ucd'
      },
      {
        name: 'University of Galway',
        ranking: 'Top 300 World',
        location: 'Galway',
        image: '/images/universities/university-of-galway.jpg',
        popularPrograms: ['Software Design', 'Biomedical Eng', 'Marine Science'],
        tuition: '€14,000 - €22,000/yr',
        slug: 'university-of-galway'
      },
      {
        name: 'University College Cork (UCC)',
        ranking: 'Top 300 World',
        location: 'Cork',
        image: '/images/universities/ucc.jpg',
        popularPrograms: ['Food Science', 'Cyber Security', 'Accounting'],
        tuition: '€14,000 - €22,000/yr',
        slug: 'ucc'
      },
      {
        name: 'Dublin City University (DCU)',
        ranking: 'Top Young Uni',
        location: 'Dublin',
        image: '/images/universities/dcu.png',
        popularPrograms: ['Computing', 'Electronic Commerce', 'Finance'],
        tuition: '€13,000 - €20,000/yr',
        slug: 'dcu'
      }
    ],
    allUniversities: [
      { name: 'Trinity College Dublin', city: 'Dublin', ranking: 'QS #87', tuition: '€18,000 - €26,000', popularCourses: ['Computer Science', 'Immunology', 'Business'], type: 'Historic University' },
      { name: 'University College Dublin', city: 'Dublin', ranking: 'QS #126', tuition: '€16,000 - €25,000', popularCourses: ['Data Analytics', 'Smurfit Business', 'Biotech'], type: 'National University' },
      { name: 'University of Galway', city: 'Galway', ranking: 'Top 300 World', tuition: '€14,000 - €22,000', popularCourses: ['Software Design', 'Biomedical', 'Marine Science'], type: 'National University' },
      { name: 'University College Cork', city: 'Cork', ranking: 'Top 300 World', tuition: '€14,000 - €22,000', popularCourses: ['Food Science', 'Cybersecurity', 'Finance'], type: 'National University' },
      { name: 'Dublin City University', city: 'Dublin', ranking: 'Top Young Uni', tuition: '€13,000 - €20,000', popularCourses: ['Computing', 'Fintech', 'Electronic Commerce'], type: 'Public University' }
    ],
    costOfLiving: '€10,000 to €15,000/yr depending on Dublin vs regional cities like Galway or Cork',
    admissionRequirements: {
      ug: 'Typical: Class 12 with 70%+ overall and subject prerequisites.',
      pg: "Typical: Bachelor's degree with 60%–65%+; course-specific requirements apply.",
      english: 'IELTS 6.5 (min 6.0) or Duolingo 120+; varies by university.',
      intakes: 'September (Autumn - Major) & January (Spring)',
      ugPoints: [
        'Class 12 with typical 70%+ aggregate',
        'Subject requirements in core areas (e.g. Mathematics for Computing/Economics)',
        'Check specific university guidelines'
      ],
      pgPoints: [
        'Recognized undergraduate degree with minimum 60%–65% aggregate',
        'Related background required for STEM and business specializations',
        'Work experience evaluated positively'
      ],
      englishPoints: [
        'IELTS 6.5 (min 6.0 each band) or PTE 63+',
        'Duolingo 120+ accepted by select universities'
      ],
      disclaimer: 'Immigration visa guidelines under AVATS and IRP registration are regulated by Irish Immigration Service Delivery (ISD).'
    },
    workRightsDetail: 'Under the Third Level Graduate Scheme (Stamp 1G), non-EEA master’s graduates can stay and work full-time in Ireland for 24 months without a separate work permit.',
    visaChecklist: [
      'Offer letter from Irish university and tuition payment receipt',
      'Proof of €10,000 immediate access living funds held in bank account',
      'Private medical insurance coverage (mandatory for Irish student visa)',
      'Evidence of financial ties and sponsorship history',
      'Completed online AVATS visa application and VFS submission summary',
      'Statement of purpose detailing study and return plans'
    ],
    journeyMap: {
      totalSteps: 12,
      title: 'Your Journey from India to Ireland',
      subtitle: 'A complete 12-step guide from planning to Stamp 1G graduate registration.',
      phases: [
        {
          phaseNumber: '01',
          name: 'Plan & Check',
          subtitle: 'Course & Criteria Review',
          color: '#3B82F6',
          steps: [
            {
              stepNumber: '01',
              title: 'Plan program, intake and budget',
              shortDesc: 'Choose discipline, intake (Autumn Sept / Spring Jan), and target Irish university.',
              keyAction: 'Select course and set budget'
            },
            {
              stepNumber: '02',
              title: 'Check academic & English criteria',
              shortDesc: 'Review entry percentage criteria and English proficiency thresholds.',
              keyAction: 'Verify admission prerequisites'
            }
          ]
        },
        {
          phaseNumber: '02',
          name: 'Prepare & Apply',
          subtitle: 'University Application',
          color: '#6366F1',
          steps: [
            {
              stepNumber: '03',
              title: 'Prepare academic documents & SOP',
              shortDesc: 'Gather transcripts, draft SOP, obtain 2 academic LORs, and update CV.',
              keyAction: 'Assemble application file'
            },
            {
              stepNumber: '04',
              title: 'Submit university application',
              shortDesc: 'Submit online application through university admissions portal.',
              keyAction: 'Submit university application'
            }
          ]
        },
        {
          phaseNumber: '03',
          name: 'Offer & Fund',
          subtitle: 'Acceptance & Living Funds',
          color: '#10B981',
          steps: [
            {
              stepNumber: '05',
              title: 'Accept offer and pay deposit',
              shortDesc: 'Receive offer letter, accept place, and pay tuition fee deposit.',
              keyAction: 'Confirm offer & pay deposit'
            },
            {
              stepNumber: '06',
              title: 'Pay remaining fees & prepare €10,000 funds',
              shortDesc: 'Pay tuition fees and prepare evidence of €10,000 accessible living funds.',
              keyAction: 'Prepare financial documentation'
            },
            {
              stepNumber: '07',
              title: 'Obtain private medical insurance',
              shortDesc: 'Obtain mandatory private medical insurance policy compliant with Irish immigration.',
              keyAction: 'Secure private medical cover'
            }
          ]
        },
        {
          phaseNumber: '04',
          name: 'AVATS Visa',
          subtitle: 'Long-Stay D Visa Lodgement',
          color: '#F59E0B',
          steps: [
            {
              stepNumber: '08',
              title: 'Complete AVATS visa application',
              shortDesc: 'Complete online AVATS visa application for Long-stay D study visa.',
              keyAction: 'Submit AVATS online form'
            },
            {
              stepNumber: '09',
              title: 'Submit physical documents at VFS',
              shortDesc: 'Submit passport, original financial proofs, and biometrics at VFS Global centre.',
              keyAction: 'Submit dossier at VFS'
            }
          ]
        },
        {
          phaseNumber: '05',
          name: 'Travel, Enrol & IRP',
          subtitle: 'Arrival & Residence Permit',
          color: '#EC4899',
          steps: [
            {
              stepNumber: '10',
              title: 'Book flights and student housing',
              shortDesc: 'Receive visa endorsement, book flights, and secure accommodation in Ireland.',
              keyAction: 'Book travel & accommodation'
            },
            {
              stepNumber: '11',
              title: 'Attend orientation & complete enrolment',
              shortDesc: 'Arrive in Ireland, attend university orientation, and complete academic registration.',
              keyAction: 'Enrol at university'
            },
            {
              stepNumber: '12',
              title: 'Register for IRP card (Stamp 1G path)',
              shortDesc: 'Register with Irish Immigration Service Delivery (ISD) to receive Irish Residence Permit (IRP) card.',
              keyAction: 'Obtain IRP Card'
            }
          ]
        }
      ]
    },
    whyStudyHere: [
      'European headquarters for 9 of the world’s top 10 tech companies.',
      'Only English-speaking country in the Eurozone post-Brexit.',
      'Streamlined 2-year post-study work visa.'
    ],
    faqs: [
      {
        q: 'What is the Third Level Graduate Scheme (Stamp 1G)?',
        a: 'The Stamp 1G allows non-EEA students who have graduated with a master’s degree from an Irish higher education institution to remain in Ireland for 24 months to work full-time or seek employment.'
      },
      {
        q: 'What is the AVATS system?',
        a: 'AVATS is the official online visa application facility operated by the Irish Immigration Service Delivery through which international students lodge their Long-stay D visa application.'
      }
    ]
  },
  {
    country: 'New Zealand',
    slug: 'new-zealand',
    headline: 'Safe, Supportive & Globally Ranked',
    phrase: 'Realise Your True Potential.',
    flag: '🇳🇿',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    quoteAnnotation: 'Safe, Supportive & Globally Ranked',
    universitiesCount: '8 World-Class Universities',
    tuition: 'NZD 24,000 - NZD 40,000/yr',
    workRights: 'Up to 3-Year Post-Study Visa',
    popularCourses: ['Environmental Science', 'Agribusiness', 'Software Dev', 'Hospitality', 'Data Science'],
    overview: 'All eight of New Zealand’s universities rank in the top 3% worldwide. Known for its safety, progressive research, and natural beauty, New Zealand provides an exceptional quality of life.',
    keyFacts: [
      { label: 'Intakes', value: 'Semester 1 (February) & Semester 2 (July)', iconType: 'calendar' },
      { label: 'Average Degree Length', value: "1 to 2 Years (Master's) / 3 Years (Bachelor's)", iconType: 'graduation' },
      { label: 'Part-Time Work', value: '20 Hours/Week during study terms', iconType: 'briefcase' },
      { label: 'Post-Study Work', value: 'Up to 3-Year Post Study Work Visa', iconType: 'file' }
    ],
    topUniversities: [
      {
        name: 'University of Auckland',
        ranking: 'QS World #65',
        location: 'Auckland',
        image: '/images/universities/university-of-auckland.jpg',
        popularPrograms: ['Engineering', 'Business', 'IT'],
        tuition: 'NZD 34,000 - NZD 46,000/yr',
        slug: 'university-of-auckland'
      },
      {
        name: 'University of Otago',
        ranking: 'Top 250 World',
        location: 'Dunedin',
        image: '/images/universities/university-of-otago.jpg',
        popularPrograms: ['Health Sciences', 'Environmental Science', 'Finance'],
        tuition: 'NZD 30,000 - NZD 40,000/yr',
        slug: 'university-of-otago'
      },
      {
        name: 'Victoria University of Wellington',
        ranking: 'Top 250 World',
        location: 'Wellington',
        image: '/images/universities/victoria-university-of-wellington.jpg',
        popularPrograms: ['Software Dev', 'Design Innovation', 'Law'],
        tuition: 'NZD 29,000 - NZD 38,000/yr',
        slug: 'victoria-university-of-wellington'
      },
      {
        name: 'University of Canterbury',
        ranking: 'Top 300 World',
        location: 'Christchurch',
        image: '/images/universities/university-of-canterbury.png',
        popularPrograms: ['Civil Engineering', 'Forestry', 'Data Science'],
        tuition: 'NZD 28,000 - NZD 38,000/yr',
        slug: 'university-of-canterbury'
      }
    ],
    costOfLiving: 'NZD $20,000/yr standard maintenance requirement',
    admissionRequirements: {
      ug: 'Typical: Class 12 with 75%+ overall.',
      pg: "Typical: Bachelor's degree with 60%+; institution-specific prerequisites.",
      english: 'IELTS 6.5 (min 6.0) or PTE 58+.',
      intakes: 'February and July',
      ugPoints: ['Class 12 with typical 75%+ aggregate', 'Relevant subject background for specialized tracks'],
      pgPoints: ['Recognized undergraduate degree with minimum 60% aggregate', 'Related academic field'],
      englishPoints: ['IELTS 6.5 (no band < 6.0) or PTE 58+']
    },
    workRightsDetail: 'International students completing a master’s degree in New Zealand can work for up to 3 years on an open post-study work visa with spouse open work rights.',
    visaChecklist: [
      'Offer of Place from an approved New Zealand education provider',
      'Proof of paid tuition fees or evidence of loan sanction',
      'Proof of living funds (NZD $20,000 per year of study)',
      'Medical and chest X-ray certificates',
      'Police clearance certificate'
    ],
    journeyMap: {
      totalSteps: 10,
      title: 'Your Journey from India to New Zealand',
      subtitle: 'A complete 10-step guide from application to enrolment.',
      phases: [
        {
          phaseNumber: '01',
          name: 'Plan & Verify',
          subtitle: 'Course & Provider Choice',
          steps: [
            { stepNumber: '01', title: 'Plan course, institution & intake', shortDesc: 'Select target program, intake (Feb/July), and university.' },
            { stepNumber: '02', title: 'Verify entry criteria', shortDesc: 'Check academic entry scores and English minimums.' }
          ]
        },
        {
          phaseNumber: '02',
          name: 'Prepare & Apply',
          subtitle: 'University Submission',
          steps: [
            { stepNumber: '03', title: 'Prepare academic records & SOP', shortDesc: 'Collate transcripts, write Statement of Purpose, and CV.' },
            { stepNumber: '04', title: 'Submit university application', shortDesc: 'Submit application to New Zealand university portal.' }
          ]
        },
        {
          phaseNumber: '03',
          name: 'Offer & Tuition',
          subtitle: 'Offer of Place',
          steps: [
            { stepNumber: '05', title: 'Receive Offer of Place', shortDesc: 'Review offer conditions and sign acceptance.' },
            { stepNumber: '06', title: 'Pay tuition fees', shortDesc: 'Pay initial tuition fees to receive official payment receipt.' }
          ]
        },
        {
          phaseNumber: '04',
          name: 'Student Visa',
          subtitle: 'Immigration NZ Lodgement',
          steps: [
            { stepNumber: '07', title: 'Prepare medical & police clearance', shortDesc: 'Complete chest X-ray and obtain police clearance.' },
            { stepNumber: '08', title: 'Lodge Fee Paying Student Visa online', shortDesc: 'Apply online through Immigration New Zealand portal.' }
          ]
        },
        {
          phaseNumber: '05',
          name: 'Travel & Enrol',
          subtitle: 'Arrival in New Zealand',
          steps: [
            { stepNumber: '09', title: 'Book travel and accommodation', shortDesc: 'Receive electronic visa approval and book travel.' },
            { stepNumber: '10', title: 'Enrol on campus and begin classes', shortDesc: 'Arrive in New Zealand, attend orientation, and register.' }
          ]
        }
      ]
    },
    whyStudyHere: [
      'Consistently ranked among the top 3 safest and most peaceful countries in the world.',
      'Spouses of master’s students are eligible for open work rights in New Zealand.',
      'Up to 3-year post-study work visa upon degree completion.'
    ],
    faqs: [
      {
        q: 'Can my spouse work while I study in New Zealand?',
        a: 'Yes, if you are enrolled in an eligible Level 8 (Postgraduate) or Level 9 (Master’s) qualification, your partner can apply for an open work visa for the duration of your studies.'
      }
    ]
  },
  {
    country: 'Europe (Schengen)',
    slug: 'europe',
    headline: 'Multi-Cultural Academic Excellence',
    phrase: 'Unbounded European Horizons.',
    flag: '🇪🇺',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop',
    quoteAnnotation: 'Multi-Cultural Academic Excellence',
    universitiesCount: '500+ Partner Campuses',
    tuition: '€8,000 - €22,000/yr',
    workRights: '1–2 Years Stay Back depending on state',
    popularCourses: ['International Business', 'Renewable Energy', 'Design & Architecture', 'Fashion Management', 'Data Engineering'],
    overview: 'Study across France, Italy, Netherlands, Sweden, and Switzerland. Europe offers affordable, high-calibre programs with Schengen visa privileges allowing free travel across 29 European countries.',
    keyFacts: [
      { label: 'Key Hubs', value: 'France, Italy, Netherlands, Sweden, Poland', iconType: 'calendar' },
      { label: 'Average Degree Length', value: "1 to 2 Years (Master's)", iconType: 'graduation' },
      { label: 'Travel Rights', value: 'Visa-Free Travel across 29 Schengen Countries', iconType: 'briefcase' },
      { label: 'Post-Study Stay', value: '1 to 2 Years depending on member state', iconType: 'file' }
    ],
    topUniversities: [
      {
        name: 'Institut Polytechnique de Paris',
        ranking: 'QS World #46',
        location: 'France',
        image: '/images/universities/institut-polytechnique-paris.jpg',
        popularPrograms: ['AI', 'Applied Mathematics', 'Engineering'],
        tuition: '€12,000 - €18,000/yr',
        slug: 'institut-polytechnique-paris'
      },
      {
        name: 'Politecnico di Milano',
        ranking: 'QS World #111',
        location: 'Italy',
        image: '/images/universities/politecnico-di-milano.png',
        popularPrograms: ['Mechanical Engineering', 'Design', 'Architecture'],
        tuition: '€3,900/yr (public)',
        slug: 'politecnico-di-milano'
      },
      {
        name: 'Delft University of Technology (TU Delft)',
        ranking: 'QS World #49',
        location: 'Netherlands',
        image: '/images/universities/tu-delft.jpg',
        popularPrograms: ['Aerospace Engineering', 'Computer Science'],
        tuition: '€16,000 - €20,000/yr',
        slug: 'tu-delft'
      },
      {
        name: 'KTH Royal Institute of Technology',
        ranking: 'QS World #73',
        location: 'Sweden',
        image: '/images/universities/kth-sweden.jpg',
        popularPrograms: ['Machine Learning', 'Sustainable Energy'],
        tuition: 'SEK 160,000 - 220,000/yr',
        slug: 'kth-sweden'
      }
    ],
    costOfLiving: '€8,000 to €14,000/yr depending on country',
    admissionRequirements: {
      ug: 'High School Diploma with 65%+',
      pg: "Bachelor's degree with 60%+",
      english: 'IELTS 6.5 or TOEFL 90+',
      intakes: 'September (Autumn) & February (Spring)',
      disclaimer: 'Europe is not one admission or immigration system. Country-specific entry, language, and visa requirements must be followed for France, Netherlands, Italy, Sweden, etc.'
    },
    workRightsDetail: 'European member states provide 1-2 years post-graduation residence permits (e.g. APS in France, Search Year Visa in Netherlands) to find qualified employment.',
    visaChecklist: [
      'University acceptance certificate',
      'Campus France authentication (for France) or Universitaly verification (for Italy)',
      'Proof of sufficient accommodation and monthly living expenses',
      'Schengen-compliant international medical insurance',
      'Passport and certified transcripts'
    ],
    journeyMap: {
      totalSteps: 10,
      title: 'Your Journey from India to Europe',
      subtitle: 'Country-specific admissions and visa routes across Schengen destinations.',
      phases: [
        {
          phaseNumber: '01',
          name: 'Country Selection',
          subtitle: 'Target Nation & Language',
          steps: [
            { stepNumber: '01', title: 'Choose host European country', shortDesc: 'Evaluate France, Netherlands, Italy, Sweden, etc.' },
            { stepNumber: '02', title: 'Verify national system criteria', shortDesc: 'Note country-specific admission procedures (e.g. Campus France, Studielink).' }
          ]
        },
        {
          phaseNumber: '02',
          name: 'Prepare & Apply',
          subtitle: 'National Portal Filing',
          steps: [
            { stepNumber: '03', title: 'Translate and certify academic files', shortDesc: 'Prepare certified English translations and apostilles where required.' },
            { stepNumber: '04', title: 'Submit application', shortDesc: 'Lodge applications via national agency or direct university portals.' }
          ]
        },
        {
          phaseNumber: '03',
          name: 'Admission & Funding',
          subtitle: 'Securing Place & Funds',
          steps: [
            { stepNumber: '05', title: 'Receive admission confirmation', shortDesc: 'Accept place and pay tuition fee deposit.' },
            { stepNumber: '06', title: 'Arrange maintenance funds', shortDesc: 'Prepare blocked account, bank guarantee, or scholarship proofs.' }
          ]
        },
        {
          phaseNumber: '04',
          name: 'National Visa',
          subtitle: 'Long-Stay D Visa',
          steps: [
            { stepNumber: '07', title: 'Purchase Schengen medical insurance', shortDesc: 'Obtain minimum €30,000 coverage valid across Schengen zone.' },
            { stepNumber: '08', title: 'Apply for National Long-Stay Visa', shortDesc: 'Lodge Type D student visa with the host nation embassy/consulate.' }
          ]
        },
        {
          phaseNumber: '05',
          name: 'Travel & Residence',
          subtitle: 'Arrival & Schengen Mobility',
          steps: [
            { stepNumber: '09', title: 'Travel and move to destination', shortDesc: 'Fly to host nation and secure accommodation.' },
            { stepNumber: '10', title: 'Obtain national residence permit', shortDesc: 'Validate visa and register for residence permit with Schengen travel privileges.' }
          ]
        }
      ]
    },
    whyStudyHere: [
      'Erasmus+ mobility allows you to study in 2 or more European nations during one degree.',
      'Schengen visa opens border-free travel and networking across 29 European nations.',
      'France offers a 5-year short-stay Schengen visa for Master’s alumni.'
    ],
    faqs: [
      {
        q: 'Can I travel across Europe with my student visa?',
        a: 'Yes! A student residence permit issued by any Schengen member country allows you to travel freely throughout all 29 Schengen zone nations for tourism and networking.'
      }
    ]
  }
];

export interface CourseTypeOption {
  id: string;
  title: string;
  description: string;
  studyLevels: string[];
  keywords: string[];
  image?: string;
}

export interface SubjectCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string; // local public asset path
  exampleCourseTypes: CourseTypeOption[];
  generalCareerAreas: string[];
  destinationIds: string[]; // browse guidance only; NOT proof of programme availability
  about: {
    overview: string;
    keyThemes: string[];
    admissionsGuidance: string;
  };
  destinationsGuidance: Array<{
    destination: string;
    flag: string;
    note: string;
  }>;
  faqs: Array<{
    q: string;
    a: string;
  }>;
}

export const STUDY_LEVEL_OPTIONS = [
  'All Study Levels',
  'Foundation / Pathway',
  'Diploma',
  "Bachelor's",
  'Postgraduate Certificate / Diploma',
  "Master's",
  'MBA',
  'Research Degree / PhD'
] as const;

export const DESTINATION_OPTIONS = [
  { id: 'ALL', label: 'All Destinations', flag: '🌍' },
  { id: 'UK', label: 'UK', flag: '🇬🇧' },
  { id: 'USA', label: 'USA', flag: '🇺🇸' },
  { id: 'Canada', label: 'Canada', flag: '🇨🇦' },
  { id: 'Australia', label: 'Australia', flag: '🇦🇺' },
  { id: 'New Zealand', label: 'New Zealand', flag: '🇳🇿' },
  { id: 'Europe', label: 'Europe', flag: '🇪🇺' }
] as const;

export const SUBJECT_CATEGORIES: SubjectCategory[] = [
  {
    id: 'business-management',
    title: 'Business & Management',
    slug: 'business-management',
    description: 'Business administration, MBA, marketing, international business and entrepreneurship.',
    image: '/images/courses/business-management.jpg',
    destinationIds: ['UK', 'USA', 'Canada', 'Australia', 'New Zealand', 'Europe'],
    exampleCourseTypes: [
      {
        id: 'business-administration',
        title: 'Business Administration',
        description: 'Organizational strategy, corporate operations, managerial decision-making, and organizational leadership.',
        studyLevels: ["Bachelor's", "Master's", 'Diploma'],
        keywords: ['management', 'operations', 'strategy', 'business analysis'],
        image: '/images/courses/business-admin.jpg'
      },
      {
        id: 'mba',
        title: 'Master of Business Administration (MBA)',
        description: 'Advanced executive leadership, international finance, corporate strategy, and organizational innovation.',
        studyLevels: ['MBA', "Master's"],
        keywords: ['mba', 'executive', 'leadership', 'corporate strategy'],
        image: '/images/courses/mba.jpg'
      },
      {
        id: 'marketing',
        title: 'Marketing & Digital Strategy',
        description: 'Brand management, consumer psychology, multi-channel digital campaigns, and data-driven marketing analytics.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['marketing', 'brand', 'digital media', 'consumer behavior'],
        image: '/images/courses/marketing.jpg'
      },
      {
        id: 'international-business',
        title: 'International Business',
        description: 'Cross-border trade frameworks, multinational strategy, international supply chain ethics, and foreign market entry.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['trade', 'global business', 'export', 'multinational'],
        image: '/images/courses/international-business.jpg'
      },
      {
        id: 'entrepreneurship',
        title: 'Entrepreneurship & Innovation',
        description: 'New venture initiation, venture capital navigation, disruptive business models, and enterprise acceleration.',
        studyLevels: ["Bachelor's", "Master's", 'Postgraduate Certificate / Diploma'],
        keywords: ['startups', 'venture', 'innovation', 'business creation'],
        image: '/images/courses/entrepreneurship.jpg'
      }
    ],
    generalCareerAreas: [
      'Corporate Management & Strategy',
      'Management Consulting',
      'Brand & Digital Marketing Direction',
      'International Business Development',
      'Venture Incubation & Entrepreneurship'
    ],
    about: {
      overview: 'Business and Management disciplines equip students with critical decision-making tools, leadership acumen, and organizational frameworks. Whether you aim for executive roles in multinational corporations, boutique management consultancies, or scaling your own startup, global curricula combine case studies with experiential learning.',
      keyThemes: [
        'Strategic Leadership & Change Management',
        'Global Market Dynamics & Corporate Governance',
        'Quantitative Business Analytics & Performance Metrics',
        'Cross-Cultural Stakeholder Negotiation'
      ],
      admissionsGuidance: 'Most undergraduate business pathways accept strong higher secondary qualifications across diverse streams (Commerce, Science, or Arts). Post-graduate MBA degrees frequently prefer or require 2–3 years of verifiable professional work experience, whereas specialized Master of Science (MSc) management degrees often welcome fresh graduates.'
    },
    destinationsGuidance: [
      { destination: 'United Kingdom', flag: '🇬🇧', note: 'Fast-track 1-year Master’s programmes with prominent AMBA, EQUIS, and AACSB triple-accredited business schools.' },
      { destination: 'United States', flag: '🇺🇸', note: '2-year experiential MBA programmes offering case study methodology, STEM management concentrations, and substantial corporate networking.' },
      { destination: 'Canada', flag: '🇨🇦', note: 'Practical co-op work terms, strong regional business clusters, and pragmatic postgraduate work allowances.' },
      { destination: 'Australia', flag: '🇦🇺', note: 'Industry-integrated business degrees with strong Asia-Pacific trade connections and flexible intake schedules.' },
      { destination: 'Europe', flag: '🇪🇺', note: 'Affordable tuition, prominent international faculty in hubs like Germany, France, and Ireland, and English-taught curricula.' }
    ],
    faqs: [
      {
        q: 'Do I need prior work experience for a Business Master’s abroad?',
        a: 'For an MBA, most leading business schools look for 2–3 years of professional experience. However, specialized MSc programs (e.g., MSc International Management, MSc Marketing) routinely accept candidates straight after their undergraduate degree.'
      },
      {
        q: 'Is GMAT or GRE mandatory for business programs?',
        a: 'Requirements vary. Top US MBA programs generally require GMAT or GRE, but many UK, European, Canadian, and Australian universities offer GMAT waivers based on academic GPA or professional background.'
      }
    ]
  },
  {
    id: 'computing-technology',
    title: 'Computing & Technology',
    slug: 'computing-technology',
    description: 'Computer science, software engineering, artificial intelligence, data science and cybersecurity.',
    image: '/images/courses/computing-technology.jpg',
    destinationIds: ['UK', 'USA', 'Canada', 'Australia', 'New Zealand', 'Europe'],
    exampleCourseTypes: [
      {
        id: 'computer-science',
        title: 'Computer Science',
        description: 'Algorithms, data structures, computation theory, software design, and computing systems architecture.',
        studyLevels: ["Bachelor's", "Master's", 'Research Degree / PhD'],
        keywords: ['programming', 'algorithms', 'software', 'systems', 'cs'],
        image: '/images/courses/comp-sci.jpg'
      },
      {
        id: 'artificial-intelligence',
        title: 'Artificial Intelligence',
        description: 'Deep neural networks, computer vision, natural language processing, and intelligent autonomous systems.',
        studyLevels: ["Bachelor's", "Master's", 'Research Degree / PhD'],
        keywords: ['ai', 'machine learning', 'nlp', 'neural networks', 'robotics'],
        image: '/images/courses/ai.jpg'
      },
      {
        id: 'software-engineering',
        title: 'Software Engineering',
        description: 'Full-stack software engineering, distributed cloud systems, agile DevOps workflows, and enterprise design patterns.',
        studyLevels: ["Bachelor's", "Master's", 'Diploma'],
        keywords: ['software development', 'cloud', 'devops', 'architecture'],
        image: '/images/courses/software-eng.jpg'
      },
      {
        id: 'data-science',
        title: 'Data Science',
        description: 'Statistical modeling, big data pipelines, machine learning analytics, and predictive data engineering.',
        studyLevels: ["Bachelor's", "Master's", 'Postgraduate Certificate / Diploma'],
        keywords: ['data science', 'statistics', 'big data', 'analytics', 'python'],
        image: '/images/courses/data-science.jpg'
      },
      {
        id: 'cybersecurity',
        title: 'Cybersecurity',
        description: 'Network defense, ethical penetration testing, cryptography, cloud security architecture, and digital forensics.',
        studyLevels: ["Bachelor's", "Master's", 'Postgraduate Certificate / Diploma'],
        keywords: ['security', 'infosec', 'penetration testing', 'cryptography', 'forensics'],
        image: '/images/courses/cybersecurity.jpg'
      }
    ],
    generalCareerAreas: [
      'Full-Stack Software Architecture',
      'Artificial Intelligence / Machine Learning Engineering',
      'Data Engineering & Advanced Analytics',
      'Enterprise Cybersecurity & Information Assurance',
      'Cloud Infrastructure & DevOps'
    ],
    about: {
      overview: 'Computing and Technology courses form the foundation of global digital infrastructure. Programmes immerse students in algorithmic thinking, large-scale distributed architectures, and emerging domains such as machine intelligence, cybersecurity, and cloud microservices. Practical lab sessions and industry capstone projects prepare graduates for dynamic technological landscapes.',
      keyThemes: [
        'Advanced Computational Complexity & Design Patterns',
        'Scalable Cloud Architectures & Distributed Systems',
        'Ethical Considerations in Autonomous & AI Systems',
        'Applied Cryptography & Cyber Defence Protocols'
      ],
      admissionsGuidance: 'Undergraduate admissions typically require mathematics and science backgrounds. Postgraduate MSc programmes usually look for an undergraduate degree in computing, math, or engineering; conversion programmes exist in the UK and Ireland for candidates transitioning from other disciplines.'
    },
    destinationsGuidance: [
      { destination: 'United States', flag: '🇺🇸', note: 'World-renowned tech research hubs, extensive Silicon Valley connections, and 3-Year STEM OPT work authorization extensions.' },
      { destination: 'United Kingdom', flag: '🇬🇧', note: 'Intensive 1-year master’s programmes with world-leading research groups in AI, data ethics, and cryptography.' },
      { destination: 'Germany & Europe', flag: '🇪🇺', note: 'High engineering standards, tuition-free or low-cost public universities (e.g. TU9), and thriving startup clusters in Berlin, Munich, and Dublin.' },
      { destination: 'Canada', flag: '🇨🇦', note: 'Major AI innovation ecosystems in Toronto and Montreal, along with strong industry co-op placements.' },
      { destination: 'Australia', flag: '🇦🇺', note: 'ACS-accredited programmes with hands-on capstone industry internships and attractive post-study work rights.' }
    ],
    faqs: [
      {
        q: 'Can non-CS graduates apply for a Master’s in Computer Science?',
        a: 'Yes. Many universities in the UK, Ireland, and Australia offer designated "Conversion" Master’s degrees in Computer Science, Data Science, or IT for graduates from non-technical backgrounds.'
      },
      {
        q: 'What makes a program STEM-eligible in the USA?',
        a: 'Programs categorized under official US Department of Homeland Security STEM CIP codes (such as CS, Software Engineering, AI, and Data Science) qualify for a 24-month OPT extension, allowing up to 36 months of US work authorization.'
      }
    ]
  },
  {
    id: 'engineering',
    title: 'Engineering',
    slug: 'engineering',
    description: 'Civil, mechanical, electrical, aerospace, chemical and renewable energy engineering.',
    image: '/images/courses/engineering.jpg',
    destinationIds: ['UK', 'USA', 'Canada', 'Australia', 'New Zealand', 'Europe'],
    exampleCourseTypes: [
      {
        id: 'civil-engineering',
        title: 'Civil & Structural Engineering',
        description: 'Sustainable infrastructure design, structural analysis, geotechnical mechanics, and urban transportation systems.',
        studyLevels: ["Bachelor's", "Master's", 'Research Degree / PhD'],
        keywords: ['civil', 'structural', 'geotechnical', 'construction', 'infrastructure'],
        image: '/images/courses/civil-engineering.jpg'
      },
      {
        id: 'mechanical-engineering',
        title: 'Mechanical & Mechatronics Engineering',
        description: 'Thermodynamics, robotic automation, fluid mechanics, CAD design, and advanced manufacturing.',
        studyLevels: ["Bachelor's", "Master's", 'Diploma'],
        keywords: ['mechanical', 'robotics', 'thermodynamics', 'manufacturing', 'cad'],
        image: '/images/courses/mechanical-engineering.jpg'
      },
      {
        id: 'electrical-engineering',
        title: 'Electrical & Electronic Engineering',
        description: 'Power systems, microelectronics, VLSI design, wireless telecommunications, and smart grid systems.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['electrical', 'electronics', 'circuits', 'power systems', 'embedded'],
        image: '/images/courses/electrical-engineering.jpg'
      },
      {
        id: 'aerospace-engineering',
        title: 'Aerospace Engineering',
        description: 'Aerodynamic theory, propulsion systems, flight mechanics, structural materials, and space system design.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['aerospace', 'aeronautical', 'propulsion', 'aviation', 'space'],
        image: '/images/courses/aerospace-engineering.jpg'
      },
      {
        id: 'chemical-engineering',
        title: 'Chemical & Biomolecular Engineering',
        description: 'Reaction engineering, transport phenomena, chemical processing, and sustainable polymer synthesis.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['chemical', 'bioprocess', 'materials', 'polymers', 'refining'],
        image: '/images/courses/chemical-engineering.jpg'
      },
      {
        id: 'renewable-energy-engineering',
        title: 'Renewable & Sustainable Energy Engineering',
        description: 'Solar/wind energy technology, grid-scale battery storage, hydrogen systems, and carbon reduction engineering.',
        studyLevels: ["Bachelor's", "Master's", 'Postgraduate Certificate / Diploma'],
        keywords: ['renewable energy', 'solar', 'wind', 'sustainability', 'clean tech'],
        image: '/images/courses/renewable-energy.jpg'
      }
    ],
    generalCareerAreas: [
      'Structural & Infrastructure Consulting',
      'Robotics & Industrial Automation Engineering',
      'Clean Energy & Power Grid Strategy',
      'Aerospace Systems & Propulsion Design',
      'Process & Chemical Engineering'
    ],
    about: {
      overview: 'Engineering programmes synthesize rigorous mathematical and physical science foundations with hands-on design and experimentation. From pioneering green energy grids and earthquake-resistant bridges to aerospace vehicles and smart automated factories, international institutions offer cutting-edge workshop facilities and accredited certifications.',
      keyThemes: [
        'Advanced Computational Simulation & Finite Element Analysis',
        'Sustainable Lifecycle Engineering & Material Circularity',
        'Professional Chartered Status (CEng, PE, Engineers Australia)',
        'Interdisciplinary Design & Systems Integration'
      ],
      admissionsGuidance: 'Strong performance in physics and mathematics is mandatory across all university systems. Professional accreditation bodies (such as ABET, Washington Accord, or the UK Engineering Council) establish strict criteria that ensure international recognition of the degree.'
    },
    destinationsGuidance: [
      { destination: 'Germany', flag: '🇩🇪', note: 'World-renowned automotive and mechanical engineering traditions, robust industrial links with Siemens, BMW, and Bosch.' },
      { destination: 'United States', flag: '🇺🇸', note: 'Unmatched research funding, state-of-the-art laboratory infrastructure, and 3-Year STEM OPT eligibility.' },
      { destination: 'United Kingdom', flag: '🇬🇧', note: 'Chartered Engineer (CEng) accreditation routes and collaborative university wind-tunnel and cleanroom facilities.' },
      { destination: 'Australia', flag: '🇦🇺', note: 'Strong demand in civil, mining, and renewable energy infrastructure with Engineers Australia accredited pathways.' }
    ],
    faqs: [
      {
        q: 'Are engineering degrees internationally recognized under the Washington Accord?',
        a: 'Yes. Most accredited Bachelor of Engineering (BEng/BSc) and Master of Engineering degrees in Australia, the UK, the USA, and Canada fall under the Washington Accord, facilitating global professional licensing.'
      },
      {
        q: 'What is the difference between BEng and MEng degrees in the UK?',
        a: 'A BEng is typically a 3-year undergraduate degree, while an integrated MEng is a 4-year direct pathway that satisfies the full educational requirements for Chartered Engineer (CEng) status.'
      }
    ]
  },
  {
    id: 'finance-accounting',
    title: 'Finance & Accounting',
    slug: 'finance-accounting',
    description: 'Accounting, finance, economics, banking and financial technology.',
    image: '/images/courses/finance-accounting.jpg',
    destinationIds: ['UK', 'USA', 'Canada', 'Australia', 'New Zealand', 'Europe'],
    exampleCourseTypes: [
      {
        id: 'accounting',
        title: 'Professional Accounting & Audit',
        description: 'Financial accounting standards (IFRS/GAAP), auditing procedures, forensic accounting, and corporate taxation.',
        studyLevels: ["Bachelor's", "Master's", 'Diploma'],
        keywords: ['accounting', 'audit', 'tax', 'ifrs', 'gaap', 'cpa', 'acca'],
        image: '/images/courses/accounting.jpg'
      },
      {
        id: 'finance',
        title: 'Corporate Finance & Investment',
        description: 'Capital structure, equity research, asset pricing, risk management, and international corporate valuation.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['finance', 'investment', 'capital markets', 'valuation', 'cfa'],
        image: '/images/courses/finance.jpg'
      },
      {
        id: 'economics',
        title: 'Economics & Econometrics',
        description: 'Micro/macroeconomic theory, statistical econometrics, monetary policy, and public economic models.',
        studyLevels: ["Bachelor's", "Master's", 'Research Degree / PhD'],
        keywords: ['economics', 'econometrics', 'macroeconomics', 'policy'],
        image: '/images/courses/economics.jpg'
      },
      {
        id: 'banking',
        title: 'Banking & Financial Markets',
        description: 'Commercial banking operations, treasury management, credit risk assessment, and central bank regulations.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['banking', 'credit risk', 'financial markets', 'treasury'],
        image: '/images/courses/banking.jpg'
      },
      {
        id: 'fintech',
        title: 'Financial Technology (FinTech)',
        description: 'Blockchain architecture, algorithmic trading, decentralized finance (DeFi), and digital payment rails.',
        studyLevels: ["Master's", 'Postgraduate Certificate / Diploma'],
        keywords: ['fintech', 'blockchain', 'cryptocurrency', 'payments', 'quant'],
        image: '/images/courses/fintech.jpg'
      }
    ],
    generalCareerAreas: [
      'Investment Banking & Equity Research',
      'Chartered / Certified Public Accounting',
      'Quantitative Asset Management & Hedge Funds',
      'Corporate Financial Planning & Analysis (FP&A)',
      'FinTech Product Strategy & Risk Engineering'
    ],
    about: {
      overview: 'Finance & Accounting degrees prepare students to steer capital decisions, analyse complex financial instruments, and maintain regulatory fiscal transparency. With Bloomberg terminals, trading floors, and partnerships with bodies like ACCA, CPA, and CFA, students build rigorous quantitative and analytical capabilities.',
      keyThemes: [
        'Global Financial Reporting & Regulatory Compliance',
        'Quantitative Asset Valuation & Derivatives Pricing',
        'FinTech Innovations & Algorithmic Markets',
        'Ethical Corporate Governance & Fiscal Strategy'
      ],
      admissionsGuidance: 'Strong mathematical aptitude is preferred for quantitative finance and economics. In accounting, many master’s programmes provide generous module exemptions for professional certifications such as ACCA or CPA Australia.'
    },
    destinationsGuidance: [
      { destination: 'United Kingdom', flag: '🇬🇧', note: 'Direct proximity to the City of London, a preeminent global financial hub, with extensive ACCA and CIMA accreditations.' },
      { destination: 'United States', flag: '🇺🇸', note: 'Wall Street connections, STEM-designated Financial Engineering/Quantitative Finance master’s degrees.' },
      { destination: 'Ireland', flag: '🇮🇪', note: 'Premier European hub for aviation leasing, asset management, and global financial services in Dublin.' },
      { destination: 'Australia', flag: '🇦🇺', note: 'Strong CPA Australia / CA ANZ professional frameworks and prominent investment ties to the Asia-Pacific basin.' }
    ],
    faqs: [
      {
        q: 'Do accounting degrees provide exemptions for professional exams?',
        a: 'Yes. Accredited degrees regularly confer substantial exemptions for professional examinations such as ACCA, ACA, CIMA, and CPA, shortening the time needed to earn chartered status.'
      },
      {
        q: 'What is the advantage of a STEM-designated Finance program in the US?',
        a: 'A STEM-designated MS in Finance or Financial Engineering allows international students on F-1 visas to apply for a 24-month OPT extension, providing up to 3 years of US work authorization.'
      }
    ]
  },
  {
    id: 'healthcare-life-sciences',
    title: 'Healthcare & Life Sciences',
    slug: 'healthcare-life-sciences',
    description: 'Public health, nursing, pharmacy, biomedical science, biotechnology and healthcare management.',
    image: '/images/courses/healthcare-life-sciences.jpg',
    destinationIds: ['UK', 'USA', 'Canada', 'Australia', 'New Zealand', 'Europe'],
    exampleCourseTypes: [
      {
        id: 'public-health',
        title: 'Master of Public Health (MPH)',
        description: 'Epidemiological investigation, biostatistics, global healthcare policies, and preventative community strategies.',
        studyLevels: ["Master's", 'Postgraduate Certificate / Diploma'],
        keywords: ['public health', 'epidemiology', 'biostatistics', 'health policy'],
        image: '/images/courses/public-health.jpg'
      },
      {
        id: 'nursing',
        title: 'Nursing & Clinical Care',
        description: 'Evidence-based nursing practice, acute patient care, pharmacotherapy in nursing, and clinical healthcare ethics.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['nursing', 'clinical care', 'patient care', 'healthcare'],
        image: '/images/courses/nursing.jpg'
      },
      {
        id: 'pharmacy',
        title: 'Pharmacy & Pharmaceutical Sciences',
        description: 'Drug formulation chemistry, pharmacokinetics, molecular drug design, and pharmaceutical regulatory affairs.',
        studyLevels: ["Bachelor's", "Master's", 'Research Degree / PhD'],
        keywords: ['pharmacy', 'pharmacology', 'drug design', 'clinical pharmacy'],
        image: '/images/courses/pharmacy.jpg'
      },
      {
        id: 'biomedical-science',
        title: 'Biomedical Science',
        description: 'Cellular pathology, medical microbiology, immunology, clinical chemistry, and laboratory diagnostics.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['biomedical', 'pathology', 'microbiology', 'immunology'],
        image: '/images/courses/biomedical-science.jpg'
      },
      {
        id: 'biotechnology',
        title: 'Biotechnology',
        description: 'Genetic engineering, industrial bioprocessing, fermentation technology, and recombinant pharmaceutical synthesis.',
        studyLevels: ["Bachelor's", "Master's", 'Research Degree / PhD'],
        keywords: ['biotech', 'genetics', 'bioprocess', 'molecular biology'],
        image: '/images/courses/biotechnology.jpg'
      },
      {
        id: 'healthcare-management',
        title: 'Healthcare Management & Administration',
        description: 'Hospital operations, healthcare economics, clinical informatics, and patient quality assurance.',
        studyLevels: ["Master's", 'Postgraduate Certificate / Diploma'],
        keywords: ['hospital management', 'healthcare leadership', 'health economics'],
        image: '/images/courses/healthcare-management.jpg'
      }
    ],
    generalCareerAreas: [
      'Epidemiology & Global Health Policy',
      'Clinical Nursing & Hospital Healthcare',
      'Pharmaceutical Formulation & Regulatory Affairs',
      'Biomedical Laboratory Diagnostics',
      'Healthcare Operations Management'
    ],
    about: {
      overview: 'Healthcare and Life Sciences programmes blend biomedical theory with clinical observation and research. Institutions offer access to hospital simulation suites, wet labs, and biomedical research centers. Graduates contribute to disease eradication, pharmaceutical breakthroughs, and modern clinical administration.',
      keyThemes: [
        'Translational Medical Research & Clinical Trials',
        'Healthcare System Epidemiology & Disease Surveillance',
        'Professional Health Licensing Protocols & Ethics',
        'Bioprocessing & Molecular Therapeutics'
      ],
      admissionsGuidance: 'Disciplines such as Nursing and Pharmacy have strict regulatory licensing prerequisites and clinical placements. Students must separately check recognition and licensing requirements in the jurisdiction where they intend to practise.'
    },
    destinationsGuidance: [
      { destination: 'United Kingdom', flag: '🇬🇧', note: 'World-renowned NHS clinical placement models, prestigious MPH degrees, and IBMS-accredited biomedical pathways.' },
      { destination: 'Australia', flag: '🇦🇺', note: 'AHPRA-accredited nursing and healthcare degrees with extensive clinical hours and critical occupational demand.' },
      { destination: 'United States', flag: '🇺🇸', note: 'Top-tier NIH-backed research universities and premier biotech ecosystems in Boston and San Francisco.' },
      { destination: 'Ireland', flag: '🇮🇪', note: 'Global capital for top medical device manufacturing and biopharmaceutical corporate facilities.' }
    ],
    faqs: [
      {
        q: 'Do clinical programmes like Nursing require separate professional registration?',
        a: 'Yes. Regulated professions require graduates to meet statutory licensing standards set by destination bodies (e.g. NMC in the UK, AHPRA in Australia, or state nursing boards in the US/Canada).'
      },
      {
        q: 'Is a Bachelor’s in Biology required for an MPH?',
        a: 'While biological sciences backgrounds are common, many MPH programmes welcome candidates from medicine, dentistry, social sciences, statistics, and related public policy disciplines.'
      }
    ]
  },
  {
    id: 'medicine-dentistry',
    title: 'Medicine & Dentistry',
    slug: 'medicine-dentistry',
    description: 'Medicine, dentistry and related clinical programmes, subject to admission and professional recognition requirements.',
    image: '/images/courses/medicine-dentistry.jpg',
    destinationIds: ['UK', 'Europe', 'Australia', 'New Zealand', 'USA', 'Canada'],
    exampleCourseTypes: [
      {
        id: 'medicine-mbbs',
        title: 'Medicine (MBBS / MD)',
        description: 'Comprehensive preclinical and clinical medical training, patient diagnosis, surgery, internal medicine, and pathology.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['medicine', 'mbbs', 'md', 'clinical', 'physician', 'doctor'],
        image: '/images/courses/medicine-mbbs.jpg'
      },
      {
        id: 'dentistry-bds',
        title: 'Dentistry (BDS / DMD)',
        description: 'Oral anatomy, restorative dentistry, dental surgery, orthodontics, periodontology, and pediatric dental medicine.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['dentistry', 'bds', 'dental surgery', 'orthodontics'],
        image: '/images/courses/dentistry-bds.jpg'
      },
      {
        id: 'clinical-sciences',
        title: 'Related Clinical & Allied Health',
        description: 'Physiotherapy, clinical audiology, occupational therapy, medical imaging, and physician associate studies.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['physiotherapy', 'allied health', 'audiology', 'clinical science'],
        image: '/images/courses/clinical-sciences.jpg'
      }
    ],
    generalCareerAreas: [
      'Registered Medical Practitioner / Physician',
      'Dental Surgeon & Specialist Orthodontist',
      'Clinical Medical Researcher',
      'Specialist Physical Therapist & Allied Health',
      'Healthcare Hospital Clinician'
    ],
    about: {
      overview: 'Medicine and Dentistry represent intensive clinical callings demanding outstanding academic merit, clinical empathy, and lifelong commitment. Programmes encompass anatomy dissections, clinical rotations in teaching hospitals, and rigorous simulation exams (OSCEs).',
      keyThemes: [
        'Preclinical Anatomy, Pathology & Pharmacology',
        'Ward Rotations & Direct Bedside Patient Care',
        'Clinical Ethics, Consent & Diagnostic Integrity',
        'Surgical Techniques & Patient Simulation'
      ],
      admissionsGuidance: 'Admissions for international medical and dental seats are highly selective. Applicants must typically clear standardized entrance examinations (such as UCAT, BMAT, or MCAT), undergo structured MMI interviews, and satisfy criminal record and health screening clearances. Licensing exams (e.g. USMLE, PLAB/UKMLA, AMC, NEXT) are required in the student’s intended country of practice.'
    },
    destinationsGuidance: [
      { destination: 'United Kingdom', flag: '🇬🇧', note: 'GMC-recognized 5-year MBBS programmes and direct foundational training placements.' },
      { destination: 'Europe', flag: '🇪🇺', note: 'High quality English-taught General Medicine and Dentistry programmes in Poland, Czech Republic, Italy, and Hungary recognized across the EU.' },
      { destination: 'Australia', flag: '🇦🇺', note: 'Both direct undergraduate (BMed/MD) and graduate-entry 4-year MD programmes with modern teaching hospitals.' },
      { destination: 'USA & Canada', flag: '🇺🇸', note: 'Graduate-entry only (MD/DMD); requires completing a 4-year pre-med undergraduate degree and competitive MCAT scores.' }
    ],
    faqs: [
      {
        q: 'Can international students apply directly to medicine after 12th grade?',
        a: 'In the UK, Australia, and European medical universities, direct undergraduate MBBS/MD entry is available with competitive high-school scores and UCAT examinations. In the US and Canada, medicine is graduate-entry only.'
      },
      {
        q: 'How does medical licensing work when returning to practice in my home country?',
        a: 'Students must verify with their national medical regulator (e.g. National Medical Commission in India) that the university satisfies duration, clinical internship, and licensing qualification criteria.'
      }
    ]
  },
  {
    id: 'hospitality-tourism',
    title: 'Hospitality & Tourism',
    slug: 'hospitality-tourism',
    description: 'Hospitality management, tourism, event management and culinary arts.',
    image: '/images/courses/hospitality-tourism.jpg',
    destinationIds: ['UK', 'Europe', 'Australia', 'New Zealand', 'Canada', 'USA'],
    exampleCourseTypes: [
      {
        id: 'international-hospitality',
        title: 'International Hospitality Management',
        description: 'Luxury hotel operations, guest relations strategy, resort management, and revenue yield optimization.',
        studyLevels: ["Bachelor's", "Master's", 'Diploma'],
        keywords: ['hospitality', 'hotel management', 'luxury resort', 'guest relations'],
        image: '/images/courses/international-hospitality.jpg'
      },
      {
        id: 'sustainable-tourism',
        title: 'Tourism & Destination Management',
        description: 'Eco-tourism, travel agency networks, cultural heritage management, and national destination marketing.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['tourism', 'travel', 'destination marketing', 'eco-tourism'],
        image: '/images/courses/sustainable-tourism.jpg'
      },
      {
        id: 'event-management',
        title: 'Event & Conference Management',
        description: 'MICE tourism, large-scale festival staging, sports mega-event logistics, and corporate exhibition planning.',
        studyLevels: ["Bachelor's", "Master's", 'Diploma'],
        keywords: ['event management', 'festivals', 'conferences', 'mice'],
        image: '/images/courses/event-management.jpg'
      },
      {
        id: 'culinary-arts',
        title: 'Culinary Arts & Gastronomy',
        description: 'Culinary technique mastery, kitchen administration, food and beverage concept design, and gastronomic food science.',
        studyLevels: ['Diploma', "Bachelor's", 'Postgraduate Certificate / Diploma'],
        keywords: ['culinary', 'chef', 'gastronomy', 'food beverage', 'pastry'],
        image: '/images/courses/culinary-arts.jpg'
      }
    ],
    generalCareerAreas: [
      'Luxury Resort & Hotel General Management',
      'Global Tourism Board Strategy',
      'International Event & Festival Direction',
      'Restaurant Entrepreneurship & Executive Culinary Management',
      'Airline & Cruise Line Operations Management'
    ],
    about: {
      overview: 'The hospitality and tourism sector is one of the world’s largest employers. Global programmes emphasize hands-on operational internships, culinary artistry, service leadership, and destination economics in top hospitality hubs like Switzerland, France, the UK, Australia, and New Zealand.',
      keyThemes: [
        'Luxury Brand Experience & Service Excellence',
        'Hotel Asset Management & Yield Optimization',
        'Sustainable Tourism Principles & Community Impact',
        'Global Event Operations & Crisis Resilience'
      ],
      admissionsGuidance: 'Strong communication skills and passion for global client service are valued. Programmes often integrate mandatory paid industry internship semesters built directly into the degree curriculum.'
    },
    destinationsGuidance: [
      { destination: 'Switzerland & Europe', flag: '🇪🇺', note: 'The world-recognized birthplace of Swiss luxury hospitality institutes with unmatched worldwide alumni networks.' },
      { destination: 'United Kingdom', flag: '🇬🇧', note: 'Prominent degrees in international tourism, London luxury hotel clusters, and event management.' },
      { destination: 'Australia & New Zealand', flag: '🇦🇺', note: 'World-renowned eco-tourism destinations with industry co-ops and generous post-study work visa rights.' },
      { destination: 'Canada', flag: '🇨🇦', note: 'Popular college diploma and degree programmes featuring paid co-op internships across ski resorts and urban luxury chains.' }
    ],
    faqs: [
      {
        q: 'Do hospitality programs include paid internships?',
        a: 'Yes. Most hospitality and culinary programs incorporate 6 to 12 months of structured, paid industry training semesters at international hotel chains or resorts.'
      },
      {
        q: 'Can I enter luxury hotel management with a business degree?',
        a: 'A business or hospitality degree provides strong foundations. Specialized master’s degrees in luxury hospitality management help candidates fast-track to executive management tracks.'
      }
    ]
  },
  {
    id: 'arts-design-media',
    title: 'Arts, Design & Media',
    slug: 'arts-design-media',
    description: 'Graphic design, animation, film, fashion, architecture and communications.',
    image: '/images/courses/arts-design-media.jpg',
    destinationIds: ['UK', 'USA', 'Europe', 'Canada', 'Australia', 'New Zealand'],
    exampleCourseTypes: [
      {
        id: 'graphic-design-ux',
        title: 'Graphic Design & UI/UX',
        description: 'Typography, branding identity, digital interface design, interaction architecture, and design thinking.',
        studyLevels: ["Bachelor's", "Master's", 'Diploma'],
        keywords: ['graphic design', 'ui/ux', 'branding', 'typography', 'interaction'],
        image: '/images/courses/graphic-design-ux.jpg'
      },
      {
        id: 'animation-vfx',
        title: 'Animation & Visual Effects (VFX)',
        description: '3D modeling, CGI rendering, character animation, game art assets, and cinematic visual effects pipelines.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['animation', 'vfx', '3d modeling', 'cgi', 'game art'],
        image: '/images/courses/animation-vfx.jpg'
      },
      {
        id: 'film-media-production',
        title: 'Film & Media Production',
        description: 'Cinematography, screenplay writing, audio sound engineering, directing, and post-production editing.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['film', 'cinema', 'video production', 'sound design', 'directing'],
        image: '/images/courses/film-media-production.jpg'
      },
      {
        id: 'fashion-design',
        title: 'Fashion Design & Merchandising',
        description: 'Garment construction, textile innovation, sustainable fashion, trend forecasting, and fashion luxury business.',
        studyLevels: ["Bachelor's", "Master's", 'Diploma'],
        keywords: ['fashion', 'apparel', 'textiles', 'merchandising', 'styling'],
        image: '/images/courses/fashion-design.jpg'
      },
      {
        id: 'architecture',
        title: 'Architecture & Spatial Design',
        description: 'Architectural studio design, structural morphology, urban theory, BIM software, and sustainable built environments.',
        studyLevels: ["Bachelor's", "Master's", 'Research Degree / PhD'],
        keywords: ['architecture', 'spatial design', 'urban planning', 'bim', 'riba'],
        image: '/images/courses/architecture.jpg'
      },
      {
        id: 'communications-pr',
        title: 'Media & Public Communications',
        description: 'Digital journalism, strategic corporate communications, public relations, social media strategy, and media law.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['communications', 'journalism', 'pr', 'media', 'broadcasting'],
        image: '/images/courses/communications-pr.jpg'
      }
    ],
    generalCareerAreas: [
      'Digital Product & UI/UX Design Direction',
      '3D Animation & Visual Effects Artistry',
      'Cinematography & Film Production',
      'Fashion Design & Brand Merchandising',
      'Chartered Architectural Design'
    ],
    about: {
      overview: 'Creative arts, design, and media disciplines foster artistic vision alongside commercial execution and digital mastery. From specialized design schools in London, Paris, and Milan to media production studios in California and Vancouver, students build professional portfolios.',
      keyThemes: [
        'Creative Studio Culture & Peer Critique',
        'Mastery of Industry Standard Digital Tools (Adobe, Maya, Revit, Unreal)',
        'Sustainable Materiality & Circular Design',
        'Professional Portfolio & Showreel Development'
      ],
      admissionsGuidance: 'A creative portfolio of visual work is the cornerstone of creative admissions (paintings, digital designs, film clips, or sketchbooks). For architecture, regulatory bodies (e.g. RIBA in the UK) require accredited stages for professional licensing.'
    },
    destinationsGuidance: [
      { destination: 'United Kingdom', flag: '🇬🇧', note: 'Home to the world’s highest ranked art & design institutions (UAL, RCA) and rich creative industries.' },
      { destination: 'Europe', flag: '🇪🇺', note: 'Centres of haute couture, industrial design, and architectural heritage in Italy, France, and Germany.' },
      { destination: 'United States', flag: '🇺🇸', note: 'Hollywood studio pipelines, Silicon Valley UX design demand, and prestigious art colleges.' },
      { destination: 'Canada', flag: '🇨🇦', note: 'Major VFX, 3D animation, and gaming studio concentrations in Vancouver and Montreal.' }
    ],
    faqs: [
      {
        q: 'Is a portfolio required for all Art and Design courses?',
        a: 'Yes. Most practical creative programs (Fashion, Animation, Graphic Design, Fine Art, Architecture) evaluate candidates based on their creative portfolio alongside academic transcripts.'
      },
      {
        q: 'What is required to become a licensed architect abroad?',
        a: 'Architecture follows a staged qualification process (e.g. RIBA Part 1, 2, and 3 in the UK) combining accredited university degrees with mandatory supervised practical architectural office training.'
      }
    ]
  },
  {
    id: 'law-social-sciences',
    title: 'Law & Social Sciences',
    slug: 'law-social-sciences',
    description: 'Law, psychology, sociology, international relations and public policy.',
    image: '/images/courses/law-social-sciences.jpg',
    destinationIds: ['UK', 'USA', 'Europe', 'Australia', 'Canada', 'New Zealand'],
    exampleCourseTypes: [
      {
        id: 'law-llb-llm',
        title: 'Law (LLB / LLM)',
        description: 'Common law jurisprudence, international commercial law, intellectual property, arbitration, and human rights law.',
        studyLevels: ["Bachelor's", "Master's", 'Research Degree / PhD'],
        keywords: ['law', 'llb', 'llm', 'commercial law', 'legal', 'arbitration'],
        image: '/images/courses/law-social-sciences.jpg'
      },
      {
        id: 'psychology',
        title: 'Psychology & Cognitive Science',
        description: 'Neuroscience, developmental psychology, cognitive research methods, behavioral analysis, and mental health.',
        studyLevels: ["Bachelor's", "Master's", 'Research Degree / PhD'],
        keywords: ['psychology', 'cognitive', 'behavioral', 'neuroscience', 'mental health'],
        image: '/images/courses/psychology.jpg'
      },
      {
        id: 'sociology',
        title: 'Sociology & Social Policy',
        description: 'Social inequalities, urban sociology, demographic research methodologies, and community social development.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['sociology', 'social policy', 'demographics', 'social justice'],
        image: '/images/courses/sociology.jpg'
      },
      {
        id: 'international-relations',
        title: 'International Relations & Diplomacy',
        description: 'Geopolitical analysis, conflict resolution, multilateral treaties, security studies, and foreign policy strategy.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['international relations', 'diplomacy', 'geopolitics', 'un', 'security'],
        image: '/images/courses/international-relations.jpg'
      },
      {
        id: 'public-policy',
        title: 'Public Policy & Governance (MPP)',
        description: 'Policy formulation, economic cost-benefit analysis, regulatory governance, and public administration.',
        studyLevels: ["Master's", 'Postgraduate Certificate / Diploma'],
        keywords: ['public policy', 'governance', 'mpp', 'administration', 'civic'],
        image: '/images/courses/public-policy.jpg'
      }
    ],
    generalCareerAreas: [
      'Legal Advisory & Corporate In-House Counsel',
      'Geopolitical Analysis & Diplomatic Corps',
      'Public Policy Consulting & Government Relations',
      'Psychological Research & Behavioural Science',
      'NGO & Non-Profit Leadership'
    ],
    about: {
      overview: 'Law and Social Sciences cultivate critical reasoning, societal inquiry, and institutional analysis. Students examine legal statutes, historical human dynamics, diplomatic treaties, and social justice imperatives, preparing for impactful leadership.',
      keyThemes: [
        'Legal Jurisprudence & Cross-Border Dispute Resolution',
        'Empirical Qualitative & Quantitative Research Methodologies',
        'Global Governance & Human Rights Protection',
        'Evidence-Based Public Policy Design'
      ],
      admissionsGuidance: 'Strong writing and analytical reasoning are essential. For legal practice, legal regulatory bodies (such as the Bar Standards Board or Solicitors Regulation Authority in the UK, or state bar examiners in the US) determine qualification routes (e.g. SQE, Bar exams).'
    },
    destinationsGuidance: [
      { destination: 'United Kingdom', flag: '🇬🇧', note: 'Historic common-law foundation that underpins international commercial disputes and world trade treaties.' },
      { destination: 'United States', flag: '🇺🇸', note: 'Top-tier Law (JD/LLM) schools and prominent public policy programmes (Kennedy, SIPA).' },
      { destination: 'Europe', flag: '🇪🇺', note: 'European Union and international law institutions in The Hague, Brussels, and Geneva.' },
      { destination: 'Australia', flag: '🇦🇺', note: 'Practicing common-law degrees (LLB, JD) with clear cross-border corporate practice opportunities.' }
    ],
    faqs: [
      {
        q: 'Can I practice law in my home country after an overseas law degree?',
        a: 'Students holding foreign common-law degrees may need to sit conversion examinations (such as Bar Council bridge exams) or specific qualifying tests (e.g. SQE in the UK) depending on their jurisdiction.'
      },
      {
        q: 'Is an LLB undergraduate degree accepted directly from high school?',
        a: 'Yes, in the UK, Australia, and New Zealand, law can be studied as a direct 3-year or 4-year undergraduate LLB degree. In the US and Canada, law is a graduate-level JD degree.'
      }
    ]
  },
  {
    id: 'education',
    title: 'Education',
    slug: 'education',
    description: 'Education studies, teaching-related programmes and educational leadership.',
    image: '/images/courses/education.jpg',
    destinationIds: ['UK', 'Australia', 'Canada', 'USA', 'New Zealand', 'Europe'],
    exampleCourseTypes: [
      {
        id: 'education-studies',
        title: 'Education Studies & Pedagogy',
        description: 'Theories of cognitive learning, curriculum design, inclusive special educational needs, and educational psychology.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['education', 'learning', 'pedagogy', 'curriculum', 'psychology'],
        image: '/images/courses/education-studies.jpg'
      },
      {
        id: 'teaching-tesol',
        title: 'Teaching & TESOL / Applied Linguistics',
        description: 'Teaching English to Speakers of Other Languages, second-language acquisition, and modern classroom instruction.',
        studyLevels: ["Master's", 'Postgraduate Certificate / Diploma', 'Diploma'],
        keywords: ['tesol', 'teaching', 'english teaching', 'applied linguistics', 'pgce'],
        image: '/images/courses/teaching-tesol.jpg'
      },
      {
        id: 'educational-leadership',
        title: 'Educational Leadership & Administration',
        description: 'School institutional management, higher education policy, digital learning integration, and instructional supervision.',
        studyLevels: ["Master's", 'Research Degree / PhD'],
        keywords: ['educational leadership', 'school management', 'higher education'],
        image: '/images/courses/educational-leadership.jpg'
      }
    ],
    generalCareerAreas: [
      'International School Teaching & Instruction',
      'TESOL & Global Language Programme Direction',
      'Educational Leadership & Institutional Administration',
      'Curriculum Design & Educational Technology (EdTech)',
      'Education Policy & Non-Profit Advisory'
    ],
    about: {
      overview: 'Education programmes explore learning science, instructional methodologies, and educational equity. International courses provide modern perspectives on EdTech tools, cross-cultural pedagogy, and educational administration.',
      keyThemes: [
        'Contemporary Pedagogy & Differentiated Instruction',
        'Special Educational Needs & Inclusive School Culture',
        'EdTech Integration & Digital Virtual Classrooms',
        'Leadership & School Quality Assurance'
      ],
      admissionsGuidance: 'For professional classroom teaching (such as PGCE in the UK or state teacher registration in Australia/Canada), candidates must complete practical school teaching practicums and undergo mandatory background checks.'
    },
    destinationsGuidance: [
      { destination: 'United Kingdom', flag: '🇬🇧', note: 'Recognized PGCE and TESOL programmes with direct classroom practicum attachments in British schools.' },
      { destination: 'Australia', flag: '🇦🇺', note: 'Master of Teaching degrees accredited by state teacher authorities with substantial demand.' },
      { destination: 'Canada', flag: '🇨🇦', note: 'High educational standards, inclusive teaching philosophies, and strong provincial public education systems.' },
      { destination: 'United States', flag: '🇺🇸', note: 'Pioneering schools of education (Stanford, Harvard, Teachers College Columbia) leading EdTech innovation.' }
    ],
    faqs: [
      {
        q: 'What is the difference between an MA in Education and a PGCE / Master of Teaching?',
        a: 'An MA or MEd in Education focuses primarily on educational theory and research, while a PGCE or Master of Teaching provides practical classroom licensure to teach in schools.'
      },
      {
        q: 'Is TESOL widely recognized for international teaching?',
        a: 'Yes. An accredited Master’s degree in TESOL or Applied Linguistics is recognized globally by international schools, universities, and language centers.'
      }
    ]
  },
  {
    id: 'science-environment',
    title: 'Science & Environment',
    slug: 'science-environment',
    description: 'Mathematics, physics, chemistry, environmental science, sustainability and agriculture.',
    image: '/images/courses/science-environment.jpg',
    destinationIds: ['UK', 'USA', 'Europe', 'Australia', 'Canada', 'New Zealand'],
    exampleCourseTypes: [
      {
        id: 'mathematics-statistics',
        title: 'Mathematics & Applied Statistics',
        description: 'Pure mathematics, differential equations, probabilistic modeling, numerical analysis, and statistical algorithms.',
        studyLevels: ["Bachelor's", "Master's", 'Research Degree / PhD'],
        keywords: ['mathematics', 'statistics', 'calculus', 'probability', 'modelling'],
        image: '/images/courses/mathematics-statistics.jpg'
      },
      {
        id: 'physics-astronomy',
        title: 'Physics & Astrophysics',
        description: 'Quantum mechanics, condensed matter physics, particle acceleration, optics, and cosmological astrophysics.',
        studyLevels: ["Bachelor's", "Master's", 'Research Degree / PhD'],
        keywords: ['physics', 'astronomy', 'quantum', 'mechanics', 'optics'],
        image: '/images/courses/physics-astronomy.jpg'
      },
      {
        id: 'chemistry-materials',
        title: 'Chemistry & Materials Science',
        description: 'Organic/inorganic synthesis, spectroscopy, polymer science, analytical chemistry, and smart nanomaterials.',
        studyLevels: ["Bachelor's", "Master's", 'Research Degree / PhD'],
        keywords: ['chemistry', 'materials science', 'nanotechnology', 'polymers'],
        image: '/images/courses/chemistry-materials.jpg'
      },
      {
        id: 'environmental-science',
        title: 'Environmental Science & Conservation',
        description: 'Ecology, hydrology, climate modeling, biodiversity conservation, and environmental impact assessments.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['environmental', 'ecology', 'climate change', 'conservation', 'hydrology'],
        image: '/images/courses/environmental-science.jpg'
      },
      {
        id: 'sustainability-climate',
        title: 'Sustainability & Climate Change Strategy',
        description: 'Carbon accounting, ESG reporting frameworks, circular economy design, and global environmental governance.',
        studyLevels: ["Master's", 'Postgraduate Certificate / Diploma'],
        keywords: ['sustainability', 'esg', 'carbon', 'climate', 'circular economy'],
        image: '/images/courses/sustainability-climate.jpg'
      },
      {
        id: 'agriculture-agritech',
        title: 'Agricultural Science & AgriTech',
        description: 'Agronomy, precision agriculture sensors, soil microbiome health, crop genetic engineering, and food security.',
        studyLevels: ["Bachelor's", "Master's", 'Diploma'],
        keywords: ['agriculture', 'agritech', 'crop science', 'soil', 'farming'],
        image: '/images/courses/agriculture-agritech.jpg'
      }
    ],
    generalCareerAreas: [
      'Environmental Impact Assessment & Ecological Consulting',
      'ESG Strategy & Corporate Sustainability Analysis',
      'Scientific Research & Materials Engineering',
      'Quantitative Mathematical & Actuarial Modelling',
      'AgriTech Innovation & Food Security Directorship'
    ],
    about: {
      overview: 'Science and Environment disciplines pioneer solutions for climate preservation, computational discovery, and sustainable natural resource management. International universities offer state-of-the-art supercomputers, particle labs, marine stations, and research farms.',
      keyThemes: [
        'Empirical Experimental Science & Cleanroom Research',
        'Climate Resilience & Earth System Modelling',
        'ESG Standards, Carbon Offsetting & Life-Cycle Analysis',
        'Precision Agricultural Technologies & Food Systems'
      ],
      admissionsGuidance: 'Strong mathematical and laboratory science competencies are prerequisites. STEM eligibility in the United States and global priority migration lists in Australia/Canada actively feature environmental science and physical science graduates.'
    },
    destinationsGuidance: [
      { destination: 'United States', flag: '🇺🇸', note: 'Top global research universities with deep funding in quantum computing, climate research, and materials science.' },
      { destination: 'United Kingdom', flag: '🇬🇧', note: 'Centuries of scientific leadership (Cambridge, Oxford, Imperial) and active environmental research networks.' },
      { destination: 'Australia & New Zealand', flag: '🇦🇺', note: 'Unmatched field laboratories in marine ecology (Great Barrier Reef), agricultural science, and environmental conservation.' },
      { destination: 'Europe', flag: '🇪🇺', note: 'World-leading sustainability initiatives, circular economy legislation, and green tech investments in Germany and the Netherlands.' }
    ],
    faqs: [
      {
        q: 'Are Science and Environment programmes eligible for STEM work extensions in the USA?',
        a: 'Yes. Mathematics, Physics, Chemistry, and Environmental Science are certified STEM disciplines, qualifying graduates for the 24-month OPT extension.'
      },
      {
        q: 'What careers exist in Corporate Sustainability?',
        a: 'Graduates work as ESG Analysts, Carbon Footprint Auditors, Environmental Impact Officers, and Circular Economy Consultants across multinational corporations and consultancies.'
      }
    ]
  },
  {
    id: 'logistics-sport',
    title: 'Logistics & Sport',
    slug: 'logistics-sport',
    description: 'Supply chain management, logistics, sports science and sports management.',
    image: '/images/courses/logistics-sport.jpg',
    destinationIds: ['UK', 'Europe', 'Australia', 'USA', 'Canada', 'New Zealand'],
    exampleCourseTypes: [
      {
        id: 'supply-chain-logistics',
        title: 'Global Supply Chain & Logistics',
        description: 'End-to-end supply networks, procurement strategy, warehouse robotics, maritime freight, and customs regulation.',
        studyLevels: ["Bachelor's", "Master's", 'Postgraduate Certificate / Diploma'],
        keywords: ['supply chain', 'logistics', 'procurement', 'freight', 'shipping'],
        image: '/images/courses/supply-chain-logistics.jpg'
      },
      {
        id: 'transportation-logistics',
        title: 'Logistics Operations & Freight Management',
        description: 'Intermodal freight logistics, fleet management, supply chain analytics, and port terminal operations.',
        studyLevels: ["Bachelor's", "Master's", 'Diploma'],
        keywords: ['freight', 'transport', 'shipping', 'ports', 'operations'],
        image: '/images/courses/transportation-logistics.jpg'
      },
      {
        id: 'sports-science',
        title: 'Exercise & Sports Science',
        description: 'Athletic biomechanics, exercise physiology, sports nutrition, injury rehabilitation, and athletic conditioning.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['sports science', 'biomechanics', 'exercise physiology', 'nutrition', 'kinesiology'],
        image: '/images/courses/sports-science.jpg'
      },
      {
        id: 'sports-management',
        title: 'Sports Management & Analytics',
        description: 'Sports team operations, sports marketing, athlete representation, media broadcasting rights, and sports analytics.',
        studyLevels: ["Bachelor's", "Master's"],
        keywords: ['sports management', 'sports marketing', 'athletic director', 'sports analytics'],
        image: '/images/courses/sports-management.jpg'
      }
    ],
    generalCareerAreas: [
      'Global Supply Chain Management & Operations',
      'Freight Forwarding & Port Operations Directorship',
      'High-Performance Athletic Coaching & Sports Biomechanics',
      'Sports Club Management & Athlete Representation',
      'Procurement & Inventory Analytics Strategy'
    ],
    about: {
      overview: 'Logistics and Sport encompasses two fast-growing global industries: the vital movement of goods across interconnected international supply chains, and the multi-billion dollar world of athletic performance, sports science, and franchise entertainment.',
      keyThemes: [
        'Global Trade Networks & Supply Chain Resiliency',
        'Data-Driven Athletic Performance & Injury Mitigation',
        'Sports Franchise Commercialization & Brand Sponsorship',
        'Automated Warehouse & Maritime Port Engineering'
      ],
      admissionsGuidance: 'For sports science, background in physical education, biology, or kinesiology is advantageous. Supply chain programs welcome candidates from business, engineering, math, or humanities backgrounds.'
    },
    destinationsGuidance: [
      { destination: 'United Kingdom', flag: '🇬🇧', note: 'Preeminent sports science universities (Loughborough, Bath) and major maritime trade clusters in Liverpool and London.' },
      { destination: 'Europe', flag: '🇪🇺', note: 'Rotterdam and Hamburg are Europe’s largest maritime logistics hubs; Germany leads in automated supply chain engineering.' },
      { destination: 'Australia', flag: '🇦🇺', note: 'World-renowned sports performance culture (AIS) and prominent logistics demand spanning the Indo-Pacific.' },
      { destination: 'United States', flag: '🇺🇸', note: 'Unmatched collegiate sports ecosystems (NCAA) and massive corporate logistics powerhouses (Amazon, Walmart, FedEx).' }
    ],
    faqs: [
      {
        q: 'What is the career demand for Supply Chain graduates?',
        a: 'Supply chain professionals are in very high demand globally due to modern e-commerce expansion, manufacturing resilience, and complex international trade regulations.'
      },
      {
        q: 'What is the difference between Sports Science and Sports Management?',
        a: 'Sports Science focuses on human physiology, biomechanics, and athletic performance, whereas Sports Management focuses on business operations, marketing, sponsorships, and franchise administration.'
      }
    ]
  }
];

export function getSubjectBySlug(slug: string): SubjectCategory | undefined {
  return SUBJECT_CATEGORIES.find((s) => s.slug.toLowerCase() === (slug || '').toLowerCase());
}

export function getAllSubjects(): SubjectCategory[] {
  return SUBJECT_CATEGORIES;
}

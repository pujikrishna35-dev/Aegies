export interface ScholarshipData {
  id: string;
  slug: string;
  title: string;
  provider: string;
  providerType: 'Government' | 'University' | 'Trust / Foundation' | 'Corporate';
  country: string;
  countryCode: string;
  flag: string;
  coverageType: 'Full Tuition + Living' | 'Full Tuition Waiver' | 'Partial Tuition Waiver' | 'Fixed Grant';
  awardAmount: string;
  degreeLevel: ('Bachelor\'s' | 'Master\'s' | 'PhD' | 'All Levels')[];
  fieldOfStudy: string[];
  deadline: string;
  applicationCycle: string;
  eligibility: string[];
  documentsRequired: string[];
  selectionProcess: string[];
  benefits: string[];
  description: string;
  howToApply: string[];
  featured?: boolean;
}

export const SCHOLARSHIPS: ScholarshipData[] = [
  {
    id: 'chevening-uk',
    slug: 'chevening-scholarship-uk',
    title: 'Chevening Scholarships UK',
    provider: 'Foreign, Commonwealth & Development Office (FCDO)',
    providerType: 'Government',
    country: 'United Kingdom',
    countryCode: 'GB',
    flag: '🇬🇧',
    coverageType: 'Full Tuition + Living',
    awardAmount: '100% Tuition Fees + Monthly Stipend + Flights (~£35,000+)',
    degreeLevel: ['Master\'s'],
    fieldOfStudy: ['Public Policy', 'Data Science', 'Engineering', 'Law', 'International Relations', 'Business'],
    deadline: 'Early November (Annual)',
    applicationCycle: 'August - November',
    featured: true,
    description: 'Chevening is the UK government\'s global scholarship programme, funded by the Foreign, Commonwealth and Development Office and partner organisations. It enables outstanding emerging leaders from around the world to pursue one-year master\'s degrees in the UK.',
    eligibility: [
      'Citizens of a Chevening-eligible country or territory (including India).',
      'Completed undergraduate degree with equivalent of at least an upper second-class (2:1) honours degree.',
      'Minimum of 2 years (2,800 hours) of demonstrable work experience or leadership initiatives.',
      'Commitment to return to your home country for a minimum of 2 years post-graduation.',
      'Apply to 3 eligible UK university master\'s courses and receive an unconditional offer from at least one by July.'
    ],
    documentsRequired: [
      'Four 500-word Chevening leadership & networking essays',
      'Official academic transcripts & graduation degree certificates',
      'Two professional/academic reference letters',
      'Passport / National Identity proof',
      'Unconditional admission offer letters from participating UK universities'
    ],
    selectionProcess: [
      'Online application review and initial eligibility screening (November)',
      'Independent Reading Committee evaluation against academic & leadership criteria (December - January)',
      'Shortlist announcement for face-to-face interviews at British High Commission (February)',
      'Final interview & presentation with British Diplomatic panel (March - April)',
      'Official award confirmation & visa issuance support (June - July)'
    ],
    benefits: [
      'Full university tuition fees (no cap on tuition for most programs)',
      'Monthly living allowance / stipend calculated to cover accommodation and sustenance',
      'Economy class return airfare to and from the United Kingdom',
      'Arrival allowance, homeward departure allowance, and excess baggage grant',
      'Cost of UK Student Visa application & travel health insurance contribution',
      'Exclusive invitation to Chevening networking forums and parliamentary receptions'
    ],
    howToApply: [
      'Research 3 master\'s courses at different UK universities that align with your career goals.',
      'Draft your 4 Chevening leadership and networking essays with Aegis mentor reviews.',
      'Submit the official online application via the Chevening portal before the November deadline.',
      'Secure unconditional admission offers from your chosen universities.',
      'Participate in mock interview prep sessions with Aegis overseas scholars before your High Commission panel.'
    ]
  },
  {
    id: 'fulbright-nehru-usa',
    slug: 'fulbright-nehru-master-fellowships-usa',
    title: 'Fulbright-Nehru Master\'s Fellowships',
    provider: 'US-India Educational Foundation (USIEF)',
    providerType: 'Government',
    country: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    coverageType: 'Full Tuition + Living',
    awardAmount: 'Full Tuition + Monthly Stipend + J-1 Visa Support (~$80,000+)',
    degreeLevel: ['Master\'s'],
    fieldOfStudy: ['Arts and Culture Management', 'Economics', 'Environmental Science', 'Public Administration', 'Urban Planning', 'Public Health'],
    deadline: 'Mid May (Annual)',
    applicationCycle: 'January - May',
    featured: true,
    description: 'The Fulbright-Nehru Master\'s Fellowships are designed for highly motivated individuals who demonstrate leadership qualities, have completed the equivalent of a U.S. bachelor\'s degree, and have at least three years of professional work experience.',
    eligibility: [
      'Indian citizenship with a minimum 4-year bachelor\'s degree or a master\'s degree with at least 55% marks.',
      'Substantial leadership capabilities and community engagement record.',
      'Minimum of 3 years full-time professional work experience in the relevant field.',
      'Commitment to return and contribute to India upon fellowship completion.'
    ],
    documentsRequired: [
      'Detailed study and research objectives essay',
      'Personal statement showcasing leadership trajectory',
      'Three confidential letters of recommendation',
      'Certified mark sheets and degree certificates',
      'Writing sample or portfolio (for applicable design/arts courses)'
    ],
    selectionProcess: [
      'Initial application screening by national subject matter experts (June - July)',
      'In-person or virtual interviews by national selection committees in New Delhi (August - September)',
      'Nomination approval by the J. William Fulbright Foreign Scholarship Board (US)',
      'University placement matching and J-1 visa sponsorship (March - May)'
    ],
    benefits: [
      'J-1 visa sponsorship and pre-departure cultural orientation',
      'Round-trip economy air travel between home city in India and host institution in the USA',
      'Tuition and mandatory fees paid directly to the US university',
      'Living stipend and settling-in allowance',
      'Accident and sickness coverage per US Government guidelines'
    ],
    howToApply: [
      'Verify 16-year education prerequisite (4-year BE/BTech/BS or 3-year degree + 2-year Master\'s).',
      'Complete online application form on the USIEF online submission portal.',
      'Upload academic records, CV, and statement of purpose with Aegis editorial feedback.',
      'Attend personal interview rounds upon shortlisting.',
      'Collaborate with USIEF advisors on university placement preferences.'
    ]
  },
  {
    id: 'daad-germany',
    slug: 'daad-scholarship-germany',
    title: 'DAAD Helmut-Schmidt Programme & Study Scholarships',
    provider: 'German Academic Exchange Service (DAAD)',
    providerType: 'Government',
    country: 'Germany',
    countryCode: 'DE',
    flag: '🇩🇪',
    coverageType: 'Full Tuition + Living',
    awardAmount: '€934/month Living Allowance + Health Insurance + Travel Subsidy',
    degreeLevel: ['Master\'s', 'PhD'],
    fieldOfStudy: ['Renewable Energy', 'Informatics', 'Mechanical Engineering', 'Development Economics', 'Public Policy'],
    deadline: 'October - November (Course specific)',
    applicationCycle: 'June - November',
    featured: true,
    description: 'DAAD scholarships offer graduates the opportunity to continue their education in Germany with a postgraduate or Master\'s degree course at state or state-recognized German higher education institutions.',
    eligibility: [
      'Graduates with a bachelor\'s degree completed within the last 6 years.',
      'Minimum grade point equivalent to top 20% of class.',
      'English proficiency (IELTS 6.5+ or TOEFL 90+) or German language proficiency (B1/B2) depending on instruction medium.',
      'Well-grounded academic and professional motivation.'
    ],
    documentsRequired: [
      'DAAD application form completed via the DAAD Portal',
      'Europass format Curriculum Vitae (hand-signed)',
      'Letter of motivation (1-2 pages) explaining academic and personal reasons',
      'University degree certificates and comprehensive grade transcripts with grading scale',
      'Two recent recommendation letters by university professors'
    ],
    selectionProcess: [
      'Pre-selection based on written application dossier by university committees',
      'DAAD independent selection committee assessment',
      'Final grant notification released between February and April for October winter intake'
    ],
    benefits: [
      'Monthly stipend payment of €934 for master\'s candidates (€1,300 for doctoral students)',
      'Full coverage of health, accident, and personal liability insurance in Germany',
      'One-off travel allowance covering flights to Germany and return home',
      'Monthly rent subsidy and additional allowance for accompanying family members where eligible',
      'Free 6-month preparatory German language course prior to program start'
    ],
    howToApply: [
      'Select DAAD-recognized degree courses from the official university catalog.',
      'Prepare university admission application alongside DAAD scholarship form.',
      'Submit certified documents and motivation letter to the host German university or DAAD portal.',
      'Track admission letter and grant clearance through Aegis advisors.'
    ]
  },
  {
    id: 'australia-awards',
    slug: 'australia-awards-scholarships',
    title: 'Australia Awards Scholarships',
    provider: 'Department of Foreign Affairs and Trade (DFAT)',
    providerType: 'Government',
    country: 'Australia',
    countryCode: 'AU',
    flag: '🇦🇺',
    coverageType: 'Full Tuition + Living',
    awardAmount: '100% Tuition Fees + AUD $38,000/yr Living Stipend + OSHC Health Cover',
    degreeLevel: ['Master\'s', 'PhD'],
    fieldOfStudy: ['Public Health', 'Data Analytics', 'Agriculture & Sustainability', 'Cybersecurity', 'Infrastructure Engineering'],
    deadline: 'Late April (Annual)',
    applicationCycle: 'February - April',
    featured: true,
    description: 'Australia Awards are prestigious long-term awards administered by the Department of Foreign Affairs and Trade. They aim to contribute to the development needs of Australia\'s partner countries in line with bilateral and regional agreements.',
    eligibility: [
      'Minimum 18 years of age at the time of commencing the scholarship.',
      'Citizen of an eligible participating partner country.',
      'Not hold Australian citizenship, permanent residency, or applying for permanent migration.',
      'Academic qualifications satisfying entry standards for chosen Australian university (minimum 65%+ in undergrad).',
      'IELTS overall score of at least 6.5 with no band less than 6.0.'
    ],
    documentsRequired: [
      'Certified copies of all academic qualifications and degrees',
      'IELTS or PTE academic scorecards valid at application time',
      'Curriculum vitae outlining professional leadership and public service',
      'Development Impact Plan essay articulating how your studies will solve key national problems',
      'Two academic and one employment referee reports'
    ],
    selectionProcess: [
      'Eligibility compliance review (May)',
      'Shortlisting by independent assessment committee (June - July)',
      'Formal interviews and writing test in capital city (August)',
      'Final award offer and pre-departure course commencement (November - January)'
    ],
    benefits: [
      'Full tuition fees for the standard duration of the chosen program',
      'Return air travel in economy class to and from Australia',
      'Establishment allowance paid once upon arrival in Australia (AUD $5,000)',
      'Fortnightly Contribution to Living Expenses (CLE) at rates determined by DFAT',
      'Overseas Student Health Cover (OSHC) for the student covering comprehensive medical care',
      'Introductory Academic Program (IAP) before course commencement'
    ],
    howToApply: [
      'Review the country-specific priority areas and development criteria.',
      'Register on the Online Australia Awards Scholarships Information System (OASIS).',
      'Complete all 12 modules of the online questionnaire.',
      'Upload supporting documentation certified by a notary public.',
      'Attend the Aegis Australia Awards briefing session for mock interviews.'
    ]
  },
  {
    id: 'vanier-cgs-canada',
    slug: 'vanier-canada-graduate-scholarships',
    title: 'Vanier Canada Graduate Scholarships (Vanier CGS)',
    provider: 'Government of Canada (CIHR, NSERC, SSHRC)',
    providerType: 'Government',
    country: 'Canada',
    countryCode: 'CA',
    flag: '🇨🇦',
    coverageType: 'Fixed Grant',
    awardAmount: 'CAD $50,000 per year for up to 3 years ($150,000 total)',
    degreeLevel: ['PhD'],
    fieldOfStudy: ['Health Research', 'Natural Sciences & Engineering', 'Social Sciences & Humanities'],
    deadline: 'Early November (University quotas apply)',
    applicationCycle: 'July - November',
    featured: false,
    description: 'The Vanier Canada Graduate Scholarships program helps Canadian institutions attract highly qualified doctoral students. It values three equally weighted selection criteria: Academic Excellence, Research Potential, and Leadership.',
    eligibility: [
      'Nominated by only one Canadian institution which must have received a Vanier CGS quota.',
      'Pursuing first doctoral degree (including joint undergraduate/graduate research programs).',
      'Completed no more than 20 months of doctoral studies as of May of the award year.',
      'Achieved a first-class average (e.g. 80%+ or 3.7+ GPA) in each of the last two years of full-time study.'
    ],
    documentsRequired: [
      'ResearchNet application form',
      'Official academic transcripts from all post-secondary education',
      'Detailed two-page doctoral research proposal',
      'Project bibliography and reference citations',
      'Personal Leadership statement (2 pages)',
      'Two letters of reference from academic supervisors, plus leadership references'
    ],
    selectionProcess: [
      'Institutional internal competition and faculty rankings (September - October)',
      'Formal nomination submission to the Vanier CGS program office (November)',
      'Tri-agency multidisciplinary review panels (January - February)',
      'Final results communicated to nominees (April)'
    ],
    benefits: [
      'CAD $50,000 non-taxable stipend per year for up to three years',
      'International recognition as a Vanier Scholar',
      'Guaranteed research laboratory space and conference travel allowances through host university',
      'Direct pathway to accelerated Canadian Permanent Residency upon doctoral completion'
    ],
    howToApply: [
      'Identify faculty supervisors at Canadian universities offering Vanier CGS quotas.',
      'Secure supervisor agreement and initiate institutional admission application.',
      'Create account on ResearchNet and complete the Vanier application dossier.',
      'Collaborate with university graduate faculty to finalize nomination packet.'
    ]
  },
  {
    id: 'ireland-gov-fellowship',
    slug: 'government-of-ireland-international-scholarship',
    title: 'Government of Ireland International Education Scholarships (GOI-IES)',
    provider: 'Higher Education Authority (HEA)',
    providerType: 'Government',
    country: 'Ireland',
    countryCode: 'IE',
    flag: '🇮🇪',
    coverageType: 'Full Tuition + Living',
    awardAmount: '€10,000 Living Stipend + 100% Tuition Fee Waiver by University',
    degreeLevel: ['Master\'s', 'PhD'],
    fieldOfStudy: ['Software Engineering', 'Biotechnology', 'Data Science', 'Finance', 'Pharmaceutical Chemistry', 'Business Analytics'],
    deadline: 'Late March (Annual)',
    applicationCycle: 'January - March',
    featured: true,
    description: 'Under the initiative, 60 scholarships are awarded each year for one year of study at Master\'s or PhD level to successful candidates from non-EU/EEA countries who have an offer of a place at an eligible Irish higher education institution.',
    eligibility: [
      'Domiciled in a country outside the EU/EEA, UK, or Switzerland.',
      'Possess an unconditional or conditional offer letter for a full-time postgraduate program from an eligible Irish institution.',
      'Outstanding academic track record (first-class honours degree or equivalent).',
      'Excellent communication skills and demonstrable rationale for choosing Ireland.'
    ],
    documentsRequired: [
      'Completed HEA online application form',
      'Copy of formal offer letter from an Irish Higher Education Institution',
      'Academic transcripts showing first-class marks',
      'Two letters of academic reference',
      'Personal essay addressing academic excellence, proposed study plan, and future ambassadorial role'
    ],
    selectionProcess: [
      'Application assessment by an independent international review panel (April)',
      'Ranking and evaluation across academic merit, statement of intent, and references (May)',
      'Official award announcements by Minister for Further and Higher Education (June)'
    ],
    benefits: [
      '€10,000 stipend for one year\'s study paid in two installments directly to the scholar',
      'Full tuition fee waiver and registration cost coverage by the host Irish university',
      'Stamp 2 student visa eligibility with permission to work 20 hours/week during semester',
      '2-year Third Level Graduate Post-Study Work Scheme upon completion'
    ],
    howToApply: [
      'Apply to participating Irish universities (Trinity College Dublin, UCD, Galway, UCC, DCU) and obtain an offer.',
      'Access the Higher Education Authority (HEA) application portal.',
      'Prepare essays demonstrating how studying in Ireland connects with your long-term career.',
      'Submit before the end-of-March cutoff through Aegis certified mentors.'
    ]
  },
  {
    id: 'great-scholarships-uk',
    slug: 'great-scholarships-uk-british-council',
    title: 'GREAT Scholarships UK',
    provider: 'British Council & UK Government\'s GREAT Britain Campaign',
    providerType: 'Government',
    country: 'United Kingdom',
    countryCode: 'GB',
    flag: '🇬🇧',
    coverageType: 'Partial Tuition Waiver',
    awardAmount: '£10,000 Minimum Tuition Fee Discount towards 1-year Master\'s',
    degreeLevel: ['Master\'s'],
    fieldOfStudy: ['Artificial Intelligence', 'Business', 'Law', 'Design', 'Environmental Sciences', 'Finance', 'Engineering'],
    deadline: 'April - June (Varies by university)',
    applicationCycle: 'December - May',
    featured: false,
    description: 'GREAT Scholarships are jointly funded by the UK government\'s GREAT Britain Campaign and the British Council, together with participating UK higher education institutions. Each scholarship is worth a minimum of £10,000 towards tuition fees for a one-year postgraduate course.',
    eligibility: [
      'Citizen of eligible countries (including India).',
      'Undergraduate degree that will enable entry into a UK postgraduate programme.',
      'Demonstrated passion and interest in the proposed subject area.',
      'Meet the English language requirements of the UK university.',
      'Act as an ambassador for UK higher education and attend networking events.'
    ],
    documentsRequired: [
      'Valid UK university admission offer for eligible course',
      'Academic transcripts and degree certificate',
      'GREAT scholarship essay or video submission (depending on host university)',
      'Updated academic CV',
      'Two reference letters'
    ],
    selectionProcess: [
      'University-level scholarship panel reviews following admission acceptance',
      'Shortlisted applicants evaluated on academic merit, statement of purpose, and financial need',
      'Awards confirmed and tuition invoices credited directly before CAS generation'
    ],
    benefits: [
      'Direct £10,000 deduction from your university tuition fee invoice',
      'Lower required funds to show in bank accounts for UK Student Visa (CAS reflects lower fee)',
      'Access to exclusive British Council welcome events, receptions, and workshops',
      'Eligibility for the 2-Year Graduate Route post-study work visa upon graduation'
    ],
    howToApply: [
      'Check which UK universities have partnered with the British Council for your subject.',
      'Submit your application for the university master\'s program first.',
      'Once an offer is received, fill out the university\'s dedicated GREAT scholarship application form.',
      'Coordinate with Aegis admission advisors to ensure your essay highlights community engagement.'
    ]
  },
  {
    id: 'erasmus-mundus-europe',
    slug: 'erasmus-mundus-joint-masters-europe',
    title: 'Erasmus Mundus Joint Masters (EMJM)',
    provider: 'European Commission (European Union)',
    providerType: 'Government',
    country: 'Europe (Schengen)',
    countryCode: 'EU',
    flag: '🇪🇺',
    coverageType: 'Full Tuition + Living',
    awardAmount: '100% Tuition Waiver + €1,400/month Stipend + Full Travel Insurance',
    degreeLevel: ['Master\'s'],
    fieldOfStudy: ['Data & Cloud Technologies', 'Robotics & AI', 'Renewable Energy', 'Biomedical Engineering', 'Cybersecurity', 'Public Health'],
    deadline: 'January - February (Annual)',
    applicationCycle: 'October - February',
    featured: true,
    description: 'Erasmus Mundus Joint Masters are high-level integrated study programmes designed and delivered by an international partnership of higher education institutions. Students study across at least two to three different European countries and earn a joint or double degree.',
    eligibility: [
      'Open to applicants worldwide holding a bachelor\'s degree or in the final year of undergrad.',
      'High academic record with strong foundational background in chosen subject.',
      'English proficiency (IELTS 6.5 - 7.0 or TOEFL 92 - 100).',
      'Have not previously benefited from an Erasmus Mundus Joint Master scholarship.'
    ],
    documentsRequired: [
      'Comprehensive Europass CV with detailed coursework and projects',
      'Certified transcripts in English from all tertiary education',
      'Two academic recommendation letters on official institution letterheads',
      'Letter of motivation detailing multi-country mobility rationale',
      'Proof of place of residence (utility bill or certificate of residence within 12 months)'
    ],
    selectionProcess: [
      'Consortium evaluation committee marks applications against standardized EU rubrics',
      'Interviews conducted for top 15% shortlisted candidates',
      'Consortium submits main list and reserve list to the European Education and Culture Executive Agency (EACEA)',
      'Scholarship offer letters issued between April and May'
    ],
    benefits: [
      'Full participation costs (tuition fees, laboratory costs, library fees, full health insurance)',
      'Monthly living allowance of €1,400 per month for the entire duration of the study programme (up to 24 months)',
      'Multiple Schengen student mobility visas allowing free travel and study across 2-4 EU countries',
      'Joint or multiple Master\'s degrees recognized across the European Union and worldwide'
    ],
    howToApply: [
      'Browse the Erasmus Mundus Catalogue (EMJMD Catalogue) of ~150 programs.',
      'Select up to 3 master\'s programmes to maximize admission odds.',
      'Complete consortium-specific application on the coordinator university portal.',
      'Submit customized motivation letters for each mobility track with Aegis reviews.'
    ]
  },
  {
    id: 'merit-waivers-universities',
    slug: 'global-university-merit-excellence-waivers',
    title: 'Global University Merit & Dean\'s Excellence Awards',
    provider: 'Partner Global Universities (USA, UK, Canada, Australia)',
    providerType: 'University',
    country: 'Multiple Countries',
    countryCode: 'GL',
    flag: '🌐',
    coverageType: 'Partial Tuition Waiver',
    awardAmount: '$5,000 to $25,000 / 20% to 50% Tuition Discount',
    degreeLevel: ['Bachelor\'s', 'Master\'s'],
    fieldOfStudy: ['All Disciplines (STEM, Business, Humanities, Healthcare)'],
    deadline: 'Rolling / Aligned with University Admission Intakes',
    applicationCycle: 'Year-round (Fall & Spring Intakes)',
    featured: false,
    description: 'Hundreds of leading universities in the US, UK, Australia, and Canada automatically evaluate international applicants for merit-based tuition discounts and Dean\'s Excellence awards upon receiving an admission application through Aegis Overseas.',
    eligibility: [
      'Overall undergraduate or high school academic score of 70% or 3.2+ GPA.',
      'Competitive standardized test scores where applicable (GRE 310+, GMAT 640+, or IELTS 7.0+).',
      'Early application submission prior to the priority scholarship deadline.',
      'Statement of Purpose reflecting academic promise and career focus.'
    ],
    documentsRequired: [
      'Completed university admission application form',
      'Certified mark sheets and degree certificates',
      'Statement of Purpose with clear academic goals',
      'Letters of recommendation from professors or employers',
      'English proficiency scorecard (IELTS / PTE / TOEFL / Duolingo)'
    ],
    selectionProcess: [
      'Automatic or supplementary evaluation by university admissions scholarship board',
      'Awards communicated directly within the official university offer letter or I-20 / CAS statement'
    ],
    benefits: [
      'Direct reduction in gross tuition fee, payable in split semester installments',
      'Reduced bank balance requirements for student visa financial proof',
      'Priority consideration for on-campus graduate assistantships (GA / TA / RA)',
      'Renewable for subsequent academic years based on maintaining a minimum GPA (typically 3.0+)'
    ],
    howToApply: [
      'Identify target universities with Aegis counselors offering automatic merit considerations.',
      'Prepare and submit your admissions dossier before priority deadlines (December 15 for US Fall, March 31 for UK).',
      'Receive conditional or unconditional admission offer with scholarship scholarship grant.',
      'Accept offer and finalize visa documentation with reduced payable fees.'
    ]
  }
];

export const SCHOLARSHIP_CATEGORIES = [
  { id: 'all', label: 'All Scholarships' },
  { id: 'uk', label: 'United Kingdom 🇬🇧' },
  { id: 'usa', label: 'United States 🇺🇸' },
  { id: 'canada', label: 'Canada 🇨🇦' },
  { id: 'australia', label: 'Australia 🇦🇺' },
  { id: 'germany', label: 'Germany 🇩🇪' },
  { id: 'ireland', label: 'Ireland 🇮🇪' },
  { id: 'europe', label: 'Europe (Schengen) 🇪🇺' }
];

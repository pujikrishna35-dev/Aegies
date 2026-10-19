export type ScholarshipStatus = 'Open' | 'Upcoming' | 'Closed' | 'Check Eligibility' | 'Discontinued';
export type ScholarshipCoverageType = 'Full' | 'Partial' | 'Grant / Fee Waiver' | 'Discontinued';
export type ScholarshipCountry = 'United Kingdom' | 'United States' | 'Canada' | 'Australia' | 'Germany' | 'Ireland' | 'Europe' | 'Multiple Countries';

export interface ScholarshipTimelineItem {
  stage: string;
  date: string;
  detail: string;
  status?: 'past' | 'current' | 'upcoming';
}

export interface ScholarshipFAQ {
  question: string;
  answer: string;
}

export interface Scholarship {
  id: string;
  slug: string;
  name: string;
  title: string; // compatibility alias for name
  provider: string; // compatibility alias for administeringBody
  administeringBody: string;
  providerType?: 'Government' | 'University' | 'Trust / Foundation' | 'Corporate';
  country: ScholarshipCountry;
  countryCode: string;
  flag: string;
  status: ScholarshipStatus;
  statusBadgeText?: string;
  statusNote?: string;
  studyLevel: 'Master\'s' | 'Doctoral / PhD' | 'Bachelor\'s & Master\'s' | 'Master\'s & Doctoral';
  degreeLevel?: string[];
  coverageType: ScholarshipCoverageType;
  awardAmount: string; // compatibility alias for coverageSummary
  coverageSummary: string;
  coverageDetails: string[];
  opens: string;
  deadline: string;
  deadlineIsEstimated?: boolean;
  fields: string[];
  fieldOfStudy?: string[];
  overview: string;
  description?: string;
  heroImage?: string;
  eligibilityCriteria: string[];
  eligibility?: string[];
  eligibleFields: string[];
  keyBenefits: string[];
  benefits?: string[];
  applicationProcess: string[];
  howToApply?: string[];
  documentsRequired: string[];
  selectionProcess: string[];
  tips: string[];
  timeline: ScholarshipTimelineItem[];
  faqs: ScholarshipFAQ[];
  officialSourceUrl: string;
  lastVerifiedDate: string;
  guideDownloadText?: string;
  requiresManualVerification?: boolean;
  verificationNotes?: string;
  featured?: boolean;
}

export type ScholarshipData = Scholarship;

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'chevening-uk',
    slug: 'chevening-scholarships',
    name: 'Chevening Scholarships',
    title: 'Chevening Scholarships',
    administeringBody: 'Foreign, Commonwealth & Development Office (FCDO)',
    provider: 'Foreign, Commonwealth & Development Office (FCDO)',
    providerType: 'Government',
    country: 'United Kingdom',
    countryCode: 'GB',
    flag: '🇬🇧',
    status: 'Open',
    statusBadgeText: 'Open',
    statusNote: 'Applications are open for every intake with dedicated guidance from Aegis counselors.',
    studyLevel: 'Master\'s',
    degreeLevel: ['Master\'s'],
    coverageType: 'Full',
    coverageSummary: 'Full tuition + living allowance + approved travel + other allowances',
    awardAmount: 'Full tuition + living allowance + approved travel + other allowances',
    coverageDetails: [
      'Full payment of university tuition fees for eligible one-year master’s courses',
      'Monthly living allowance (stipend)',
      'Economy return flights to and from the UK',
      'Arrival allowance and departure allowance',
      'Visa application fee reimbursement',
      'Contribution towards mandatory TB testing where applicable'
    ],
    opens: 'Open for Every Intake',
    deadline: 'Always Open (All Intakes)',
    deadlineIsEstimated: false,
    fields: ['Public Policy', 'Leadership', 'International Relations', 'STEM', 'Business'],
    fieldOfStudy: ['Public Policy', 'Leadership', 'International Relations', 'STEM', 'Business'],
    overview: 'The Chevening Scholarships are the UK government\'s global scholarship programme for outstanding future leaders. Funded by the Foreign, Commonwealth & Development Office (FCDO) and partner organisations, they offer full financial support for one-year master\'s degrees at UK universities. Chevening scholars join a global network of over 55,000 alumni who are making a positive difference in their home countries.',
    description: 'The Chevening Scholarships are the UK government\'s global scholarship programme for outstanding future leaders. Funded by the Foreign, Commonwealth & Development Office (FCDO) and partner organisations, they offer full financial support for one-year master\'s degrees at UK universities. Chevening scholars join a global network of over 55,000 alumni who are making a positive difference in their home countries.',
    heroImage: '/images/scholarships/westminster.jpg',
    eligibilityCriteria: [
      'Be a citizen of an eligible country or territory (including India).',
      'Have a minimum of 2 years (2,800 hours) of demonstrable work experience.',
      'Hold an undergraduate degree that qualifies you for a UK master\'s programme (equivalent to an upper second-class 2:1 honours).',
      'Meet the English language requirement (IELTS, TOEFL, or university specified test).',
      'Demonstrate leadership skills and a clear plan to contribute to your home country upon return.',
      'Not hold British or dual British citizenship.'
    ],
    eligibility: [
      'Be a citizen of an eligible country or territory (including India).',
      'Have a minimum of 2 years (2,800 hours) of demonstrable work experience.',
      'Hold an undergraduate degree that qualifies you for a UK master\'s programme (equivalent to an upper second-class 2:1 honours).',
      'Meet the English language requirement (IELTS, TOEFL, or university specified test).',
      'Demonstrate leadership skills and a clear plan to contribute to your home country upon return.',
      'Not hold British or dual British citizenship.'
    ],
    eligibleFields: [
      'All master\'s level courses at UK universities (except MBA, part-time, or distance learning courses).'
    ],
    keyBenefits: [
      'Full payment of university tuition fees',
      'Monthly living allowance',
      'Return travel to the UK',
      'Visa application fee support',
      'Additional grants for approved study-related costs',
      'Access to a global network of Chevening alumni'
    ],
    benefits: [
      'Full payment of university tuition fees',
      'Monthly living allowance',
      'Return travel to the UK',
      'Visa application fee support',
      'Additional grants for approved study-related costs',
      'Access to a global network of Chevening alumni'
    ],
    applicationProcess: [
      'Submit an online application through the Chevening online application portal before the October deadline.',
      'Complete four 500-word essays covering Leadership & Influence, Networking, Studying in the UK, and Long-term Career Goals.',
      'Apply separately to three eligible UK master\'s courses by December.',
      'Shortlisted candidates attend an in-person interview at the British High Commission / Embassy.',
      'Secure an unconditional offer from at least one course choice by July.'
    ],
    howToApply: [
      'Submit an online application through the Chevening online application portal before the October deadline.',
      'Complete four 500-word essays covering Leadership & Influence, Networking, Studying in the UK, and Long-term Career Goals.',
      'Apply separately to three eligible UK master\'s courses by December.',
      'Shortlisted candidates attend an in-person interview at the British High Commission / Embassy.',
      'Secure an unconditional offer from at least one course choice by July.'
    ],
    documentsRequired: [
      'Valid international passport',
      'Official university academic transcripts and graduation degree certificates',
      'Four 500-word Chevening essays',
      'Two professional or academic reference letters',
      'Unconditional admission offer letters from eligible UK universities'
    ],
    selectionProcess: [
      'Initial eligibility and completeness check by the Chevening Secretariat (October).',
      'Independent Reading Committee evaluation against academic excellence and leadership criteria (November–December).',
      'Interviews conducted by British High Commission panels (February–April).',
      'Final global selection announcement and award confirmation (June).'
    ],
    tips: [
      'Start drafting your four essays at least 2 months prior to opening. Connect specific past leadership examples to systemic impact.',
      'Ensure your three university choices strongly correlate with your home country development goals.',
      'Quantify achievements in your CV and work experience descriptions.'
    ],
    timeline: [
      { stage: 'Applications Open', date: 'August 2026', detail: 'Online applications open at 12:00 UTC', status: 'past' },
      { stage: 'Application Deadline', date: '6 October 2026', detail: 'Applications close at 12:00 UTC (Closed)', status: 'past' },
      { stage: 'Interviews & Shortlisting', date: 'Nov 2026 – Mar 2027', detail: 'Interviews for selected candidates at British High Commission', status: 'upcoming' },
      { stage: 'Results & Departure', date: 'Jul – Sep 2027', detail: 'Final announcements, visa processing and UK departure', status: 'upcoming' }
    ],
    faqs: [
      { question: 'Can I apply for Chevening before getting an admission offer?', answer: 'Yes. You do not need university admission offers when submitting your Chevening application in October. However, you must apply to three courses separately and secure at least one unconditional offer by July.' },
      { question: 'Is the 2 years of work experience strictly required?', answer: 'Yes. Chevening requires a minimum of 2,800 hours of verifiable work experience (full-time, part-time, voluntary, or paid internships).' },
      { question: 'Can I stay in the UK after graduation under Chevening?', answer: 'No. Chevening scholars must commit to returning to their country of citizenship for a minimum of two years post-graduation to contribute to national development.' }
    ],
    officialSourceUrl: 'https://www.chevening.org/scholarships/india/',
    lastVerifiedDate: '14 October 2026',
    requiresManualVerification: false,
    featured: true
  },
  {
    id: 'fulbright-us',
    slug: 'fulbright-nehru-masters',
    name: 'Fulbright-Nehru Master\'s Fellowships',
    title: 'Fulbright-Nehru Master\'s Fellowships',
    administeringBody: 'US-India Educational Foundation (USIEF)',
    provider: 'US-India Educational Foundation (USIEF)',
    providerType: 'Government',
    country: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    status: 'Open',
    statusBadgeText: 'Open',
    statusNote: 'Applications are open for every intake with dedicated guidance from Aegis counselors.',
    studyLevel: 'Master\'s',
    degreeLevel: ['Master\'s'],
    coverageType: 'Full',
    coverageSummary: 'Tuition + living + health insurance + round-trip airfare + book/settling-in allowance',
    awardAmount: 'Tuition + living + health insurance + round-trip airfare + book/settling-in allowance',
    coverageDetails: [
      'J-1 visa sponsorship and round-trip economy airfare',
      'Full tuition and mandatory university fees waiver/coverage',
      'Monthly living stipend and settling-in allowance',
      'Accident and sickness coverage per US Government guidelines'
    ],
    opens: 'Open for Every Intake',
    deadline: 'Always Open (All Intakes)',
    deadlineIsEstimated: false,
    fields: ['Arts & Humanities', 'STEM', 'Public Administration', 'Environment'],
    fieldOfStudy: ['Arts & Humanities', 'STEM', 'Public Administration', 'Environment'],
    overview: 'The Fulbright-Nehru Master\'s Fellowships are designed for highly motivated Indian graduates with demonstrable leadership qualities and substantial commitment to return and contribute to India. Offered by the United States-India Educational Foundation (USIEF), the fellowship funds one to two-year master\'s degree programmes at select U.S. colleges and universities.',
    description: 'The Fulbright-Nehru Master\'s Fellowships are designed for highly motivated Indian graduates with demonstrable leadership qualities and substantial commitment to return and contribute to India. Offered by the United States-India Educational Foundation (USIEF), the fellowship funds one to two-year master\'s degree programmes at select U.S. colleges and universities.',
    heroImage: '/images/scholarships/westminster.jpg',
    eligibilityCriteria: [
      'Must be an Indian citizen residing in India at the time of application.',
      'Must have completed an equivalent of a U.S. bachelor\'s degree (4-year degree or a master\'s degree if bachelor\'s was 3 years) with at least 55% marks.',
      'Must have at least three years of full-time paid professional work experience relevant to the proposed field of study.',
      'Must demonstrate leadership and community service track record.',
      'Must commit to returning to India upon completion of fellowship.'
    ],
    eligibility: [
      'Must be an Indian citizen residing in India at the time of application.',
      'Must have completed an equivalent of a U.S. bachelor\'s degree (4-year degree or a master\'s degree if bachelor\'s was 3 years) with at least 55% marks.',
      'Must have at least three years of full-time paid professional work experience relevant to the proposed field of study.',
      'Must demonstrate leadership and community service track record.',
      'Must commit to returning to India upon completion of fellowship.'
    ],
    eligibleFields: [
      'Arts and Culture Management, Economics, Environmental Science/Studies, Higher Education Administration, International Affairs, Public Policy and Public Administration, Urban and Regional Planning, Women\'s Studies/Gender Studies.'
    ],
    keyBenefits: [
      'Full tuition and institutional fees',
      'Monthly living stipend',
      'Round-trip international airfare between India and the U.S.',
      'Accident and sickness health insurance',
      'Books and settling-in allowance'
    ],
    benefits: [
      'Full tuition and institutional fees',
      'Monthly living stipend',
      'Round-trip international airfare between India and the U.S.',
      'Accident and sickness health insurance',
      'Books and settling-in allowance'
    ],
    applicationProcess: [
      'Complete the online application via the USIEF portal during the open window (typically February to May).',
      'Upload Statement of Purpose, Study Objectives, detailed CV, and 3 confidential recommendation letters.',
      'Participate in regional interviews conducted by USIEF and US Embassy officials.',
      'Placement at U.S. institutions is coordinated directly by the Institute of International Education (IIE).'
    ],
    howToApply: [
      'Complete the online application via the USIEF portal during the open window (typically February to May).',
      'Upload Statement of Purpose, Study Objectives, detailed CV, and 3 confidential recommendation letters.',
      'Participate in regional interviews conducted by USIEF and US Embassy officials.',
      'Placement at U.S. institutions is coordinated directly by the Institute of International Education (IIE).'
    ],
    documentsRequired: [
      'Official academic transcripts from all post-secondary institutions',
      'Three confidential letters of reference',
      'Fulbright Study Objective and Personal Statement essays',
      'Valid Indian passport',
      'Proof of at least 3 years paid professional experience'
    ],
    selectionProcess: [
      'Technical review and administrative screening by USIEF.',
      'Peer review panels by academic specialists in relevant fields.',
      'National interview panels in New Delhi for shortlisted applicants.',
      'Approval by J. William Fulbright Foreign Scholarship Board (FFSB) in Washington, D.C.'
    ],
    tips: [
      'Emphasize how your proposed field will directly address key development priorities in India.',
      'Articulate why your study requires a U.S. academic environment rather than domestic programmes.'
    ],
    timeline: [
      { stage: 'Official Announcement', date: 'February 2027', detail: 'USIEF releases the competition guidelines (Expected)', status: 'upcoming' },
      { stage: 'Application Deadline', date: 'May 2027', detail: 'Online submission deadline (Subject to official announcement)', status: 'upcoming' },
      { stage: 'Interviews & Shortlisting', date: 'August – October 2027', detail: 'In-person interviews at USIEF New Delhi', status: 'upcoming' },
      { stage: 'Final Placement & Departure', date: 'July – August 2028', detail: 'Pre-departure orientation and departure for U.S. campus', status: 'upcoming' }
    ],
    faqs: [
      { question: 'Is GRE/TOEFL required at the time of application?', answer: 'USIEF does not require GRE scores at initial submission; however, selected finalists will be funded to take standardized tests required by assigned U.S. institutions.' },
      { question: 'Does a 3-year Indian bachelor\'s degree qualify?', answer: 'A 3-year bachelor\'s alone does not qualify. You must have completed a subsequent master\'s or a 1-year postgraduate diploma to meet the 16-year education benchmark.' }
    ],
    officialSourceUrl: 'https://www.usief.org.in/',
    lastVerifiedDate: '14 October 2026',
    requiresManualVerification: false,
    featured: true
  },
  {
    id: 'daad-germany',
    slug: 'daad-helmut-schmidt',
    name: 'DAAD Helmut-Schmidt Programme',
    title: 'DAAD Helmut-Schmidt Programme',
    administeringBody: 'German Academic Exchange Service (DAAD)',
    provider: 'German Academic Exchange Service (DAAD)',
    providerType: 'Government',
    country: 'Germany',
    countryCode: 'DE',
    flag: '🇩🇪',
    status: 'Open',
    statusBadgeText: 'Open',
    statusNote: 'Applications are open for every intake with dedicated guidance from Aegis counselors.',
    studyLevel: 'Master\'s',
    degreeLevel: ['Master\'s'],
    coverageType: 'Full',
    coverageSummary: '€934–€1,200/per month + health insurance (programme-specific)',
    awardAmount: '€934–€1,200/per month + health insurance (programme-specific)',
    coverageDetails: [
      'Monthly scholarship payment of €934 per month (master’s level)',
      'Contributions to health, accident and personal liability insurance in Germany',
      'Travel allowance for round-trip flights',
      'Study and research subsidy plus rent subsidies where applicable',
      'Pre-sessional German language course (up to 6 months funded)'
    ],
    opens: 'Open for Every Intake',
    deadline: 'Always Open (All Intakes)',
    deadlineIsEstimated: false,
    fields: ['Public Policy', 'Governance', 'Social Sciences', 'Economics'],
    fieldOfStudy: ['Public Policy', 'Governance', 'Social Sciences', 'Economics'],
    overview: 'The DAAD Helmut-Schmidt Programme (Master\'s Scholarships for Public Policy and Good Governance - PPGG) supports future leaders from developing and emerging countries who want to promote democracy and social justice. The programme covers taught master\'s degrees in political science, economics, and public administration at renowned German universities.',
    description: 'The DAAD Helmut-Schmidt Programme (Master\'s Scholarships for Public Policy and Good Governance - PPGG) supports future leaders from developing and emerging countries who want to promote democracy and social justice. The programme covers taught master\'s degrees in political science, economics, and public administration at renowned German universities.',
    heroImage: '/images/scholarships/westminster.jpg',
    eligibilityCriteria: [
      'Graduates from developing and emerging countries with a first university degree in social sciences, political sciences, law, economics, or public administration.',
      'Degree obtained with above-average results (upper third).',
      'Degree must have been completed within the last six years prior to application.',
      'Strong civic commitment, leadership potential, and motivation to contribute to socio-political development in home country.'
    ],
    eligibility: [
      'Graduates from developing and emerging countries with a first university degree in social sciences, political sciences, law, economics, or public administration.',
      'Degree obtained with above-average results (upper third).',
      'Degree must have been completed within the last six years prior to application.',
      'Strong civic commitment, leadership potential, and motivation to contribute to socio-political development in home country.'
    ],
    eligibleFields: [
      'Social Protection, Development and Governance, Public Policy, Peace and Conflict Studies, International Relations, Public Economics.'
    ],
    keyBenefits: [
      'Tuition-free study at German public partner institutions',
      'Monthly stipend of €934',
      'Travel subsidy to/from Germany',
      'Health and liability insurance coverage',
      'Paid intensive German language course before academic start'
    ],
    benefits: [
      'Tuition-free study at German public partner institutions',
      'Monthly stipend of €934',
      'Travel subsidy to/from Germany',
      'Health and liability insurance coverage',
      'Paid intensive German language course before academic start'
    ],
    applicationProcess: [
      'Submit your application directly to the participating Master’s programmes (up to two choices) during the open call (June 1 – July 31).',
      'Complete the DAAD application form and indicate course priorities.',
      'Submit tailored motivation letters explaining academic choice and developmental impact.'
    ],
    howToApply: [
      'Submit your application directly to the participating Master’s programmes (up to two choices) during the open call (June 1 – July 31).',
      'Complete the DAAD application form and indicate course priorities.',
      'Submit tailored motivation letters explaining academic choice and developmental impact.'
    ],
    documentsRequired: [
      'DAAD Application Form',
      'Single letter of motivation for both chosen master’s courses',
      'Europass CV with signature and date',
      'Degree certificates and academic transcripts with certified English/German translations',
      'Proof of English proficiency (TOEFL/IELTS)'
    ],
    selectionProcess: [
      'Review and pre-selection by admission committees at partner universities (August–October).',
      'Joint selection committee of university professors and DAAD representatives (November–December).',
      'Final notification to selected scholars (December–January).'
    ],
    tips: [
      'Applications are submitted directly to the universities, NOT via the DAAD portal. Follow each master programme’s specific submission portal instructions.',
      'Prioritize social engagement and volunteer work prominently in your CV.'
    ],
    timeline: [
      { stage: 'Application Window Opens', date: 'June 2026', detail: 'Application period commences across partner German universities', status: 'past' },
      { stage: 'Application Deadline', date: '31 July 2026', detail: 'Applications strictly close at midnight CET', status: 'current' },
      { stage: 'Selection Committees', date: 'Oct – Dec 2026', detail: 'Academic evaluation and selection panel convenes', status: 'upcoming' },
      { stage: 'Language Course & Intake', date: 'April / October 2027', detail: 'German language training followed by academic semester start', status: 'upcoming' }
    ],
    faqs: [
      { question: 'Do I need German language skills to apply?', answer: 'No. All participating Helmut-Schmidt master courses are taught entirely in English. A free German language course is provided by DAAD prior to university commencement.' },
      { question: 'Can I apply to more than two courses?', answer: 'No. DAAD strictly caps your application at a maximum of two participating Master’s programmes, and you must rank them as Priority 1 and Priority 2.' }
    ],
    officialSourceUrl: 'https://www.daad.de/en/studying-in-germany/scholarships/',
    lastVerifiedDate: '14 October 2026',
    requiresManualVerification: false,
    featured: true
  },
  {
    id: 'australia-awards',
    slug: 'australia-awards',
    name: 'Australia Awards Scholarships',
    title: 'Australia Awards Scholarships',
    administeringBody: 'Department of Foreign Affairs and Trade (DFAT)',
    provider: 'Department of Foreign Affairs and Trade (DFAT)',
    providerType: 'Government',
    country: 'Australia',
    countryCode: 'AU',
    flag: '🇦🇺',
    status: 'Open',
    statusBadgeText: 'Open',
    statusNote: 'Applications are open for every intake with dedicated guidance from Aegis counselors.',
    studyLevel: 'Master\'s & Doctoral',
    degreeLevel: ['Master\'s', 'PhD'],
    coverageType: 'Full',
    coverageSummary: 'Full tuition + A$30,000–35K/yr living allowance + travel (if eligible; check country specific)',
    awardAmount: 'Full tuition + A$30,000–35K/yr living allowance + travel (if eligible; check country specific)',
    coverageDetails: [
      'Full tuition fees for duration of master’s or doctoral degree',
      'Return economy air travel to and from Australia',
      'Establishment allowance towards accommodation and textbooks',
      'Contribution to Living Expenses (CLE) paid fortnightly (~A$30,000–$35,000/year)',
      'Overseas Student Health Cover (OSHC) for award duration'
    ],
    opens: 'Open for Every Intake',
    deadline: 'Always Open (All Intakes)',
    deadlineIsEstimated: false,
    fields: ['Development', 'Health', 'Environment', 'Governance'],
    fieldOfStudy: ['Development', 'Health', 'Environment', 'Governance'],
    overview: 'Australia Awards Scholarships are prestigious long-term awards administered by the Department of Foreign Affairs and Trade (DFAT). They aim to contribute to the development needs of Australia\'s partner countries in line with bilateral and regional agreements. They provide opportunities for emerging leaders to undertake full-time postgraduate study at participating Australian universities.',
    description: 'Australia Awards Scholarships are prestigious long-term awards administered by the Department of Foreign Affairs and Trade (DFAT). They aim to contribute to the development needs of Australia\'s partner countries in line with bilateral and regional agreements. They provide opportunities for emerging leaders to undertake full-time postgraduate study at participating Australian universities.',
    heroImage: '/images/scholarships/westminster.jpg',
    eligibilityCriteria: [
      'Citizen of an eligible participating country (Note: Indian applicants must verify specific bilateral quotas or targeted categories).',
      'At least 18 years of age at application.',
      'Hold a bachelor\'s degree with strong academic performance.',
      'Meet DFAT English requirements (IELTS 6.5 or equivalent).',
      'Commit to leaving Australia for at least two years upon completion of the award.'
    ],
    eligibility: [
      'Citizen of an eligible participating country (Note: Indian applicants must verify specific bilateral quotas or targeted categories).',
      'At least 18 years of age at application.',
      'Hold a bachelor\'s degree with strong academic performance.',
      'Meet DFAT English requirements (IELTS 6.5 or equivalent).',
      'Commit to leaving Australia for at least two years upon completion of the award.'
    ],
    eligibleFields: [
      'Target fields aligned with Australian aid priorities: Climate Change & Resilience, Public Health, Infrastructure & Blue Economy, Digital Transformation.'
    ],
    keyBenefits: [
      'Full university tuition fees',
      'Round-trip international air travel',
      'Establishment grant upon arrival in Australia',
      'Fortnightly living stipend',
      'Comprehensive Overseas Student Health Cover (OSHC)'
    ],
    benefits: [
      'Full university tuition fees',
      'Round-trip international air travel',
      'Establishment grant upon arrival in Australia',
      'Fortnightly living stipend',
      'Comprehensive Overseas Student Health Cover (OSHC)'
    ],
    applicationProcess: [
      'Check your country profile on the DFAT website to confirm opening dates and target categories.',
      'Apply online via the OASIS (Online Australia Awards Scholarships Information System) portal.',
      'Provide certified academic and citizenship documents plus referee reports.'
    ],
    howToApply: [
      'Check your country profile on the DFAT website to confirm opening dates and target categories.',
      'Apply online via the OASIS (Online Australia Awards Scholarships Information System) portal.',
      'Provide certified academic and citizenship documents plus referee reports.'
    ],
    documentsRequired: [
      'Certified copy of passport or birth certificate',
      'Certified copies of all academic transcripts and graduation awards',
      'Curriculum Vitae detailing development experience',
      'Two academic or employment referee reports'
    ],
    selectionProcess: [
      'Assessment against development criteria and country priority areas.',
      'Shortlisting by country selection committees.',
      'In-person or video interviews with DFAT officials and subject matter experts.'
    ],
    tips: [
      'Always check the specific Participating Country Profile page on the DFAT website before applying, as eligibility guidelines vary significantly year to year.'
    ],
    timeline: [
      { stage: 'Applications Open', date: 'February 2027', detail: 'OASIS portal opens for participating countries', status: 'upcoming' },
      { stage: 'Application Deadline', date: 'April 2027', detail: 'Country-specific deadlines close on OASIS', status: 'upcoming' },
      { stage: 'Interviews & Shortlisting', date: 'June – August 2027', detail: 'Shortlisted candidates interviewed', status: 'upcoming' },
      { stage: 'Mobilisation & Intake', date: 'January 2028', detail: 'Pre-departure training and Australian university orientation', status: 'upcoming' }
    ],
    faqs: [
      { question: 'Is India eligible for Australia Awards?', answer: 'Under DFAT guidelines, scholarship eligibility for Indian nationals is strictly limited to specific bilateral programmes or priority research sectors. General public applications may not be open every cycle. Contact Aegis to evaluate alternate Australian university excellence awards.' }
    ],
    officialSourceUrl: 'https://www.dfat.gov.au/people-to-people/australia-awards/participating-countries',
    lastVerifiedDate: '14 October 2026',
    requiresManualVerification: true,
    verificationNotes: 'Bilateral quotas for India under Australia Awards vary annually; verify active categories with DFAT Participating Country profiles before applying.',
    featured: true
  },
  {
    id: 'cgrs-d-canada',
    slug: 'canada-graduate-research-scholarship-doctoral',
    name: 'Canada Graduate Research Scholarship – Doctoral (CGRS D)',
    title: 'Canada Graduate Research Scholarship – Doctoral (CGRS D)',
    administeringBody: 'Canadian Institutes of Health Research, NSERC and SSHRC',
    provider: 'Canadian Institutes of Health Research, NSERC and SSHRC',
    providerType: 'Government',
    country: 'Canada',
    countryCode: 'CA',
    flag: '🇨🇦',
    status: 'Open',
    statusBadgeText: 'Open',
    statusNote: 'Applications are open for every intake with dedicated guidance from Aegis counselors.',
    studyLevel: 'Doctoral / PhD',
    degreeLevel: ['PhD'],
    coverageType: 'Full',
    coverageSummary: 'CAD $40,000 per year × 3 years (Total potential value: CAD $120,000 over 36 months)',
    awardAmount: 'CAD $40,000 per year × 3 years',
    coverageDetails: [
      'CAD $40,000 per year for up to 3 years (36 months)',
      'Total potential value: CAD $120,000 across doctoral tenure',
      'Unified federal doctoral research award funded jointly by CIHR, NSERC and SSHRC',
      'Provides high-calibre doctoral researchers with substantial financial independence'
    ],
    opens: 'Open for Every Intake',
    deadline: 'Always Open (All Intakes)',
    deadlineIsEstimated: false,
    fields: ['Federal Research Award', 'Health Research', 'STEM', 'Social Sciences & Humanities'],
    fieldOfStudy: ['Federal Research Award', 'Health Research', 'STEM', 'Social Sciences & Humanities'],
    overview: 'The Canada Graduate Research Scholarship – Doctoral (CGRS D) programme is Canada\'s premier federal doctoral research scholarship. Administered collaboratively by the Canadian Institutes of Health Research (CIHR), the Natural Sciences and Engineering Research Council (NSERC), and the Social Sciences and Humanities Research Council (SSHRC), it supports high-calibre doctoral students with CAD $40,000 per year for 3 years.',
    description: 'The Canada Graduate Research Scholarship – Doctoral (CGRS D) programme is Canada\'s premier federal doctoral research scholarship. Administered collaboratively by the Canadian Institutes of Health Research (CIHR), the Natural Sciences and Engineering Research Council (NSERC), and the Social Sciences and Humanities Research Council (SSHRC), it supports high-calibre doctoral students with CAD $40,000 per year for 3 years.',
    heroImage: '/images/scholarships/westminster.jpg',
    eligibilityCriteria: [
      'International eligibility: International applicants generally must already be enrolled in a doctoral programme at an eligible Canadian institution by the deadline.',
      'Up to 15% of awards are available to international applicants.',
      'Must have completed no more than 24 months of full-time study in their doctoral programme by December 31 of the competition year.',
      'Must submit a competitive research proposal in health research, natural sciences and engineering, or social sciences and humanities.',
      'Must not have previously held a doctoral-level federal tri-agency award.'
    ],
    eligibility: [
      'International eligibility: International applicants generally must already be enrolled in a doctoral programme at an eligible Canadian institution by the deadline.',
      'Up to 15% of awards are available to international applicants.',
      'Must have completed no more than 24 months of full-time study in their doctoral programme by December 31 of the competition year.',
      'Must submit a competitive research proposal in health research, natural sciences and engineering, or social sciences and humanities.',
      'Must not have previously held a doctoral-level federal tri-agency award.'
    ],
    eligibleFields: [
      'Canadian Institutes of Health Research (CIHR) – Health & Medical Sciences',
      'Natural Sciences and Engineering Research Council (NSERC) – STEM Disciplines',
      'Social Sciences and Humanities Research Council (SSHRC) – Arts, Humanities & Social Sciences'
    ],
    keyBenefits: [
      'CAD $40,000 per year living and research stipend for 3 years',
      'Total potential value: CAD $120,000 over 36 months',
      'Prestige of Canada\'s premier federal doctoral research award',
      'Institutional support and research mobility opportunities'
    ],
    benefits: [
      'CAD $40,000 per year living and research stipend for 3 years',
      'Total potential value: CAD $120,000 over 36 months',
      'Prestige of Canada\'s premier federal doctoral research award',
      'Institutional support and research mobility opportunities'
    ],
    applicationProcess: [
      'Determine your application channel: either through an eligible Canadian institution with an institutional quota, or directly to the federal agency.',
      'Confirm institutional deadlines with your host Canadian university (often in September, prior to the agency deadline).',
      'Submit the complete CGRS D application on the official agency research portal before October 17 at 20:00 (ET).'
    ],
    howToApply: [
      'Determine your application channel: either through an eligible Canadian institution with an institutional quota, or directly to the federal agency.',
      'Confirm institutional deadlines with your host Canadian university (often in September, prior to the agency deadline).',
      'Submit the complete CGRS D application on the official agency research portal before October 17 at 20:00 (ET).'
    ],
    documentsRequired: [
      'Official CGRS D Application Form',
      'Outline of proposed research project and bibliography',
      'Official academic transcripts from all post-secondary institutions',
      'Two Letters of Appraisal from academic referees',
      'Canada Common CV (CCV) or Agency-specific research track record'
    ],
    selectionProcess: [
      'Internal university selection committee evaluates and nominates candidates under their quota allocation (September–October).',
      'Multidisciplinary federal peer review selection committees evaluate research ability (50%) and relevant experience/achievements (50%).',
      'Final awards announcement communicated in spring.'
    ],
    tips: [
      'Because institutional deadlines are typically in September (earlier than the 17 October agency deadline), contact your Canadian graduate studies office early in the summer.',
      'Highlight concrete research publications, presentations, and methodologies clearly in your proposal.'
    ],
    timeline: [
      { stage: 'Application Call Opens', date: 'Summer 2026', detail: 'Agency portals open for 2026–2027 competition', status: 'past' },
      { stage: 'Institutional Deadlines', date: 'September 2026', detail: 'Internal university deadlines for applicants with quotas', status: 'current' },
      { stage: 'Agency Deadline', date: '17 October 2026', detail: 'Direct agency applications close at 20:00 ET (Current 2026 call)', status: 'current' },
      { stage: 'Results Announcement', date: 'April – May 2027', detail: 'Notification of decisions to applicants', status: 'upcoming' }
    ],
    faqs: [
      { question: 'Can international students apply for CGRS D?', answer: 'Yes. Up to 15% of awards across CIHR, NSERC and SSHRC are available to international applicants. However, international applicants generally must already be enrolled in an eligible doctoral programme at a Canadian institution by the application deadline.' },
      { question: 'What is the award value and tenure?', answer: 'The award provides CAD $40,000 per year for up to 3 years (36 months), totaling a potential value of CAD $120,000.' },
      { question: 'Does CGRS D replace the Vanier CGS?', answer: 'Yes. Canada Graduate Research Scholarship – Doctoral (CGRS D) represents the modernized federal doctoral awards system established by the tri-agencies.' }
    ],
    officialSourceUrl: 'https://nserc.canada.ca/en/funding-opportunities',
    lastVerifiedDate: '14 October 2026',
    requiresManualVerification: false
  },
  {
    id: 'goi-ies-ireland',
    slug: 'goi-ies-ireland',
    name: 'Government of Ireland International Education Scholarships (GOI-IES)',
    title: 'Government of Ireland International Education Scholarships (GOI-IES)',
    administeringBody: 'Higher Education Authority (HEA)',
    provider: 'Higher Education Authority (HEA)',
    providerType: 'Government',
    country: 'Ireland',
    countryCode: 'IE',
    flag: '🇮🇪',
    status: 'Open',
    statusBadgeText: 'Open',
    statusNote: 'Applications are open for every intake with dedicated guidance from Aegis counselors.',
    studyLevel: 'Master\'s & Doctoral',
    degreeLevel: ['Master\'s', 'PhD'],
    coverageType: 'Full',
    coverageSummary: '€10,000 stipend + full fee waiver (1 year)',
    awardAmount: '€10,000 stipend + full fee waiver (1 year)',
    coverageDetails: [
      '€10,000 stipend for one study year towards student living costs',
      'Full tuition fee waiver covering 100% of non-EU tuition fees from the host Irish Higher Education Institution (HEI)',
      'Awarded to 60 high-achieving non-EU/EEA students annually across all disciplines'
    ],
    opens: 'Open for Every Intake',
    deadline: 'Always Open (All Intakes)',
    deadlineIsEstimated: false,
    fields: ['All Disciplines', 'STEM', 'Humanities', 'Business'],
    fieldOfStudy: ['All Disciplines', 'STEM', 'Humanities', 'Business'],
    overview: 'The Government of Ireland International Education Scholarships (GOI-IES) are awarded by the Higher Education Authority (HEA) on behalf of the Irish Department of Further and Higher Education, Research, Innovation and Science. The initiative awards 60 scholarships to high-calibre international students from non-EU/EEA countries for one year of full-time master\'s or PhD study at eligible Irish higher education institutions.',
    description: 'The Government of Ireland International Education Scholarships (GOI-IES) are awarded by the Higher Education Authority (HEA) on behalf of the Irish Department of Further and Higher Education, Research, Innovation and Science. The initiative awards 60 scholarships to high-calibre international students from non-EU/EEA countries for one year of full-time master\'s or PhD study at eligible Irish higher education institutions.',
    heroImage: '/images/scholarships/westminster.jpg',
    eligibilityCriteria: [
      'Domiciled in a non-EU/EEA country (including India).',
      'Possess an offer of admission to an eligible Irish Higher Education Institution for a master\'s or doctoral programme.',
      'Outstanding academic record with high grades in previous degrees.',
      'Excellent communication skills and strong rationale for studying in Ireland.'
    ],
    eligibility: [
      'Domiciled in a non-EU/EEA country (including India).',
      'Possess an offer of admission to an eligible Irish Higher Education Institution for a master\'s or doctoral programme.',
      'Outstanding academic record with high grades in previous degrees.',
      'Excellent communication skills and strong rationale for studying in Ireland.'
    ],
    eligibleFields: [
      'All subject fields offered at accredited Irish universities and Institutes of Technology.'
    ],
    keyBenefits: [
      'Full tuition fee waiver for one academic year',
      'Direct living stipend of €10,000 paid across the academic year',
      'Prestige as an official Government of Ireland scholar'
    ],
    benefits: [
      'Full tuition fee waiver for one academic year',
      'Direct living stipend of €10,000 paid across the academic year',
      'Prestige as an official Government of Ireland scholar'
    ],
    applicationProcess: [
      'First apply to an eligible Irish university and receive a conditional or unconditional offer letter.',
      'Submit an application online through the official HEA web portal once the call is opened.',
      'Provide academic references, transcripts, and personal statements.'
    ],
    howToApply: [
      'First apply to an eligible Irish university and receive a conditional or unconditional offer letter.',
      'Submit an application online through the official HEA web portal once the call is opened.',
      'Provide academic references, transcripts, and personal statements.'
    ],
    documentsRequired: [
      'Letter of offer from an eligible Irish Higher Education Institution',
      'Academic transcripts and graduation awards',
      'Two letters of recommendation',
      'Valid passport identification'
    ],
    selectionProcess: [
      'HEA independent assessment panel scores applications based on academic credentials (40%), personal statement and motivation (40%), and letters of reference (20%).',
      'Endorsement and institutional verification by host Irish universities.'
    ],
    tips: [
      'Securing an offer from an Irish university early (by January) is critical, as you cannot apply to the HEA portal without an active application/offer ID.'
    ],
    timeline: [
      { stage: 'Call Opens', date: '29 January 2026', detail: 'HEA application portal opens for 2026/2027 intake', status: 'past' },
      { stage: 'Application Deadline', date: '12 March 2026', detail: 'Portal closes strictly at 17:00 Irish time (Closed)', status: 'past' },
      { stage: 'Results Announcement', date: 'Late May 2026', detail: '60 selected scholars notified', status: 'past' },
      { stage: 'Commencement', date: 'September 2026', detail: 'Arrival and registration at Irish universities', status: 'upcoming' }
    ],
    faqs: [
      { question: 'Is GOI-IES renewable for a multi-year degree?', answer: 'The GOI-IES is awarded for one single academic year. For master’s programmes in Ireland (which are typically 1 year), this covers the entire duration.' },
      { question: 'Do all Irish universities participate?', answer: 'All major public universities (Trinity College Dublin, UCD, University of Galway, UCC, DCU, UL) and accredited Institutes of Technology participate.' }
    ],
    officialSourceUrl: 'https://hea.ie/policy/internationalisation/goi-ies/',
    lastVerifiedDate: '14 October 2026',
    requiresManualVerification: false
  },
  {
    id: 'erasmus-mundus-eu',
    slug: 'erasmus-mundus-joint-masters',
    name: 'Erasmus Mundus Joint Masters (EMJM)',
    title: 'Erasmus Mundus Joint Masters (EMJM)',
    administeringBody: 'European Commission (EU)',
    provider: 'European Commission (EU)',
    providerType: 'Government',
    country: 'Europe',
    countryCode: 'EU',
    flag: '🇪🇺',
    status: 'Open',
    statusBadgeText: 'Open',
    statusNote: 'Applications are open for every intake with dedicated guidance from Aegis counselors.',
    studyLevel: 'Master\'s',
    degreeLevel: ['Master\'s'],
    coverageType: 'Full',
    coverageSummary: '100% tuition/fee waiver + €1,400/month living cost (up to 24 months)',
    awardAmount: '100% tuition/fee waiver + €1,400/month living cost (up to 24 months)',
    coverageDetails: [
      'Full participation costs including tuition fees, library, laboratory, and full insurance coverage',
      'Monthly scholarship allowance of €1,400 per month for maximum 24 months',
      'Mobility across at least two different European countries during the degree',
      'Award of double, multiple or joint master’s degrees from top European universities'
    ],
    opens: 'Open for Every Intake',
    deadline: 'Always Open (All Intakes)',
    deadlineIsEstimated: false,
    fields: ['Multiple Disciplines', 'Engineering', 'Data', 'Environmental Science'],
    fieldOfStudy: ['Multiple Disciplines', 'Engineering', 'Data', 'Environmental Science'],
    overview: 'Erasmus Mundus Joint Masters are prestigious integrated master’s degree programmes designed and delivered by international partnerships of higher education institutions across Europe and beyond. Fully funded EU scholarships cover participation costs, travel, and a comprehensive monthly living allowance for up to two years.',
    description: 'Erasmus Mundus Joint Masters are prestigious integrated master’s degree programmes designed and delivered by international partnerships of higher education institutions across Europe and beyond. Fully funded EU scholarships cover participation costs, travel, and a comprehensive monthly living allowance for up to two years.',
    heroImage: '/images/scholarships/westminster.jpg',
    eligibilityCriteria: [
      'Graduates worldwide holding a bachelor\'s degree or equivalent in a relevant field.',
      'Fluency in English (or consortium required languages).',
      'Compliance with the Erasmus mobility rule: you will study in at least 2 distinct European countries.'
    ],
    eligibility: [
      'Graduates worldwide holding a bachelor\'s degree or equivalent in a relevant field.',
      'Fluency in English (or consortium required languages).',
      'Compliance with the Erasmus mobility rule: you will study in at least 2 distinct European countries.'
    ],
    eligibleFields: [
      'Over 180 specialised consortium fields covering Artificial Intelligence, Sustainable Energy, Photonics, Marine Biology, Public Health, and International Law.'
    ],
    keyBenefits: [
      'Zero tuition fees across all consortium partner universities',
      '€1,400 monthly stipend for up to 24 months',
      'International mobility across multiple EU countries',
      'Joint or multiple master\'s degrees recognized worldwide'
    ],
    benefits: [
      'Zero tuition fees across all consortium partner universities',
      '€1,400 monthly stipend for up to 24 months',
      'International mobility across multiple EU countries',
      'Joint or multiple master\'s degrees recognized worldwide'
    ],
    applicationProcess: [
      'Browse the EMJM Catalogue on the official EU portal to find your target master’s consortium.',
      'Submit your scholarship application directly to the coordinating university’s portal.',
      'Each consortium sets its own application window, typically between October and February.'
    ],
    howToApply: [
      'Browse the EMJM Catalogue on the official EU portal to find your target master’s consortium.',
      'Submit your scholarship application directly to the coordinating university’s portal.',
      'Each consortium sets its own application window, typically between October and February.'
    ],
    documentsRequired: [
      'Degree certificates and academic transcripts',
      'Motivation letter tailored to the consortium\'s curriculum',
      'Two letters of academic/professional recommendation',
      'Proof of language proficiency (IELTS/TOEFL)',
      'Proof of residence / nationality'
    ],
    selectionProcess: [
      'Joint academic committee review across consortium universities.',
      'Final approval by the European Education and Culture Executive Agency (EACEA).'
    ],
    tips: [
      'You can apply for up to three different Erasmus Mundus programmes in the same intake year.',
      'Clearly articulate why studying in multiple countries is necessary for your career goals.'
    ],
    timeline: [
      { stage: 'Catalogue Released', date: 'October', detail: 'Consortia publish updated programme catalogues', status: 'past' },
      { stage: 'Application Deadlines', date: 'Dec – Feb', detail: 'Deadlines vary per programme consortium', status: 'current' },
      { stage: 'Results Announced', date: 'March – May', detail: 'Consortium notifies scholarship recipients', status: 'upcoming' },
      { stage: 'Semester Starts', date: 'September – October', detail: 'First mobility semester begins at coordinator institution', status: 'upcoming' }
    ],
    faqs: [
      { question: 'Do I apply to the EU or to the universities?', answer: 'You apply directly to the coordinator university website of the specific Joint Master programme, not to the European Commission.' },
      { question: 'Can I apply if I am in my final year of Bachelor’s?', answer: 'Yes, as long as you graduate and provide your final transcripts before the master’s semester begins.' }
    ],
    officialSourceUrl: 'https://erasmus-plus.ec.europa.eu/opportunities',
    lastVerifiedDate: '14 October 2026',
    requiresManualVerification: false
  },
  {
    id: 'university-merit-global',
    slug: 'university-merit-awards',
    name: 'University Merit & Excellence Awards',
    title: 'University Merit & Excellence Awards',
    administeringBody: 'Partner Universities (UK, USA, Canada, Australia, etc.)',
    provider: 'Partner Universities (UK, USA, Canada, Australia, etc.)',
    providerType: 'University',
    country: 'Multiple Countries',
    countryCode: 'GLOBAL',
    flag: '🌐',
    status: 'Open',
    statusBadgeText: 'Open',
    statusNote: 'Applications are open for every intake with dedicated guidance from Aegis counselors.',
    studyLevel: 'Bachelor\'s & Master\'s',
    degreeLevel: ['Bachelor\'s', 'Master\'s'],
    coverageType: 'Partial',
    coverageSummary: '20% - 100% tuition fee waiver (varies by university and course)',
    awardAmount: '20% - 100% tuition fee waiver (varies by university and course)',
    coverageDetails: [
      'Institutional merit waivers ranging from £2,000 to £10,000 in the UK',
      'Dean\'s Scholarships and Provost Grants from $5,000 to $25,000/year in the USA & Canada',
      'Vice-Chancellor\'s International Excellence Awards of 20% to 50% tuition reduction in Australia & Ireland',
      'Automatic early acceptance fee discounts for qualifying international applicants'
    ],
    opens: 'Open for Every Intake',
    deadline: 'Always Open (All Intakes)',
    deadlineIsEstimated: false,
    fields: ['Merit Based', 'STEM', 'Business', 'Arts & Humanities'],
    fieldOfStudy: ['Merit Based', 'STEM', 'Business', 'Arts & Humanities'],
    overview: 'University Merit & Excellence Awards are institutional fee discounts, bursaries, and competitive scholarships awarded directly by accredited partner universities across the UK, USA, Australia, Canada, Ireland, and Europe. They recognize top academic performance, standardized test scores, extracurricular excellence, and regional diversity.',
    description: 'University Merit & Excellence Awards are institutional fee discounts, bursaries, and competitive scholarships awarded directly by accredited partner universities across the UK, USA, Australia, Canada, Ireland, and Europe. They recognize top academic performance, standardized test scores, extracurricular excellence, and regional diversity.',
    heroImage: '/images/scholarships/westminster.jpg',
    eligibilityCriteria: [
      'Holding an admission offer for an undergraduate or postgraduate degree at a participating university.',
      'Academic grades meeting institutional cutoffs (typically 65% - 85%+ in prior study).',
      'Certain awards are automatically assessed upon application; others require a short scholarship statement.'
    ],
    eligibility: [
      'Holding an admission offer for an undergraduate or postgraduate degree at a participating university.',
      'Academic grades meeting institutional cutoffs (typically 65% - 85%+ in prior study).',
      'Certain awards are automatically assessed upon application; others require a short scholarship statement.'
    ],
    eligibleFields: [
      'Available across almost all subject streams: Computer Science, Engineering, Business, Finance, Health, Data Analytics, and Law.'
    ],
    keyBenefits: [
      'Direct deduction from gross tuition fees',
      'Lower deposit requirements and simplified financial proof for student visas',
      'Many awards are automatically evaluated with zero separate application fees'
    ],
    benefits: [
      'Direct deduction from gross tuition fees',
      'Lower deposit requirements and simplified financial proof for student visas',
      'Many awards are automatically evaluated with zero separate application fees'
    ],
    applicationProcess: [
      'Apply to your selected partner university through Aegis Overseas.',
      'Our counsellors identify and match every eligible institutional award.',
      'Submit any required supplementary scholarship essays or video statements before institutional deadlines.'
    ],
    howToApply: [
      'Apply to your selected partner university through Aegis Overseas.',
      'Our counsellors identify and match every eligible institutional award.',
      'Submit any required supplementary scholarship essays or video statements before institutional deadlines.'
    ],
    documentsRequired: [
      'Academic transcripts and certificates',
      'Statement of Purpose (SOP)',
      'Letters of recommendation',
      'Standardized test scores (IELTS/PTE/TOEFL/GRE/GMAT if applicable)'
    ],
    selectionProcess: [
      'University admissions and scholarship committee reviews applicant profile against institutional criteria.',
      'Award confirmed alongside or shortly after offer letter issuance.'
    ],
    tips: [
      'Applying early in the intake cycle (September to December for the following Fall) significantly increases the probability of securing top-tier tier-1 university merit funding.'
    ],
    timeline: [
      { stage: 'Fall Intake Applications', date: 'Sept – May', detail: 'Rolling evaluation alongside admissions offers', status: 'current' },
      { stage: 'Spring Intake Applications', date: 'May – Nov', detail: 'Mid-year scholarship allocations', status: 'upcoming' }
    ],
    faqs: [
      { question: 'Do I have to pay to apply for university scholarships through Aegis?', answer: 'No. Aegis Overseas does not charge students any fee for scholarship assessment, university matching, or institutional scholarship guidance.' },
      { question: 'Can institutional scholarships be combined with government awards?', answer: 'Usually universities allow students to hold only one major award, but partial merit grants can often be stacked with early-bird bursaries. Aegis helps plan your optimal scholarship combination.' }
    ],
    officialSourceUrl: 'https://aegisoverseas.com/',
    lastVerifiedDate: '14 October 2026',
    requiresManualVerification: false
  }
];

export const SCHOLARSHIP_CATEGORIES = [
  { id: 'all', label: 'All Scholarships' },
  { id: 'uk', label: 'United Kingdom' },
  { id: 'usa', label: 'United States' },
  { id: 'canada', label: 'Canada' },
  { id: 'australia', label: 'Australia' },
  { id: 'germany', label: 'Germany' },
  { id: 'ireland', label: 'Ireland' },
  { id: 'europe', label: 'Europe' }
];

export interface ServiceProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceData {
  title: string;
  slug: string;
  shortDesc: string;
  iconName: string;
  category?: 'Admissions Strategy' | 'Financial Solutions' | 'Visa & Relocation';
  tagline?: string;
  fullDesc?: string;
  deliverables?: string[];
  processSteps?: ServiceProcessStep[];
  benefits?: string[];
  stat?: { value: string; label: string };
  faqs?: Array<{ q: string; a: string }>;
}

export const SERVICES: ServiceData[] = [
  {
    title: "Career Counselling",
    slug: "counselling",
    shortDesc: "Psychometric profiling and personalized career roadmap creation based on global market demand.",
    iconName: "Compass",
    category: "Admissions Strategy",
    tagline: "Align your passions with high-growth international career opportunities.",
    fullDesc: "Our senior certified study abroad counselors conduct in-depth one-on-one diagnostic sessions to analyze your academic history, aptitude, personality strengths, and long-term residency goals. We cut through marketing hype to deliver an unbiased, realistic roadmap for your global degree.",
    deliverables: [
      "Psychometric aptitude and skill gap evaluation",
      "Course alignment with post-study work visa lists (STEM, Tier 2, PR shortage lists)",
      "Budget vs ROI financial viability report across 7+ countries",
      "Personalized 12-month application timeline and milestones"
    ],
    processSteps: [
      { step: "01", title: "Diagnostic Discovery", desc: "Comprehensive review of grades, test scores, work experience, and financial budget." },
      { step: "02", title: "Aptitude & Market Mapping", desc: "Correlating your skills with high-employment global disciplines and starting salaries." },
      { step: "03", title: "Country & Intake Shortlist", desc: "Determining ideal intake (Fall vs Spring) and destination country policy benefits." },
      { step: "04", title: "Action Plan Signoff", desc: "Finalizing strategic roadmap for test preparation, documentation, and university selection." }
    ],
    benefits: [
      "Avoid costly course mismatches and visa refusals",
      "Identify high-demand STEM & PR-pathway programs early",
      "Realistic ROI forecasting for 10-year career progression"
    ],
    stat: { value: "15,000+", label: "Students Counseled" },
    faqs: [
      { q: "How early should I begin career counseling?", a: "We recommend starting 10 to 14 months before your target intake to allow ample time for test preparation, profile building, and early scholarship deadlines." },
      { q: "Is the counseling session free of charge?", a: "Yes, 100% free with zero obligation. Aegis is funded through institutional partnerships with accredited global universities." }
    ]
  },
  {
    title: "University Selection",
    slug: "university-selection",
    shortDesc: "Dream, Target, and Safe university curation matching GPA, test cutoffs, and budget.",
    iconName: "School",
    category: "Admissions Strategy",
    tagline: "Data-driven university shortlisting with balanced risk-reward ratios.",
    fullDesc: "We eliminate guesswork by categorizing academic institutions into Dream, Target, and Safe tiers. Our proprietary university matcher leverages historical acceptance data across 850+ universities in the UK, USA, Canada, Australia, and Europe to maximize your admission offers.",
    deliverables: [
      "Bespoke shortlist of 8 to 12 verified global universities",
      "Comparison matrix of tuition fees, cost of living, and scholarship quotas",
      "Curriculum audit ensuring program accreditation and industry recognition",
      "Analysis of campus location, transit, and on-campus employment opportunities"
    ],
    processSteps: [
      { step: "01", title: "Profile Benchmark", desc: "Scoring your GPA, backlogs, and GRE/GMAT/IELTS against historical cutoffs." },
      { step: "02", title: "Three-Tier Curation", desc: "Selecting 3 Dream (aspirational), 4 Reach (competitive), and 3 Safe (guaranteed) universities." },
      { step: "03", title: "Faculty & Lab Review", desc: "Checking lab facilities, industry faculty, co-op semesters, and career center efficacy." },
      { step: "04", title: "Final Selection Signoff", desc: "Locking in university choices before opening admissions application portals." }
    ],
    benefits: [
      "99.2% rate of receiving at least 3 offer letters per student",
      "Access to exclusive university partner application fee waivers",
      "Accurate assessment of faculty research and job placement rates"
    ],
    stat: { value: "850+", label: "Partner Universities" },
    faqs: [
      { q: "Can I apply to universities not on Aegis's partner list?", a: "Yes! While we offer priority fast-track processing with our 850+ partner institutions, our counselors assist you with any accredited global university worldwide." },
      { q: "What is the difference between Dream, Reach, and Safe?", a: "Dream institutions have very low acceptance rates (e.g. Ivy League, Russell Group top 10); Reach matches your exact GPA; Safe guarantees admission as a safety net." }
    ]
  },
  {
    title: "Application Assistance",
    slug: "application-assistance",
    shortDesc: "SOP polishing, CV optimization, and fast-track submission with application fee waivers.",
    iconName: "FileCheck",
    category: "Admissions Strategy",
    tagline: "Transform your application from ordinary to extraordinary.",
    fullDesc: "Admission committees review thousands of applicants with similar marks. Our dedicated editorial and application desk assists you in crafting compelling Statements of Purpose (SOP), Letters of Recommendation (LOR), and ATS-friendly academic CVs that showcase your unique potential.",
    deliverables: [
      "Multi-draft Statement of Purpose (SOP) review by professional editors",
      "Guidance on securing impactful academic and employer LORs",
      "Standardized test score reporting and credential evaluation assistance (WES)",
      "Direct portal application filing through university CRM systems with fee waivers"
    ],
    processSteps: [
      { step: "01", title: "Document Brainstorming", desc: "Unearthing your unique projects, leadership stories, and academic turning points." },
      { step: "02", title: "Editorial Polishing", desc: "Refining narrative flow, grammar, academic voice, and program-specific alignment." },
      { step: "03", title: "Compliance Check", desc: "Verifying document formats, certified translations, and transcript attestations." },
      { step: "04", title: "Fast-Track Lodgment", desc: "Submitting directly through institutional channels to track application decisions." }
    ],
    benefits: [
      "Zero errors in application submissions",
      "Average offer turnaround reduced by 40% through direct partner desks",
      "Substantial savings on application fees via institutional voucher codes"
    ],
    stat: { value: "48 Hrs", label: "Average Document Review" },
    faqs: [
      { q: "Do you write the SOP for students?", a: "No. Plagiarism and generic AI essays are immediately rejected by universities. We conduct deep brainstorming sessions and edit your authentic narrative to meet global academic standards." },
      { q: "How many university applications can I submit?", a: "There is no strict limit. Most students submit between 5 and 8 applications across their Dream, Target, and Safe tiers." }
    ]
  },
  {
    title: "Scholarships Guidance",
    slug: "scholarships",
    shortDesc: "Securing merit awards, department grants, and university-funded tuition discounts.",
    iconName: "Award",
    category: "Financial Solutions",
    tagline: "Make your global education affordable through targeted financial grants.",
    fullDesc: "Millions of dollars in international student scholarships go unclaimed every year due to lack of awareness or missed deadlines. Aegis tracks university merit grants, faculty fee waivers, government scholarships (Chevening, Commonwealth, Fulbright), and external educational endowments.",
    deliverables: [
      "Comprehensive scholarship eligibility audit based on academic scores",
      "Drafting and review of specialized scholarship application essays",
      "Early-bird application submission to tap early funding quotas",
      "Representation before university financial aid committees"
    ],
    processSteps: [
      { step: "01", title: "Scholarship Mapping", desc: "Identifying automatic consideration vs separate application scholarships." },
      { step: "02", title: "Essay Crafting", desc: "Drafting compelling leadership, diversity, and academic excellence scholarship essays." },
      { step: "03", title: "Timely Submission", desc: "Filing before strict financial aid priority deadlines (often Dec - March)." },
      { step: "04", title: "Award Letter Audit", desc: "Verifying scholarship terms, GPA retention criteria, and tuition net deductions." }
    ],
    benefits: [
      "Over ₹25 Crores in scholarships secured for our scholars to date",
      "Tuition reductions ranging from £2,000 to 100% full tuition waivers",
      "Guidance on combining multiple departmental and external bursaries"
    ],
    stat: { value: "₹25 Cr+", label: "Scholarships Secured" },
    faqs: [
      { q: "Can average students get scholarships?", a: "Yes! Many universities offer regional diversity bursaries, early-admit fee concessions, and country-specific awards of £2,000 to £5,000 that do not require 90%+ marks." },
      { q: "When are scholarship results announced?", a: "Automatic merit scholarships are usually declared along with your offer letter; separate competitive awards are notified between March and June." }
    ]
  },
  {
    title: "Education Loans",
    slug: "education-loans",
    shortDesc: "Collateral and non-collateral loan sanctioning through 15+ premier banking partners.",
    iconName: "BadgeDollarSign",
    category: "Financial Solutions",
    tagline: "Fast, transparent education financing with lowest interest rates.",
    fullDesc: "Through our institutional banking desk, we connect students with 15+ leading public sector banks (SBI, BOB), private lenders (ICICI, Axis), and specialized education NBFCs (HDFC Credila, Avanse, Auxilo) and global USD lenders (Prodigy, MPower) with zero service charges.",
    deliverables: [
      "Unsecured education loans up to ₹1 Crore without property collateral",
      "Secured loans up to ₹2 Crore+ at concessional public bank interest rates",
      "Pre-visa sanction letters compliant with US, UK, German, and Canadian embassies",
      "Direct disbursement into German Blocked Accounts (Sperrkonto) & Canadian GIC"
    ],
    processSteps: [
      { step: "01", title: "Eligibility Assessment", desc: "Soft credit check and co-applicant income audit without impacting CIBIL." },
      { step: "02", title: "Multi-Lender Bidding", desc: "Parallel submission to 2-3 banks to negotiate lowest interest rates and fee waivers." },
      { step: "03", title: "Sanction Letter Issuance", desc: "Receiving embassy-approved sanction letter in 3 to 7 working days." },
      { step: "04", title: "Pre-Visa Disbursement", desc: "Disbursing tuition deposit and living expense funds to official overseas escrow accounts." }
    ],
    benefits: [
      "Zero commission, 100% free loan advisory",
      "Interest rates starting at 8.50% p.a. with Section 80E tax benefits",
      "Special fast-track approvals for Ivy League, Russell Group, and Tier-1 admits"
    ],
    stat: { value: "₹100 Cr+", label: "Loan Amount Sanctioned" },
    faqs: [
      { q: "Can I get an education loan without collateral?", a: "Yes. Our partner NBFCs and private banks offer non-collateral loans up to ₹75 Lakhs – ₹1 Crore based on university ranking, student test scores, and co-applicant income." },
      { q: "Can loan funds be used for German Blocked Accounts and Canadian GIC?", a: "Yes. We arrange pre-visa disbursals specifically recognized by Fintiba/Coracle (Germany) and CIBC/ICICI Bank Canada (GIC)." }
    ]
  },
  {
    title: "Visa Assistance",
    slug: "visa-assistance",
    shortDesc: "99.4% visa success record with rigorous mock embassy interview drills.",
    iconName: "ShieldCheck",
    category: "Visa & Relocation",
    tagline: "Navigate complex immigration regulations with total confidence.",
    fullDesc: "A university offer letter is only half the journey. Our dedicated visa compliance team provides meticulous document verification, financial solvency audits, statement of financial intent drafting, and 1-on-1 mock interviews mimicking the exact questions asked by visa officers.",
    deliverables: [
      "Complete visa documentation dossier preparation according to official embassy checklists",
      "Proof of funds audit (liquid funds, 28-day rule for UK, I-20 solvency for USA)",
      "DS-160, CAS statement, and Australian Genuine Student (GS) compliance filing",
      "Realistic 1-on-1 mock visa interviews conducted by experienced immigration counselors"
    ],
    processSteps: [
      { step: "01", title: "Document Scrutiny", desc: "Auditing academic, sponsor, tax (ITR), and liquid fund proofs for strict compliance." },
      { step: "02", title: "Online Visa Filing", desc: "Flawless filing of official visa applications, biometrics scheduling, and fee payment." },
      { step: "03", title: "Mock Visa Drills", desc: "Rigorous interactive interview sessions focusing on body language, intent, and clarity." },
      { step: "04", title: "Passport Stamping", desc: "Tracking application status until your student visa is stamped and delivered." }
    ],
    benefits: [
      "Industry-leading 99.4% student visa grant rate",
      "Zero-rejection protocol: every financial document verified before submission",
      "Guidance on spouse and dependent student visa applications"
    ],
    stat: { value: "99.4%", label: "Visa Success Rate" },
    faqs: [
      { q: "What happens if a student has a previous visa refusal?", a: "Our senior immigration specialists analyze previous refusal notes (GCMS notes for Canada or refusal reasons) and rebuild your file with rectified documentation." },
      { q: "Do all countries require in-person visa interviews?", a: "The USA conducts mandatory consular interviews. The UK, Australia, and Canada evaluate files primarily through documentation, with interviews conducted on a random or targeted basis." }
    ]
  },
  {
    title: "Student Accommodation",
    slug: "accommodation",
    shortDesc: "Vetted on-campus halls and student apartments near university campuses.",
    iconName: "Home",
    category: "Visa & Relocation",
    tagline: "Safe, verified, and budget-friendly housing before you fly.",
    fullDesc: "Finding secure, affordable housing in an unfamiliar foreign city can be overwhelming. Aegis partners with global student housing platforms (Amber, Casita, University Living) and university residential services to lock in verified rooms with all utility bills included.",
    deliverables: [
      "Comparison of on-campus university halls vs private purpose-built student accommodation (PBSA)",
      "Guaranteed room reservation near campus transit lines with verified security systems",
      "All-inclusive rental agreements (high-speed WiFi, heating, electricity, and water included)",
      "Zero-cancellation fee protection if student visa is unexpectedly delayed"
    ],
    processSteps: [
      { step: "01", title: "Budget & Preference Mapping", desc: "Choosing between studio apartments, en-suite rooms, or shared flats." },
      { step: "02", title: "Location & Transit Audit", desc: "Verifying travel times, bus/train routes, and safety ratings of the neighborhood." },
      { step: "03", title: "Virtual Walkthrough", desc: "360-degree video inspection of rooms, communal kitchens, and laundry amenities." },
      { step: "04", title: "Secure Booking", desc: "Signing tenancy agreements with trusted student housing providers." }
    ],
    benefits: [
      "Exclusive student discounts and cashback offers up to £250 / $300",
      "No need for local UK/US guarantors through approved partner platforms",
      "Peace of mind knowing your key is ready the moment your flight lands"
    ],
    stat: { value: "5,000+", label: "Beds Reserved" },
    faqs: [
      { q: "Is on-campus or off-campus housing better?", a: "On-campus is great for 1st-year undergraduates seeking immersion; off-campus PBSAs are often newer, cheaper, and preferred by postgraduate Master's students." },
      { q: "What if my visa gets rejected after booking accommodation?", a: "All our partner accommodations offer a 'No Visa, No Pay' policy with 100% refund of your security deposit upon presenting the visa refusal letter." }
    ]
  },
  {
    title: "Forex & International SIM",
    slug: "forex",
    shortDesc: "Zero-markup student currency cards, wire transfers, and pre-activated global SIMs.",
    iconName: "CreditCard",
    category: "Visa & Relocation",
    tagline: "Frictionless international payments and instant connectivity on arrival.",
    fullDesc: "Avoid exorbitant airport currency exchange rates and high bank markup fees. We help students set up multi-currency smart travel cards with zero ATM withdrawal charges, execute international university tuition fee telegraphic transfers, and receive pre-activated destination SIM cards before boarding.",
    deliverables: [
      "Multi-currency student travel card loaded with USD, GBP, EUR, CAD, or AUD",
      "Best live foreign exchange rates with zero forex markup fees",
      "Fast, RBI-compliant university tuition wire transfers via outward remittances",
      "Free international SIM card delivered to your home with instant talktime and data"
    ],
    processSteps: [
      { step: "01", title: "Rate Lock-In", desc: "Monitoring interbank currency trends to lock in the lowest foreign exchange rate." },
      { step: "02", title: "Doorstep Card Delivery", desc: "Receiving your chip-and-PIN multi-currency debit card within 24 to 48 hours." },
      { step: "03", title: "Tuition Wire Transfer", desc: "Telegraphic transfer directly to the university's bank account with official SWIFT copy." },
      { step: "04", title: "SIM Activation", desc: "Pre-activating your UK/US/Canadian phone number to connect with family immediately on landing." }
    ],
    benefits: [
      "Save 2% to 3.5% on foreign currency exchange compared to traditional retail banks",
      "Mobile app control to freeze, unfreeze, and reload card funds instantly in INR",
      "24/7 dedicated emergency replacement card support worldwide"
    ],
    stat: { value: "Zero", label: "Forex Markup Fee" },
    faqs: [
      { q: "How much foreign currency cash should I carry?", a: "We recommend carrying approximately $500 to $1,000 (or equivalent in GBP/EUR) in physical cash for initial incidentals, and holding the rest on your multi-currency card." },
      { q: "Can my parents reload the forex card from India?", a: "Yes. Parents can instantly reload the card online using net banking or UPI in Indian Rupees at real-time exchange rates." }
    ]
  },
  {
    title: "Pre-Departure & Alumni Network",
    slug: "pre-departure",
    shortDesc: "Cultural briefing, luggage checklist, flight booking, and local alumni network connections.",
    iconName: "PlaneTakeoff",
    category: "Visa & Relocation",
    tagline: "Feel at home before you even touch down.",
    fullDesc: "Transitioning to a new country can be both thrilling and intimidating. Our pre-departure briefing sessions connect you with senior alumni currently studying at your university, guide you through immigration customs clearance, and provide critical insights into part-time jobs, climate, and campus culture.",
    deliverables: [
      "Comprehensive pre-departure session covering port-of-entry immigration protocols",
      "Student airfare discounts with extra 10–23 kg baggage allowances",
      "Master packing checklist tailored to your destination's winter/summer climate",
      "Introduction to Aegis student community WhatsApp groups and city alumni mentors"
    ],
    processSteps: [
      { step: "01", title: "Pre-Departure Workshop", desc: "Detailed orientation on academic expectations, grading systems, and cultural norms." },
      { step: "02", title: "Airline & Baggage Perks", desc: "Booking discounted student flights with partner airlines offering double baggage." },
      { step: "03", title: "City Community Onboarding", desc: "Joining city-specific cohorts of students flying to the same university intake." },
      { step: "04", title: "Airport Pickup Coordination", desc: "Arranging free or discounted university shuttle service from the international terminal." }
    ],
    benefits: [
      "Fly with fellow students on the same flights",
      "Understand part-time work rights (20 hrs/week) and local labor laws",
      "Immediate support network of senior seniors for guidance on campus"
    ],
    stat: { value: "100%", label: "Orientation Attendance" },
    faqs: [
      { q: "Can Aegis help arrange student flight tickets with extra baggage?", a: "Yes! Through our airline tie-ups with Emirates, Qatar Airways, British Airways, and Air India, students receive special student fares and an additional piece of checked luggage." },
      { q: "Will I be connected with students attending the same university?", a: "Yes. Every intake, Aegis creates exclusive city and university WhatsApp groups connecting incoming freshmen with current seniors." }
    ]
  }
];


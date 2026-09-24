export const COURSE_CATEGORIES = [
  "Computer Science & IT",
  "Engineering & Technology",
  "Business & Management",
  "Data Science & AI",
  "Healthcare & Life Sciences",
  "Finance & Accounting",
  "Hospitality & Tourism",
  "Architecture & Design",
  "Law & International Relations",
  "Life Sciences & Biotech"
] as const;

export type CourseCategory = typeof COURSE_CATEGORIES[number];

export interface DestinationFee {
  country: string;
  flag: string;
  avgTuition: string;
  duration: string;
  pswDuration: string;
  popularUnis: string[];
}

export interface CourseProgram {
  id: string; // slug
  title: string;
  shortTitle?: string;
  degreeLevel: "Master's" | "Bachelor's" | "MBA" | "PG Diploma" | "Doctorate";
  category: CourseCategory;
  duration: string;
  stemEligible: boolean;
  avgStartingSalary: string;
  description: string;
  overview: string;
  keyModules: string[];
  eligibilityCriteria: string[];
  englishRequirement: {
    ielts: string;
    pte: string;
    toefl: string;
  };
  careerOutcomes: string[];
  destinations: DestinationFee[];
  intakes: string[];
  featured?: boolean;
  scholarshipAvailable?: boolean;
}

export const POPULAR_COURSES: CourseProgram[] = [
  {
    id: "msc-computer-science",
    title: "MSc Advanced Computer Science",
    shortTitle: "Computer Science",
    degreeLevel: "Master's",
    category: "Computer Science & IT",
    duration: "1 - 2 Years Full-Time",
    stemEligible: true,
    avgStartingSalary: "$85,000 - £45,000 / year",
    description: "Specialized postgraduate program focusing on advanced software architecture, cloud platforms, distributed algorithms, and high-performance computing.",
    overview: "An industry-aligned postgraduate degree designed for computing graduates aiming to master enterprise software design, scalable distributed systems, and real-time computation. Students work on cutting-edge capstone industry projects with global tech innovators.",
    keyModules: [
      "Distributed Systems & Cloud Computing",
      "Advanced Algorithms & Complexity Analysis",
      "Enterprise Software Architecture",
      "Database Systems & Big Data Engineering",
      "Information Security & Cryptography",
      "Master's Research Dissertation / Industrial Placement"
    ],
    eligibilityCriteria: [
      "Bachelor's degree in Computer Science, IT, or closely related quantitative discipline with minimum 60-65% aggregate.",
      "Demonstrated programming proficiency in Java, C++, or Python.",
      "Two academic/professional letters of recommendation (LOR) and Statement of Purpose."
    ],
    englishRequirement: {
      ielts: "6.5 Overall (no sub-band < 6.0)",
      pte: "62 Overall (min 58 in all communicative skills)",
      toefl: "88 Overall (min 20 in each section)"
    },
    careerOutcomes: [
      "Senior Software Engineer",
      "Cloud Solutions Architect",
      "DevOps & Infrastructure Lead",
      "Systems Software Developer",
      "Distributed Systems Engineer"
    ],
    destinations: [
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        avgTuition: "£24,000 – £32,000 / year",
        duration: "1 Year",
        pswDuration: "2 Years Post-Study Work Visa",
        popularUnis: ["University of Birmingham", "University of Manchester", "Queen Mary University of London", "University of Leeds"]
      },
      {
        country: "United States",
        flag: "🇺🇸",
        avgTuition: "$30,000 – $48,000 / year",
        duration: "2 Years",
        pswDuration: "3 Years STEM OPT Extension",
        popularUnis: ["Arizona State University", "Northeastern University", "University of Texas at Dallas", "NYU Tandon"]
      },
      {
        country: "Ireland",
        flag: "🇮🇪",
        avgTuition: "€16,000 – €24,000 / year",
        duration: "1 Year",
        pswDuration: "2 Years Third Level Graduate Scheme",
        popularUnis: ["Trinity College Dublin", "University College Dublin", "National University of Ireland Galway"]
      },
      {
        country: "Germany",
        flag: "🇩🇪",
        avgTuition: "€0 – €6,000 / year (Nominal admin fees)",
        duration: "2 Years",
        pswDuration: "18 Months Post-Study Work Permit",
        popularUnis: ["TU Munich", "RWTH Aachen", "TU Berlin", "University of Stuttgart"]
      }
    ],
    intakes: ["Fall (Sep/Oct)", "Spring (Jan/Feb)"],
    featured: true,
    scholarshipAvailable: true
  },
  {
    id: "msc-data-science-ai",
    title: "MSc Data Science & Artificial Intelligence",
    shortTitle: "Data Science & AI",
    degreeLevel: "Master's",
    category: "Data Science & AI",
    duration: "1 - 2 Years Full-Time",
    stemEligible: true,
    avgStartingSalary: "$95,000 - £50,000 / year",
    description: "Deep dive into machine learning, predictive analytics, deep neural networks, computer vision, and generative AI systems with extensive lab work.",
    overview: "This degree trains students to solve complex real-world data problems through mathematical modeling, supervised/unsupervised machine learning, deep learning architectures, and large language models (LLMs). Highly valued across healthcare, fintech, e-commerce, and robotics sectors.",
    keyModules: [
      "Machine Learning Foundations & Supervised Models",
      "Deep Learning & Neural Network Architectures",
      "Natural Language Processing (NLP) & LLMs",
      "Applied Computer Vision",
      "Big Data Analytics with Apache Spark & Hadoop",
      "Ethical AI & Data Governance"
    ],
    eligibilityCriteria: [
      "Undergraduate degree in Computer Science, Mathematics, Statistics, Engineering, or Data Analytics (minimum 60%).",
      "Strong foundation in linear algebra, multivariable calculus, and probability.",
      "Working knowledge of Python, R, or SQL."
    ],
    englishRequirement: {
      ielts: "6.5 - 7.0 Overall",
      pte: "64 - 70 Overall",
      toefl: "90 - 100 Overall"
    },
    careerOutcomes: [
      "Data Scientist / AI Engineer",
      "Machine Learning Specialist",
      "Business Intelligence Consultant",
      "Quantitative Research Analyst",
      "AI Strategy Director"
    ],
    destinations: [
      {
        country: "United States",
        flag: "🇺🇸",
        avgTuition: "$32,000 – $52,000 / year",
        duration: "1.5 - 2 Years",
        pswDuration: "3 Years STEM OPT",
        popularUnis: ["Carnegie Mellon University", "Columbia University", "Purdue University", "University of Washington"]
      },
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        avgTuition: "£26,000 – £35,000 / year",
        duration: "1 Year",
        pswDuration: "2 Years Graduate Route",
        popularUnis: ["University of Edinburgh", "Imperial College London", "University of Bristol", "University of Southampton"]
      },
      {
        country: "Australia",
        flag: "🇦🇺",
        avgTuition: "AUD $38,000 – $48,000 / year",
        duration: "2 Years",
        pswDuration: "2 - 4 Years Post-Study Work Stream",
        popularUnis: ["University of Melbourne", "UNSW Sydney", "Monash University", "University of Queensland"]
      },
      {
        country: "Canada",
        flag: "🇨🇦",
        avgTuition: "CAD $26,000 – $40,000 / year",
        duration: "1.5 - 2 Years",
        pswDuration: "3 Years Post-Graduation Work Permit (PGWP)",
        popularUnis: ["University of Toronto", "University of Waterloo", "McGill University", "Simon Fraser University"]
      }
    ],
    intakes: ["Fall (Sep/Oct)", "Spring (Jan/Feb)"],
    featured: true,
    scholarshipAvailable: true
  },
  {
    id: "mba-global-business",
    title: "Master of Business Administration (Global MBA)",
    shortTitle: "Global MBA",
    degreeLevel: "MBA",
    category: "Business & Management",
    duration: "1 - 2 Years",
    stemEligible: false,
    avgStartingSalary: "$110,000 - £65,000 / year",
    description: "Flagship executive leadership degree preparing future corporate leaders in strategic decision making, global corporate finance, and disruptive entrepreneurship.",
    overview: "A transformative managerial degree integrating case-method learning, leadership coaching, and international immersion. Connects students with multinational executive networks and career mentors across London, Frankfurt, New York, and Sydney.",
    keyModules: [
      "Global Corporate Strategy & Strategic Leadership",
      "Financial Reporting & Corporate Valuation",
      "Marketing Strategy in Digital Ecosystems",
      "Operations Management & Supply Chain Agility",
      "Organizational Behavior & Executive Negotiation",
      "Venture Capital & Entrepreneurial Finance"
    ],
    eligibilityCriteria: [
      "Recognized Bachelor's degree in any discipline with minimum 55-60%.",
      "Minimum 2 to 3 years of progressive full-time work experience preferred.",
      "GMAT / GRE score may be required for top-tier institutions (waivers available for senior professionals)."
    ],
    englishRequirement: {
      ielts: "6.5 - 7.0 Overall",
      pte: "65 - 72 Overall",
      toefl: "92 - 100 Overall"
    },
    careerOutcomes: [
      "Management Consultant",
      "Investment Banking Associate",
      "Product Director / Head of Operations",
      "Corporate Strategy Manager",
      "Chief Operating Officer / Founder"
    ],
    destinations: [
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        avgTuition: "£28,000 – £55,000 total",
        duration: "1 Year Fast-Track",
        pswDuration: "2 Years Graduate Visa",
        popularUnis: ["London Business School", "Warwick Business School", "Cranfield School of Management", "Manchester AMBS"]
      },
      {
        country: "United States",
        flag: "🇺🇸",
        avgTuition: "$45,000 – $75,000 / year",
        duration: "2 Years",
        pswDuration: "1 - 3 Years OPT (STEM-designated MBAs)",
        popularUnis: ["Wharton", "Kellogg", "NYU Stern", "Georgetown University"]
      },
      {
        country: "France & Europe",
        flag: "🇫🇷",
        avgTuition: "€32,000 – €58,000 total",
        duration: "1 - 1.5 Years",
        pswDuration: "1 - 2 Years EU Job Seeker Permit",
        popularUnis: ["INSEAD", "HEC Paris", "ESSEC Business School", "ESCP Business School"]
      }
    ],
    intakes: ["Fall (Sep/Oct)", "Spring (Jan/Feb)"],
    featured: true,
    scholarshipAvailable: true
  },
  {
    id: "msc-cyber-security",
    title: "MSc Cyber Security & Forensics",
    shortTitle: "Cyber Security",
    degreeLevel: "Master's",
    category: "Computer Science & IT",
    duration: "1 - 2 Years Full-Time",
    stemEligible: true,
    avgStartingSalary: "$90,000 - £48,000 / year",
    description: "Comprehensive hands-on training in penetration testing, threat hunting, digital forensics, network protocol security, and zero-trust infrastructure.",
    overview: "With global cyber threats escalating, this program arms students with technical offensive and defensive security capabilities. Students leverage cyber-range simulations and certified laboratory environments meeting NCSC (UK) and NSA (US) standards.",
    keyModules: [
      "Offensive Penetration Testing & Ethical Hacking",
      "Incident Response & Digital Forensics",
      "Network Protocols & Defensive Architecture",
      "Malware Reverse Engineering",
      "Cloud Security & Identity Management",
      "Cyber Governance, Risk & ISO 27001 Compliance"
    ],
    eligibilityCriteria: [
      "B.Tech/BE in Computer Science, IT, Cyber Security, or relevant STEM degree with minimum 60%.",
      "Background in computer networking (TCP/IP), operating systems, and scripting."
    ],
    englishRequirement: {
      ielts: "6.5 Overall",
      pte: "62 Overall",
      toefl: "88 Overall"
    },
    careerOutcomes: [
      "Cyber Security Analyst / Consultant",
      "Ethical Hacker / Penetration Tester",
      "SOC Incident Responder",
      "Security Operations Manager",
      "Chief Information Security Officer (CISO) track"
    ],
    destinations: [
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        avgTuition: "£22,000 – £30,000 / year",
        duration: "1 Year",
        pswDuration: "2 Years Graduate Route",
        popularUnis: ["Royal Holloway", "University of Warwick", "University of Surrey", "Lancaster University"]
      },
      {
        country: "United States",
        flag: "🇺🇸",
        avgTuition: "$28,000 – $45,000 / year",
        duration: "2 Years",
        pswDuration: "3 Years STEM OPT",
        popularUnis: ["Johns Hopkins University", "George Mason University", "University of Maryland", "Stevens Institute of Technology"]
      },
      {
        country: "Australia",
        flag: "🇦🇺",
        avgTuition: "AUD $36,000 – $44,000 / year",
        duration: "2 Years",
        pswDuration: "2 - 4 Years Post-Study Work",
        popularUnis: ["RMIT University", "Deakin University", "Macquarie University"]
      }
    ],
    intakes: ["Fall (Sep/Oct)", "Spring (Jan/Feb)"],
    featured: false,
    scholarshipAvailable: true
  },
  {
    id: "msc-finance-fintech",
    title: "MSc Finance & Financial Technology (FinTech)",
    shortTitle: "Finance & FinTech",
    degreeLevel: "Master's",
    category: "Finance & Accounting",
    duration: "1 Year Full-Time",
    stemEligible: true,
    avgStartingSalary: "$88,000 - £52,000 / year",
    description: "Bridging quantitative finance, algorithmic trading, blockchain, financial cryptography, and regulatory technology (RegTech).",
    overview: "Designed for the fast-evolving financial services sector, this specialized master's covers traditional capital markets alongside peer-to-peer lending, smart contracts, quantitative financial modeling, and AI in financial risk assessment.",
    keyModules: [
      "Financial Markets & Quantitative Methods",
      "Blockchain Architecture & Smart Contracts",
      "Algorithmic Trading & High-Frequency Markets",
      "Machine Learning in Portfolio Optimization",
      "Financial Risk Analytics & Econometrics",
      "Financial Regulation & Open Banking API Ecosystems"
    ],
    eligibilityCriteria: [
      "Bachelor's degree in Finance, Economics, Mathematics, Engineering, or Computer Science with minimum 60%.",
      "Comfort with quantitative analysis, calculus, and basic programming."
    ],
    englishRequirement: {
      ielts: "6.5 - 7.0 Overall",
      pte: "65 - 70 Overall",
      toefl: "92 - 100 Overall"
    },
    careerOutcomes: [
      "Quantitative Analyst (Quant)",
      "FinTech Product Strategist",
      "Portfolio Risk Analyst",
      "Algorithmic Trader",
      "Blockchain Solutions Developer"
    ],
    destinations: [
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        avgTuition: "£27,000 – £38,000 / year",
        duration: "1 Year",
        pswDuration: "2 Years Graduate Route (London Financial Hub)",
        popularUnis: ["Cass (Bayes) Business School", "King's College London", "University of Strathclyde", "University of Bath"]
      },
      {
        country: "United States",
        flag: "🇺🇸",
        avgTuition: "$35,000 – $55,000 / year",
        duration: "1.5 - 2 Years",
        pswDuration: "3 Years STEM OPT",
        popularUnis: ["Fordham University", "Boston University", "University of Illinois Urbana-Champaign"]
      },
      {
        country: "Ireland",
        flag: "🇮🇪",
        avgTuition: "€18,000 – €26,000 / year",
        duration: "1 Year",
        pswDuration: "2 Years Graduate Scheme",
        popularUnis: ["Dublin City University", "UCD Michael Smurfit Graduate Business School"]
      }
    ],
    intakes: ["Fall (Sep/Oct)", "Spring (Jan/Feb)"],
    featured: true,
    scholarshipAvailable: true
  },
  {
    id: "beng-mechanical-engineering",
    title: "BEng / MEng Mechanical & Robotics Engineering",
    shortTitle: "Mechanical & Robotics",
    degreeLevel: "Bachelor's",
    category: "Engineering & Technology",
    duration: "3 - 4 Years Full-Time",
    stemEligible: true,
    avgStartingSalary: "$78,000 - £35,000 / year",
    description: "Undergraduate degree combining thermodynamics, fluid mechanics, CAD design, automated robotics, and autonomous vehicle engineering.",
    overview: "An accredited undergraduate engineering journey covering mechanical kinematics, mechatronics, material science, and robotic control. Includes year-in-industry placement options with automotive, aerospace, and renewable power corporations.",
    keyModules: [
      "Engineering Mathematics & Statics",
      "Thermodynamics & Fluid Dynamics",
      "Mechatronics & Automated Control Systems",
      "CAD/CAM Finite Element Modeling",
      "Robotic Sensing, Actuation & ROS",
      "Capstone Formula Student / Industrial Design Project"
    ],
    eligibilityCriteria: [
      "Higher Secondary / 12th Standard certificate with minimum 65-75% overall.",
      "Mandatory subjects: Physics and Mathematics.",
      "SAT / ACT optional for select US universities."
    ],
    englishRequirement: {
      ielts: "6.0 - 6.5 Overall",
      pte: "58 - 62 Overall",
      toefl: "80 - 88 Overall"
    },
    careerOutcomes: [
      "Mechanical Design Engineer",
      "Robotics & Automation Specialist",
      "Aerospace Systems Engineer",
      "Manufacturing Operations Lead",
      "Automotive Powertrain Developer"
    ],
    destinations: [
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        avgTuition: "£20,000 – £28,000 / year",
        duration: "3 Years (BEng) / 4 Years (MEng)",
        pswDuration: "2 Years Graduate Route",
        popularUnis: ["University of Sheffield", "University of Southampton", "Coventry University", "Loughborough University"]
      },
      {
        country: "Germany",
        flag: "🇩🇪",
        avgTuition: "€0 – €3,000 / year",
        duration: "3.5 Years",
        pswDuration: "18 Months Job Seeking Visa",
        popularUnis: ["TU Munich", "Karlsruhe Institute of Technology (KIT)", "RWTH Aachen"]
      },
      {
        country: "Canada",
        flag: "🇨🇦",
        avgTuition: "CAD $25,000 – $42,000 / year",
        duration: "4 Years with Co-op",
        pswDuration: "3 Years PGWP",
        popularUnis: ["University of Alberta", "McMaster University", "Concordia University"]
      }
    ],
    intakes: ["Fall (Sep/Oct)"],
    featured: false,
    scholarshipAvailable: true
  },
  {
    id: "msc-biotechnology",
    title: "MSc Biotechnology & Molecular Medicine",
    shortTitle: "Biotechnology",
    degreeLevel: "Master's",
    category: "Life Sciences & Biotech",
    duration: "1 - 2 Years Full-Time",
    stemEligible: true,
    avgStartingSalary: "$82,000 - £42,000 / year",
    description: "Advanced study of genetic engineering, bioprocess development, drug discovery, immunotherapy, and bioinformatics.",
    overview: "This degree blends wet-lab biomedical research with bio-computational modeling. Prepares scholars for high-impact careers in pharmaceutical conglomerates, synthetic biology startups, and global clinical trials organizations.",
    keyModules: [
      "Recombinant DNA Technology & Gene Editing (CRISPR)",
      "Biopharmaceutical Processing & Fermentation",
      "Genomics, Proteomics & Bioinformatics",
      "Immunology & Vaccine Development",
      "Drug Target Discovery & Pre-clinical Pharmacology",
      "Bio-entrepreneurship & Patent Regulation"
    ],
    eligibilityCriteria: [
      "Bachelor's degree in Biotechnology, Microbiology, Biochemistry, Pharmacy (B.Pharm), or Life Sciences with minimum 60%.",
      "Prior laboratory experimental coursework."
    ],
    englishRequirement: {
      ielts: "6.5 Overall",
      pte: "62 Overall",
      toefl: "88 Overall"
    },
    careerOutcomes: [
      "Biomedical Research Scientist",
      "Quality Assurance / QC Biopharma Lead",
      "Bioinformatics Data Analyst",
      "Clinical Trials Associate",
      "Regulatory Affairs Specialist"
    ],
    destinations: [
      {
        country: "Ireland",
        flag: "🇮🇪",
        avgTuition: "€15,000 – €22,000 / year",
        duration: "1 Year",
        pswDuration: "2 Years Graduate Scheme (European Pharma Hub)",
        popularUnis: ["University College Cork", "NUI Galway", "Trinity College Dublin"]
      },
      {
        country: "United States",
        flag: "🇺🇸",
        avgTuition: "$28,000 – $46,000 / year",
        duration: "2 Years",
        pswDuration: "3 Years STEM OPT",
        popularUnis: ["Georgetown University", "Northeastern University", "Rutgers University"]
      },
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        avgTuition: "£22,000 – £30,000 / year",
        duration: "1 Year",
        pswDuration: "2 Years Graduate Route",
        popularUnis: ["University of Glasgow", "University of Nottingham", "University of Leicester"]
      }
    ],
    intakes: ["Fall (Sep/Oct)", "Spring (Jan/Feb)"],
    featured: false,
    scholarshipAvailable: true
  },
  {
    id: "msc-healthcare-management",
    title: "Master of Public Health & Healthcare Leadership (MPH)",
    shortTitle: "Healthcare Leadership",
    degreeLevel: "Master's",
    category: "Healthcare & Life Sciences",
    duration: "1 - 2 Years Full-Time",
    stemEligible: false,
    avgStartingSalary: "$85,000 - £44,000 / year",
    description: "Focusing on epidemiological surveillance, global health policies, healthcare resource administration, and clinical hospital management.",
    overview: "Geared towards medical professionals, nurses, dentists, and health administrators seeking leadership roles in hospitals, international NGOs (WHO, UNICEF), government healthcare ministries, and insurance networks.",
    keyModules: [
      "Epidemiology & Biostatistics",
      "Global Health Systems & Comparative Policy",
      "Hospital Administration & Quality Governance",
      "Health Economics & Resource Allocation",
      "Digital Health Informatics & Telemedicine",
      "Public Health Intervention Design & Evaluation"
    ],
    eligibilityCriteria: [
      "Bachelor's degree in Medicine (MBBS), Dental (BDS), Nursing, Pharmacy, Physiotherapy, or Social Sciences with minimum 55-60%.",
      "Relevant clinical or volunteer health experience is an added advantage."
    ],
    englishRequirement: {
      ielts: "6.5 - 7.0 Overall",
      pte: "65 Overall",
      toefl: "92 Overall"
    },
    careerOutcomes: [
      "Hospital Operations Director",
      "Public Health Program Manager",
      "Clinical Epidemiologist",
      "Health Policy Analyst",
      "Medical Quality Officer"
    ],
    destinations: [
      {
        country: "Australia",
        flag: "🇦🇺",
        avgTuition: "AUD $34,000 – $46,000 / year",
        duration: "2 Years",
        pswDuration: "2 - 4 Years Post-Study Work",
        popularUnis: ["University of Sydney", "Monash University", "Queensland University of Technology"]
      },
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        avgTuition: "£20,000 – £28,000 / year",
        duration: "1 Year",
        pswDuration: "2 Years Graduate Route (NHS Career Pathways)",
        popularUnis: ["London School of Hygiene & Tropical Medicine", "University of Liverpool", "Brunel University London"]
      },
      {
        country: "Canada",
        flag: "🇨🇦",
        avgTuition: "CAD $22,000 – $34,000 / year",
        duration: "2 Years",
        pswDuration: "3 Years PGWP",
        popularUnis: ["Simon Fraser University", "University of Victoria", "Lakehead University"]
      }
    ],
    intakes: ["Fall (Sep/Oct)", "Spring (Jan/Feb)"],
    featured: false,
    scholarshipAvailable: true
  },
  {
    id: "msc-cloud-computing",
    title: "MSc Cloud Computing & DevOps Architecture",
    shortTitle: "Cloud & DevOps",
    degreeLevel: "Master's",
    category: "Computer Science & IT",
    duration: "1 Year Full-Time",
    stemEligible: true,
    avgStartingSalary: "$92,000 - £47,000 / year",
    description: "Hands-on mastery of multi-cloud architectures (AWS, Azure, GCP), microservices, Kubernetes container orchestration, and CI/CD pipelines.",
    overview: "Cloud computing is the backbone of modern tech infrastructure. This degree combines theoretical foundations of virtualization and distributed storage with practical lab certifications in containerization, serverless computing, and enterprise automation.",
    keyModules: [
      "Cloud Infrastructure Architecture (AWS/Azure/GCP)",
      "Containerization with Docker & Kubernetes",
      "Continuous Integration & Continuous Delivery (CI/CD)",
      "Infrastructure as Code (Terraform & Ansible)",
      "Cloud Security, IAM & Zero Trust Networks",
      "Site Reliability Engineering (SRE) & Observability"
    ],
    eligibilityCriteria: [
      "Undergraduate degree in Computer Science, IT, Electronics, or related STEM field with minimum 60%.",
      "Basic Linux/Unix shell literacy and networking fundamentals."
    ],
    englishRequirement: {
      ielts: "6.5 Overall",
      pte: "62 Overall",
      toefl: "88 Overall"
    },
    careerOutcomes: [
      "Cloud Infrastructure Architect",
      "DevOps Engineer",
      "Site Reliability Engineer (SRE)",
      "Platform Automation Specialist",
      "Cloud Security Consultant"
    ],
    destinations: [
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        avgTuition: "£21,000 – £29,000 / year",
        duration: "1 Year",
        pswDuration: "2 Years Graduate Route",
        popularUnis: ["University of Surrey", "Newcastle University", "Cardiff University"]
      },
      {
        country: "Ireland",
        flag: "🇮🇪",
        avgTuition: "€14,000 – €20,000 / year",
        duration: "1 Year",
        pswDuration: "2 Years Graduate Scheme",
        popularUnis: ["National College of Ireland (NCI)", "Technological University Dublin (TU Dublin)"]
      },
      {
        country: "United States",
        flag: "🇺🇸",
        avgTuition: "$28,000 – $44,000 / year",
        duration: "2 Years",
        pswDuration: "3 Years STEM OPT",
        popularUnis: ["Pace University", "Illinois Institute of Technology", "San Jose State University"]
      }
    ],
    intakes: ["Fall (Sep/Oct)", "Spring (Jan/Feb)"],
    featured: false,
    scholarshipAvailable: true
  },
  {
    id: "msc-civil-structural-engineering",
    title: "MSc Structural & Sustainable Civil Engineering",
    shortTitle: "Civil & Structural",
    degreeLevel: "Master's",
    category: "Engineering & Technology",
    duration: "1 - 2 Years Full-Time",
    stemEligible: true,
    avgStartingSalary: "$80,000 - £40,000 / year",
    description: "Focusing on smart urban infrastructure, seismic design, green concrete technologies, BIM modeling, and sustainable geotechnical engineering.",
    overview: "Accredited by international engineering councils, this degree develops analytical mastery in non-linear structural dynamics, sustainable building materials, and carbon-neutral construction techniques.",
    keyModules: [
      "Advanced Structural Analysis & Finite Elements",
      "Earthquake Engineering & Seismic Design",
      "Building Information Modeling (BIM) & Digital Twins",
      "Sustainable Materials & Low-Carbon Concrete",
      "Geotechnical Foundations & Soil Mechanics",
      "Project Management & FIDIC Contracts"
    ],
    eligibilityCriteria: [
      "B.Tech / BE in Civil Engineering or Structural Engineering with minimum 60%.",
      "Understanding of structural mechanics and material behavior."
    ],
    englishRequirement: {
      ielts: "6.5 Overall",
      pte: "62 Overall",
      toefl: "88 Overall"
    },
    careerOutcomes: [
      "Chartered Structural Engineer",
      "BIM Implementation Manager",
      "Geotechnical Consultant",
      "Civil Infrastructure Project Manager",
      "Sustainability Engineering Consultant"
    ],
    destinations: [
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        avgTuition: "£23,000 – £31,000 / year",
        duration: "1 Year",
        pswDuration: "2 Years Graduate Route",
        popularUnis: ["University of Leeds", "Cardiff University", "Heriot-Watt University", "University of Bath"]
      },
      {
        country: "Australia",
        flag: "🇦🇺",
        avgTuition: "AUD $38,000 – $48,000 / year",
        duration: "2 Years",
        pswDuration: "2 - 4 Years Post-Study Work (Priority Migration Stream)",
        popularUnis: ["University of Melbourne", "Curtin University", "University of Adelaide"]
      },
      {
        country: "Canada",
        flag: "🇨🇦",
        avgTuition: "CAD $24,000 – $38,000 / year",
        duration: "2 Years",
        pswDuration: "3 Years PGWP",
        popularUnis: ["University of Calgary", "Western University", "Dalhousie University"]
      }
    ],
    intakes: ["Fall (Sep/Oct)", "Spring (Jan/Feb)"],
    featured: false,
    scholarshipAvailable: true
  },
  {
    id: "llm-international-commercial-law",
    title: "Master of Laws (LLM) in International Commercial Law",
    shortTitle: "International Law",
    degreeLevel: "Master's",
    category: "Law & International Relations",
    duration: "1 Year Full-Time",
    stemEligible: false,
    avgStartingSalary: "$90,000 - £46,000 / year",
    description: "Deep dive into cross-border commercial transactions, international commercial arbitration, maritime law, WTO trade regulations, and corporate governance.",
    overview: "This prestigious legal qualification provides specialized expertise in international dispute resolution, intellectual property rights, and multinational corporate compliance. Taught by distinguished barristers, arbitrators, and legal scholars.",
    keyModules: [
      "Cross-Border Mergers & Acquisitions Law",
      "International Commercial Arbitration",
      "World Trade Organization (WTO) & Investment Law",
      "Intellectual Property in Digital Commerce",
      "Maritime & International Carriage of Goods Law",
      "Banking & International Financial Regulation"
    ],
    eligibilityCriteria: [
      "LLB degree (3-year or 5-year integrated law) from a recognized university with minimum 55-60%.",
      "Graduates in related disciplines (e.g. International Relations) with relevant commercial experience may also qualify."
    ],
    englishRequirement: {
      ielts: "7.0 Overall (no band < 6.5)",
      pte: "68 Overall",
      toefl: "100 Overall"
    },
    careerOutcomes: [
      "Corporate Legal Counsel",
      "International Dispute Arbitrator",
      "Regulatory Compliance Director",
      "Cross-Border Trade Advisor",
      "IP & Patent Attorney Track"
    ],
    destinations: [
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        avgTuition: "£22,000 – £34,000 / year",
        duration: "1 Year",
        pswDuration: "2 Years Graduate Route (Access to Inns of Court & City Law Firms)",
        popularUnis: ["Queen Mary University of London", "University of Edinburgh", "King's College London", "University of Essex"]
      },
      {
        country: "United States",
        flag: "🇺🇸",
        avgTuition: "$42,000 – $65,000 / year",
        duration: "1 Year",
        pswDuration: "1 Year OPT + New York / California Bar Eligibility",
        popularUnis: ["Georgetown Law", "USC Gould School of Law", "Emory University"]
      },
      {
        country: "Netherlands & Europe",
        flag: "🇳🇱",
        avgTuition: "€16,000 – €22,000 / year",
        duration: "1 Year",
        pswDuration: "1 Year European Orientation Year (Search Year)",
        popularUnis: ["Leiden University", "University of Amsterdam", "Utrecht University"]
      }
    ],
    intakes: ["Fall (Sep/Oct)", "Spring (Jan/Feb)"],
    featured: false,
    scholarshipAvailable: true
  },
  {
    id: "msc-digital-marketing",
    title: "MSc Strategic Digital Marketing & Brand Analytics",
    shortTitle: "Digital Marketing",
    degreeLevel: "Master's",
    category: "Business & Management",
    duration: "1 Year Full-Time",
    stemEligible: false,
    avgStartingSalary: "$75,000 - £38,000 / year",
    description: "Mastering consumer psychology, programmatic marketing, Omnichannel strategy, conversion optimization, and marketing analytics.",
    overview: "A modern commercial degree merging creative brand communication with quantitative attribution modeling, Google Analytics, social media algorithms, and CRM marketing automation.",
    keyModules: [
      "Consumer Behavior & Neuro-marketing",
      "Search Engine Optimization (SEO) & Paid Search (SEM)",
      "Attribution Modeling & Marketing Analytics",
      "Omnichannel Brand Strategy & Social Engagement",
      "Content Strategy, Influencer Ecosystems & Growth Hacking",
      "Marketing Automation & Customer Relationship Management"
    ],
    eligibilityCriteria: [
      "Bachelor's degree in any discipline (Commerce, Arts, Science, Engineering) with minimum 55-60%.",
      "Passion for digital communication and brand strategy."
    ],
    englishRequirement: {
      ielts: "6.5 Overall",
      pte: "62 Overall",
      toefl: "88 Overall"
    },
    careerOutcomes: [
      "Global Brand Manager",
      "Performance Marketing Lead",
      "Digital Marketing Strategist",
      "Growth Marketing Director",
      "Chief Marketing Officer (CMO) Track"
    ],
    destinations: [
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        avgTuition: "£19,000 – £27,000 / year",
        duration: "1 Year",
        pswDuration: "2 Years Graduate Route",
        popularUnis: ["University of Southampton", "Aston University", "University of Sussex", "University of Stirling"]
      },
      {
        country: "Ireland",
        flag: "🇮🇪",
        avgTuition: "€14,000 – €19,000 / year",
        duration: "1 Year",
        pswDuration: "2 Years Graduate Scheme (Google & Meta European HQs)",
        popularUnis: ["Smurfit Business School", "Dublin Business School", "Griffith College"]
      },
      {
        country: "Australia",
        flag: "🇦🇺",
        avgTuition: "AUD $32,000 – $42,000 / year",
        duration: "1.5 - 2 Years",
        pswDuration: "2 - 3 Years Post-Study Work",
        popularUnis: ["Macquarie University", "Deakin University", "University of Technology Sydney"]
      }
    ],
    intakes: ["Fall (Sep/Oct)", "Spring (Jan/Feb)"],
    featured: false,
    scholarshipAvailable: true
  }
];


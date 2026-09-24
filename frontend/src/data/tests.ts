export interface TestSection {
  name: string;
  duration: string;
  questionsCount: string;
  description: string;
}

export interface TestPrepData {
  name: string;
  fullName: string;
  slug: string;
  category: 'English Language Proficiency' | 'Standardized Graduate Admissions' | 'Undergraduate Entrance';
  badge: string;
  scoreScale: string;
  competitiveTarget: string;
  testDuration: string;
  testMode: string;
  validity: string;
  acceptedBy: string;
  shortDesc: string;
  desc?: string;
  overview: string;
  sections: TestSection[];
  aegisTrainingFeatures: string[];
  batchDetails: {
    duration: string;
    hours: string;
    classType: string;
    mockTests: string;
  };
  sampleResults: {
    studentName: string;
    score: string;
    admittedTo: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export const TEST_PREP: TestPrepData[] = [
  {
    name: 'IELTS',
    fullName: 'International English Language Testing System',
    slug: 'ielts',
    category: 'English Language Proficiency',
    badge: 'Most Widely Accepted',
    scoreScale: 'Bands 0 - 9.0',
    competitiveTarget: 'Band 7.0 - 8.0+ (No band < 6.5)',
    testDuration: '2 Hours 45 Minutes',
    testMode: 'Computer-delivered & Paper-based',
    validity: '2 Years',
    acceptedBy: '12,000+ universities across UK, Canada, Australia, USA, Ireland, and New Zealand',
    shortDesc: 'The gold standard in English proficiency assessment trusted by immigration departments and world-class universities.',
    overview: 'The International English Language Testing System (IELTS) measures the language proficiency of individuals who want to study or work where English is used as a language of communication. It uses a nine-band scale to clearly identify levels of proficiency, from non-user (band score 1) through to expert (band score 9). Aegis provides certified British Council/IDP pedagogy with individual speaking feedback.',
    sections: [
      {
        name: 'Listening',
        duration: '30 Minutes (+10 mins transfer time for paper)',
        questionsCount: '40 Questions across 4 sections',
        description: 'Assesses ability to understand main ideas, factual details, opinions and attitudes of speakers with British, Australian, and North American accents.'
      },
      {
        name: 'Reading',
        duration: '60 Minutes',
        questionsCount: '40 Questions across 3 long passages',
        description: 'Features authentic academic texts from books, journals, and newspapers evaluating skimming, scanning, logical argument comprehension, and detail extraction.'
      },
      {
        name: 'Writing',
        duration: '60 Minutes',
        questionsCount: '2 Tasks (Task 1 Report 150 words, Task 2 Essay 250 words)',
        description: 'Evaluates lexical resource, grammatical range and accuracy, coherence and cohesion, and task achievement with structured templates.'
      },
      {
        name: 'Speaking',
        duration: '11 - 14 Minutes',
        questionsCount: '3 Parts (Intro, Cue Card monologue, In-depth discussion)',
        description: 'Face-to-face or computer-interactive interview with an examiner testing fluency, lexical resource, grammatical range, and pronunciation.'
      }
    ],
    aegisTrainingFeatures: [
      'IDP & British Council certified master trainers with 10+ years coaching pedigree',
      'Daily 1-on-1 personalized speaking mock interviews with immediate score rubrics',
      'Extensive writing evaluation portal with detailed line-by-line grammar and lexical corrections',
      '15 full-length computer-based diagnostic mock tests replicating real exam UI',
      'Flexible morning, evening, and weekend batches for working professionals and university students'
    ],
    batchDetails: {
      duration: '4 to 6 Weeks',
      hours: '40+ Hours Live Training',
      classType: 'Online Live Interactive / In-Person Hybrid',
      mockTests: '15 Full-length Computer Mock Exams'
    },
    sampleResults: [
      { studentName: 'Rohan Mehta', score: 'Band 8.0 Overall (L:8.5, R:8.5, W:7.5, S:8.0)', admittedTo: 'Imperial College London' },
      { studentName: 'Ananya Sharma', score: 'Band 8.0 Overall (L:8.5, R:8.0, W:7.5, S:8.0)', admittedTo: 'University of Toronto' },
      { studentName: 'Kavita Rao', score: 'Band 7.5 Overall', admittedTo: 'University of Edinburgh' }
    ],
    faqs: [
      {
        q: 'What is the difference between IELTS Academic and General Training?',
        a: 'IELTS Academic is strictly required for higher education admissions (undergraduate and postgraduate degrees). General Training is intended for migration and vocational training purposes.'
      },
      {
        q: 'Is computer-delivered IELTS faster in delivering results?',
        a: 'Yes, computer-delivered IELTS results are typically available within 3 to 5 calendar days, whereas paper-based results take 13 days.'
      },
      {
        q: 'What is IELTS One Skill Retake (OSR)?',
        a: 'IELTS One Skill Retake allows test takers to retake any one of the four skills (Listening, Reading, Writing, or Speaking) if they didn\'t achieve their desired score on test day, without having to re-sit the entire exam.'
      }
    ]
  },
  {
    name: 'PTE Academic',
    fullName: 'Pearson Test of English Academic',
    slug: 'pte',
    category: 'English Language Proficiency',
    badge: 'Fastest 48h Results',
    scoreScale: 'Scores 10 - 90',
    competitiveTarget: 'Score 68 - 79+ (Superior English Tier)',
    testDuration: '2 Hours',
    testMode: '100% Computer-based with AI Scoring',
    validity: '2 Years',
    acceptedBy: '3,300+ universities worldwide including 100% of Australia & New Zealand, 99% of UK, and leading Canadian institutions',
    shortDesc: 'Rapid, unbiased AI-scored English assessment favored for Australian, UK, and New Zealand visas.',
    overview: 'PTE Academic is a computer-based academic English language test aimed at non-native English speakers wanting to study abroad. It tests Reading, Writing, Listening and Speaking in an integrated format with automated artificial intelligence scoring, completely removing human examiner bias.',
    sections: [
      {
        name: 'Speaking & Writing',
        duration: '54 - 67 Minutes',
        questionsCount: 'Personal Intro, Read Aloud, Repeat Sentence, Describe Image, Re-tell Lecture, Essay',
        description: 'Evaluates your spoken English and written articulation using automated speech recognition and algorithmic linguistic models.'
      },
      {
        name: 'Reading',
        duration: '29 - 30 Minutes',
        questionsCount: 'Fill in the blanks, Multiple Choice, Re-order paragraphs',
        description: 'Tests ability to read and understand academic English from diverse international contexts.'
      },
      {
        name: 'Listening',
        duration: '30 - 43 Minutes',
        questionsCount: 'Summarize Spoken Text, Write from Dictation, Fill in the blanks',
        description: 'Measures comprehension of recorded lectures, presentations, and dialogues with native and non-native international accents.'
      }
    ],
    aegisTrainingFeatures: [
      'Official Pearson AI scoring simulator with real-time pronunciation acoustic analysis',
      'High-frequency question bank containing authentic recent exam questions',
      'Exclusive templates for Describe Image, Retell Lecture, and Write from Dictation',
      'Microphone calibration and oral fluency training techniques',
      'Guaranteed score enhancement modules with certified Pearson Master Trainers'
    ],
    batchDetails: {
      duration: '3 to 4 Weeks',
      hours: '30+ Hours Intensive Lab Coaching',
      classType: 'Full Computer Lab Immersion / Live Online',
      mockTests: '20 Sectional & 10 Full AI Mock Exams'
    },
    sampleResults: [
      { studentName: 'Priya Nair', score: '86 Overall (Superior English)', admittedTo: 'University of Melbourne' },
      { studentName: 'Deepak Verma', score: '81 Overall', admittedTo: 'University of Sydney' },
      { studentName: 'Tarun Reddy', score: '79 Overall', admittedTo: 'UNSW Sydney' }
    ],
    faqs: [
      {
        q: 'Why do so many students prefer PTE over IELTS?',
        a: 'PTE is 100% computer-scored with zero human subjectivity. Results are delivered exceptionally fast (typically within 48 hours), and standardized templates make achieving superior band equivalents (79+) highly achievable with structured practice.'
      },
      {
        q: 'Is PTE accepted for Canadian Student Direct Stream (SDS)?',
        a: 'Yes, Immigration, Refugees and Citizenship Canada (IRCC) officially accepts PTE Academic for Canadian Student Direct Stream (SDS) study permit applications.'
      }
    ]
  },
  {
    name: 'TOEFL iBT',
    fullName: 'Test of English as a Foreign Language Internet-Based Test',
    slug: 'toefl',
    category: 'English Language Proficiency',
    badge: '100% US Acceptance',
    scoreScale: 'Scores 0 - 120 (30 pts per section)',
    competitiveTarget: 'Score 100 - 108+',
    testDuration: 'Under 2 Hours',
    testMode: 'Computer-based (Test Center or Home Edition)',
    validity: '2 Years',
    acceptedBy: '12,500+ universities across 160 countries including 100% of Ivy League and US institutions',
    shortDesc: 'The premier academic English test preferred by 9 out of 10 US universities and top global faculties.',
    overview: 'TOEFL iBT measures the English language proficiency of non-native speakers by assessing university-level classroom communication skills. Enhanced in recent years to under 2 hours total time, it remains the most respected benchmark across North America.',
    sections: [
      {
        name: 'Reading',
        duration: '35 Minutes',
        questionsCount: '20 Questions across 2 academic passages',
        description: 'Evaluates reading comprehension of university textbooks and academic articles.'
      },
      {
        name: 'Listening',
        duration: '36 Minutes',
        questionsCount: '28 Questions across lectures and discussions',
        description: 'Tests comprehension of academic lectures, classroom dynamics, and campus conversations.'
      },
      {
        name: 'Speaking',
        duration: '16 Minutes',
        questionsCount: '4 Tasks (1 Independent, 3 Integrated)',
        description: 'Speaking into a microphone expressing personal opinions and synthesizing lecture content.'
      },
      {
        name: 'Writing',
        duration: '29 Minutes',
        questionsCount: '2 Tasks (Integrated Writing & Writing for Academic Discussion)',
        description: 'State and support an opinion in an online classroom discussion and summarize academic reading/listening.'
      }
    ],
    aegisTrainingFeatures: [
      'Official ETS certified prep materials and authentic past TOEFL test papers',
      'Focus on "Writing for an Academic Discussion" scoring rubrics',
      'Note-taking mastery classes for integrated listening and speaking tasks',
      'Full-length timed computer mock tests with AI and instructor cross-validation'
    ],
    batchDetails: {
      duration: '4 Weeks',
      hours: '32 Hours Live Coaching',
      classType: 'Interactive Virtual & Center Classroom',
      mockTests: '12 Timed Diagnostic Tests'
    },
    sampleResults: [
      { studentName: 'Vikram Patel', score: '108 / 120', admittedTo: 'Technical University of Munich' },
      { studentName: 'Aditya Rao', score: '105 / 120', admittedTo: 'Northeastern University, Boston' }
    ],
    faqs: [
      {
        q: 'Is TOEFL accepted in the UK and Australia?',
        a: 'Yes, 100% of UK universities accept TOEFL iBT scores for admissions, and it is widely accepted across European and Australian graduate faculties.'
      }
    ]
  },
  {
    name: 'GRE General',
    fullName: 'Graduate Record Examination',
    slug: 'gre',
    category: 'Standardized Graduate Admissions',
    badge: 'Shorter 1h 58m Format',
    scoreScale: 'Scores 260 - 340 (Q:130-170, V:130-170, AWA:0-6.0)',
    competitiveTarget: 'Score 320 - 330+ (Quant 167+ for STEM)',
    testDuration: '1 Hour 58 Minutes',
    testMode: 'Computer-adaptive by Section',
    validity: '5 Years',
    acceptedBy: 'Thousands of graduate, MS, MBA, and PhD programs worldwide',
    shortDesc: 'The essential standardized exam required for top STEM Master\'s and doctoral admissions in the US and globally.',
    overview: 'The GRE General Test features verbal reasoning, quantitative reasoning, and analytical writing skills. It assesses your ability to analyze and evaluate written material, solve problems with mathematical concepts, and articulate complex ideas clearly and effectively.',
    sections: [
      {
        name: 'Analytical Writing',
        duration: '30 Minutes',
        questionsCount: '1 "Analyze an Issue" Task',
        description: 'Measures ability to articulate complex ideas clearly and effectively, examine claims, and sustain a focused discussion.'
      },
      {
        name: 'Quantitative Reasoning',
        duration: '47 Minutes (2 Sections: 12 & 15 Questions)',
        questionsCount: '27 Questions total',
        description: 'Assesses arithmetic, algebra, geometry, and data analysis skills with problem solving and quantitative comparison.'
      },
      {
        name: 'Verbal Reasoning',
        duration: '41 Minutes (2 Sections: 12 & 15 Questions)',
        questionsCount: '27 Questions total',
        description: 'Measures ability to analyze written discourse, text completion, sentence equivalence, and reading comprehension.'
      }
    ],
    aegisTrainingFeatures: [
      'Quant shortcut methods and speed-math strategies taught by IIT/IIM alumni faculties',
      'Advanced vocabulary mnemonic cards and contextual etymology roots (1,200+ high-frequency GRE words)',
      'Section-level adaptive testing strategies to secure higher scoring second stages',
      'Analytical Writing Assessment (AWA) essay templates and personalized scoring',
      '10 Full-length adaptive mock tests with detailed question-by-question analytics'
    ],
    batchDetails: {
      duration: '8 to 10 Weeks',
      hours: '60+ Hours Live Masterclasses',
      classType: 'Online Masterclasses & Classroom Hybrid',
      mockTests: '10 Adaptive Full Mocks + 50 Sectional Quizzes'
    },
    sampleResults: [
      { studentName: 'Rohan Mehta', score: '328 (Q168, V160, AWA 4.5)', admittedTo: 'Imperial College London' },
      { studentName: 'Aditya Rao', score: '324 (Q167, V157)', admittedTo: 'Northeastern University, Boston' },
      { studentName: 'Sanjay Reddy', score: '331 (Q170, V161)', admittedTo: 'Georgia Tech' }
    ],
    faqs: [
      {
        q: 'Do universities waive the GRE requirement?',
        a: 'Many universities introduced GRE-optional policies for select programs, but submitting a competitive GRE score (320+) remains a decisive advantage for merit scholarships, tuition waivers, and research assistantships.'
      },
      {
        q: 'How long is the new shortened GRE test?',
        a: 'The new GRE is under 2 hours (1 hour and 58 minutes), with the unscored variable section and Argument essay completely removed.'
      }
    ]
  },
  {
    name: 'GMAT Focus Edition',
    fullName: 'Graduate Management Admission Test Focus Edition',
    slug: 'gmat',
    category: 'Standardized Graduate Admissions',
    badge: 'Premier Business Exam',
    scoreScale: 'Scores 205 - 805 (in 10-point increments)',
    competitiveTarget: 'Score 655 - 705+ (85th - 99th Percentile)',
    testDuration: '2 Hours 15 Minutes',
    testMode: 'Computer-adaptive by Question',
    validity: '5 Years',
    acceptedBy: 'Global top MBA and Master in Management (MiM) programs',
    shortDesc: 'Specifically tailored for elite business school admissions, testing data insights and problem-solving.',
    overview: 'The GMAT Focus Edition is the redesigned benchmark for MBA and business master\'s admissions, focusing on critical reasoning, quantitative prowess, and multi-source data insights necessary for modern corporate leadership.',
    sections: [
      {
        name: 'Quantitative Reasoning',
        duration: '45 Minutes',
        questionsCount: '21 Problem Solving Questions',
        description: 'Focuses purely on problem solving and mathematical reasoning; no geometry or data sufficiency in this section.'
      },
      {
        name: 'Verbal Reasoning',
        duration: '45 Minutes',
        questionsCount: '23 Questions (Critical Reasoning & Reading Comprehension)',
        description: 'Measures reading comprehension and critical reasoning; sentence correction is excluded in the Focus edition.'
      },
      {
        name: 'Data Insights',
        duration: '45 Minutes',
        questionsCount: '20 Questions',
        description: 'Data Sufficiency, Multi-Source Reasoning, Table Analysis, and Two-Part Analysis evaluating data literacy.'
      }
    ],
    aegisTrainingFeatures: [
      'Personalized coaching with GMAT 99th-percentile instructors',
      'Exclusive Data Insights drills with spreadsheet and multi-source table analysis',
      'Section order flexibility training (choose the order that maximizes your strengths)',
      'Question Review & Edit strategy (how to optimize your 3 allowable answer changes per section)',
      '8 Full-length official mock simulations with ESR (Enhanced Score Report) deep-dive'
    ],
    batchDetails: {
      duration: '8 to 12 Weeks',
      hours: '55 Hours Advanced Training',
      classType: 'Executive Weekend / Evening Batches',
      mockTests: '8 Full Computer Adaptive Mocks'
    },
    sampleResults: [
      { studentName: 'Ananya Sharma', score: '675 (96th Percentile)', admittedTo: 'Rotman School of Management, Toronto' },
      { studentName: 'Arjun Singhal', score: '705 (99th Percentile)', admittedTo: 'INSEAD / LBS' }
    ],
    faqs: [
      {
        q: 'How does GMAT Focus compare to the legacy GMAT scale?',
        a: 'The Focus edition scale ranges from 205 to 805 ending in 5. A 655 on GMAT Focus represents roughly the 85th percentile (equivalent to ~710 on legacy GMAT).'
      }
    ]
  },
  {
    name: 'Duolingo English Test',
    fullName: 'Duolingo English Test (DET)',
    slug: 'duolingo',
    category: 'English Language Proficiency',
    badge: 'Convenient Home Exam',
    scoreScale: 'Scores 10 - 160',
    competitiveTarget: 'Score 125 - 135+',
    testDuration: '1 Hour',
    testMode: 'Computer-adaptive Online at Home',
    validity: '2 Years',
    acceptedBy: '5,000+ institutions worldwide including top US & European universities',
    shortDesc: 'Affordable, fast online English exam you can take anywhere, anytime with results in 48 hours.',
    overview: 'The Duolingo English Test is an innovative online English proficiency assessment that uses computer-adaptive testing technology to evaluate Literacy, Comprehension, Conversation, and Production in under 60 minutes.',
    sections: [
      {
        name: 'Adaptive Test',
        duration: '45 Minutes',
        questionsCount: 'Variable computer-adaptive items',
        description: 'Measures reading, writing, speaking, and listening through interactive exercises that dynamically adapt to your skill.'
      },
      {
        name: 'Writing & Speaking Sample',
        duration: '10 Minutes',
        questionsCount: '1 Writing & 1 Video Speaking Prompt',
        description: 'Ungraded sample sent directly to admissions committees alongside your official subscores.'
      }
    ],
    aegisTrainingFeatures: [
      'Interactive practice on Duolingo question types: Read and Complete, Interactive Reading, Write About the Photo',
      'Strict test proctoring rules coaching to ensure your test session is verified without rejections',
      '5 Realistic adaptive computer mocks'
    ],
    batchDetails: {
      duration: '2 Weeks',
      hours: '15 Hours Fast-Track Coaching',
      classType: 'Online Intensive',
      mockTests: '5 Adaptive Full Mocks'
    },
    sampleResults: [
      { studentName: 'Nitin Kumar', score: '130 / 160', admittedTo: 'University of South Florida' }
    ],
    faqs: [
      {
        q: 'Why are some DET tests not certified?',
        a: 'DET uses stringent AI and human video proctoring. Moving your gaze away from the screen, background noise, or unverified browser extensions can cause invalidation. Aegis trains you on exact proctoring compliance.'
      }
    ]
  },
  {
    name: 'SAT',
    fullName: 'Digital SAT Exam',
    slug: 'sat',
    category: 'Undergraduate Entrance',
    badge: 'US & Canada Undergrad',
    scoreScale: 'Scores 400 - 1600 (RW: 200-800, Math: 200-800)',
    competitiveTarget: 'Score 1450 - 1550+',
    testDuration: '2 Hours 14 Minutes',
    testMode: 'Digital Exam on Bluebook App',
    validity: '5 Years',
    acceptedBy: 'All US colleges and leading Canadian & Singapore universities for undergraduate admissions',
    shortDesc: 'The premier college entrance exam assessing high school students for bachelor\'s degrees.',
    overview: 'The Digital SAT is taken on a laptop or tablet using the Bluebook application. Featuring shorter reading passages and a built-in Desmos graphing calculator for all math questions, it evaluates readiness for college-level coursework.',
    sections: [
      {
        name: 'Reading and Writing',
        duration: '64 Minutes (2 Modules: 32 mins each)',
        questionsCount: '54 Questions total',
        description: 'Features short reading passages paired with a single question covering craft, structure, information, and expression of ideas.'
      },
      {
        name: 'Math',
        duration: '70 Minutes (2 Modules: 35 mins each)',
        questionsCount: '44 Questions total',
        description: 'Algebra, Advanced Math, Problem Solving and Data Analysis, and Geometry & Trigonometry with Desmos calculator permitted throughout.'
      }
    ],
    aegisTrainingFeatures: [
      'Complete mastery of the built-in Desmos graphing calculator for high-speed math solving',
      'Shorter passage speed-reading and vocabulary inference strategies',
      'Module 2 adaptive difficulty unlocking techniques to guarantee 700+ section scores',
      '10 Full-length Bluebook-style digital mock tests with detailed performance analytics'
    ],
    batchDetails: {
      duration: '8 to 12 Weeks',
      hours: '60 Hours Foundational & Advanced Coaching',
      classType: 'Weekend Batches for High School Students',
      mockTests: '10 Full Digital Bluebook Practice Tests'
    },
    sampleResults: [
      { studentName: 'Ayush Goel', score: '1520 / 1600 (Math: 790, RW: 730)', admittedTo: 'Purdue University Engineering' }
    ],
    faqs: [
      {
        q: 'Is the calculator allowed on the entire Math section?',
        a: 'Yes, on the Digital SAT, the built-in Desmos graphing calculator is available on every single math question, or you can bring your own approved handheld calculator.'
      }
    ]
  }
];

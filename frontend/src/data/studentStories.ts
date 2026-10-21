export interface StudentStory {
  id: string;
  slug: string;
  name: string;
  avatar: string;
  program: string;
  degreeLevel: 'Master\'s' | 'Bachelor\'s' | 'MBA' | 'PhD';
  university: string;
  country: string;
  countryCode: string;
  flag: string;
  intake: string;
  scholarshipReceived?: string;
  testScores: { test: string; score: string }[];
  previousEducation: string;
  previousCGPA: string;
  challenge: string;
  strategy: string;
  admissionAdmits: string[];
  quote: string;
  currentRole: string;
  visaApprovalDays: string;
  adviceForAspirants: string[];
}

export const STUDENT_STORIES: StudentStory[] = [
  {
    id: 'thota-sai-kumar-reddy',
    slug: 'thota-sai-kumar-reddy',
    name: 'THOTA SAI KUMAR REDDY',
    avatar: '/images/reviews/thota-sai-kumar-reddy.jpg',
    program: 'Higher Education Abroad & Visa Process',
    degreeLevel: 'Master\'s',
    university: 'Global University Admissions',
    country: 'International',
    countryCode: 'GLOBAL',
    flag: '🌍',
    intake: 'Verified Study Abroad Journey',
    scholarshipReceived: 'Personalized Case Guidance • Zero Hidden Charges',
    testScores: [
      { test: 'Counseling', score: '1-on-1 Dedicated Support' },
      { test: 'Visa Preparation', score: '100% Documentation Audited' }
    ],
    previousEducation: 'Nellore, Andhra Pradesh',
    previousCGPA: 'Verified Student Profile',
    challenge: 'Handling the entire admissions and visa process smoothly without confusion or stress.',
    strategy: 'Outstanding support and dedication from Siva sir and Gopal sir who were extremely knowledgeable, patient, and always available to answer every question.',
    admissionAdmits: [
      'International University Admissions (Accepted)',
      'Visa Approval Cleared'
    ],
    quote: 'The entire process was handled professionally and smoothly from start to finish. The team was always supportive, responsive, and guided me clearly at every step. A special thanks to Siva sir and Gopal sir for their outstanding support and dedication. Their guidance made the whole process much easier and stress-free.',
    currentRole: 'Mentored by Siva Sir & Gopal Sir',
    visaApprovalDays: 'Full Visa Assistance with Complete Transparency',
    adviceForAspirants: [
      'Choose mentors who remain dedicated and patient throughout your entire process.',
      'Maintain clear communication with your advisors for a stress-free outcome.'
    ]
  },
  {
    id: 'deverapalli-kushi',
    slug: 'deverapalli-kushi',
    name: 'Deverapalli Kushi',
    avatar: '/images/reviews/deverapalli-kushi.jpg',
    program: 'Master’s Program in the UK',
    degreeLevel: 'Master\'s',
    university: 'UK University Admissions',
    country: 'United Kingdom',
    countryCode: 'UK',
    flag: '🇬🇧',
    intake: 'UK Intake Success',
    scholarshipReceived: 'Comprehensive University & Visa Support',
    testScores: [
      { test: 'SOP & Interview', score: 'Comprehensive Prep' },
      { test: 'Visa Filing', score: '100% Documentation Audited' }
    ],
    previousEducation: 'Nellore, Andhra Pradesh',
    previousCGPA: 'Verified Student Profile',
    challenge: 'Shortlisting the right universities in the UK matching academic goals, drafting SOP, and understanding visa regulations.',
    strategy: 'Thorough step-by-step guidance from the Aegis team with UK expertise, covering university matching, SOP drafting, interview preparation, visa filing, and even post-admission accommodation.',
    admissionAdmits: [
      'Dream UK University (Accepted)',
      'UK Student Visa Granted'
    ],
    quote: 'Thanks to their efforts, I was able to secure admission to one of my dream universities, and they even guided me with post-admission formalities, including accommodation and travel arrangements. My heartfelt thanks to Gopal Reddy sir for the support provided during the whole process of my abroad studies.',
    currentRole: 'UK Master\'s Scholar',
    visaApprovalDays: 'Full End-to-End UK Admission & Visa Clearance',
    adviceForAspirants: [
      'Work with counselors who understand UK admissions deeply and guide you beyond just the offer letter.',
      'Focus on a well-crafted Statement of Purpose and thorough interview preparation.'
    ]
  },
  {
    id: 'jaswanth-kumar-nallu',
    slug: 'jaswanth-kumar-nallu',
    name: 'Jaswanth kumar Nallu',
    avatar: '/images/reviews/jaswanth-kumar-nallu.jpg',
    program: 'Course Selection & Visa Approval',
    degreeLevel: 'Master\'s',
    university: 'International Degree Program',
    country: 'International',
    countryCode: 'GLOBAL',
    flag: '✈️',
    intake: 'Visa Granted',
    scholarshipReceived: 'Comprehensive Application & Interview Prep Support',
    testScores: [
      { test: 'Visa Prep', score: 'Mock Interviews Cleared' },
      { test: 'Documentation', score: 'Zero Error File Clearance' }
    ],
    previousEducation: 'Nellore, Andhra Pradesh',
    previousCGPA: 'Verified Student Profile',
    challenge: 'Preparing compliant documentation and mastering the visa interview for international student visa clearance.',
    strategy: 'End-to-end guidance from Gopal Sir, Shiva, and Surendra covering university application, rigorous documentation auditing, and personalized interview practice until VISA approval.',
    admissionAdmits: [
      'Selected University (Accepted)',
      'Student Visa Granted'
    ],
    quote: 'My sincere thanks to Gopal sir for his constant support and guidance until I received my VISA. A special thanks to Shiva and Surendra for being so approachable and supportive. Their expertise and dedication truly made the difference.',
    currentRole: 'Student Visa Granted',
    visaApprovalDays: 'Visa Approved on First Attempt',
    adviceForAspirants: [
      'Meticulous documentation and realistic mock interviews make all the difference in embassy interviews.',
      'Follow the advice of experienced advisors who support you until you receive your visa.'
    ]
  },
  {
    id: 'reema-panthalukaran',
    slug: 'reema-panthalukaran',
    name: 'Reema Panthalukaran',
    avatar: '/images/reviews/reema-panthalukaran.jpg',
    program: 'Higher Studies in the USA',
    degreeLevel: 'Master\'s',
    university: 'US University Admissions',
    country: 'United States',
    countryCode: 'USA',
    flag: '🇺🇸',
    intake: 'US Visa Granted',
    scholarshipReceived: 'Mock Interview & Documentation Audit Package',
    testScores: [
      { test: 'Mock Visa Interview', score: 'Top Confidence Rating' },
      { test: 'Documentation', score: 'Fully Solvency Verified' }
    ],
    previousEducation: 'Nellore, Andhra Pradesh',
    previousCGPA: 'Verified Student Profile',
    challenge: 'Overcoming the anxiety of the US consular interview and presenting verified financial documentation accurately.',
    strategy: 'Attentive documentation review by Aegis consultants, strategic suggestions, and realistic mock interviews that ensured total confidence.',
    admissionAdmits: [
      'US University Admitted',
      'US Student Visa Approved'
    ],
    quote: 'The mock interviews they conducted were especially helpful and made me feel confident for the real interview. Thanks to Aegis Consultancy, I received my US visa without any complications. They made the entire procedure simple and stress-free.',
    currentRole: 'US Visa Holder',
    visaApprovalDays: 'US F-1 Visa Cleared Without Complications',
    adviceForAspirants: [
      'Take mock interviews seriously—they give you the exact confidence needed in front of the visa officer.',
      'Ensure every detail of your documentation is vetted by experts before filing.'
    ]
  },
  {
    id: 'rohith-reddy',
    slug: 'rohith-reddy',
    name: 'Rohith Reddy',
    avatar: '/images/reviews/rohith-reddy.jpg',
    program: 'Australian Higher Studies',
    degreeLevel: 'Master\'s',
    university: 'Australian University Admissions',
    country: 'Australia',
    countryCode: 'AUSTRALIA',
    flag: '🇦🇺',
    intake: 'Fast-Track Intake Success',
    scholarshipReceived: 'Express Visa Application Support',
    testScores: [
      { test: 'GS Compliance', score: '100% Cleared' },
      { test: 'Turnaround Time', score: '3 Days Approval' }
    ],
    previousEducation: 'Nellore, Andhra Pradesh',
    previousCGPA: 'Verified Student Profile',
    challenge: 'Navigating Australian student visa requirements smoothly without delays or complications.',
    strategy: 'Flawless file preparation and prompt filing by Aegis, resulting in a rapid approval from the Australian High Commission in just 3 days.',
    admissionAdmits: [
      'Australian University Offer Confirmed',
      'Australian Student Visa Issued'
    ],
    quote: 'Aegis consultancy made my Australian student visa process simple and hassle-free. Their guidance and constant support were amazing. And I received my visa within three days of applying.',
    currentRole: 'Australian Visa Approved',
    visaApprovalDays: '3 Days Rapid Visa Approval',
    adviceForAspirants: [
      'Submit complete, accurate financial and academic records for rapid turnaround.',
      'Rely on experienced consultants who understand country-specific visa protocols.'
    ]
  },
  {
    id: 'manu-madhala',
    slug: 'manu-madhala',
    name: 'Manu Madhala',
    avatar: '/images/reviews/manu-madhala.png',
    program: 'Higher Education & UK Visa',
    degreeLevel: 'Master\'s',
    university: 'UK University Admissions',
    country: 'United Kingdom',
    countryCode: 'UK',
    flag: '🇬🇧',
    intake: 'UK Visa Success',
    scholarshipReceived: 'End-to-End Application & Interview Package',
    testScores: [
      { test: 'University Selection', score: 'Target Match' },
      { test: 'Visa Approval', score: '100% Cleared' }
    ],
    previousEducation: 'Nellore, Andhra Pradesh',
    previousCGPA: 'Verified Student Profile',
    challenge: 'Managing university selection, interview preparation, and visa applications simultaneously.',
    strategy: 'Dedicated guidance from Siva sir and the Aegis team whose friendly coordination and deep expertise ensured a seamless UK visa journey.',
    admissionAdmits: [
      'UK University (Admitted)',
      'UK Student Visa Granted'
    ],
    quote: 'From day one, their team expertly handled my entire process, from university selection and interview preparation to visa application. I had very good experience with Siva sir, very supportive and friendly, and their coordination and expertise ensured a seamless experience. I\'m thrilled to have secured my UK visa!',
    currentRole: 'UK Visa Granted',
    visaApprovalDays: 'Seamless UK Student Visa Processing',
    adviceForAspirants: [
      'Trust your counselors and leverage their interview preparation sessions.',
      'Stay consistent and responsive with required paperwork from day one.'
    ]
  },
  {
    id: 'mohammed-husamuddin-ahmed',
    slug: 'mohammed-husamuddin-ahmed',
    name: 'MOHAMMED HUSAMUDDIN AHMED',
    avatar: '/images/reviews/mohammed-husamuddin-ahmed.jpg',
    program: 'Higher Education & Expert Faculty Guidance',
    degreeLevel: 'Master\'s',
    university: 'Global Partner Universities',
    country: 'International',
    countryCode: 'GLOBAL',
    flag: '✨',
    intake: 'Verified Admission Pathway',
    scholarshipReceived: 'Faculty-Led Comprehensive Guidance',
    testScores: [
      { test: 'Admissions Prep', score: 'Expert Mentorship' },
      { test: 'Query Resolution', score: 'Fast-Track Response' }
    ],
    previousEducation: 'Nellore, Andhra Pradesh',
    previousCGPA: 'Verified Student Profile',
    challenge: 'Understanding complex international education requirements and booking timelines.',
    strategy: 'Invaluable guidance from expert faculty who made complex steps clear and easy, backed by quick response times for every question.',
    admissionAdmits: [
      'Selected University (Accepted)',
      'Visa Process Confirmed'
    ],
    quote: 'My experience at Aegis Overseas Education Services was outstanding! The expert faculty provided invaluable guidance, making complex processes easy to understand. Their quick service ensured all my queries were addressed promptly, and the booking process was seamless.',
    currentRole: 'Aegis Overseas Scholar',
    visaApprovalDays: 'Fast-Track Document & Query Processing',
    adviceForAspirants: [
      'Leverage faculty mentorship to clarify complicated application criteria.',
      'Choose an agency known for rapid query resolution and transparent counseling.'
    ]
  },
  {
    id: 'varshitha-rao',
    slug: 'varshitha-rao',
    name: 'Varshitha Rao',
    avatar: '/images/reviews/varshitha-rao.png',
    program: 'Global Study Abroad Journey',
    degreeLevel: 'Master\'s',
    university: 'International Degree Admissions',
    country: 'International',
    countryCode: 'GLOBAL',
    flag: '🌟',
    intake: 'Smooth Study Abroad Intake',
    scholarshipReceived: 'Personalized Profile Mapping & Visa Mentorship',
    testScores: [
      { test: 'Counseling', score: 'Personalized Guidance' },
      { test: 'Documentation', score: 'Zero Refusal Audit' }
    ],
    previousEducation: 'Nellore, Andhra Pradesh',
    previousCGPA: 'Verified Student Profile',
    challenge: 'Finding trustworthy personalized counseling to navigate university shortlisting and visa documentation without stress.',
    strategy: 'Knowledgeable advisors who customized every step of the journey, making application filing and visa preparation smooth and stress-free.',
    admissionAdmits: [
      'Target International University (Admitted)',
      'Student Visa Cleared'
    ],
    quote: 'Choosing Aegis Overseas for my study abroad journey was one of the best decisions I\'ve ever made. The counsellors were incredibly knowledgeable and provided personalized guidance that made the entire process smooth and stress-free. They helped me with university selection, application processes, and even visa preparation and documentation.',
    currentRole: 'Aegis Overseas Scholar',
    visaApprovalDays: 'Smooth, stress-free admissions and visa clearance',
    adviceForAspirants: [
      'Investing in professional, personalized counseling removes uncertainty and guarantees peace of mind.',
      'Follow your counselor\'s structured checklist closely for guaranteed results.'
    ]
  },
  {
    id: 'krishna-vijay',
    slug: 'krishna-vijay',
    name: 'Krishna Vijay',
    avatar: '/images/reviews/krishna-vijay.jpg',
    program: 'UK Higher Education & Visa Service',
    degreeLevel: 'Master\'s',
    university: 'UK University Admissions',
    country: 'United Kingdom',
    countryCode: 'UK',
    flag: '🇬🇧',
    intake: 'UK Visa Success',
    scholarshipReceived: 'Enduring Guidance Across Complete Process',
    testScores: [
      { test: 'Process Clarity', score: 'Pre & Post Offer Support' },
      { test: 'Visa Perseverance', score: 'Granted Despite Challenges' }
    ],
    previousEducation: 'Nellore, Andhra Pradesh',
    previousCGPA: 'Verified Student Profile',
    challenge: 'Overcoming application setbacks and previous mistakes that prolonged the visa process.',
    strategy: 'Unwavering patience and constant encouragement from Gopal Reddy sir, Krishna sir, and Siva sir, who provided clear step-by-step guidance across documents, pre-offer, post-offer, and visa filing.',
    admissionAdmits: [
      'UK University (Admitted)',
      'UK Visa Granted'
    ],
    quote: 'Even though it took me one year to get my UK visa because of the mistakes I have done, they have been with very much patience till the end. They have always encouraged me irrespective of my mistakes. All the staff are very friendly. Especially Gopal reddy sir, Krishna sir and Siva sir have been with me throughout my journey.',
    currentRole: 'UK Visa Recipient',
    visaApprovalDays: 'Full End-to-End Patient Resolution & Visa Grant',
    adviceForAspirants: [
      'Never give up even if your journey faces delays—with the right mentors, success is always achievable.',
      'Be fully honest with your counselors so they can resolve any past mistakes effectively.'
    ]
  },
  {
    id: 'pawan-royalz',
    slug: 'pawan-royalz',
    name: 'Pawan Royalz',
    avatar: '/images/reviews/pawan-royalz.png',
    program: 'Master\'s in the UK',
    degreeLevel: 'Master\'s',
    university: 'UK Master\'s Program',
    country: 'United Kingdom',
    countryCode: 'UK',
    flag: '🇬🇧',
    intake: 'UK Intake Success',
    scholarshipReceived: 'MD-Led Admissions & Visa Mentorship',
    testScores: [
      { test: 'Interview Guidance', score: 'High Distinction' },
      { test: 'Visa Coordination', score: 'Flawless Execution' }
    ],
    previousEducation: 'Nellore, Andhra Pradesh',
    previousCGPA: 'Verified Student Profile',
    challenge: 'Managing university selection, interview coaching, and UK visa filing in a structured, timely manner.',
    strategy: 'Complete process takeover by the Aegis team with prompt coordination, guided personally throughout by Managing Director Gopal Reddy sir.',
    admissionAdmits: [
      'UK Master\'s Degree (Admitted)',
      'UK Student Visa Stamped'
    ],
    quote: 'Right from the day one I approached them, my process was completely taken over by the team with timely coordination starting from University selection, interview guidance and visa process. And now I came out with flying colours with UK visa in my hand. Moving to UK to pursue my masters. My sincere thanks to Gopal Reddy sir(MD) who has been with me throughout.',
    currentRole: 'UK Master\'s Student',
    visaApprovalDays: 'Smooth Timely UK Visa Approval',
    adviceForAspirants: [
      'Hand over your process to experienced leaders who offer direct personal oversight.',
      'Begin university selection early to give yourself maximum options and prep time.'
    ]
  },
  {
    id: 'rishita-reddy',
    slug: 'rishita-reddy',
    name: 'Rishita Reddy',
    avatar: '/images/reviews/rishita-reddy.jpg',
    program: 'Student VISA & Abroad Studies',
    degreeLevel: 'Master\'s',
    university: 'Global University Admissions',
    country: 'International',
    countryCode: 'GLOBAL',
    flag: '✈️',
    intake: 'Verified Visa Clearance',
    scholarshipReceived: 'Expert-Led Student Visa Guidance',
    testScores: [
      { test: 'VISA Filing', score: '100% Compliant' },
      { test: 'Mentorship', score: 'Personalized 1-on-1' }
    ],
    previousEducation: 'Nellore, Andhra Pradesh',
    previousCGPA: 'Verified Student Profile',
    challenge: 'Securing student visa clearance without facing unnecessary delays or confusion.',
    strategy: 'Patient, friendly step-by-step guidance led by Mr. Gopal Reddy sir (MS-UK), ensuring every requirement was meticulously met.',
    admissionAdmits: [
      'International University Offer',
      'Student VISA Approved'
    ],
    quote: 'I am very much satisfied with the service I\'ve received at Aegis Overseas Education services starting from the day I\'ve approached them for my student VISA process. Most importantly, I would like to thank Mr. Gopal reddy sir (MS-UK), for being very patient and guiding me through each and every step. They are helpful and friendly.',
    currentRole: 'Student VISA Holder',
    visaApprovalDays: 'Smooth, Error-Free Student VISA Approval',
    adviceForAspirants: [
      'Seek guidance from mentors who have international qualifications themselves (like MS-UK).',
      'Patience and expert direction will ensure a smooth visa process without stress.'
    ]
  },
  {
    id: 'harsha-vaka',
    slug: 'harsha-vaka',
    name: 'Harsha Vaka',
    avatar: '/images/reviews/harsha-vaka.jpg',
    program: 'Graduation in the UK',
    degreeLevel: 'Bachelor\'s',
    university: 'UK University Admissions',
    country: 'United Kingdom',
    countryCode: 'UK',
    flag: '🇬🇧',
    intake: 'UK Graduation Success',
    scholarshipReceived: 'Proactive Advisory & UK Education Mentorship',
    testScores: [
      { test: 'UK System Advisory', score: 'Comprehensive' },
      { test: 'Application Success', score: 'Confirmed Admit' }
    ],
    previousEducation: 'Nellore, Andhra Pradesh',
    previousCGPA: 'Verified Student Profile',
    challenge: 'Understanding the nuances of the UK higher education system for a successful undergraduate graduation journey.',
    strategy: 'Extensive knowledge of UK education, proactive communication, and personalized advice from Aegis overseas that ensured complete preparation and confidence.',
    admissionAdmits: [
      'UK University Graduation Program (Admitted)',
      'UK Student Visa Granted'
    ],
    quote: 'I had the privilege of working with aegis overseas for my graduation process in the UK, and I cannot express enough gratitude for their exceptional guidance and support. From their extensive knowledge of the UK education system to their proactive approach and personalized advice, aegis overseas ensured that I was well-informed, prepared, and confident throughout the entire journey.',
    currentRole: 'UK Graduate Scholar',
    visaApprovalDays: 'Seamless UK Education & Visa Processing',
    adviceForAspirants: [
      'Choose an overseas consultancy with in-depth knowledge of your specific destination country\'s education system.',
      'Proactive planning and personalized advice make your study abroad journey memorable and successful.'
    ]
  }
];

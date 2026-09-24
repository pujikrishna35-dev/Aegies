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
    id: 'rohan-mehta-imperial',
    slug: 'rohan-mehta-imperial-college-london',
    name: 'Rohan Mehta',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop',
    program: 'MSc Advanced Computing (Artificial Intelligence)',
    degreeLevel: 'Master\'s',
    university: 'Imperial College London',
    country: 'United Kingdom',
    countryCode: 'GB',
    flag: '🇬🇧',
    intake: 'Fall 2025',
    scholarshipReceived: '£10,000 Faculty of Engineering Excellence Scholarship',
    testScores: [
      { test: 'IELTS Academic', score: '8.0 Overall' },
      { test: 'GRE', score: '328 (Q168, V160)' }
    ],
    previousEducation: 'B.Tech in Computer Science, Hyderabad',
    previousCGPA: '8.2 / 10.0',
    challenge: 'Rohan had an average undergrad CGPA and two early semester backlogs. He had previously received standard template rejections from tier-1 institutions and felt disheartened about applying to world top-10 universities.',
    strategy: 'Aegis technical advisors audited his GitHub repositories and published IEEE research paper. We restructured his Statement of Purpose to highlight his specialized algorithm work, secured academic endorsements from research mentors, and applied within the first 48 hours of Imperial\'s intake window.',
    admissionAdmits: [
      'Imperial College London (Accepted)',
      'University of Manchester',
      'University of Warwick',
      'University of Edinburgh'
    ],
    quote: 'Aegis didn\'t treat me like another file. They identified the core strength in my technical projects that previous consultancies completely overlooked. Walking into Imperial was a dream made reality.',
    currentRole: 'Graduate AI Research Engineer at Deliveroo, London HQ',
    visaApprovalDays: 'Standard UK Student Visa approved in 9 working days with zero interview calls',
    adviceForAspirants: [
      'Focus intensely on explaining WHY your specific research interests align with faculty lab projects.',
      'Do not hide academic gaps; frame them transparently as learning milestones overcome through practical projects.',
      'Submit applications early in September/October when departmental scholarship endowments are untouched.'
    ]
  },
  {
    id: 'ananya-sharma-toronto',
    slug: 'ananya-sharma-university-of-toronto',
    name: 'Ananya Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    program: 'Master of Management Analytics (MMA)',
    degreeLevel: 'Master\'s',
    university: 'University of Toronto (Rotman School of Management)',
    country: 'Canada',
    countryCode: 'CA',
    flag: '🇨🇦',
    intake: 'Fall 2025',
    scholarshipReceived: 'CAD $15,000 Rotman Entrance Fellowship',
    testScores: [
      { test: 'IELTS Academic', score: '8.0 Overall' },
      { test: 'GMAT Focus', score: '675 (96th Percentile)' }
    ],
    previousEducation: 'B.Com (Honours) + 2 Years Financial Analyst Experience',
    previousCGPA: '8.6 / 10.0',
    challenge: 'Transitioning from a traditional commerce background into heavy statistical predictive analytics without a formal mathematics/engineering degree.',
    strategy: 'We guided Ananya through credential-building micro-certifications in Python and linear algebra, framed a narrative around FinTech disruption in emerging markets, and conducted 4 rounds of mock behavioral Kira Talent video interviews.',
    admissionAdmits: [
      'University of Toronto (Rotman) - Accepted',
      'McGill University (Desautels)',
      'University of British Columbia (Sauder)'
    ],
    quote: 'The video interview prep with Aegis was intense and exactly mirrored Rotman\'s real Kira assessment. That gave me immense confidence on test day.',
    currentRole: 'Senior Data Analyst at Scotiabank, Toronto Financial District',
    visaApprovalDays: 'Canadian Study Permit approved in 21 days under SDS track',
    adviceForAspirants: [
      'Non-STEM students can break into analytics by demonstrating concrete quantitative self-study.',
      'Start your Canadian SDS visa preparation alongside university applications to ensure GIC and medicals are in place.'
    ]
  },
  {
    id: 'vikram-patel-tum',
    slug: 'vikram-patel-technical-university-of-munich',
    name: 'Vikram Patel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    program: 'MSc Robotics, Cognition, Intelligence',
    degreeLevel: 'Master\'s',
    university: 'Technical University of Munich (TUM)',
    country: 'Germany',
    countryCode: 'DE',
    flag: '🇩🇪',
    intake: 'Winter Intake (October)',
    scholarshipReceived: '100% Tuition Waiver (Public University Zero Tuition Model)',
    testScores: [
      { test: 'TOEFL iBT', score: '108 / 120' },
      { test: 'GRE Quantitative', score: '169 / 170' }
    ],
    previousEducation: 'B.E. Mechanical & Automation Engineering',
    previousCGPA: '8.9 / 10.0',
    challenge: 'Complex German credit matching requirements (Curricular Analysis) and navigating the lengthy German student visa waitlists and APS certification process.',
    strategy: 'Aegis German desk conducted a course-by-course European Credit Transfer System (ECTS) module mapping. We handled his APS verification filing within week one, curated his motivation letter in Europass format, and guided him on setting up the Blocked Account with Coracle.',
    admissionAdmits: [
      'TUM (Technical University of Munich) - Accepted',
      'RWTH Aachen University',
      'University of Stuttgart'
    ],
    quote: 'Germany\'s admissions criteria are strictly mathematical with zero room for formatting mistakes. Aegis ensured my module catalog ECTS conversion was flawless.',
    currentRole: 'Robotics Software Specialist at BMW Group, Munich',
    visaApprovalDays: 'German National Student Visa issued in 3 weeks via VFS New Delhi',
    adviceForAspirants: [
      'Apply for your APS certificate at least 6 months ahead; it is mandatory for German universities.',
      'Take basic A1/A2 German language classes even for English-taught programs—it multiplies your part-time and internship prospects.'
    ]
  },
  {
    id: 'priya-nair-melbourne',
    slug: 'priya-nair-university-of-melbourne',
    name: 'Priya Nair',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    program: 'Master of Data Science',
    degreeLevel: 'Master\'s',
    university: 'University of Melbourne',
    country: 'Australia',
    countryCode: 'AU',
    flag: '🇦🇺',
    intake: 'Semester 1 (February)',
    scholarshipReceived: 'AUD $20,000 Global Graduate Leaders Scholarship',
    testScores: [
      { test: 'PTE Academic', score: '86 Overall (Superior English)' }
    ],
    previousEducation: 'B.Sc Statistics & Mathematics',
    previousCGPA: '8.7 / 10.0',
    challenge: 'Navigating Australia\'s heightened Genuine Student (GS) assessment criteria and explaining study relevance to avoid visa scrutiny.',
    strategy: 'We drafted a rock-solid 4-page GS declaration detailing career pathways back home, industry demand for predictive statistical modeling, and complete financial provenance verification.',
    admissionAdmits: [
      'University of Melbourne - Accepted',
      'University of Sydney',
      'UNSW Sydney',
      'Monash University'
    ],
    quote: 'Australia\'s new visa rules worried my parents. Aegis prepared our financial tree and Genuine Student letter with such thoroughness that our visa was granted in just 8 days!',
    currentRole: 'Risk Data Scientist at Commonwealth Bank of Australia, Melbourne',
    visaApprovalDays: 'Australian Subclass 500 Visa granted in 8 days with zero RFI (Request for Information)',
    adviceForAspirants: [
      'The Genuine Student (GS) criterion is crucial—clearly articulate why this specific course cannot be replicated at home and what your post-study career trajectory looks like.'
    ]
  },
  {
    id: 'aditya-rao-northeastern',
    slug: 'aditya-rao-northeastern-university-boston',
    name: 'Aditya Rao',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    program: 'MS in Computer Science (Khoury College of Computer Sciences)',
    degreeLevel: 'Master\'s',
    university: 'Northeastern University, Boston',
    country: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    intake: 'Fall 2025',
    scholarshipReceived: '$12,000 Dean\'s Merit Award',
    testScores: [
      { test: 'GRE', score: '324 (Q167, V157)' },
      { test: 'TOEFL iBT', score: '105' }
    ],
    previousEducation: 'B.Tech Information Technology, Pune',
    previousCGPA: '7.9 / 10.0',
    challenge: 'Severe anxiety surrounding the high-stakes US F-1 Visa consular interview at the Hyderabad consulate.',
    strategy: 'Aegis US Visa Specialists conducted three rigorous 1-on-1 mock interviews simulating consular officer inquiries on funding ties, why Northeastern vs others, and post-OPT intent.',
    admissionAdmits: [
      'Northeastern University (Boston Main Campus) - Accepted',
      'University of Southern California (USC)',
      'Arizona State University (ASU)',
      'University of Texas at Dallas (UTD)'
    ],
    quote: 'During my F-1 interview, the officer asked the exact questions we had practiced the previous evening. I answered calmly in under 90 seconds and heard: "Your visa is approved!"',
    currentRole: 'Cloud Software Engineer Intern at Wayfair HQ, Boston',
    visaApprovalDays: 'US F-1 Visa approved at Hyderabad Consulate in 2-minute interview',
    adviceForAspirants: [
      'Keep your F-1 visa answers concise: never speak for more than 40 seconds per question unless prompted.',
      'Show clear, undeniable evidence of liquid funds covering your entire I-20 first-year requirement.'
    ]
  },
  {
    id: 'sneha-reddy-trinity',
    slug: 'sneha-reddy-trinity-college-dublin',
    name: 'Sneha Reddy',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    program: 'MSc Computer Science (Future Networked Systems)',
    degreeLevel: 'Master\'s',
    university: 'Trinity College Dublin',
    country: 'Ireland',
    countryCode: 'IE',
    flag: '🇮🇪',
    intake: 'Autumn Intake',
    scholarshipReceived: '€5,000 Global Excellence Postgraduate Scholarship',
    testScores: [
      { test: 'IELTS Academic', score: '7.5 Overall' }
    ],
    previousEducation: 'B.Tech Electronics & Communication Engineering',
    previousCGPA: '8.4 / 10.0',
    challenge: 'Transitioning from ECE hardware to high-performance networked systems and cloud architecture at Ireland\'s top university.',
    strategy: 'We bridged the hardware-software connection in her personal statement, highlighting telecommunication protocols, IoT edge computing projects, and Ireland\'s Silicon Docks ecosystem.',
    admissionAdmits: [
      'Trinity College Dublin - Accepted',
      'University College Dublin (UCD)',
      'University of Galway'
    ],
    quote: 'Ireland is the tech capital of Europe. Aegis connected me directly with alumni studying in Dublin who guided me on student accommodation and part-time work before I landed.',
    currentRole: 'Network Systems Engineer at Ericsson, Athlone / Dublin',
    visaApprovalDays: 'Irish Student Visa (Stamp 2) cleared in 14 days',
    adviceForAspirants: [
      'Ireland has a 2-Year Third Level Graduate scheme that makes post-study work very straightforward.',
      'Book your student housing early in Dublin as demand is high.'
    ]
  }
];

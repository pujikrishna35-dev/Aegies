export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: 'Visa & Immigration' | 'Scholarships' | 'Admissions Strategy' | 'Destination Guides' | 'Careers & Salary';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  featured?: boolean;
}

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: 'uk-graduate-route-2026',
    slug: 'uk-graduate-route-2026-work-visa-guide',
    title: 'UK Graduate Route 2026: The Complete Post-Study Work Visa Guide',
    excerpt: 'Everything Indian students need to know about the 2-year post-study work visa in the UK, eligibility rules, application steps, and high-growth job sectors in London and Manchester.',
    category: 'Visa & Immigration',
    author: {
      name: 'V. S. Chaitanya',
      role: 'Director of Visa Compliance',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
    },
    publishedAt: 'February 12, 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop',
    tags: ['UK Education', 'Graduate Route', 'Tier 4 Visa', 'Post-Study Work', 'Job Search'],
    featured: true,
    content: [
      'The United Kingdom continues to be one of the most attractive higher education hubs for international students, thanks in large part to the Graduate Route visa. This unsponsored work visa allows international graduates who have successfully completed an undergraduate or postgraduate degree at a recognized UK higher education provider to stay and work in the UK for at least two years (three years for doctoral graduates).',
      'Unlike employer-sponsored work routes (such as the Skilled Worker Visa), the Graduate Route requires no minimum salary threshold and does not require you to have secured a job offer prior to applying. You are free to work in any sector, engage in self-employment, or undertake internships.',
      'Key Eligibility Benchmarks:',
      '• You must have successfully completed the course of study that was undertaken using your Student Visa.',
      '• Your university must formally notify the UK Home Office (UKVI) that you have completed your degree before you lodge your application.',
      '• You must be physically inside the United Kingdom at the time of submitting your Graduate Route application.',
      '• Application Fee & Healthcare Surcharge: The application fee is £822, plus the Immigration Health Surcharge (IHS) of £1,035 per year of the visa (£2,070 for 2 years).',
      'Transitioning to a Skilled Worker Visa: If you secure employment with an employer licensed to sponsor international workers, you can switch from the Graduate Route into the Skilled Worker route at any point during your two-year stay.'
    ]
  },
  {
    id: 'us-stem-opt-extension',
    slug: 'us-stem-opt-3-year-work-authorization-guide',
    title: 'How the 3-Year STEM OPT Extension Works in the United States',
    excerpt: 'Detailed breakdown of the 12-month standard OPT plus 24-month STEM extension, E-Verify employer requirements, Form I-983 training plans, and the H-1B lottery timeline.',
    category: 'Careers & Salary',
    author: {
      name: 'Radhika Sharma',
      role: 'Head of Global Admissions',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
    },
    publishedAt: 'January 28, 2026',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1000&auto=format&fit=crop',
    tags: ['USA MS', 'STEM OPT', 'F-1 Visa', 'Silicon Valley', 'H-1B Lottery'],
    featured: true,
    content: [
      'For Indian students pursuing Master of Science (MS) programs in the United States, STEM designation is the single most important factor determining return on investment. While standard degrees allow for 12 months of Optional Practical Training (OPT), graduating from a Department of Homeland Security (DHS) approved STEM degree unlocks an additional 24-month extension, totaling 36 full months of legal work authorization.',
      'Why 3 Years Changes the Game:',
      'Having 36 months of employment eligibility allows students multiple entries into the annual H-1B non-immigrant specialty occupation lottery (typically 3 chances). This dramatically increases the mathematical probability of winning H-1B selection and securing long-term US residency.',
      'Essential Requirements for the 24-Month STEM Extension:',
      '• Your degree CIP code on page 1 of your Form I-20 must correspond with an approved DHS STEM Designated Degree Program.',
      '• Your employer must be enrolled in the federal E-Verify verification system.',
      '• You and your employer must collaboratively draft and submit Form I-983 (Mentoring and Training Plan for STEM OPT Students).',
      '• You must apply within 90 days before your initial 12-month post-completion OPT expires.'
    ]
  },
  {
    id: 'german-aps-blocked-account',
    slug: 'germany-study-guide-aps-certificate-blocked-account',
    title: 'Studying in Germany 2026: APS Certificate & Sperrkonto Explained',
    excerpt: 'Step-by-step roadmap for Indian applicants to clear the mandatory Akademische Prüfstelle (APS) verification and set up their €11,208 Blocked Account for zero-tuition German universities.',
    category: 'Destination Guides',
    author: {
      name: 'Dr. K. S. Rao',
      role: 'Founder & Managing Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
    },
    publishedAt: 'January 15, 2026',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1000&auto=format&fit=crop',
    tags: ['Germany', 'APS India', 'Blocked Account', 'TUM', 'Zero Tuition'],
    featured: false,
    content: [
      'Germany remains Europe’s most economical destination for engineering, informatics, and management studies because public universities in 15 out of 16 German states charge zero tuition fees to domestic and international students alike. However, the German application and visa process is strictly regimented.',
      'What is the APS Certificate (Akademische Prüfstelle)?',
      'Introduced by the German Academic Exchange Service (DAAD) and the German Embassy in New Delhi, the APS certificate verifies the authenticity of Indian educational credentials before a student can apply for German university admissions or a German National Student Visa. Students must submit notarized mark sheets, professor contacts, and complete Digilocker verification.',
      'The German Blocked Account (Sperrkonto):',
      'To fulfill the visa requirement for financial maintenance, students must deposit €11,208 into a recognized German blocked account provider (such as Coracle or Expatrio). Once in Germany, the bank releases €934 per month into the student’s local checking account to cover rent, food, and student health insurance.'
    ]
  },
  {
    id: 'chevening-essay-tips',
    slug: 'how-to-write-a-winning-chevening-leadership-essay',
    title: 'How to Write a Winning Chevening Leadership Essay',
    excerpt: 'Deconstruct the four 500-word Chevening scholarship essays: Leadership & Influence, Relationship-Building & Networking, Studying in the UK, and Long-Term Career Plans.',
    category: 'Scholarships',
    author: {
      name: 'Radhika Sharma',
      role: 'Head of Global Admissions',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
    },
    publishedAt: 'December 20, 2025',
    readTime: '9 min read',
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
    tags: ['Chevening', 'UK Scholarships', 'SOP Writing', 'Leadership Essays'],
    featured: false,
    content: [
      'The Chevening Scholarship is the UK government’s flagship global award, covering 100% of university tuition, return airfares, and monthly living allowances. With tens of thousands of applicants vying for roughly 1,500 awards worldwide, the four 500-word essays are the ultimate deciding factor.',
      'The 4 Critical Essay Prompts:',
      '1. Leadership and Influence: Explain how you lead teams and influence positive change. Use the STAR methodology (Situation, Task, Action, Result) with quantified impacts.',
      '2. Networking: Detail how you build and maintain professional relationships, and how you will leverage the global Chevening alumni network.',
      '3. Studying in the UK: Explain why you picked your 3 specific master’s programs and how the UK academic environment uniquely supports your goals.',
      '4. Career Plan: Present a realistic, chronologically structured 2-year, 5-year, and 10-year career blueprint showing how you will give back to your home country upon graduation.'
    ]
  },
  {
    id: 'ireland-silicon-docks',
    slug: 'why-ireland-is-the-top-destination-for-tech-and-fintech',
    title: 'Why Ireland is the #1 Destination for Computer Science & Data Analytics',
    excerpt: 'Explore Dublin’s Silicon Docks ecosystem, European headquarters of Google, Meta, and Pfizer, and the generous 2-Year Stamp 1G post-study work visa for Indian graduates.',
    category: 'Destination Guides',
    author: {
      name: 'V. S. Chaitanya',
      role: 'Director of Visa Compliance',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
    },
    publishedAt: 'November 18, 2025',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1000&auto=format&fit=crop',
    tags: ['Ireland', 'Trinity Dublin', 'Silicon Docks', 'Stamp 1G', 'Data Science'],
    featured: false,
    content: [
      'Ireland has quietly established itself as the Silicon Valley of Europe. As the only English-speaking member nation in the Eurozone, Ireland offers international students a direct bridge into the global tech, life sciences, and financial technology industries.',
      'The Silicon Docks Phenomenon: Dublin is home to the European headquarters of Google, Meta, Microsoft, LinkedIn, Amazon, and TikTok, alongside global pharmaceutical giants like Pfizer and Johnson & Johnson. Universities like Trinity College Dublin, University College Dublin (UCD), and Dublin City University (DCU) maintain direct talent pipelines into these enterprises.',
      'The 2-Year Stamp 1G Advantage: Master’s graduates from recognized Irish institutions automatically receive a 24-month Third Level Graduate Scheme visa allowing full-time employment without requiring company sponsorship.'
    ]
  }
];

export const BLOG_CATEGORIES = [
  'All Articles',
  'Visa & Immigration',
  'Scholarships',
  'Admissions Strategy',
  'Destination Guides',
  'Careers & Salary'
];

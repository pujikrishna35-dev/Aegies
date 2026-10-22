
export interface GenuineReview {
  id: string;
  reviewerName: string;
  reviewText: string;
  shortQuote: string;
  rating: number;
  reviewDate: string;
  sourcePlatform: string;
  sourceReviewUrl: string;
  verifiedForPublication: boolean;
  avatarText: string;
  avatarUrl?: string;
  tagline: string;
  location: string;
  storySlug: string;
}

export const GENUINE_REVIEWS: GenuineReview[] = [
  {
    id: 'review-thota-sai-kumar-reddy',
    reviewerName: 'THOTA SAI KUMAR REDDY',
    reviewText: 'I had an excellent experience with Aegis Consultancy. The entire process was handled professionally and smoothly from start to finish. The team was always supportive, responsive, and guided me clearly at every step. A special thanks to Siva sir and Gopal sir for their outstanding support and dedication. They were extremely knowledgeable, patient, and always available to answer my questions. Their guidance made the whole process much easier and stress-free. I truly appreciate their commitment and effort in helping me. I highly recommend Aegis Consultancy to anyone looking for reliable and trustworthy guidance. Overall, it was a great experience and I am very satisfied with their service.',
    shortQuote: 'The entire process was handled professionally and smoothly from start to finish. A special thanks to Siva sir and Gopal sir for their outstanding support and dedication.',
    rating: 5,
    reviewDate: 'Verified Review',
    sourcePlatform: 'Google Review / Verified Client',
    sourceReviewUrl: 'https://aegisoverseas.com',
    verifiedForPublication: true,
    avatarText: 'TS',
    avatarUrl: '/images/reviews/thota-sai-kumar-reddy.webp',
    tagline: 'Admissions & Visa Support • Guided by Siva Sir & Gopal Sir',
    location: 'Nellore',
    storySlug: 'thota-sai-kumar-reddy'
  },
  {
    id: 'review-deverapalli-kushi',
    reviewerName: 'Deverapalli Kushi',
    reviewText: 'I had an excellent experience with Aegis Overseas Education services while planning my higher studies for a master’s program in the UK. From the very beginning, their team was incredibly professional, supportive, and thorough in guiding me through every step of the process. They helped me shortlist the right universities based on my academic profile and career goals, provided clear advice on required documents, and ensured my application process was smooth and stress-free. They also assisted me with drafting my statement of purpose, preparing for interviews, and understanding visa requirements. They were always available to answer my questions, no matter how small. Their expertise in dealing with UK universities and their updated knowledge of the admission process were truly commendable. Thanks to their efforts, I was able to secure admission to one of my dream universities, and they even guided me with post-admission formalities, including accommodation and travel arrangements. I would highly recommend Aegis Overseas Education services to anyone planning to pursue their studies abroad. They take care of everything, allowing you to focus on your goals with confidence! And My Heart full Thanks to Gopal Reddy sir . I wanted to take a moment to express my Gratitude for the support you provided me during the whole process of my abroad studies.',
    shortQuote: 'Thanks to their efforts, I secured admission to one of my dream UK universities. Heartfelt thanks to Gopal Reddy sir for all the support throughout my journey!',
    rating: 5,
    reviewDate: 'Verified Review',
    sourcePlatform: 'Google Review / Verified Client',
    sourceReviewUrl: 'https://aegisoverseas.com',
    verifiedForPublication: true,
    avatarText: 'DK',
    avatarUrl: '/images/reviews/deverapalli-kushi.webp',
    tagline: 'UK Master\'s Program • University Shortlisting & Visa Success',
    location: 'Nellore',
    storySlug: 'deverapalli-kushi'
  },
  {
    id: 'review-jaswanth-kumar-nallu',
    reviewerName: 'Jaswanth kumar Nallu',
    reviewText: 'I am extremely happy and grateful to Aegis Overseas Education services for their constant support and guidance throughout my visa process. From the very beginning, their team was professional, knowledgeable, and always available to answer my questions with patience and clarity. They helped me at every stage — from choosing the right course and university to documentation, application, interview preparation, and finally, visa approval. My sincere thanks to Gopal sir for his constant support and guidance until I receive my VISA. A special thanks to Shiva and Surendra for being so approachable and supportive. Their expertise and dedication truly made the difference. I would highly recommend Aegis Overseas Education services to anyone planning to study or move abroad. Their service is reliable, transparent, and genuinely focused on student success. Thank you once again for helping me turn my dream into reality!',
    shortQuote: 'My sincere thanks to Gopal sir for his constant support and guidance until I received my VISA. Special thanks to Shiva and Surendra for being so approachable.',
    rating: 5,
    reviewDate: 'Verified Review',
    sourcePlatform: 'Google Review / Verified Client',
    sourceReviewUrl: 'https://aegisoverseas.com',
    verifiedForPublication: true,
    avatarText: 'JN',
    avatarUrl: '/images/reviews/jaswanth-kumar-nallu.webp',
    tagline: 'Visa Approval & Interview Prep Success',
    location: 'Nellore',
    storySlug: 'jaswanth-kumar-nallu'
  },
  {
    id: 'review-reema-panthalukaran',
    reviewerName: 'Reema Panthalukaran',
    reviewText: 'I had an extraordinary experience with Aegis Consultancy for my higher studies . They were professional and always willing to help. They attentively reviewed my documentation and provided helpful suggestions. The mock interviews they conducted were especially helpful and made me feel confident for the real interview. Their customer service was excellent. They answered all my questions quickly and kept me informed throughout the process. Thanks to Aegis Consultancy, I received my US visa without any complications. I definitely recommend them to anyone who needs assistance with their higher education process. They made the entire procedure simple and stress-free. Thank you once again Aegis Consultancy & team, for your outstanding support!',
    shortQuote: 'The mock interviews they conducted made me feel confident. Thanks to Aegis Consultancy, I received my US visa without any complications!',
    rating: 5,
    reviewDate: 'Verified Review',
    sourcePlatform: 'Google Review / Verified Client',
    sourceReviewUrl: 'https://aegisoverseas.com',
    verifiedForPublication: true,
    avatarText: 'RP',
    avatarUrl: '/images/reviews/reema-panthalukaran.webp',
    tagline: 'US Visa Success • Mock Interviews & Documentation',
    location: 'Nellore',
    storySlug: 'reema-panthalukaran'
  },
  {
    id: 'review-rohith-reddy',
    reviewerName: 'Rohith Reddy',
    reviewText: 'Ageis consultancy made my Australian student visa process simple and hassle-free. Their guidance and constant support were amazing. And I received my visa within three days of applying.',
    shortQuote: 'Aegis consultancy made my Australian student visa process simple and hassle-free. I received my visa within three days of applying!',
    rating: 5,
    reviewDate: 'Verified Review',
    sourcePlatform: 'Google Review / Verified Client',
    sourceReviewUrl: 'https://aegisoverseas.com',
    verifiedForPublication: true,
    avatarText: 'RR',
    avatarUrl: '/images/reviews/rohith-reddy.webp',
    tagline: 'Australian Student Visa in 3 Days',
    location: 'Nellore',
    storySlug: 'rohith-reddy'
  },
  {
    id: 'review-manu-madhala',
    reviewerName: 'Manu Madhala',
    reviewText: 'I had a extraordinary experience with ageis overseas education for my higher education. From day one, their team expertly handled my entire process, from university selection and interview preparation to visa application. And I had very good experience with siva sir ,very supportive and friendly, and their coordinations and expertise ensured a seamless experience. I\'m thrilled to have secured my UK visa, and I attribute my success entirely to Aegis. If you\'re planning to study abroad, look no further – i wholeheartedly recommend [Aegis Overseas Education Services] Look no further for trusted advice and successful outcomes.',
    shortQuote: 'From day one, their team expertly handled my entire process, from university selection to visa application. I\'m thrilled to have secured my UK visa!',
    rating: 5,
    reviewDate: 'Verified Review',
    sourcePlatform: 'Google Review / Verified Client',
    sourceReviewUrl: 'https://aegisoverseas.com',
    verifiedForPublication: true,
    avatarText: 'MM',
    avatarUrl: '/images/reviews/manu-madhala.webp',
    tagline: 'UK Visa Secured • University Selection & Interview Prep',
    location: 'Nellore',
    storySlug: 'manu-madhala'
  },
  {
    id: 'review-mohammed-husamuddin-ahmed',
    reviewerName: 'MOHAMMED HUSAMUDDIN AHMED',
    reviewText: 'My experience at Aegis Overseas Education Services was outstanding! The expert faculty provided invaluable guidance, making complex processes easy to understand. Their quick service ensured all my queries were addressed promptly, and the booking process was seamless. With their highly experienced team, I felt confident every step of the way. Highly recommend!',
    shortQuote: 'The expert faculty provided invaluable guidance, making complex processes easy to understand. Their quick service ensured all my queries were addressed promptly.',
    rating: 5,
    reviewDate: 'Verified Review',
    sourcePlatform: 'Google Review / Verified Client',
    sourceReviewUrl: 'https://aegisoverseas.com',
    verifiedForPublication: true,
    avatarText: 'MH',
    avatarUrl: '/images/reviews/mohammed-husamuddin-ahmed.webp',
    tagline: 'Expert Faculty Guidance & Query Resolution',
    location: 'Nellore',
    storySlug: 'mohammed-husamuddin-ahmed'
  },
  {
    id: 'review-varshitha-rao',
    reviewerName: 'Varshitha Rao',
    reviewText: 'Choosing Aegis Overseas for my study abroad journey was one of the best decisions I\'ve ever made. The counsellors were incredibly knowledgeable and provided personalized guidance that made the entire process smooth and stress-free. They helped me with university selection, application processes, and even visa preparation and documentation. I highly recommend Aegis Overseas to anyone looking to study abroad.',
    shortQuote: 'Choosing Aegis Overseas was one of the best decisions I\'ve ever made. The counsellors provided personalized guidance that made the entire process smooth and stress-free.',
    rating: 5,
    reviewDate: 'Verified Review',
    sourcePlatform: 'Google Review / Verified Client',
    sourceReviewUrl: 'https://aegisoverseas.com',
    verifiedForPublication: true,
    avatarText: 'VR',
    avatarUrl: '/images/reviews/varshitha-rao.webp',
    tagline: 'Personalized Counseling & Study Abroad Success',
    location: 'Nellore',
    storySlug: 'varshitha-rao'
  },
  {
    id: 'review-krishna-vijay',
    reviewerName: 'Krishna Vijay',
    reviewText: 'I had a very good experience with ‘Aegis overseas education services’. Even though it took me one year to get my UK visa because of the mistakes I have done, they have been with very much patience till the end. They have always encouraged me irrespective of my mistakes. Very clear explanation in every aspect like documents required, pre-offer process, post-offer process and visa service. All the staff are very friendly. Especially Gopal reddy sir, Krishna sir and Siva sir have been with me throughout my journey. I would recommend this consultancy for the highest education services very strongly.',
    shortQuote: 'Even though it took one year to get my UK visa because of my mistakes, they had so much patience. Gopal reddy sir, Krishna sir and Siva sir stood by me throughout!',
    rating: 5,
    reviewDate: 'Verified Review',
    sourcePlatform: 'Google Review / Verified Client',
    sourceReviewUrl: 'https://aegisoverseas.com',
    verifiedForPublication: true,
    avatarText: 'KV',
    avatarUrl: '/images/reviews/krishna-vijay.webp',
    tagline: 'UK Visa Approved • Patient End-to-End Guidance',
    location: 'Nellore',
    storySlug: 'krishna-vijay'
  },
  {
    id: 'review-pawan-royalz',
    reviewerName: 'Pawan Royalz',
    reviewText: 'I would like to share the experience I had with aegis overseas. Right from the day one I approached them, my process was completely taken over by the team with timely coordination starting from University selection, interview guidance and visa process. And now I came out with flying colours with UK visa in my hand. Moving to UK to pursue my masters. My sincere thanks to Gopal Reddy sir(MD) who have been with me throughout the process. I would like to recommend AEGIS OVERSEAS EDUCATION SERVICES to anyone who are planning to study abroad. Thanks a ton.',
    shortQuote: 'Came out with flying colours with UK visa in my hand! Moving to UK to pursue my masters. Sincere thanks to Gopal Reddy sir (MD) who was with me throughout the process.',
    rating: 5,
    reviewDate: 'Verified Review',
    sourcePlatform: 'Google Review / Verified Client',
    sourceReviewUrl: 'https://aegisoverseas.com',
    verifiedForPublication: true,
    avatarText: 'PR',
    avatarUrl: '/images/reviews/pawan-royalz.webp',
    tagline: 'UK Masters Admit • Full Visa & University Assistance',
    location: 'Nellore',
    storySlug: 'pawan-royalz'
  },
  {
    id: 'review-rishita-reddy',
    reviewerName: 'Rishita Reddy',
    reviewText: 'I am very much satisfied with the service I\'ve received at Aegis Overseas Education services starting from the day I\'ve approached them for my student VISA process. Most importantly, I would like to thank Mr. Gopal reddy sir (MS-UK), for being very patient and guiding me through each and every step. They are helpful and friendly. I strongly recommend Aegis Overseas Education services abroad studies consultancy to those who prefer smooth VISA process.',
    shortQuote: 'I am very much satisfied starting from the day I approached them for my student VISA process. Most importantly, I would like to thank Mr. Gopal reddy sir (MS-UK) for being patient and guiding me.',
    rating: 5,
    reviewDate: 'Verified Review',
    sourcePlatform: 'Google Review / Verified Client',
    sourceReviewUrl: 'https://aegisoverseas.com',
    verifiedForPublication: true,
    avatarText: 'RR',
    avatarUrl: '/images/reviews/rishita-reddy.webp',
    tagline: 'Smooth Student VISA Process • Guided by Gopal Reddy Sir',
    location: 'Nellore',
    storySlug: 'rishita-reddy'
  },
  {
    id: 'review-harsha-vaka',
    reviewerName: 'Harsha Vaka',
    reviewText: 'I had the privilege of working with aegis overseas for my graduation process in the UK, and I cannot express enough gratitude for their exceptional guidance and support. From their extensive knowledge of the UK education system to their proactive approach and personalized advice, aegis overseas ensured that I was well-informed, prepared, and confident throughout the entire journey. Their professionalism, responsiveness, and genuine care for my success made the graduation process smooth and memorable. I highly recommend aegis overseas to anyone seeking expert assistance for their educational endeavors.',
    shortQuote: 'Their extensive knowledge of the UK education system, proactive approach, and genuine care made my UK graduation process smooth and memorable.',
    rating: 5,
    reviewDate: 'Verified Review',
    sourcePlatform: 'Google Review / Verified Client',
    sourceReviewUrl: 'https://aegisoverseas.com',
    verifiedForPublication: true,
    avatarText: 'HV',
    avatarUrl: '/images/reviews/harsha-vaka.webp',
    tagline: 'UK Graduation Process • Proactive & Personalized Advice',
    location: 'Nellore',
    storySlug: 'harsha-vaka'
  }
];

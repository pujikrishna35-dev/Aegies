import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ShieldCheck,
  Award,
  Users,
  GraduationCap,
  CheckCircle2,
  Globe2,
  Sparkles,
  ArrowRight,
  HeartHandshake,
  Compass,
  Scale,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Target,
  User,
  Briefcase,
  TrendingUp
} from 'lucide-react';
import { Modal } from '../components/ui/Modal';
import { ConsultationForm } from '../components/forms/ConsultationForm';
import { MentorModal, type LeaderData } from '../components/ui/MentorModal';

export const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<LeaderData | null>(null);

  const stats = [
    { value: '25+', label: 'Years of Excellence', sub: 'Guiding global aspirants since 2001' },
    { value: '15,000+', label: 'Students Placed', sub: 'Across top global universities' },
    { value: '100%', label: 'Visa Approval Rate', sub: 'Consistent across Tier-1 nations' },
    { value: '$14.5M+', label: 'Scholarships Won', sub: 'In merit and government grants' }
  ];

  const pillars = [
    {
      icon: Scale,
      title: 'Uncompromising Ethics',
      desc: 'We operate with complete honesty. We never promote sub-standard institutions for commissions, and we strictly enforce zero-tolerance against fraudulent documentation.'
    },
    {
      icon: Compass,
      title: 'Student-First Strategy',
      desc: 'Every university shortlist is scientific, personalized to your exact GPA, budget, research interests, and post-study career goals.'
    },
    {
      icon: ShieldCheck,
      title: 'Accredited Pedagogy',
      desc: 'Our counselors hold certifications from the British Council, IDP, ETS, and ICEF, ensuring 100% compliance with changing international visa guidelines.'
    },
    {
      icon: HeartHandshake,
      title: '360° End-to-End Support',
      desc: 'We do not stop at university admits. We manage your education loan sanction, visa file defense, pre-departure briefings, and airport accommodations.'
    }
  ];

  const milestones = [
    {
      year: '2001',
      title: 'Founding Aegis Overseas',
      desc: 'Started with a mission to bring transparent, ethical overseas education guidance to students in South India.'
    },
    {
      year: '2013',
      title: 'Global University Partnerships',
      desc: 'Expanded direct official representation with 150+ leading universities across the UK, USA, and Australia.'
    },
    {
      year: '2018',
      title: 'Pan-India Footprint',
      desc: 'Established flagship counseling branches in Hyderabad, Bangalore, and Vijayawada with specialized IELTS & GRE coaching labs.'
    },
    {
      year: '2022',
      title: 'Europe & STEM Expansion',
      desc: 'Pioneered zero-tuition German public university pathways and 3-Year STEM OPT career counseling for North America.'
    },
    {
      year: '2026',
      title: '25+ Years & $14.5M+ Scholarships',
      desc: 'Celebrating 10,000+ triumphant alumni thriving as software engineers, data scientists, healthcare specialists, and entrepreneurs worldwide.'
    }
  ];

  const leadership: LeaderData[] = [
    {
      id: 'haswanth',
      name: 'Haswanth Reddy Battepati',
      role: 'Founder, Chairman & Director',
      bio: '12+ Years of Experience | Strategic vision, organisational development and student-focused international education.',
      image: '/images/team/haswanth.jpg',
      highlights: [
        { icon: Briefcase, val: '12+ Years', label: 'of Experience' },
        { icon: GraduationCap, val: 'UK Postgrad', label: 'United Kingdom' },
        { icon: Users, val: 'Leadership', label: '& Strategy' }
      ],
      focusAreas: [
        'Strategic vision',
        'Organisational development',
        'Student-centred services',
        'International education opportunities'
      ],
      sections: [
        {
          icon: User,
          title: 'About',
          content: [
            'Haswanth Reddy Battepati is the Founder, Chairman and Director of Aegis Overseas Education Services Pvt Ltd. Inspired by his own international education journey and postgraduate studies in the United Kingdom, he established Aegis with a vision of helping students explore global education opportunities with greater confidence, clarity and direction.'
          ]
        },
        {
          icon: Compass,
          title: 'Strategic Vision & Guidance',
          content: [
            "As Chairman and Director, he provides strategic leadership and guides the company's long-term vision, development and business direction. His international study experience informs his understanding of the challenges students face when choosing institutions, preparing applications and planning for education abroad."
          ]
        },
        {
          icon: HeartHandshake,
          title: 'Student-Centred Leadership',
          content: [
            'Under his leadership, Aegis strives to build meaningful relationships with students, families and educational institutions while maintaining a student-focused approach to counselling and overseas education services.'
          ]
        }
      ],
      quote: '“Guiding students to explore global education opportunities with greater confidence, clarity and direction.”'
    },
    {
      id: 'bhavana',
      name: 'Bhavana Sri Kurapati',
      role: 'Director — Marketing & University Relations',
      bio: '10+ Years of Experience | Strategic marketing, institutional partnerships, brand development and student outreach.',
      image: '/images/team/bhavana.jpg',
      highlights: [
        { icon: Briefcase, val: '10+ Years', label: 'of Experience' },
        { icon: GraduationCap, val: 'B.Tech', label: 'Technology' },
        { icon: Globe2, val: 'Marketing', label: '& Outreach' }
      ],
      focusAreas: [
        'Marketing strategy',
        'University relations',
        'Institutional engagement',
        'Student outreach'
      ],
      sections: [
        {
          icon: User,
          title: 'About',
          content: [
            'Bhavana Sri Kurapati holds a Bachelor of Technology degree and serves as Director of Marketing and University Relations at Aegis Overseas Education Services Pvt Ltd.'
          ]
        },
        {
          icon: Building2,
          title: 'Institutional Engagement & Market Presence',
          content: [
            "She plays an important role in shaping the company's market presence, strengthening communication strategies and developing relationships with educational institutions. Her responsibilities connect Aegis's outreach and marketing initiatives with its broader objective of making overseas education opportunities more accessible to prospective students."
          ]
        },
        {
          icon: Sparkles,
          title: 'Brand Development & Student Outreach',
          content: [
            'Through her leadership in marketing and university relations, she supports institutional engagement, brand development and the communication of relevant study opportunities to students and families.'
          ]
        },
        {
          icon: Users,
          title: 'Strategic Network & Communication',
          content: [
            "Her role contributes to building the company's professional network and maintaining effective communication between Aegis, its prospective students and its educational partners."
          ]
        }
      ],
      quote: '“Connecting outreach and institutional engagement to make global education accessible and transparent for every student.”'
    },
    {
      id: 'gopal',
      name: 'Gopal Reddy Somala',
      role: 'Founder & Head of Aegis',
      bio: '25 Years of Experience | Global University Partnerships | Leadership & Mentorship. MS-qualified in the United Kingdom; guides university collaborations, mentors the team and supports student counselling.',
      image: '/images/team/gopal-reddy.png',
      highlights: [
        { icon: Briefcase, val: '25 Years', label: 'of Experience' },
        { icon: GraduationCap, val: 'MS Qualified', label: 'United Kingdom' },
        { icon: Users, val: 'Leadership', label: '& Mentorship' }
      ],
      focusAreas: [
        'Global university visits',
        'Strategic partnerships',
        'University collaboration management',
        'Leadership and mentorship',
        'Organisational development',
        'Student counselling'
      ],
      sections: [
        {
          icon: User,
          title: 'About',
          content: [
            'Gopal Reddy Somala is the founder and Head of Aegis Overseas Edu Services. With an MS qualification from the United Kingdom and 25 years of experience, he brings extensive professional knowledge, international perspective and strategic direction to the organisation.'
          ]
        },
        {
          icon: Building2,
          title: 'University Relations & Global Engagement',
          content: [
            'He plays a central role in developing and managing Aegis’s university collaborations. Through visits to universities across the globe and direct engagement with university representatives, he builds relationships, explores partnership opportunities and strengthens existing collaborations. His oversight supports ongoing communication and coordination between Aegis and its university partners.',
            'These international engagements deepen his understanding of academic programmes, admission expectations and campus environments, bringing practical insight to student counselling and course selection. He helps connect the organisation’s university relationships with its commitment to informed, responsible guidance for students pursuing education abroad.'
          ]
        },
        {
          icon: Users,
          title: 'Leadership & Team Development',
          content: [
            'As a senior leader, he mentors directors and staff, guides operational development and promotes a collaborative, accountable working environment. His approach combines strategic leadership with practical support, helping the team strengthen its capabilities and maintain a consistent focus on student needs.'
          ]
        },
        {
          icon: TrendingUp,
          title: 'Impact & Vision',
          content: [
            'His leadership supports Aegis’s growth through strong university partnerships, team development and student-focused services.'
          ]
        }
      ],
      quote: '“Building global opportunities for students through strong university relationships and a supportive team.”'
    },
    {
      id: 'syamalamma',
      name: 'B. Syamalamma',
      role: 'Funding & Financial Oversight',
      bio: '45 Years of Financial Experience | 21 Years with Aegis. Supports funding management, financial planning and responsible resource management.',
      image: '/images/team/syamalamma.jpg',
      highlights: [
        { icon: Briefcase, val: '45 Years', label: 'of Experience' },
        { icon: Building2, val: '21 Years', label: 'with Aegis' },
        { icon: ShieldCheck, val: 'Financial', label: 'Stewardship' }
      ],
      focusAreas: [
        'Financial oversight',
        'Funding management',
        'Financial planning',
        'Long-term organisational sustainability'
      ],
      sections: [
        {
          icon: User,
          title: 'About',
          content: [
            "B. Syamalamma brings 45 years of financial experience and has overseen Aegis's funding and financial matters for the past 21 years. Her long-standing involvement provides continuity, experience and financial oversight in support of the company's operations and development."
          ]
        },
        {
          icon: ShieldCheck,
          title: 'Financial Planning & Resource Management',
          content: [
            "Her responsibilities include overseeing funding-related matters, supporting financial planning and helping ensure that the organisation's financial resources are managed responsibly in line with its operational needs."
          ]
        },
        {
          icon: TrendingUp,
          title: 'Discipline & Organisational Stability',
          content: [
            'With decades of financial experience and a sustained association with Aegis, she contributes an important perspective on financial discipline, resource management and long-term organisational stability.'
          ]
        },
        {
          icon: Compass,
          title: 'Financial Foundation',
          content: [
            'Her contribution supports the financial foundation on which Aegis continues to develop its services and pursue its business objectives.'
          ]
        }
      ],
      quote: '“Responsible resource management and enduring financial discipline build the foundation for lifelong student trust.”'
    }
  ];

  const offices = [
    {
      city: 'Hyderabad ',
      address: 'Hitec City, Madhapur, Hyderabad, Telangana',
      phone: '+91 8500722284',
      email: 'info@aegisoverseas.com'
    },
    {
      city: 'Nellore-1 (Ramalinga Puram)',
      address: 'Srivari Plaza, Circle, Ramalinga Puram, Nellore, Andhra Pradesh 524003, India',
      phone: '+91 8500722284',
      email: 'info@aegisoverseas.com'
    },
    {
      city: 'Nellore-2 (Magunta Layout)',
      address: 'Near viswasai school, Central Avenue, Dargamitta, Magunta Layout, Nellore, Andhra Pradesh 524003, India',
      phone: '+91 8500722284',
      email: 'info@aegisoverseas.com'
    },
    {
      city: 'Tirupati',
      address: 'GSF, Mr.palli circle, road, near lenskart, fashion zone, Avilali, Andhra Pradesh 517502, India',
      phone: '+91 8500722284',
      email: 'info@aegisoverseas.com'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#C5A059]">About Us</span>
        </div>

        {/* Hero Section */}
        <div className="relative bg-[#071228] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl mb-12 border border-[#C5A059]/20">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-10 bottom-0 opacity-10 hidden lg:block pointer-events-none">
            <Building2 className="w-80 h-80 text-[#C5A059]" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/30 text-[#E6C687] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Trust • Transparency • Student Success
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              About Aegis Overseas
            </h1>

            <p className="mt-3 text-lg sm:text-xl text-[#E6C687] font-medium">
              25+ years of ethical, student-first overseas admission mentoring.
            </p>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded with the conviction that every aspiring student deserves unbiased, expert, and transparent guidance, Aegis Overseas Education Services has grown into one of South India's premier international education consultancies. We connect bright minds with world-class academic institutions in the UK, USA, Canada, Australia, Germany, Ireland, and Europe.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-[#C5A059] hover:bg-[#E6C687] text-[#071228] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/services"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/15"
              >
                Explore 360° Services
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-neutral-200/80 p-6 shadow-xs hover:shadow-md transition-shadow text-center"
            >
              <p className="text-3xl sm:text-4xl font-sans font-extrabold text-[#071228] text-amber-700 tracking-tight">
                {stat.value}
              </p>
              <h3 className="text-sm font-bold text-[#071228] mt-2">
                {stat.label}
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Mission & Vision Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-display font-bold text-[#071228] mb-3">Our Mission</h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                To empower students from all academic and economic backgrounds to achieve their highest global educational potential by providing completely transparent, personalized, and ethical counseling—eliminating misleading claims, inflated costs, and bureaucratic confusion.
              </p>
            </div>
            <ul className="mt-6 pt-6 border-t border-neutral-100 space-y-2 text-xs text-neutral-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero bias toward commercial institutional commissions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% verified application deadlines and admission requirements</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-display font-bold text-[#071228] mb-3">Our Vision</h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                To be India's most trusted international education mentorship ecosystem, recognized globally by university faculties, government bodies, and overseas alumni for exceptional student preparedness, integrity, and career-driven outcomes.
              </p>
            </div>
            <ul className="mt-6 pt-6 border-t border-neutral-100 space-y-2 text-xs text-neutral-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>5000+ active global university partnerships worldwide</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Alumni networks active in tech hubs from London to San Francisco</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 mb-16 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
              Our Core Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228]">
              The Four Pillars That Define Aegis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#071228] text-[#E6C687] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#071228] mb-2">{pillar.title}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestones Journey */}
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 mb-16 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228]">
              Over 25 Years of Milestones
            </h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-neutral-200 max-w-4xl mx-auto">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                <div className="md:w-1/2 pl-12 md:pl-0 md:text-right">
                  <div className={`bg-[#FAF7F0] p-6 rounded-2xl border border-[#E6C687]/40 shadow-xs ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}>
                    <span className="px-2.5 py-1 rounded-md bg-[#071228] text-[#E6C687] text-xs font-bold inline-block mb-2">
                      {m.year}
                    </span>
                    <h3 className="text-base font-bold text-[#071228] mb-1">{m.title}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#071228] border-4 border-white shadow-sm flex items-center justify-center text-[#E6C687] text-xs font-bold z-10">
                  •
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 mb-16 shadow-xs">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
              OUR MENTORS & LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#071228] tracking-tight">
              Leadership Built on Experience, Vision and Trust
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm mt-3 leading-relaxed">
              At Aegis Overseas Education Services Pvt Ltd, our leadership team brings together international education experience, entrepreneurial vision, strategic marketing, university relationships and decades of financial expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedLeader(leader)}
                className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden text-center flex flex-col justify-between h-full group hover:shadow-xl hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 shadow-xs cursor-pointer"
              >
                <div className="h-56 sm:h-60 w-full overflow-hidden bg-slate-100 shrink-0 relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                    <span className="text-[11px] font-bold text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                      Click to view profile
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-[#071228] leading-tight group-hover:text-amber-800 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-[11px] font-extrabold text-[#B45309] uppercase tracking-wider mt-1.5 leading-snug">
                      {leader.role}
                    </p>
                    <div className="w-8 h-0.5 bg-[#E5B842] mx-auto my-3 rounded-full" />
                    <p className="text-xs text-neutral-600 leading-relaxed line-clamp-4">
                      {leader.bio}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-center gap-1.5 text-xs font-bold text-[#C5A059] group-hover:text-amber-700 transition-colors">
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Shared Commitment */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#FAF7F0] border border-[#E6C687]/50 text-center max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
              Guiding Aspirations • Connecting Students to Global Opportunities
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-display text-[#071228] mb-2">
              One Team. A Shared Commitment to Student Success.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              The strength of Aegis lies in the complementary expertise of its leadership team: international education experience, strategic direction, marketing and university engagement, operational mentorship and financial oversight. Together, our leaders work towards creating a professional and supportive environment in which students and families can explore overseas education pathways with greater clarity and confidence.
            </p>
          </div>
        </div>

        {/* Office Network */}
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 mb-16 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
              Visit Us In Person
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228]">
              Our Counseling Centers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offices.map((off, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-700 shrink-0" />
                  <h3 className="text-base font-bold text-[#071228]">{off.city}</h3>
                </div>
                <p className="text-xs text-neutral-600 pl-7">{off.address}</p>
                <div className="pl-7 pt-2 border-t border-neutral-200 flex flex-wrap items-center gap-4 text-xs text-neutral-600">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    {off.phone}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                    {off.email}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#071228] via-[#0E1E38] to-[#071228] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border border-[#C5A059]/30">
          <div className="max-w-2xl mx-auto relative z-10">
            <GraduationCap className="w-12 h-12 text-[#E6C687] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              Ready to Start Your Study Abroad Journey?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-3 mb-6 leading-relaxed">
              Book a 1-on-1 counseling session with our senior advisors in Hyderabad, Bangalore, or online via video call.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C5A059] text-[#071228] font-bold text-sm hover:bg-[#E6C687] transition-all shadow-lg hover:scale-105"
            >
              Schedule Free 1-on-1 Session
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Mentor Detail Modal */}
      <MentorModal
        leader={selectedLeader}
        isOpen={!!selectedLeader}
        onClose={() => setSelectedLeader(null)}
      />

      {/* Consultation Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ConsultationForm
          initialNotes="About Us page - requesting counseling session"
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default About;

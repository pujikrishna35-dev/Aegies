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
  Target
} from 'lucide-react';
import { Modal } from '../components/ui/Modal';
import { ConsultationForm } from '../components/forms/ConsultationForm';

export const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { value: '15+', label: 'Years of Excellence', sub: 'Guiding global aspirants since 2008' },
    { value: '5,000+', label: 'Students Placed', sub: 'Across top global universities' },
    { value: '99.2%', label: 'Visa Approval Rate', sub: 'Consistent across Tier-1 nations' },
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
      year: '2008',
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
      title: '15+ Years & $14.5M+ Scholarships',
      desc: 'Celebrating 5,000+ triumphant alumni thriving as software engineers, data scientists, healthcare specialists, and entrepreneurs worldwide.'
    }
  ];

  const leadership = [
    {
      name: 'Dr. K. S. Rao',
      role: 'Founder & Managing Director',
      bio: 'Former university faculty and international education strategist with 22+ years of transatlantic academic advisory experience.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'Radhika Sharma',
      role: 'Head of Global Admissions',
      bio: 'Alumna of University of Warwick. Specializes in competitive Ivy League and Russell Group SOP framing and scholarship strategy.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'V. S. Chaitanya',
      role: 'Director of Visa Compliance & Finance',
      bio: 'Certified immigration legal expert who has personally vetted over 4,000 successful visa files across US, UK, Canada, and Schengen consulates.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop'
    }
  ];

  const offices = [
    {
      city: 'Hyderabad (Headquarters)',
      address: 'Level 4, Aegis Heights, Raj Bhavan Road, Somajiguda, Hyderabad, Telangana 500082',
      phone: '+91 91112 43210',
      email: 'hyderabad@aegisoverseas.com'
    },
    {
      city: 'Hyderabad (HITEC City)',
      address: 'Plot 18, Mindspace IT Corridor, Madhapur, Hyderabad, Telangana 500081',
      phone: '+91 91112 43211',
      email: 'hitec@aegisoverseas.com'
    },
    {
      city: 'Bangalore Hub',
      address: '80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka 560034',
      phone: '+91 91112 43212',
      email: 'bangalore@aegisoverseas.com'
    },
    {
      city: 'Vijayawada Branch',
      address: 'Door No. 40-1-52, MG Road, Near Benz Circle, Vijayawada, Andhra Pradesh 520010',
      phone: '+91 91112 43213',
      email: 'vijayawada@aegisoverseas.com'
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
              15+ years of ethical, student-first overseas admission mentoring.
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
              <p className="text-3xl sm:text-4xl font-display font-extrabold text-[#071228] text-amber-700">
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
                <span>850+ active global university partnerships worldwide</span>
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
              Over 15 Years of Milestones
            </h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-neutral-200 max-w-4xl mx-auto">
            {milestones.map((m, idx) => (
              <div 
                key={idx}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 pl-12 md:pl-0 md:text-right">
                  <div className={`bg-[#FAF7F0] p-6 rounded-2xl border border-[#E6C687]/40 shadow-xs ${
                    idx % 2 === 0 ? 'md:text-left' : 'md:text-right'
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
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
              Our Mentors
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228]">
              Meet Our Leadership
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm mt-2">
              Decades of combined academic counseling, high-commission liaison experience, and student advocacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, idx) => (
              <div 
                key={idx}
                className="bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden text-center group hover:shadow-lg transition-all"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#071228]">{leader.name}</h3>
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mt-0.5 mb-3">{leader.role}</p>
                  <p className="text-xs text-neutral-600 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
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

      {/* Modal */}
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

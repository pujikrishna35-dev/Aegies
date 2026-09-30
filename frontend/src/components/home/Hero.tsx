import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '@/components/ui/Modal';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import { ArrowRight, ShieldCheck, GraduationCap, Star } from 'lucide-react';

interface HeroProps {
  showAirplane?: boolean;
}

export const Hero: React.FC<HeroProps> = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const destinationPills = [
    {
      country: 'USA',
      flag: '/flags/usa.svg',
      path: '/destinations/usa',
      left: '55.5%',
      top: '67%',
      floatClass: 'animate-float-1'
    },
    {
      country: 'UK',
      flag: '/flags/uk.svg',
      path: '/destinations/uk',
      left: '57.0%',
      top: '51%',
      floatClass: 'animate-float-2'
    },
    {
      country: 'IRELAND',
      flag: '/flags/ireland.svg',
      path: '/destinations/ireland',
      left: '60.5%',
      top: '36%',
      floatClass: 'animate-float-3'
    },
    {
      country: 'CANADA',
      flag: '/flags/canada.svg',
      path: '/destinations/canada',
      left: '66.0%',
      top: '25%',
      floatClass: 'animate-float-4'
    },
    {
      country: 'GERMANY',
      flag: '/flags/germany.svg',
      path: '/destinations/germany',
      left: '74.5%',
      top: '23%',
      floatClass: 'animate-float-1'
    },
    {
      country: 'EUROPE',
      flag: '/flags/europe.svg',
      path: '/destinations/europe',
      left: '82.5%',
      top: '29%',
      floatClass: 'animate-float-2'
    },
    {
      country: 'AUSTRALIA',
      flag: '/flags/australia.svg',
      path: '/destinations/australia',
      left: '87.5%',
      top: '46%',
      floatClass: 'animate-float-3'
    },
    {
      country: 'NEW ZEALAND',
      flag: '/flags/new-zealand.svg',
      path: '/destinations/new-zealand',
      left: '86.0%',
      top: '64%',
      floatClass: 'animate-float-4'
    }
  ];

  return (
    <section className="relative bg-[#071228] text-white overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-24">
      {/* Background Graphic & Landmark Montage */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Skyline / Landmark Montage */}
        <img
          src="/images/hero/hero-panorama.png"
          alt="Aegis Overseas World Education"
          className="w-full h-full object-cover object-center opacity-95"
          style={{ objectPosition: 'center center' }}
        />
        {/* Soft, harmonious atmospheric gradient across left to preserve landmark brilliance */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071228]/85 via-[#071228]/40 to-transparent w-full md:w-3/5" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071228] to-transparent" />
      </div>

      {/* Arched Floating Destination Pills around the Student & Skyline */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-20">
        {destinationPills.map((dest) => (
          <div
            key={dest.country}
            className={`absolute pointer-events-auto -translate-x-1/2 -translate-y-1/2 ${dest.floatClass}`}
            style={{ left: dest.left, top: dest.top }}
          >
            <Link
              to={dest.path}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-white/90 backdrop-blur-sm group whitespace-nowrap hover:border-[#D4AF37]"
            >
              <img
                src={dest.flag}
                alt={dest.country}
                className="w-5 h-5 aspect-square rounded-full object-cover shadow-xs ring-1 ring-black/10 shrink-0"
              />
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase text-slate-900 group-hover:text-amber-700">
                {dest.country}
              </span>
            </Link>
          </div>
        ))}
      </div>

      {/* Main Content Area - Clean Background Presentation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-xl lg:max-w-2xl py-6 sm:py-8 lg:py-12">
          {/* Handwritten Subtitle */}
          <div className="mb-2 sm:mb-3">
            <span className="font-script text-2xl sm:text-3xl lg:text-[34px] text-[#F5DE88] font-bold tracking-wide drop-shadow-md inline-block">
              A Brighter Global Tomorrow
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-display font-black tracking-tight leading-[1.08] text-white drop-shadow-md">
            YOUR FUTURE <br />
            HAS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#F5DE88] to-[#D4AF37] drop-shadow-sm font-black">
              NO BORDERS.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[15px] text-slate-200/95 leading-relaxed font-normal max-w-xl drop-shadow-sm">
            Turn your ambition into an international degree with personalized counselling, 850+ top universities, and full end-to-end guidance from application to visa.
          </p>

          {/* 3 Value Metrics - Unboxed inline with background */}
          <div className="flex items-center gap-6 sm:gap-8 my-6 sm:my-7">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <div className="text-sm sm:text-base font-black text-white leading-none">98%</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight mt-1">Visa Success</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <GraduationCap className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <div className="text-sm sm:text-base font-black text-white leading-none">850+</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight mt-1">Universities</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Star className="w-6 h-6 text-purple-400 fill-purple-400 shrink-0" />
              <div>
                <div className="text-sm sm:text-base font-black text-white leading-none">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight mt-1">Free Support</div>
              </div>
            </div>
          </div>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              to="/university-finder"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#F5DE88] via-[#E5B842] to-[#C99222] text-[#071228] shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:brightness-105 hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              <span>START YOUR JOURNEY</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <button
              onClick={() => setConsultationOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-[#1E2E48]/85 hover:bg-[#273B5B] border border-white/20 text-white shadow-md hover:-translate-y-0.5 active:scale-95 transition-all backdrop-blur-sm"
            >
              <span>BOOK FREE CONSULTATION</span>
            </button>
          </div>

          {/* Student Trust Proof Strip */}
          <div className="mt-6 sm:mt-7 flex items-center gap-3">
            <div className="flex -space-x-1.5 shrink-0">
              <img className="w-7 h-7 rounded-full border border-white/80 object-cover shadow-xs" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces" alt="Student" />
              <img className="w-7 h-7 rounded-full border border-white/80 object-cover shadow-xs" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces" alt="Student" />
              <img className="w-7 h-7 rounded-full border border-white/80 object-cover shadow-xs" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces" alt="Student" />
              <div className="w-7 h-7 rounded-full border border-white/80 bg-purple-700 text-[9px] font-extrabold text-white flex items-center justify-center shadow-xs">+12k</div>
            </div>
            <div className="text-xs sm:text-sm text-slate-300 drop-shadow-sm">
              <span className="font-extrabold text-white">4.9 / 5 Rating</span> from 12,000+ happy global scholars
            </div>
          </div>

          {/* Mobile Horizontal Destination Pills */}
          <div className="md:hidden mt-8 pt-4 border-t border-white/10">
            <div className="text-[10px] font-bold tracking-widest uppercase text-slate-300 mb-2.5">
              Popular Study Destinations:
            </div>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {destinationPills.map((dest) => (
                <Link
                  key={dest.country}
                  to={dest.path}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 text-slate-800 shadow-sm border border-white/80 shrink-0 hover:bg-white"
                >
                  <img
                    src={dest.flag}
                    alt={dest.country}
                    className="w-4 h-4 rounded-full object-cover shadow-xs"
                  />
                  <span className="text-[10px] font-extrabold uppercase text-slate-900">
                    {dest.country}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <Modal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        title="Schedule Your Free Global Education Counseling"
      >
        <ConsultationForm onSuccess={() => setConsultationOpen(false)} />
      </Modal>
    </section>
  );
};

export default Hero;

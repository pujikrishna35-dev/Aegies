import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '@/components/ui/Modal';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import { ArrowRight, ShieldCheck, GraduationCap, Star, Award } from 'lucide-react';

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
    <section className="relative bg-white text-slate-900 overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-24">
      {/* Background Graphic & Landmark Montage */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Skyline / Landmark Montage */}
        <img
          src="/images/hero/hero-panorama.png"
          alt="Aegis Overseas World Education"
          className="w-full h-full object-cover object-[38%_top] sm:object-center"
        />
        {/* Soft daylight ambient wash: directional top-to-bottom on mobile (75-80% text, 35% middle, 0-10% image) and left-to-right on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 from-15% via-white/35 via-50% to-transparent to-90% md:bg-gradient-to-r md:from-white/85 md:from-0% md:via-white/50 md:via-50% md:to-transparent md:to-100% w-full md:w-3/5 pointer-events-none" />
      </div>

      {/* Arched Floating Destination Pills around the Student & Skyline (Desktop Only: 1024px+) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-20">
        {destinationPills.map((dest) => (
          <div
            key={dest.country}
            className={`absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 ${dest.floatClass}`}
            style={{ left: dest.left, top: dest.top }}
          >
            <div
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/95 text-slate-800 shadow-md border border-white/90 backdrop-blur-sm whitespace-nowrap select-none cursor-default"
            >
              <img
                src={dest.flag}
                alt={dest.country}
                className="w-5 h-5 aspect-square rounded-full object-cover shadow-xs ring-1 ring-black/10 shrink-0"
              />
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase text-slate-900">
                {dest.country}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area - Clean Background Presentation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-xl lg:max-w-2xl py-4 sm:py-8 lg:py-12">
          {/* Handwritten Subtitle */}
          <div className="mb-1.5 sm:mb-3">
            <span className="font-script text-xl sm:text-3xl lg:text-[34px] text-[#A16207] font-extrabold tracking-wide inline-block">
              A Brighter Global Tomorrow
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-display font-black tracking-tight leading-[1.1] text-[#030A17]">
            YOUR FUTURE <br />
            HAS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B45309] via-[#D97706] to-[#92400E] font-black">
              NO BORDERS.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-5 text-xs sm:text-base lg:text-[15px] text-[#0F172A] leading-relaxed font-semibold max-w-xl">
            Turn your ambition into an international degree with personalized counselling, 850+ top universities, and full end-to-end guidance from application to visa.
          </p>

          {/* 4 Value Metrics - Unboxed inline with background */}
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-3 sm:gap-6 lg:gap-8 my-5 sm:my-7">
            <div className="flex items-center gap-1.5 sm:gap-3">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 shrink-0" />
              <div>
                <div className="text-sm sm:text-base lg:text-lg font-black text-slate-950 leading-none">98%</div>
                <div className="text-[10px] sm:text-xs text-slate-800 font-bold leading-tight mt-1">Visa Success</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 shrink-0" />
              <div>
                <div className="text-sm sm:text-base lg:text-lg font-black text-slate-950 leading-none">850+</div>
                <div className="text-[10px] sm:text-xs text-slate-800 font-bold leading-tight mt-1">Universities</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 fill-purple-600 shrink-0" />
              <div>
                <div className="text-sm sm:text-base lg:text-lg font-black text-slate-950 leading-none">100%</div>
                <div className="text-[10px] sm:text-xs text-slate-800 font-bold leading-tight mt-1">Free Support</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 shrink-0" />
              <div>
                <div className="text-sm sm:text-base lg:text-lg font-black text-slate-950 leading-none">25+</div>
                <div className="text-[10px] sm:text-xs text-slate-800 font-bold leading-tight mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/university-finder"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#F5DE88] via-[#E5B842] to-[#C99222] text-[#071228] shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:brightness-105 hover:-translate-y-0.5 active:scale-95 transition-all text-center"
            >
              <span>START YOUR JOURNEY</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <button
              onClick={() => setConsultationOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-[#2B3B55] hover:bg-[#1E2E48] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all text-center"
            >
              <span>BOOK FREE CONSULTATION</span>
            </button>
          </div>

          {/* Student Trust Proof Strip */}
          <div className="mt-5 sm:mt-7 flex items-center gap-2.5 sm:gap-3">
            <div className="flex -space-x-1.5 shrink-0">
              <img className="w-7 h-7 rounded-full border border-white/80 object-cover shadow-xs" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces" alt="Student" />
              <img className="w-7 h-7 rounded-full border border-white/80 object-cover shadow-xs" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces" alt="Student" />
              <img className="w-7 h-7 rounded-full border border-white/80 object-cover shadow-xs" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces" alt="Student" />
              <div className="w-7 h-7 rounded-full border border-white/80 bg-purple-700 text-[9px] font-extrabold text-white flex items-center justify-center shadow-xs">+12k</div>
            </div>
            <div className="text-[11px] sm:text-sm text-slate-900 leading-tight">
              <span className="font-black text-slate-950">4.9 / 5 Rating</span> <span className="text-slate-800 font-bold">from 12,000+ happy global scholars</span>
            </div>
          </div>

          {/* Mobile & Tablet Responsive Destination Pills Dock */}
          <div className="lg:hidden mt-6 pt-3.5 border-t border-slate-200/80 bg-white/80 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xs border border-white/90">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-slate-700">
                Popular Study Destinations:
              </span>
              <span className="text-[10px] text-slate-500 font-medium sm:hidden">
                Swipe →
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 sm:grid sm:grid-cols-4 sm:gap-2.5">
              {destinationPills.map((dest) => (
                <Link
                  key={dest.country}
                  to={dest.path}
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white text-slate-800 shadow-2xs border border-slate-200/80 shrink-0 hover:border-amber-400 hover:shadow-xs active:scale-95 transition-all text-center"
                >
                  <img
                    src={dest.flag}
                    alt={dest.country}
                    className="w-4 h-4 rounded-full object-cover shadow-xs shrink-0"
                  />
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase text-slate-900 truncate">
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

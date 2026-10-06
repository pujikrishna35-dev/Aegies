import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  Plane,
  Car,
  UserCheck,
  CalendarCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { ConsultationForm } from '@/components/forms/ConsultationForm';

export const ArrivalSettlementSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'accommodation' | 'pickup'>('accommodation');

  const handleOpenModal = (service: 'accommodation' | 'pickup') => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const steps = [
    {
      num: '01',
      title: 'Book in Advance',
      desc: 'Choose accommodation and/or airport pickup based on your travel details.',
      icon: CalendarCheck,
      bgColor: 'bg-rose-100',
      iconColor: 'text-rose-500'
    },
    {
      num: '02',
      title: 'Share Your Details',
      desc: 'Provide your arrival date, flight information and preferences.',
      icon: Plane,
      bgColor: 'bg-sky-100',
      iconColor: 'text-sky-500'
    },
    {
      num: '03',
      title: 'We Coordinate',
      desc: 'Our team confirms your booking and coordinates with local partners.',
      icon: Car,
      bgColor: 'bg-emerald-100',
      iconColor: 'text-emerald-500'
    },
    {
      num: '04',
      title: 'You Arrive & Settle',
      desc: 'Get picked up, reach your accommodation and start your journey with confidence.',
      icon: UserCheck,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-500'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FDFBF7] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header outside the card */}
        <div className="mb-6 sm:mb-8">
          <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
            SERVICES
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#071228] tracking-tight uppercase">
            Arrival &amp; Settlement
          </h2>
        </div>

        {/* Top Hero Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#FFFDF9] via-[#FFF9EE] to-[#FFF5E6] border border-amber-200/70 shadow-[0_8px_30px_rgba(217,119,6,0.06)] overflow-hidden">
          {/* Subtle Skyline and Flight Arc Background Graphic */}
          <div className="absolute right-0 top-0 w-full sm:w-2/3 h-full pointer-events-none overflow-hidden select-none z-0">
            {/* Flight Path Arc with Golden Airplane */}
            <svg
              className="absolute top-2 right-6 sm:right-16 w-80 sm:w-96 h-28 text-amber-500/30"
              viewBox="0 0 350 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 10 90 C 90 20, 200 10, 310 35"
                stroke="#D97706"
                strokeWidth="1.8"
                strokeDasharray="4 4"
                strokeOpacity="0.45"
              />
              <path
                d="M 310 35 C 330 40, 345 55, 340 70"
                stroke="#D97706"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                strokeOpacity="0.3"
              />
            </svg>
            <div className="absolute top-3 sm:top-5 right-20 sm:right-32 text-amber-600 rotate-[22deg]">
              <Plane className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-600" />
            </div>

            {/* Faint Golden Skyline Silhouette at top right */}
            <svg
              className="absolute right-0 top-0 h-28 w-64 text-amber-600/10 pointer-events-none hidden sm:block"
              viewBox="0 0 200 100"
              fill="currentColor"
            >
              <rect x="20" y="35" width="14" height="65" rx="1" />
              <rect x="38" y="20" width="16" height="80" rx="1" />
              <polygon points="46,10 42,20 50,20" />
              <rect x="58" y="45" width="12" height="55" rx="1" />
              <rect x="74" y="25" width="20" height="75" rx="1" />
              <rect x="98" y="40" width="15" height="60" rx="1" />
              <polygon points="105.5,25 102,40 109,40" />
              <rect x="117" y="15" width="18" height="85" rx="1" />
              <rect x="139" y="30" width="14" height="70" rx="1" />
              <rect x="157" y="50" width="22" height="50" rx="1" />
              <rect x="183" y="40" width="12" height="60" rx="1" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-stretch">
            {/* Left Column: Airport Traveler Image with Handwritten Script */}
            <div className="lg:w-[32%] xl:w-[30%] shrink-0 flex flex-col justify-between p-5 sm:p-7 pb-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[380px] shadow-sm border border-amber-100/80 bg-slate-100 group">
                <img
                  src="/images/settlement/student-airport.jpg"
                  alt="Student at airport terminal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Handwritten Note Accent */}
              <div className="mt-3.5 px-2">
                <p className="font-script text-xl sm:text-2xl text-slate-700 -rotate-1 font-semibold tracking-wide leading-tight">
                  We're with you <br className="hidden sm:inline" />
                  at every step of your journey.
                </p>
              </div>
            </div>

            {/* Right Column: Title, Subtitle & 2 Feature Cards */}
            <div className="flex-1 p-5 sm:p-7 sm:pl-2 flex flex-col justify-between">
              {/* Header Content */}
              <div>
                <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
                  ARRIVAL & SETTLEMENT SERVICES
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-display font-extrabold text-[#071228] tracking-tight leading-[1.15]">
                  YOUR JOURNEY CONTINUES{' '}
                  <span className="text-[#C28E2E] block sm:inline">BEYOND THE VISA.</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal max-w-2xl">
                  From arrival to accommodation, we make your transition smooth, safe, and stress-free.
                </p>
              </div>

              {/* Two Feature Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-6 sm:mt-7">
                {/* 1. Accommodation Booking Card */}
                <div
                  className="group bg-white rounded-2xl p-4 sm:p-5 border border-amber-100/90 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon + Title + Arrow Button linking to full details */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center shrink-0">
                          <HomeIcon className="w-5 h-5 fill-amber-700/20" />
                        </div>
                        <h3 className="font-bold text-sm sm:text-base text-[#071228] group-hover:text-[#C5A059] transition-colors leading-tight">
                          Accommodation <br className="hidden sm:inline" />
                          Booking
                        </h3>
                      </div>
                      <Link
                        to="/services/accommodation"
                        aria-label="View Full Accommodation Details"
                        className="w-8 h-8 rounded-full bg-[#FDE7A9] hover:bg-amber-400 text-slate-800 flex items-center justify-center transition-colors shrink-0 shadow-xs group-hover:scale-105"
                      >
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                    {/* Middle Row: Description + Bedroom Thumbnail */}
                    <div className="flex items-start gap-3 my-2">
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed flex-1">
                        Find and book verified student accommodation near your university. Choose from university
                        housing, shared apartments, or private stays.
                      </p>
                      <div className="w-24 sm:w-28 h-18 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-slate-100 shadow-2xs">
                        <img
                          src="/images/settlement/accommodation.jpg"
                          alt="Student Accommodation"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* Bottom Pills Row */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-3 mt-2 border-t border-slate-100">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-[10px] sm:text-[11px] font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 fill-emerald-100" />
                        Verified Listings
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-[10px] sm:text-[11px] font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 fill-emerald-100" />
                        Near Campus
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-[10px] sm:text-[11px] font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 fill-emerald-100" />
                        Budget Options
                      </span>
                    </div>

                    {/* Bottom Space: Details link + Book Button */}
                    <div className="mt-3 pt-2.5 flex items-center justify-between">
                      <Link
                        to="/services/accommodation"
                        className="text-xs font-bold text-slate-500 hover:text-[#C5A059] transition-colors"
                      >
                        View Details →
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleOpenModal('accommodation')}
                        className="px-4 py-2 rounded-xl bg-[#071228] hover:bg-[#C5A059] text-white hover:text-[#071228] font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. Airport Pickup Card */}
                <div
                  className="group bg-white rounded-2xl p-4 sm:p-5 border border-amber-100/90 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon + Title + Arrow Button linking to full details */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center shrink-0">
                          <Plane className="w-5 h-5 fill-amber-700/20" />
                        </div>
                        <h3 className="font-bold text-sm sm:text-base text-[#071228] group-hover:text-[#C5A059] transition-colors leading-tight">
                          Airport Pickup
                        </h3>
                      </div>
                      <Link
                        to="/services/airport-pickup"
                        aria-label="View Full Airport Pickup Details"
                        className="w-8 h-8 rounded-full bg-[#FDE7A9] hover:bg-amber-400 text-slate-800 flex items-center justify-center transition-colors shrink-0 shadow-xs group-hover:scale-105"
                      >
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                    {/* Middle Row: Description + Car Pickup Thumbnail */}
                    <div className="flex items-start gap-3 my-2">
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed flex-1">
                        Pre-arranged airport pickup to help you reach your accommodation safely. 24/7 support
                        for a smooth arrival experience.
                      </p>
                      <div className="w-24 sm:w-28 h-18 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-slate-100 shadow-2xs">
                        <img
                          src="/images/settlement/airport-pickup.jpg"
                          alt="Airport Pickup"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* Bottom Pills Row */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-3 mt-2 border-t border-slate-100">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-[10px] sm:text-[11px] font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 fill-emerald-100" />
                        24/7 Support
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-[10px] sm:text-[11px] font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 fill-emerald-100" />
                        Trusted Drivers
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-[10px] sm:text-[11px] font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 fill-emerald-100" />
                        Safe & Reliable
                      </span>
                    </div>

                    {/* Bottom Space: Details link + Book Button */}
                    <div className="mt-3 pt-2.5 flex items-center justify-between">
                      <Link
                        to="/services/airport-pickup"
                        className="text-xs font-bold text-slate-500 hover:text-[#C5A059] transition-colors"
                      >
                        View Details →
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleOpenModal('pickup')}
                        className="px-4 py-2 rounded-xl bg-[#071228] hover:bg-[#C5A059] text-white hover:text-[#071228] font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: HOW IT WORKS */}
        <div className="mt-12 sm:mt-14">
          {/* Header Row */}
          <div className="mb-8 pb-3">
            <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
              HOW IT WORKS
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-black text-[#071228] tracking-tight uppercase">
              A SMOOTH ARRIVAL EXPERIENCE
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
              We take care of the details, so you can focus on your new beginning.
            </p>
          </div>

          {/* 4 Connected Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={step.num} className="relative flex flex-col justify-between">
                  <div className="flex items-start gap-3.5">
                    {/* Circle Icon Badge */}
                    <div
                      className={`w-12 h-12 rounded-full ${step.bgColor} ${step.iconColor} flex items-center justify-center shrink-0 shadow-2xs`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    {/* Step Title & Description */}
                    <div className="flex-1 pr-6">
                      <h4 className="font-bold text-xs sm:text-sm text-[#071228] leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                      <span className="inline-block text-xs font-bold text-slate-400 mt-2">
                        {step.num}
                      </span>
                    </div>

                    {/* Dotted Arrow Connector (Desktop only: steps 1, 2, 3) */}
                    {idx < steps.length - 1 && (
                      <div className="hidden lg:flex absolute top-5 -right-3 items-center text-slate-400 select-none pointer-events-none">
                        <span className="tracking-widest font-mono text-[10px]">┈┈▶</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Booking / Assistance Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedService === 'accommodation' ? 'Book Student Accommodation' : 'Pre-arrange Airport Pickup'}
      >
        <ConsultationForm
          onSuccessClose={() => setModalOpen(false)}
          initialNotes={
            selectedService === 'accommodation'
              ? 'I would like assistance with finding and booking verified student accommodation.'
              : 'I would like assistance with pre-arranging an airport pickup transfer.'
          }
        />
      </Modal>
    </section>
  );
};

export default ArrivalSettlementSection;

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { ConsultationForm } from '@/components/forms/ConsultationForm';

export const FinalCTA: React.FC = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <section className="bg-[#071228] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text & Dual Buttons (7 cols) */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              READY TO START YOUR GLOBAL JOURNEY?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal">
              Your dream university is closer than you think.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setConsultationOpen(true)}
                className="px-6 sm:px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] hover:brightness-105 transition-all shadow-md active:scale-95"
              >
                BOOK A FREE CONSULTATION
              </button>

              <button
                onClick={() => setConsultationOpen(true)}
                className="px-6 sm:px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-white/40 text-white hover:bg-white/10 transition-all active:scale-95"
              >
                TALK TO AN AEGIS COUNSELLOR
              </button>
            </div>
          </div>

          {/* Right Image & Script Note (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm h-48 sm:h-56 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=600&auto=format&fit=crop"
                alt="Student overlooking world horizon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071228]/80 via-transparent to-transparent flex items-end p-4">
                <span className="font-script text-xl sm:text-2xl text-[#E2C474] font-bold drop-shadow-md">
                  Same Dreams Bigger Horizons
                </span>
              </div>
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

export default FinalCTA;

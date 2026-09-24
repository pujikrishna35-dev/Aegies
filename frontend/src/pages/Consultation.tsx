import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Clock, 
  Users, 
  GraduationCap, 
  Video, 
  MapPin,
  Quote
} from 'lucide-react';
import { ConsultationForm } from '../components/forms/ConsultationForm';

export const Consultation: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#C5A059]">Book a Free Consultation</span>
        </div>

        {/* Hero Section */}
        <div className="relative bg-[#071228] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl mb-12 border border-[#C5A059]/20">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/30 text-[#E6C687] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              100% Free • No Obligation • Certified Advisors
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Book a Free Consultation
            </h1>

            <p className="mt-3 text-lg sm:text-xl text-[#E6C687] font-medium">
              Schedule a personalized 1-on-1 session with our certified advisors.
            </p>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Take the first step toward your international degree. In this 45-minute dedicated session, our senior counselors will analyze your academic profile, evaluate scholarship eligibility, and map your optimal admissions timeline for the UK, USA, Canada, Australia, Germany, or Ireland.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: What to Expect & Value Breakdown */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#C5A059]" />
                What We Will Cover in Your Session
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-amber-50 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                    1
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#071228]">Academic & Profile Evaluation</h3>
                    <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                      Detailed review of your CGPA, backlogs, test scores, research publications, and extracurriculars against top global admission benchmarks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-amber-50 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                    2
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#071228]">Dream, Reach & Safe University Categorization</h3>
                    <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                      Custom shortlisting of 6 to 8 programs tailored to maximize admission success, career return-on-investment, and post-study work rights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-amber-50 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                    3
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#071228]">Scholarship & Financial Aid Discovery</h3>
                    <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                      Identify government grants (Chevening, DAAD, Fulbright) and institutional tuition fee waivers applicable to your target courses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-amber-50 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                    4
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#071228]">Visa Likelihood & Timeline Strategy</h3>
                    <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                      Risk assessment of immigration documentation, bank maintenance funds, and preparation for consular visa interviews.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Person or Online flexibility */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#FAF7F0] p-5 rounded-2xl border border-[#E6C687]/40 flex items-start gap-3">
                <Video className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-[#071228]">Live Video Consultation</h3>
                  <p className="text-[11px] text-neutral-600 mt-0.5">Meet via Google Meet with screen-sharing anywhere in the world.</p>
                </div>
              </div>

              <div className="bg-[#FAF7F0] p-5 rounded-2xl border border-[#E6C687]/40 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-[#071228]">In-Person Office Visit</h3>
                  <p className="text-[11px] text-neutral-600 mt-0.5">Visit our centers in Hyderabad, Bangalore, or Vijayawada.</p>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 shadow-xs">
              <Quote className="w-6 h-6 text-[#C5A059] mb-2 opacity-60" />
              <p className="text-xs text-neutral-700 italic leading-relaxed">
                "The 45-minute counseling session gave me more clarity than months of browsing university websites. They laid out the exact pathway to Imperial College London with a scholarship."
              </p>
              <p className="text-[11px] font-bold text-[#071228] mt-3">
                — Rohan Mehta, Imperial College London Alumnus
              </p>
            </div>
          </div>

          {/* Right Column: Embedded Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-10 shadow-lg">
              <div className="mb-6">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C5A059] block mb-1">
                  Immediate Confirmation
                </span>
                <h2 className="text-2xl font-display font-bold text-[#071228]">
                  Schedule Your Free Session
                </h2>
                <p className="text-xs text-neutral-500 mt-1">
                  Fill in your academic background and preferred destination to connect with a specialized mentor.
                </p>
              </div>

              <ConsultationForm />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Consultation;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Mail, 
  Check, 
  Copy, 
  ArrowRight, 
  HeartHandshake, 
  MessageSquare, 
  Compass, 
  Lock
} from 'lucide-react';

export const Careers: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@aegisoverseas.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const workplaceValues = [
    {
      icon: MessageSquare,
      title: 'Communicate Clearly',
      desc: 'We value transparent, empathetic, and unambiguous communication with both our students and our global institutional partners.'
    },
    {
      icon: Compass,
      title: 'Act Responsibly',
      desc: 'We adhere strictly to regulatory standards, ethical advising, and zero-compromise documentation integrity.'
    },
    {
      icon: HeartHandshake,
      title: 'Care About Guidance Quality',
      desc: 'Every student’s aspiration matters. We take pride in delivering honest, outcome-oriented educational counseling.'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#C5A059]">Careers</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[#071228] text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl border border-[#C5A059]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-gradient-to-br from-[#C5A059]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/20 text-[#E6C687] text-xs font-bold mb-4 border border-[#C5A059]/30">
              <Briefcase className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Join Our Mission • Aegis Overseas Careers</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Build Your Career with Aegis
            </h1>

            <p className="mt-3 text-lg sm:text-xl font-medium text-[#E6C687]">
              Help students make informed decisions about their international education.
            </p>

            <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              At Aegis Overseas Education Services Pvt Ltd, our work brings together student counselling, admissions support, university relationships, marketing and business operations. We welcome people who communicate clearly, act responsibly and care about the quality of student guidance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#d6b26b] text-[#071228] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>How to Apply</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Culture / Values Pillars */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
              Who We Welcome
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#071228]">
              What We Value in Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workplaceValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FDFBF7] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-4 shrink-0 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#071228] mb-2 font-display">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Apply Section */}
        <section id="apply" className="scroll-mt-28">
          <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-md p-8 sm:p-12">
            <div className="w-full">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-2">
                Application Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228] tracking-tight">
                How to Apply
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
                Send your CV to <a href="mailto:info@aegisoverseas.com" className="font-bold text-[#071228] underline hover:text-[#C5A059] transition-colors">info@aegisoverseas.com</a> with the role or career area you are interested in.
              </p>

              {/* Action Box */}
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#FDFBF7] border border-neutral-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#071228] text-[#C5A059] flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-bold block">
                      Official Recruitment Email
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#071228] select-all">
                      info@aegisoverseas.com
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 text-xs font-bold text-[#071228] transition-colors shadow-2xs"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-neutral-500" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href="mailto:info@aegisoverseas.com?subject=Career%20Application%20-%20Aegis%20Overseas"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#071228] hover:bg-[#1E2E48] text-white text-xs font-bold transition-colors shadow-xs"
                  >
                    <span>Send Email with CV</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Submission Guidelines */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-slate-200/80 bg-[#FDFBF7]/60">
                  <span className="text-xs font-bold text-[#C5A059] block mb-1">1. Subject Line</span>
                  <p className="text-xs text-neutral-600 leading-relaxed">Specify your target career area or preferred functional domain.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200/80 bg-[#FDFBF7]/60">
                  <span className="text-xs font-bold text-[#C5A059] block mb-1">2. Attach Resume</span>
                  <p className="text-xs text-neutral-600 leading-relaxed">Attach an updated CV (PDF preferred) detailing relevant experience.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200/80 bg-[#FDFBF7]/60">
                  <span className="text-xs font-bold text-[#C5A059] block mb-1">3. Location & Availability</span>
                  <p className="text-xs text-neutral-600 leading-relaxed">Mention your current city/branch preference and joining notice period.</p>
                </div>
              </div>

              {/* Fair Recruitment & Privacy Commitment */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-start gap-3 text-xs sm:text-sm text-neutral-600">
                <Lock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Aegis is committed to fair recruitment and a respectful workplace. Applicant information will be handled in accordance with our{' '}
                  <Link to="/privacy" className="font-bold text-[#071228] underline hover:text-[#C5A059] transition-colors">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Careers;

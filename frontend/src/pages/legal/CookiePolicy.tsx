import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, ArrowLeft, ShieldCheck, Settings } from 'lucide-react';

export const CookiePolicy: React.FC = () => (
  <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
        <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#C5A059]">Cookie Policy</span>
      </div>

      {/* Header */}
      <div className="bg-[#071228] text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-xl border border-[#C5A059]/20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#E6C687] text-xs font-bold mb-4 border border-[#C5A059]/30">
          <Cookie className="w-3.5 h-3.5" />
          <span>Transparency & Cookie Preferences</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Cookie Policy
        </h1>
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          How Aegis Overseas Education Services uses cookies and modern browser storage technologies to improve your student portal and browsing experience.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 shadow-xs space-y-8 text-neutral-700 text-sm leading-relaxed">
        
        <section>
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            1. What Are Cookies?
          </h2>
          <p className="text-neutral-600">
            Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit our website. They allow the website to recognize your device, retain your filter preferences (e.g. selected study destinations or degree levels), and ensure responsive page performance.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            2. Categories of Cookies We Utilize
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
              <h3 className="text-sm font-bold text-[#071228]">Strictly Necessary Cookies</h3>
              <p className="text-xs text-neutral-600 mt-1">
                Essential for core website operation, security authentication, navigation between course directories, and student consultation booking form submissions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
              <h3 className="text-sm font-bold text-[#071228]">Functionality & Preference Cookies</h3>
              <p className="text-xs text-neutral-600 mt-1">
                Remember your choices, such as selected country filters in course finders, scholarship search terms, and language settings.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
              <h3 className="text-sm font-bold text-[#071228]">Analytical & Performance Cookies</h3>
              <p className="text-xs text-neutral-600 mt-1">
                Collect anonymous aggregate data on page visits, popular university search queries, and error telemetry to help us optimize user experience.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            3. Managing Your Cookie Preferences
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Most web browsers allow you to manage cookie settings through their options or preferences menu. You can configure your browser to reject cookies or notify you when a cookie is being placed. Please note that disabling strictly necessary cookies may impair the functionality of dynamic features like the consultation scheduler or university comparison tool.
          </p>
        </section>

      </div>
    </div>
  </div>
);

export default CookiePolicy;

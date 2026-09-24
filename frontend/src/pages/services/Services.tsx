import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  School, 
  FileCheck, 
  Award, 
  BadgeDollarSign, 
  ShieldCheck, 
  Home as HomeIcon, 
  CreditCard, 
  PlaneTakeoff, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Users, 
  PhoneCall,
  Check
} from 'lucide-react';
import { SERVICES, ServiceData } from '../../data/services';
import { Modal } from '../../components/ui/Modal';
import { ConsultationForm } from '../../components/forms/ConsultationForm';

const ICON_MAP: Record<string, React.ElementType> = {
  Compass,
  School,
  FileCheck,
  Award,
  BadgeDollarSign,
  ShieldCheck,
  Home: HomeIcon,
  CreditCard,
  PlaneTakeoff
};

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: 'ALL', label: 'All 360° Services' },
    { id: 'Admissions Strategy', label: '1. Admissions Strategy' },
    { id: 'Financial Solutions', label: '2. Financial Solutions' },
    { id: 'Visa & Relocation', label: '3. Visa & Relocation' }
  ];

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'ALL') return SERVICES;
    return SERVICES.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  const roadmapSteps = [
    {
      num: '01',
      title: 'Profile Diagnostic & Strategy',
      desc: 'Psychometric aptitude mapping, academic evaluation, and 12-month application timeline creation.',
      duration: 'Week 1 - 2'
    },
    {
      num: '02',
      title: 'University & Course Curation',
      desc: 'Shortlisting 8-12 Dream, Target, and Safe institutions matching GPA, budget, and PSW goals.',
      duration: 'Week 2 - 3'
    },
    {
      num: '03',
      title: 'SOP & Application Lodgment',
      desc: 'Editorial polishing of essays, letters of recommendation, and submission with institutional fee waivers.',
      duration: 'Week 3 - 6'
    },
    {
      num: '04',
      title: 'Scholarship & Loan Approval',
      desc: 'Targeting university merit awards and securing embassy-approved collateral or non-collateral loans.',
      duration: 'Week 6 - 8'
    },
    {
      num: '05',
      title: 'Visa Filing & Mock Drills',
      desc: '99.4% visa success protocol: proof-of-funds verification and rigorous 1-on-1 consular interview training.',
      duration: 'Week 8 - 11'
    },
    {
      num: '06',
      title: 'Housing, Forex & Fly Abroad',
      desc: 'Securing vetted student apartments, zero-markup multi-currency cards, and pre-departure alumni briefing.',
      duration: 'Week 11 - 12'
    }
  ];

  const faqs = [
    {
      q: "Are Aegis counseling and university application services really 100% free?",
      a: "Yes. All our core counseling, university shortlisting, and direct application submission services are completely free of charge for students. Aegis is supported through official recruitment partnerships with over 850+ accredited global universities."
    },
    {
      q: "How does Aegis maintain an industry-leading 99.4% student visa approval rate?",
      a: "Every student visa application undergoes a multi-point verification protocol led by senior immigration specialists. We thoroughly verify financial solvency (such as the UK 28-day rule or German Blocked Account), draft rigorous Statements of Purpose, and conduct extensive mock interview drills before embassy submission."
    },
    {
      q: "Can Aegis help me secure education loans without property collateral?",
      a: "Absolutely. Through our banking partnerships with leading NBFCs (HDFC Credila, Avanse, Auxilo) and international lenders (Prodigy Finance, MPower), we help students obtain unsecured education loans up to ₹1 Crore based on academic merit and target university rankings."
    },
    {
      q: "When is the best time to start the study abroad process with Aegis?",
      a: "The ideal time to start is 10 to 14 months before your intended intake. This provides sufficient time to take standardized tests (IELTS, PTE, GRE), participate in early-bird scholarship windows, and avoid peak visa processing delays."
    }
  ];

  const handleOpenModal = (serviceName?: string) => {
    setSelectedServiceTitle(serviceName || null);
    setConsultationOpen(true);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] min-h-screen">
      {/* Top Breadcrumb & Link */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <Link to="/" className="text-xs font-bold text-amber-600 uppercase tracking-widest hover:underline">
          ← Back to Home
        </Link>

        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] font-bold text-xs uppercase tracking-wider shadow hover:brightness-105 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Book Free Consultation</span>
        </button>
      </div>

      {/* Hero Header Area */}
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#071228] tracking-tight">
          360° Comprehensive Services
        </h1>
        <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
          Comprehensive verified information from Aegis Overseas Education Services.
        </p>
      </div>

      {/* Certified Advisor Highlights Banner (Preserving original requirement & enriching) */}
      <div className="mt-8 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-amber-600 text-xs font-extrabold uppercase tracking-wider mb-1.5">
            <ShieldCheck className="w-4 h-4" /> End-to-End Study Abroad Support
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-3xl">
            Our certified advisors guide you every step of the way with verified course prerequisites, deadlines, scholarship applications, and visa assistance.
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#071228] text-white font-bold text-xs uppercase tracking-wider hover:bg-amber-600 transition-colors shrink-0 shadow"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Book Free Advisory</span>
        </button>
      </div>

      {/* Quick Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-2xl sm:text-3xl font-extrabold text-[#071228]">15,000+</div>
          <div className="text-xs text-slate-500 font-semibold mt-1">Students Counseled</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-600">99.4%</div>
          <div className="text-xs text-slate-500 font-semibold mt-1">Visa Success Rate</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">₹25 Cr+</div>
          <div className="text-xs text-slate-500 font-semibold mt-1">Scholarships Secured</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-2xl sm:text-3xl font-extrabold text-[#071228]">100%</div>
          <div className="text-xs text-slate-500 font-semibold mt-1">Zero Service Charges</div>
        </div>
      </div>

      {/* Service Category Filter Tabs */}
      <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-[#071228] text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 360° Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredServices.map((service) => {
          const IconComponent = ICON_MAP[service.iconName] || Compass;
          return (
            <div
              key={service.slug}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Icon & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-slate-100 text-slate-700 uppercase tracking-wide">
                    {service.category || 'Core Service'}
                  </span>
                </div>

                <Link to={`/services/${service.slug}`} className="group">
                  <h3 className="text-xl font-bold text-[#071228] group-hover:text-amber-600 transition-colors leading-snug">
                    {service.title}
                  </h3>
                </Link>

                {service.tagline && (
                  <p className="text-xs font-semibold text-amber-700 mt-1 mb-2.5">
                    {service.tagline}
                  </p>
                )}

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables Bullet Points */}
                {service.deliverables && (
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      What's Included:
                    </div>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-tight">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Stat & Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                {service.stat && (
                  <div className="text-[11px]">
                    <span className="font-extrabold text-[#071228] block">{service.stat.value}</span>
                    <span className="text-slate-400 font-semibold">{service.stat.label}</span>
                  </div>
                )}

                <div className="flex items-center gap-2 ml-auto">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-bold text-slate-600 hover:text-amber-600 transition-colors"
                  >
                    Details
                  </Link>

                  <button
                    onClick={() => handleOpenModal(service.title)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#071228] text-white text-xs font-bold hover:bg-amber-600 transition-colors shadow-2xs"
                  >
                    Book Free
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* End-to-End 360° Roadmap Section */}
      <div className="mt-16 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
            Structured Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228] mt-1">
            The Aegis 360° Journey: From Dream to Landing
          </h2>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Our systematic 6-stage roadmap eliminates stress and guarantees every application, scholarship, loan, and visa requirement is executed with clockwork precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-amber-600 font-display">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 uppercase">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#071228] mb-1.5">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-emerald-700 text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Milestones</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Students Trust Aegis Services */}
      <div className="mt-12 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
            Peace of Mind
          </span>
          <h2 className="text-2xl font-display font-extrabold text-[#071228] mt-1">
            Why 15,000+ Scholars Trust Aegis Overseas
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <ShieldCheck className="w-8 h-8 text-amber-600 mb-3" />
            <h4 className="text-sm font-bold text-[#071228] mb-1">Direct University Partnerships</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Direct institutional ties with 850+ top universities across the UK, USA, Canada, Australia, and Europe.
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <Award className="w-8 h-8 text-amber-600 mb-3" />
            <h4 className="text-sm font-bold text-[#071228] mb-1">100% Free Transparent Advisory</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Zero consultation fees, zero application service charges, and complete transparency at every stage.
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <Users className="w-8 h-8 text-amber-600 mb-3" />
            <h4 className="text-sm font-bold text-[#071228] mb-1">Senior Counselor Mentorship</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Each student is paired with a dedicated lead advisor and editorial mentor throughout their journey.
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <PlaneTakeoff className="w-8 h-8 text-amber-600 mb-3" />
            <h4 className="text-sm font-bold text-[#071228] mb-1">Post-Arrival Alumni Network</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              We connect you with current seniors on campus for airport pickups, accommodation advice, and part-time jobs.
            </p>
          </div>
        </div>
      </div>

      {/* Services FAQs Accordion */}
      <div className="mt-12 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
            Got Questions?
          </span>
          <h2 className="text-2xl font-display font-extrabold text-[#071228] mt-1">
            Frequently Asked Questions on Our Services
          </h2>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-slate-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left font-bold text-[#071228] text-sm sm:text-base hover:text-amber-600 transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-amber-600 shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
                )}
              </button>
              {openFaq === idx && (
                <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed pr-8">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final Call to Action Box */}
      <div className="mt-12 bg-gradient-to-r from-[#071228] to-[#0A1E3F] rounded-3xl p-8 sm:p-12 text-white text-center shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">
            Begin Your Journey Today
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold mt-2 leading-tight">
            Ready to Plan Your Study Abroad Adventure?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
            Schedule a 1-on-1 session with a certified overseas education expert to review your academic eligibility, scholarship options, and admission timelines.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button
              onClick={() => handleOpenModal()}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] font-extrabold text-xs uppercase tracking-wider shadow hover:brightness-105 transition-all"
            >
              Book Free Counseling Session
            </button>

            <Link
              to="/courses"
              className="px-6 py-3.5 rounded-xl bg-white/10 text-white border border-white/20 font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
            >
              Browse Degrees & Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Free Consultation Modal */}
      <Modal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        title={selectedServiceTitle ? `Book Consultation: ${selectedServiceTitle}` : "Book a Free 360° Advisory Session"}
      >
        <ConsultationForm onSuccess={() => setConsultationOpen(false)} />
      </Modal>
    </div>
  );
};

export default Services;


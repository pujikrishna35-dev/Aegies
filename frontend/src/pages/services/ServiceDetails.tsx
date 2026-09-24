import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Users, 
  PhoneCall,
  Check,
  CheckSquare2,
  Calendar,
  Zap
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

const SERVICE_ALIASES: Record<string, string> = {
  'applications': 'application-assistance',
  'visa': 'visa-assistance',
  'loans': 'education-loans',
  'housing': 'accommodation'
};

export const ServiceDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const resolvedSlug = SERVICE_ALIASES[(slug || '').toLowerCase()] || (slug || '').toLowerCase();

  const service: ServiceData | undefined = SERVICES.find(
    (s) => s.slug.toLowerCase() === resolvedSlug
  );

  const otherServices = SERVICES.filter(
    (s) => s.slug !== service?.slug
  ).slice(0, 4);

  if (!service) {
    return (
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <Compass className="w-16 h-16 text-slate-300 mb-4" />
        <h1 className="text-3xl font-extrabold text-[#071228]">Service Not Found</h1>
        <p className="text-slate-600 mt-2 max-w-md text-sm">
          We couldn't locate the specific service you requested. Explore our complete 360° service suite below.
        </p>
        <Link
          to="/services"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-[#071228] font-bold text-xs uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>View All Services</span>
        </Link>
      </div>
    );
  }

  const IconComponent = ICON_MAP[service.iconName] || Compass;

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-6 flex-wrap">
        <Link to="/" className="text-amber-600 hover:underline">Home</Link>
        <span>/</span>
        <Link to="/services" className="text-amber-600 hover:underline">360° Services</Link>
        <span>/</span>
        <span className="text-slate-600 truncate max-w-xs">{service.title}</span>
      </div>

      {/* Hero Header Box */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm relative overflow-hidden mb-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold tracking-wide uppercase bg-slate-100 text-[#071228]">
              {service.category || 'Comprehensive Service'}
            </span>
            {service.stat && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                ★ {service.stat.value} {service.stat.label}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center shrink-0">
              <IconComponent className="w-7 h-7" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#071228] tracking-tight leading-tight">
              {service.title}
            </h1>
          </div>

          {service.tagline && (
            <p className="text-amber-700 text-sm sm:text-base font-bold mb-2">
              {service.tagline}
            </p>
          )}

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-3">
            {service.fullDesc || service.shortDesc}
          </p>
        </div>
      </div>

      {/* Main Grid: Left Details & Right Consultation Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Section 1: Step-by-Step Process */}
          {service.processSteps && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl font-bold text-[#071228]">How This Service Works (Step-by-Step)</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our structured workflow ensures zero surprises, rapid turnarounds, and total transparency at each milestone.
              </p>

              <div className="space-y-4">
                {service.processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-4 hover:bg-white hover:border-amber-300 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 font-display font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#071228]">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 2: Core Deliverables Checklist */}
          {service.deliverables && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <CheckSquare2 className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl font-bold text-[#071228]">What's Included in This Service</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Every student receiving this service benefits from guaranteed deliverables handled by certified overseas education specialists.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.deliverables.map((del, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-[#071228] leading-snug">{del}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Key Student Advantages */}
          {service.benefits && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl font-bold text-[#071228]">Key Student Advantages</h2>
              </div>

              <div className="space-y-3">
                {service.benefits.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-amber-50/60 border border-amber-200/60 rounded-xl flex items-center gap-3 text-xs sm:text-sm font-bold text-[#071228]"
                  >
                    <Award className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 4: Service FAQs */}
          {service.faqs && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#071228] mb-6">Frequently Asked Questions</h2>
              <div className="divide-y divide-slate-100">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between text-left font-bold text-[#071228] text-sm hover:text-amber-600 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx ? (
                        <ChevronUp className="w-4 h-4 text-amber-600 shrink-0 ml-3" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-3" />
                      )}
                    </button>
                    {openFaq === idx && (
                      <p className="mt-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed pr-6">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right 1 Column: Sticky Application & Consultation Sidebar */}
        <div className="space-y-6">
          
          {/* Quick Booking Box */}
          <div className="bg-gradient-to-br from-[#071228] to-[#0A1E3F] text-white p-6 sm:p-8 rounded-3xl shadow-md">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 block mb-2">
              Certified Expert Advisory
            </span>
            <h3 className="text-xl font-extrabold leading-tight">
              Get Started with {service.title}
            </h3>
            <p className="text-slate-300 text-xs mt-2 leading-relaxed">
              Book a 1-on-1 counseling session with our senior specialist desk. Zero service charges, 100% transparent guidance.
            </p>

            <button
              onClick={() => setConsultationOpen(true)}
              className="w-full mt-6 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] font-extrabold text-xs uppercase tracking-wider shadow hover:brightness-105 transition-all text-center flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free Consultation</span>
            </button>

            <div className="mt-4 pt-4 border-t border-white/10 text-center">
              <a
                href={`https://wa.me/919111243210?text=Hi%20Aegis%20Team,%20I%20need%20assistance%20with%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-amber-300 font-bold hover:underline inline-flex items-center gap-1.5"
              >
                <span>Chat with Specialist on WhatsApp</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Consultation Form Box */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="text-base font-bold text-[#071228] mb-1">
              Request Free Callback
            </h4>
            <p className="text-slate-500 text-xs mb-4">
              Enter your details below to schedule your preferred date and time.
            </p>
            <ConsultationForm onSuccess={() => setConsultationOpen(false)} />
          </div>

          {/* Explore Other Services */}
          {otherServices.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">
                Other 360° Services
              </h4>
              <div className="space-y-3">
                {otherServices.map((other) => (
                  <Link
                    key={other.slug}
                    to={`/services/${other.slug}`}
                    className="block p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-300 hover:bg-white transition-all group"
                  >
                    <div className="text-xs font-bold text-[#071228] group-hover:text-amber-600 transition-colors">
                      {other.title}
                    </div>
                    <div className="text-[11px] text-slate-400 font-semibold mt-1 flex items-center justify-between">
                      <span>{other.category}</span>
                      <span className="text-amber-600 font-bold">Details →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Free Consultation Modal */}
      <Modal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        title={`Book Consultation: ${service.title}`}
      >
        <ConsultationForm onSuccess={() => setConsultationOpen(false)} />
      </Modal>
    </div>
  );
};

export default ServiceDetails;


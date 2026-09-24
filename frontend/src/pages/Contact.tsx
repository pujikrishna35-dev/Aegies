import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Globe2, 
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useConsultation } from '../hooks/useConsultation';

export const Contact: React.FC = () => {
  const { submitConsultation, loading, success, resetForm } = useConsultation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: 'uk',
    studyLevel: 'Postgraduate',
    fieldOfStudy: 'General Enquiry',
    preferredOffice: 'Hyderabad (Somajiguda)',
    budgetRange: '₹15L - ₹25L',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitConsultation(formData);
  };

  const offices = [
    {
      city: 'Hyderabad — Somajiguda (HQ)',
      address: 'Level 4, Aegis Heights, Raj Bhavan Road, Somajiguda, Hyderabad, Telangana 500082',
      phone: '+91 91112 43210',
      email: 'hyderabad@aegisoverseas.com',
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM',
      landmark: 'Opposite Villa Marie College'
    },
    {
      city: 'Hyderabad — Madhapur (HITEC City)',
      address: 'Plot 18, 3rd Floor, Mindspace IT Corridor, Madhapur, Hyderabad, Telangana 500081',
      phone: '+91 91112 43211',
      email: 'hitec@aegisoverseas.com',
      hours: 'Mon - Sat: 10:00 AM - 7:00 PM',
      landmark: 'Near Inorbit Mall & Durgam Cheruvu Metro'
    },
    {
      city: 'Bangalore — Koramangala Hub',
      address: '80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka 560034',
      phone: '+91 91112 43212',
      email: 'bangalore@aegisoverseas.com',
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM',
      landmark: 'Near Sony World Signal'
    },
    {
      city: 'Vijayawada — MG Road',
      address: 'Door No. 40-1-52, 2nd Floor, MG Road, Near Benz Circle, Vijayawada, Andhra Pradesh 520010',
      phone: '+91 91112 43213',
      email: 'vijayawada@aegisoverseas.com',
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM',
      landmark: 'Above State Bank of India'
    }
  ];

  const contactFaqs = [
    {
      q: 'Do I need an appointment before visiting an Aegis counseling center?',
      a: 'Walk-ins are always warmly welcomed during working hours. However, booking an appointment in advance guarantees dedicated 1-on-1 time with the senior advisor specializing in your preferred destination country.'
    },
    {
      q: 'Are online video consultations available if I cannot visit in person?',
      a: 'Yes! We conduct interactive virtual counseling sessions via Google Meet and Zoom with screen-sharing of university course curricula, admission portals, and visa checklists.'
    },
    {
      q: 'Is there any fee for the initial counseling and profile assessment?',
      a: 'No, initial counseling, academic profile assessment, and university eligibility matching are 100% free of cost with zero obligation.'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#C5A059]">Contact Us</span>
        </div>

        {/* Hero Section */}
        <div className="relative bg-[#071228] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl mb-12 border border-[#C5A059]/20">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/30 text-[#E6C687] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Prompt Support • Dedicated Country Desks
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Contact Us
            </h1>

            <p className="mt-3 text-lg sm:text-xl text-[#E6C687] font-medium">
              Reach out to our offices in Hyderabad, Bangalore, or Vijayawada.
            </p>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Have questions regarding course eligibility, upcoming application deadlines, education loans, or visa requirements? Connect with our certified advisors for immediate, friendly assistance.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                Typical response time: Under 2 hours
              </span>
              <span className="flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-[#C5A059]" />
                In-person & Virtual consultations
              </span>
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Left Column: Office Locations & Direct Contacts */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-display font-bold text-[#071228] flex items-center gap-2">
              <Building2 className="w-6 h-6 text-[#C5A059]" />
              Our Regional Offices
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offices.map((off, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-neutral-200/80 p-6 shadow-xs flex flex-col justify-between hover:border-[#C5A059]/50 transition-colors">
                  <div>
                    <h3 className="text-base font-bold text-[#071228] mb-2">{off.city}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-3">{off.address}</p>
                    <p className="text-[11px] text-amber-800 font-semibold mb-3">📍 {off.landmark}</p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 space-y-1.5 text-xs text-neutral-600">
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <a href={`tel:${off.phone}`} className="hover:text-[#071228] font-bold">{off.phone}</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <a href={`mailto:${off.email}`} className="hover:text-[#071228] truncate">{off.email}</a>
                    </p>
                    <p className="flex items-center gap-2 text-[11px] text-neutral-500 pt-1">
                      <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span>{off.hours}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Channels */}
            <div className="bg-[#FAF7F0] rounded-2xl border border-[#E6C687]/40 p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-[#071228]">Need Instant Guidance on WhatsApp?</h3>
                <p className="text-xs text-neutral-600 mt-1">Chat directly with an education counselor right now.</p>
              </div>
              <a
                href="https://wa.me/919111243210"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 flex items-center gap-2"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 shadow-md sticky top-28">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-1">
                Send Us a Message
              </h2>
              <p className="text-xs text-neutral-500 mb-6">
                Fill in your details and an advisor will contact you within 2 hours.
              </p>

              {success ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-bold text-[#071228]">Message Sent Successfully!</h3>
                  <p className="text-xs text-neutral-600 mt-2 mb-6 leading-relaxed">
                    Thank you for reaching out. An Aegis advisor has received your request and will call you shortly.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-5 py-2.5 rounded-xl bg-[#071228] text-white text-xs font-bold hover:bg-[#C5A059] hover:text-[#071228] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">Preferred Destination</label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 text-xs bg-white text-neutral-700"
                      >
                        <option value="uk">United Kingdom 🇬🇧</option>
                        <option value="usa">United States 🇺🇸</option>
                        <option value="canada">Canada 🇨🇦</option>
                        <option value="australia">Australia 🇦🇺</option>
                        <option value="germany">Germany 🇩🇪</option>
                        <option value="ireland">Ireland 🇮🇪</option>
                        <option value="new-zealand">New Zealand 🇳🇿</option>
                        <option value="europe">Europe (Schengen) 🇪🇺</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">Nearest Office</label>
                      <select
                        value={formData.preferredOffice}
                        onChange={(e) => setFormData({ ...formData, preferredOffice: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 text-xs bg-white text-neutral-700"
                      >
                        <option value="Hyderabad (Somajiguda)">Hyderabad (Somajiguda)</option>
                        <option value="Hyderabad (Madhapur)">Hyderabad (Madhapur)</option>
                        <option value="Bangalore (Koramangala)">Bangalore (Koramangala)</option>
                        <option value="Vijayawada (MG Road)">Vijayawada (MG Road)</option>
                        <option value="Online Video Call">Online Video Call</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Your Message / Query</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your target degree, course, or any questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#071228] hover:bg-[#C5A059] text-white hover:text-[#071228] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
              Common Enquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228]">
              Visiting Our Offices
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {contactFaqs.map((faq, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#071228] hover:bg-neutral-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#C5A059] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 pt-1 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 bg-[#FAF7F0]/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FDFBF7] text-slate-700 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group">
              <img
                src="/images/aegis-logo.png"
                alt="Aegis Overseas Education Services"
                className="h-16 sm:h-20 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Guiding students towards global opportunities with trust, expertise and end-to-end support.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#071228] hover:border-[#071228] transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#071228] hover:border-[#071228] transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#071228] hover:border-[#071228] transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#071228] hover:border-[#071228] transition-colors">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: STUDY DESTINATIONS */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#071228] mb-3">
              Study Destinations
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li><Link to="/destinations/uk" className="hover:text-[#071228]">UK</Link></li>
              <li><Link to="/destinations/usa" className="hover:text-[#071228]">USA</Link></li>
              <li><Link to="/destinations/canada" className="hover:text-[#071228]">Canada</Link></li>
              <li><Link to="/destinations/australia" className="hover:text-[#071228]">Australia</Link></li>
              <li><Link to="/destinations/germany" className="hover:text-[#071228]">Germany</Link></li>
              <li><Link to="/destinations/ireland" className="hover:text-[#071228]">Ireland</Link></li>
              <li><Link to="/destinations/new-zealand" className="hover:text-[#071228]">New Zealand</Link></li>
              <li><Link to="/destinations/europe" className="hover:text-[#071228]">Europe</Link></li>
            </ul>
          </div>

          {/* Col 3: SERVICES */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#071228] mb-3">
              Services
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li><Link to="/services/counselling" className="hover:text-[#071228]">Counselling</Link></li>
              <li><Link to="/services/university-selection" className="hover:text-[#071228]">University Selection</Link></li>
              <li><Link to="/services/applications" className="hover:text-[#071228]">Applications</Link></li>
              <li><Link to="/services/scholarships" className="hover:text-[#071228]">Scholarships</Link></li>
              <li><Link to="/services/education-loans" className="hover:text-[#071228]">Education Loans</Link></li>
              <li><Link to="/services/visa" className="hover:text-[#071228]">Visa Assistance</Link></li>
              <li><Link to="/services/accommodation" className="hover:text-[#071228]">Accommodation</Link></li>
              <li><Link to="/services/forex" className="hover:text-[#071228]">Forex</Link></li>
              <li><Link to="/services/pre-departure" className="hover:text-[#071228]">Pre-Departure</Link></li>
            </ul>
          </div>

          {/* Col 4: QUICK LINKS & COMPANY */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#071228] mb-3">
              Company
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li><Link to="/about" className="hover:text-[#071228]">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#071228]">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-[#071228]">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-[#071228]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#071228]">Terms</Link></li>
              <li><Link to="/cookies" className="hover:text-[#071228]">Cookie Policy</Link></li>
              <li>
                <Link
                  to="/admin/login"
                  className="hover:text-[#071228] inline-flex items-center gap-1.5 text-amber-700 font-semibold pt-1 transition-colors"
                >
                  <Lock className="w-3 h-3 text-amber-600" />
                  <span>Admin Login</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: CONTACT */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#071228] mb-3">
              Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <a href="tel:+919111243210" className="flex items-center gap-2 hover:text-[#071228]">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>+91 91112 43210</span>
              </a>
              <a href="mailto:info@aegisoverseas.com" className="flex items-center gap-2 hover:text-[#071228]">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>info@aegisoverseas.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>123 Education Street, Somajiguda, Hyderabad</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/919111243210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold hover:bg-emerald-100 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Subfooter */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>© 2026 Aegis Overseas. All Rights Reserved.</div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-700">Study Abroad. Build Your Future.</span>
            <span className="text-slate-300">|</span>
            <Link
              to="/admin/login"
              className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-amber-700 font-medium transition-colors"
              title="Authorized Aegis Staff & Admin Portal"
            >
              <Lock className="w-3 h-3 text-amber-600" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

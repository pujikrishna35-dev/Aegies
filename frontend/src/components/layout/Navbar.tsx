import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Modal } from '@/components/ui/Modal';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
  badge?: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Study Abroad',
      href: '/study-abroad',
      dropdown: [
        { label: 'Step-by-Step Guide', href: '/study-abroad' },
        { label: 'University Finder', href: '/university-finder' },
        { label: 'Free Counseling', href: '/consultation' }
      ]
    },
    {
      label: 'Destinations',
      href: '/destinations',
      dropdown: [
        { label: 'United Kingdom (UK)', href: '/destinations/uk' },
        { label: 'United States (USA)', href: '/destinations/usa' },
        { label: 'Canada', href: '/destinations/canada' },
        { label: 'Australia', href: '/destinations/australia' },
        { label: 'Germany', href: '/destinations/germany' },
        { label: 'Ireland', href: '/destinations/ireland' },
        { label: 'New Zealand', href: '/destinations/new-zealand' },
        { label: 'Europe (Schengen)', href: '/destinations/europe' }
      ]
    },
    {
      label: 'Universities',
      href: '/universities',
      dropdown: [
        { label: 'Browse 100+ Universities', href: '/universities' },
        { label: 'Compare Universities', href: '/universities/compare' },
        { label: 'University Match Finder', href: '/university-finder' }
      ]
    },
    {
      label: 'Courses',
      href: '/courses',
      dropdown: [
        { label: 'All Courses & Degrees', href: '/courses' },
        { label: 'Computer Science & AI', href: '/courses' },
        { label: 'Business & Management', href: '/courses' },
        { label: 'Engineering & Tech', href: '/courses' },
        { label: 'Health & Life Sciences', href: '/courses' }
      ]
    },
    {
      label: 'Services',
      href: '/services',
      dropdown: [
        { label: 'All Services Overview', href: '/services' },
        { label: 'Test Preparation (IELTS/GRE)', href: '/test-preparation' },
        { label: 'Admission Counseling', href: '/services' },
        { label: 'Visa & Immigration Guidance', href: '/services' }
      ]
    },
    {
      label: 'Scholarships',
      href: '/scholarships',
      dropdown: [
        { label: 'Global Scholarships Directory', href: '/scholarships' },
        { label: 'Merit & Need-based Grants', href: '/scholarships' },
        { label: 'Country Specific Bursaries', href: '/scholarships' }
      ]
    },
    { label: 'Student Stories', href: '/student-stories' },
    { label: 'About Us', href: '/about' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 pt-2 sm:pt-2.5 pointer-events-none">
        {/* Floating Frosted Pill Bar */}
        <div
          className={`w-[94%] max-w-[1240px] mx-auto rounded-xl sm:rounded-2xl pointer-events-auto transition-all duration-300 border ${
            scrolled
              ? 'bg-white/85 backdrop-blur-xl border-white/80 shadow-[0_8px_24px_rgba(7,18,40,0.1)] py-1.5 px-4 sm:px-6'
              : 'bg-white/70 backdrop-blur-xl border-white/60 shadow-[0_6px_20px_rgba(7,18,40,0.06)] py-1.5 sm:py-2 px-4 sm:px-6'
          } flex items-center justify-between gap-3`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0 py-0.5">
            <img
              src="/images/aegis-icon.png"
              alt="Aegis Overseas Education Services"
              className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-xs"
            />
            <div className="text-left">
              <span className="font-display text-[13px] sm:text-[14px] font-extrabold tracking-tight text-[#071228] block leading-tight">
                AEGIS OVERSEAS
              </span>
              <span className="text-[7.5px] uppercase tracking-[0.18em] font-semibold text-purple-900/80 block">
                Education Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <nav className="hidden lg:flex items-center justify-center space-x-2.5 xl:space-x-3.5 2xl:space-x-4 flex-1">
            {navItems.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);

              return (
                <div key={item.label} className="relative group py-1">
                  <Link
                    to={item.href}
                    className={`text-[11px] xl:text-[12px] font-semibold transition-colors flex items-center gap-0.5 hover:text-[#071228] whitespace-nowrap shrink-0 relative ${
                      active ? 'text-[#071228]' : 'text-neutral-700'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown className="w-2.5 h-2.5 text-neutral-400 group-hover:text-[#071228] transition-transform duration-200 group-hover:rotate-180" />
                    )}
                    {active && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#C5A059] rounded-full" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && item.dropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white/95 backdrop-blur-2xl rounded-xl shadow-lg border border-neutral-100/90 py-2 px-1 min-w-[200px]">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            className="block px-3 py-1.5 rounded-lg text-[11px] font-medium text-neutral-700 hover:text-[#071228] hover:bg-neutral-100/70 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Symmetrical Balance Spacer on Desktop */}
          <div className="hidden lg:block lg:w-[175px] shrink-0 pointer-events-none" aria-hidden="true" />

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-[#071228] hover:bg-white/50 transition-colors ml-auto"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 max-w-7xl mx-auto pointer-events-auto bg-white/95 backdrop-blur-2xl rounded-2xl border border-white/80 shadow-2xl p-4 space-y-2 max-h-[75vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-neutral-100/80 last:border-0 pb-1">
                <div className="flex items-center justify-between py-1.5">
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold text-neutral-800 hover:text-amber-600"
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                      className="p-1 text-neutral-400 hover:text-neutral-700"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.dropdown && mobileDropdown === item.label && (
                  <div className="pl-3 py-1 space-y-1 bg-neutral-50/60 rounded-xl mb-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 px-2 text-xs text-neutral-600 hover:text-[#071228]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setConsultationOpen(true);
                }}
                className="w-full py-2.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#F0CA65] to-[#D4A03A] text-[#071228] flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Consultation Modal */}
      <Modal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        title="Schedule Your Free Global Education Counseling"
      >
        <ConsultationForm onSuccess={() => setConsultationOpen(false)} />
      </Modal>
    </>
  );
};

export default Navbar;

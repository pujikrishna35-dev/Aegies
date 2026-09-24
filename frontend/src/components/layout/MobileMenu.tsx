import React from 'react';
import { Link } from 'react-router-dom';
import { X, PhoneCall } from 'lucide-react';
import { NAV_LINKS, BRAND } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenConsultation }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden flex justify-end">
      <div className="w-4/5 max-w-sm bg-white h-full p-6 flex flex-col shadow-2xl overflow-y-auto">
        <div className="flex items-center justify-between pb-6 border-b border-slate-100">
          <span className="font-display font-bold text-xl text-navy-950">Menu</span>
          <button onClick={onClose} className="p-2 text-slate-500 hover:text-slate-800">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={onClose}
              className="block text-base font-medium text-slate-700 hover:text-burgundy-900 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="pt-6 border-t border-slate-100 space-y-3">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full py-3 bg-[#D4AF37] text-navy-950 font-bold rounded-xl text-center text-sm shadow-md hover:brightness-105"
          >
            Book Free Consultation
          </button>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 border border-slate-200 text-slate-700 font-semibold rounded-xl text-center text-sm flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-emerald-600" />
            WhatsApp Helpline
          </a>
        </div>
      </div>
    </div>
  );
};

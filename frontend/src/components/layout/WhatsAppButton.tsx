import React, { useState } from 'react';
import { BRAND } from '@/lib/constants';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center flex-row-reverse group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Expanding Ripple Waves in a Continuous Cycle */}
      <div className="absolute right-0 bottom-0 w-14 h-14 rounded-full bg-[#25D366] opacity-75 animate-whatsapp-ripple-1 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-14 h-14 rounded-full bg-[#25D366] opacity-50 animate-whatsapp-ripple-2 pointer-events-none" />

      {/* Main Circular WhatsApp Button */}
      <a
        href={BRAND.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Aegis Overseas on WhatsApp"
        title="Chat with an advisor on WhatsApp"
        className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 animate-whatsapp-pulse cursor-pointer shrink-0"
      >
        {/* Crisp Official WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          className="drop-shadow-sm transition-transform duration-300 group-hover:rotate-6"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31" />
        </svg>

        {/* Live Online Green Dot with Pulse */}
        <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#4EF08A] border-2 border-white shadow-xs" />
        </span>
      </a>

      {/* Interactive Tooltip Speech Bubble to the left */}
      <div 
        className={`mr-3.5 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-neutral-200/80 transition-all duration-300 pointer-events-none select-none ${
          isHovered ? 'opacity-100 translate-x-0 scale-100' : 'opacity-90 translate-x-0'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
        <span className="text-xs font-bold text-[#071228] whitespace-nowrap">
          Chat on WhatsApp
        </span>
        <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
          Online
        </span>
      </div>
    </div>
  );
};

export default WhatsAppButton;

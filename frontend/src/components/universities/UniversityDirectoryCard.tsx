import React, { useState } from 'react';
import { MapPin, Globe, ChevronRight, ExternalLink } from 'lucide-react';
import { UniversityDirectoryItem } from '../../types/universityDirectory';

interface Props {
  university: UniversityDirectoryItem;
  viewMode?: 'grid' | 'list';
}

function getInitials(name: string): string {
  if (!name) return 'U';
  const clean = name.replace(/^(the|university\s+of)\s+/i, '');
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return (words[0][0] + words[1][0]).toUpperCase();
}

export const UniversityDirectoryCard: React.FC<Props> = ({ university, viewMode = 'grid' }) => {
  const [imageError, setImageError] = useState(false);

  const initials = getInitials(university.name);
  const hasValidLogo = university.logoUrl && !imageError;

  const handleOpenWebsite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (university.websiteUrl && university.websiteUrl !== '#') {
      window.open(university.websiteUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (viewMode === 'list') {
    return (
      <div className="group bg-white rounded-2xl border border-neutral-200/90 p-3 sm:p-4 hover:border-[#C5A059] hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative">
        <div className="flex items-center gap-3.5 min-w-0">
          {/* Logo / Monogram */}
          <div 
            className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 overflow-hidden bg-neutral-50/80 border border-neutral-100 p-1"
            style={{ width: '56px', height: '56px', minWidth: '56px', minHeight: '56px', maxWidth: '56px', maxHeight: '56px' }}
          >
            {hasValidLogo ? (
              <img
                src={university.logoUrl!}
                alt={university.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-contain block max-w-full max-h-full"
                loading="lazy"
              />
            ) : (
              <span className="text-xs font-bold font-serif text-[#071228] bg-amber-50/80 w-full h-full flex items-center justify-center rounded-lg text-amber-900 border border-amber-100/60">
                {initials}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-[#071228] group-hover:text-amber-800 transition-colors truncate">
                {university.name}
              </h4>
            </div>

            <div className="flex items-center gap-1 text-xs text-neutral-500 mt-0.5">
              <MapPin className="w-3 h-3 text-neutral-400 shrink-0" />
              <span className="truncate">{university.location}</span>
            </div>
          </div>
        </div>

        {/* Website Action */}
        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100">
          <a
            href={university.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 hover:underline max-w-[200px] truncate"
            title={university.websiteUrl}
          >
            <Globe className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="truncate">{university.websiteDomain || 'Visit Website'}</span>
            <ExternalLink className="w-3 h-3 shrink-0 text-blue-400" />
          </a>

          <button
            onClick={handleOpenWebsite}
            aria-label={`Visit ${university.name}`}
            className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center transition-colors shrink-0"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-2xl border border-neutral-200/90 p-4 hover:border-[#C5A059] hover:shadow-md transition-all duration-200 relative flex flex-col justify-between h-[148px]">
      {/* Top section: Logo + Name & Location (Aligned horizontally and vertically centered) */}
      <div className="flex items-center gap-3">
        {/* Logo / Monogram badge */}
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 overflow-hidden bg-neutral-50/80 border border-neutral-100 p-1"
          style={{ width: '56px', height: '56px', minWidth: '56px', minHeight: '56px', maxWidth: '56px', maxHeight: '56px' }}
        >
          {hasValidLogo ? (
            <img
              src={university.logoUrl!}
              alt={university.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-contain block max-w-full max-h-full"
              loading="lazy"
            />
          ) : (
            <span className="text-xs font-bold font-serif text-[#071228] bg-amber-50/80 w-full h-full flex items-center justify-center rounded-lg text-amber-900 border border-amber-100/60">
              {initials}
            </span>
          )}
        </div>

        {/* Institution Name & Location */}
        <div className="flex-1 min-w-0">
          <h4 className="text-[13px] sm:text-sm font-bold text-[#071228] group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
            {university.name}
          </h4>

          <div className="flex items-center gap-1 text-[11px] text-neutral-500 mt-1">
            <MapPin className="w-3 h-3 text-neutral-400 shrink-0" />
            <span className="truncate">{university.location}</span>
          </div>
        </div>
      </div>

      {/* Bottom section: Website link + Round Arrow Action */}
      <div className="pt-2 mt-auto border-t border-neutral-100 flex items-center justify-between gap-2">
        <a
          href={university.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 hover:underline min-w-0 truncate"
          title={university.websiteUrl}
        >
          <Globe className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span className="truncate">{university.websiteDomain || 'Visit Website'}</span>
          <ExternalLink className="w-3 h-3 shrink-0 text-blue-400" />
        </a>

        <button
          onClick={handleOpenWebsite}
          aria-label={`Visit ${university.name}`}
          className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center transition-colors shrink-0"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

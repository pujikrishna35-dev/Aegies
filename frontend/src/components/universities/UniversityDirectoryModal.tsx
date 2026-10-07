import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Search, 
  MapPin, 
  ArrowUpDown, 
  LayoutGrid, 
  List, 
  ChevronLeft, 
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { UniversityDirectoryItem } from '../../types/universityDirectory';
import { loadCountryUniversityDirectory } from '../../data/universities/universityLoader';
import { UniversityDirectoryCard } from './UniversityDirectoryCard';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  countrySlug: string;
  countryName: string;
  landmarkImage?: string;
  flagUrl?: string;
}

const ITEMS_PER_PAGE = 8;

export const UniversityDirectoryModal: React.FC<Props> = ({
  isOpen,
  onClose,
  countrySlug,
  countryName,
  landmarkImage,
  flagUrl
}) => {
  const [universities, setUniversities] = useState<UniversityDirectoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filter & Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('ALL');
  const [sortOrder, setSortOrder] = useState<'A-Z' | 'Z-A' | 'DEFAULT'>('A-Z');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpPageInput, setJumpPageInput] = useState('');

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Load country data on open or when countrySlug changes
  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    setIsLoading(true);

    loadCountryUniversityDirectory(countrySlug).then((data) => {
      if (isMounted) {
        setUniversities(data);
        setIsLoading(false);
        setCurrentPage(1);
        setSearchQuery('');
        setSelectedCity('ALL');
        setSortOrder('A-Z');
      }
    });

    return () => {
      isMounted = false;
    };
  }, [isOpen, countrySlug]);

  // Extract unique cities from loaded dataset
  const uniqueCities = useMemo(() => {
    const citySet = new Set<string>();
    universities.forEach((u) => {
      if (u.city && u.city !== 'Other') {
        citySet.add(u.city);
      }
    });
    return Array.from(citySet).sort((a, b) => a.localeCompare(b));
  }, [universities]);

  // Filter and sort items
  const filteredAndSorted = useMemo(() => {
    let list = universities;

    // Search filter (matches name, website domain, or location)
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((u) => 
        u.name.toLowerCase().includes(q) ||
        u.websiteDomain.toLowerCase().includes(q) ||
        u.location.toLowerCase().includes(q)
      );
    }

    // City filter
    if (selectedCity !== 'ALL') {
      const cityLower = selectedCity.toLowerCase();
      list = list.filter((u) => 
        u.city.toLowerCase() === cityLower || 
        u.location.toLowerCase().includes(cityLower)
      );
    }

    // Sort order
    if (sortOrder === 'A-Z') {
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'Z-A') {
      return [...list].sort((a, b) => b.name.localeCompare(a.name));
    }

    return list;
  }, [universities, searchQuery, selectedCity, sortOrder]);

  // Pagination calculation
  const totalItems = filteredAndSorted.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));

  // Reset to page 1 if current page is out of bounds
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const startIndex = totalItems === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endIndex = Math.min(totalItems, currentPage * ITEMS_PER_PAGE);

  const displayedUniversities = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSorted.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAndSorted, currentPage]);

  // Handle jump to page
  const handleJumpPage = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(jumpPageInput, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      setJumpPageInput('');
    }
  };

  // Generate pagination numbers array
  const paginationRange = useMemo(() => {
    const delta = 2;
    const range: (number | string)[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      } else if (range[range.length - 1] !== '...') {
        range.push('...');
      }
    }
    return range;
  }, [currentPage, totalPages]);

  if (!isOpen) return null;

  // Resolve country flag icon
  const flagSlug = countrySlug === 'united-kingdom' ? 'uk' : countrySlug === 'united-states' ? 'usa' : countrySlug;
  const flagSrc = `/flags/${flagSlug}.svg`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#071228]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-6xl max-h-[94vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-neutral-200/80 overflow-hidden">
        
        {/* ========================================================
            1. HEADER SECTION (With Landmark Panorama & Close)
        ======================================================== */}
        <div className="relative bg-gradient-to-r from-white via-white/95 to-amber-50/20 px-6 sm:px-8 py-6 border-b border-neutral-200/80 shrink-0 overflow-hidden">
          {/* Landmark Panorama on right */}
          {landmarkImage && (
            <div className="absolute top-0 right-0 h-full w-80 sm:w-[480px] lg:w-[580px] pointer-events-none overflow-hidden">
              <img
                src={landmarkImage}
                alt=""
                className="w-full h-full object-cover object-right opacity-85 brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
            </div>
          )}

          <div className="relative z-10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Country Round Flag Icon */}
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-xs border-2 border-white shrink-0 bg-neutral-100 flex items-center justify-center">
                <img
                  src={flagSrc}
                  alt={countryName}
                  onError={(e) => {
                    // Fallback to emoji or text if svg is missing
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#071228]">
                  {countryName} University Directory
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                  Explore accredited universities across {countryName}
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-neutral-600 hover:text-[#071228] flex items-center justify-center transition-colors shadow-xs shrink-0 backdrop-blur-xs border border-neutral-200/80"
              aria-label="Close directory"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ========================================================
            2. CONTROLS BAR (Search, City Dropdown, A-Z Sorting)
        ======================================================== */}
        <div className="px-6 sm:px-8 pt-5 pb-3 border-b border-neutral-100 bg-white shrink-0">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by university name or subject..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200/90 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 transition-all bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* All Cities Filter */}
            <div className="sm:col-span-3 relative">
              <div className="relative">
                <MapPin className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={selectedCity}
                  onChange={(e) => {
                    setSelectedCity(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-neutral-200/90 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] bg-white cursor-pointer appearance-none truncate"
                >
                  <option value="ALL">All Cities</option>
                  {uniqueCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                  <ChevronRight className="w-3.5 h-3.5 rotate-90" />
                </div>
              </div>
            </div>

            {/* A - Z Sorting */}
            <div className="sm:col-span-3 relative">
              <div className="relative">
                <ArrowUpDown className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={sortOrder}
                  onChange={(e) => {
                    setSortOrder(e.target.value as 'A-Z' | 'Z-A' | 'DEFAULT');
                    setCurrentPage(1);
                  }}
                  className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-neutral-200/90 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] bg-white cursor-pointer appearance-none"
                >
                  <option value="A-Z">A - Z</option>
                  <option value="Z-A">Z - A</option>
                  <option value="DEFAULT">Default Order</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                  <ChevronRight className="w-3.5 h-3.5 rotate-90" />
                </div>
              </div>
            </div>

          </div>

          {/* Sub-bar: Results Count & View Toggle */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-100">
            <div className="text-xs text-neutral-600 font-medium">
              Showing <span className="font-bold text-[#071228]">{startIndex}–{endIndex}</span> of{' '}
              <span className="font-bold text-[#071228]">{totalItems}</span> universities in {countryName}
            </div>

            {/* View Mode Toggle Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg border transition-all ${
                  viewMode === 'grid'
                    ? 'bg-blue-50 text-blue-600 border-blue-200 shadow-2xs'
                    : 'bg-white text-neutral-400 border-neutral-200 hover:text-neutral-600'
                }`}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg border transition-all ${
                  viewMode === 'list'
                    ? 'bg-blue-50 text-blue-600 border-blue-200 shadow-2xs'
                    : 'bg-white text-neutral-400 border-neutral-200 hover:text-neutral-600'
                }`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================
            3. CARDS CONTENT AREA
        ======================================================== */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 bg-neutral-50/50">
          {isLoading ? (
            /* Skeleton Loading Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-neutral-200/70 p-4 h-[148px] animate-pulse flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 pr-6">
                    <div 
                      className="w-14 h-14 rounded-xl bg-neutral-200 shrink-0" 
                      style={{ width: '56px', height: '56px', minWidth: '56px', minHeight: '56px' }}
                    />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-neutral-200 rounded-md w-3/4" />
                      <div className="h-3 bg-neutral-150 rounded-md w-1/2" />
                    </div>
                  </div>
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div className="h-3 bg-neutral-150 rounded-md w-1/3" />
                    <div className="w-7 h-7 rounded-full bg-neutral-200" />
                  </div>
                </div>
              ))}
            </div>
          ) : displayedUniversities.length > 0 ? (
            /* University Cards */
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'
                  : 'space-y-3'
              }
            >
              {displayedUniversities.map((uni) => (
                <UniversityDirectoryCard
                  key={uni.id}
                  university={uni}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto border border-amber-200">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#071228]">No institutions found</h3>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                No universities matched &quot;{searchQuery}&quot;
                {selectedCity !== 'ALL' && ` in ${selectedCity}`}. Try adjusting your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCity('ALL');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#071228] text-white text-xs font-bold hover:bg-[#C5A059] hover:text-[#071228] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </div>

        {/* ========================================================
            4. PAGINATION CONTROLS
        ======================================================== */}
        {totalPages > 1 && (
          <div className="px-6 sm:px-8 py-4 bg-white border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            {/* Page Buttons: Previous, Numbers, Next */}
            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-xs"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page Numbers */}
              {paginationRange.map((page, pIdx) => {
                if (page === '...') {
                  return (
                    <span key={`ellipsis-${pIdx}`} className="px-2 text-xs text-neutral-400">
                      ...
                    </span>
                  );
                }

                const pageNum = page as number;
                const isActive = pageNum === currentPage;

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-[#185adb] text-white shadow-xs'
                        : 'text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-xs"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Go to Page Form */}
            <form onSubmit={handleJumpPage} className="flex items-center gap-2 text-xs text-neutral-500">
              <span>Go to page</span>
              <input
                type="number"
                min={1}
                max={totalPages}
                value={jumpPageInput}
                onChange={(e) => setJumpPageInput(e.target.value)}
                placeholder={String(currentPage)}
                className="w-12 px-2 py-1.5 rounded-lg border border-neutral-200 text-xs text-center focus:outline-none focus:border-[#185adb]"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold text-xs transition-colors"
              >
                Go
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

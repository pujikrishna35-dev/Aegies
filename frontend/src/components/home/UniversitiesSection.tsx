import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const UniversitiesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  const universities = [
    { name: 'University of Oxford', country: 'UK', color: 'text-[#002147]' },
    { name: 'Harvard University', country: 'USA', color: 'text-[#A51C30]' },
    { name: 'University of Toronto', country: 'Canada', color: 'text-[#002A5C]' },
    { name: 'University of Melbourne', country: 'Australia', color: 'text-[#094183]' },
    { name: 'Technical University of Munich', country: 'Germany', color: 'text-[#0066B2]' },
    { name: 'McGill University', country: 'Canada', color: 'text-[#ED1B2F]' },
    { name: 'UNSW Sydney', country: 'Australia', color: 'text-[#F5B800]' },
    { name: 'University of Birmingham', country: 'UK', color: 'text-[#A00000]' },
    { name: 'ETH Zurich', country: 'Europe', color: 'text-[#1F407A]' },
    { name: 'University of Auckland', country: 'New Zealand', color: 'text-[#00467F]' },
    { name: 'Trinity College Dublin', country: 'Ireland', color: 'text-[#0F2D52]' },
    { name: 'UMass Amherst', country: 'USA', color: 'text-[#881C1C]' }
  ];

  // 4 duplicated sets guarantee seamless infinite looping in both directions
  const displayUniversities = [
    ...universities,
    ...universities,
    ...universities,
    ...universities
  ];

  const getCardMetrics = (container: HTMLDivElement) => {
    const card = container.querySelector('[data-university-card]') as HTMLElement;
    if (!card) return { step: 164, oneSetWidth: 164 * universities.length };
    const style = window.getComputedStyle(container.firstElementChild as HTMLElement);
    const gap = parseFloat(style.columnGap || style.gap || '20') || 20;
    const step = card.offsetWidth + gap;
    return { step, oneSetWidth: step * universities.length };
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Start in the second set so scrolling backwards (left) works seamlessly right away
    const initMetrics = getCardMetrics(container);
    if (container.scrollLeft === 0) {
      container.scrollLeft = initMetrics.oneSetWidth;
    }

    let animationFrameId: number;
    let lastTime: number | null = null;
    const speed = 40; // continuous pixels per second without pausing or stopping

    const scroll = (currentTime: number) => {
      if (lastTime === null) lastTime = currentTime;
      // Cap delta time to prevent jumps when returning from background tabs
      const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      if (!isHoveredRef.current && container) {
        const { oneSetWidth } = getCardMetrics(container);

        container.scrollLeft += speed * deltaTime;

        // When passing the 2nd set, seamlessly normalize back by oneSetWidth
        if (container.scrollLeft >= oneSetWidth * 2) {
          container.scrollLeft -= oneSetWidth;
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [universities.length]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const { step, oneSetWidth } = getCardMetrics(container);
    const scrollAmount = step * 2;

    if (direction === 'right') {
      if (container.scrollLeft >= oneSetWidth * 2) {
        container.scrollLeft -= oneSetWidth;
      }
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      if (container.scrollLeft <= oneSetWidth) {
        container.scrollLeft += oneSetWidth;
      }
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
              PARTNER UNIVERSITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228] tracking-tight">
              YOUR FUTURE STARTS AT THE RIGHT UNIVERSITY
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Explore leading global universities and find the right fit for your goals.
            </p>
          </div>
          <Link
            to="/destinations"
            className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A059] hover:text-[#071228] transition-colors"
          >
            <span>View All Universities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Carousel Row with Arrows */}
        <div className="relative flex items-center justify-between gap-3 sm:gap-4">
          <button
            onClick={() => handleScroll('left')}
            onMouseEnter={() => { isHoveredRef.current = true; }}
            onMouseLeave={() => { isHoveredRef.current = false; }}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[#071228] hover:border-[#C5A059] hover:bg-slate-50 flex items-center justify-center shadow-2xs hover:shadow-sm transition-all shrink-0 cursor-pointer"
            aria-label="Previous universities"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div
            ref={scrollRef}
            onMouseEnter={() => { isHoveredRef.current = true; }}
            onMouseLeave={() => { isHoveredRef.current = false; }}
            onTouchStart={() => { isHoveredRef.current = true; }}
            onTouchEnd={() => { isHoveredRef.current = false; }}
            className="flex-1 overflow-x-auto no-scrollbar py-2"
          >
            <div className="flex items-center gap-4 sm:gap-5 w-max">
              {displayUniversities.map((u, i) => (
                <div
                  key={i}
                  data-university-card
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#FDFBF7] border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-[#C5A059] transition-all duration-200 w-36 h-24 text-center shrink-0"
                >
                  <span className={`font-display font-black text-sm ${u.color} tracking-tight leading-tight`}>
                    {u.name}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 font-medium">
                    {u.country}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleScroll('right')}
            onMouseEnter={() => { isHoveredRef.current = true; }}
            onMouseLeave={() => { isHoveredRef.current = false; }}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[#071228] hover:border-[#C5A059] hover:bg-slate-50 flex items-center justify-center shadow-2xs hover:shadow-sm transition-all shrink-0 cursor-pointer"
            aria-label="Next universities"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniversitiesSection;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site';

interface RouteMeta {
  title: string;
  description: string;
  canonicalPath: string;
  noIndex?: boolean;
}

const STATIC_ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: 'Aegis Overseas - Study Abroad Consultants | Global University Admissions',
    description: 'Premier global education consultancy guiding Indian students to top universities across the UK, USA, Canada, Australia, Germany, Ireland, and New Zealand.',
    canonicalPath: '/'
  },
  '/about': {
    title: 'About Us - Global Education Leadership & Mission | Aegis Overseas',
    description: 'Learn about Aegis Overseas, our 98.7% visa success track record, leadership team, and student-first study abroad counseling approach.',
    canonicalPath: '/about'
  },
  '/contact': {
    title: 'Contact Us - Hyderabad, Bangalore & Vijayawada Offices | Aegis Overseas',
    description: 'Get in touch with Aegis Overseas counselors in Hyderabad, Bangalore, and Vijayawada. Book an appointment or call +44 78929 34567.',
    canonicalPath: '/contact'
  },
  '/consultation': {
    title: 'Book Free Study Abroad Consultation | Aegis Overseas',
    description: 'Schedule a free 1-on-1 personalized profile evaluation with expert overseas education advisors for Fall/Spring university intakes.',
    canonicalPath: '/consultation'
  },
  '/book-consultation': {
    title: 'Book Free Study Abroad Consultation | Aegis Overseas',
    description: 'Schedule a free 1-on-1 personalized profile evaluation with expert overseas education advisors for Fall/Spring university intakes.',
    canonicalPath: '/consultation'
  },
  '/careers': {
    title: 'Careers - Join the Global Admissions Advisory Team | Aegis Overseas',
    description: 'Explore exciting career opportunities in overseas education counseling, visa compliance, and university relationship management.',
    canonicalPath: '/careers'
  },
  '/study-abroad': {
    title: 'Study Abroad Complete Guide - Step-by-Step Roadmap | Aegis Overseas',
    description: 'Comprehensive guide to studying abroad: university shortlisting, entrance exams, statement of purpose, visa filings, and post-arrival support.',
    canonicalPath: '/study-abroad'
  },
  '/faq': {
    title: 'Frequently Asked Questions (FAQ) - Admissions & Visas | Aegis Overseas',
    description: 'Clear answers to common questions about study abroad budgets, work rights, English language tests, post-study work permits, and scholarships.',
    canonicalPath: '/faq'
  },
  '/faqs': {
    title: 'Frequently Asked Questions (FAQ) - Admissions & Visas | Aegis Overseas',
    description: 'Clear answers to common questions about study abroad budgets, work rights, English language tests, post-study work permits, and scholarships.',
    canonicalPath: '/faq'
  },
  '/destinations': {
    title: 'Study Abroad Destinations - UK, USA, Canada, Australia, Germany & More | Aegis Overseas',
    description: 'Compare leading study destinations worldwide: tuition fees, living expenses, post-study work visas (PSW), and top university rankings.',
    canonicalPath: '/destinations'
  },
  '/destinations/uk': {
    title: 'Study in the UK - Top Universities & 2-Year Graduate Visa | Aegis Overseas',
    description: 'Comprehensive guide to studying in the United Kingdom: Russell Group universities, 1-year master’s programs, and Graduate Route work visas.',
    canonicalPath: '/destinations/uk'
  },
  '/destinations/usa': {
    title: 'Study in the USA - STEM OPT Extension & Admissions | Aegis Overseas',
    description: 'Navigate US university admissions, 36-month STEM OPT work authorization, F-1 visa interviews, and university assistantships.',
    canonicalPath: '/destinations/usa'
  },
  '/destinations/canada': {
    title: 'Study in Canada - DLI Universities & PGWP Work Permits | Aegis Overseas',
    description: 'Explore top Canadian universities and colleges, SDS visa requirements, and up to 3-year Post-Graduation Work Permit (PGWP) pathways.',
    canonicalPath: '/destinations/canada'
  },
  '/destinations/australia': {
    title: 'Study in Australia - Group of Eight Universities & Work Visas | Aegis Overseas',
    description: 'Discover Australian higher education, CRICOS accredited courses, GTE requirements, and extended post-study work rights.',
    canonicalPath: '/destinations/australia'
  },
  '/destinations/germany': {
    title: 'Study in Germany - Free Tuition Universities & APS Guide | Aegis Overseas',
    description: 'Step-by-step guidance for tuition-free public universities in Germany, English-taught STEM courses, APS verification, and Blocked Accounts.',
    canonicalPath: '/destinations/germany'
  },
  '/destinations/ireland': {
    title: 'Study in Ireland - European Tech Hub & 2-Year Stamp 1G | Aegis Overseas',
    description: 'Launch your career in Dublin’s Silicon Docks with a 1-year master’s degree and 2-year Stamp 1G post-study work permit.',
    canonicalPath: '/destinations/ireland'
  },
  '/destinations/new-zealand': {
    title: 'Study in New Zealand - Top Ranked Universities & Green List | Aegis Overseas',
    description: 'Pursue internationally recognized degrees in New Zealand with post-study work opportunities aligned to the Long Term Skill Shortage list.',
    canonicalPath: '/destinations/new-zealand'
  },
  '/destinations/europe': {
    title: 'Study in Europe - Schengen Countries & Low Tuition Degrees | Aegis Overseas',
    description: 'Study across France, Netherlands, Sweden, and Italy with affordable tuition, English-medium curricula, and Europe-wide career mobility.',
    canonicalPath: '/destinations/europe'
  },
  '/courses': {
    title: 'Study Abroad Courses & Master’s Degrees Abroad | Aegis Overseas',
    description: 'Search industry-aligned undergraduate and postgraduate degrees in computer science, business, engineering, healthcare, and finance.',
    canonicalPath: '/courses'
  },
  '/services': {
    title: '360° Study Abroad Services - Counselling to Relocation | Aegis Overseas',
    description: 'End-to-end guidance: profile evaluation, SOP drafting, university applications, education loans, visa interview prep, and forex.',
    canonicalPath: '/services'
  },
  '/scholarships': {
    title: 'International Scholarships for Indian Students | Aegis Overseas',
    description: 'Explore government and university scholarships including Chevening, Fulbright, DAAD, and international tuition fee waiver grants.',
    canonicalPath: '/scholarships'
  },
  '/test-preparation': {
    title: 'IELTS, PTE, TOEFL, GRE & GMAT Test Preparation | Aegis Overseas',
    description: 'Achieve your target test scores with certified mentor training, diagnostic practice tests, and structured prep strategies.',
    canonicalPath: '/test-preparation'
  },
  '/student-stories': {
    title: 'Student Success Stories & Visa Testimonials | Aegis Overseas',
    description: 'Read verified student journeys and visa grant experiences from students now studying at prestigious universities worldwide.',
    canonicalPath: '/student-stories'
  },
  '/blog': {
    title: 'Study Abroad Blog - Admissions Tips, Visas & Job Guides | Aegis Overseas',
    description: 'Expert analysis on student visa policies, post-study work rights, cost of living breakdowns, and high-demand international careers.',
    canonicalPath: '/blog'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Aegis Overseas',
    description: 'Our commitment to protecting your personal data, contact details, and academic records in accordance with global data regulations.',
    canonicalPath: '/privacy-policy'
  },
  '/privacy': {
    title: 'Privacy Policy | Aegis Overseas',
    description: 'Our commitment to protecting your personal data, contact details, and academic records in accordance with global data regulations.',
    canonicalPath: '/privacy-policy'
  },
  '/terms': {
    title: 'Terms and Conditions | Aegis Overseas',
    description: 'Terms of service and student advisory conditions governing the use of the Aegis Overseas platform and consulting services.',
    canonicalPath: '/terms'
  },
  '/cookie-policy': {
    title: 'Cookie Policy | Aegis Overseas',
    description: 'Details on how Aegis Overseas uses browser cookies to deliver an optimized, secure user browsing experience.',
    canonicalPath: '/cookie-policy'
  }
};

export const RouteSEOTracker: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Admin routes are private and should never be indexed by search engines
    if (pathname.startsWith('/admin')) {
      document.title = 'Admin Portal | Aegis Overseas';
      
      const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
        let meta = document.querySelector(selector) as HTMLMetaElement | null;
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(attrName, attrVal);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };
      
      setMetaTag('meta[name="robots"]', 'name', 'robots', 'noindex, nofollow');
      return;
    }

    // Static route match
    const staticMeta = STATIC_ROUTE_META[pathname];
    if (staticMeta) {
      document.title = staticMeta.title;

      const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
        let meta = document.querySelector(selector) as HTMLMetaElement | null;
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(attrName, attrVal);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      const setLinkTag = (rel: string, href: string) => {
        let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
        if (!link) {
          link = document.createElement('link');
          link.rel = rel;
          document.head.appendChild(link);
        }
        link.href = href;
      };

      const canonicalUrl = `${siteConfig.url}${staticMeta.canonicalPath}`;

      setLinkTag('canonical', canonicalUrl);
      setMetaTag('meta[name="description"]', 'name', 'description', staticMeta.description);
      setMetaTag('meta[name="robots"]', 'name', 'robots', staticMeta.noIndex ? 'noindex, nofollow' : 'index, follow');

      setMetaTag('meta[property="og:title"]', 'property', 'og:title', staticMeta.title);
      setMetaTag('meta[property="og:description"]', 'property', 'og:description', staticMeta.description);
      setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);

      setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', staticMeta.title);
      setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', staticMeta.description);
      setMetaTag('meta[name="twitter:url"]', 'name', 'twitter:url', canonicalUrl);
    }
  }, [pathname]);

  return null;
};

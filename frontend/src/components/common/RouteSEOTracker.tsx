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
    title: 'Study Abroad Consultants in India | Aegis Overseas',
    description: 'Explore study abroad options with Aegis Overseas. Get expert guidance on university selection, admissions, scholarships, and student visas for UK, USA, Canada, Australia, Germany, and Ireland.',
    canonicalPath: '/'
  },
  '/about': {
    title: 'About Aegis Overseas Education Services | Leadership & Vision',
    description: 'Learn about Aegis Overseas, founded with over 25 years of educational heritage, UK postgraduate leadership, and student-centred counselling.',
    canonicalPath: '/about'
  },
  '/contact': {
    title: 'Contact Aegis Overseas | Study Abroad Offices in AP & Telangana',
    description: 'Reach out to Aegis Overseas centers in Hyderabad, Vizag, Nellore, Tirupati, and Vijayawada. Book a free 1-on-1 counseling session in-person or online.',
    canonicalPath: '/contact'
  },
  '/consultation': {
    title: 'Book Free Study Abroad Consultation | Aegis Overseas',
    description: 'Schedule a free 1-on-1 personalized profile evaluation with expert overseas education advisors for Fall and Spring university intakes.',
    canonicalPath: '/consultation'
  },
  '/book-consultation': {
    title: 'Book Free Study Abroad Consultation | Aegis Overseas',
    description: 'Schedule a free 1-on-1 personalized profile evaluation with expert overseas education advisors for Fall and Spring university intakes.',
    canonicalPath: '/consultation'
  },
  '/careers': {
    title: 'Careers - Join the Global Admissions Advisory Team | Aegis Overseas',
    description: 'Explore career opportunities in overseas education counseling, visa compliance, and university relationship management at Aegis Overseas.',
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
    title: 'Study Abroad Destinations | Best Countries to Study | Aegis Overseas',
    description: 'Compare leading study abroad destinations: UK, USA, Canada, Australia, Germany, Ireland, and New Zealand. Discover top universities, living costs, and post-study work visas.',
    canonicalPath: '/destinations'
  },
  '/destinations/uk': {
    title: 'Study in UK for Indian Students | Admissions & Visas | Aegis Overseas',
    description: 'Complete guide for Indian students studying in the UK: Russell Group universities, 1-year master’s courses, admissions, fees, and 2-year Graduate Route work visas.',
    canonicalPath: '/destinations/uk'
  },
  '/destinations/usa': {
    title: 'Study in USA for Indian Students | Admissions & Visas | Aegis Overseas',
    description: 'Study in the USA with Aegis Overseas. Explore top US universities, STEM OPT 3-year work extension, F-1 visa preparation, and scholarship opportunities.',
    canonicalPath: '/destinations/usa'
  },
  '/destinations/canada': {
    title: 'Study in Canada for Indian Students | DLI & PGWP | Aegis Overseas',
    description: 'Pursue high-demand degrees in Canada. Learn about designated learning institutions (DLIs), SDS visa processing, and up to 3-year Post-Graduation Work Permits.',
    canonicalPath: '/destinations/canada'
  },
  '/destinations/australia': {
    title: 'Study in Australia for Indian Students | Go8 Universities | Aegis Overseas',
    description: 'Discover world-class Australian education: Group of Eight universities, CRICOS registered programs, Genuine Student (GS) criteria, and post-study work rights.',
    canonicalPath: '/destinations/australia'
  },
  '/destinations/germany': {
    title: 'Study in Germany for Indian Students | Free Tuition & APS | Aegis Overseas',
    description: 'Study tuition-free at German public universities. Step-by-step guidance on APS certificate verification, English-taught programs, Blocked Accounts, and visas.',
    canonicalPath: '/destinations/germany'
  },
  '/destinations/ireland': {
    title: 'Study in Ireland for Indian Students | Silicon Docks & PSW | Aegis Overseas',
    description: 'Accelerate your career in Ireland with 1-year master’s programs and 2-year Stamp 1G graduate work visas across Dublin’s global technology cluster.',
    canonicalPath: '/destinations/ireland'
  },
  '/destinations/new-zealand': {
    title: 'Study in New Zealand for Indian Students | Aegis Overseas',
    description: 'Study in New Zealand at globally ranked universities. Complete advisory on Green List skill pathways, admissions, student visas, and work opportunities.',
    canonicalPath: '/destinations/new-zealand'
  },
  '/destinations/europe': {
    title: 'Study in Europe for Indian Students | Low Tuition Degrees | Aegis Overseas',
    description: 'Explore affordable English-taught bachelor’s and master’s programs in France, Sweden, Netherlands, and Italy with Schengen mobility.',
    canonicalPath: '/destinations/europe'
  },
  '/courses': {
    title: 'Courses to Study Abroad | Top Master’s & Bachelor’s | Aegis Overseas',
    description: 'Find the right study abroad course: MS in Computer Science, Data Science, MBA, Engineering, Healthcare, and Finance across top-ranked universities.',
    canonicalPath: '/courses'
  },
  '/services': {
    title: 'Study Abroad Consultancy Services | 360° Guidance | Aegis Overseas',
    description: 'Comprehensive overseas education services: profile evaluation, university shortlisting, SOP editing, loan sanction, visa file defense, and pre-departure support.',
    canonicalPath: '/services'
  },
  '/scholarships': {
    title: 'Study Abroad Scholarships for Indian Students | Aegis Overseas',
    description: 'Explore full and partial scholarships for Indian students: university merit awards, Chevening, Fulbright-Nehru, DAAD, and tuition fee waiver schemes.',
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

      // JSON-LD Structured Data: EducationalOrganization + LocalBusiness + BreadcrumbList
      let scriptTag = document.getElementById('aegis-structured-data') as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'aegis-structured-data';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }

      const structuredData = [
        {
          '@context': 'https://schema.org',
          '@type': ['EducationalOrganization', 'LocalBusiness'],
          '@id': 'https://aegisoverseas.com/#organization',
          name: 'Aegis Overseas Education Services Pvt. Ltd.',
          alternateName: 'Aegis Overseas',
          url: 'https://aegisoverseas.com',
          logo: 'https://aegisoverseas.com/logos/aegis-logo.svg',
          image: 'https://aegisoverseas.com/images/hero/hero-panorama.webp',
          telephone: '+44 78929 34567',
          email: 'info@aegisoverseas.com',
          priceRange: '₹₹',
          sameAs: [
            'https://www.instagram.com/aegis.overseas?psln=c2NsbWk5aW9pbm4x',
            'https://www.facebook.com/profile.php?id=61593900064865'
          ],
          founder: [
            {
              '@type': 'Person',
              name: 'Haswanth Reddy Battepati',
              jobTitle: 'Founder, Chairman & Director'
            },
            {
              '@type': 'Person',
              name: 'Gopal Reddy Somala',
              jobTitle: 'Founder & Head of Aegis'
            }
          ],
          department: siteConfig.offices.map((off) => ({
            '@type': 'LocalBusiness',
            name: `Aegis Overseas - ${off.title || off.city}`,
            address: {
              '@type': 'PostalAddress',
              streetAddress: off.address,
              addressRegion: off.state,
              addressCountry: 'IN'
            },
            telephone: '+44 78929 34567'
          }))
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': 'https://aegisoverseas.com/#website',
          url: 'https://aegisoverseas.com',
          name: 'Aegis Overseas',
          description: 'Premier Study Abroad Education Consultants in India',
          publisher: {
            '@id': 'https://aegisoverseas.com/#organization'
          }
        }
      ];

      // Add Breadcrumbs if not homepage
      if (pathname !== '/') {
        const segments = pathname.split('/').filter(Boolean);
        const breadcrumbItems = [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://aegisoverseas.com/'
          }
        ];

        let accPath = '';
        segments.forEach((seg, idx) => {
          accPath += `/${seg}`;
          breadcrumbItems.push({
            '@type': 'ListItem',
            position: idx + 2,
            name: seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, ' '),
            item: `https://aegisoverseas.com${accPath}`
          });
        });

        structuredData.push({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems
        } as any);
      }

      scriptTag.textContent = JSON.stringify(structuredData);
    }
  }, [pathname]);

  return null;
};

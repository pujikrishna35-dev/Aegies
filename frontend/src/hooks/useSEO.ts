import { useEffect } from 'react';
import { siteConfig } from '../config/site';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  noIndex?: boolean;
  ogImage?: string;
}

export const useSEO = ({
  title,
  description,
  canonicalPath,
  noIndex = false,
  ogImage
}: SEOProps) => {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title 
      ? `${title} | ${siteConfig.name}` 
      : `${siteConfig.name} - Study Abroad Consultants | Global University Admissions`;
    document.title = formattedTitle;

    // Helper to set or create meta tag
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let meta = document.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrVal);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Helper to set or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // 2. Canonical URL (always HTTPS and canonical domain)
    const canonicalUrl = canonicalPath
      ? `${siteConfig.url}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`
      : `${siteConfig.url}${window.location.pathname}`;
    setLinkTag('canonical', canonicalUrl);

    // 3. Description
    const metaDescription = description || siteConfig.description;
    setMetaTag('meta[name="description"]', 'name', 'description', metaDescription);

    // 4. Robots
    const robotsContent = noIndex ? 'noindex, nofollow' : 'index, follow';
    setMetaTag('meta[name="robots"]', 'name', 'robots', robotsContent);

    // 5. OpenGraph
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', formattedTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', metaDescription);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    if (ogImage) {
      setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    }

    // 6. Twitter
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', formattedTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', metaDescription);
    setMetaTag('meta[name="twitter:url"]', 'name', 'twitter:url', canonicalUrl);
    if (ogImage) {
      setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
    }
  }, [title, description, canonicalPath, noIndex, ogImage]);
};

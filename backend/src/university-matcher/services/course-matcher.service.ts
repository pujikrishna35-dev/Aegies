import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseMatcherService {
  // Course taxonomy and relatedness map
  private readonly synonyms: Record<string, string[]> = {
    'computer science': ['cs', 'computing', 'software engineering', 'computer science & it', 'advanced computer science', 'information technology'],
    'data science': ['data science & ai', 'artificial intelligence', 'machine learning', 'data analytics', 'big data'],
    'information technology': ['it', 'information systems', 'computer systems', 'cybersecurity', 'cloud computing'],
    'business administration': ['mba', 'management', 'business & management', 'global mba', 'international business'],
    'finance': ['accounting & finance', 'financial management', 'fintech', 'banking & finance'],
    'mechanical engineering': ['mechanical', 'automotive engineering', 'aerospace engineering', 'manufacturing'],
    'civil engineering': ['civil', 'structural engineering', 'construction management'],
    'electrical engineering': ['electrical & electronics', 'electronics engineering', 'telecommunications'],
    'engineering': ['engineering', 'mechanical engineering', 'civil engineering', 'electrical engineering', 'software engineering'],
    'healthcare': ['public health', 'healthcare management', 'health sciences', 'medicine'],
    'nursing': ['nursing practice', 'advanced nursing', 'clinical nursing'],
    'pharmacy': ['pharmacology', 'pharmaceutical sciences'],
    'architecture': ['architectural design', 'urban planning', 'interior architecture'],
    'hospitality': ['hospitality management', 'tourism & hospitality', 'hotel administration'],
  };

  calculateCourseMatch(userCourse: string, programCourse: string, programCategory: string): { score: number; reason: string } {
    if (!userCourse) {
      return { score: 100, reason: 'Course preference open' };
    }

    const u = userCourse.toLowerCase().trim();
    const p = programCourse.toLowerCase().trim();
    const c = programCategory.toLowerCase().trim();

    // 1. Exact match or direct containment
    if (p === u || p.includes(u) || u.includes(p)) {
      return { score: 100, reason: `Exact match for ${userCourse}` };
    }

    // 2. Strongly related via synonym map
    for (const [key, related] of Object.entries(this.synonyms)) {
      const userMatchesKey = u.includes(key) || key.includes(u);
      const programMatchesKey = p.includes(key) || key.includes(p) || c.includes(key);

      if (userMatchesKey && programMatchesKey) {
        return { score: 90, reason: `Directly aligned curriculum with ${userCourse}` };
      }

      if (userMatchesKey) {
        for (const rel of related) {
          if (p.includes(rel) || c.includes(rel)) {
            return { score: 85, reason: `Specialized specialization in ${userCourse}` };
          }
        }
      }
    }

    // 3. Category match
    if (c.includes(u) || u.includes(c)) {
      return { score: 70, reason: `Aligned within the ${programCategory} department` };
    }

    // 4. STEM / General category overlap
    if ((u.includes('engineer') && c.includes('engineer')) || (u.includes('business') && c.includes('business'))) {
      return { score: 60, reason: `Related discipline in ${programCategory}` };
    }

    return { score: 20, reason: `Cross-disciplinary program related to ${userCourse}` };
  }
}

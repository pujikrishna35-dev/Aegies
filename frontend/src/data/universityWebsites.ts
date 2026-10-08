// Official website URLs for top-ranked universities across all destination countries
export const TOP_UNIVERSITY_WEBSITES: Record<string, string> = {
  // United Kingdom
  'university-of-oxford': 'https://www.ox.ac.uk',
  'imperial-college-london': 'https://www.imperial.ac.uk',
  'university-of-edinburgh': 'https://www.ed.ac.uk',
  'university-of-manchester': 'https://www.manchester.ac.uk',
  'university-of-warwick': 'https://warwick.ac.uk',
  'university-of-birmingham': 'https://www.birmingham.ac.uk',
  'university-of-bristol': 'https://www.bristol.ac.uk',
  'university-of-glasgow': 'https://www.gla.ac.uk',

  // United States
  'mit': 'https://www.mit.edu',
  'massachusetts-institute-of-technology': 'https://www.mit.edu',
  'stanford-university': 'https://www.stanford.edu',
  'northeastern-university': 'https://www.northeastern.edu',
  'university-of-southern-california': 'https://www.usc.edu',
  'usc': 'https://www.usc.edu',
  'arizona-state-university': 'https://www.asu.edu',
  'asu': 'https://www.asu.edu',

  // Canada
  'university-of-toronto': 'https://www.utoronto.ca',
  'mcgill-university': 'https://www.mcgill.ca',
  'university-of-british-columbia': 'https://www.ubc.ca',
  'ubc': 'https://www.ubc.ca',
  'university-of-waterloo': 'https://uwaterloo.ca',
  'mcmaster-university': 'https://www.mcmaster.ca',

  // Australia
  'university-of-melbourne': 'https://study.unimelb.edu.au',
  'the-university-of-sydney': 'https://www.sydney.edu.au',
  'university-of-sydney': 'https://www.sydney.edu.au',
  'unsw-sydney': 'https://www.unsw.edu.au',
  'anu': 'https://www.anu.edu.au',
  'australian-national-university': 'https://www.anu.edu.au',
  'monash-university': 'https://www.monash.edu',

  // Germany
  'tum': 'https://www.tum.de',
  'technical-university-of-munich': 'https://www.tum.de',
  'lmu-munich': 'https://www.lmu.de',
  'ludwig-maximilians-universitat-munchen': 'https://www.lmu.de',
  'heidelberg-university': 'https://www.uni-heidelberg.de',
  'rwth-aachen': 'https://www.rwth-aachen.de',
  'rwth-aachen-university': 'https://www.rwth-aachen.de',
  'tu-berlin': 'https://www.tu.berlin',
  'technical-university-of-berlin': 'https://www.tu.berlin',

  // Ireland
  'trinity-college-dublin': 'https://www.tcd.ie',
  'ucd': 'https://www.ucd.ie',
  'university-college-dublin': 'https://www.ucd.ie',
  'university-of-galway': 'https://www.universityofgalway.ie',
  'ucc': 'https://www.ucc.ie',
  'university-college-cork': 'https://www.ucc.ie',
  'dcu': 'https://www.dcu.ie',
  'dublin-city-university': 'https://www.dcu.ie',

  // New Zealand
  'university-of-auckland': 'https://www.auckland.ac.nz',
  'university-of-otago': 'https://www.otago.ac.nz',
  'victoria-university-of-wellington': 'https://www.wgtn.ac.nz',
  'university-of-canterbury': 'https://www.canterbury.ac.nz',

  // Europe (Schengen)
  'institut-polytechnique-paris': 'https://www.ip-paris.fr',
  'institut-polytechnique-de-paris': 'https://www.ip-paris.fr',
  'politecnico-di-milano': 'https://www.polimi.it',
  'tu-delft': 'https://www.tudelft.nl',
  'delft-university-of-technology': 'https://www.tudelft.nl',
  'kth-sweden': 'https://www.kth.se',
  'kth-royal-institute-of-technology': 'https://www.kth.se',
};

function normalizeKey(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, '') // remove parenthetical like (MIT), (TUM)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getUniversityWebsite(name: string, slug?: string): string {
  if (slug) {
    const slugKey = normalizeKey(slug);
    if (TOP_UNIVERSITY_WEBSITES[slugKey]) {
      return TOP_UNIVERSITY_WEBSITES[slugKey];
    }
  }

  const nameKey = normalizeKey(name);
  if (TOP_UNIVERSITY_WEBSITES[nameKey]) {
    return TOP_UNIVERSITY_WEBSITES[nameKey];
  }

  // Partial match fallback
  for (const [key, url] of Object.entries(TOP_UNIVERSITY_WEBSITES)) {
    if (nameKey.includes(key) || key.includes(nameKey)) {
      return url;
    }
  }

  return '#';
}

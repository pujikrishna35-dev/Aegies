export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  children?: { title: string; href: string; description?: string }[];
}

export const navigationConfig: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Destinations",
    href: "/destinations",
    children: [
      { title: "United Kingdom", href: "/destinations/uk", description: "World-class education with 2-yr Graduate Visa" },
      { title: "United States", href: "/destinations/usa", description: "Top Ivy Leagues & 3-yr STEM OPT" },
      { title: "Canada", href: "/destinations/canada", description: "Affordable tuition with up to 3-yr PGWP" },
      { title: "Australia", href: "/destinations/australia", description: "Group of Eight universities & vibrant life" },
      { title: "Germany", href: "/destinations/germany", description: "Zero-tuition public universities & engineering" },
      { title: "Ireland", href: "/destinations/ireland", description: "European tech hub with 2-yr stay back" },
      { title: "New Zealand", href: "/destinations/new-zealand", description: "Globally ranked institutions & pristine nature" },
      { title: "Europe", href: "/destinations/europe", description: "Schengen mobility & historic universities" }
    ]
  },
  { title: "Universities", href: "/universities" },
  { title: "Courses", href: "/courses" },
  {
    title: "Services",
    href: "/services",
    children: [
      { title: "Career Counselling", href: "/services/counselling" },
      { title: "University Shortlisting", href: "/services/university-selection" },
      { title: "Application & SOP Review", href: "/services/applications" },
      { title: "Scholarships", href: "/services/scholarships" },
      { title: "Education Loans", href: "/services/education-loans" },
      { title: "Visa Guidance", href: "/services/visa" },
      { title: "Student Accommodation", href: "/services/accommodation" },
      { title: "Forex & Cards", href: "/services/forex" },
      { title: "Pre-Departure Briefing", href: "/services/pre-departure" }
    ]
  },
  { title: "Test Prep", href: "/test-preparation" },
  { title: "Student Stories", href: "/student-stories" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" }
];

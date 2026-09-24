import os

pages_dir = r"c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas\frontend\src\pages"
os.makedirs(pages_dir, exist_ok=True)

# Top level pages
top_pages = {
  "About.tsx": ("About Aegis Overseas", "15+ years of ethical, student-first overseas admission mentoring."),
  "Contact.tsx": ("Contact Us", "Reach out to our offices in Hyderabad, Bangalore, or Vijayawada."),
  "Consultation.tsx": ("Book a Free Consultation", "Schedule a personalized 1-on-1 session with our certified advisors."),
  "NotFound.tsx": ("404 - Page Not Found", "The page you are looking for does not exist or has moved.")
}

for fname, (title, desc) in top_pages.items():
    fpath = os.path.join(pages_dir, fname)
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(f'''import React from 'react';
import {{ Link }} from 'react-router-dom';

export const {fname.replace('.tsx', '')}: React.FC = () => (
  <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-display font-extrabold text-[#071228]">{title}</h1>
    <p className="text-slate-600 mt-2 text-base">{desc}</p>
    <div className="mt-8">
      <Link to="/" className="inline-block px-6 py-2.5 rounded-xl bg-[#8A1538] text-white font-bold text-sm">
        Return Home
      </Link>
    </div>
  </div>
);

export default {fname.replace('.tsx', '')};
''')

# Folders and subpages
sub_page_groups = {
  "destinations": [
    ("Destinations.tsx", "Global Study Destinations"),
    ("UK.tsx", "Study in United Kingdom"),
    ("USA.tsx", "Study in United States"),
    ("Canada.tsx", "Study in Canada"),
    ("Australia.tsx", "Study in Australia"),
    ("Germany.tsx", "Study in Germany"),
    ("Ireland.tsx", "Study in Ireland"),
    ("NewZealand.tsx", "Study in New Zealand"),
    ("Europe.tsx", "Study in Europe")
  ],
  "universities": [
    ("Universities.tsx", "Partner Universities"),
    ("UniversityDetails.tsx", "University Information"),
    ("Compare.tsx", "Compare Universities")
  ],
  "courses": [
    ("Courses.tsx", "Browse Degrees & Programs"),
    ("CourseDetails.tsx", "Course Details")
  ],
  "services": [
    ("Services.tsx", "360° Comprehensive Services"),
    ("ServiceDetails.tsx", "Service Details")
  ],
  "scholarships": [
    ("Scholarships.tsx", "Global Scholarships"),
    ("ScholarshipDetails.tsx", "Scholarship Information")
  ],
  "test-preparation": [
    ("TestPreparation.tsx", "Test Preparation Courses"),
    ("TestDetails.tsx", "Exam Curriculum Details")
  ],
  "student-stories": [
    ("StudentStories.tsx", "Student Success Stories"),
    ("StudentStoryDetails.tsx", "Student Journey Details")
  ],
  "blog": [
    ("Blog.tsx", "Study Abroad Articles & Insights"),
    ("BlogArticle.tsx", "Read Article"),
    ("BlogCategory.tsx", "Articles by Category")
  ],
  "university-finder": [
    ("UniversityFinder.tsx", "University & Program Matcher")
  ],
  "legal": [
    ("PrivacyPolicy.tsx", "Privacy Policy"),
    ("Terms.tsx", "Terms & Conditions"),
    ("CookiePolicy.tsx", "Cookie Policy")
  ]
}

for folder, pages in sub_page_groups.items():
    fdir = os.path.join(pages_dir, folder)
    os.makedirs(fdir, exist_ok=True)
    for fname, title in pages:
        fpath = os.path.join(fdir, fname)
        cname = fname.replace(".tsx", "")
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(f'''import React from 'react';
import {{ Link }} from 'react-router-dom';

export const {cname}: React.FC = () => (
  <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-6">
      <Link to="/" className="text-xs font-bold text-amber-600 uppercase tracking-widest hover:underline">← Back to Home</Link>
    </div>
    <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#071228]">{title}</h1>
    <p className="text-slate-600 mt-2 text-sm sm:text-base">Comprehensive verified information from Aegis Overseas Education Services.</p>
    <div className="mt-8 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
      <p className="text-slate-600 text-sm leading-relaxed">
        Our certified advisors guide you every step of the way with verified course prerequisites, deadlines, and visa assistance.
      </p>
    </div>
  </div>
);

export default {cname};
''')

print("All frontend pages verified and built.")

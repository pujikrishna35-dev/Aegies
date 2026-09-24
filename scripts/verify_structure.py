import os

base = r"c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas"

expected = [
    "README.md",
    ".gitignore",
    ".env.example",

    # Frontend root
    "frontend/package.json",
    "frontend/vite.config.ts",
    "frontend/tsconfig.json",
    "frontend/tsconfig.app.json",
    "frontend/tsconfig.node.json",
    "frontend/eslint.config.js",
    "frontend/index.html",

    # Frontend public
    "frontend/public/logos/aegis-logo.svg",
    "frontend/public/logos/aegis-logo-white.svg",
    "frontend/public/logos/aegis-symbol.svg",
    "frontend/public/images/hero/airplane.png",
    "frontend/public/images/hero/world-map.svg",

    # Frontend src
    "frontend/src/main.tsx",
    "frontend/src/App.tsx",
    "frontend/src/index.css",

    # Frontend pages
    "frontend/src/pages/Home/Home.tsx",
    "frontend/src/pages/About/About.tsx",
    "frontend/src/pages/Destinations/Destinations.tsx",
    "frontend/src/pages/Destinations/UK.tsx",
    "frontend/src/pages/Destinations/USA.tsx",
    "frontend/src/pages/Destinations/Canada.tsx",
    "frontend/src/pages/Destinations/Australia.tsx",
    "frontend/src/pages/Destinations/Germany.tsx",
    "frontend/src/pages/Destinations/Ireland.tsx",
    "frontend/src/pages/Destinations/NewZealand.tsx",
    "frontend/src/pages/Destinations/Europe.tsx",
    "frontend/src/pages/Universities/Universities.tsx",
    "frontend/src/pages/Universities/UniversityDetails.tsx",
    "frontend/src/pages/Universities/Compare.tsx",
    "frontend/src/pages/Courses/Courses.tsx",
    "frontend/src/pages/Courses/CourseDetails.tsx",
    "frontend/src/pages/Services/Services.tsx",
    "frontend/src/pages/Services/Counselling.tsx",
    "frontend/src/pages/Services/UniversitySelection.tsx",
    "frontend/src/pages/Services/Applications.tsx",
    "frontend/src/pages/Services/Scholarships.tsx",
    "frontend/src/pages/Services/EducationLoans.tsx",
    "frontend/src/pages/Services/Visa.tsx",
    "frontend/src/pages/Services/Accommodation.tsx",
    "frontend/src/pages/Services/Forex.tsx",
    "frontend/src/pages/Services/PreDeparture.tsx",
    "frontend/src/pages/Scholarships/Scholarships.tsx",
    "frontend/src/pages/TestPreparation/TestPreparation.tsx",
    "frontend/src/pages/StudentStories/StudentStories.tsx",
    "frontend/src/pages/Blog/Blog.tsx",
    "frontend/src/pages/UniversityFinder/UniversityFinder.tsx",
    "frontend/src/pages/Consultation/Consultation.tsx",
    "frontend/src/pages/Contact/Contact.tsx",
    "frontend/src/pages/Privacy/Privacy.tsx",
    "frontend/src/pages/Terms/Terms.tsx",

    # Frontend components layout
    "frontend/src/components/layout/Navbar.tsx",
    "frontend/src/components/layout/MobileMenu.tsx",
    "frontend/src/components/layout/Footer.tsx",
    "frontend/src/components/layout/ScrollToTop.tsx",

    # Frontend components home
    "frontend/src/components/home/Hero.tsx",
    "frontend/src/components/home/TrustStats.tsx",
    "frontend/src/components/home/DestinationsPreview.tsx",
    "frontend/src/components/home/UniversityFinder.tsx",
    "frontend/src/components/home/WhyAegis.tsx",
    "frontend/src/components/home/SupportJourney.tsx",
    "frontend/src/components/home/AegisJourney.tsx",
    "frontend/src/components/home/CoursesPreview.tsx",
    "frontend/src/components/home/ScholarshipsPreview.tsx",
    "frontend/src/components/home/TestPreparation.tsx",
    "frontend/src/components/home/UniversitiesPreview.tsx",
    "frontend/src/components/home/StudentSuccess.tsx",
    "frontend/src/components/home/AboutPreview.tsx",
    "frontend/src/components/home/Reviews.tsx",
    "frontend/src/components/home/FAQPreview.tsx",
    "frontend/src/components/home/BlogPreview.tsx",
    "frontend/src/components/home/FinalCTA.tsx",

    # Frontend hooks, services, types, config, utils
    "frontend/src/hooks/useAuth.ts",
    "frontend/src/hooks/useApi.ts",
    "frontend/src/hooks/useScroll.ts",
    "frontend/src/hooks/useDebounce.ts",
    "frontend/src/hooks/useUniversitySearch.ts",
    "frontend/src/services/api.ts",
    "frontend/src/services/auth.service.ts",
    "frontend/src/services/university.service.ts",
    "frontend/src/services/course.service.ts",
    "frontend/src/services/destination.service.ts",
    "frontend/src/services/scholarship.service.ts",
    "frontend/src/services/enquiry.service.ts",
    "frontend/src/services/consultation.service.ts",
    "frontend/src/services/blog.service.ts",
    "frontend/src/types/university.ts",
    "frontend/src/types/course.ts",
    "frontend/src/types/destination.ts",
    "frontend/src/types/scholarship.ts",
    "frontend/src/types/enquiry.ts",
    "frontend/src/types/consultation.ts",
    "frontend/src/types/blog.ts",
    "frontend/src/config/site.ts",
    "frontend/src/config/navigation.ts",
    "frontend/src/config/api.ts",
    "frontend/src/utils/formatters.ts",
    "frontend/src/utils/validators.ts",
    "frontend/src/utils/helpers.ts",

    # Backend
    "backend/package.json",
    "backend/tsconfig.json",
    "backend/nest-cli.json",
    "backend/.env",
    "backend/src/main.ts",
    "backend/src/app.module.ts",
    "backend/src/config/database.config.ts",
    "backend/src/config/app.config.ts",
    "backend/src/config/auth.config.ts",
    "backend/src/config/email.config.ts",
    "backend/src/config/whatsapp.config.ts",
    "backend/src/auth/auth.module.ts",
    "backend/src/users/users.module.ts",
    "backend/src/leads/leads.module.ts",
    "backend/src/students/students.module.ts",
    "backend/src/universities/universities.module.ts",
    "backend/prisma/schema.prisma",
    "backend/prisma/seed.ts",

    # Admin
    "admin/package.json",
    "admin/vite.config.ts",
    "admin/src/pages/Login/Login.tsx",
    "admin/src/pages/Dashboard/Dashboard.tsx",
    "admin/src/pages/Leads/Leads.tsx",
    "admin/src/pages/Students/Students.tsx",
    "admin/src/pages/Applications/Applications.tsx",
    "admin/src/pages/Universities/Universities.tsx",
    "admin/src/pages/Courses/Courses.tsx",
    "admin/src/pages/Destinations/Destinations.tsx",
    "admin/src/pages/Scholarships/Scholarships.tsx",
    "admin/src/pages/Services/Services.tsx",
    "admin/src/pages/Testimonials/Testimonials.tsx",
    "admin/src/pages/StudentStories/StudentStories.tsx",
    "admin/src/pages/Blog/Blog.tsx",
    "admin/src/pages/FAQs/FAQs.tsx",
    "admin/src/pages/Media/Media.tsx",
    "admin/src/pages/Consultations/Consultations.tsx",
    "admin/src/pages/Reports/Reports.tsx",
    "admin/src/pages/Notifications/Notifications.tsx",
    "admin/src/pages/Settings/Settings.tsx",

    # Database
    "database/seed/destinations.seed.ts",
    "database/seed/courses.seed.ts",
    "database/seed/universities.seed.ts",
    "database/seed/services.seed.ts",

    # Docs
    "docs/architecture.md",
    "docs/api.md",
    "docs/database.md",
    "docs/design-system.md",
    "docs/deployment.md",

    # Scripts
    "scripts/setup.sh",
    "scripts/seed.sh",
    "scripts/backup.sh",
]

missing = []
for rel in expected:
    target = os.path.join(base, rel.replace("/", os.sep))
    if not os.path.exists(target):
        missing.append(rel)

if missing:
    print(f"FAILED: {len(missing)} files missing:")
    for m in missing:
        print(f" - {m}")
else:
    print(f"SUCCESS: All {len(expected)} requested files and directories exist perfectly!")

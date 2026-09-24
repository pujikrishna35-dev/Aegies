import os

base = r"c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas"

checks = [
    # Root
    "README.md",
    ".gitignore",
    ".env.example",

    # Frontend Root
    "frontend/package.json",
    "frontend/vite.config.ts",
    "frontend/tsconfig.json",
    "frontend/tsconfig.app.json",
    "frontend/tsconfig.node.json",
    "frontend/eslint.config.js",
    "frontend/index.html",

    # Frontend Public
    "frontend/public/favicon/favicon.ico",
    "frontend/public/favicon/favicon-16x16.png",
    "frontend/public/favicon/favicon-32x32.png",
    "frontend/public/favicon/apple-touch-icon.png",
    "frontend/public/logo/aegis-logo.svg",
    "frontend/public/logo/aegis-logo-white.svg",
    "frontend/public/logo/aegis-icon.svg",
    "frontend/public/images/hero/hero-student.webp",
    "frontend/public/images/hero/hero-background.webp",
    "frontend/public/images/hero/world-map.svg",
    "frontend/public/images/hero/airplane.png",
    "frontend/public/images/destinations/uk.webp",
    "frontend/public/images/destinations/usa.webp",
    "frontend/public/images/destinations/canada.webp",
    "frontend/public/images/destinations/australia.webp",
    "frontend/public/images/destinations/germany.webp",
    "frontend/public/images/destinations/ireland.webp",
    "frontend/public/images/destinations/new-zealand.webp",
    "frontend/public/images/destinations/europe.webp",
    "frontend/public/flags/uk.svg",
    "frontend/public/flags/usa.svg",
    "frontend/public/flags/canada.svg",
    "frontend/public/flags/australia.svg",
    "frontend/public/flags/germany.svg",
    "frontend/public/flags/ireland.svg",
    "frontend/public/flags/new-zealand.svg",

    # Frontend Src Root
    "frontend/src/main.tsx",
    "frontend/src/App.tsx",
    "frontend/src/index.css",

    # Layout
    "frontend/src/components/layout/Header.tsx",
    "frontend/src/components/layout/Navbar.tsx",
    "frontend/src/components/layout/MobileMenu.tsx",
    "frontend/src/components/layout/Footer.tsx",
    "frontend/src/components/layout/WhatsAppButton.tsx",

    # Home 18 Sections
    "frontend/src/components/home/Hero.tsx",
    "frontend/src/components/home/HeroDestinations.tsx",
    "frontend/src/components/home/TrustStats.tsx",
    "frontend/src/components/home/DestinationsSection.tsx",
    "frontend/src/components/home/UniversityFinder.tsx",
    "frontend/src/components/home/WhyAegis.tsx",
    "frontend/src/components/home/SupportSection.tsx",
    "frontend/src/components/home/JourneySection.tsx",
    "frontend/src/components/home/CoursesSection.tsx",
    "frontend/src/components/home/ScholarshipsSection.tsx",
    "frontend/src/components/home/TestPreparationSection.tsx",
    "frontend/src/components/home/UniversitiesSection.tsx",
    "frontend/src/components/home/StudentSuccessSection.tsx",
    "frontend/src/components/home/AboutSection.tsx",
    "frontend/src/components/home/TestimonialsSection.tsx",
    "frontend/src/components/home/FAQSection.tsx",
    "frontend/src/components/home/BlogSection.tsx",
    "frontend/src/components/home/FinalCTA.tsx",

    # Sub-components
    "frontend/src/components/destinations/DestinationCard.tsx",
    "frontend/src/components/destinations/DestinationGrid.tsx",
    "frontend/src/components/destinations/DestinationHero.tsx",
    "frontend/src/components/destinations/CountryStats.tsx",
    "frontend/src/components/destinations/CountryCourses.tsx",
    "frontend/src/components/destinations/CountryUniversities.tsx",
    "frontend/src/components/destinations/CountryFAQ.tsx",

    "frontend/src/components/universities/UniversityCard.tsx",
    "frontend/src/components/universities/UniversityGrid.tsx",
    "frontend/src/components/universities/UniversitySearch.tsx",
    "frontend/src/components/universities/UniversityFilters.tsx",
    "frontend/src/components/universities/UniversityDetails.tsx",
    "frontend/src/components/universities/UniversityCompare.tsx",

    "frontend/src/components/courses/CourseCard.tsx",
    "frontend/src/components/courses/CourseGrid.tsx",
    "frontend/src/components/courses/CourseFilters.tsx",
    "frontend/src/components/courses/CourseDetails.tsx",

    "frontend/src/components/services/ServiceCard.tsx",
    "frontend/src/components/services/Counselling.tsx",
    "frontend/src/components/services/UniversitySelection.tsx",
    "frontend/src/components/services/ApplicationAssistance.tsx",
    "frontend/src/components/services/Scholarships.tsx",
    "frontend/src/components/services/EducationLoans.tsx",
    "frontend/src/components/services/VisaAssistance.tsx",
    "frontend/src/components/services/Accommodation.tsx",
    "frontend/src/components/services/Forex.tsx",
    "frontend/src/components/services/PreDeparture.tsx",

    "frontend/src/components/scholarships/ScholarshipCard.tsx",
    "frontend/src/components/scholarships/ScholarshipGrid.tsx",
    "frontend/src/components/scholarships/ScholarshipFilters.tsx",

    "frontend/src/components/test-preparation/TestCard.tsx",
    "frontend/src/components/test-preparation/IELTS.tsx",
    "frontend/src/components/test-preparation/PTE.tsx",
    "frontend/src/components/test-preparation/TOEFL.tsx",
    "frontend/src/components/test-preparation/GRE.tsx",
    "frontend/src/components/test-preparation/GMAT.tsx",
    "frontend/src/components/test-preparation/SAT.tsx",
    "frontend/src/components/test-preparation/OET.tsx",
    "frontend/src/components/test-preparation/Duolingo.tsx",

    "frontend/src/components/student-stories/StudentCard.tsx",
    "frontend/src/components/student-stories/StudentGrid.tsx",
    "frontend/src/components/student-stories/StudentStoryDetails.tsx",

    "frontend/src/components/testimonials/TestimonialCard.tsx",
    "frontend/src/components/testimonials/TestimonialSlider.tsx",

    "frontend/src/components/blog/BlogCard.tsx",
    "frontend/src/components/blog/BlogGrid.tsx",
    "frontend/src/components/blog/BlogArticle.tsx",

    "frontend/src/components/forms/ConsultationForm.tsx",
    "frontend/src/components/forms/EnquiryForm.tsx",
    "frontend/src/components/forms/ContactForm.tsx",
    "frontend/src/components/forms/UniversityFinderForm.tsx",
    "frontend/src/components/forms/FormInput.tsx",

    "frontend/src/components/common/Button.tsx",
    "frontend/src/components/common/SectionHeading.tsx",
    "frontend/src/components/common/Container.tsx",
    "frontend/src/components/common/Breadcrumb.tsx",
    "frontend/src/components/common/Loading.tsx",
    "frontend/src/components/common/ErrorMessage.tsx",

    "frontend/src/components/ui/Accordion.tsx",
    "frontend/src/components/ui/Modal.tsx",
    "frontend/src/components/ui/Dropdown.tsx",
    "frontend/src/components/ui/Select.tsx",
    "frontend/src/components/ui/Input.tsx",
    "frontend/src/components/ui/Tabs.tsx",
    "frontend/src/components/ui/Carousel.tsx",

    # Pages
    "frontend/src/pages/Home.tsx",
    "frontend/src/pages/About.tsx",
    "frontend/src/pages/Contact.tsx",
    "frontend/src/pages/Consultation.tsx",
    "frontend/src/pages/NotFound.tsx",

    "frontend/src/pages/destinations/Destinations.tsx",
    "frontend/src/pages/destinations/UK.tsx",
    "frontend/src/pages/destinations/USA.tsx",
    "frontend/src/pages/destinations/Canada.tsx",
    "frontend/src/pages/destinations/Australia.tsx",
    "frontend/src/pages/destinations/Germany.tsx",
    "frontend/src/pages/destinations/Ireland.tsx",
    "frontend/src/pages/destinations/NewZealand.tsx",
    "frontend/src/pages/destinations/Europe.tsx",

    "frontend/src/pages/universities/Universities.tsx",
    "frontend/src/pages/universities/UniversityDetails.tsx",
    "frontend/src/pages/universities/Compare.tsx",

    "frontend/src/pages/courses/Courses.tsx",
    "frontend/src/pages/courses/CourseDetails.tsx",

    "frontend/src/pages/services/Services.tsx",
    "frontend/src/pages/services/ServiceDetails.tsx",

    "frontend/src/pages/scholarships/Scholarships.tsx",
    "frontend/src/pages/scholarships/ScholarshipDetails.tsx",

    "frontend/src/pages/test-preparation/TestPreparation.tsx",
    "frontend/src/pages/test-preparation/TestDetails.tsx",

    "frontend/src/pages/student-stories/StudentStories.tsx",
    "frontend/src/pages/student-stories/StudentStoryDetails.tsx",

    "frontend/src/pages/blog/Blog.tsx",
    "frontend/src/pages/blog/BlogArticle.tsx",
    "frontend/src/pages/blog/BlogCategory.tsx",

    "frontend/src/pages/university-finder/UniversityFinder.tsx",
    "frontend/src/pages/legal/PrivacyPolicy.tsx",
    "frontend/src/pages/legal/Terms.tsx",
    "frontend/src/pages/legal/CookiePolicy.tsx",

    # Data
    "frontend/src/data/navigation.ts",
    "frontend/src/data/destinations.ts",
    "frontend/src/data/services.ts",
    "frontend/src/data/courses.ts",
    "frontend/src/data/tests.ts",
    "frontend/src/data/homepage.ts",

    # Services
    "frontend/src/services/api.ts",
    "frontend/src/services/universityService.ts",
    "frontend/src/services/courseService.ts",
    "frontend/src/services/destinationService.ts",
    "frontend/src/services/scholarshipService.ts",
    "frontend/src/services/enquiryService.ts",
    "frontend/src/services/consultationService.ts",
    "frontend/src/services/blogService.ts",

    # Hooks, Types, Config, Utils
    "frontend/src/hooks/useApi.ts",
    "frontend/src/hooks/useDebounce.ts",
    "frontend/src/hooks/useScroll.ts",
    "frontend/src/hooks/useUniversitySearch.ts",

    "frontend/src/types/university.ts",
    "frontend/src/types/course.ts",
    "frontend/src/types/destination.ts",
    "frontend/src/types/scholarship.ts",
    "frontend/src/types/service.ts",
    "frontend/src/types/testimonial.ts",
    "frontend/src/types/student.ts",
    "frontend/src/types/blog.ts",

    "frontend/src/config/site.ts",
    "frontend/src/config/api.ts",
    "frontend/src/config/navigation.ts",

    "frontend/src/utils/format.ts",
    "frontend/src/utils/validation.ts",
    "frontend/src/utils/helpers.ts",

    # Backend
    "backend/package.json",
    "backend/tsconfig.json",
    "backend/nest-cli.json",
    "backend/.env",
    "backend/src/main.ts",
    "backend/src/app.module.ts",
    "backend/src/config/app.config.ts",
    "backend/src/config/database.config.ts",
    "backend/src/config/auth.config.ts",
    "backend/src/config/email.config.ts",
    "backend/src/config/storage.config.ts",
    "backend/prisma/schema.prisma",
    "backend/prisma/seed.ts",
]

missing = []
for c in checks:
    target = os.path.join(base, c.replace("/", os.sep))
    if not os.path.exists(target):
        missing.append(c)

if missing:
    print(f"FAILED: {len(missing)} files missing:")
    for m in missing:
        print(f" - {m}")
else:
    print(f"SUCCESS: 100% of all {len(checks)} verified files exist according to the specification!")

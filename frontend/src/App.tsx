import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { RouteSEOTracker } from './components/common/RouteSEOTracker';

// Direct import for critical home page
import Home from './pages/Home';

// Lazy-loaded secondary public pages
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Consultation = React.lazy(() => import('./pages/Consultation'));
const Careers = React.lazy(() => import('./pages/Careers'));
const StudyAbroad = React.lazy(() => import('./pages/StudyAbroad'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Destinations
const Destinations = React.lazy(() => import('./pages/destinations/Destinations'));
const UK = React.lazy(() => import('./pages/destinations/UK'));
const USA = React.lazy(() => import('./pages/destinations/USA'));
const Canada = React.lazy(() => import('./pages/destinations/Canada'));
const Australia = React.lazy(() => import('./pages/destinations/Australia'));
const Germany = React.lazy(() => import('./pages/destinations/Germany'));
const Ireland = React.lazy(() => import('./pages/destinations/Ireland'));
const NewZealand = React.lazy(() => import('./pages/destinations/NewZealand'));
const Europe = React.lazy(() => import('./pages/destinations/Europe'));

// Universities
const Universities = React.lazy(() => import('./pages/universities/Universities'));
const UniversityDetails = React.lazy(() => import('./pages/universities/UniversityDetails'));
const Compare = React.lazy(() => import('./pages/universities/Compare'));

// Courses
const Courses = React.lazy(() => import('./pages/courses/Courses'));
const CourseDetails = React.lazy(() => import('./pages/courses/CourseDetails').then(m => ({ default: m.CourseDetails })));

// Services
const Services = React.lazy(() => import('./pages/services/Services'));
const ServiceDetails = React.lazy(() => import('./pages/services/ServiceDetails').then(m => ({ default: m.ServiceDetails })));

// Scholarships
const Scholarships = React.lazy(() => import('./pages/scholarships/Scholarships'));
const ScholarshipDetails = React.lazy(() => import('./pages/scholarships/ScholarshipDetails').then(m => ({ default: m.ScholarshipDetails })));

// Test Preparation
const TestPreparation = React.lazy(() => import('./pages/test-preparation/TestPreparation'));
const TestDetails = React.lazy(() => import('./pages/test-preparation/TestDetails').then(m => ({ default: m.TestDetails })));

// Student Stories
const StudentStories = React.lazy(() => import('./pages/student-stories/StudentStories'));
const StudentStoryDetails = React.lazy(() => import('./pages/student-stories/StudentStoryDetails').then(m => ({ default: m.StudentStoryDetails })));

// Blog
const Blog = React.lazy(() => import('./pages/blog/Blog'));
const BlogArticle = React.lazy(() => import('./pages/blog/BlogArticle').then(m => ({ default: m.BlogArticle })));

// University Finder
const UniversityFinder = React.lazy(() => import('./pages/university-finder/UniversityFinder'));

// Legal
const PrivacyPolicy = React.lazy(() => import('./pages/legal/PrivacyPolicy'));
const Terms = React.lazy(() => import('./pages/legal/Terms'));
const CookiePolicy = React.lazy(() => import('./pages/legal/CookiePolicy'));

// Admin Components & Pages (Lazy loaded so public visitors do not download admin code/icons)
const AdminAuthGuard = React.lazy(() => import('./components/admin/AdminAuthGuard').then(m => ({ default: m.AdminAuthGuard })));
const AdminLayout = React.lazy(() => import('./components/admin/AdminLayout').then(m => ({ default: m.AdminLayout })));
const AdminLogin = React.lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'));
const AdminLeads = React.lazy(() => import('./pages/admin/AdminLeads'));
const AdminStudents = React.lazy(() => import('./pages/admin/AdminStudents'));
const AdminEnquiries = React.lazy(() => import('./pages/admin/AdminEnquiries'));
const AdminConsultations = React.lazy(() => import('./pages/admin/AdminConsultations'));
const AdminUniversities = React.lazy(() => import('./pages/admin/AdminUniversities'));
const AdminCourses = React.lazy(() => import('./pages/admin/AdminCourses'));
const AdminDestinations = React.lazy(() => import('./pages/admin/AdminDestinations'));
const AdminScholarships = React.lazy(() => import('./pages/admin/AdminScholarships'));
const AdminServices = React.lazy(() => import('./pages/admin/AdminServices'));
const AdminTestPreparation = React.lazy(() => import('./pages/admin/AdminTestPreparation'));
const AdminApplications = React.lazy(() => import('./pages/admin/AdminApplications'));
const AdminDocuments = React.lazy(() => import('./pages/admin/AdminDocuments'));
const AdminStudentStories = React.lazy(() => import('./pages/admin/AdminStudentStories'));
const AdminTestimonials = React.lazy(() => import('./pages/admin/AdminTestimonials'));
const AdminBlog = React.lazy(() => import('./pages/admin/AdminBlog'));
const AdminMedia = React.lazy(() => import('./pages/admin/AdminMedia'));
const AdminAnalytics = React.lazy(() => import('./pages/admin/AdminAnalytics'));
const AdminNotifications = React.lazy(() => import('./pages/admin/AdminNotifications'));
const AdminUsers = React.lazy(() => import('./pages/admin/AdminUsers'));
const AdminSettings = React.lazy(() => import('./pages/admin/AdminSettings'));
const AdminUniversityMatcher = React.lazy(() => import('./pages/admin/AdminUniversityMatcher'));

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      <RouteSEOTracker />
      {!isAdmin && <Header />}
      <div className="flex-1">
        <React.Suspense fallback={<div className="min-h-[50vh]" />}>
          <Routes>
            {/* Public Top Level */}
            <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-consultation" element={<Consultation />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/faqs" element={<FAQ />} />

          {/* Destinations */}
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/uk" element={<UK />} />
          <Route path="/destinations/usa" element={<USA />} />
          <Route path="/destinations/canada" element={<Canada />} />
          <Route path="/destinations/australia" element={<Australia />} />
          <Route path="/destinations/germany" element={<Germany />} />
          <Route path="/destinations/ireland" element={<Ireland />} />
          <Route path="/destinations/new-zealand" element={<NewZealand />} />
          <Route path="/destinations/europe" element={<Europe />} />

          {/* Universities (Redirects to country-wise destinations) */}
          <Route path="/universities" element={<Navigate to="/destinations" replace />} />
          <Route path="/universities/compare" element={<Navigate to="/destinations" replace />} />
          <Route path="/universities/:slug" element={<Navigate to="/destinations" replace />} />

          {/* Courses */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />

          {/* Scholarships */}
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/scholarships/:slug" element={<ScholarshipDetails />} />

          {/* Test Preparation */}
          <Route path="/test-preparation" element={<TestPreparation />} />
          <Route path="/test-preparation/:slug" element={<TestDetails />} />

          {/* Student Stories */}
          <Route path="/student-stories" element={<StudentStories />} />
          <Route path="/student-stories/:slug" element={<StudentStoryDetails />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />

          {/* University Finder (Redirects to destinations) */}
          <Route path="/university-finder" element={<Navigate to="/destinations" replace />} />

          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          {/* Admin Authentication */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protected Admin Portal Routes */}
          <Route
            path="/admin"
            element={
              <AdminAuthGuard>
                <AdminLayout />
              </AdminAuthGuard>
            }
          >
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="leads" element={<AdminLeads />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="enquiries" element={<AdminEnquiries />} />
            <Route path="consultations" element={<AdminConsultations />} />
            <Route path="universities" element={<AdminUniversities />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="destinations" element={<AdminDestinations />} />
            <Route path="scholarships" element={<AdminScholarships />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="test-preparation" element={<AdminTestPreparation />} />
            <Route path="applications" element={<AdminApplications />} />
            <Route path="documents" element={<AdminDocuments />} />
            <Route path="student-stories" element={<AdminStudentStories />} />
            <Route path="testimonials" element={<AdminTestimonials />} />
            <Route path="blog" element={<AdminBlog />} />
            <Route path="media" element={<AdminMedia />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="notifications" element={<AdminNotifications />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="university-matcher" element={<AdminUniversityMatcher />} />
          </Route>

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </React.Suspense>
      </div>
      {!isAdmin && <Footer />}
      {!isAdmin && <WhatsAppButton />}
      {!isAdmin && <ScrollToTop />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;

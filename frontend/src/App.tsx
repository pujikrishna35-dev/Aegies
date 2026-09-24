import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Top level pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Consultation from './pages/Consultation';
import StudyAbroad from './pages/StudyAbroad';
import NotFound from './pages/NotFound';

// Destinations
import Destinations from './pages/destinations/Destinations';
import UK from './pages/destinations/UK';
import USA from './pages/destinations/USA';
import Canada from './pages/destinations/Canada';
import Australia from './pages/destinations/Australia';
import Germany from './pages/destinations/Germany';
import Ireland from './pages/destinations/Ireland';
import NewZealand from './pages/destinations/NewZealand';
import Europe from './pages/destinations/Europe';

// Universities
import Universities from './pages/universities/Universities';
import UniversityDetails from './pages/universities/UniversityDetails';
import Compare from './pages/universities/Compare';

// Courses
import Courses from './pages/courses/Courses';
import CourseDetails from './pages/courses/CourseDetails';

// Services
import Services from './pages/services/Services';
import ServiceDetails from './pages/services/ServiceDetails';

// Scholarships
import Scholarships from './pages/scholarships/Scholarships';
import ScholarshipDetails from './pages/scholarships/ScholarshipDetails';

// Test Preparation
import TestPreparation from './pages/test-preparation/TestPreparation';
import TestDetails from './pages/test-preparation/TestDetails';

// Student Stories
import StudentStories from './pages/student-stories/StudentStories';
import StudentStoryDetails from './pages/student-stories/StudentStoryDetails';

// Blog
import Blog from './pages/blog/Blog';
import BlogArticle from './pages/blog/BlogArticle';

// University Finder
import UniversityFinder from './pages/university-finder/UniversityFinder';

// Legal
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import Terms from './pages/legal/Terms';
import CookiePolicy from './pages/legal/CookiePolicy';

// Admin Components & Pages
import { AdminAuthGuard } from './components/admin/AdminAuthGuard';
import { AdminLayout } from './components/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLeads from './pages/admin/AdminLeads';
import AdminStudents from './pages/admin/AdminStudents';
import AdminEnquiries from './pages/admin/AdminEnquiries';
import AdminConsultations from './pages/admin/AdminConsultations';
import AdminUniversities from './pages/admin/AdminUniversities';
import AdminCourses from './pages/admin/AdminCourses';
import AdminDestinations from './pages/admin/AdminDestinations';
import AdminScholarships from './pages/admin/AdminScholarships';
import AdminServices from './pages/admin/AdminServices';
import AdminTestPreparation from './pages/admin/AdminTestPreparation';
import AdminApplications from './pages/admin/AdminApplications';
import AdminDocuments from './pages/admin/AdminDocuments';
import AdminStudentStories from './pages/admin/AdminStudentStories';
import AdminTestimonials from './pages/admin/AdminTestimonials';
import AdminBlog from './pages/admin/AdminBlog';
import AdminMedia from './pages/admin/AdminMedia';
import AdminAnalytics from './pages/admin/AdminAnalytics';
import AdminNotifications from './pages/admin/AdminNotifications';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSettings from './pages/admin/AdminSettings';
import AdminUniversityMatcher from './pages/admin/AdminUniversityMatcher';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdmin && <Header />}
      <div className="flex-1">
        <Routes>
          {/* Public Top Level */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-consultation" element={<Consultation />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />

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

          {/* Universities */}
          <Route path="/universities" element={<Universities />} />
          <Route path="/universities/compare" element={<Compare />} />
          <Route path="/universities/:slug" element={<UniversityDetails />} />

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

          {/* University Finder */}
          <Route path="/university-finder" element={<UniversityFinder />} />

          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
      </div>
      {!isAdmin && <Footer />}
      {!isAdmin && <WhatsAppButton />}
      {!isAdmin && <ScrollToTop />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, GraduationCap, FileText, School, 
  BookOpen, Globe, Award, Settings, Bell, PhoneCall 
} from 'lucide-react';

import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import Students from './pages/Students';
import Applications from './pages/Applications';
import Universities from './pages/Universities';
import Courses from './pages/Courses';
import Destinations from './pages/Destinations';
import Scholarships from './pages/Scholarships';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import StudentStories from './pages/StudentStories';
import Blog from './pages/Blog';
import FAQs from './pages/FAQs';
import Media from './pages/Media';
import Consultations from './pages/Consultations';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import SettingsPage from './pages/Settings';
import Login from './pages/Login';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'CRM Leads', path: '/leads', icon: Users },
  { name: 'Students', path: '/students', icon: GraduationCap },
  { name: 'Applications', path: '/applications', icon: FileText },
  { name: 'Universities', path: '/universities', icon: School },
  { name: 'Courses', path: '/courses', icon: BookOpen },
  { name: 'Destinations', path: '/destinations', icon: Globe },
  { name: 'Scholarships', path: '/scholarships', icon: Award },
  { name: 'Consultations', path: '/consultations', icon: PhoneCall },
  { name: 'Notifications', path: '/notifications', icon: Bell },
  { name: 'Settings', path: '/settings', icon: Settings },
];

const SidebarLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  if (location.pathname === '/login') {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <aside className="w-64 bg-[#0B132B] text-white flex flex-col fixed inset-y-0 left-0 z-30">
        <div className="h-16 flex items-center px-6 border-b border-slate-800 gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#8A1538] flex items-center justify-center font-bold text-white shadow">
            A
          </div>
          <div>
            <span className="font-bold text-base tracking-wide text-white block">Aegis Admin</span>
            <span className="text-[10px] text-amber-400 font-medium tracking-wider uppercase block">Overseas Portal</span>
          </div>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  active
                    ? 'bg-[#8A1538] text-white shadow'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-800 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center font-bold text-amber-300 text-xs">
            OP
          </div>
          <div className="text-xs">
            <p className="font-semibold text-white">Operations Team</p>
            <p className="text-slate-400">admin@aegisoverseas.com</p>
          </div>
        </div>
      </aside>
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-20">
          <h2 className="text-lg font-semibold text-slate-800">Admin Control Center</h2>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
              System Online
            </span>
          </div>
        </header>
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SidebarLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/students" element={<Students />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/student-stories" element={<StudentStories />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/media" element={<Media />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </SidebarLayout>
    </BrowserRouter>
  );
};

export default App;

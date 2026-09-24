import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  MessageSquare,
  CalendarCheck,
  Building2,
  BookOpen,
  Globe2,
  Award,
  Layers,
  FileCheck,
  FolderOpen,
  Sparkles,
  HelpCircle,
  Newspaper,
  Image as ImageIcon,
  BarChart3,
  Bell,
  UserCheck,
  Settings,
  LogOut,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Search,
  CheckCircle2,
  Clock,
  Shield,
  Briefcase
} from 'lucide-react';
import { getCurrentAdminUser, adminLogout } from '../../services/adminApi';

interface NavGroup {
  label: string;
  items: {
    label: string;
    path: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: string;
    badgeColor?: string;
  }[];
}

export const AdminLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'New Lead: MSc Computer Science',
      desc: 'Rohan Verma registered from Hyderabad.',
      time: '10m ago',
      read: false,
    },
    {
      id: '2',
      title: 'Consultation Appointment Booked',
      desc: 'Rahul Varma booked Sept 12 at Nellore.',
      time: '45m ago',
      read: false,
    },
    {
      id: '3',
      title: 'Visa Document Submitted',
      desc: 'Sneha Reddy uploaded financial statements.',
      time: '2h ago',
      read: false,
    },
  ]);

  useEffect(() => {
    const user = getCurrentAdminUser();
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser({
        name: 'Aegis Super Admin',
        email: 'admin@aegisoverseas.com',
        role: 'SUPER_ADMIN',
      });
    }
  }, []);

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [location.pathname]);

  const navGroups: NavGroup[] = [
    {
      label: 'OVERVIEW',
      items: [
        { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
      ],
    },
    {
      label: 'LEAD MANAGEMENT',
      items: [
        { label: 'Leads Pipeline', path: '/admin/leads', icon: Users, badge: '5 New', badgeColor: 'bg-amber-400/20 text-amber-300' },
        { label: 'Enrolled Students', path: '/admin/students', icon: GraduationCap },
        { label: 'Web Enquiries', path: '/admin/enquiries', icon: MessageSquare, badge: '2', badgeColor: 'bg-blue-400/20 text-blue-300' },
        { label: 'Consultations', path: '/admin/consultations', icon: CalendarCheck },
      ],
    },
    {
      label: 'EDUCATION',
      items: [
        { label: 'Universities', path: '/admin/universities', icon: Building2 },
        { label: 'Courses', path: '/admin/courses', icon: BookOpen },
        { label: 'University Matcher', path: '/admin/university-matcher', icon: Sparkles, badge: 'AI Engine', badgeColor: 'bg-amber-400/20 text-amber-300' },
        { label: 'Destinations', path: '/admin/destinations', icon: Globe2 },
        { label: 'Scholarships', path: '/admin/scholarships', icon: Award },
        { label: 'Test Preparation', path: '/admin/test-preparation', icon: Layers },
      ],
    },
    {
      label: 'STUDENT MANAGEMENT',
      items: [
        { label: 'Applications', path: '/admin/applications', icon: FileCheck, badge: 'Active', badgeColor: 'bg-emerald-400/20 text-emerald-300' },
        { label: 'Document Center', path: '/admin/documents', icon: FolderOpen },
        { label: 'Student Stories', path: '/admin/student-stories', icon: Sparkles },
      ],
    },
    {
      label: 'WEBSITE CMS',
      items: [
        { label: 'Services', path: '/admin/services', icon: Briefcase },
        { label: 'Testimonials', path: '/admin/testimonials', icon: HelpCircle },
        { label: 'Blog & Articles', path: '/admin/blog', icon: Newspaper },
        { label: 'Media Library', path: '/admin/media', icon: ImageIcon },
      ],
    },
    {
      label: 'BUSINESS & REPORTS',
      items: [
        { label: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
        { label: 'Notifications', path: '/admin/notifications', icon: Bell },
      ],
    },
    {
      label: 'SYSTEM & SETTINGS',
      items: [
        { label: 'Admin Users & Roles', path: '/admin/users', icon: UserCheck },
        { label: 'Website Settings', path: '/admin/settings', icon: Settings },
      ],
    },
  ];

  // Helper to extract page title from path
  const getBreadcrumbs = () => {
    const segments = location.pathname.split('/').filter(Boolean);
    if (segments.length === 1 && segments[0] === 'admin') return ['Dashboard'];
    return segments.map(s => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' '));
  };

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    setUnreadCount(0);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800">
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Main Wrapper */}
      <div className="flex flex-1 min-h-screen">
        {/* Fixed Left Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#071228] text-white flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
            isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Brand Header */}
          <div className="h-16 flex items-center justify-between px-5 border-b border-slate-800 bg-[#040A17]/80">
            <Link to="/admin/dashboard" className="flex items-center gap-3">
              <img
                src="/images/aegis-icon.png"
                alt="Aegis Overseas"
                className="w-9 h-9 object-contain"
              />
              <div>
                <span className="font-extrabold text-sm tracking-tight text-white block leading-tight">
                  AEGIS OVERSEAS
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold block">
                  Admin Console
                </span>
              </div>
            </Link>

            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links (Scrollable) */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-800">
            {navGroups.map((group) => (
              <div key={group.label}>
                <div className="px-3 mb-2 text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                  {group.label}
                </div>
                <div className="space-y-0.5">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                      location.pathname === item.path ||
                      (item.path === '/admin/dashboard' && location.pathname === '/admin');

                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all group ${
                          isActive
                            ? 'bg-gradient-to-r from-amber-500/20 to-amber-500/5 text-amber-400 font-bold border-l-3 border-[#C5A059]'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon
                            className={`w-4 h-4 transition-colors ${
                              isActive ? 'text-amber-400' : 'text-slate-400 group-hover:text-slate-200'
                            }`}
                          />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span
                            className={`px-1.5 py-0.5 text-[9px] font-bold rounded-md ${
                              item.badgeColor || 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Footer User Profile */}
          <div className="p-3 border-t border-slate-800/80 bg-[#040A17]/60">
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-[#071228] font-bold text-xs shrink-0">
                  {currentUser?.name?.charAt(0) || 'A'}
                </div>
                <div className="truncate text-left">
                  <div className="text-xs font-bold text-white truncate">
                    {currentUser?.name || 'Administrator'}
                  </div>
                  <div className="text-[10px] text-amber-400/90 font-mono truncate">
                    {currentUser?.role || 'SUPER_ADMIN'}
                  </div>
                </div>
              </div>

              <button
                onClick={adminLogout}
                title="Sign Out"
                className="text-slate-400 hover:text-red-400 p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>

        {/* Content Area with Top Header */}
        <div className="flex-1 flex flex-col lg:pl-64 min-w-0">
          {/* Top Header */}
          <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-xs">
            {/* Left: Mobile Toggle & Breadcrumbs */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              >
                <Menu className="w-5 h-5" />
              </button>

              <nav className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="font-medium text-slate-400">Admin</span>
                {getBreadcrumbs().slice(1).map((crumb) => (
                  <React.Fragment key={crumb}>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                    <span className="font-bold text-slate-800">{crumb}</span>
                  </React.Fragment>
                ))}
              </nav>
            </div>

            {/* Right: Search, Notifications, Public Link, Profile */}
            <div className="flex items-center gap-3">
              {/* Quick Search */}
              <div className="relative hidden md:block">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Quick search records..."
                  className="pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 w-48 lg:w-64 transition-all"
                />
              </div>

              {/* View Live Website Button */}
              <Link
                to="/"
                target="_blank"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl border border-slate-200 transition-colors"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
              </Link>

              {/* Notification Center */}
              <div className="relative">
                <button
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="relative p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <Bell className="w-4 h-4" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-white" />
                  )}
                </button>

                {/* Notifications Dropdown */}
                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95">
                    <div className="px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">Notifications</span>
                        <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                          {unreadCount} new
                        </span>
                      </div>
                      <button
                        onClick={handleMarkAllRead}
                        className="text-[11px] font-semibold text-amber-700 hover:underline"
                      >
                        Mark all read
                      </button>
                    </div>

                    <div className="divide-y divide-slate-50 max-h-72 overflow-y-auto">
                      {notifications.map((n) => (
                        <div key={n.id} className={`p-3 text-xs hover:bg-slate-50 transition-colors ${!n.read ? 'bg-amber-50/30' : ''}`}>
                          <div className="font-bold text-slate-900">{n.title}</div>
                          <div className="text-slate-600 mt-0.5 text-[11px]">{n.desc}</div>
                          <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{n.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-2 border-t border-slate-100 text-center">
                      <Link
                        to="/admin/notifications"
                        onClick={() => setIsNotificationsOpen(false)}
                        className="text-xs font-bold text-amber-700 hover:text-amber-800"
                      >
                        View all notification logs &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Avatar */}
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <div className="w-8 h-8 rounded-full bg-[#071228] text-amber-400 font-bold text-xs flex items-center justify-center border border-amber-500/30">
                  {currentUser?.name?.charAt(0) || 'A'}
                </div>
                <div className="hidden xl:block text-left">
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    {currentUser?.name || 'Administrator'}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {currentUser?.role || 'SUPER_ADMIN'}
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Dynamic Nested Page Content */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

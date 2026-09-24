import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  CalendarCheck,
  GraduationCap,
  Building2,
  TrendingUp,
  ArrowUpRight,
  RefreshCw,
  Search,
  Filter,
  ArrowRight,
  Shield,
  Clock,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';

export const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<any>({
    totalLeads: 1248,
    leadsGrowth: '+18.4%',
    totalStudents: 846,
    studentsGrowth: '+14.2%',
    activeApplications: 312,
    applicationsGrowth: '+22.5%',
    consultationsBooked: 485,
    consultationsGrowth: '+12.8%',
    leadConversionRate: '24.9%',
    visaSuccessRate: '99.2%',
  });

  const [leads, setLeads] = useState<any[]>([
    {
      id: 'lead-1',
      name: 'Rohan Verma',
      email: 'rohan.v@example.com',
      phone: '+91 9876543210',
      preferredCountry: 'UK',
      preferredCourse: 'MSc Computer Science',
      status: 'APPLICATION',
      counselor: 'Pooja Sharma',
      createdAt: 'Today, 10:45 AM',
    },
    {
      id: 'lead-2',
      name: 'Ananya Deshmukh',
      email: 'ananya.d@example.com',
      phone: '+91 9123456780',
      preferredCountry: 'USA',
      preferredCourse: 'MS Data Science',
      status: 'COUNSELLING',
      counselor: 'Pooja Sharma',
      createdAt: 'Yesterday',
    },
    {
      id: 'lead-3',
      name: 'Sneha Reddy',
      email: 'sneha.reddy@example.com',
      phone: '+91 9440112233',
      preferredCountry: 'Canada',
      preferredCourse: 'MBA International Business',
      status: 'FOLLOW_UP',
      counselor: 'Director Desk',
      createdAt: 'Sep 7, 2026',
    },
  ]);

  const [consultations, setConsultations] = useState<any[]>([
    {
      id: 'c-101',
      fullName: 'Rahul Varma',
      destination: 'UK',
      scheduledDate: '2026-09-12',
      scheduledTime: '11:00 AM',
      counsellor: 'Pooja Sharma',
      status: 'CONFIRMED',
    },
    {
      id: 'c-102',
      fullName: 'Vikramaditya Rao',
      destination: 'Germany',
      scheduledDate: '2026-09-15',
      scheduledTime: '04:00 PM',
      counsellor: 'Director Desk',
      status: 'CONFIRMED',
    },
  ]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const resStats = await adminFetch('/analytics/dashboard');
      if (resStats) setStats(resStats);
    } catch {
      // keep fallback
    }

    try {
      const resLeads = await adminFetch('/leads');
      if (Array.isArray(resLeads) && resLeads.length > 0) setLeads(resLeads.slice(0, 5));
    } catch {
      // keep fallback
    }

    try {
      const resConsult = await adminFetch('/consultations');
      if (Array.isArray(resConsult) && resConsult.length > 0) setConsultations(resConsult.slice(0, 4));
    } catch {
      // keep fallback
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Executive Overview</span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
              Live Feed
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Real-time pipeline metrics across prospective leads, active applications, and consultations.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchDashboardData}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-amber-600' : ''}`} />
            <span>Refresh Metrics</span>
          </button>

          <Link
            to="/admin/leads"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#071228] hover:bg-[#0E213D] text-xs font-bold text-amber-400 border border-amber-500/30 transition-all shadow-sm"
          >
            <span>View All Leads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Leads */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-amber-400/50 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Leads</span>
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#C5A059] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{stats.totalLeads}</span>
            <span className="text-xs font-bold text-emerald-600 flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> {stats.leadsGrowth}
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
            <span>Conversion rate:</span>
            <span className="font-bold text-slate-700">{stats.leadConversionRate}</span>
          </div>
        </div>

        {/* Card 2: Applications */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400/50 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Applications</span>
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{stats.activeApplications}</span>
            <span className="text-xs font-bold text-emerald-600 flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> {stats.applicationsGrowth}
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
            <span>Visa grant rate:</span>
            <span className="font-bold text-emerald-600">{stats.visaSuccessRate}</span>
          </div>
        </div>

        {/* Card 3: Consultations */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-400/50 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Consultations</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CalendarCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{stats.consultationsBooked}</span>
            <span className="text-xs font-bold text-emerald-600 flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> {stats.consultationsGrowth}
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
            <span>Nellore & Tirupati branches</span>
            <span className="font-bold text-slate-700">100% Free</span>
          </div>
        </div>

        {/* Card 4: Universities */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-purple-400/50 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Partner Network</span>
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">850+</span>
            <span className="text-xs font-bold text-purple-600">8 Countries</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
            <span>UK, US, Canada, Australia</span>
            <span className="font-bold text-slate-700">Official Tie-ups</span>
          </div>
        </div>
      </div>

      {/* Visual Analytics & Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Monthly Trend Card */}
        <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-bold text-slate-900">Student Intake & Application Trajectory</h2>
              <p className="text-xs text-slate-500">Monthly leads received vs. formal university applications lodged.</p>
            </div>
            <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
              2026 Season
            </span>
          </div>

          <div className="h-44 flex items-end justify-between gap-3 pt-4 px-2 border-b border-slate-100">
            {[
              { month: 'Apr', leads: 40, apps: 15 },
              { month: 'May', leads: 55, apps: 25 },
              { month: 'Jun', leads: 70, apps: 38 },
              { month: 'Jul', leads: 85, apps: 52 },
              { month: 'Aug', leads: 95, apps: 68 },
              { month: 'Sep', leads: 120, apps: 85 },
            ].map((bar) => (
              <div key={bar.month} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                <div className="w-full max-w-[36px] flex items-end justify-center gap-1 h-full">
                  <div
                    style={{ height: `${(bar.leads / 120) * 100}%` }}
                    className="w-1/2 bg-amber-400 rounded-t-md group-hover:bg-amber-500 transition-all"
                    title={`Leads: ${bar.leads}`}
                  />
                  <div
                    style={{ height: `${(bar.apps / 120) * 100}%` }}
                    className="w-1/2 bg-[#071228] rounded-t-md group-hover:bg-[#143159] transition-all"
                    title={`Applications: ${bar.apps}`}
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-600 mt-1">{bar.month}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 pt-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-amber-400" />
              <span>Inquiries / Leads</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-[#071228]" />
              <span>University Applications Lodged</span>
            </div>
          </div>
        </div>

        {/* Destination Popularity */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-900 mb-1">Destination Distribution</h2>
            <p className="text-xs text-slate-500 mb-4">Student preference share for 2026/2027 intakes.</p>

            <div className="space-y-3">
              {[
                { name: 'United Kingdom', pct: 38, color: 'bg-amber-500' },
                { name: 'United States', pct: 27, color: 'bg-blue-600' },
                { name: 'Canada', pct: 15, color: 'bg-red-500' },
                { name: 'Australia', pct: 12, color: 'bg-emerald-600' },
                { name: 'Germany & Europe', pct: 8, color: 'bg-purple-600' },
              ].map((dest) => (
                <div key={dest.name}>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-700">{dest.name}</span>
                    <span className="text-slate-900 font-bold">{dest.pct}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className={`h-full rounded-full ${dest.color}`} style={{ width: `${dest.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">Detailed breakdowns</span>
            <Link to="/admin/destinations" className="text-xs font-bold text-amber-700 hover:text-amber-800">
              Manage Destinations &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Leads & Upcoming Consultations Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Recent Leads Table (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-slate-900">Recent Student Enquiries</h2>
              <p className="text-xs text-slate-500">Prospective applicants who recently registered.</p>
            </div>
            <Link
              to="/admin/leads"
              className="text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline"
            >
              View pipeline &rarr;
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-50/75 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-100">
                <tr>
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4">Target Course</th>
                  <th className="py-3 px-4">Destination</th>
                  <th className="py-3 px-4">Counselor</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {leads.map((l) => (
                  <tr key={l.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">
                      <div>{l.name}</div>
                      <div className="text-[11px] font-normal text-slate-400">{l.phone}</div>
                    </td>
                    <td className="py-3 px-4 text-slate-700">{l.preferredCourse || 'Masters'}</td>
                    <td className="py-3 px-4 font-semibold text-slate-800">{l.preferredCountry || 'UK'}</td>
                    <td className="py-3 px-4 text-slate-600">{l.counselor || 'Pooja Sharma'}</td>
                    <td className="py-3 px-4">
                      <StatusBadge status={l.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Consultations (1 col) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-slate-900">Upcoming Consultations</h2>
              <Link to="/admin/consultations" className="text-xs font-bold text-amber-700 hover:underline">
                View all
              </Link>
            </div>
            <p className="text-xs text-slate-500 mb-4">Confirmed 1-on-1 counseling slots this week.</p>

            <div className="space-y-3">
              {consultations.map((c) => (
                <div key={c.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-xs text-slate-900">{c.fullName}</div>
                    <StatusBadge status={c.status} />
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 flex items-center justify-between">
                    <span>Target: {c.destination}</span>
                    <span className="font-semibold text-slate-700">{c.scheduledDate} ({c.scheduledTime})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <Link
              to="/admin/consultations"
              className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold hover:bg-amber-100 transition-colors"
            >
              <span>Manage Consultation Calendar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

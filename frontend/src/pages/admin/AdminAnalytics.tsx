import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  TrendingUp,
  Award,
  Users,
  CalendarCheck,
  GraduationCap,
  Globe2,
  Download,
  Filter,
  RefreshCw,
  ArrowUpRight
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';

export const AdminAnalytics: React.FC = () => {
  const [data, setData] = useState<any>({
    totalLeads: 1248,
    leadsGrowth: '+18.4%',
    totalStudents: 846,
    activeApplications: 312,
    consultationsBooked: 485,
    leadConversionRate: '24.9%',
    visaSuccessRate: '99.2%',
    monthlyLeads: [
      { month: 'Apr', leads: 82, applications: 28 },
      { month: 'May', leads: 115, applications: 42 },
      { month: 'Jun', leads: 160, applications: 64 },
      { month: 'Jul', leads: 220, applications: 85 },
      { month: 'Aug', leads: 280, applications: 110 },
      { month: 'Sep', leads: 391, applications: 145 },
    ],
    counselorPerformance: [
      { name: 'Pooja Sharma', leadsHandled: 164, converted: 48, conversionRate: '29.2%', avgRating: 4.9 },
      { name: 'Director Desk', leadsHandled: 98, converted: 34, conversionRate: '34.7%', avgRating: 5.0 },
      { name: 'Surendra Babu', leadsHandled: 122, converted: 30, conversionRate: '24.5%', avgRating: 4.8 },
    ],
    trafficSources: [
      { source: 'Organic Search', percentage: 42 },
      { source: 'Direct Consultations', percentage: 28 },
      { source: 'Instagram / Social', percentage: 18 },
      { source: 'Student Referrals', percentage: 12 },
    ],
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const res = await adminFetch('/analytics/overview');
      if (res) setData(res);
    } catch {}
    setLoading(false);
  };

  const handleExportCSV = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,Month,Leads,Applications\n' +
      data.monthlyLeads.map((e: any) => `${e.month},${e.leads},${e.applications}`).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'aegis_admissions_report_2026.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Business Analytics & Reports</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              Q3 High Performance
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Conversion funnels, counselor KPIs, student destination trends, and admissions forecasting.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchAnalytics}
            disabled={loading}
            className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-amber-600' : ''}`} />
          </button>
          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-xs shadow-xs hover:bg-slate-50 transition-colors"
          >
            <Download className="w-4 h-4 text-[#C5A059]" />
            <span>Export CSV Report</span>
          </button>
        </div>
      </div>

      {/* KPI Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Overall Conversion</span>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{data.leadConversionRate}</span>
            <span className="text-xs font-bold text-emerald-600">+3.2% vs Q2</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Lead to enrolled university student</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Consular Visa Grant</span>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{data.visaSuccessRate}</span>
            <span className="text-xs font-bold text-emerald-600">Tier-1 Track</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Across UK, US, Australia & Canada</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Average Counseling Score</span>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">4.92 / 5.0</span>
            <span className="text-xs font-bold text-amber-600">Verified</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Based on student feedback surveys</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Scholarship Aid</span>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-amber-900">₹14.2 Cr+</span>
            <span className="text-xs font-bold text-emerald-600">Won</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Awarded to Aegis students in 2026</p>
        </div>
      </div>

      {/* Counselor Performance Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Counselor Performance & Conversion Index</h2>
            <p className="text-xs text-slate-500">Student counseling throughput, conversion rates, and student satisfaction ratings.</p>
          </div>
          <span className="text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded-xl">
            Internal Staff Evaluation
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Counselor Name</th>
                <th className="py-3.5 px-4">Leads Handled</th>
                <th className="py-3.5 px-4">Successfully Converted</th>
                <th className="py-3.5 px-4">Conversion Rate</th>
                <th className="py-3.5 px-4 text-right">Student Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.counselorPerformance.map((c: any) => (
                <tr key={c.name} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">{c.name}</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">{c.leadsHandled} leads</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">{c.converted} enrolled</td>
                  <td className="py-3.5 px-4 font-extrabold text-amber-800">{c.conversionRate}</td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="font-bold text-slate-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 text-xs">
                      ★ {c.avgRating} / 5.0
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Traffic & Acquisition Sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <h2 className="text-sm font-bold text-slate-900 mb-1">Student Acquisition Channels</h2>
          <p className="text-xs text-slate-500 mb-4">Where prospective student applicants discover Aegis Overseas.</p>

          <div className="space-y-3">
            {data.trafficSources.map((src: any) => (
              <div key={src.source}>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">{src.source}</span>
                  <span className="text-slate-900 font-bold">{src.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-[#071228]" style={{ width: `${src.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#071228] to-[#143159] text-white p-6 rounded-2xl shadow-lg border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Admissions Season Forecast
            </span>
            <h2 className="text-lg font-bold">Fall 2026 Intake Targets</h2>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              With 312 active applications already lodged across UK Russell Group and US STEM universities, Aegis Overseas is on track to surpass 1,000 international student enrollments this academic year.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
            <span className="text-slate-400">Target Completion:</span>
            <span className="font-extrabold text-amber-400">84% On Track</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;

import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, DollarSign, ArrowUpRight, GraduationCap } from 'lucide-react';

export default function CoursesPage() {
  const courses = [
    {
      title: 'MSc Data Science & Artificial Intelligence',
      level: 'Postgraduate',
      duration: '1 - 2 Years',
      destinations: 'USA, UK, Germany, Ireland',
      avgSalary: '$95,000 - $130,000 / yr',
      description: 'Covers machine learning algorithms, deep neural architectures, big data distributed systems and applied predictive analytics.'
    },
    {
      title: 'Master of Business Administration (MBA)',
      level: 'Postgraduate',
      duration: '1 - 2 Years',
      destinations: 'USA, UK, Canada, Australia, France',
      avgSalary: '$110,000 - $160,000 / yr',
      description: 'Strategic management, venture capital finance, organizational leadership and international marketing.'
    },
    {
      title: 'MSc Computer Science & Software Engineering',
      level: 'Postgraduate',
      duration: '1.5 - 2 Years',
      destinations: 'USA, Canada, Germany, Australia',
      avgSalary: '$105,000 - $145,000 / yr',
      description: 'Distributed cloud computing, cybersecurity, software architectures, and full-stack systems engineering.'
    },
    {
      title: 'Automotive & Robotics Engineering',
      level: 'Postgraduate',
      duration: '2 Years',
      destinations: 'Germany (TUM, RWTH Aachen), USA',
      avgSalary: '€65,000 - €90,000 / yr',
      description: 'Autonomous vehicles, mechatronic sensors, embedded firmware, and sustainable battery powertrain design.'
    },
    {
      title: 'MSc Fintech & Quantitative Finance',
      level: 'Postgraduate',
      duration: '1 Year',
      destinations: 'United Kingdom (London), Ireland (Dublin)',
      avgSalary: '£60,000 - £85,000 / yr',
      description: 'Algorithmic trading, blockchain mechanics, financial econometrics, and risk analytics.'
    },
    {
      title: 'Healthcare & Nursing Administration',
      level: 'Undergraduate / Masters',
      duration: '2 - 3 Years',
      destinations: 'Australia, UK, New Zealand, Canada',
      avgSalary: 'AUD $75,000 - $95,000 / yr',
      description: 'Accredited clinical practices, healthcare informatics, hospital leadership and fast-track PR skill pathways.'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-navy-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 block">
            HIGH-DEMAND DISCIPLINES
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Popular International Courses
          </h1>
          <p className="text-base text-neutral-300 max-w-2xl mx-auto font-light">
            Discover cutting-edge degree programs with strong global employment outcomes, high starting salaries, and favorable post-study visa pathways.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {courses.map((course) => (
            <div
              key={course.title}
              className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-card-elevated hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-700 bg-gold-100/70 px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    {course.duration}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {course.description}
                </p>

                <div className="p-3 rounded-2xl bg-ivory-50 border border-neutral-100 space-y-1">
                  <div className="text-[11px] text-neutral-500">
                    <strong>Top Hubs:</strong> {course.destinations}
                  </div>
                  <div className="text-[11px] text-emerald-700 font-semibold">
                    <strong>Avg. ROI:</strong> {course.avgSalary}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100">
                <a
                  href={`https://wa.me/919246220044?text=Hi%20Aegis%20Overseas,%20I%20want%20to%20apply%20for%20${encodeURIComponent(course.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-bold bg-navy-900 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors"
                >
                  <span>Explore Universities for this Course</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

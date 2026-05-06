import React from 'react';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'FinTrack — Fintech Dashboard (UK)',
    description: 'A London-based fintech needed a real-time analytics dashboard for their 10,000+ users. We built it in 11 weeks.',
    result: '40% drop in support tickets and a Series A raised 3 months later.',
    tags: ['Fintech', 'React', 'Node.js'],
  },
  {
    title: 'MediBook — Healthcare Scheduling App (UAE)',
    description: 'A UAE clinic chain needed patients to book, reschedule, and get reminders without staff involvement. We delivered a full mobile app in 9 weeks.',
    result: '60% reduction in no-shows.',
    tags: ['Healthcare', 'Mobile App', 'Flutter'],
  },
  {
    title: 'LearnLoop — EdTech SaaS (India)',
    description: 'An education startup needed a full LMS platform before their school partnership deadline. We launched in 8 weeks.',
    result: '3,000 active students in month one.',
    tags: ['EdTech', 'SaaS', 'Next.js'],
  },
];

export const CaseStudies: React.FC = () => {
  return (
    <div
      id="work"
      className="relative overflow-hidden py-28"
      style={{ background: '#fafafa' }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{
              background: '#f3eafd',
              border: '1px solid rgba(133,58,232,0.2)',
              color: '#853ae8',
            }}
          >
            Featured Case Studies
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#111' }}
          >
            Work we're{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #853ae8 0%, #722dcc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              proud of
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group rounded-3xl p-8 bg-white transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              style={{
                border: '1.5px solid #f0e8fc',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              }}
            >
              <div className="mb-6 flex flex-wrap gap-2">
                {study.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{ background: '#f5f0fd', color: '#853ae8' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#111' }}>
                {study.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: '#6b7280' }}>
                {study.description}
              </p>
              <div className="p-4 rounded-2xl" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                <p className="text-sm font-medium" style={{ color: '#166534' }}>
                  <strong>Result:</strong> {study.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => {
              window.location.href = '/portfolio';
            }}
            className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:gap-3"
            style={{ color: '#853ae8' }}
          >
            See all case studies <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

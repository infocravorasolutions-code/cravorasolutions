import React from 'react';
import { SEO } from '../components/SEO';
import { ArrowRight, Clock, MapPin, Tag, ArrowUpRight } from 'lucide-react';

const cases = [
  {
    title: 'FinTrack — Real-time Wealth Dashboard',
    industry: 'Fintech',
    location: 'United Kingdom',
    time: '11 Weeks',
    description: "A London-based wealth management firm needed a secure, real-time portal for high-net-worth individuals to track global assets. We built a high-performance React dashboard with real-time API integrations.",
    result: '40% reduction in support calls; Series A secured.',
    tags: ['React', 'Node.js', 'AWS', 'Plaid API'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    title: 'MediBook — Clinic Management System',
    industry: 'Healthcare',
    location: 'United Arab Emirates',
    time: '9 Weeks',
    description: "One of UAE's fastest-growing clinic chains was struggling with manual patient bookings. We delivered a cross-platform mobile app for patients and a web-based admin portal for staff.",
    result: '60% decrease in no-shows; 25,000+ bookings in 6 months.',
    tags: ['Flutter', 'Django', 'PostgreSQL', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    title: 'LearnLoop — Multi-tenant LMS',
    industry: 'EdTech',
    location: 'India',
    time: '8 Weeks',
    description: "A leading educational startup needed a scalable platform to host video courses, manage assessments, and track student progress. We built a white-label solution for schools.",
    result: 'Launched with 3,000+ students; Scaled to 50+ schools.',
    tags: ['Next.js', 'Go', 'Mux Video', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    title: 'PropView — Real Estate CRM',
    industry: 'PropTech',
    location: 'USA',
    time: '12 Weeks',
    description: "Modernizing lead management for a major US brokerage. We built a custom CRM with automated lead routing, property matching, and integrated WhatsApp communication.",
    result: '30% increase in lead conversion rate.',
    tags: ['React', 'NestJS', 'Redis', 'Twilio'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=500'
  }
];

export const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Case Studies | Client Success Stories | Cravora Solutions" 
        description="Explore Cravora Solutions case studies — real projects, real outcomes. See how we have helped startups and enterprises build web apps, mobile apps, SaaS platforms, and AI tools." 
      />
      <div className="w-full pt-20 bg-[#fafafa]">
        
        {/* HERO */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(133,58,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(133,58,232,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5" style={{ background: '#f3eafd', color: '#853ae8' }}>
              Portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8" style={{ color: '#111' }}>
              Real Projects.{' '}
              <span style={{
                background: 'linear-gradient(135deg, #853ae8 0%, #722dcc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Real Outcomes.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              We let our work speak for itself. Explore our success stories to see how Cravora has helped clients across industries build products their users love.
            </p>
          </div>
        </section>

        {/* CASES GRID */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {cases.map((c, i) => (
                <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                  <div className="relative overflow-hidden h-64 sm:h-80">
                    <img 
                      src={c.image} 
                      alt={c.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#853ae8] text-xs font-bold uppercase tracking-wider">
                        {c.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 sm:p-10 flex-grow">
                    <div className="flex items-center gap-6 mb-6 text-xs text-gray-400 font-bold uppercase tracking-widest">
                      <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> {c.location}</div>
                      <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> {c.time}</div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#853ae8] transition-colors"  >
                      {c.title}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {c.description}
                    </p>
                    
                    <div className="p-6 rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] mb-8">
                      <div className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1">Success Metric</div>
                      <div className="text-green-800 font-bold">{c.result}</div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-50">
                      {c.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-gray-200 px-3 py-1 rounded-md">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24" style={{ background: 'linear-gradient(to bottom, #fff, #f5f0fd)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6"  >Have a similar project in mind?</h2>
            <p className="text-gray-600 text-lg mb-10">
              Let's talk about how we can achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://calendly.com/info-cravorasolutions/30min" 
                className="group flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#853ae8] text-white font-bold transition-all hover:scale-105"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="/contact" 
                className="px-10 py-5 rounded-2xl border-2 border-[#853ae8] text-[#853ae8] font-bold transition-all hover:bg-[#f3eafd]"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

import React from 'react';
import { SEO } from '../components/SEO';
import { ArrowRight, CheckCircle2, Star, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'FinTrack',
    category: 'Fintech Dashboard',
    metrics: '40% support reduction',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'A comprehensive wealth management platform for HNW individuals in the UK.',
  },
  {
    title: 'MediBook',
    category: 'Healthcare App',
    metrics: '60% fewer no-shows',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Patient booking and clinic management system for a major UAE chain.',
  },
  {
    title: 'LearnLoop',
    category: 'EdTech SaaS',
    metrics: '3,000+ active students',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Multi-tenant LMS designed for rapid scaling across private schools.',
  },
  {
    title: 'PropView',
    category: 'Real Estate CRM',
    metrics: '30% conversion boost',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Lead management and AI valuation tool for US brokerages.',
  }
];

export const Portfolio: React.FC = () => {
  return (
    <>
      <SEO 
        title="Portfolio — Custom Software Projects by Cravora" 
        description="Browse our portfolio of custom web apps, mobile apps, and SaaS products built for startups and SMBs across 12 countries." 
      />
      <div className="w-full pt-20 bg-[#fafafa]">
        
        {/* HERO */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(133,58,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(133,58,232,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8" style={{ color: '#111' }}>
              We build software that{' '}
              <span style={{
                background: 'linear-gradient(135deg, #853ae8 0%, #722dcc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                moves the needle.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              Explore our track record of shipping high-performance digital products on time and on budget.
            </p>
          </div>
        </section>

        {/* PROJECT GRID */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((p, i) => (
                <div key={i} className="group relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-[#853ae8] uppercase tracking-widest bg-[#f3eafd] px-3 py-1 rounded-full">
                        {p.category}
                      </span>
                      <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4" /> {p.metrics}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4"  >{p.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {p.description}
                    </p>
                    <a 
                      href="/case-studies" 
                      className="inline-flex items-center gap-2 text-[#853ae8] font-bold group-hover:gap-3 transition-all"
                    >
                      Read Case Study <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL MINI SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-[#853ae8] text-[#853ae8]" />)}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold italic text-gray-900 mb-8"  >
              "Cravora didn't just build our app; they built our business foundation. Their architectural choices allowed us to scale from 0 to 10k users without a single outage."
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="text-left">
                <div className="font-bold text-gray-900">Alex Rivera</div>
                <div className="text-sm text-gray-500">CEO, FintechFlow</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#fafafa]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to build your success story?</h2>
            <p className="text-gray-600 text-lg mb-10">
              We're ready to bring your vision to life with the same precision and care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://calendly.com/info-cravorasolutions/30min" 
                className="px-10 py-5 rounded-2xl bg-[#853ae8] text-white font-bold transition-all hover:scale-105"
              >
                Schedule a Call
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

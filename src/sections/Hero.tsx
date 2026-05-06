import React from 'react';
import { KPI } from '../components/ui/KPI';
import { ChevronRight, ArrowRight, Zap, Shield, Rocket, Sparkles, Globe, Cpu, Layout as LayoutIcon } from 'lucide-react';

const SERVICE_TAGS = [
  { icon: Globe, label: 'Web Apps' },
  { icon: LayoutIcon, label: 'SaaS Platforms' },
  { icon: Cpu, label: 'AI Solutions' },
  { icon: Shield, label: 'Internal Tools' },
];

export const Hero: React.FC = () => {
  const handleContactClick = () => window.open('https://calendly.com/info-cravorasolutions/30min', '_blank');
  
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-12 md:pt-20"
      style={{ background: '#fafafa' }}
    >
      {/* Subtle grid and gradient backgrounds */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(133,58,232,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(133,58,232,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Large soft glows for premium feel */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #853ae8 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[80px] opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #722dcc 0%, transparent 70%)' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="text-left">
            {/* Top pill badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8"
              style={{
                background: '#f3eafd',
                border: '1px solid rgba(133,58,232,0.2)',
                color: '#853ae8',
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#853ae8' }} />
              Now serving 50+ clients worldwide · Trusted since 2022
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6"
              style={{ color: '#111' }}
            >
              Custom software <br className="hidden md:block" />
              <span
                style={{
                  background: 'linear-gradient(135deg, #853ae8 0%, #722dcc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                engineered for companies
              </span> <br className="hidden md:block" />
              that want to scale faster.
            </h1>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-4 mb-8">
              {SERVICE_TAGS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-gray-500 font-semibold">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#853ae8]/30" />
                  <span className="text-sm md:text-base">{label}</span>
                </div>
              ))}
            </div>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              No templates. No shortcuts. Just reliable, scalable software built around your business by engineers who care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleContactClick}
                className="group flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto text-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #853ae8, #722dcc)',
                  boxShadow: '0 4px 20px rgba(133,58,232,0.3)',
                }}
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => window.open('/about/testimonials', '_self')}
                className="flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-gray-50 active:scale-95 w-full sm:w-auto text-center justify-center"
                style={{
                  background: '#fff',
                  border: '1.5px solid #e5e7eb',
                  color: '#111',
                }}
              >
                <span>View Our Work</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative lg:block">
            <div className="relative z-20 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(133,58,232,0.15)] border border-white/50 animate-float">
              <img 
                src="/brand/hero-mockup.png" 
                alt="Cravora Dashboard Mockup" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements behind mockup */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50 z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-50 rounded-full blur-3xl opacity-50 z-10" />
          </div>

        </div>

        {/* BOTTOM BAR: LOGOS & STATS */}
        <div className="mt-24 pt-12 border-t border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Logos Column */}
            <div className="lg:col-span-7">
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">Trusted by forward-thinking companies</p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-6 opacity-60">
                <img src="/brand/jay_rubber_logo_retina.png" alt="Logo" className="h-6 grayscale" />
                <img src="/brand/dr-enterprise-logo.png" alt="Logo" className="h-8 grayscale" />
                <img src="/brand/k.b_logo.png" alt="Logo" className="h-8 grayscale" />
                <img src="/brand/Chandra-Logo.png" alt="Logo" className="h-8 grayscale" />
                <img src="/brand/HLCG.jpeg" alt="Logo" className="h-8 grayscale" />
              </div>
            </div>

            {/* Divider for desktop */}
            <div className="hidden lg:block lg:col-span-1 h-12 w-px bg-gray-100 mx-auto" />

            {/* Stats Column */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-[#853ae8]">50+</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#853ae8]">98%</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase">Success</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#853ae8]">3+</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase">Years</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
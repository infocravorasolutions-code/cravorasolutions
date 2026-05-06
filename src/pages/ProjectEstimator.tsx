import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { Calculator, ArrowRight, CheckCircle2, ChevronRight, Zap, Shield, Sparkles } from 'lucide-react';

export const ProjectEstimatorPage: React.FC = () => {
  const [platform, setPlatform] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState('standard');
  const [estimate, setEstimate] = useState({ min: 0, max: 0 });

  const featureOptions = [
    { id: 'auth', label: 'User Auth & Profile', price: 1500 },
    { id: 'payment', label: 'Payments & Subscriptions', price: 2500 },
    { id: 'dashboard', label: 'Admin Dashboard', price: 3000 },
    { id: 'api', label: 'External API Integration', price: 2000 },
    { id: 'ai', label: 'AI/LLM Integration', price: 4000 },
    { id: 'chat', label: 'Real-time Chat', price: 2000 },
    { id: 'search', label: 'Advanced Search/Filters', price: 1500 },
    { id: 'notif', label: 'Push Notifications', price: 1000 },
  ];

  const calculateEstimate = () => {
    let base = platform.length * 5000;
    let featureCost = features.reduce((acc, f) => {
      const option = featureOptions.find(o => o.id === f);
      return acc + (option ? option.price : 0);
    }, 0);

    let total = base + featureCost;
    if (timeline === 'urgent') total *= 1.3;
    
    setEstimate({
      min: Math.round(total * 0.9),
      max: Math.round(total * 1.2)
    });
  };

  useEffect(() => {
    calculateEstimate();
  }, [platform, features, timeline]);

  const toggleFeature = (id: string) => {
    setFeatures(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const togglePlatform = (id: string) => {
    setPlatform(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  };

  return (
    <>
      <SEO 
        title="Project Cost Estimator | Get a Software Development Estimate | Cravora" 
        description="Use Cravora's free project cost estimator to get a ballpark estimate for your web app, mobile app, or SaaS project in under 2 minutes. No commitment required." 
      />
      <div className="w-full pt-20 bg-[#fafafa]">
        
        {/* HERO */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(133,58,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(133,58,232,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5" style={{ background: '#f3eafd', color: '#853ae8' }}>
              Free Tool
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8" style={{ color: '#111' }}>
              Get a Free Project Estimate in Under{' '}
              <span style={{
                background: 'linear-gradient(135deg, #853ae8 0%, #722dcc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                2 Minutes.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              Answer a few quick questions about your project and we will give you a realistic ballpark estimate — completely free, with no obligation to proceed.
            </p>
          </div>
        </section>

        {/* ESTIMATOR UI */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* CONFIGURATION */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* PLATFORM */}
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[#853ae8]" /> 1. What type of product do you want to build?
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {['Web Application', 'Mobile App', 'SaaS Platform', 'AI Tool', 'MVP'].map(p => (
                      <button
                        key={p}
                        onClick={() => togglePlatform(p)}
                        className={`p-6 rounded-2xl border-2 transition-all text-center font-bold ${
                          platform.includes(p) ? 'border-[#853ae8] bg-[#f5f0fd] text-[#853ae8]' : 'border-gray-100 bg-white text-gray-500 hover:border-[#853ae8]/30'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* FEATURES */}
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#853ae8]" /> 2. Which features do you need?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {featureOptions.map(f => (
                      <button
                        key={f.id}
                        onClick={() => toggleFeature(f.id)}
                        className={`p-5 rounded-2xl border-2 transition-all text-left flex items-center justify-between ${
                          features.includes(f.id) ? 'border-[#853ae8] bg-[#f5f0fd]' : 'border-gray-100 bg-white hover:border-[#853ae8]/30'
                        }`}
                      >
                        <span className={`font-semibold ${features.includes(f.id) ? 'text-[#853ae8]' : 'text-gray-700'}`}>{f.label}</span>
                        {features.includes(f.id) && <CheckCircle2 className="w-5 h-5 text-[#853ae8]" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* TIMELINE */}
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#853ae8]" /> 3. Target Timeline
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { id: 'standard', label: 'Standard (12-16 weeks)' },
                      { id: 'urgent', label: 'Urgent (6-8 weeks)' }
                    ].map(t => (
                      <button
                        key={t.id}
                        onClick={() => setTimeline(t.id)}
                        className={`px-8 py-4 rounded-2xl border-2 transition-all font-bold ${
                          timeline === t.id ? 'border-[#853ae8] bg-[#f5f0fd] text-[#853ae8]' : 'border-gray-100 bg-white text-gray-500 hover:border-[#853ae8]/30'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* RESULT STICKY */}
              <div className="lg:col-start-3">
                <div className="sticky top-32 bg-white p-8 sm:p-10 rounded-[2.5rem] border-2 border-[#853ae8] shadow-2xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#853ae8] uppercase tracking-widest mb-4">
                    <Calculator className="w-4 h-4" /> Estimated Budget
                  </div>
                  <div className="text-4xl font-extrabold text-gray-900 mb-2"  >
                    ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-500 mb-8 font-medium">This is a realistic ballpark estimate.*</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Includes Discovery & UX Design</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Dedicated Engineering Team</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>30 Days Post-Launch Support</span>
                    </div>
                  </div>

                  <a 
                    href="https://calendly.com/info-cravorasolutions/30min" 
                    className="flex items-center justify-center gap-2 w-full py-5 rounded-2xl bg-[#853ae8] text-white font-bold transition-all hover:scale-[1.02]"
                  >
                    Book Discovery Call <ArrowRight className="w-5 h-5" />
                  </a>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-3">This Is Just the Start</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Every project is different. The best next step is a free 30-minute discovery call to get a clear, itemised proposal.
                    </p>
                    <p className="mt-3 text-[10px] text-gray-400">
                      No commitment. No sales pressure. Just an honest conversation.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TRUST SIGNALS */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-10">Why our estimates are accurate</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-[#f3eafd] flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-6 h-6 text-[#853ae8]" />
                </div>
                <h4 className="font-bold mb-2">Fixed-Price Quotes</h4>
                <p className="text-sm text-gray-500">We don't do 'estimates' that double in cost mid-project.</p>
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-[#f3eafd] flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-6 h-6 text-[#853ae8]" />
                </div>
                <h4 className="font-bold mb-2">No Hidden Costs</h4>
                <p className="text-sm text-gray-500">Testing, project management, and QA are always included.</p>
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-[#f3eafd] flex items-center justify-center mx-auto mb-6">
                  <ChevronRight className="w-6 h-6 text-[#853ae8]" />
                </div>
                <h4 className="font-bold mb-2">Detailed Roadmap</h4>
                <p className="text-sm text-gray-500">Every quote comes with a clear timeline and milestone list.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

import React, { useState } from 'react';
import { ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

const values = [
  {
    title: 'Honesty first',
    description: "If your idea has a flaw, we'll tell you. If a feature is unnecessary, we'll say so. We'd rather lose a sale than waste your money.",
  },
  {
    title: 'Delivery matters',
    description: "We've maintained a 98% on-time delivery rate across 50+ projects. We're not perfect — but we take commitments seriously.",
  },
  {
    title: 'Long-term thinking',
    description: "We build software that can grow with you. No shortcuts that become expensive problems six months later.",
  },
  {
    title: 'Real communication',
    description: "Weekly updates. A shared Slack channel. A team that actually responds. No chasing, no excuses.",
  },
];

const faqs = [
  {
    question: 'Is Cravora Solutions a product company or a services company?',
    answer: "We are a services company — we build custom software for clients. We don't sell a product; we build yours.",
  },
  {
    question: 'How big is your team?',
    answer: "We're a focused team of 15+ engineers, designers, and project managers. Small enough to care, experienced enough to deliver.",
  },
  {
    question: 'Do you sign NDAs?',
    answer: "Absolutely. Every project starts with an NDA. Your ideas are safe with us.",
  },
];

export const AboutUs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <SEO 
        title="About Cravora Solutions — Custom Software Development Team" 
        description="Learn who we are, how we work, and why 50+ startups and SMBs across 12 countries trust Cravora Solutions to build their software." 
      />
      <div className="w-full pt-20" style={{ background: '#fafafa' }}>
        
        {/* HERO */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8" style={{ color: '#111' }}>
              We started Cravora because we kept seeing startups get{' '}
              <span style={{
                background: 'linear-gradient(135deg, #853ae8 0%, #722dcc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                let down
              </span>{' '}
              by software agencies.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
              Too many promises. Too little delivery. Projects that ran over time and budget. Founders who couldn't get a straight answer from their own dev team.
            </p>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              So we built a different kind of company — one that treats your product like it's our own, communicates like a partner, and measures itself on your outcomes, not just our deliverables.
            </p>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5" style={{ background: '#f3eafd', color: '#853ae8' }}>
                Who we are
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#111' }}>
                A team that builds, not just codes
              </h2>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-600 max-w-3xl">
              <p className="mb-6">
                Cravora Solutions is a custom software development company founded to help startups and SMBs build the digital products they actually need — without the agency runaround.
              </p>
              <p className="mb-6">
                We're a team of engineers, designers, and product thinkers who've worked across fintech, healthtech, e-commerce, edtech, and real estate. We've seen what makes products succeed — and what makes them quietly die after launch.
              </p>
              <p>
                We work with clients in 12+ countries. Not because we set out to go global, but because good work travels.
              </p>
            </div>
          </div>
        </section>

        {/* OUR VALUES */}
        <section className="py-20" style={{ background: '#fafafa' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5" style={{ background: '#f3eafd', color: '#853ae8' }}>
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#111' }}>
                What we actually believe
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v) => (
                <div key={v.title} className="bg-white p-8 rounded-3xl" style={{ border: '1.5px solid #f0e8fc', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#111' }}>
                    {v.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MILESTONES */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5" style={{ background: '#f3eafd', color: '#853ae8' }}>
                Milestones
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#111' }}>
                By the numbers
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-[#853ae8] mb-2 font-heading">50+</div>
                <div className="text-gray-600 font-medium">Projects delivered</div>
              </div>
              <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-[#853ae8] mb-2 font-heading">12+</div>
                <div className="text-gray-600 font-medium">Countries served</div>
              </div>
              <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-[#853ae8] mb-2 font-heading">98%</div>
                <div className="text-gray-600 font-medium">On-time delivery rate</div>
              </div>
              <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-[#853ae8] mb-2 font-heading">4h</div>
                <div className="text-gray-600 font-medium">Average response time</div>
              </div>
              <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100 text-center sm:col-span-2 lg:col-span-1">
                <div className="text-4xl font-bold text-[#853ae8] mb-2 font-heading">$0</div>
                <div className="text-gray-600 font-medium">Unresolved client disputes</div>
              </div>
            </div>
          </div>
        </section>

        {/* LIFE AT CRAVORA */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5" style={{ background: '#f3eafd', color: '#853ae8' }}>
                  Life at Cravora
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#111' }}>
                  Where the magic happens
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our office isn't just where we code — it's where we brainstorm, debate, and collaborate. We believe that the best software comes from teams that actually enjoy working together.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether we're in the middle of a deep-focus sprint or a late-afternoon pizza session, the energy is always about one thing: building something better than we did yesterday.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/brand/Office:Work Imge-1.jpg" 
                    alt="Office Life 1" 
                    className="rounded-2xl w-full h-64 object-cover shadow-lg"
                  />
                  <img 
                    src="/brand/astronaut.png" 
                    alt="Creative spirit" 
                    className="rounded-2xl w-full h-48 object-contain bg-[#f3eafd] p-8 shadow-md"
                  />
                </div>
                <div className="pt-8 space-y-4">
                  <img 
                    src="/brand/Office:Work Images-2.jpg" 
                    alt="Office Life 2" 
                    className="rounded-2xl w-full h-80 object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE TEAM PREVIEW */}
        <section className="py-20 bg-[#fafafa]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5" style={{ background: '#f3eafd', color: '#853ae8' }}>
                The Founders
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#111' }}>
                Meet the minds behind Cravora
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Darshan Patel', role: 'Founder', img: '/brand/Darshan-profile.jpeg' },
                { name: 'Mohit Rathhod', role: 'Co-Founder & CTO', img: '/brand/mohit-profile.jpg' },
                { name: 'Dev Patel', role: 'COO', img: '/brand/Dev-profile.jpg', pos: 'top' },
              ].map((m) => (
                <div key={m.name} className="group">
                  <div className="relative mb-6 overflow-hidden rounded-3xl aspect-[4/5]">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" style={{ objectPosition: m.pos || 'center' }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1"  >{m.name}</h3>
                  <p className="text-[#853ae8] font-semibold text-sm">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20" style={{ background: '#fafafa' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5" style={{ background: '#f3eafd', color: '#853ae8' }}>
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#111' }}>
                Questions about us
              </h2>
            </div>
            
            <div className="space-y-4 mb-12">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer bg-white"
                  style={{
                    border: `1.5px solid ${openIndex === index ? '#853ae8' : '#e5e7eb'}`,
                    boxShadow: openIndex === index ? '0 4px 20px rgba(133,58,232,0.08)' : 'none',
                  }}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="p-6 flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold" style={{ color: '#111' }}>
                      {faq.question}
                    </h3>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                      style={{
                        background: openIndex === index ? '#853ae8' : '#f3f4f6',
                        color: openIndex === index ? '#fff' : '#6b7280',
                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                    }`}
                  >
                    <p className="text-base leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/about/team" className="text-[#853ae8] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Meet the team <ArrowRight className="w-4 h-4" />
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a href="/portfolio" className="text-[#853ae8] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                See our work <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
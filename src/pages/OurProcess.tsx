import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const steps = [
  {
    title: 'Phase 1 — Discovery',
    time: '1–2 Weeks',
    deliverables: 'PRD, Technical Architecture, Project Estimate, Timeline',
    content: 'Every great product starts with a great question: what problem are we actually solving? Our discovery phase is a structured deep-dive into your business, users, and technical requirements. We map user journeys, audit existing systems, and identify risks before development begins.'
  },
  {
    title: 'Phase 2 — Design',
    time: '2–4 Weeks',
    deliverables: 'UX Wireframes, UI Design System, High-Fidelity Figma Prototype',
    content: 'We transform requirements into experiences. We start with wireframes to establish user flows, then build a high-fidelity design system in Figma. You review and approve designs at each stage, ensuring the final product matches your brand perfectly.'
  },
  {
    title: 'Phase 3 — Development',
    time: '4–16 Weeks',
    deliverables: 'Working software delivered in two-week sprints, staging access',
    content: 'Development runs in two-week agile sprints. At the end of each sprint, we demo working software — actual, functional features you can test. You have full visibility via a shared project board and a dedicated project manager.'
  },
  {
    title: 'Phase 4 — Quality Assurance',
    time: 'Ongoing',
    deliverables: 'QA Test Report, Performance and Security Audit Summary',
    content: 'QA is woven into every sprint. Our engineers write unit tests as they build, and our dedicated QA team runs functional, regression, and cross-device testing. Before release, we run a dedicated QA sprint to ensure everything is rock-solid.'
  },
  {
    title: 'Phase 5 — Launch',
    time: '1 Week',
    deliverables: 'Production Deployment, Monitoring Setup, 48h High-Alert Support',
    content: 'Launch day is planned, not improvised. We handle production environment configuration, database migrations, DNS setup, and monitoring alerts. We watch all systems for 48 hours post-launch to ensure a smooth go-live.'
  }
];

const timelineExpectations = [
  { type: 'MVP (core feature set)', timeline: '6–8 weeks' },
  { type: 'Standard Web Application', timeline: '8–14 weeks' },
  { type: 'Mobile App (Flutter)', timeline: '10–16 weeks' },
  { type: 'SaaS Platform (multi-tenant)', timeline: '12–20 weeks' },
  { type: 'Full Product (web + mobile + backend)', timeline: '16–28 weeks' }
];

export const OurProcess: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <SEO 
        title="Our Development Process | How Cravora Works | Cravora Solutions" 
        description="Discover how Cravora Solutions delivers software projects — from discovery and UX design through development, QA, and launch. A transparent, agile process." 
      />
      
      <div className="w-full pt-20 bg-[#fafafa]">
        
        {/* HERO */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8" style={{ color: '#111' }}>
              A Development Process Built on Transparency
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              We believe the best client relationships are built on clarity — clear timelines, clear responsibilities, and clear communication at every stage.
            </p>
          </div>
        </section>

        {/* TIMELINE / STEPS */}
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl" style={{ border: '1.5px solid #f0e8fc', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center w-12 h-12 rounded-2xl font-bold text-xl" style={{ background: '#f3eafd', color: '#853ae8' }}>
                        {index + 1}
                      </span>
                      <h2 className="text-2xl font-bold" style={{ color: '#111' }}>
                        {step.title}
                      </h2>
                    </div>
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold" style={{ background: '#f5f0fd', color: '#853ae8' }}>
                      {step.time}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {step.content}
                  </p>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">Deliverables:</span>
                    <span className="text-sm font-semibold text-gray-700">{step.deliverables}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE EXPECTATIONS TABLE */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#111' }}>
                How long does a typical project take?
              </h2>
              <p className="text-gray-600">Timelines depend on scope and complexity. We provide precise estimates during discovery.</p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#fafafa]">
                  <tr>
                    <th className="px-8 py-5 text-sm font-bold text-gray-500 uppercase tracking-wider">Project Type</th>
                    <th className="px-8 py-5 text-sm font-bold text-gray-500 uppercase tracking-wider">Typical Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {timelineExpectations.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-5 font-semibold text-gray-900">{item.type}</td>
                      <td className="px-8 py-5 text-gray-600">{item.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#111' }}>
              Ready to start your project?
            </h2>
            <a href="https://calendly.com/info-cravorasolutions/30min" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 active:scale-95" style={{ background: 'linear-gradient(135deg, #853ae8, #722dcc)', boxShadow: '0 4px 20px rgba(133,58,232,0.3)' }}>
              <span>Book a free discovery call</span>
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>

      </div>
    </>
  );
};

import React from 'react';
import { PhoneCall, FileText, LayoutTemplate, Rocket, CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    icon: PhoneCall,
    number: '1',
    title: 'Discovery Call (Free)',
    description: 'We learn about your business, your problem, and what success looks like for you. No sales pitch — just a real conversation.',
    details: ['60-minute session', 'Goal alignment', 'Requirement gathering', 'Honest feasibility check'],
    accent: '#853ae8',
    lightBg: '#f5f0fd',
  },
  {
    icon: FileText,
    number: '2',
    title: 'Proposal & Scope',
    description: 'You get a clear proposal: what we\'ll build, how long it\'ll take, and what it costs. No vague estimates.',
    details: ['Detailed feature list', 'Fixed-price quote', 'Clear timelines', 'Tech stack recommendation'],
    accent: '#722dcc',
    lightBg: '#ede5fd',
  },
  {
    icon: LayoutTemplate,
    number: '3',
    title: 'Design & Build',
    description: 'Your project gets a dedicated team. Weekly updates, a shared Slack channel, and working demos at every milestone.',
    details: ['Wireframes & UI design', '2-week sprint cycles', 'Shared Slack channel', 'Live staging environment'],
    accent: '#853ae8',
    lightBg: '#f5f0fd',
  },
  {
    icon: Rocket,
    number: '4',
    title: 'Launch & Support',
    description: 'We don\'t disappear after launch. We monitor, fix, and improve for 30 days included — and beyond if you need.',
    details: ['Cloud deployment', 'Security testing', '30-days free support', 'Ongoing retainer options'],
    accent: '#722dcc',
    lightBg: '#ede5fd',
  },
];

export const Process: React.FC = () => {
  return (
    <div
      id="process"
      className="relative overflow-hidden py-28"
      style={{ background: '#fff' }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{
              background: '#f3eafd',
              border: '1px solid rgba(133,58,232,0.2)',
              color: '#853ae8',
            }}
          >
            How We Work
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#111' }}
          >
            Simple process.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #853ae8 0%, #722dcc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              No surprises.
            </span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            A battle-tested methodology that takes you from first idea to live product — and beyond.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Left connector line */}
          <div
            className="absolute left-8 top-10 bottom-10 w-px hidden lg:block"
            style={{ background: 'linear-gradient(to bottom, #e4d4f8, #d8c8fb)', opacity: 0.6 }}
          />

          <div className="space-y-5">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="group flex gap-6 lg:gap-10 items-start"
              >
                {/* Step number indicator */}
                <div
                  className="relative flex-shrink-0 z-10 w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-300 group-hover:shadow-md"
                  style={{
                    background: step.lightBg,
                    border: '1.5px solid #e4d4f8',
                    color: step.accent,
                  }}
                >
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-2xl p-6 sm:p-7 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5"
                  style={{
                    background: '#fff',
                    border: '1.5px solid #f0e8fc',
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="p-2.5 rounded-xl flex-shrink-0"
                      style={{ background: step.lightBg, color: step.accent }}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: '#111' }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#6b7280' }}>
                    {step.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {step.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-1.5 text-xs"
                        style={{ color: '#9ca3af' }}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: step.accent }} />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
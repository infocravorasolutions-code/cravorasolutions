import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does a custom software project take?',
    answer: 'Most projects are 6–16 weeks depending on complexity. A focused MVP can be done in 6–10 weeks. A full SaaS platform typically takes 14–20 weeks. We give you a clear timeline before we start — and we stick to it.',
  },
  {
    question: 'How much does custom software development cost?',
    answer: 'It depends on scope, but most of our projects range from $8,000 to $80,000. We offer fixed-price projects for well-defined scopes and time-and-material for evolving ones. We\'ll give you a detailed estimate after our first call — no commitment required.',
  },
  {
    question: 'Do you work with startups that don\'t have a tech team?',
    answer: 'Yes — about 60% of our clients are non-technical founders. We handle everything from architecture to deployment and explain things in plain English throughout.',
  },
  {
    question: 'Where is Cravora Solutions based?',
    answer: 'We\'re headquartered in India with clients across the US, UK, Middle East, Southeast Asia, and Europe. We work across time zones with no disruption to your workflow.',
  },
  {
    question: 'What happens after my project is launched?',
    answer: 'Every project includes 30 days of free post-launch support. After that, we offer monthly retainer plans for ongoing development, maintenance, and feature additions.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div
      id="faq"
      className="relative overflow-hidden py-28"
      style={{ background: '#fafafa' }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{
              background: '#f3eafd',
              border: '1px solid rgba(133,58,232,0.2)',
              color: '#853ae8',
            }}
          >
            Common Questions
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#111' }}
          >
            Frequently Asked{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #853ae8 0%, #722dcc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Questions
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              style={{
                background: '#fff',
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
                <p className="text-base leading-relaxed" style={{ color: '#4b5563' }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

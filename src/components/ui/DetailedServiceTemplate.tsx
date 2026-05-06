import React, { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SEO } from '../SEO';

interface FaqItem {
  question: string;
  answer: string;
}

export interface DetailedServiceTemplateProps {
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroSubtitle?: string;
  heroDescription: string;
  buildSectionTitle: string;
  buildItems: string[];
  secondarySectionTitle?: string;
  secondarySectionContent?: React.ReactNode;
  problemTitle?: string;
  problemContent?: React.ReactNode;
  solutionTitle?: string;
  solutionContent?: React.ReactNode;
  techStack?: { category: string; items: string }[];
  faqs?: FaqItem[];
  ctaText: string;
  ctaLink?: string;
}

export const DetailedServiceTemplate: React.FC<DetailedServiceTemplateProps> = ({
  seoTitle,
  seoDescription,
  heroTitle,
  heroSubtitle,
  heroDescription,
  buildSectionTitle,
  buildItems,
  secondarySectionTitle,
  secondarySectionContent,
  problemTitle,
  problemContent,
  solutionTitle,
  solutionContent,
  techStack,
  faqs,
  ctaText,
  ctaLink = 'https://calendly.com/info-cravorasolutions/30min',
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      
      <div className="w-full pt-20 bg-[#fafafa]">
        
        {/* HERO */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(133,58,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(133,58,232,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {heroSubtitle && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5" style={{ background: '#f3eafd', color: '#853ae8' }}>
                {heroSubtitle}
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8" style={{ color: '#111' }}>
              {heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              {heroDescription}
            </p>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        {(problemContent || solutionContent) && (
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {problemContent && (
                  <div>
                    <h2 className="text-3xl font-bold mb-8" style={{ color: '#111' }}>
                      {problemTitle || 'The Problem'}
                    </h2>
                    <div className="prose prose-lg text-gray-600 leading-relaxed font-medium">
                      {problemContent}
                    </div>
                  </div>
                )}
                {solutionContent && (
                  <div>
                    <h2 className="text-3xl font-bold mb-8" style={{ color: '#111' }}>
                      {solutionTitle || 'Our Solution'}
                    </h2>
                    <div className="prose prose-lg text-gray-600 leading-relaxed font-medium">
                      {solutionContent}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* CONTENT */}
        <section className="py-20 bg-[#fafafa]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Left Col: What we build */}
              <div>
                <h2 className="text-2xl font-bold mb-8" style={{ color: '#111' }}>
                  {buildSectionTitle}
                </h2>
                <div className="space-y-4">
                  {buildItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-[#fafafa] hover:border-[#853ae8] hover:shadow-sm transition-all">
                      <CheckCircle2 className="w-6 h-6 text-[#853ae8] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium text-lg leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Col: Secondary / Tech Stack */}
              <div className="space-y-16">
                {secondarySectionTitle && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6" style={{ color: '#111' }}>
                      {secondarySectionTitle}
                    </h2>
                    <div className="prose prose-lg text-gray-600">
                      {secondarySectionContent}
                    </div>
                  </div>
                )}

                {techStack && techStack.length > 0 && (
                  <div className="bg-[#fafafa] p-8 rounded-3xl border border-[#f0e8fc]">
                    <h2 className="text-xl font-bold mb-6" style={{ color: '#111' }}>
                      Our Tech Stack
                    </h2>
                    <div className="space-y-4">
                      {techStack.map((tech, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                          <span className="font-semibold text-gray-900 w-24 flex-shrink-0">{tech.category}:</span>
                          <span className="text-gray-600">{tech.items}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS SUMMARY */}
        <section className="py-16 bg-white border-t border-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold" style={{ color: '#111' }}>
                How we deliver your project
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Scoping', desc: 'Detailed roadmap and fixed-price quote.' },
                { step: '02', title: 'Building', desc: 'Weekly demos and agile development.' },
                { step: '03', title: 'Launching', desc: 'Full deployment and 30 days support.' },
              ].map((item) => (
                <div key={item.step} className="relative p-8 rounded-3xl bg-[#fafafa] border border-gray-100">
                  <div className="text-4xl font-bold opacity-10 mb-4" style={{ color: '#853ae8' }}>{item.step}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#111' }}>{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ & CTA */}
        {(faqs && faqs.length > 0) || ctaText ? (
          <section className="py-20" style={{ background: '#fafafa' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {faqs && faqs.length > 0 && (
                <div className="mb-20">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold" style={{ color: '#111' }}>
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer bg-white"
                        style={{
                          border: `1.5px solid ${openFaq === index ? '#853ae8' : '#e5e7eb'}`,
                          boxShadow: openFaq === index ? '0 4px 20px rgba(133,58,232,0.08)' : 'none',
                        }}
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        <div className="p-6 flex items-center justify-between gap-4">
                          <h3 className="text-lg font-bold" style={{ color: '#111' }}>
                            {faq.question}
                          </h3>
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                            style={{
                              background: openFaq === index ? '#853ae8' : '#f3f4f6',
                              color: openFaq === index ? '#fff' : '#6b7280',
                              transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </div>
                        </div>
                        <div
                          className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                            openFaq === index ? 'pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                          }`}
                        >
                          <p className="text-base leading-relaxed text-gray-600">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {ctaText && (
                <div className="text-center">
                  <a href={ctaLink} target={ctaLink.startsWith('http') ? '_blank' : '_self'} rel={ctaLink.startsWith('http') ? 'noreferrer' : ''} className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white transition-all duration-300 hover:scale-105 active:scale-95" style={{ background: 'linear-gradient(135deg, #853ae8, #722dcc)', boxShadow: '0 4px 20px rgba(133,58,232,0.3)' }}>
                    <span>{ctaText}</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              )}

            </div>
          </section>
        ) : null}

      </div>
    </>
  );
};

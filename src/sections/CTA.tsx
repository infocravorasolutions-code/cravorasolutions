import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, Sparkles, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { mailService } from '../services/mailService';

const BENEFITS = [
  'Free consultation call',
  'Response within 24 hours',
  'No commitment required',
  'NDA available on request',
];

export const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleGetStarted = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // In a real scenario, this would send an inquiry via EmailJS
      // For now, it will use the credentials if they exist or a placeholder
      await mailService.sendInquiry(email);
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    }
  };

  return (
    <div
      id="cta"
      className="relative overflow-hidden py-28"
      style={{ background: '#fafafa' }}
    >
      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(133,58,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(133,58,232,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Soft glow center */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(133,58,232,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top badge */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium"
            style={{
              background: '#f3eafd',
              border: '1px solid rgba(133,58,232,0.2)',
              color: '#722dcc',
            }}
          >
            <Sparkles className="w-4 h-4" />
            Let's Build Something Great Together
          </div>
        </div>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
          style={{ color: '#111' }}
        >
          Ready to build{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #853ae8 0%, #722dcc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            something?
          </span>
        </h2>

        <p
          className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
          style={{ color: '#6b7280' }}
        >
          Tell us about your project. We'll reply within 4 hours with honest thoughts — whether we're the right fit or not.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => window.open('https://calendly.com/info-cravorasolutions/30min', '_blank')}
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #853ae8, #722dcc)',
              boxShadow: '0 4px 20px rgba(133,58,232,0.3)',
            }}
          >
            <span>Book a Free Discovery Call</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => window.open('https://wa.me/918200347067', '_blank')}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: '#fff',
              border: '1.5px solid rgba(133,58,232,0.35)',
              color: '#853ae8',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            <Phone className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

        {/* Benefits list */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12">
          {BENEFITS.map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm" style={{ color: '#9ca3af' }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#853ae8' }} />
              {b}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px my-8 max-w-xs mx-auto"
          style={{ background: '#f0e8fc' }}
        />

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="mailto:info@cravorasolutions.com"
            className="flex items-center gap-3 transition-all duration-300 hover:scale-105"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: '#f5f0fd',
                border: '1px solid #e4d4f8',
              }}
            >
              <Mail className="w-4 h-4" style={{ color: '#853ae8' }} />
            </div>
            <span
              className="text-sm font-medium transition-colors duration-300 hover:text-[#853ae8]"
              style={{ color: '#6b7280' }}
            >
              info@cravorasolutions.com
            </span>
          </a>

          <div className="hidden sm:block w-px h-6" style={{ background: '#e5e7eb' }} />

          <a
            href="tel:+918200347067"
            className="flex items-center gap-3 transition-all duration-300 hover:scale-105"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: '#f5f0fd',
                border: '1px solid #e4d4f8',
              }}
            >
              <Phone className="w-4 h-4" style={{ color: '#853ae8' }} />
            </div>
            <span
              className="text-sm font-medium transition-colors duration-300 hover:text-[#853ae8]"
              style={{ color: '#6b7280' }}
            >
              +91 82003 47067
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
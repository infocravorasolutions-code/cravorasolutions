import React, { useState } from 'react';
import { Code, Smartphone, Cloud, Network, Brain, Zap, ArrowUpRight } from 'lucide-react';

const capabilities = [
  {
    icon: Code,
    title: 'Custom Web Applications',
    description:
      'Portals, dashboards, internal tools, client-facing platforms. If you can describe it, we can build it.',
    features: ['React & Next.js', 'Node.js & Django', 'Client Portals', 'Dashboards'],
    accent: '#853ae8',
    lightBg: '#f5f0fd',
    lightBorder: '#e4d4f8',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'iOS, Android, or cross-platform. Fast, smooth, and built to scale from Day 1.',
    features: ['iOS & Android', 'React Native & Flutter', 'App Store Deployment', 'Native Performance'],
    accent: '#722dcc',
    lightBg: '#ede5fd',
    lightBorder: '#d8c8fb',
  },
  {
    icon: Cloud,
    title: 'SaaS Products',
    description:
      'Have a software idea you want to turn into a business? We\'ll build your SaaS from scratch — architecture, auth, billing, everything.',
    features: ['Multi-tenant', 'Stripe Billing', 'User Auth', 'Admin Panels'],
    accent: '#853ae8',
    lightBg: '#f5f0fd',
    lightBorder: '#e4d4f8',
  },
  {
    icon: Network,
    title: 'API & Integrations',
    description:
      'Connecting tools that weren\'t designed to talk to each other is what we do every week. Stripe, Salesforce, WhatsApp, you name it.',
    features: ['REST APIs', 'System Sync', 'Third-party APIs', 'Legacy Integration'],
    accent: '#722dcc',
    lightBg: '#ede5fd',
    lightBorder: '#d8c8fb',
  },
  {
    icon: Brain,
    title: 'AI & Automation',
    description:
      'Cut hours of manual work. We build AI-powered features and workflow automations that actually save your team time — not just look impressive in demos.',
    features: ['Custom LLMs', 'Workflow Automation', 'Data Extraction', 'Chatbots'],
    accent: '#853ae8',
    lightBg: '#f5f0fd',
    lightBorder: '#e4d4f8',
  },
  {
    icon: Zap,
    title: 'MVP Development',
    description:
      'You need to validate your idea fast without burning your runway. We\'ve launched dozens of MVPs in 6–10 weeks. Lean, functional, investor-ready.',
    features: ['6-10 Week Delivery', 'Core Features', 'Investor Ready', 'Lean Architecture'],
    accent: '#722dcc',
    lightBg: '#ede5fd',
    lightBorder: '#d8c8fb',
  },
];

type Capability = typeof capabilities[0];

const CapabilityCard: React.FC<Capability> = ({
  icon: Icon,
  title,
  description,
  features,
  accent,
  lightBg,
  lightBorder,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-3xl p-8 cursor-pointer transition-all duration-300"
      style={{
        background: hovered ? lightBg : '#fff',
        border: `1.5px solid ${hovered ? lightBorder : '#f0e8fc'}`,
        boxShadow: hovered
          ? '0 12px 36px rgba(133,58,232,0.12)'
          : '0 2px 12px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-3px)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <div
        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-all duration-300"
        style={{
          background: lightBg,
          color: accent,
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}
      >
        <Icon className="w-7 h-7" />
      </div>

      {/* Title + arrow */}
      <div className="flex items-start justify-between mb-4">
        <h3
          className="text-xl font-bold leading-tight"
          style={{ color: '#111' }}
        >
          {title}
        </h3>
        <ArrowUpRight
          className="w-5 h-5 flex-shrink-0 ml-2 mt-1 transition-all duration-300"
          style={{
            color: accent,
            opacity: hovered ? 1 : 0.3,
            transform: hovered ? 'translate(2px,-2px)' : 'none',
          }}
        />
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-6" style={{ color: '#6b7280' }}>
        {description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-2">
        {features.map((f) => (
          <span
            key={f}
            className="px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: lightBg,
              border: `1px solid ${lightBorder}`,
              color: accent,
            }}
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Capabilities: React.FC = () => {
  return (
    <div
      id="capabilities"
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{
              background: '#f3eafd',
              border: '1px solid rgba(133,58,232,0.2)',
              color: '#853ae8',
            }}
          >
            Our Expertise
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#111' }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #853ae8 0%, #722dcc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              What we build
            </span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto" style={{ color: '#6b7280' }}>
            We specialise in six areas — not because we picked them arbitrarily, but because these are exactly what growing startups and SMBs need most.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.title} {...cap} />
          ))}
        </div>
      </div>
    </div>
  );
};
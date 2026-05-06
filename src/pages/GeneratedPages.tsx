import React from 'react';
import { GenericTemplate } from '../components/ui/GenericTemplate';

// ----------------------------------------------------
// Services Pages
// ----------------------------------------------------
export const WebAppDev = () => (
  <GenericTemplate 
    title="Custom Web Application Development" 
    description="Scalable, secure, and fast web applications built with modern frameworks."
    badge="Services"
    features={['React & Next.js Frontends', 'Node.js & Python Backends', 'Cloud-Native Architecture', 'Enterprise-grade Security']}
  />
);

export const MobileAppDev = () => (
  <GenericTemplate 
    title="Mobile App Development" 
    description="Cross-platform iOS and Android apps that users love."
    badge="Services"
    features={['React Native & Flutter', 'Native iOS/Android', 'App Store Deployment', 'Real-time Sync']}
  />
);

export const SaaSDevelopment = () => (
  <GenericTemplate 
    title="SaaS Development" 
    description="Build your SaaS product with multi-tenancy, billing, and rock-solid infrastructure."
    badge="Services"
    features={['Multi-tenant Architecture', 'Stripe Integration', 'Admin Dashboards', 'RBAC Security']}
  />
);

export const ApiIntegrations = () => (
  <GenericTemplate 
    title="API & Integrations" 
    description="Connect your systems with robust, well-documented APIs."
    badge="Services"
    features={['RESTful APIs', 'GraphQL', 'Third-party Integrations', 'Legacy System Modernization']}
  />
);

export const AiAutomation = () => (
  <GenericTemplate 
    title="AI & Automation Solutions" 
    description="Leverage LLMs and automation to 10x your business efficiency."
    badge="Services"
    features={['Custom LLM Integration', 'Workflow Automation', 'Chatbots & Assistants', 'Data Analytics']}
  />
);

// ----------------------------------------------------
// Industries Pages
// ----------------------------------------------------
export const FintechIndustry = () => (
  <GenericTemplate 
    title="Fintech Software Solutions" 
    description="Secure, compliant financial technology for banks and startups."
    badge="Industries"
    features={['Payment Gateways', 'Blockchain & Web3', 'Financial Dashboards', 'PCI-DSS Compliance']}
  />
);

export const HealthcareIndustry = () => (
  <GenericTemplate 
    title="Healthcare IT Solutions" 
    description="HIPAA-compliant software for clinics, telehealth, and MedTech."
    badge="Industries"
    features={['Telehealth Platforms', 'EHR Integrations', 'Patient Portals', 'HIPAA Compliance']}
  />
);

export const EcommerceIndustry = () => (
  <GenericTemplate 
    title="E-Commerce Development" 
    description="High-converting retail and marketplace builds."
    badge="Industries"
    features={['Custom Marketplaces', 'Shopify Plus headless', 'Inventory Management', 'Conversion Optimization']}
  />
);

export const EdTechIndustry = () => (
  <GenericTemplate 
    title="EdTech Platforms" 
    description="Learning management systems and educational tools."
    badge="Industries"
    features={['LMS Development', 'Video Streaming', 'Interactive Quizzes', 'Student Dashboards']}
  />
);

export const RealEstateIndustry = () => (
  <GenericTemplate 
    title="PropTech & Real Estate" 
    description="CRM tools and property management systems."
    badge="Industries"
    features={['Property Listings', 'Custom CRMs', 'Virtual Tours', 'Broker Portals']}
  />
);

// ----------------------------------------------------
// About & Resources Pages
// ----------------------------------------------------
export const OurProcess = () => (
  <GenericTemplate 
    title="Our Process" 
    description="How we build and ship software in record time."
    badge="About Us"
    features={['Discovery Phase', 'UI/UX Design', 'Agile Development', 'QA & Launch']}
  />
);

export const Portfolio = () => (
  <GenericTemplate 
    title="Our Work & Portfolio" 
    description="Case studies of products we have built."
    badge="Work"
    features={['Enterprise Solutions', 'Startup MVPs', 'B2B SaaS', 'Mobile Apps']}
  />
);

export const Team = () => (
  <GenericTemplate 
    title="Meet the Team" 
    description="The engineers and designers behind Cravora Solutions."
    badge="About Us"
    features={['Senior Engineers', 'Product Designers', 'QA Specialists', 'Project Managers']}
  />
);

export const CaseStudies = () => (
  <GenericTemplate 
    title="Case Studies" 
    description="Deep dives into our most successful client projects."
    badge="Resources"
    features={['ROI Metrics', 'Technical Architecture', 'Challenges Solved', 'Client Feedback']}
  />
);

export const ProjectEstimator = () => (
  <GenericTemplate 
    title="Project Cost Estimator" 
    description="Get an instant estimate for your next software project."
    badge="Free Tools"
    features={['Instant Calculation', 'Feature Breakdown', 'Timeline Estimate', 'Export to PDF']}
  />
);

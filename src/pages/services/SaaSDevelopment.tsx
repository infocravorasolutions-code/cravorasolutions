import React from 'react';
import { DetailedServiceTemplate } from '../../components/ui/DetailedServiceTemplate';

export const SaaSDevelopment: React.FC = () => {
  return (
    <DetailedServiceTemplate
      seoTitle="SaaS Development Services | Build Your SaaS Product | Cravora Solutions"
      seoDescription="Cravora builds scalable, multi-tenant SaaS products from concept to launch. Expert SaaS architecture, subscription billing, and cloud deployment for founders and enterprises."
      heroSubtitle="SaaS Development"
      heroTitle="Build a SaaS Product That Scales From Day One"
      heroDescription="We help founders and enterprises design, build, and launch SaaS platforms with the architecture, billing infrastructure, and cloud scalability needed to grow from 10 users to 100,000."
      problemTitle="Why SaaS Products Fail Before They Scale"
      problemContent={
        <>
          <p className="mb-4">SaaS is one of the most attractive business models in software — but it is also one of the most technically demanding to build correctly. The challenges that kill SaaS products early are almost never about the idea — they are about the execution.</p>
          <p>Single-tenant architectures that cannot support multiple clients without duplicating the entire stack. Subscription and billing logic bolted on as an afterthought, creating revenue leakage and failed payments. And infrastructure that was fine at 100 users but buckles at 10,000.</p>
        </>
      }
      solutionTitle="SaaS Development Engineered for Growth"
      solutionContent={
        <>
          <p className="mb-4">Cravora builds SaaS platforms with multi-tenancy, scalability, and commercial viability baked in from the architecture stage — not added later as expensive retrofits.</p>
          <p>We begin every SaaS engagement with a detailed architecture planning phase. We define your data model, tenancy strategy, authentication flow, and subscription tier logic before a single feature is built. This foundation means your SaaS can scale without rebuilding from the ground up.</p>
        </>
      }
      buildSectionTitle="What We Deliver"
      buildItems={[
        'Multi-tenant SaaS architecture (shared or isolated)',
        'Subscription billing and recurring revenue management',
        'User authentication, SSO, and OAuth integrations',
        'Role-based access control and organisation management',
        'In-app analytics and usage dashboards',
        'Automated customer onboarding and email flows',
        'API-first architecture for third-party integrations',
        'White-labelling and custom domain support',
        'Feature flagging and A/B testing infrastructure',
        'Admin super-panels for internal operations'
      ]}
      techStack={[
        { category: 'Frontend', items: 'Next.js, React.js, TypeScript, Tailwind CSS' },
        { category: 'Backend', items: 'Node.js, Python (FastAPI/Django), GraphQL' },
        { category: 'Billing', items: 'Stripe, Paddle, Chargebee' },
        { category: 'Database', items: 'PostgreSQL (multi-schema), Redis, MongoDB' },
        { category: 'Infrastructure', items: 'AWS (ECS, RDS, S3), GCP, Terraform, Docker' }
      ]}
      faqs={[
        {
          question: 'Do you handle the subscription billing setup?',
          answer: 'Yes. We integrate Stripe, Paddle, or Chargebee to handle your full subscription lifecycle — including trials, pro-rated upgrades, and automated failed payment handling.'
        },
        {
          question: 'How do you handle data security for multi-tenant apps?',
          answer: 'We use row-level security (RLS) in the database or separate schemas per client to ensure no data can ever "leak" between your customers.'
        }
      ]}
      ctaText="Build Your SaaS →"
    />
  );
};

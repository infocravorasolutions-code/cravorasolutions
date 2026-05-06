import React from 'react';
import { DetailedServiceTemplate } from '../../components/ui/DetailedServiceTemplate';

export const WebAppDev: React.FC = () => {
  return (
    <DetailedServiceTemplate
      seoTitle="Web Application Development Services | Cravora Solutions"
      seoDescription="Cravora builds fast, scalable, and secure web applications for startups and enterprises. From dashboards to enterprise portals — we deliver full-stack web development that drives results."
      heroSubtitle="Web Application Development"
      heroTitle="Custom Web Application Development Built to Scale"
      heroDescription="We design and engineer web applications that go beyond aesthetics — delivering performance, security, and business logic that your users and your operations depend on."
      problemTitle="The Challenges Businesses Face With Web Development"
      problemContent={
        <>
          <p className="mb-4">Building a web application sounds straightforward — until you are in the middle of it. Many businesses come to us after a frustrating experience with a previous agency or in-house attempt. The issues are almost always the same:</p>
          <p>Slow, bloated applications that lose users before they convert. Codebases so tangled that adding a new feature takes weeks. Backend architectures that collapse under real traffic. Security vulnerabilities discovered only after a breach. And timelines that stretch from months to years with no end in sight.</p>
        </>
      }
      solutionTitle="How Cravora Builds Web Applications Differently"
      solutionContent={
        <>
          <p className="mb-4">We approach every web application as a long-term product, not a short-term deliverable. That means we invest heavily in architecture planning before writing the first line of code. We choose the right technology stack for your specific use case — not the one that is trendy or easiest for us to build.</p>
          <p>Our full-stack web development process combines a pixel-perfect, responsive frontend with a robust, API-first backend — designed to integrate seamlessly with your existing tools, scale with your user base, and adapt as your business evolves.</p>
        </>
      }
      buildSectionTitle="What We Deliver"
      buildItems={[
        'Custom admin dashboards and internal tools',
        'Customer-facing portals and self-service platforms',
        'Multi-tenant SaaS web applications',
        'Real-time data dashboards with WebSocket integration',
        'RESTful and GraphQL API development',
        'Third-party API and webhook integrations (Stripe, Salesforce, etc.)',
        'Role-based access control and user management systems',
        'Progressive Web Apps (PWA) for offline-capable experiences',
        'Legacy system modernisation and re-architecture',
        'Performance optimisation and Core Web Vitals improvements'
      ]}
      techStack={[
        { category: 'Frontend', items: 'React.js, Next.js, Vue.js, TypeScript, Tailwind CSS, Redux, Zustand' },
        { category: 'Backend', items: 'Node.js, Express.js, Python, Django, FastAPI, Laravel (PHP)' },
        { category: 'Databases', items: 'PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch' },
        { category: 'Cloud', items: 'AWS (EC2, S3, Lambda, RDS), Google Cloud Platform, Vercel, Netlify' },
        { category: 'DevOps', items: 'Docker, Kubernetes, GitHub Actions, CI/CD pipelines, Terraform' }
      ]}
      faqs={[
        {
          question: 'How long does it take to build a custom web app?',
          answer: 'Typically 8–16 weeks depending on complexity. A focused internal tool might be 6–8 weeks. A full-featured client-facing platform is usually 12–20 weeks. We give you a firm timeline upfront.'
        },
        {
          question: 'Can you build on top of our existing system?',
          answer: 'Yes. We frequently integrate with or extend existing systems. We\'ll review your current setup and tell you honestly whether rebuilding or extending is the better path.'
        },
        {
          question: 'Will the app work on mobile?',
          answer: 'Every web application we build is fully responsive — it works on any screen size. If you need a native mobile app as well, we handle that too.'
        }
      ]}
      ctaText="Start Your Web Project →"
    />
  );
};

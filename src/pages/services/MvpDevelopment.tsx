import React from 'react';
import { DetailedServiceTemplate } from '../../components/ui/DetailedServiceTemplate';

export const MvpDevelopment: React.FC = () => {
  return (
    <DetailedServiceTemplate
      seoTitle="MVP Development Services | Launch in 6–8 Weeks | Cravora Solutions"
      seoDescription="Cravora builds lean, market-ready MVPs for startups and founders. Go from idea to your first real users in as little as 6–8 weeks with our proven MVP development process."
      heroSubtitle="MVP Development"
      heroTitle="From Idea to Market-Ready MVP in 6–8 Weeks"
      heroDescription="Stop planning and start learning. Our lean MVP development process helps founders and startups validate their idea with real users, real data, and real feedback — before committing to full-scale development."
      problemTitle="Why Most Startups Over-Build Before They Validate"
      problemContent={
        <>
          <p className="mb-4">The most common and most expensive mistake in startup product development is building too much before validating anything. We have seen founders spend six months and $80,000 building a fully-featured product — only to discover that the core assumption behind the business model was wrong.</p>
          <p>This is not a failure of effort or intelligence. It is a failure of process. Building an MVP is not about building a "cheap" version of your product — it is about building the most strategic version.</p>
        </>
      }
      solutionTitle="A Proven MVP Process Built Around Learning"
      solutionContent={
        <>
          <p className="mb-4">Cravora's MVP development methodology is rooted in the Lean Startup principles. We start every MVP engagement with a focused discovery workshop where we identify your core value proposition, your target user, and the single most important hypothesis your MVP needs to test.</p>
          <p>We cut everything else — ruthlessly — so you can launch faster, learn sooner, and spend your runway more wisely. Our typical MVP builds take 6–8 weeks from kickoff to launch.</p>
        </>
      }
      buildSectionTitle="What We Deliver"
      buildItems={[
        'Discovery workshop and feature prioritisation (MoSCoW)',
        'UX wireframes and clickable prototype for validation',
        'Full-stack MVP development (web and/or mobile)',
        'User authentication and onboarding flow',
        'Core product feature set (defined in discovery)',
        'Payment integration for monetisation from launch',
        'Analytics instrumentation (Mixpanel, PostHog, or GA)',
        'Production deployment with basic CI/CD setup',
        '30-day post-launch support and bug fixing',
        'Post-launch roadmap planning session'
      ]}
      techStack={[
        { category: 'Frontend', items: 'Next.js, React.js, Flutter (for mobile)' },
        { category: 'Backend', items: 'Node.js, Supabase, Firebase' },
        { category: 'Auth', items: 'Clerk, Auth0, Supabase Auth' },
        { category: 'Payments', items: 'Stripe' },
        { category: 'Deployment', items: 'Vercel, Railway, AWS Lightsail' }
      ]}
      faqs={[
        {
          question: 'Can we add more features later?',
          answer: 'Absolutely. We build MVPs using clean, modular architecture (like Next.js and PostgreSQL) so that your MVP becomes the foundation of your full product, not a throwaway prototype.'
        },
        {
          question: 'What happens after the MVP is launched?',
          answer: 'We help you analyze the user data and feedback to decide exactly what should be in the "Version 2" roadmap. Many of our MVP clients continue with us as their long-term engineering partner.'
        }
      ]}
      ctaText="Launch Your MVP →"
    />
  );
};

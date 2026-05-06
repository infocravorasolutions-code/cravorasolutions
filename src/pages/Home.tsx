import React from 'react';
import { Hero } from '../sections/Hero';
import { Capabilities } from '../sections/Capabilities';
import { Process } from '../sections/Process';
import { CaseStudies } from '../sections/CaseStudies';
import { Testimonials } from '../sections/Testimonials';
import { FAQ } from '../sections/FAQ';
import { CTA } from '../sections/CTA';
import { BrandMarquee } from '../components/ui/BrandMarquee';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Custom Software Development Company for Startups & SMBs" 
        description="Cravora Solutions builds custom web apps, mobile apps, SaaS products, and AI tools for startups and SMBs globally. 50+ projects, 12+ countries. Book a free discovery call." 
      />
      <Hero />
      <BrandMarquee />
      <Capabilities />
      <Process />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

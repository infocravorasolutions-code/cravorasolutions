import React from 'react';
import { DetailedServiceTemplate } from '../../components/ui/DetailedServiceTemplate';

export const Ecommerce: React.FC = () => {
  return (
    <DetailedServiceTemplate
      seoTitle="E-Commerce Development Services | Custom Online Store Solutions | Cravora"
      seoDescription="Cravora builds high-converting e-commerce platforms and custom online stores. From Shopify customisation to fully bespoke commerce architecture — we build for conversion."
      heroSubtitle="E-Commerce Industry"
      heroTitle="E-Commerce Development That Converts Browsers Into Buyers"
      heroDescription="We build online stores, marketplaces, and commerce platforms engineered for fast load times, frictionless checkout, and the scalability to handle your biggest sales days."
      problemTitle="What Makes E-Commerce Convert"
      problemContent={
        <>
          <p className="mb-4">In e-commerce, the difference between a 1% and a 3% conversion rate can mean millions in additional revenue. Every design decision and every millisecond of load time either builds confidence or erodes it.</p>
          <p>Cravora's e-commerce team brings a conversion-first mindset. We understand the technical factors that drive Core Web Vitals and their direct impact on SEO and rankings.</p>
        </>
      }
      solutionTitle="Scalable Commerce Architecture"
      solutionContent={
        <>
          <p className="mb-4">We design mobile checkout flows that minimise abandoned carts and build the inventory management and fulfilment infrastructure needed for smooth operations.</p>
          <p>For complex requirements — like B2B wholesale portals or large catalogues — we architect bespoke, headless commerce solutions that give you full control without platform limitations.</p>
        </>
      }
      buildSectionTitle="What We Build for E-Commerce"
      buildItems={[
        'Custom e-commerce websites and online stores',
        'Shopify and Shopify Plus customisation',
        'Headless commerce (Shopify Hydrogen, Next.js storefronts)',
        'B2B wholesale portals with tiered pricing',
        'Multi-vendor marketplace platforms',
        'Subscription box and recurring commerce platforms',
        'Inventory and warehouse management integrations',
        'ERP and accounting integrations (SAP, Xero, QuickBooks)',
        'Product recommendation engines and personalisation',
        'Abandoned cart recovery and email automation'
      ]}
      techStack={[
        { category: 'Platforms', items: 'Shopify Plus, WooCommerce, Magento' },
        { category: 'Headless', items: 'Hydrogen, Strapi, Contentful, Sanity' },
        { category: 'Frontend', items: 'Next.js, React, Tailwind CSS' },
        { category: 'Payments', items: 'Stripe, PayPal, Razorpay, Adyen' }
      ]}
      ctaText="Scale Your E-Commerce Store →"
    />
  );
};

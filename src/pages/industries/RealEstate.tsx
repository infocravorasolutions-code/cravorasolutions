import React from 'react';
import { DetailedServiceTemplate } from '../../components/ui/DetailedServiceTemplate';

export const RealEstate: React.FC = () => {
  return (
    <DetailedServiceTemplate
      seoTitle="Real Estate Software Development | PropTech Solutions | Cravora"
      seoDescription="Cravora builds PropTech and real estate software — property listing platforms, CRM systems, virtual tour tools, and investment platforms for agencies and developers."
      heroSubtitle="Real Estate Industry"
      heroTitle="PropTech Software That Modernises the Way People Buy, Sell, and Rent Property"
      heroDescription="We build real estate platforms, property listing portals, CRM systems, and investment tools that give developers, agents, and property tech founders the digital edge."
      problemTitle="Digital Transformation in Real Estate"
      problemContent={
        <>
          <p className="mb-4">Real estate is undergoing rapid digital transformation, driven by changing buyer expectations, remote work trends, and the entry of well-funded PropTech startups.</p>
          <p>Cravora's team has built platforms for property developers, independent agencies, commercial landlords, and property investment platforms.</p>
        </>
      }
      solutionTitle="Modern PropTech Engineering"
      solutionContent={
        <>
          <p className="mb-4">We understand the data structures that power property search (geospatial indexing, proximity algorithms) and the compliance landscape around property transactions.</p>
          <p>We design user experience patterns that convert browsing into enquiry and transaction, helping you stay ahead in a competitive market.</p>
        </>
      }
      buildSectionTitle="What We Build for Real Estate"
      buildItems={[
        'Property listing and search portals',
        'Real estate CRM and lead management platforms',
        'Virtual property tour integration (Matterport API)',
        'Property valuation tools and AVM integrations',
        'Tenant and landlord management portals',
        'Property investment platforms and fractional ownership',
        'Construction project management for developers',
        'Commercial real estate asset management platforms',
        'Document management and e-signature integrations',
        'Mortgage calculation and financing tools'
      ]}
      techStack={[
        { category: 'Geo/Maps', items: 'Google Maps API, Mapbox, PostGIS' },
        { category: 'Data', items: 'RESO Web API, MLS Integrations' },
        { category: 'Tours', items: 'Matterport, Three.js, 360-Video' },
        { category: 'Auth', items: 'DocuSign, HelloSign, AWS Cognito' }
      ]}
      ctaText="Explore PropTech Solutions →"
    />
  );
};

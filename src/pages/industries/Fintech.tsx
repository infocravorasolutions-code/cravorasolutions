import React from 'react';
import { DetailedServiceTemplate } from '../../components/ui/DetailedServiceTemplate';

export const Fintech: React.FC = () => {
  return (
    <DetailedServiceTemplate
      seoTitle="Fintech Software Development | Banking & Payments Solutions | Cravora"
      seoDescription="Cravora builds secure, compliant fintech software — from payment gateways and digital wallets to lending platforms and investment dashboards. PCI DSS-aware development."
      heroSubtitle="Fintech Industry"
      heroTitle="Fintech Software Development Built on Security and Compliance"
      heroDescription="We build financial technology products that handle real money, real users, and real regulatory scrutiny — with the engineering rigour and compliance awareness that the fintech sector demands."
      problemTitle="We Understand the Fintech Landscape"
      problemContent={
        <>
          <p className="mb-4">Financial software operates in one of the most regulated and security-critical environments in technology. A data breach, a failed transaction, or a compliance oversight can result not just in financial loss but in regulatory action and the permanent loss of user trust.</p>
          <p>Cravora's fintech development team understands the technical and regulatory requirements that govern financial products. We build with security-first architecture from day one.</p>
        </>
      }
      solutionTitle="Our Fintech Engineering Rigour"
      solutionContent={
        <>
          <p className="mb-4">We build with PCI DSS compliance in mind for any product handling payment card data, implement end-to-end encryption for sensitive financial information, and design audit trails that satisfy regulatory review.</p>
          <p>We stay current with open banking standards, KYC/AML integration requirements, and the evolving landscape of BNPL, cryptocurrency, and embedded finance regulation.</p>
        </>
      }
      buildSectionTitle="What We Build for Fintech"
      buildItems={[
        'Digital wallets and prepaid card platforms',
        'Payment gateway integration and custom processing',
        'Peer-to-peer lending and BNPL platforms',
        'Investment and wealth management dashboards',
        'Personal finance management (PFM) apps',
        'KYC/AML verification workflow integration',
        'Open banking API integrations (Plaid, TrueLayer)',
        'Fraud detection and transaction monitoring systems',
        'Cryptocurrency and blockchain applications',
        'RegTech and compliance reporting tools'
      ]}
      techStack={[
        { category: 'Security', items: 'AES-256 Encryption, JWT, OAuth 2.0, mTLS' },
        { category: 'Integrations', items: 'Plaid, Stripe, Razorpay, Onfido, Twilio' },
        { category: 'Backend', items: 'Node.js, Go, Python, PostgreSQL' },
        { category: 'Cloud', items: 'AWS (PrivateLink, KMS, CloudTrail), GCP' }
      ]}
      ctaText="Discuss Your Fintech Project →"
    />
  );
};

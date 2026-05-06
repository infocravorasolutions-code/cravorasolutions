import React from 'react';
import { DetailedServiceTemplate } from '../../components/ui/DetailedServiceTemplate';

export const Healthcare: React.FC = () => {
  return (
    <DetailedServiceTemplate
      seoTitle="Healthcare Software Development | HIPAA-Aware Solutions | Cravora"
      seoDescription="Cravora builds secure, compliant healthcare software — patient portals, telemedicine platforms, EHR integrations, and health apps built with HIPAA and privacy at the core."
      heroSubtitle="Healthcare Industry"
      heroTitle="Healthcare Software That Puts Patients and Privacy First"
      heroDescription="We build digital health products and healthcare platforms with HIPAA-aware architecture, secure data handling, and the clinical workflow understanding that health tech demands."
      problemTitle="Compliance and Clinical Workflows"
      problemContent={
        <>
          <p className="mb-4">Healthcare software sits at the intersection of technical complexity, regulatory obligation, and genuine human impact. A poorly built patient portal is not just a bad user experience — it can delay care or expose protected health information (PHI).</p>
          <p>Cravora's healthcare development team builds with HIPAA compliance awareness embedded throughout the development lifecycle — not added as a checkbox at the end.</p>
        </>
      }
      solutionTitle="Secure & Interoperable Solutions"
      solutionContent={
        <>
          <p className="mb-4">We implement role-based access to PHI, data encryption at rest and in transit, detailed audit logging, and BAA-compatible infrastructure configurations.</p>
          <p>We are also experienced with HL7 FHIR integration for electronic health record (EHR) interoperability, enabling connection with clinical systems like Epic, Cerner, and Meditech.</p>
        </>
      }
      buildSectionTitle="What We Build for Healthcare"
      buildItems={[
        'Patient portals with scheduling and messaging',
        'Telemedicine platforms with secure video (WebRTC)',
        'EHR/EMR integration via HL7 FHIR APIs',
        'Remote patient monitoring (RPM) and IoT',
        'Healthcare staff scheduling and operations tools',
        'Medical billing and insurance claims systems',
        'Mental health and wellness applications',
        'Clinical trial management and recruitment platforms',
        'Pharmacy management and e-prescription systems',
        'Health data analytics and population dashboards'
      ]}
      techStack={[
        { category: 'Compliance', items: 'HIPAA-Aware, SOC2 Type II, HL7 FHIR' },
        { category: 'Real-time', items: 'WebRTC, Socket.io, AWS Chime' },
        { category: 'Backend', items: 'Node.js, Python, PostgreSQL, Redis' },
        { category: 'Cloud', items: 'AWS (HealthLake, KMS), GCP (Healthcare API)' }
      ]}
      ctaText="Start Your Healthcare Project →"
    />
  );
};

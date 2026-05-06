import React from 'react';
import { SEO } from '../../components/SEO';
import { PageHeader } from '../../components/ui/PageHeader';
import { Section } from '../../components/ui/Section';
import { CheckCircle } from 'lucide-react';

interface TemplateProps {
  title: string;
  description: string;
  badge: string;
  features: string[];
}

export const GenericTemplate: React.FC<TemplateProps> = ({ title, description, badge, features }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <PageHeader 
        title={title}
        description={description}
        badge={badge}
      />
      
      <Section padding="lg" background="default">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What we offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl border border-border glass hover:border-brand/30 transition-colors">
                <CheckCircle className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

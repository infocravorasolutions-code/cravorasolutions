import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, badge }) => {
  return (
    <Section padding="lg" background="gradient" className="border-b border-border">
      <div className="max-w-3xl mx-auto text-center">
        {badge && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand font-semibold text-sm mb-6"
          >
            {badge}
          </motion.div>
        )}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </Section>
  );
};

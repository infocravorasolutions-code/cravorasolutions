import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Brain, Palette } from 'lucide-react';
import { Section } from '../ui/Section';
import { GradientText } from '../ui/GradientText';
import { GlassCard } from '../ui/GlassCard';

const capabilities = [
  {
    icon: Code,
    title: 'Web & Mobile Engineering',
    description: 'Full-stack development with React, Node.js, React Native, and modern frameworks.',
    features: ['React & Next.js', 'Node.js & Python', 'React Native', 'Progressive Web Apps']
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Scalable infrastructure with AWS, Docker, Kubernetes, and CI/CD automation.',
    features: ['AWS & Azure', 'Docker & K8s', 'CI/CD Pipelines', 'Infrastructure as Code']
  },
  {
    icon: Brain,
    title: 'AI/ML Integrations',
    description: 'Intelligent features with machine learning, NLP, and computer vision.',
    features: ['OpenAI Integration', 'Custom ML Models', 'Computer Vision', 'Natural Language Processing']
  },
  {
    icon: Palette,
    title: 'UI/UX & Product Strategy',
    description: 'User-centered design with research, prototyping, and conversion optimization.',
    features: ['User Research', 'Design Systems', 'Prototyping', 'A/B Testing']
  }
];

export const Capabilities: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-white to-[#F7FAFC]">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What We <GradientText>Build</GradientText>
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto font-['Inter']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We ship with confidence using proven technologies and battle-tested processes.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {capabilities.map((capability, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-[#11C5A3] to-[#0AA0FF] rounded-xl">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#0F2333] mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 font-['Inter'] mb-4">
                    {capability.description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {capability.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium text-[#0F2333] font-['Inter']"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
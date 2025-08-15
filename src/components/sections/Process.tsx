import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Palette, Code, Rocket, TrendingUp } from 'lucide-react';
import { Section } from '../ui/Section';
import { GradientText } from '../ui/GradientText';

const processSteps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'We dive deep into your business goals, user needs, and technical requirements.',
    details: ['Stakeholder interviews', 'User research', 'Technical audit', 'Competitive analysis']
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Create intuitive user experiences with modern design principles and accessibility.',
    details: ['User journey mapping', 'Wireframing & prototyping', 'Design systems', 'Usability testing']
  },
  {
    icon: Code,
    title: 'Build',
    description: 'Develop robust, scalable solutions with best practices and continuous integration.',
    details: ['Agile development', 'Code reviews', 'Automated testing', 'Performance optimization']
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Deploy with confidence using proven infrastructure and monitoring systems.',
    details: ['CI/CD pipelines', 'Infrastructure setup', 'Performance monitoring', 'User training']
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    description: 'Optimize and iterate based on real user data and business metrics.',
    details: ['Analytics & insights', 'A/B testing', 'Performance tuning', 'Feature expansion']
  }
];

export const Process: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <Section className="bg-gradient-to-b from-white to-[#F7FAFC] relative">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <GradientText>Process</GradientText>
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto font-['Inter']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A proven methodology that delivers exceptional results every time.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Progress Line */}
        <div className="absolute left-8 top-0 w-0.5 h-full bg-gray-200 hidden lg:block">
          <motion.div
            className="w-full bg-gradient-to-b from-[#11C5A3] to-[#0AA0FF] origin-top"
            style={{ scaleY: lineProgress }}
          />
        </div>

        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex items-start gap-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Step indicator */}
              <div className="flex-shrink-0 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#11C5A3] to-[#0AA0FF] rounded-2xl flex items-center justify-center shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-400">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-[#0F2333] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-['Inter'] mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {step.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center gap-2 text-sm text-gray-500 font-['Inter']"
                    >
                      <div className="w-1.5 h-1.5 bg-[#11C5A3] rounded-full" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
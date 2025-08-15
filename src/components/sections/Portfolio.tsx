import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { Section } from '../ui/Section';
import { GradientText } from '../ui/GradientText';
import { GlassCard } from '../ui/GlassCard';

const projects = [
  {
    id: 1,
    title: 'FinTech Trading Platform',
    category: 'Web Application',
    description: 'Real-time trading platform with advanced analytics and portfolio management.',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Node.js', 'WebSocket', 'Redis', 'AWS'],
    metrics: {
      users: '50K+',
      uptime: '99.9%',
      performance: '< 100ms'
    },
    caseStudy: 'Built a high-performance trading platform handling millions of transactions with real-time data streaming and advanced charting capabilities.'
  },
  {
    id: 2,
    title: 'Healthcare AI Assistant',
    category: 'AI/ML Integration',
    description: 'AI-powered diagnostic assistance with natural language processing.',
    image: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Python', 'TensorFlow', 'OpenAI', 'FastAPI', 'Docker'],
    metrics: {
      accuracy: '94%',
      reduction: '40%',
      satisfaction: '4.8/5'
    },
    caseStudy: 'Developed an AI assistant that helps healthcare professionals with preliminary diagnosis, reducing consultation time by 40%.'
  },
  {
    id: 3,
    title: 'E-commerce Mobile App',
    category: 'Mobile Development',
    description: 'Cross-platform mobile commerce app with AR try-on features.',
    image: 'https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React Native', 'ARKit', 'Stripe', 'Firebase', 'GraphQL'],
    metrics: {
      downloads: '1M+',
      rating: '4.7/5',
      conversion: '12%'
    },
    caseStudy: 'Created an immersive shopping experience with AR try-on functionality, increasing conversion rates by 12%.'
  },
  {
    id: 4,
    title: 'Enterprise Dashboard',
    category: 'Data Visualization',
    description: 'Real-time analytics dashboard for enterprise resource planning.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL', 'Kubernetes'],
    metrics: {
      data_points: '10M+',
      response_time: '< 2s',
      efficiency: '+35%'
    },
    caseStudy: 'Built a comprehensive analytics platform processing 10M+ data points daily, improving operational efficiency by 35%.'
  }
];

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <Section className="bg-gradient-to-b from-[#F7FAFC] to-white">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <GradientText>Work</GradientText>
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto font-['Inter']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Proven results across industries with measurable impact and exceptional quality.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <GlassCard 
              className="group overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#11C5A3] to-[#0AA0FF] text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#11C5A3] transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#0F2333]">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 font-['Inter'] text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/20 text-xs font-medium text-[#0F2333] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-white/20 text-xs font-medium text-gray-500 rounded-md">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold font-['Space_Grotesk'] text-[#0F2333] mb-2">
                    {selectedProject.title}
                  </h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-[#11C5A3] to-[#0AA0FF] text-white text-sm font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                {Object.entries(selectedProject.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold font-['Space_Grotesk'] text-[#11C5A3] mb-1">
                      {value}
                    </div>
                    <div className="text-sm text-gray-500 capitalize font-['Inter']">
                      {key.replace('_', ' ')}
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-700 font-['Inter'] mb-6 leading-relaxed">
                {selectedProject.caseStudy}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold font-['Space_Grotesk'] text-[#0F2333]">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-gray-100 text-sm font-medium text-[#0F2333] rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { GradientText } from '../ui/GradientText';
import { Scene3D } from '../3d/Scene3D';
import { TechConstellation } from '../3d/TechConstellation';
import { useMousePosition } from '../../hooks/useMousePosition';
import { usePerformanceMode } from '../../hooks/usePerformanceMode';

const technologies = [
  { name: 'React', category: 'Frontend', color: '#61DAFB', description: 'Modern UI library' },
  { name: 'Node.js', category: 'Backend', color: '#339933', description: 'Server runtime' },
  { name: 'Python', category: 'Backend', color: '#3776AB', description: 'AI/ML & APIs' },
  { name: 'TypeScript', category: 'Language', color: '#3178C6', description: 'Type safety' },
  { name: 'AWS', category: 'Cloud', color: '#FF9900', description: 'Cloud infrastructure' },
  { name: 'Docker', category: 'DevOps', color: '#2496ED', description: 'Containerization' },
  { name: 'Kubernetes', category: 'DevOps', color: '#326CE5', description: 'Orchestration' },
  { name: 'PostgreSQL', category: 'Database', color: '#336791', description: 'Relational DB' },
  { name: 'Redis', category: 'Database', color: '#DC382D', description: 'Caching layer' },
  { name: 'GraphQL', category: 'API', color: '#E10098', description: 'Query language' },
  { name: 'Three.js', category: '3D', color: '#000000', description: '3D graphics' },
  { name: 'TensorFlow', category: 'AI/ML', color: '#FF6F00', description: 'Machine learning' },
];

const TechGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="group relative p-6 bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl text-center hover:bg-white/80 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.6 }}
          whileHover={{ 
            y: -8,
            boxShadow: "0 20px 40px -12px rgba(17, 197, 163, 0.15)"
          }}
          viewport={{ once: true }}
        >
          <div
            className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
            style={{ backgroundColor: tech.color }}
          >
            {tech.name.charAt(0)}
          </div>
          <div className="text-lg font-semibold text-[#0F2333] font-['Space_Grotesk'] mb-1">
            {tech.name}
          </div>
          <div className="text-sm text-gray-500 font-['Inter'] mb-2">
            {tech.category}
          </div>
          <div className="text-xs text-gray-400 font-['Inter'] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tech.description}
          </div>
          
          {/* Hover glow effect */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
            style={{ 
              background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)`
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export const TechStack: React.FC = () => {
  const mousePosition = useMousePosition();
  const { isLiteMode } = usePerformanceMode();

  return (
    <Section className="bg-gradient-to-b from-[#F7FAFC] to-white relative overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <GradientText>Tech Stack</GradientText>
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto font-['Inter']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We use cutting-edge technologies to build scalable, maintainable, and performant solutions 
          that stand the test of time.
        </motion.p>
      </div>

      {!isLiteMode ? (
        <div className="relative h-96 mb-8">
          <Scene3D 
            className="absolute inset-0" 
            camera={{ position: [0, 0, 12], fov: 60 }}
          >
            <TechConstellation mousePosition={mousePosition} />
          </Scene3D>
        </div>
      ) : (
        <TechGrid />
      )}
      
      {/* Performance note */}
      {isLiteMode && (
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 font-['Inter']">
            💡 Enable full mode in settings to see our interactive 3D constellation
          </p>
        </motion.div>
      )}
    </Section>
  );
};
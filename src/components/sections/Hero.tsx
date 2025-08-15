import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Section } from '../ui/Section';
import { GradientText } from '../ui/GradientText';
import { Scene3D } from '../3d/Scene3D';
import { InteractiveLogo } from '../3d/InteractiveLogo';
import { ParticleSystem } from '../3d/ParticleSystem';
import { useMousePosition } from '../../hooks/useMousePosition';

export const Hero: React.FC = () => {
  const [morphProgress, setMorphProgress] = useState(0);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.1]);
  const mousePosition = useMousePosition();

  useEffect(() => {
    // Animate the checkmark morph on mount
    const timer = setTimeout(() => {
      setMorphProgress(1);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F7FAFC] via-white to-[#F7FAFC]">
      {/* Enhanced 3D Background */}
      <motion.div 
        style={{ opacity, scale }}
        className="absolute inset-0 -z-10"
      >
        <Scene3D>
          <InteractiveLogo 
            morphProgress={morphProgress} 
            mousePosition={mousePosition}
            scale={1.2}
          />
          <ParticleSystem count={800} radius={12} speed={0.3} />
        </Scene3D>
      </motion.div>
      
      {/* Content with enhanced animations */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "backOut" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-['Space_Grotesk'] mb-8 tracking-tight leading-none">
            <GradientText>Cravora</GradientText>
            <br />
            <span className="text-[#0F2333]">Solutions</span>
          </h1>
        </motion.div>
        
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] text-[#0F2333] mb-2">
            Ship Faster. Smarter. Safer.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#11C5A3] to-[#0AA0FF] mx-auto rounded-full" />
        </motion.div>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-['Inter']"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          We build exceptional digital experiences with cutting-edge technology, 
          proven processes, and measurable outcomes. <em>We ship with confidence.</em>
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="group relative px-10 py-5 bg-gradient-to-r from-[#11C5A3] to-[#0AA0FF] text-white rounded-2xl font-bold font-['Inter'] flex items-center gap-3 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(17, 197, 163, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Our Work</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0AA0FF] to-[#11C5A3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
          
          <motion.button
            className="group px-10 py-5 bg-white/20 backdrop-blur-xl border-2 border-white/30 text-gray-700 rounded-2xl font-bold font-['Inter'] flex items-center gap-3 hover:bg-white/30 hover:border-[#11C5A3]/30 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-6 h-6" />
            Start a Project
          </motion.button>
        </motion.div>
        
        {/* Enhanced KPI Counters */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { value: '150+', label: 'Projects Delivered', subtext: 'Across 20+ industries' },
            { value: '99.9%', label: 'Uptime Achieved', subtext: 'Enterprise-grade reliability' },
            { value: '4.9/5', label: 'Client NPS Score', subtext: 'Exceptional satisfaction' },
          ].map((kpi, index) => (
            <motion.div 
              key={index} 
              className="text-center p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.15)"
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-[#0F2333] mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1, type: "spring" }}
              >
                <GradientText>{kpi.value}</GradientText>
              </motion.div>
              <div className="text-lg font-semibold text-[#0F2333] mb-1 font-['Inter']">
                {kpi.label}
              </div>
              <div className="text-sm text-gray-500 font-['Inter']">
                {kpi.subtext}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity }}
      >
        <div className="w-8 h-12 border-2 border-[#11C5A3]/50 rounded-full flex justify-center p-2">
          <motion.div
            className="w-2 h-4 bg-gradient-to-b from-[#11C5A3] to-[#0AA0FF] rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2 font-['Inter']">Scroll to explore</p>
      </motion.div>
    </Section>
  );
};
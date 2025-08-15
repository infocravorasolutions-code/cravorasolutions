import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { GradientText } from '../ui/GradientText';
import { GlassCard } from '../ui/GlassCard';

export const CTA: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-white to-[#F7FAFC]">
      <div className="max-w-4xl mx-auto">
        <GlassCard className="text-center p-12 relative overflow-hidden">
          {/* Animated checkmark */}
          <motion.div
            className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-[#11C5A3] to-[#0AA0FF] rounded-full flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Check className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to <GradientText>Ship?</GradientText>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-['Inter']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's build something exceptional together. We ship with confidence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-[#11C5A3] to-[#0AA0FF] text-white rounded-2xl font-semibold font-['Inter'] flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              className="group px-8 py-4 bg-white/20 backdrop-blur-xl border border-white/30 text-gray-700 rounded-2xl font-semibold font-['Inter'] hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Call
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: '🚀', title: 'Fast Delivery', desc: 'MVP in 4-6 weeks' },
              { icon: '✅', title: 'Guaranteed Quality', desc: '99.9% uptime SLA' },
              { icon: '🔒', title: 'Secure & Scalable', desc: 'Enterprise-grade' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-semibold text-[#0F2333] font-['Space_Grotesk'] mb-1">
                  {item.title}
                </div>
                <div className="text-sm text-gray-500 font-['Inter']">
                  {item.desc}
                </div>
              </div>
            ))}
          </motion.div>
        </GlassCard>
      </div>
    </Section>
  );
};
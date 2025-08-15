import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Zap, Shield } from 'lucide-react';
import { Section } from '../ui/Section';
import { GradientText } from '../ui/GradientText';
import { GlassCard } from '../ui/GlassCard';

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    specialties: ['Strategy', 'AI/ML', 'Product'],
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: '15+ years building scalable tech solutions for Fortune 500 companies.'
  },
  {
    name: 'Maya Patel',
    role: 'CTO',
    specialties: ['Architecture', 'Cloud', 'DevOps'],
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Former tech lead at major cloud providers. Expert in distributed systems.'
  },
  {
    name: 'Jordan Kim',
    role: 'Lead Designer',
    specialties: ['UX/UI', '3D Design', 'Branding'],
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Award-winning designer with expertise in immersive digital experiences.'
  },
  {
    name: 'Sam Rodriguez',
    role: 'Principal Engineer',
    specialties: ['Full-Stack', 'Performance', 'Security'],
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Performance optimization expert. Built systems handling millions of users.'
  }
];

const values = [
  {
    icon: Zap,
    title: 'Ship with Velocity',
    description: 'We move fast without breaking things. MVP in 4-6 weeks, full product in 3-4 months.'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security built in from day one. SOC 2 compliant processes.'
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: '99.9% uptime SLA. Comprehensive testing. Code reviews. No compromises.'
  },
  {
    icon: Users,
    title: 'Partnership Focused',
    description: 'We become an extension of your team. Transparent communication. Shared success.'
  }
];

export const About: React.FC = () => {
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
          Meet <GradientText>Cravora</GradientText>
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto font-['Inter'] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A team of senior engineers, designers, and strategists who have shipped products 
          for startups and Fortune 500 companies alike.
        </motion.p>
      </div>

      {/* Company Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <GlassCard className="text-center h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-[#11C5A3] to-[#0AA0FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#0F2333] mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 font-['Inter'] leading-relaxed">
                {value.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Team Section */}
      <div className="text-center mb-12">
        <motion.h3
          className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-[#0F2333] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Leadership Team
        </motion.h3>
        <motion.p
          className="text-lg text-gray-600 font-['Inter']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Senior talent with proven track records at scale
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <GlassCard className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-[#11C5A3] to-[#0AA0FF] p-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              
              <h4 className="text-lg font-bold font-['Space_Grotesk'] text-[#0F2333] mb-1">
                {member.name}
              </h4>
              <p className="text-[#11C5A3] font-semibold font-['Inter'] mb-3">
                {member.role}
              </p>
              
              <div className="flex flex-wrap gap-1 justify-center mb-4">
                {member.specialties.map((specialty, specIndex) => (
                  <span
                    key={specIndex}
                    className="px-2 py-1 bg-white/30 text-xs font-medium text-[#0F2333] rounded-md font-['Inter']"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              
              <p className="text-sm text-gray-600 font-['Inter'] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {member.bio}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
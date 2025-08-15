import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Section } from '../ui/Section';
import { GradientText } from '../ui/GradientText';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'FinanceFlow',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Cravora Solutions delivered our trading platform 2 weeks ahead of schedule. Their 3D visualizations and real-time capabilities exceeded our expectations.',
    rating: 5,
    project: 'Real-time Trading Platform',
    outcome: '40% faster execution times'
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Founder & CEO',
    company: 'HealthTech Innovations',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The AI diagnostic tool they built has revolutionized our patient care. 94% accuracy rate and seamless integration with our existing systems.',
    rating: 5,
    project: 'AI Diagnostic Assistant',
    outcome: '94% diagnostic accuracy'
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'VP of Engineering',
    company: 'RetailTech Solutions',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Their AR shopping app transformed our customer experience. 12% conversion increase and countless positive reviews. Truly exceptional work.',
    rating: 5,
    project: 'AR E-commerce App',
    outcome: '12% conversion increase'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <Section className="bg-gradient-to-b from-white to-[#F7FAFC] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#11C5A3] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#0AA0FF] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Client <GradientText>Success</GradientText>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto font-['Inter']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by industry leaders who demand excellence and measurable results.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div 
            className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center"
              >
                <Quote className="w-16 h-16 text-[#11C5A3] mx-auto mb-8 opacity-60" />
                
                <blockquote className="text-2xl md:text-3xl font-medium text-[#0F2333] font-['Inter'] leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-6 mb-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-white/30"
                  />
                  <div className="text-left">
                    <div className="text-xl font-bold text-[#0F2333] font-['Space_Grotesk']">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600 font-['Inter']">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-sm text-[#11C5A3] font-semibold font-['Inter']">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                  <div className="bg-white/30 rounded-xl p-4">
                    <div className="text-sm text-gray-600 font-['Inter']">Project</div>
                    <div className="font-semibold text-[#0F2333] font-['Space_Grotesk']">
                      {testimonials[currentIndex].project}
                    </div>
                  </div>
                  <div className="bg-white/30 rounded-xl p-4">
                    <div className="text-sm text-gray-600 font-['Inter']">Outcome</div>
                    <div className="font-semibold text-[#11C5A3] font-['Space_Grotesk']">
                      {testimonials[currentIndex].outcome}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white/20 hover:bg-white/30 border border-white/30 rounded-xl transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-[#11C5A3]" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-[#11C5A3] w-8' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-white/20 hover:bg-white/30 border border-white/30 rounded-xl transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-[#11C5A3]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
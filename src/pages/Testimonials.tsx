import React from 'react';
import { SEO } from '../components/SEO';
import { Star, Quote, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Rivera',
    role: 'CEO, FintechFlow',
    content: "Working with Cravora was a game-changer for our Series A. They didn't just build features; they understood our business logic and optimized our entire payment flow. Delivered 2 weeks early.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    stars: 5,
    location: 'San Francisco, USA'
  },
  {
    name: 'Sarah Chen',
    role: 'Product Head, HealthSync',
    content: "The level of communication is what sets them apart. We were in a shared Slack channel, and it felt like having an in-house team. Our patient portal is now the benchmark in our industry.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    stars: 5,
    location: 'London, UK'
  },
  {
    name: 'Marcus Thorne',
    role: 'Founder, RetailRocket',
    content: "Cravora built our MVP in 8 weeks. We launched on time, handled 5,000 users on day one without a glitch, and had our first 100 paying customers by the end of the month.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    stars: 5,
    location: 'Sydney, Australia'
  },
  {
    name: 'Elena Rodriguez',
    role: 'CTO, EduPath',
    content: "Their AI implementation wasn't just 'flashy' — it actually solved our data extraction problem. We saved 15 hours of manual work per week. High-end engineering at its best.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    stars: 5,
    location: 'Madrid, Spain'
  },
  {
    name: 'David Hofman',
    role: 'Director, RealEstate Pro',
    content: "Transparency is their superpower. No hidden costs, no missed deadlines. They told us what wouldn't work, which saved us thousands in development of features users didn't want.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    stars: 5,
    location: 'Berlin, Germany'
  },
  {
    name: 'Priya Sharma',
    role: 'Co-founder, GreenLogistics',
    content: "Building for the Indian market requires a specific kind of scale and edge-case handling. Cravora nailed it. Our logistics dashboard handles 50,000+ entries daily now.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150',
    stars: 5,
    location: 'Mumbai, India'
  }
];

export const TestimonialsPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Client Testimonials & Reviews | Cravora Solutions" 
        description="Read what Cravora Solutions clients say about working with us. Real testimonials from founders, product managers, and executives across various industries." 
      />
      <div className="w-full pt-20 bg-[#fafafa]">
        
        {/* HERO */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(133,58,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(133,58,232,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5" style={{ background: '#f3eafd', color: '#853ae8' }}>
              Client Trust
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8" style={{ color: '#111' }}>
              What Our Clients Say About{' '}
              <span style={{
                background: 'linear-gradient(135deg, #853ae8 0%, #722dcc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Working with Cravora.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              We measure our success by the success of the products we build and the relationships we build along the way.
            </p>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#853ae8] mb-1">5.0/5</div>
                <div className="text-sm text-gray-500 font-medium">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#853ae8] mb-1">98%</div>
                <div className="text-sm text-gray-500 font-medium">On-time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#853ae8] mb-1">50+</div>
                <div className="text-sm text-gray-500 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#853ae8] mb-1">12+</div>
                <div className="text-sm text-gray-500 font-medium">Countries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS GRID */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className="break-inside-avoid bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#e4d4f8] transition-all duration-300 group"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#853ae8] text-[#853ae8]" />
                    ))}
                  </div>
                  
                  <Quote className="w-10 h-10 text-[#853ae8] opacity-10 mb-4 group-hover:opacity-20 transition-opacity" />
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium italic">
                    "{t.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#f3eafd]" 
                    />
                    <div>
                      <div className="font-bold text-gray-900">{t.name}</div>
                      <div className="text-sm text-gray-500">{t.role}</div>
                      <div className="text-xs text-[#853ae8] font-semibold mt-0.5">{t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO CTA? No, let's do a "Chat on WhatsApp" focus */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[#f5f0fd] p-12 rounded-[3rem] border border-[#e4d4f8]">
              <MessageSquare className="w-12 h-12 text-[#853ae8] mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4"  >Want to speak with a past client?</h2>
              <p className="text-gray-600 text-lg mb-8">
                We're so confident in our work that we'll happily introduce you to founders we've worked with. No sales pitches, just honest feedback.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://wa.me/918200347067" 
                  className="px-8 py-4 rounded-2xl bg-[#853ae8] text-white font-bold transition-all hover:scale-105"
                >
                  Ask for References
                </a>
                <a 
                  href="https://calendly.com/info-cravorasolutions/30min" 
                  className="px-8 py-4 rounded-2xl border-2 border-[#853ae8] text-[#853ae8] font-bold transition-all hover:bg-[#f3eafd]"
                >
                  Book a Discovery Call
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

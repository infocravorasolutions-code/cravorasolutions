import React from 'react';
import { Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const founders = [
  {
    name: 'Darshan Patel',
    role: 'Co-Founder & CEO',
    bio: 'Darshan is a technology veteran with a background in product strategy and engineering. He leads Cravora\'s client strategy and business development, ensuring every project aligns with business goals. He is passionate about making enterprise-grade engineering accessible to startups.',
    image: '/brand/Darshan-profile.jpeg',
    linkedin: 'https://www.linkedin.com/in/darshan-patel-392900223/',
  },
  {
    name: 'Mohit Rathhod',
    role: 'Co-Founder & CTO',
    bio: 'Mohit is our Chief Technology Officer, responsible for technical architecture and engineering standards. With extensive experience in backend systems and cloud infrastructure, Mohit oversees the architecture of every major engagement to ensure scalability and performance.',
    image: '/brand/mohit-profile.jpg',
    linkedin: 'https://www.linkedin.com/in/mohit-rathod-54a742217/',
  },
  {
    name: 'Dev Patel',
    role: 'Co-Founder & Head of Operations',
    bio: 'Dev leads operations and product at Cravora, ensuring that every product we ship meets the highest standards of user experience and visual craft. He is the internal champion for our quality-first culture and seamless project delivery.',
    image: '/brand/Dev-profile.jpg',
    linkedin: 'https://www.linkedin.com/in/dev-patel-b54133221/',
  }
];

export const TeamPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Meet the Team | Our Founders & Engineering Leadership | Cravora Solutions" 
        description="Meet the people behind Cravora Solutions — experienced founders and engineers committed to building exceptional software." 
      />
      
      <div className="w-full pt-20 bg-[#fafafa]">
        
        {/* HERO */}
        <section className="relative py-20 overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8" style={{ color: '#111' }}>
              The People Who Build Your Product
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              Cravora is built by builders. Our founding team brings deep engineering expertise, product intuition, and a genuine passion for solving hard problems.
            </p>
          </div>
        </section>

        {/* FOUNDERS GRID */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {founders.map((founder, index) => (
                <div key={index} className="group">
                  <div className="relative mb-8 rounded-3xl overflow-hidden aspect-[4/5] bg-gray-100 shadow-xl shadow-purple-500/5 group-hover:shadow-purple-500/10 transition-all duration-500">
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <a 
                        href={founder.linkedin} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#853ae8] transition-colors duration-300"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-1" style={{ color: '#111' }}>{founder.name}</h2>
                  <p className="text-[#853ae8] font-bold text-sm uppercase tracking-widest mb-4">{founder.role}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-20 bg-[#fafafa]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#111' }}>
              What Makes the Cravora Team Different
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-12">
              We are a team of engineers, designers, and strategists who care deeply about craft. We do not hire for headcount — we hire for excellence, curiosity, and the ability to work as genuine partners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-8 rounded-3xl bg-white border border-gray-100">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#111' }}>Partners, Not Order-Takers</h3>
                <p className="text-gray-600">We don't just ask "how do I build this?" — we ask "should we build this, and what is the best way?" to ensure your ROI.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white border border-gray-100">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#111' }}>Engineering Excellence</h3>
                <p className="text-gray-600">Clean code, robust architecture, and scalable infrastructure are non-negotiable for every project we ship.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#111' }}>
              Want to work with us?
            </h2>
            <a href="/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 active:scale-95" style={{ background: 'linear-gradient(135deg, #853ae8, #722dcc)', boxShadow: '0 4px 20px rgba(133,58,232,0.3)' }}>
              <span>Let's talk about your project</span>
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>

      </div>
    </>
  );
};

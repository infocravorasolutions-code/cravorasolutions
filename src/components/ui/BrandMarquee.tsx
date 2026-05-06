import React from 'react';

const logos = [
  { name: 'Jay Rubber', src: '/brand/jay_rubber_logo_retina.png' },
  { name: 'DR Enterprise', src: '/brand/dr-enterprise-logo.png' },
  { name: 'KB', src: '/brand/k.b_logo.png' },
  { name: 'Chandra', src: '/brand/Chandra-Logo.png' },
  { name: 'HLCG', src: '/brand/HLCG.jpeg' },
  { name: 'Harikrishna', src: '/brand/Harikrishna.jpeg' },
  { name: 'NeelKanth', src: '/brand/NeelKanth.jpeg' },
  { name: 'Safe Services', src: '/brand/SafeServices.jpeg' },
  { name: 'Sai Enterprise', src: '/brand/Sai-enterprise.jpeg' },
];

// Duplicate for seamless infinite scroll
const allLogos = [...logos, ...logos];

export const BrandMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-12 border-y border-gray-100">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-400">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* Marquee track */}
      <div
        className="relative flex overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
      >
        <div
          className="flex items-center gap-16 whitespace-nowrap"
          style={{
            animation: 'marqueeSlide 28s linear infinite',
          }}
        >
          {allLogos.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.name}
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
              style={{
                filter: 'grayscale(80%)',
                opacity: 0.6,
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%)';
                (e.currentTarget as HTMLImageElement).style.opacity = '1';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(80%)';
                (e.currentTarget as HTMLImageElement).style.opacity = '0.6';
              }}
              onError={e => {
                // Hide broken images gracefully
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          ))}
        </div>
      </div>

      {/* Inline keyframe for guaranteed rendering */}
      <style>{`
        @keyframes marqueeSlide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

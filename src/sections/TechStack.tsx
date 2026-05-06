import React from 'react';

const row1 = [
  { name: 'React', label: 'Frontend' },
  { name: 'Next.js', label: 'Frontend' },
  { name: 'TypeScript', label: 'Language' },
  { name: 'Node.js', label: 'Backend' },
  { name: 'Python', label: 'Backend' },
  { name: 'AWS', label: 'Cloud' },
  { name: 'React', label: 'Frontend' },
  { name: 'Next.js', label: 'Frontend' },
  { name: 'TypeScript', label: 'Language' },
  { name: 'Node.js', label: 'Backend' },
  { name: 'Python', label: 'Backend' },
  { name: 'AWS', label: 'Cloud' },
];

const row2 = [
  { name: 'Kubernetes', label: 'DevOps' },
  { name: 'Docker', label: 'DevOps' },
  { name: 'PostgreSQL', label: 'Database' },
  { name: 'MongoDB', label: 'Database' },
  { name: 'TensorFlow', label: 'AI/ML' },
  { name: 'Three.js', label: 'Graphics' },
  { name: 'Kubernetes', label: 'DevOps' },
  { name: 'Docker', label: 'DevOps' },
  { name: 'PostgreSQL', label: 'Database' },
  { name: 'MongoDB', label: 'Database' },
  { name: 'TensorFlow', label: 'AI/ML' },
  { name: 'Three.js', label: 'Graphics' },
];

const TechPill: React.FC<{ name: string; label: string }> = ({ name, label }) => (
  <div
    className="flex items-center gap-3 px-5 py-3 rounded-2xl flex-shrink-0 hover:shadow-sm transition-all duration-200 cursor-default"
    style={{
      background: '#fff',
      border: '1.5px solid #f0e8fc',
      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
    }}
  >
    <div>
      <div className="text-sm font-semibold" style={{ color: '#111' }}>
        {name}
      </div>
      <div
        className="text-xs mt-0.5"
        style={{ color: '#853ae8' }}
      >
        {label}
      </div>
    </div>
  </div>
);

export const TechStack: React.FC = () => {
  return (
    <div
      id="techstack"
      className="relative overflow-hidden py-24"
      style={{ background: '#fafafa' }}
    >
      {/* Left/right fades */}
      <div
        className="absolute inset-y-0 left-0 w-16 sm:w-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, #fafafa, transparent)' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-16 sm:w-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to left, #fafafa, transparent)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header */}
        <div className="text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{
              background: '#f3eafd',
              border: '1px solid rgba(133,58,232,0.2)',
              color: '#853ae8',
            }}
          >
            Our Arsenal
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#111' }}
          >
            Built With the{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #853ae8 0%, #722dcc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Best Stack
            </span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            We choose best-in-class tools for every layer of your product — no compromise.
          </p>
        </div>
      </div>

      {/* Marquee Row 1 - scrolls left */}
      <div className="mb-3 overflow-hidden">
        <div
          className="flex gap-3"
          style={{ animation: 'marqueeLeft 30s linear infinite', width: 'max-content' }}
        >
          {row1.map((tech, i) => (
            <TechPill key={`r1-${i}`} {...tech} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - scrolls right */}
      <div className="overflow-hidden">
        <div
          className="flex gap-3"
          style={{ animation: 'marqueeRight 35s linear infinite', width: 'max-content' }}
        >
          {row2.map((tech, i) => (
            <TechPill key={`r2-${i}`} {...tech} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
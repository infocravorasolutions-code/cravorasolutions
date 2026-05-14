import React from 'react';

const openRoles = [
  {
    title: 'Full-Stack Engineer',
    type: 'Full-time · Remote',
    location: 'Global',
    tags: ['React', 'Node.js', 'TypeScript'],
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time · Remote',
    location: 'Global',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
  },
  {
    title: 'Mobile Developer (React Native)',
    type: 'Contract · Remote',
    location: 'Global',
    tags: ['React Native', 'iOS', 'Android'],
  },
];

export const Careers: React.FC = () => {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#ffffff', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          padding: '6rem 1.5rem 4rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #f0f4ff 0%, #ffffff 60%)',
        }}
      >
        <p style={{ color: '#4F46E5', fontWeight: 600, letterSpacing: 1, marginBottom: '0.75rem', fontSize: '0.9rem' }}>
          CAREERS AT CRAVORA
        </p>
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: '#111827',
            maxWidth: 700,
            margin: '0 auto 1.25rem',
            lineHeight: 1.2,
          }}
        >
          Build Products That Matter — With Us
        </h1>
        <p style={{ color: '#6B7280', maxWidth: 540, margin: '0 auto', lineHeight: 1.7, fontSize: '1.05rem' }}>
          We're a small, focused team shipping real products for global clients. If you love ownership, craft, and
          impact — you'll fit right in.
        </p>
      </section>

      {/* Open Roles */}
      <section style={{ maxWidth: 860, margin: '0 auto', padding: '4rem 1.5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827', marginBottom: '2rem' }}>
          Open Roles
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {openRoles.map((role) => (
            <div
              key={role.title}
              style={{
                border: '1px solid #E5E7EB',
                borderRadius: 12,
                padding: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(79,70,229,0.1)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = 'none')}
            >
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '0.3rem' }}>
                  {role.title}
                </h3>
                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                  {role.type} · {role.location}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: '#EEF2FF',
                        color: '#4F46E5',
                        borderRadius: 6,
                        padding: '0.2rem 0.65rem',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="mailto:hello@cravorasolutions.com"
                style={{
                  background: '#4F46E5',
                  color: '#fff',
                  borderRadius: 8,
                  padding: '0.65rem 1.5rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap',
                }}
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: '#4F46E5',
          color: '#fff',
          textAlign: 'center',
          padding: '4rem 1.5rem',
        }}
      >
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          Don't see your role? Reach out anyway.
        </h2>
        <p style={{ opacity: 0.85, marginBottom: '1.75rem', lineHeight: 1.6 }}>
          We're always open to exceptional people. Send us your portfolio and a short note.
        </p>
        <a
          href="mailto:hello@cravorasolutions.com"
          style={{
            background: '#fff',
            color: '#4F46E5',
            borderRadius: 8,
            padding: '0.85rem 2.25rem',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '1rem',
          }}
        >
          Get In Touch
        </a>
      </section>
    </main>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <p
        style={{
          fontSize: '7rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          marginBottom: '1rem',
        }}
      >
        404
      </p>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
        Page Not Found
      </h1>
      <p style={{ color: '#6B7280', maxWidth: 440, marginBottom: '2.5rem', lineHeight: 1.7 }}>
        The page you're looking for doesnt exist or has been moved. Let's get you back on track.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          to="/"
          style={{
            background: '#4F46E5',
            color: '#fff',
            borderRadius: 8,
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Back to Home
        </Link>
        <Link
          to="/contact"
          style={{
            background: 'transparent',
            color: '#4F46E5',
            border: '2px solid #4F46E5',
            borderRadius: 8,
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

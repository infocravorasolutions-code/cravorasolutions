import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    slug: 'how-to-build-mvp-in-12-weeks',
    title: 'How to Build a Scalable MVP in 12 Weeks',
    excerpt: "Most founders overthink their first version. Here's the exact framework we use at Cravora to scope, build, and ship MVPs that attract early customers.",
    category: 'Product',
    date: 'April 2025',
    readTime: '6 min read',
  },
  {
    slug: 'custom-software-vs-saas',
    title: "Custom Software vs. Off-the-Shelf SaaS: Which Is Right for You?",
    excerpt: "The 'just use an existing tool' advice doesn't always hold. We break down when custom software pays off and when it doesn't.",
    category: 'Strategy',
    date: 'March 2025',
    readTime: '5 min read',
  },
  {
    slug: 'ai-automation-for-smbs',
    title: "AI Automation for SMBs: Where to Start Without Wasting Budget",
    excerpt: "AI isn't magic. But in the right places, it cuts costs and speeds up operations dramatically. Here's where we've seen real ROI for small and mid-size businesses.",
    category: 'AI',
    date: 'February 2025',
    readTime: '7 min read',
  },
  {
    slug: 'hiring-software-dev-agency',
    title: '10 Questions to Ask Before Hiring a Software Development Agency',
    excerpt: "Picking the wrong agency is expensive. This checklist helps you avoid the red flags and find a team that actually delivers.",
    category: 'Hiring',
    date: 'January 2025',
    readTime: '4 min read',
  },
  {
    slug: 'react-native-vs-flutter-2025',
    title: "React Native vs Flutter in 2025: An Honest Comparison",
    excerpt: "We've shipped apps in both. Here's an unbiased breakdown of performance, DX, and long-term maintainability.",
    category: 'Engineering',
    date: 'December 2024',
    readTime: '8 min read',
  },
  {
    slug: 'api-first-architecture',
    title: "Why We Build API-First (And Why You Should Too)",
    excerpt: "Starting with your API design forces clarity. It also makes future integrations, mobile apps, and third-party connections dramatically easier.",
    category: 'Engineering',
    date: 'November 2024',
    readTime: '5 min read',
  },
];

const categories = ['All', 'Product', 'Strategy', 'AI', 'Engineering', 'Hiring'];

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#ffffff', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          padding: '6rem 1.5rem 3rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #f0f4ff 0%, #ffffff 60%)',
        }}
      >
        <p style={{ color: '#4F46E5', fontWeight: 600, letterSpacing: 1, marginBottom: '0.75rem', fontSize: '0.9rem' }}>
          THE CRAVORA BLOG
        </p>
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: 800,
            color: '#111827',
            maxWidth: 640,
            margin: '0 auto 1rem',
            lineHeight: 1.2,
          }}
        >
          Insights for Founders & Product Teams
        </h1>
        <p style={{ color: '#6B7280', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
          Practical guides on software strategy, engineering, and building products that scale.
        </p>
      </section>

      {/* Filter */}
      <section style={{ maxWidth: 1080, margin: '0 auto', padding: '2rem 1.5rem 0' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: 20,
                border: '1px solid',
                borderColor: activeCategory === cat ? '#4F46E5' : '#E5E7EB',
                background: activeCategory === cat ? '#4F46E5' : 'transparent',
                color: activeCategory === cat ? '#fff' : '#6B7280',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{ maxWidth: 1080, margin: '0 auto', padding: '2.5rem 1.5rem 5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filtered.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <article
                style={{
                  border: '1px solid #E5E7EB',
                  borderRadius: 14,
                  padding: '1.75rem',
                  height: '100%',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  cursor: 'pointer',
                  background: '#fff',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 8px 30px rgba(79,70,229,0.12)';
                  el.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = 'none';
                  el.style.transform = 'none';
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <span
                    style={{
                      background: '#EEF2FF',
                      color: '#4F46E5',
                      borderRadius: 6,
                      padding: '0.2rem 0.65rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: 0.5,
                    }}
                  >
                    {post.category}
                  </span>
                </div>
                <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', marginBottom: '0.6rem', lineHeight: 1.4 }}>
                  {post.title}
                </h2>
                <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.8rem', color: '#9CA3AF' }}>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

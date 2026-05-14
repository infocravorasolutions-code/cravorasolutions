import React from 'react';
import { useParams, Link } from 'react-router-dom';

const posts: Record<string, { title: string; category: string; date: string; readTime: string; body: string }> = {
  'how-to-build-mvp-in-12-weeks': {
    title: 'How to Build a Scalable MVP in 12 Weeks',
    category: 'Product',
    date: 'April 2025',
    readTime: '6 min read',
    body: `Most founders overthink their first version. They want feature parity with competitors before anyone has even validated the core idea. That's a recipe for wasted months and wasted capital.

At Cravora, we've helped dozens of startups ship their first version in 8–12 weeks. Heres the framework:

**Week 1–2: Scope ruthlessly**
Map every feature you think you need. Then cut 60% of them. Your MVP should do one thing well.

**Week 3–4: Design for clarity**
A confused user won't convert. Invest in clear UX before writing a single line of code.

**Week 5–10: Build in sprints**
Two-week sprints. Demo at the end of each. Catch scope creep early.

**Week 11–12: Test, fix, ship**
Real user testing. Fix the critical bugs. Ship to your first 10 users — not the world.

The goal of an MVP is learning, not perfection. Ship it.`,
  },
  'custom-software-vs-saas': {
    title: 'Custom Software vs. Off-the-Shelf SaaS: Which Is Right for You?',
    category: 'Strategy',
    date: 'March 2025',
    readTime: '5 min read',
    body: `"Just use Salesforce" is advice that gets repeated a lot. And sometimes it's right. But not always.

Heres a simple framework: if your workflow is your competitive advantage, build custom. If it's commodity, buy.

**When off-the-shelf wins:**
- You're early and want to move fast
- The tool is 90% of what you need
- Maintenance overhead isn't your core skill

**When custom software wins:**
- You need deep integrations across 5+ systems
- Your process is genuinely unique
- The SaaS pricing at scale becomes prohibitive
- You're building a product, not just using one

The hidden cost of SaaS at scale is real. We've seen companies paying $80k/year for tools they could have built for $60k once.`,
  },
};

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <main style={{ fontFamily: 'Inter, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Post Not Found</h1>
        <p style={{ color: '#6B7280', marginBottom: '2rem' }}>This article doesnt exist or may have been moved.</p>
        <Link to="/blog" style={{ background: '#4F46E5', color: '#fff', borderRadius: 8, padding: '0.75rem 2rem', textDecoration: 'none', fontWeight: 600 }}>
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#ffffff', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '5rem 1.5rem 2rem' }}>
        <Link
          to="/blog"
          style={{ color: '#4F46E5', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2rem' }}
        >
          ← Back to Blog
        </Link>

        <span
          style={{
            display: 'inline-block',
            background: '#EEF2FF',
            color: '#4F46E5',
            borderRadius: 6,
            padding: '0.25rem 0.7rem',
            fontSize: '0.78rem',
            fontWeight: 700,
            marginBottom: '1rem',
          }}
        >
          {post.category}
        </span>

        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800,
            color: '#111827',
            lineHeight: 1.25,
            marginBottom: '1rem',
          }}
        >
          {post.title}
        </h1>

        <div style={{ display: 'flex', gap: '0.75rem', color: '#9CA3AF', fontSize: '0.875rem', marginBottom: '3rem' }}>
          <span>Cravora Solutions</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <hr style={{ borderColor: '#F3F4F6', marginBottom: '3rem' }} />

        {/* Body */}
        <div
          style={{
            color: '#374151',
            lineHeight: 1.85,
            fontSize: '1.05rem',
          }}
        >
          {post.body.split('\n\n').map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              return (
                <h3 key={i} style={{ fontWeight: 700, color: '#111827', fontSize: '1.1rem', margin: '2rem 0 0.5rem' }}>
                  {para.replace(/\*\*/g, '')}
                </h3>
              );
            }
            if (para.startsWith('**')) {
              return (
                <p key={i} style={{ marginBottom: '1.25rem' }}>
                  <strong>{para.replace(/\*\*/g, '')}</strong>
                </p>
              );
            }
            return (
              <p key={i} style={{ marginBottom: '1.25rem' }}>
                {para}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: '4rem',
            background: '#EEF2FF',
            borderRadius: 14,
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>
            Ready to build your product?
          </h3>
          <p style={{ color: '#6B7280', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
            Book a free 30-minute discovery call with our team.
          </p>
          <Link
            to="/contact"
            style={{
              background: '#4F46E5',
              color: '#fff',
              borderRadius: 8,
              padding: '0.75rem 2rem',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '0.95rem',
            }}
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
};

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya M.',
    role: 'Founder',
    company: 'HealthTech startup, Singapore',
    content:
      "Cravora didn't just build what we asked for — they pushed back when something wouldn't work and suggested better solutions. That's rare.",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    metric: 'Rare',
    metricLabel: 'Partnership',
  },
  {
    name: 'James T.',
    role: 'CTO',
    company: 'SaaS company, UK',
    content:
      "We'd been burned by two agencies before. Cravora was different. Honest timelines, weekly updates, no drama.",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    metric: 'Zero',
    metricLabel: 'Drama',
  },
  {
    name: 'Aarav S.',
    role: 'Co-founder',
    company: 'Fintech startup, India',
    content:
      "They built our entire MVP in 7 weeks. We went live, got our first paying customers, and raised funding — all within 4 months.",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    metric: '7 Weeks',
    metricLabel: 'to MVP',
  },
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const goNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 200);
  };

  const goPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 200);
  };

  const t = testimonials[current];

  return (
    <div
      id="testimonials"
      className="relative overflow-hidden py-28"
      style={{ background: '#fff' }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{
              background: '#f3eafd',
              border: '1px solid rgba(133,58,232,0.2)',
              color: '#853ae8',
            }}
          >
            Testimonials
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#111' }}
          >
            What our{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #853ae8 0%, #722dcc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              clients say
            </span>
          </h2>
        </div>

        {/* Testimonial card */}
        <div
          className="relative rounded-3xl p-8 sm:p-12 transition-all duration-300"
          style={{
            background: '#fafafa',
            border: '1.5px solid #f0e8fc',
            boxShadow: '0 4px 24px rgba(133,58,232,0.08)',
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? 'translateY(6px)' : 'translateY(0)',
          }}
        >
          {/* Top row - quote icon + metric */}
          <div className="flex items-start justify-between mb-8">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #853ae8, #722dcc)',
              }}
            >
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Metric highlight */}
            <div className="text-right">
              <div
                className="text-3xl sm:text-4xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #853ae8, #722dcc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {t.metric}
              </div>
              <div className="text-xs font-medium mt-1" style={{ color: '#9ca3af' }}>
                {t.metricLabel}
              </div>
            </div>
          </div>

          {/* Quote */}
          <blockquote
            className="text-lg sm:text-xl md:text-2xl leading-relaxed font-medium mb-10"
            style={{ color: '#374151' }}
          >
            "{t.content}"
          </blockquote>

          {/* Author + stars */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-2xl object-cover"
                style={{ border: '2px solid #e4d4f8' }}
              />
              <div>
                <div className="font-bold text-base" style={{ color: '#111' }}>
                  {t.name}
                </div>
                <div className="text-sm" style={{ color: '#9ca3af' }}>
                  {t.role} · {t.company}
                </div>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#fbbf24' }} />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-5 mt-10">
          <button
            onClick={goPrev}
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-sm"
            style={{
              background: '#fff',
              border: '1.5px solid #e4d4f8',
              color: '#853ae8',
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  background: i === current
                    ? 'linear-gradient(135deg, #853ae8, #722dcc)'
                    : '#e4d4f8',
                }}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-sm"
            style={{
              background: '#fff',
              border: '1.5px solid #e4d4f8',
              color: '#853ae8',
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
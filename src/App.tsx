import React, { useEffect } from 'react';
import { Lenis } from '@studio-freight/react-lenis';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Capabilities } from './components/sections/Capabilities';
import { Portfolio } from './components/sections/Portfolio';
import { Process } from './components/sections/Process';
import { TechStack } from './components/sections/TechStack';
import { Testimonials } from './components/sections/Testimonials';
import { About } from './components/sections/About';
import { CTA } from './components/sections/CTA';
import { useReducedMotion } from './hooks/usePerformanceMode';

function App() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Load Google Fonts with display=swap for performance
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Enhanced SEO meta tags
    document.title = 'Cravora Solutions - Ship Faster. Smarter. Safer. | Professional Tech Agency';
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Professional tech agency specializing in 3D web development, mobile apps, cloud solutions, and AI/ML integrations. We ship with confidence. 99.9% uptime. 150+ projects delivered.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Keywords meta tag
    const metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'web development, mobile apps, cloud solutions, AI ML, three.js, react development, enterprise software, tech agency, 3D web, professional development');
    document.head.appendChild(metaKeywords);

    // Open Graph meta tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Cravora Solutions - Professional Tech Agency');
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'We build exceptional digital experiences with cutting-edge technology and proven processes. Ship faster, smarter, safer.');
    document.head.appendChild(ogDescription);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    document.head.appendChild(ogType);

    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1200');
    document.head.appendChild(ogImage);

    // Twitter Card meta tags
    const twitterCard = document.createElement('meta');
    twitterCard.setAttribute('name', 'twitter:card');
    twitterCard.setAttribute('content', 'summary_large_image');
    document.head.appendChild(twitterCard);

    // JSON-LD Schema markup
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cravora Solutions",
      "description": "Professional tech agency specializing in web development, mobile apps, cloud solutions, and AI/ML integrations.",
      "url": "https://cravora.com",
      "logo": "https://cravora.com/logo.png",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "email": "hello@cravora.com"
      },
      "sameAs": [
        "https://github.com/cravora",
        "https://linkedin.com/company/cravora",
        "https://twitter.com/cravora"
      ],
      "offers": {
        "@type": "Service",
        "name": "Web Development Services",
        "description": "Professional web development, mobile apps, and cloud solutions"
      }
    });
    document.head.appendChild(schemaScript);

    // Viewport meta tag for mobile optimization
    const viewport = document.querySelector('meta[name="viewport"]') || document.createElement('meta');
    viewport.setAttribute('name', 'viewport');
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    if (!document.querySelector('meta[name="viewport"]')) {
      document.head.appendChild(viewport);
    }

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Lenis 
      smooth 
      duration={1.2}
      easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
      direction="vertical"
      gestureDirection="vertical"
      smoothTouch={false}
      touchMultiplier={2}
      wheelMultiplier={1}
      infinite={false}
    >
      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <Hero />
          <Capabilities />
          <Portfolio />
          <Process />
          <TechStack />
          <Testimonials />
          <About />
          <CTA />
        </main>
        
        <Footer />
      </div>
    </Lenis>
  );
}

export default App;
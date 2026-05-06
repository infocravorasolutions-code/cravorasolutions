import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { usePerformanceMode } from './hooks/usePerformanceMode';
import { Settings } from 'lucide-react';
import { Layout } from './components/ui/Layout';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { NotFound } from './components/ui/NotFound';

// Core Pages
import { Home } from './pages/Home';
import { AboutUs } from './sections/AboutUs';
import { Careers } from './sections/Careers';
import { Blog } from './sections/Blog';
import { BlogDetail } from './components/blog/BlogDetail';
import { Contact } from './pages/Contact';

// Custom Pages
import { OurProcess } from './pages/OurProcess';
import { Portfolio } from './pages/Portfolio';

// Services
import { WebAppDev } from './pages/services/WebAppDev';
import { MobileAppDev } from './pages/services/MobileAppDev';
import { SaaSDevelopment } from './pages/services/SaaSDevelopment';
import { AiAutomation } from './pages/services/AiAutomation';
import { MvpDevelopment } from './pages/services/MvpDevelopment';

// Industries
import { Fintech } from './pages/industries/Fintech';
import { Healthcare } from './pages/industries/Healthcare';
import { Ecommerce } from './pages/industries/Ecommerce';

// Generated Dynamic Pages (Placeholders)
import { EdTech } from './pages/industries/EdTech';
import { RealEstate } from './pages/industries/RealEstate';

// New Bespoke Pages
import { TeamPage } from './pages/Team';
import { TestimonialsPage } from './pages/Testimonials';
import { CaseStudiesPage } from './pages/CaseStudies';
import { ProjectEstimatorPage } from './pages/ProjectEstimator';

// Loading component
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-brand border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
      <p className="text-gray-900 font-heading">Loading Cravora Solutions...</p>
    </div>
  </div>
);

// Performance toggle component
const PerformanceToggle = () => {
  const { isLiteMode, toggleLiteMode } = usePerformanceMode();

  if (import.meta.env.PROD) return null; // Hide in production

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* <button
        onClick={toggleLiteMode}
        className={`p-3 rounded-full shadow-lg transition-all duration-300 ${isLiteMode
          ? 'bg-green-500 hover:bg-green-600 text-white'
          : 'bg-gray-800 hover:bg-gray-700 text-white'
          }`}
      // title={isLiteMode ? 'Performance Mode: ON' : 'Performance Mode: OFF'}
      >
        <Settings className="w-5 h-5" />
      </button> */}
    </div>
  );
};

function App() {
  useSmoothScroll();

  useEffect(() => {
    // Preload critical resources
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    link.as = 'style';
    document.head.appendChild(link);
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-body">
          <Suspense fallback={<LoadingScreen />}>
            <PerformanceToggle />
            <Routes>
              {/* Top level routes */}
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/about" element={<Layout><AboutUs /></Layout>} />
              <Route path="/careers" element={<Layout><Careers /></Layout>} />
              <Route path="/contact" element={<Layout><Contact /></Layout>} />

              {/* Services */}
              <Route path="/services/web-application-development" element={<Layout><WebAppDev /></Layout>} />
              <Route path="/services/mobile-app-development" element={<Layout><MobileAppDev /></Layout>} />
              <Route path="/services/saas-development" element={<Layout><SaaSDevelopment /></Layout>} />
              <Route path="/services/ai-automation-solutions" element={<Layout><AiAutomation /></Layout>} />
              <Route path="/services/mvp-development" element={<Layout><MvpDevelopment /></Layout>} />

              {/* Industries */}
              <Route path="/industries/fintech" element={<Layout><Fintech /></Layout>} />
              <Route path="/industries/healthcare" element={<Layout><Healthcare /></Layout>} />
              <Route path="/industries/ecommerce" element={<Layout><Ecommerce /></Layout>} />
              <Route path="/industries/edtech" element={<Layout><EdTech /></Layout>} />
              <Route path="/industries/real-estate" element={<Layout><RealEstate /></Layout>} />

              {/* About subpages & Portfolio */}
              <Route path="/about/our-process" element={<Layout><OurProcess /></Layout>} />
              <Route path="/about/team" element={<Layout><TeamPage /></Layout>} />
              <Route path="/about/testimonials" element={<Layout><TestimonialsPage /></Layout>} />
              <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />

              {/* Resources */}
              <Route path="/blog" element={<Layout><Blog /></Layout>} />
              <Route path="/blog/:slug" element={<Layout><BlogDetail /></Layout>} />
              <Route path="/case-studies" element={<Layout><CaseStudiesPage /></Layout>} />
              <Route path="/tools/project-cost-estimator" element={<Layout><ProjectEstimatorPage /></Layout>} />

              {/* 404 */}
              <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
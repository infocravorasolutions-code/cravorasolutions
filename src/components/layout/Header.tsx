import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Settings } from 'lucide-react';
import { usePerformanceMode } from '../../hooks/usePerformanceMode';
import { GradientText } from '../ui/GradientText';

const navItems = [
  { name: 'Work', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { isLiteMode, toggleLiteMode } = usePerformanceMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#11C5A3] to-[#0AA0FF] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold font-['Space_Grotesk']">
              <GradientText>Cravora</GradientText>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#11C5A3] font-medium font-['Inter'] transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA & Settings */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="p-2 text-gray-500 hover:text-[#11C5A3] transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Settings className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-[#11C5A3] to-[#0AA0FF] text-white rounded-xl font-semibold font-['Inter'] hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Settings Dropdown */}
      <AnimatePresence>
        {isSettingsOpen && (
          <motion.div
            className="absolute top-full right-4 mt-2 w-64 bg-white/90 backdrop-blur-xl rounded-xl border border-white/20 shadow-lg p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <h3 className="font-semibold font-['Space_Grotesk'] text-[#0F2333] mb-3">
              Performance Settings
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-sm font-['Inter'] text-gray-600">
                Lite Mode {isLiteMode && '(Active)'}
              </span>
              <button
                onClick={toggleLiteMode}
                className={`w-12 h-6 rounded-full transition-colors ${
                  isLiteMode ? 'bg-[#11C5A3]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    isLiteMode ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 font-['Inter']">
              Reduces 3D effects and animations for better performance
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-white/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-[#11C5A3] font-medium font-['Inter'] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={toggleLiteMode}
                className="block w-full text-left text-sm text-gray-600 font-['Inter']"
              >
                {isLiteMode ? 'Disable' : 'Enable'} Lite Mode
              </button>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-[#11C5A3] to-[#0AA0FF] text-white rounded-xl font-semibold font-['Inter'] mt-4">
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
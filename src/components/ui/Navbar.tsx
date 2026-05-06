import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, MonitorPlay, Smartphone, Cloud, Code, Bot, LineChart, Stethoscope, ShoppingCart, GraduationCap, Building } from 'lucide-react';

const MENU_ITEMS = [
  {
    title: 'Services',
    path: '/services',
    items: [
      { name: 'Web application dev', path: '/services/web-application-development', icon: MonitorPlay },
      { name: 'Mobile app dev', path: '/services/mobile-app-development', icon: Smartphone },
      { name: 'SaaS development', path: '/services/saas-development', icon: Cloud },
      { name: 'AI & automation', path: '/services/ai-automation-solutions', icon: Bot },
      { name: 'MVP development', path: '/services/mvp-development', icon: Code },
    ],
  },
  {
    title: 'Industries',
    path: '/industries',
    items: [
      { name: 'Fintech', path: '/industries/fintech', icon: LineChart },
      { name: 'Healthcare', path: '/industries/healthcare', icon: Stethoscope },
      { name: 'E-commerce', path: '/industries/ecommerce', icon: ShoppingCart },
      { name: 'EdTech', path: '/industries/edtech', icon: GraduationCap },
      { name: 'Real estate', path: '/industries/real-estate', icon: Building },
    ],
  },
  {
    title: 'About Us',
    path: '/about',
    items: [
      { name: 'Our process', path: '/about/our-process' },
      { name: 'Testimonials', path: '/about/testimonials' },
      { name: 'Team', path: '/about/team' },
    ],
  },
  {
    title: 'Resources',
    path: '/resources',
    items: [
      { name: 'Blog', path: '/blog' },
    ],
  },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <Link to="/" className="flex items-center z-50">
              <img src="/cravoraLogo.png" alt="Cravora Solutions" className="h-28 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {MENU_ITEMS.map((menu) => (
                <div key={menu.title} className="relative group">
                  <button className="flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground py-8">
                    {menu.title}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out">
                    <div className="bg-white dark:bg-black border border-border rounded-2xl shadow-xl overflow-hidden p-3 mt-[-8px]">
                      {menu.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
                        >
                          {item.icon && <item.icon className="w-5 h-5 text-brand" />}
                          <span className="font-medium text-sm">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://calendly.com/info-cravorasolutions/30min"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors text-sm"
              >
                Book a call
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 bg-background lg:hidden transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="pt-24 px-6 h-full overflow-y-auto pb-20">
          <div className="space-y-6">
            {MENU_ITEMS.map((menu) => (
              <div key={menu.title}>
                <div className="font-semibold text-sm text-brand mb-3 uppercase tracking-wider">{menu.title}</div>
                <div className="space-y-2 pl-4 border-l-2 border-border">
                  {menu.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={closeMenu}
                      className="block py-2 text-foreground/80 hover:text-brand font-medium text-lg"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-6 mt-6 border-t border-border">
              <a
                href="https://calendly.com/info-cravorasolutions/30min"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="block w-full py-4 text-center rounded-xl bg-brand text-white font-bold text-lg hover:bg-brand-hover"
              >
                Book a discovery call
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}; 
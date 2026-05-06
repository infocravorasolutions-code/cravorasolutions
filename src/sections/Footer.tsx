import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Section } from '../components/ui/Section';

const footerLinks = {
  Services: [
    { name: 'Web application dev', path: '/services/web-application-development' },
    { name: 'Mobile app dev', path: '/services/mobile-app-development' },
    { name: 'SaaS development', path: '/services/saas-development' },
    { name: 'AI & automation', path: '/services/ai-automation-solutions' },
    { name: 'MVP development', path: '/services/mvp-development' },
  ],
  Industries: [
    { name: 'Fintech', path: '/industries/fintech' },
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'E-commerce', path: '/industries/ecommerce' },
    { name: 'EdTech', path: '/industries/edtech' },
    { name: 'Real estate', path: '/industries/real-estate' },
  ],
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Process', path: '/about/our-process' },
    { name: 'Testimonials', path: '/about/testimonials' },
    { name: 'Team', path: '/about/team' },
  ],
  Resources: [
    { name: 'Blog', path: '/blog' },
  ]
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/109135330/', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' }
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <Section padding="xl" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">

          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center mb-6">
              <img
                src="/cravoraLogo.png"
                alt="Cravora Solutions"
                className="h-16 md:h-18 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
              Ship Faster. Smarter. Safer. We build cutting-edge digital products that turn ambitious startup ideas into scalable realities.
            </p>

            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand" />
                <a href="mailto:info@cravorasolutions.com" className="hover:text-brand transition-colors">info@cravorasolutions.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand" />
                <a href="https://wa.me/918200347067" className="hover:text-brand transition-colors">+91 82003 47067</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand mt-0.5" />
                <span>8 Radhika industrial Park,Opp. water tank,Ahmedabad, Gujarat 382418</span>
              </div>
            </div>
          </div>

          {/* Links grid */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-sm text-muted-foreground hover:text-brand transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cravora Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-muted-foreground hover:text-brand transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </Section>
    </footer>
  );
};
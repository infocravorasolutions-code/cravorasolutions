import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const BASE_URL = 'https://cravorasolutions.com';

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  '@id': `${BASE_URL}/#organization`,
  name: 'Cravora Solutions',
  alternateName: 'Cravora',
  url: BASE_URL,
  logo: `${BASE_URL}/brand/cravoraLogo.png`,
  image: `${BASE_URL}/brand/cravoraLogo.png`,
  description: 'Custom software development agency in Ahmedabad building scalable web applications, mobile apps, SaaS MVPs, and AI automation solutions.',
  email: 'contact@cravorasolutions.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380015',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.0225,
    longitude: 72.5714,
  },
  founder: [
    { '@type': 'Person', name: 'Darshan Patel', jobTitle: 'Co-Founder & CEO', sameAs: 'https://www.linkedin.com/in/darshan-patel-392900223/' },
    { '@type': 'Person', name: 'Mohit Rathhod', jobTitle: 'Co-Founder & CTO', sameAs: 'https://www.linkedin.com/in/mohit-rathod-54a742217/' },
    { '@type': 'Person', name: 'Dev Patel', jobTitle: 'Co-Founder & Head of Operations', sameAs: 'https://www.linkedin.com/in/dev-patel-b54133221/' },
    { '@type': 'Person', name: 'Ankit Soni', jobTitle: 'Sales Head', sameAs: 'https://www.linkedin.com/in/ankit-soni-53b088127/' },
  ]
};

const routes = [
  {
    path: '/',
    title: 'Custom Software Development Company for Startups & SMBs | Cravora Solutions',
    description: 'Cravora Solutions builds custom web apps, mobile apps, SaaS products, and AI tools for startups and SMBs globally. 50+ projects, 12+ countries.',
    h1: 'Custom Software Development Company Built for Founders & Enterprises',
    summary: 'Cravora Solutions is a full-service custom software development agency headquartered in Ahmedabad, Gujarat, India. We engineer web applications, mobile apps, SaaS MVPs, and AI automation tools for clients in over 12 countries.',
    schema: [orgSchema]
  },
  {
    path: '/about',
    title: 'About Cravora Solutions — Custom Software Development Team',
    description: 'Learn who we are, how we work, and why 50+ startups and SMBs across 12 countries trust Cravora Solutions to build their software.',
    h1: 'About Cravora Solutions — High-Performance Software Development Team',
    summary: 'Founded in Ahmedabad, Gujarat, Cravora Solutions delivers end-to-end custom software engineering with absolute transparency, agile delivery, and long-term partnership.',
    schema: [orgSchema]
  },
  {
    path: '/about/team',
    title: 'Meet the Team | Founders & Leadership | Cravora Solutions',
    description: 'Meet the team behind Cravora Solutions — experienced founders and software leaders committed to building exceptional digital products.',
    h1: 'The People Who Build Your Digital Products',
    summary: 'Our leadership team includes Darshan Patel (Co-Founder & CEO), Mohit Rathhod (Co-Founder & CTO), Dev Patel (Co-Founder & Head of Operations), and Ankit Soni (Sales Head).',
    schema: [orgSchema]
  },
  {
    path: '/about/our-process',
    title: 'Our Software Development Process | Cravora Solutions',
    description: 'Discover how Cravora Solutions ships production-grade software on time: Discovery, Architecture, Agile Sprints, and 30-Day Support.',
    h1: 'Our Proven Software Development Methodology',
    summary: 'We use a transparent 4-phase agile process: Scoping & Discovery, Architecture & Design, Iterative Building with weekly demos, and Deployment with post-launch support.',
    schema: [orgSchema]
  },
  {
    path: '/about/testimonials',
    title: 'Client Testimonials & Reviews | Cravora Solutions',
    description: 'Read real reviews and client feedback from founders and tech leaders who built their web, mobile, and SaaS products with Cravora Solutions.',
    h1: 'What Founders & Executives Say About Cravora',
    summary: 'Over 50+ clients across fintech, healthcare, e-commerce, and SaaS trust Cravora Solutions for reliable software delivery and high engineering standards.',
    schema: [orgSchema]
  },
  {
    path: '/services/web-application-development',
    title: 'Web Application Development Services | Cravora Solutions',
    description: 'Cravora builds fast, scalable, and secure web applications for startups and enterprises using React, Next.js, and Node.js.',
    h1: 'Custom Web Application Development Services',
    summary: 'Custom web application development involves engineering bespoke web software tailored to your specific business workflows. Cravora Solutions designs and builds high-performance React and Next.js applications backed by scalable Node.js architectures.',
    schema: [
      orgSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Web Application Development',
        serviceType: 'Web Application Development',
        provider: { '@type': 'LocalBusiness', name: 'Cravora Solutions' },
        url: `${BASE_URL}/services/web-application-development`
      }
    ]
  },
  {
    path: '/services/mobile-app-development',
    title: 'Mobile App Development Services | iOS & Android | Cravora Solutions',
    description: 'Cravora builds native and cross-platform mobile apps for iOS and Android using Flutter and React Native.',
    h1: 'Custom Mobile App Development Services for iOS & Android',
    summary: 'Mobile app development is the creation of software applications designed to run natively or cross-platform on mobile devices. Cravora Solutions specializes in Flutter and React Native app engineering.',
    schema: [
      orgSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Mobile App Development',
        serviceType: 'Mobile App Development',
        provider: { '@type': 'LocalBusiness', name: 'Cravora Solutions' },
        url: `${BASE_URL}/services/mobile-app-development`
      }
    ]
  },
  {
    path: '/services/saas-development',
    title: 'SaaS Development Services | Build Your SaaS Product | Cravora Solutions',
    description: 'Cravora builds scalable, multi-tenant SaaS products from concept to launch with Stripe billing, SSO, and cloud scaling.',
    h1: 'Multi-Tenant SaaS Product Development Services',
    summary: 'SaaS development is the end-to-end engineering of cloud-hosted, multi-tenant subscription applications. Cravora Solutions designs and deploys scalable SaaS platforms featuring Stripe billing and role-based access control.',
    schema: [
      orgSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'SaaS Development',
        serviceType: 'SaaS Development',
        provider: { '@type': 'LocalBusiness', name: 'Cravora Solutions' },
        url: `${BASE_URL}/services/saas-development`
      }
    ]
  },
  {
    path: '/services/ai-automation-solutions',
    title: 'AI & Automation Solutions | Custom AI Development | Cravora Solutions',
    description: 'Cravora builds custom AI integrations, LLM-powered tools, RAG architectures, and workflow automation solutions.',
    h1: 'Enterprise AI & Automation Solutions',
    summary: 'AI and automation solutions involve embedding Artificial Intelligence models (such as OpenAI GPT-4, Claude, and RAG architectures) into business workflows. Cravora Solutions engineers custom LLM integrations and automated agent pipelines.',
    schema: [
      orgSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI & Automation Solutions',
        serviceType: 'AI & Automation Solutions',
        provider: { '@type': 'LocalBusiness', name: 'Cravora Solutions' },
        url: `${BASE_URL}/services/ai-automation-solutions`
      }
    ]
  },
  {
    path: '/services/mvp-development',
    title: 'MVP Development Services | Launch in 6–8 Weeks | Cravora Solutions',
    description: 'Cravora builds lean, market-ready MVPs for startups and founders in 6–8 weeks. Validate ideas with real users.',
    h1: 'Rapid MVP Development Services for Startups',
    summary: 'MVP (Minimum Viable Product) development is the strategic creation of a core software product designed to validate user demand rapidly. Cravora Solutions delivers production-grade web and mobile MVPs in 6 to 8 weeks.',
    schema: [
      orgSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'MVP Development',
        serviceType: 'MVP Development',
        provider: { '@type': 'LocalBusiness', name: 'Cravora Solutions' },
        url: `${BASE_URL}/services/mvp-development`
      }
    ]
  },
  {
    path: '/portfolio',
    title: 'Client Work & Portfolio | Custom Software | Cravora Solutions',
    description: 'Explore our portfolio of web applications, SaaS platforms, mobile apps, and enterprise solutions built for global clients.',
    h1: 'Cravora Portfolio & Featured Client Engagements',
    summary: 'Deep dives into successful custom software builds including enterprise SaaS platforms, healthcare portals, e-commerce applications, and AI integrations.',
    schema: [orgSchema]
  },
  {
    path: '/case-studies',
    title: 'Software Development Case Studies | Cravora Solutions',
    description: 'Detailed technical case studies showcasing how Cravora Solutions solved complex architecture, scalability, and ROI challenges.',
    h1: 'Software Engineering Case Studies',
    summary: 'Real results from real client projects — including architecture diagrams, performance improvements, timeline breakdowns, and ROI metrics.',
    schema: [orgSchema]
  },
  {
    path: '/blog',
    title: 'Engineering & Product Insights Blog | Cravora Solutions',
    description: 'Articles on SaaS MVP development, React vs Next.js, OpenAI API integrations, Flutter mobile apps, and software architecture.',
    h1: 'Cravora Engineering & Product Insights',
    summary: 'Practical guides written by founders and engineers on building scalable web apps, selecting frameworks, integrating AI, and estimating software costs.',
    schema: [orgSchema]
  },
  {
    path: '/tools/project-cost-estimator',
    title: 'Software Project Cost Estimator | Instant Quotes | Cravora Solutions',
    description: 'Calculate your custom software, web app, mobile app, or SaaS MVP development cost in under 2 minutes with our instant estimator.',
    h1: 'Instant Software Project Cost Estimator',
    summary: 'Interactive pricing calculator to estimate software development cost based on platforms, features, timeline, and AI integration requirements.',
    schema: [orgSchema]
  },
  {
    path: '/contact',
    title: 'Contact Us | Start Your Software Project | Cravora Solutions',
    description: 'Get in touch with Cravora Solutions in Ahmedabad. Book a free 30-minute discovery call to discuss your software project.',
    h1: 'Let\'s Build Your Digital Product Together',
    summary: 'Contact our team directly to discuss your project scope, timeline, and pricing. Email contact@cravorasolutions.com or book a discovery call.',
    schema: [orgSchema]
  },
  {
    path: '/careers',
    title: 'Careers at Cravora Solutions | Software Engineering Jobs',
    description: 'Join our team of passionate software engineers, product designers, and AI specialists in Ahmedabad, Gujarat.',
    h1: 'Build Great Software With Us',
    summary: 'We are always looking for senior full-stack developers, mobile engineers, and UI/UX designers who care deeply about engineering craftsmanship.',
    schema: [orgSchema]
  }
];

function prerender() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf8');

  console.log(`Starting static prerendering for ${routes.length} routes...`);

  routes.forEach((route) => {
    const fullCanonical = `${BASE_URL}${route.path === '/' ? '' : route.path}`;
    
    // Inject Head Metadata
    let html = templateHtml;
    html = html.replace(/<title>.*?<\/title>/gi, `<title>${route.title}</title>`);
    html = html.replace(/<meta name="description" content=".*?"\s*\/?>/gi, `<meta name="description" content="${route.description}" />`);

    // Add Canonical link
    const canonicalTag = `<link rel="canonical" href="${fullCanonical}" />`;
    if (!html.includes('rel="canonical"')) {
      html = html.replace('</head>', `  ${canonicalTag}\n</head>`);
    }

    // Add JSON-LD Schema
    if (route.schema && route.schema.length > 0) {
      const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(route.schema, null, 2)}\n</script>`;
      html = html.replace('</head>', `  ${schemaScript}\n</head>`);
    }

    // Inject Pre-rendered Body Text inside <div id="root">
    const bodyHtml = `
      <div id="root">
        <header style="padding:20px; background:#fff; border-bottom:1px solid #eee;">
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/about/team">Team</a> | <a href="/services/web-application-development">Web App Dev</a> | <a href="/services/mobile-app-development">Mobile App Dev</a> | <a href="/services/saas-development">SaaS Dev</a> | <a href="/services/ai-automation-solutions">AI & Automation</a> | <a href="/services/mvp-development">MVP Dev</a> | <a href="/contact">Contact</a>
          </nav>
        </header>
        <main style="max-width:1100px; margin:0 auto; padding:40px 20px;">
          <h1 style="font-size:2.5rem; font-weight:bold; color:#111; margin-bottom:1rem;">${route.h1}</h1>
          <p style="font-size:1.25rem; color:#4b5563; line-height:1.7; margin-bottom:2rem;">${route.summary}</p>
        </main>
      </div>
    `;

    html = html.replace(/<div id="root"><\/div>/gi, bodyHtml);

    // Save File to Destination
    const targetDir = route.path === '/' ? distDir : path.join(distDir, route.path);
    fs.mkdirSync(targetDir, { recursive: true });

    const targetFilePath = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetFilePath, html, 'utf8');
    console.log(`Prerendered: ${route.path} -> ${targetFilePath}`);
  });

  console.log('Prerendering completed successfully!');
}

prerender();

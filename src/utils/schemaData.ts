export const BASE_URL = 'https://cravorasolutions.com';

export interface FAQItem {
  question: string;
  answer: string;
}

export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    '@id': `${BASE_URL}/#organization`,
    name: 'Cravora Solutions',
    alternateName: 'Cravora',
    url: BASE_URL,
    logo: `${BASE_URL}/brand/cravoraLogo.png`,
    image: `${BASE_URL}/brand/cravoraLogo.png`,
    description: 'Custom software development agency in Ahmedabad building scalable web applications, mobile apps, SaaS MVPs, and AI automation solutions for startups and enterprises worldwide.',
    email: 'contact@cravorasolutions.com',
    priceRange: '$$$',
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
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    sameAs: [
      'https://www.linkedin.com/company/cravora-solutions/',
      'https://twitter.com/cravorasolutions',
    ],
    founder: [
      {
        '@type': 'Person',
        name: 'Darshan Patel',
        jobTitle: 'Co-Founder & CEO',
        sameAs: 'https://www.linkedin.com/in/darshan-patel-392900223/',
      },
      {
        '@type': 'Person',
        name: 'Mohit Rathhod',
        jobTitle: 'Co-Founder & CTO',
        sameAs: 'https://www.linkedin.com/in/mohit-rathod-54a742217/',
      },
      {
        '@type': 'Person',
        name: 'Dev Patel',
        jobTitle: 'Co-Founder & Head of Operations',
        sameAs: 'https://www.linkedin.com/in/dev-patel-b54133221/',
      },
      {
        '@type': 'Person',
        name: 'Ankit Soni',
        jobTitle: 'Sales Head',
        sameAs: 'https://www.linkedin.com/in/ankit-soni-53b088127/',
      },
    ],
    knowsAbout: [
      'Custom Software Development',
      'Web Application Engineering',
      'Mobile App Development',
      'SaaS MVP Builder',
      'AI & Automation Solutions',
      'React & Next.js Architecture',
      'Cloud Architecture & DevOps',
    ],
  };
};

export const getServiceSchema = (name: string, description: string, urlPath: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name: name,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Cravora Solutions',
      url: BASE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
    url: `${BASE_URL}${urlPath}`,
  };
};

export const getFAQSchema = (faqs: FAQItem[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
};

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  thumbnail: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const blogCategories = [
  { id: 'engineering', name: 'Engineering', color: '#853ae8' },
  { id: 'design', name: 'Design', color: '#7B2FF2' },
  { id: 'product-strategy', name: 'Product & Strategy', color: '#A259C6' },
  { id: 'ai-automation', name: 'AI & Automation', color: '#10B981' },
  { id: 'business', name: 'Business & Startups', color: '#38BDF8' },
];

const authors = {
  darshan: {
    name: 'Darshan Patel',
    avatar: '/brand/Darshan-profile.jpeg',
    role: 'Co-Founder & CEO'
  },
  mohit: {
    name: 'Mohit Rathhod',
    avatar: '/brand/mohit-profile.jpg',
    role: 'Co-Founder & CTO'
  },
  dev: {
    name: 'Dev Patel',
    avatar: '/brand/Dev-profile.jpg',
    role: 'Co-Founder & Head of Operations'
  }
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Build a SaaS MVP in 8 Weeks: A Step-by-Step Process',
    slug: 'build-saas-mvp-in-8-weeks',
    excerpt: 'A practical, opinionated guide to scoping, designing, and engineering a SaaS MVP from zero to launch. Covers feature prioritisation and tech stack selection.',
    content: `
      <p class="mb-4 text-lg">A practical, opinionated guide to scoping, designing, and engineering a SaaS MVP from zero to launch.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">Phase 1: Ruthless Prioritisation</h2>
      <p class="mb-4">The biggest mistake founders make is trying to build too much. We use the MoSCoW method to identify the "Must-Haves" that actually test your business hypothesis.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">Phase 2: Choosing a Scalable Foundation</h2>
      <p class="mb-4">For most SaaS MVPs, we recommend Next.js and PostgreSQL. It allows for rapid prototyping without creating the technical debt that would require a rebuild in 6 months.</p>
    `,
    author: authors.darshan,
    publishedAt: '2025-05-01T10:00:00Z',
    updatedAt: '2025-05-01T10:00:00Z',
    readTime: 6,
    category: 'product-strategy',
    tags: ['SaaS', 'MVP', 'Startups'],
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    seo: {
      metaTitle: 'How to Build a SaaS MVP in 8 Weeks | Cravora Solutions',
      metaDescription: 'A step-by-step guide to launching your SaaS product fast.',
      keywords: ['SaaS MVP', 'MVP development', 'startup strategy']
    }
  },
  {
    id: '2',
    title: 'React vs Next.js in 2025: Which Should You Build Your Web App With?',
    slug: 'react-vs-nextjs-2025',
    excerpt: 'A clear, practical comparison of React and Next.js for web application development — covering SSR vs CSR, SEO implications, and performance.',
    content: `
      <p class="mb-4 text-lg">In 2025, the choice between React and Next.js is more significant than ever for product performance and SEO.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">When to Choose Next.js</h2>
      <p class="mb-4">If SEO is a priority or if you want the best possible initial load performance via Server-Side Rendering (SSR), Next.js is the clear winner.</p>
    `,
    author: authors.mohit,
    publishedAt: '2025-04-15T10:00:00Z',
    updatedAt: '2025-04-15T10:00:00Z',
    readTime: 5,
    category: 'engineering',
    tags: ['React', 'Next.js', 'Web Development'],
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    seo: {
      metaTitle: 'React vs Next.js in 2025: Which to Choose? | Cravora',
      metaDescription: 'Comparison of React and Next.js for modern web applications.',
      keywords: ['React vs Next.js', 'Next.js 2025', 'web app development']
    }
  },
  {
    id: '3',
    title: 'How to Integrate OpenAI Into Your SaaS Product: A Developer\'s Guide',
    slug: 'integrate-openai-saas-guide',
    excerpt: 'A hands-on guide to integrating OpenAI\'s GPT-4 API into a web application — covering prompt engineering, cost management, and RAG.',
    content: `<p>A hands-on guide to integrating OpenAI\'s GPT-4 API into a web application.</p>`,
    author: authors.mohit,
    publishedAt: '2025-04-10T10:00:00Z',
    updatedAt: '2025-04-10T10:00:00Z',
    readTime: 8,
    category: 'ai-automation',
    tags: ['AI', 'OpenAI', 'SaaS'],
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    seo: {
      metaTitle: 'OpenAI API Integration Guide for SaaS | Cravora',
      metaDescription: 'How to add AI features to your SaaS product reliably.',
      keywords: ['OpenAI API', 'SaaS AI', 'AI integration']
    }
  },
  {
    id: '4',
    title: 'The Real Cost of Building a Mobile App in 2025',
    slug: 'cost-of-building-mobile-app-2025',
    excerpt: 'An honest, detailed breakdown of what mobile app development actually costs — covering factors that drive price and how to evaluate quotes.',
    content: `<p>An honest breakdown of mobile app development costs in 2025.</p>`,
    author: authors.dev,
    publishedAt: '2025-03-20T10:00:00Z',
    updatedAt: '2025-03-20T10:00:00Z',
    readTime: 7,
    category: 'business',
    tags: ['Mobile Development', 'Pricing', 'Business'],
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
    seo: {
      metaTitle: 'Mobile App Development Cost Breakdown 2025 | Cravora',
      metaDescription: 'What does it really cost to build an app today?',
      keywords: ['app development cost', 'mobile app pricing']
    }
  },
  {
    id: '5',
    title: 'Flutter vs React Native in 2025: A Technical Comparison',
    slug: 'flutter-vs-react-native-2025-comparison',
    excerpt: 'A side-by-side comparison of Flutter and React Native — covering performance, ecosystem, and which is better for different product types.',
    content: `<p>Technical comparison of the two leading mobile frameworks.</p>`,
    author: authors.mohit,
    publishedAt: '2025-03-01T10:00:00Z',
    updatedAt: '2025-03-01T10:00:00Z',
    readTime: 6,
    category: 'engineering',
    tags: ['Flutter', 'React Native', 'Mobile Development'],
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop',
    seo: {
      metaTitle: 'Flutter vs React Native 2025: Side-by-Side | Cravora',
      metaDescription: 'Which mobile framework should you choose in 2025?',
      keywords: ['Flutter vs React Native', 'mobile development frameworks']
    }
  }
];

export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);
export const getPostsByCategory = (category: string) => blogPosts.filter(post => post.category === category);
export const getPostBySlug = (slug: string) => blogPosts.find(post => post.slug === slug);
export const getRecentPosts = (limit: number = 6) => blogPosts.slice(0, limit);
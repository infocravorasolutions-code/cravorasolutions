import React from 'react';
import { DetailedServiceTemplate } from '../../components/ui/DetailedServiceTemplate';

export const AiAutomation: React.FC = () => {
  return (
    <DetailedServiceTemplate
      seoTitle="AI & Automation Solutions | Custom AI Development | Cravora Solutions"
      seoDescription="Cravora builds custom AI integrations, LLM-powered tools, intelligent chatbots, and workflow automation solutions that make your product and operations smarter."
      heroSubtitle="AI & Automation"
      heroTitle="AI & Automation That Solves Real Business Problems"
      heroDescription="We go beyond the AI hype to build practical, production-ready artificial intelligence solutions — from intelligent chatbots and document processing to full workflow automation — that deliver measurable ROI."
      problemTitle="The Gap Between AI Potential and AI Reality"
      problemContent={
        <>
          <p className="mb-4">Artificial intelligence has gone from buzzword to business imperative in the span of two years. But for most organisations, actually harnessing AI to create business value remains frustratingly out of reach.</p>
          <p>Off-the-shelf AI tools do not fit your specific workflows or data. Generic chatbots give your customers inaccurate, unhelpful responses that erode trust. And the cost of experimenting with AI in-house adds up fast.</p>
        </>
      }
      solutionTitle="Custom AI Solutions Built for Your Business Context"
      solutionContent={
        <>
          <p className="mb-4">Cravora's AI practice is built on the principle that the best AI solution is the one that fits your specific data, your specific workflows, and your specific users — not a generic model pointed at a generic prompt.</p>
          <p>We work with the leading AI APIs and frameworks — OpenAI, Anthropic, Gemini, and open-source models — to build custom AI integrations that are grounded in your business data and aligned with your brand voice.</p>
        </>
      }
      buildSectionTitle="What We Deliver"
      buildItems={[
        'Custom AI chatbots and virtual assistants trained on your data',
        'RAG (Retrieval-Augmented Generation) systems for document Q&A',
        'LLM-powered content generation and summarisation tools',
        'AI-driven data extraction and document processing pipelines',
        'Intelligent search and recommendation engines',
        'Workflow automation with n8n, Zapier, or custom pipelines',
        'AI integration into existing web and mobile products',
        'Predictive analytics and machine learning model deployment',
        'Voice AI and speech-to-text applications',
        'Custom GPT and AI agent development'
      ]}
      techStack={[
        { category: 'AI Models', items: 'GPT-4o, Claude 3.5, Gemini 1.5, Llama 3' },
        { category: 'Frameworks', items: 'LangChain, LlamaIndex, Hugging Face' },
        { category: 'Vector DB', items: 'Pinecone, Weaviate, pgvector, Qdrant' },
        { category: 'Automation', items: 'n8n, Make, custom Python pipelines' },
        { category: 'Deployment', items: 'AWS SageMaker, Vertex AI, Docker, FastAPI' }
      ]}
      faqs={[
        {
          question: 'How do you ensure AI accuracy (no hallucinations)?',
          answer: 'We use RAG (Retrieval-Augmented Generation), which forces the AI to only answer questions based on your provided documents and data sources, rather than its general training.'
        },
        {
          question: 'Is my data secure when using AI APIs?',
          answer: 'Yes. We use enterprise-grade API connections where your data is not used for training the base models, ensuring your proprietary information remains private.'
        }
      ]}
      ctaText="Explore AI Solutions →"
    />
  );
};

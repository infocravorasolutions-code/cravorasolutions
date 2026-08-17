import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  name?: string;
  canonical?: string;
  image?: string;
  schema?: object | object[];
}

export function SEO({
  title,
  description,
  type = 'website',
  name = 'Cravora Solutions',
  canonical,
  image = 'https://cravorasolutions.com/brand/cravoraLogo.png',
  schema,
}: SEOProps) {
  const fullTitle = title.includes('Cravora') ? title : `${title} | ${name}`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : undefined);

  const schemasToRender = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* OpenGraph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={image} />

      {/* Twitter Tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {schemasToRender.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

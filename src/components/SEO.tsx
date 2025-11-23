import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteData } from '@/data/site-data';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  type = 'website',
}) => {
  const fullTitle = title
    ? `${title} | ${siteData.meta.title}`
    : siteData.meta.title;
  const metaDescription = description || siteData.meta.description;
  const metaImage = image || `${siteData.meta.url}${siteData.meta.image}`;
  const url = siteData.meta.url;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={siteData.meta.keywords.join(', ')} />
      <meta name="author" content={siteData.meta.author} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />
    </Helmet>
  );
};


import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  articleData?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Arizona Attorney Derron D. Woodfork | Gun Rights Restoration & Criminal Record Expungement",
  description = "Expert Arizona attorney specializing in gun rights restoration, criminal record expungement, and legal representation. 13+ years of proven results. Free consultation. Call (602) 284-3035.",
  keywords = "Arizona attorney, gun rights restoration, criminal record expungement, Derron Woodfork, Arizona lawyer, Second Amendment rights, criminal defense, legal services Arizona",
  canonical = "https://woodforklawfirm.com/",
  ogImage = "https://woodforklawfirm.com/og-image.jpg",
  ogType = "website",
  articleData
}) => {
  const siteUrl = "https://woodforklawfirm.com";
  const fullCanonical = canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Woodfork Law Firm" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Article-specific meta tags */}
      {articleData && ogType === 'article' && (
        <>
          <meta property="article:author" content={articleData.author || "Derron D. Woodfork"} />
          <meta property="article:section" content={articleData.section || "Legal"} />
          {articleData.publishedTime && (
            <meta property="article:published_time" content={articleData.publishedTime} />
          )}
          {articleData.modifiedTime && (
            <meta property="article:modified_time" content={articleData.modifiedTime} />
          )}
          {articleData.tags && articleData.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Additional SEO enhancements */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
    </Helmet>
  );
};

export default SEOHead;
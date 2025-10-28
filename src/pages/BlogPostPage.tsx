import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import SEOHead from '../components/SEOHead';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const seoData = {
    title: `${post.title} | Woodfork Law Arizona`,
    description: post.excerpt,
    keywords: `${post.title}, Arizona legal advice, ${post.category}, legal guidance, attorney insights`,
    canonical: `/blog/${post.slug}`,
    ogType: 'article' as const,
    articleData: {
      publishedTime: new Date(post.date).toISOString(),
      author: 'Derron D. Woodfork',
      section: post.category,
      tags: [post.category, 'Arizona Law', 'Legal Advice']
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Convert markdown-like content to HTML-like JSX
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];

    lines.forEach((line, index) => {
      if (line.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-6 text-lg leading-relaxed text-secondary-700">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h2 key={`h2-${index}`} className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('- ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-6 text-lg leading-relaxed text-secondary-700">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <li key={`li-${index}`} className="mb-2 text-lg text-secondary-700">
            {line.replace('- ', '')}
          </li>
        );
      } else if (line.match(/^\d+\./)) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-6 text-lg leading-relaxed text-secondary-700">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <li key={`oli-${index}`} className="mb-2 text-lg text-secondary-700">
            {line.replace(/^\d+\.\s*/, '')}
          </li>
        );
      } else if (line.trim() === '') {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-6 text-lg leading-relaxed text-secondary-700">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
      } else if (line.trim() !== '') {
        currentParagraph.push(line.trim());
      }
    });

    if (currentParagraph.length > 0) {
      elements.push(
        <p key="final-p" className="mb-6 text-lg leading-relaxed text-secondary-700">
          {currentParagraph.join(' ')}
        </p>
      );
    }

    return elements;
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      <SEOHead {...seoData} />
      {/* Breadcrumb */}
      <nav className="bg-secondary-50 py-4">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-primary-600 hover:text-primary-700">
              Home
            </Link>
            <span className="text-secondary-400">/</span>
            <Link to="/blog" className="text-primary-600 hover:text-primary-700">
              Blog
            </Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-600">{post.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <header className="bg-white py-12 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <time className="text-secondary-500">
                {formatDate(post.date)}
              </time>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-secondary-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-12 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>
        </div>
      </article>

      {/* Call to Action */}
      <section className="py-12 bg-primary-50 border-t border-primary-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">
              Need Legal Assistance?
            </h2>
            <p className="text-lg text-secondary-600 mb-6">
              If you have questions about this topic or need legal representation, 
              we're here to help with a free consultation.
            </p>
            <Link
              to="/contact"
              className="btn-primary"
            >
              Schedule Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-secondary-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-primary-100 text-primary-700 text-sm font-medium px-2 py-1 rounded">
                        {relatedPost.category}
                      </span>
                      <time className="text-secondary-500 text-sm">
                        {formatDate(relatedPost.date)}
                      </time>
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary-900 mb-3">
                      <Link 
                        to={`/blog/${relatedPost.slug}`}
                        className="hover:text-primary-600 transition-colors duration-200"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    
                    <p className="text-secondary-600 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read More
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;
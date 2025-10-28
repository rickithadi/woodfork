import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEOHead from '../components/SEOHead';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Legal Blog | Arizona Gun Rights, Expungement & Legal Articles | Woodfork Law"
        description="Expert legal insights and articles on gun rights restoration, criminal record expungement, and Arizona legal matters from Attorney Derron D. Woodfork."
        keywords="Arizona legal blog, gun rights articles, expungement guide, legal advice Arizona, criminal law blog, Second Amendment rights"
        canonical="/blog"
      />
      {/* Hero Section */}
      <section 
        className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{
          backgroundImage: `url('/hero.jpg')`
        }}
      >
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-white bg-opacity-25 text-white text-sm font-semibold backdrop-blur-md border border-white border-opacity-40 shadow-lg">
                <BookOpen className="w-4 h-4 mr-2 drop-shadow-sm" />
                <span className="drop-shadow-md">Legal Knowledge Center</span>
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl text-white">
              Legal Resources
              <span className="block text-accent-200 drop-shadow-2xl">& Insights</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-xl">
              Expert guidance and practical information on Arizona legal matters including 
              gun rights restoration, criminal record expungement, and car accident claims
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 lg:py-32 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <time className="text-secondary-500 text-sm">
                      {formatDate(post.date)}
                    </time>
                  </div>
                  
                  <h2 className="text-xl font-bold text-secondary-900 mb-4 leading-tight">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary-600 transition-colors duration-200"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-secondary-600 text-lg">
                No posts found in the "{selectedCategory}" category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest legal insights and updates from Woodfork Law.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
            />
            <button className="bg-white text-primary-700 hover:bg-primary-50 font-bold px-6 py-3 rounded-lg transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
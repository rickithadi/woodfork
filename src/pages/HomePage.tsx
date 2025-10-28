import { Award, Car, Clock, FileText, Fingerprint, MapPin, Phone, Shield } from 'lucide-react';
import React, { useState } from 'react';

import CriminalRecordCTA from '../components/CriminalRecordCTA';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [isCTAOpen, setIsCTAOpen] = useState(false);

  const recentPosts = [
    {
      title: 'How Much Does it Cost to Restore Gun Rights in Arizona',
      date: 'April 21, 2025',
      excerpt: 'The cost to restore your firearm rights in Arizona typically ranges from $1,200 to $2,500, depending on several factors.',
      slug: 'cost-restore-gun-rights-arizona'
    },
    {
      title: 'How Hard is it to Get Gun Rights Restored in Arizona?',
      date: 'March 3, 2025',
      excerpt: 'Understanding the difficulty and process of gun rights restoration in Arizona.',
      slug: 'how-hard-get-gun-rights-restored-arizona'
    },
    {
      title: 'How to Get Your Car Repaired after an Accident in Arizona',
      date: 'December 28, 2024',
      excerpt: 'Essential steps to get your vehicle repaired after a car accident in Arizona.',
      slug: 'car-repaired-after-accident-arizona'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Arizona Attorney Derron D. Woodfork | Gun Rights Restoration & Criminal Record Expungement"
        description="Expert Arizona attorney specializing in gun rights restoration, criminal record expungement, and legal representation. 13+ years of proven results. Free consultation. Call (602) 284-3035."
        keywords="Arizona attorney, gun rights restoration, criminal record expungement, Derron Woodfork, Arizona lawyer, Second Amendment rights, criminal defense, legal services Arizona"
        canonical="/"
      />
      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
                           url('/hero.jpg')`
        }}
      >
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-white bg-opacity-25 text-white text-sm font-semibold backdrop-blur-md border border-white border-opacity-40 shadow-lg">
                <Award className="w-4 h-4 mr-2 drop-shadow-sm" />
                <span className="drop-shadow-md">Pioneer in Remote Legal Services Since 2011</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-2xl">
              Restore Your Rights.
              <br className="hidden sm:block" />
              <span className="text-accent-200 drop-shadow-2xl">Reclaim Your Future.</span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-xl lg:text-2xl mb-12 text-white max-w-3xl mx-auto leading-relaxed drop-shadow-xl">
              Expert Arizona attorney specializing in gun rights restoration, criminal record expungement,
              and legal representation. <strong className="text-accent-200">13+ years of proven results.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/contact" className="btn-primary text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                Get Your Free Consultation
              </Link>
              <a href="tel:602-284-3035" className="btn-phone text-lg flex items-center shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (602) 284-3035
              </a>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg py-4 px-6 border border-white border-opacity-30 shadow-lg">
                <Award className="w-5 h-5 text-accent-200 mr-2 drop-shadow-sm" />
                <span className="text-white font-semibold drop-shadow-md">Licensed in Arizona</span>
              </div>
              <div className="flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg py-4 px-6 border border-white border-opacity-30 shadow-lg">
                <Clock className="w-5 h-5 text-accent-200 mr-2 drop-shadow-sm" />
                <span className="text-white font-semibold drop-shadow-md">13+ Years Experience</span>
              </div>
              <div className="flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg py-4 px-6 border border-white border-opacity-30 shadow-lg">
                <MapPin className="w-5 h-5 text-accent-200 mr-2 drop-shadow-sm" />
                <span className="text-white font-semibold drop-shadow-md">Statewide Remote Services</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="max-w-4xl mx-auto mb-16 bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-primary-900 text-center">
              Practice Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100">
                <div className="flex items-center mb-3">
                  <Shield className="w-6 h-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-primary-900">
                    Gun Rights Restoration
                  </h3>
                </div>
                <p className="text-primary-700 mb-4">
                  Restore your Second Amendment rights through proper legal procedures and documentation.
                </p>
                <Link
                  to="/blog/cost-restore-gun-rights-arizona"
                  className="text-primary-600 hover:text-primary-800 underline font-medium"
                >
                  Learn about costs and process →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100">
                <div className="flex items-center mb-3">
                  <Car className="w-6 h-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-primary-900">
                    Car Accident Information
                  </h3>
                </div>
                <p className="text-primary-700 mb-4">
                  Get guidance on car accident claims and vehicle repair processes in Arizona.
                </p>
                <Link
                  to="/blog/car-repaired-after-accident-arizona"
                  className="text-primary-600 hover:text-primary-800 underline font-medium"
                >
                  Read about car repairs →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100">
                <div className="flex items-center mb-3">
                  <FileText className="w-6 h-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-primary-900">
                    Criminal Record Expungement
                  </h3>
                </div>
                <p className="text-primary-700 mb-4">
                  Clear your criminal record and move forward with a clean slate.
                </p>
                <button
                  onClick={() => setIsCTAOpen(true)}
                  className="text-primary-600 hover:text-primary-800 underline font-medium"
                >
                  Check if you qualify →
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100">
                <div className="flex items-center mb-3">
                  <Fingerprint className="w-6 h-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-primary-900">
                    Arizona Expungement Law
                  </h3>
                </div>
                <p className="text-primary-700 mb-4">
                  Navigate Arizona's expungement laws and procedures with expert guidance.
                </p>
                <Link
                  to="/services"
                  className="text-primary-600 hover:text-primary-800 underline font-medium"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <h2 className="text-2xl lg:text-3xl font-normal mb-8 text-primary-900 text-center">
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {recentPosts.map((post, index) => (
              <article key={index} className="bg-white p-6 rounded shadow-sm">
                <h3 className="text-lg font-normal mb-3 text-primary-900">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-primary-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-primary-600 mb-3">{post.date}</p>
                <p className="text-primary-700 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-primary-600 hover:text-primary-800 underline text-sm"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Attorney */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="hero-badge">
                  <Award className="w-4 h-4 mr-2" />
                  Licensed Attorney, State of Arizona
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-secondary-900">
                Meet Attorney Derron D. Woodfork
              </h2>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                With over a decade of dedicated legal practice, Attorney Derron D. Woodfork has been
                pioneering remote legal services across Arizona since 2011. His specialized expertise
                in gun rights restoration, criminal record expungement, and personal injury claims
                has helped hundreds of clients reclaim their rights and move forward with confidence.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center lg:justify-start">
                  <Award className="w-5 h-5 text-accent-600 mr-3" />
                  <span className="text-secondary-700 font-medium">Arizona State Bar Licensed</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <Clock className="w-5 h-5 text-accent-600 mr-3" />
                  <span className="text-secondary-700 font-medium">13+ Years of Remote Legal Services</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <Shield className="w-5 h-5 text-accent-600 mr-3" />
                  <span className="text-secondary-700 font-medium">Specialized in Rights Restoration</span>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <Link to="/contact" className="btn-primary mr-4 mb-4 inline-block">
                  Schedule Free Consultation
                </Link>
                <Link to="/about" className="btn-secondary inline-block">
                  Learn More About Our Firm
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="w-40 h-40 mx-auto mb-6 relative">
                  <img
                    src="/profile-photo.jpg"
                    alt="Attorney Derron D. Woodfork"
                    className="w-full h-full object-cover rounded-full border-4 border-primary-200 shadow-md"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  Derron D. Woodfork
                </h3>
                <p className="text-accent-600 font-semibold mb-4">
                  Attorney at Law
                </p>
                <div className="text-center space-y-2 text-secondary-600">
                  <p className="text-sm">✓ Free initial consultations</p>
                  <p className="text-sm">✓ Remote services statewide</p>
                  <p className="text-sm">✓ Proven track record of success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Criminal Record CTA Modal */}
      <CriminalRecordCTA
        isOpen={isCTAOpen}
        onClose={() => setIsCTAOpen(false)}
      />
    </div>
  );
};

export default HomePage;

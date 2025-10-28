import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Car, FileText, Fingerprint, Monitor, Zap, Target } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Gun Rights Restoration',
      description: 'Restore your Second Amendment rights through proper legal procedures. We help navigate the complex process of restoring gun rights after criminal convictions or mental health adjudications.',
      icon: Shield,
      features: [
        'Eligibility assessment and consultation',
        'Complete application preparation and filing',
        'Court representation and advocacy',
        'Follow-up and compliance assistance'
      ],
      process: [
        'Initial consultation to review your case',
        'Gather necessary documentation and records',
        'Prepare and file restoration petition',
        'Represent you in court proceedings'
      ]
    },
    {
      title: 'Car Accident Claims',
      description: 'Get the compensation you deserve after a motor vehicle accident. Our experienced representation helps you navigate insurance claims and legal proceedings.',
      icon: Car,
      features: [
        'Insurance claim assistance and negotiation',
        'Medical records and documentation review',
        'Settlement negotiation and advocacy',
        'Court representation if litigation is necessary'
      ],
      process: [
        'Free consultation to evaluate your case',
        'Investigate the accident and gather evidence',
        'Handle all communication with insurance companies',
        'Negotiate settlement or proceed to trial'
      ]
    },
    {
      title: 'Criminal Record Expungement',
      description: 'Clear your criminal record and move forward with a clean slate. We help eligible individuals expunge or seal their criminal records for better employment and housing opportunities.',
      icon: FileText,
      features: [
        'Eligibility determination and case review',
        'Complete expungement petition preparation',
        'Court filing and representation services',
        'Post-expungement compliance and guidance'
      ],
      process: [
        'Review your criminal history and eligibility',
        'Prepare all necessary legal documents',
        'File petition with appropriate court',
        'Represent you at expungement hearing'
      ]
    },
    {
      title: 'Fingerprint Clearance',
      description: 'Navigate the fingerprint clearance process for employment, licensing, and other requirements. We assist with appeals and compliance issues.',
      icon: Fingerprint,
      features: [
        'Clearance application assistance',
        'Appeals for denied applications',
        'Compliance and renewal guidance',
        'Employer and licensing board communication'
      ],
      process: [
        'Assess your clearance needs and requirements',
        'Assist with application completion',
        'Handle appeals if clearance is denied',
        'Provide ongoing compliance support'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
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
                <Shield className="w-4 h-4 mr-2 drop-shadow-sm" />
                <span className="drop-shadow-md">Specialized Legal Representation</span>
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl text-white">
              Legal Services that
              <span className="block text-accent-200 drop-shadow-2xl">Restore Your Rights</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-xl">
              Offering remote legal services since 2011. Expert representation in gun rights restoration, 
              criminal record expungement, car accident claims, and fingerprint clearance across Arizona
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Comprehensive Legal Solutions
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We focus on specific areas of law to provide you with expert representation 
              and the best possible outcomes for your case.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <IconComponent className="w-12 h-12 text-primary-600 mb-6" />
                  <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                    {service.title}
                  </h3>
                  <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="btn-primary inline-block"
                  >
                    Get Started Today
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-secondary-50 rounded-lg p-8">
                    <h4 className="text-xl font-bold text-secondary-900 mb-6">
                      What We Provide:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-secondary-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="text-xl font-bold text-secondary-900 mb-4">
                      Our Process:
                    </h4>
                    <ol className="space-y-3">
                      {service.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <span className="bg-primary-600 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            {stepIndex + 1}
                          </span>
                          <span className="text-secondary-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Woodfork Law
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Experience the difference of working with a specialized legal practice focused on results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm text-center">
              <Monitor className="w-12 h-12 text-primary-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Remote Legal Services Since 2011
              </h3>
              <p className="text-secondary-600">
                Handle your legal matters from anywhere in Arizona with our proven remote service model, 
                pioneered since 2011.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm text-center">
              <Zap className="w-12 h-12 text-primary-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Efficient Process
              </h3>
              <p className="text-secondary-600">
                Streamlined procedures and clear communication keep your case moving forward effectively.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm text-center">
              <Target className="w-12 h-12 text-primary-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Focused Expertise
              </h3>
              <p className="text-secondary-600">
                Specialized knowledge in our practice areas means better outcomes for your case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and learn how we can help with your legal needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-700 hover:bg-primary-50 font-bold px-8 py-4 rounded-lg transition-colors duration-200 text-lg inline-block"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
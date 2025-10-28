import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Target, Scale, Building, Monitor, GraduationCap, Calendar } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="About Attorney Derron D. Woodfork | Arizona Legal Services Since 2011"
        description="Learn about Attorney Derron D. Woodfork, Arizona's pioneer in remote legal services since 2011. Specializing in gun rights restoration, criminal record expungement, and legal representation."
        keywords="Derron Woodfork attorney, Arizona lawyer biography, remote legal services, gun rights attorney Arizona, criminal record expungement lawyer"
        canonical="/about"
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
                <GraduationCap className="w-4 h-4 mr-2 drop-shadow-sm" />
                <span className="drop-shadow-md">Licensed Attorney, State of Arizona</span>
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl text-white">
              About
              <span className="block text-accent-200 drop-shadow-2xl">Woodfork Law</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-xl">
              Offering remote legal services across Arizona since 2011, pioneering accessible legal representation 
              with a proven track record of helping clients restore their rights and reclaim their futures
            </p>
          </div>
        </div>
      </section>

      {/* Attorney Profile Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                Meet Attorney Derron D. Woodfork
              </h2>
              <div className="space-y-6 text-lg text-secondary-600 leading-relaxed">
                <p>
                  Attorney Derron D. Woodfork has been providing specialized legal services 
                  to clients across Arizona since 2011. With a focus on remote legal services, 
                  he has helped hundreds of clients navigate complex legal matters from the 
                  comfort of their own homes.
                </p>
                <p>
                  Specializing in gun rights restoration, criminal record expungement, 
                  car accident claims, and fingerprint clearance processes, Attorney Woodfork 
                  brings a unique combination of technical expertise and personalized service 
                  to each case.
                </p>
                <p>
                  His commitment to providing accessible legal services has made him a trusted 
                  advocate for clients throughout Arizona, offering convenient consultation 
                  options and streamlined legal processes.
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="bg-secondary-100 rounded-lg p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 relative">
                  <img
                    src="/profile-photo.jpg"
                    alt="Attorney Derron D. Woodfork"
                    className="w-full h-full object-cover rounded-full border-4 border-primary-200 shadow-lg"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  Derron D. Woodfork
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  Licensed Attorney, State of Arizona
                </p>
                <div className="space-y-2 text-secondary-600">
                  <div className="flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2 text-primary-600" />
                    <span>Legal Education & Bar Admission</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                    <span>Practicing Since 2011</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2 text-primary-600" />
                    <span>Arizona State Bar Licensed</span>
                  </div>
                  <div className="flex items-center">
                    <Monitor className="w-4 h-4 mr-2 text-primary-600" />
                    <span>Remote Services Pioneer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 lg:py-32 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Our Firm
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Over a decade of experience providing innovative legal solutions with a track record of success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <Rocket className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Pioneer in Remote Legal Services
              </h3>
              <p className="text-secondary-600">
                Offering remote legal services since 2011, one of the first attorneys in Arizona to provide 
                comprehensive remote legal representation, making quality legal services accessible statewide.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <Target className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Specialized Expertise
              </h3>
              <p className="text-secondary-600">
                Focused practice areas allow for deep expertise in gun rights restoration, 
                expungement, personal injury, and regulatory compliance matters.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <Scale className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Proven Track Record
              </h3>
              <p className="text-secondary-600">
                Hundreds of successful cases with satisfied clients across Arizona. 
                Committed to achieving the best possible outcomes for every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Philosophy Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-8">
              Our Practice Philosophy
            </h2>
            <div className="space-y-6 text-lg text-secondary-600 leading-relaxed">
              <p>
                At Woodfork Law, we believe that quality legal representation should be accessible, 
                convenient, and tailored to each client's unique circumstances. Our remote service 
                model eliminates geographical barriers while maintaining the personal attention 
                and expertise you deserve.
              </p>
              <p>
                We focus on clear communication, transparent processes, and achieving practical 
                solutions that help our clients move forward with confidence. Every case receives 
                individualized attention, and we work diligently to understand your goals and 
                develop strategies to achieve them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your legal needs and learn how we can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-700 hover:bg-primary-50 font-bold px-8 py-4 rounded-lg transition-colors duration-200 text-lg inline-block"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
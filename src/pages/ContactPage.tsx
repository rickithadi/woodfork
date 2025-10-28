import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const ContactPage: React.FC = () => {
  const seoData = {
    title: "Contact Attorney Derron D. Woodfork | Free Consultation | Arizona Legal Services",
    description: "Contact Arizona Attorney Derron D. Woodfork for a free consultation. Call (602) 284-3035 or schedule online. Remote legal services available statewide for gun rights restoration and expungement.",
    keywords: "contact Arizona attorney, free legal consultation Arizona, Derron Woodfork contact, Arizona lawyer phone number, legal services consultation",
    canonical: "/contact"
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Gun Rights Restoration',
    'Car Accident Claims',
    'Criminal Record Expungement',
    'Fingerprint Clearance',
    'General Legal Consultation'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual form handling)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead {...seoData} />
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
                <Phone className="w-4 h-4 mr-2 drop-shadow-sm" />
                <span className="drop-shadow-md">Free Initial Consultation</span>
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl text-white">
              Contact
              <span className="block text-accent-200 drop-shadow-2xl">Woodfork Law</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-xl">
              Ready to restore your rights and reclaim your future? Let's discuss your legal needs 
              with a free consultation. Remote services available statewide.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Get Your Free Consultation
              </h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                  Thank you for your message. We'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                  There was an error sending your message. Please try again or call us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Please describe your legal needs and any relevant details..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-sm text-secondary-600 text-center">
                  * Required fields. All communications are confidential and protected by attorney-client privilege.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="bg-secondary-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">
                    Woodfork Law
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-primary-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-secondary-900">Phone Consultation</p>
                        <p className="text-secondary-600">Available by appointment</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-primary-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-secondary-900">Email</p>
                        <p className="text-secondary-600">Contact via secure form</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-secondary-900">Service Area</p>
                        <p className="text-secondary-600">Arizona (Remote Services)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-primary-600 mr-3" />
                    <h3 className="text-xl font-bold text-primary-700">
                      Response Times
                    </h3>
                  </div>
                  <div className="space-y-3 text-secondary-700">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-primary-600 mr-3" />
                      <span>Email inquiries: Within 24 hours</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-primary-600 mr-3" />
                      <span>Phone consultations: Same day scheduling available</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 text-primary-600 mr-3" />
                      <span>Urgent matters: Please indicate in your message</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-primary-600 mr-3" />
                      <span>Business hours: Monday - Friday, 9 AM - 5 PM MST</span>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary-100 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">
                    What to Expect
                  </h3>
                  <div className="space-y-3 text-secondary-700">
                    <p>✅ Free initial consultation</p>
                    <p>✅ Clear explanation of your legal options</p>
                    <p>✅ Transparent pricing and process</p>
                    <p>✅ Prompt and professional communication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
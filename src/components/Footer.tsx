import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-50 border-t border-primary-100">
      <div className="container-custom py-8">
        <div className="text-center">
          <div className="text-xl font-normal text-primary-900 mb-4">
            Woodfork Law
          </div>
          <p className="text-primary-600 mb-4">
            Offering Remote Legal Services Since 2011
          </p>
          <div className="text-lg text-primary-700 mb-6">
            Call: 602-284-3035
          </div>
          
          {/* Simple Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <Link to="/" className="text-primary-600 hover:text-primary-900">Home</Link>
            <Link to="/services" className="text-primary-600 hover:text-primary-900">Gun Rights Restoration</Link>
            <Link to="/blog" className="text-primary-600 hover:text-primary-900">Car Accident Information</Link>
            <Link to="/services" className="text-primary-600 hover:text-primary-900">Arizona Expungement Law</Link>
            <Link to="/blog" className="text-primary-600 hover:text-primary-900">Frequently Asked Questions</Link>
          </div>

          {/* Copyright */}
          <div className="border-t border-primary-200 pt-6">
            <p className="text-primary-600 text-sm mb-2">
              © {currentYear} Woodfork Law. Attorney Derron D. Woodfork.
            </p>
            <p className="text-primary-500 text-xs">
              Licensed to practice law in Arizona. Remote legal services available.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
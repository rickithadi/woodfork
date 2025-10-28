import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, X, Scale, Award } from 'lucide-react';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-sm border-b border-primary-100 sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-700 rounded-lg shadow-md group-hover:bg-primary-800 transition-colors duration-200">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="text-2xl lg:text-3xl font-bold text-primary-900 leading-tight">
                  Woodfork Law
                </div>
                <div className="hidden sm:flex items-center text-xs text-primary-600 font-medium">
                  <Award className="w-3 h-3 mr-1" />
                  Since 2011
                </div>
              </div>
            </div>
          </Link>



          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 font-medium text-base transition-all duration-200 ${
                  isActiveLink(item.href)
                    ? 'text-primary-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-700 after:rounded-full'
                    : 'text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-md'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Call Now Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:602-284-3035"
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center transform hover:scale-105"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden lg:inline">Call Now: </span>
              <span className="font-bold">(602) 284-3035</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-lg transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-primary-100 bg-white shadow-lg">
            <div className="py-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-6 py-3 font-medium text-base transition-all duration-200 ${isActiveLink(item.href)
                      ? 'text-primary-900 bg-primary-50 border-r-4 border-primary-700'
                      : 'text-primary-600 hover:text-primary-900 hover:bg-primary-50'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-6 pt-4 border-t border-primary-100 mt-4">
                <a
                  href="tel:602-284-3035"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-6 py-4 rounded-lg shadow-md transition-all duration-200 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>Call Now: (602) 284-3035</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

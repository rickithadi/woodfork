import React, { useState } from 'react';
import { X, FileText } from 'lucide-react';

interface CriminalRecordCTAProps {
  isOpen: boolean;
  onClose: () => void;
}

const CriminalRecordCTA: React.FC<CriminalRecordCTAProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - redirect to contact page or services
    window.location.href = '/contact';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center mb-6">
            <FileText className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-secondary-900 mb-2">
              Old Criminal Record in Arizona?
            </h2>
            <p className="text-secondary-600">
              Find out if you qualify for expungement and clear your record
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Enter your first name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200"
            >
              Click Here - Free Consultation
            </button>
          </form>

          <p className="text-xs text-secondary-500 text-center mt-4">
            Your information is secure and confidential. We'll contact you within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CriminalRecordCTA;
import React, { useState } from 'react';
import { emailService, EmailTemplates } from '../utils/emailService';

interface FormData {
  name: string;
  phoneNo: string;
  email: string;
  organization: string;
  products: string;
}

const GetQuotePage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNo: '',
    email: '',
    organization: '',
    products: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.phoneNo || !formData.email || !formData.organization || !formData.products) {
      alert('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare email data using the contact form template with organization appended to name
      const emailData = EmailTemplates.contactForm({
        name: `${formData.name} (${formData.organization})`,
        email: formData.email,
        phone: formData.phoneNo,
        subject: 'Request a Quote',
        message: `Organization: ${formData.organization}\n\nProducts/Services of Interest:\n${formData.products}`
      });
      
      // Send email using the contact template
      const result = await emailService.sendEmail(emailData, 'contact', {
        successMessage: '🎯 Quote request submitted! We\'ll send your custom quote within 24 hours.',
        errorMessage: '⚠️ Failed to submit quote request. Please try again or contact us directly.',
        enableMailtoFallback: true,
        fallbackEmail: 'sales@ecotechglobal.in'
      });
      
      if (result.success) {
        alert(result.message);
        
        // Reset form on success
        setFormData({
          name: '',
          phoneNo: '',
          email: '',
          organization: '',
          products: ''
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error submitting quote request:', error);
      alert('⚠️ An unexpected error occurred. Please try again or contact us directly.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section - Dark Blue Background */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="text-center">
              {/* Success Stories Button */}
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 bg-slate-700 border border-slate-600 rounded-full text-white text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                 Get Your
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Custom Quote
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transform your business with our cutting-edge cybersecurity solutions. Get a personalized quote tailored to your specific needs and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
{/* Benefits Section */}
<div className="py-16 bg-slate-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          Enterprise Security
        </h3>
        <p className="text-gray-300">
          Advanced protection solutions designed for businesses of all sizes
        </p>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          24/7 Support
        </h3>
        <p className="text-gray-300">
          Round-the-clock assistance from our cybersecurity experts
        </p>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          Quick Response
        </h3>
        <p className="text-gray-300">
          Receive your customized quote within 24 hours
        </p>
      </div>
    </div>
  </div>
</div>


      {/* Form Section */}
      <div className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 rounded-lg shadow-sm border border-slate-700">
            <div className="px-6 py-8 sm:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Get Your Quote</h2>
                <p className="text-gray-300">Please provide your details and we'll get back to you with a customized quote.</p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-gray-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Organization *
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Products & Services of Interest *
                  </label>
                  <textarea
                    name="products"
                    value={formData.products}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none text-white placeholder-gray-400"
                    placeholder="Please describe the products or services you're interested in, including any specific requirements or current challenges you're facing..."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting Request...
                    </span>
                  ) : (
                    'Submit Quote Request'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who rely on Ecotech Global Services 
            for their cybersecurity infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-full">
              <span className="text-white font-medium">ISO 27001 Certified</span>
            </div>
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-full">
              <span className="text-white font-medium">99.9% Uptime SLA</span>
            </div>
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-full">
              <span className="text-white font-medium">24/7 Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuotePage;
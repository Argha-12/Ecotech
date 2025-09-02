import React, { useState } from 'react';

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
      // Using EmailJS service to send emails directly from the browser
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_gmail', // You'll need to set this up
          template_id: 'template_quote', // You'll need to set this up
          user_id: 'YOUR_PUBLIC_KEY', // You'll need to get this from EmailJS
          template_params: {
            to_email: 'argharana8@gmail.com',
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phoneNo,
            organization: formData.organization,
            products: formData.products,
            message: `
New Quote Request:

Name: ${formData.name}
Phone: ${formData.phoneNo}
Email: ${formData.email}
Organization: ${formData.organization}
Products/Services: ${formData.products}

Submitted on: ${new Date().toLocaleString()}
            `
          }
        }),
      });

      if (response.ok) {
        alert('🎉 Quote request submitted successfully! We\'ll get back to you within 24 hours.');
        setFormData({
          name: '',
          phoneNo: '',
          email: '',
          organization: '',
          products: ''
        });
      } else {
        throw new Error('Email service failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Simple mailto fallback that opens email client
      const emailSubject = `New Quote Request from ${formData.name}`;
      const emailBody = `Name: ${formData.name}
Phone: ${formData.phoneNo}
Email: ${formData.email}
Organization: ${formData.organization}
Products/Services: ${formData.products}

Submitted on: ${new Date().toLocaleString()}`;

      const mailtoLink = `mailto:argharana8@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.open(mailtoLink, '_blank');
      
      alert('📧 Opening your email client to send the quote request. Please click Send in your email application.');
      
      // Reset form
      setFormData({
        name: '',
        phoneNo: '',
        email: '',
        organization: '',
        products: ''
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        
        {/* Top Section - Content */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Get Your</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Custom Quote
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Transform your business with our cutting-edge cybersecurity solutions. 
                Get a personalized quote tailored to your specific needs and requirements.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">24/7 Expert Support</h3>
                <p className="text-gray-400">Round-the-clock assistance from our cybersecurity experts</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">Enterprise Security</h3>
                <p className="text-gray-400">Advanced protection for businesses of all sizes</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">Quick Response</h3>
                <p className="text-gray-400">Get your customized quote within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
            
            {/* Form Background Effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  🌟 Request Your Quote
                </h2>
                <p className="text-gray-300">Fill in your details and we'll get back to you!</p>
              </div>

              <div className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                    👤 Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/90 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                    📱 Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/90 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                    📧 Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/90 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                    🏢 Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/90 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                    placeholder="Your company name"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                    🛍️ Products & Services
                  </label>
                  <textarea
                    name="products"
                    value={formData.products}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/90 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white resize-none transition-all duration-300 text-gray-800 placeholder-gray-500"
                    placeholder="Describe the products or services you're interested in..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full relative group ${
                    isSubmitting 
                      ? 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-400 hover:via-emerald-400 hover:to-teal-400 transform hover:scale-105'
                  } text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 overflow-hidden`}
                >
                  {isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-75 animate-pulse"></div>
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting Magic...
                      </>
                    ) : (
                      <>
                        🚀 Get My Custom Quote
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Digital Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Ecotech Global Services 
            for their cybersecurity needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-white font-semibold">✓ ISO 27001 Certified</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-white font-semibold">✓ 99.9% Uptime</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-white font-semibold">✓ 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuotePage;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { backendEmailService } from '../utils/backendEmailService';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send email using the backend service
      const result = await backendEmailService.sendContactEmail(formData, {
        successMessage: '✅ Message sent successfully! We\'ll respond within 24 hours.',
        errorMessage: '⚠️ Failed to send message. Please try again or contact us directly.',
        enableMailtoFallback: true,
        fallbackEmail: 'argharana8@gmail.com'
      });
      
      if (result.success) {
        alert(result.message);
        
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('⚠️ An unexpected error occurred. Please try again or contact us directly.');
    }
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Our Office",
      details: ["C.T.I., BIRADINGI, NETAJIGARH, Howrah, West Bengal, 711108",  "REGISTERED ADDRESS",  "4 Fairlie Place, HMP House, 2nd Floor, Room No 228, Kolkata 700001"]
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Phone",
      details: ["+91 8327314124",]
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      details: ["info@ecotechglobal.in", "support@ecotechglobal.in"]
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact <span className="text-blue-600">Us</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's discuss how we can help transform your business with innovative technology solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-700 mb-2">
                {info.title}
              </h3>
              {info.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="text-gray-800 text-sm font-medium">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services</option>
                      <option value="quote">Request a Quote</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed text-white' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map and Quick Contact */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/place/Bara+Bazar/@22.5824024,88.3500374,16.06z/data=!4m6!3m5!1s0x3a0277bbe41f2d89:0x8ee1422d5dc856ba!8m2!3d22.580893!4d88.348963!16s%2Fg%2F12hkxxzm6?authuser=0&entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen="https://www.google.com/maps/place/Bara+Bazar/@22.5824024,88.3500374,16.06z/data=!4m6!3m5!1s0x3a0277bbe41f2d89:0x8ee1422d5dc856ba!8m2!3d22.580893!4d88.348963!16s%2Fg%2F12hkxxzm6?authuser=0&entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
              {/* Quick Contact */}
              <div className="bg-blue-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                <p className="mb-4">
                  Need immediate assistance? Reach out to us directly:
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-3 hover:text-blue-200 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 832 731 4124</span>
                  </a>
                  <a
                    href="mailto:info@ecotechglobal.in"
                    className="flex items-center space-x-3 hover:text-blue-200 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@ecotechglobal.in</span>
                  </a>
                  <a
                    href="https://wa.me/832 731 4124"
                    className="flex items-center space-x-3 hover:text-blue-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
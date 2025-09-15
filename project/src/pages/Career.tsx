import React, { useState } from 'react';
import { motion } from "framer-motion";
import { emailService, EmailTemplates } from '../utils/emailService';

// EmailJS will be loaded via CDN in index.html
declare global {
  interface Window {
    emailjs: any;
  }
}

interface ApplicationFormData {
  name: string;
  phoneNo: string;
  emailId: string;
  resume: File | null;
}

const CareerPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    phoneNo: '',
    emailId: '',
    resume: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.phoneNo || !formData.emailId || !formData.resume) {
      alert('Please fill in all fields and upload your resume');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const emailData = EmailTemplates.jobApplication({
        name: formData.name,
        phoneNo: formData.phoneNo,
        emailId: formData.emailId,
        resume: formData.resume
      });
      
      const result = await emailService.sendEmail(emailData, 'career', {
        successMessage: '🎉 Application submitted successfully! We\'ll review your application and get back to you soon.',
        errorMessage: '⚠️ Failed to submit application. Please try again or contact us directly.',
        enableMailtoFallback: true,
        fallbackEmail: 'hr@ecotechglobal.in'
      });
      
      if (result.success) {
        alert(result.message);
        
        setFormData({
          name: '',
          phoneNo: '',
          emailId: '',
          resume: null
        });
        
        const fileInput = document.getElementById('resume') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('⚠️ An unexpected error occurred. Please try again or contact us directly.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        
        {/* Top Section - Content (with animation demo) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Join Our</span>
                <br />
                <span className="text-gray-300">Amazing Team</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Build your career with Ecotech Global Services! Join a team of passionate 
                professionals dedicated to shaping the future of cybersecurity and technology.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { icon: "🚀", title: "Career Growth", desc: "Accelerate your career with mentorship and learning opportunities" },
                { icon: "💰", title: "Competitive Benefits", desc: "Comprehensive packages with health, dental, and retirement plans" },
                { icon: "🌍", title: "Remote Flexibility", desc: "Work from anywhere with our flexible remote work policies" },
                { icon: "🎯", title: "Innovation Focus", desc: "Work on cutting-edge projects that shape the future of cybersecurity" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
                >
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-white text-base md:text-sm font-semibold">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Section - Application Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">✨ Application Form</h2>
                <p className="text-gray-300">Ready to join our team? Apply now!</p>
              </div>

              {/* Form Fields */}
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
                    className="w-full px-4 py-3 bg-white/90 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
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
                    className="w-full px-4 py-3 bg-white/90 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                    📧 Email ID
                  </label>
                  <input
                    type="email"
                    name="emailId"
                    value={formData.emailId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/90 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                    📄 Upload Resume
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className="w-full px-4 py-3 bg-white/90 border-2 border-dashed border-gray-300 rounded-xl hover:border-pink-500 focus:border-pink-500 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 text-gray-600 hover:text-pink-600 hover:bg-pink-50"
                    >
                      <span className="text-2xl">📎</span>
                      <span className="font-medium">
                        {formData.resume ? formData.resume.name : 'Choose file or drag & drop'}
                      </span>
                    </label>
                    {formData.resume && (
                      <div className="mt-2 text-sm text-green-300 flex items-center gap-2">
                        <span>✅</span>
                        <span>File selected: {formData.resume.name}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Supported formats: PDF, DOC, DOCX (Max: 5MB)
                  </p>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full relative group ${
                    isSubmitting
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                  } text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25 overflow-hidden`}
                >
                  {isSubmitting && (
                    <div className="absolute inset-0 bg-blue-500 opacity-75 animate-pulse"></div>
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting Application...
                      </>
                    ) : (
                      <>🚀 Submit My Application</>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Ecotech as Your Career?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join a company that values innovation, growth, and work-life balance. 
              We invest in our people and their success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🏆", title: "Recognition", desc: "Awards and recognition for outstanding performance" },
              { icon: "📚", title: "Learning", desc: "Continuous learning opportunities and certifications" },
              { icon: "🤝", title: "Collaboration", desc: "Work with talented teams across the globe" },
              { icon: "🌟", title: "Impact", desc: "Make a real difference in cybersecurity" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-200 text-l font-semibold">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;

import React, { useState } from 'react';

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
      // Using EmailJS service to send emails directly from the browser
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_gmail', // You'll need to set this up
          template_id: 'template_career', // You'll need to set this up
          user_id: 'YOUR_PUBLIC_KEY', // You'll need to get this from EmailJS
          template_params: {
            to_email: 'argharana8@gmail.com',
            from_name: formData.name,
            from_email: formData.emailId,
            phone: formData.phoneNo,
            resume_name: formData.resume.name,
            message: `
New Job Application:

Name: ${formData.name}
Phone: ${formData.phoneNo}
Email: ${formData.emailId}
Resume: ${formData.resume.name}

Submitted on: ${new Date().toLocaleString()}
            `
          }
        }),
      });

      if (response.ok) {
        alert('🎉 Application submitted successfully! We\'ll review your application and get back to you soon.');
        setFormData({
          name: '',
          phoneNo: '',
          emailId: '',
          resume: null
        });
        // Clear file input
        const fileInput = document.getElementById('resume') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        throw new Error('Email service failed');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      
      // Simple mailto fallback that opens email client
      const emailSubject = `New Job Application from ${formData.name}`;
      const emailBody = `Name: ${formData.name}
Phone: ${formData.phoneNo}
Email: ${formData.emailId}
Resume: ${formData.resume.name}

Submitted on: ${new Date().toLocaleString()}

Note: Please find the resume attached separately.`;

      const mailtoLink = `mailto:argharana8@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.open(mailtoLink, '_blank');
      
      alert('📧 Opening your email client to send the application. Please attach your resume and click Send.');
      
      // Reset form
      setFormData({
        name: '',
        phoneNo: '',
        emailId: '',
        resume: null
      });
      // Clear file input
      const fileInput = document.getElementById('resume') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
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
        
        {/* Top Section - Content */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Join Our</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                  Amazing Team
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Build your career with Ecotech Global Services! Join a team of passionate 
                professionals dedicated to shaping the future of cybersecurity and technology.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Career Growth</h3>
                <p className="text-gray-400 text-sm">Accelerate your career with mentorship and learning opportunities</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Competitive Benefits</h3>
                <p className="text-gray-400 text-sm">Comprehensive packages with health, dental, and retirement plans</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌍</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Remote Flexibility</h3>
                <p className="text-gray-400 text-sm">Work from anywhere with our flexible remote work policies</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Innovation Focus</h3>
                <p className="text-gray-400 text-sm">Work on cutting-edge projects that shape the future of cybersecurity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Application Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
            
            {/* Form Background Effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  ✨ Application Form
                </h2>
                <p className="text-gray-300">Ready to join our team? Apply now!</p>
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
                  <p className="text-xs text-gray-400 mt-1">Supported formats: PDF, DOC, DOCX (Max: 5MB)</p>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full relative group ${
                    isSubmitting 
                      ? 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 transform hover:scale-105'
                  } text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 overflow-hidden`}
                >
                  {isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-75 animate-pulse"></div>
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        🚀 Submit My Application
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Work With Us Section */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm py-20">
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
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Recognition</h3>
              <p className="text-gray-300 text-sm">Awards and recognition for outstanding performance</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">📚</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Learning</h3>
              <p className="text-gray-300 text-sm">Continuous learning opportunities and certifications</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
              <p className="text-gray-300 text-sm">Work with talented teams across the globe</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Impact</h3>
              <p className="text-gray-300 text-sm">Make a real difference in cybersecurity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
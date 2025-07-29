import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Zap, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

import awsImage from '../assets/AWS.jpg';
import ecotechLogo from '../assets/ecotech-logo.png';
import heroBanner from '../assets/hero-banner.png';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';

const heroImages = [hero1, hero2, hero3];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Rotate image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll handler for customer logos section
const scroll = (direction: 'left' | 'right') => {
  const container = document.getElementById('logoScrollContainer');
  if (container) {
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
};

  const services = [
    {
      icon: '/assets/web-app-icon.png', // Update with your actual icon path
      title: 'Web App Developments',
      description: 'We offer expert web application design and development, enhancing user experience and functionality.',
      link: '#'
    },
    {
      icon: '/assets/audit-icon.png', // Update with your actual icon path
      title: 'Audit & IT Consulting',
      description: 'We provide comprehensive Audit and IT Consulting Services to optimize your technology and processes.',
      link: '#'
    },
    {
      icon: '/assets/security-icon.png', // Update with your actual icon path
      title: 'Securing IT Infrastructure',
      description: 'We specialize in securing IT infrastructure to protect your data and enhance resilience.',
      link: '#'
    },
    {
      icon: '/assets/vulnerability-icon.png', // Update with your actual icon path
      title: 'Vulnerability Assessment',
      description: 'We offer vulnerability assessment services to identify and mitigate security risks effectively.',
      link: '#'
    },
    {
      icon: '/assets/config-icon.png', // Update with your actual icon path
      title: 'Secure Configuration Review',
      description: 'We provide Secure Configuration Review services to enhance your system\'s security posture effectively.',
      link: '#'
    },
    {
      icon: '/assets/training-icon.png', // Update with your actual icon path
      title: 'Professional IT Training',
      description: 'We offer Professional IT Training to empower your team with essential technology skills.',
      link: '#'
    },
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee',
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: 'Fast Performance',
      description: 'Optimized solutions for maximum speed and efficiency',
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'Expert Team',
      description: 'Skilled professionals with years of industry experience',
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* 🔹 Hero Banner Section */}
      <section className="h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{
                opacity: 0,
                x:
                  currentImageIndex === 0
                    ? '-100%' // Image 1: from left
                    : currentImageIndex === 2
                    ? '100%' // Image 3: from right
                    : 0, // Image 2: center fade
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x:
                  currentImageIndex === 0
                    ? '-100%' // Image 1: exit left
                    : currentImageIndex === 2
                    ? '100%' // Image 3: exit right
                    : 0, // Image 2: fade out
              }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
            >
              <div className="bg-black/60 absolute inset-0 z-0" />
              <div className="relative z-10 flex items-center justify-center h-full px-4 text-center text-white">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                    Your Trusted IT Solution Partner <br />
                    Empowering Your Business to Thrive
                  </h1>
                  <p className="text-lg md:text-xl mb-6">
                    Total IT Solution — powered by Ecotech Global
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 🔹 Services Section */}
      <section className="py-20 relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              All Professional We're Offering Best
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">IT Solutions & </span>
              <span className="text-blue-400">Services</span>
            </h3>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Comprehensive IT solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                    <img 
                      src={service.icon} 
                      alt={service.title} 
                      className="w-10 h-10 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Read More Button */}
                <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors duration-300">
                  <span>READ MORE</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/30 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 🔹 AWS Coverage Section
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AWS Expertise at Ecotech Global
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              As one of the fastest-growing AWS Premier Consulting Partners in India,
              we specialize in Managed Services, Cloud Migration, Cybersecurity, and Analytics.
              Our AWS-certified experts deliver scalable, secure, and cost-efficient cloud
              solutions tailored to your business needs.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Managed Cloud Services</li>
              <li>Cloud Migration & Optimization</li>
              <li>Cyber Security & Analytics</li>
              <li>Machine Learning, IoT, AR/VR Solutions</li>
              <li>Industry Solutions for SAP, E-commerce, Media</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src={awsImage}
              alt="AWS Coverage"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section> */}

      {/* 🔹 Journey So Far Section */}
<section className="bg-gradient-to-br from-gray-50 to-white py-24 relative overflow-hidden">
  {/* Subtle Animated Background Elements */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-100 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header Section */}
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">So Far</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Milestones that define our commitment to excellence and partnership with AWS
        </p>
      </motion.div>
    </div>

    {/* Timeline Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {[
        { date: 'NOV 2018', desc: 'AWS Registered Partner', icon: '🚀' },
        { date: 'MAY 2019', desc: 'AWS Select Consulting Partner', icon: '⭐' },
        { date: 'OCT 2019', desc: 'AWS Advanced Consulting Partner', icon: '🏆' },
        { date: 'NOV 2019', desc: 'Achieved 50+ Customers', icon: '👥' },
        { date: 'MAY 2020', desc: 'Recognized as AWS Managed Category Partner', icon: '🎯' },
        { date: 'NOV 2020', desc: 'Fastest Growing Partner by AWS', icon: '📈' },
        { date: 'JAN 2021', desc: 'AWS SMBhav Partner, AWS EC2 for MS Windows Service Delivery Partner', icon: '🔧' },
        { date: 'MAR 2021', desc: 'AWS Well Architected Partner, 150+ Customers', icon: '🏗️' },
        // { date: 'APR 2021', desc: 'AWS CloudFront Service Delivery Partner', icon: '☁️' },
        // { date: 'JUN 2021', desc: 'AWS WAF Service Delivery Partner', icon: '🛡️' },
      ].map((milestone, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            delay: i * 0.1,
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          className="group relative"
        >
          {/* Card */}
          <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 h-full hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-2">
            {/* Timeline Connector (for larger screens) */}
            {i < 9 && (
              <div className="hidden xl:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
            )}
            
            {/* Icon */}
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {milestone.icon}
            </div>
            
            {/* Date Badge */}
            <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
              {milestone.date}
            </div>
            
            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
              {milestone.desc}
            </p>
            
            {/* Hover Effect Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
          </div>
          
          {/* Index Number */}
          <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
            {i + 1}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Bottom Stats Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-20 text-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
            150+
          </div>
          <div className="text-gray-600 text-sm uppercase tracking-wider">Satisfied Customers</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
            3+
          </div>
          <div className="text-gray-600 text-sm uppercase tracking-wider">Years of Excellence</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
            10+
          </div>
          <div className="text-gray-600 text-sm uppercase tracking-wider">AWS Certifications</div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* 🔹 Our Valued Customers Section */}
   {/* 🔹 Our Valued Customers Carousel */}
<section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
      Our Valued Customers
    </h2>

    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Scrollable Container */}
      <div
        id="logoScrollContainer"
        className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide px-10"
      >
        <div className="inline-flex gap-8 items-center">
          {[
            'iit-logo.jpg',
            'kolkata-police.png',
            'kesoram.png',
            'ashok-hall.png',
            'rashmi-group.png',
            'gd-goenka.png',
            'pwd-wb.png',
            'eveready.png',
            'nujs.png',
            'kalyani-university.png',
            'tata-power.png',
            'wbidc.png',
            'wow-momo.png',
            'gkb-opticals.png',
            'ck-birla.png',
            'peerless.png',
            'paharpur.png',
            'nexval.png',
            'rs-software.png',
          ].map((logo, index) => (
            <img
              key={index}
              src={`/assets/customers/${logo}`}
              alt={`Customer ${index + 1}`}
              className="h-20 w-auto object-contain"
            />
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section>



      {/* 🔹 Working Process Section */}
     <section className="py-24 bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <p className="text-sm uppercase tracking-wide text-white font-semibold mb-2">
        Work Process
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
        Working Process For <span className="text-yellow-300">Technology</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center relative">
      {[
        {
          title: 'Select A Project',
          description:
            'We choose the project that aligns with your goals and showcases your unique strengths.',
          icon: '/assets/select-project.svg',
          bgColor: 'bg-yellow-100',
          badgeColor: 'bg-yellow-500',
        },
        {
          title: 'Project Analysis',
          description:
            'Analysis involves assessing requirements, risks, and resources to ensure success.',
          icon: '/assets/project-analysis.svg',
          bgColor: 'bg-pink-100',
          badgeColor: 'bg-pink-500',
        },
        {
          title: 'Start Process',
          description:
            'Initiate by defining goals, gathering requirements, and assembling the team.',
          icon: '/assets/start-process.svg',
          bgColor: 'bg-green-100',
          badgeColor: 'bg-green-500',
        },
        {
          title: 'Deliver Result',
          description:
            'Deliver by executing plans effectively with high quality and continuous improvement.',
          icon: '/assets/deliver-result.svg',
          bgColor: 'bg-blue-100',
          badgeColor: 'bg-blue-500',
        },
      ].map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative px-4"
        >
          <div
            className={`w-20 h-20 rounded-full ${step.bgColor} mx-auto flex items-center justify-center mb-4 shadow-inner`}
          >
            <img src={step.icon} alt={step.title} className="w-10 h-10" />
          </div>
          <div
            className={`absolute -top-2 right-6 w-8 h-8 ${step.badgeColor} text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg z-10`}
          >
            {index + 1}
          </div>
          <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-md">
            {step.title}
          </h3>
          <p className="text-white/90 text-sm leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* 🔹 Features Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">
              Why Choose <span className="text-blue-600">Ecotech Global?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              We deliver excellence through <span className="text-blue-500 font-semibold">innovation</span>, 
              <span className="text-blue-500 font-semibold"> reliability</span>, and 
              <span className="text-blue-500 font-semibold"> customer-focused solutions</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-6 text-center transform transition hover:-translate-y-1 hover:scale-105"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your technology goals
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

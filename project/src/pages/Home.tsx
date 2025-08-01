import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Users, Award, FileText, Layout, Code2, CheckCircle, Rocket, Smartphone, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import awsImage from '../assets/AWS.jpg';
import heroBanner from '../assets/hero-banner.png';
import Timeline from '../components/Timeline';

const Home = () => {
  const services = [
    {
      icon: <Layout className="w-12 h-12 mb-4 text-blue-600 mx-auto" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
    },
    {
      icon: <Smartphone className="w-12 h-12 mb-4 text-green-600 mx-auto" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
    },
    {
      icon: <Cloud className="w-12 h-12 mb-4 text-purple-600 mx-auto" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
    },
    {
      icon: <Zap className="w-12 h-12 mb-4 text-yellow-600 mx-auto" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies and campaigns',
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
      <section
        className="h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-center relative"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="bg-black/60 absolute inset-0 z-0"></div>
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            BEST IT SOLUTION AGENCY <br />
            FOR YOUR BUSINESS
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Total IT Solution — powered by Ecotech Global
          </p>
        </div>
      </section>

      {/* Wave Divider */}
      {/* <svg className="w-full -mt-1" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,160L48,176C96,192,192,224,288,234.7C384,245,480,235,576,202.7C672,171,768,117,864,112C960,107,1056,149,1152,176C1248,203,1344,213,1392,218.7L1440,224L1440,320L0,320Z"
        ></path>
      </svg> */}

      {/* 🔹 Services Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div key={index} className="flip-card w-full h-80">
                <div className="flip-card-inner shadow-xl border border-gray-200 rounded-2xl">
                  <div className="flip-card-front">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
                    <p className="text-center">{service.description}</p>
                  </div>
                  <div className="flip-card-back flex flex-col items-center justify-center">
                    {service.icon}
                    <h3 className="text-lg font-bold text-gray-800 mt-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 mt-2 text-center">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 AWS Coverage Section */}
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

      {/* 🔹 Work Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our Work <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              A proven methodology to deliver high-quality solutions on time and on budget.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {[
              {
                icon: <FileText className="w-10 h-10" />,
                title: 'Requirement Analysis',
                desc: 'We collaborate with stakeholders to understand goals, and constraints.',
              },
              {
                icon: <Layout className="w-10 h-10 text-blue-600" />,
                title: 'Planning & Design',
                desc: 'Our architects craft a scalable design and detailed project roadmap.',
              },
              {
                icon: <Code2 className="w-10 h-10 text-blue-600" />,
                title: 'Development',
                desc: 'Agile sprints turn designs into robust, maintainable code.',
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
                title: 'Testing & QA',
                desc: 'Comprehensive testing for reliability, performance, and security.',
              },
              {
                icon: <Rocket className="w-10 h-10 text-blue-600" />,
                title: 'Deployment & Support',
                desc: 'We launch, monitor, and continuously improve your solution.',
              },
            ].map((step, index, arr) => (
              <Fragment key={index}>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col items-center justify-center text-center bg-white rounded-full w-56 h-56 aspect-square shadow-xl transition-transform duration-300 border border-gray-200 hover:scale-105 hover:shadow-2xl hover:border-blue-700 hover:bg-blue-700 group`}

              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                  {step.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-blue-900 group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm leading-tight text-gray-600 group-hover:text-blue-100 transition-colors duration-300 px-2">
                  {step.desc}
                </p>
              </motion.div>
              
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Our Journey Timeline */}
      <Timeline />

      {/* 🔹 Our Valued Customers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Valued Customers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies across various industries
            </p>
          </div>

          <div className="relative">
            <Slider
              dots={false}
              infinite={true}
              slidesToShow={6}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={2000}
              speed={1000}
              pauseOnHover={false}
              arrows={false}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                  },
                },
              ]}
              className="customer-logos"
            >
              {[
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netflix/netflix-original-wordmark.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/uber/uber-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/airbnb/airbnb-original-wordmark.svg',
              ].map((logo, index) => (
                <div key={index} className="px-4">
                  <motion.div
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="h-24 bg-white rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-all"
                  >
                    <img 
                      src={logo} 
                      alt={`Client ${index + 1}`} 
                      className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                </div>
              ))}
            </Slider>
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

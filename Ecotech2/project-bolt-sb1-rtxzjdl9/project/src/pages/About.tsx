import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, CheckCircle, TrendingUp } from 'lucide-react';
import bgImage from '../assets/about-bg.jpg';
import heroBg from "../assets/about-hero-bg.jpg"; // ✅ correct extension
 // Your background image

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description: "We continuously explore cutting-edge technologies to deliver innovative solutions"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique requirements"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Growth",
      description: "We help businesses scale and grow through strategic technology solutions"
    }
  ];

  const whyChooseUs = [
    "10+ years of industry experience",
    "Expert team of certified professionals",
    "Proven track record of successful projects",
    "24/7 customer support and maintenance",
    "Competitive pricing and flexible engagement models",
    "Commitment to quality and timely delivery"
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section
  className="relative bg-cover bg-center bg-no-repeat py-32"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
    <motion.h1
      className="text-5xl md:text-6xl font-extrabold mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      About <span className="text-red-400">Ecotech Global</span>
    </motion.h1>
    <motion.p
      className="text-xl text-blue-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Your trusted partner for innovative IT solutions and digital transformation
    </motion.p>
  </div>
</section>


      {/* Banner Image with Overlay */}
      <section
        className="py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Empowering Businesses with <span className="text-yellow-400">Next-Gen</span> IT Solutions
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed">
            We combine creativity, technology, and experience to build solutions that drive business success.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transforming Businesses Through Technology
              </h2>
              <p className="text-gray-600 mb-6">
                Established with a vision to bridge the gap between businesses and technology,
                Ecotech Global has been at the forefront of digital innovation for over a decade.
                We specialize in providing comprehensive IT solutions that drive growth, efficiency,
                and competitive advantage for our clients.
              </p>
              <p className="text-gray-600">
                Our team of experienced professionals combines technical expertise with deep
                industry knowledge to deliver solutions that not only meet current needs but
                also prepare businesses for future challenges. We believe in building long-term
                partnerships with our clients, ensuring their success is our success.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-10 shadow-2xl border border-white/30">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    ["10+", "Years Experience"],
                    ["500+", "Projects Delivered"],
                    ["200+", "Happy Clients"],
                    ["50+", "Team Members"]
                  ].map(([count, label], idx) => (
                    <div key={idx} className="text-center text-white">
                      <div className="text-4xl font-bold text-yellow-300">{count}</div>
                      <div className="text-blue-100">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative technology solutions that drive growth,
                enhance efficiency, and create sustainable competitive advantages.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading technology partner for businesses worldwide, recognized for
                our innovation, reliability, and commitment to excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl hover:scale-105 duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Why Choose Ecotech Global?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's what sets us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

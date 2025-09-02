import React, { useEffect, useState, useRef } from "react";
import { Target, Users, Award, CheckCircle, TrendingUp, Star, Zap, Shield, Globe, ArrowRight, Play, Sparkles, Code, Lightbulb } from "lucide-react";

const statsData = [
  { value: 10, suffix: "+", label: "Years Experience", icon: <Star className="w-6 h-6" /> },
  { value: 500, suffix: "+", label: "Projects Delivered", icon: <Zap className="w-6 h-6" /> },
  { value: 200, suffix: "+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
  { value: 50, suffix: "+", label: "Team Members", icon: <Globe className="w-6 h-6" /> },
];

const About = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Animated counter effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    statsData.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(current);
          return updated;
        });
      }, interval);
    });
  }, []);

  // Fixed Intersection Observer for animations
  useEffect(() => {
    const currentRefs = sectionRefs.current.filter(ref => ref !== null);
    
    const observers = currentRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [index]: true }));
          }
        },
        { 
          threshold: 0.1,
          rootMargin: '50px 0px'
        }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []); // Removed dependency to prevent re-running

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Innovation",
      description: "Pioneering cutting-edge technologies to deliver revolutionary solutions that transform industries and create meaningful impact",
      color: "from-cyan-400 to-blue-600",
      bgGradient: "bg-gradient-to-br from-cyan-500/10 to-blue-600/20",
      borderColor: "border-cyan-500/30",
      hoverBorder: "hover:border-cyan-400/60",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Collaboration",
      description: "Building lasting partnerships through transparent communication, shared vision, and mutual success in every endeavor",
      color: "from-pink-400 to-purple-600",
      bgGradient: "bg-gradient-to-br from-pink-500/10 to-purple-600/20",
      borderColor: "border-pink-500/30",
      hoverBorder: "hover:border-pink-400/60",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Excellence",
      description: "Maintaining uncompromising standards of quality, precision, and excellence in every project we undertake for our clients",
      color: "from-amber-400 to-orange-600",
      bgGradient: "bg-gradient-to-br from-amber-500/10 to-orange-600/20",
      borderColor: "border-amber-500/30",
      hoverBorder: "hover:border-amber-400/60",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Growth",
      description: "Empowering sustainable business expansion through strategic technology investments, innovation, and future-ready solutions",
      color: "from-emerald-400 to-green-600",
      bgGradient: "bg-gradient-to-br from-emerald-500/10 to-green-600/20",
      borderColor: "border-emerald-500/30",
      hoverBorder: "hover:border-emerald-400/60",
    },
  ];

  const whyChooseUs = [
    { text: "10+ years of proven industry leadership", icon: <Star className="w-5 h-5" /> },
    { text: "Expert team of certified professionals", icon: <Award className="w-5 h-5" /> },
    { text: "Proven track record of successful projects", icon: <TrendingUp className="w-5 h-5" /> },
    { text: "24/7 dedicated customer support", icon: <Shield className="w-5 h-5" /> },
    { text: "Competitive pricing with flexible models", icon: <Target className="w-5 h-5" /> },
    { text: "Commitment to quality and timely delivery", icon: <CheckCircle className="w-5 h-5" /> },
  ];

  interface FloatingShapeProps {
    className: string;
    delay?: number;
  }

  const FloatingShape: React.FC<FloatingShapeProps> = ({ className, delay = 0 }) => (
    <div 
      className={`absolute opacity-10 animate-pulse ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  );

  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white min-h-screen relative overflow-hidden">
      {/* Enhanced Floating Background Elements */}
      <FloatingShape className="top-20 left-20 w-40 h-40 bg-cyan-500 rounded-full blur-3xl" delay={0} />
      <FloatingShape className="top-1/4 right-32 w-56 h-56 bg-blue-600 rounded-full blur-3xl" delay={1.5} />
      <FloatingShape className="bottom-1/3 left-1/5 w-72 h-72 bg-indigo-600 rounded-full blur-3xl" delay={3} />
      <FloatingShape className="bottom-20 right-20 w-48 h-48 bg-purple-600 rounded-full blur-3xl" delay={2} />

      {/* Enhanced Hero Section */}
      <section className="relative py-40 px-4 text-center bg-gradient-to-b from-slate-900/90 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/10 to-transparent"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-8 inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-xl border border-cyan-500/30 shadow-2xl">
            <Sparkles className="w-5 h-5 text-cyan-400 mr-3" />
            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Leading Digital Innovation Since 2017
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            <span className="block text-white">About</span>
            <span className="block text-white">Ecotech Global</span>
          </h1>
                    
          <p className="text-2xl md:text-3xl font-light text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed">
            Your trusted partner for <span className="font-bold text-white">innovative IT solutions</span> and 
            <span className="font-bold text-white"> digital transformation</span>
          </p>

          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="group flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 border border-cyan-400/20">
              <Play className="w-3 h-3 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </button>
            <button className="flex items-center gap-4 px-10 py-5 border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-cyan-400/50">
              Learn More
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Fixed Company Overview Section */}
      <section
        ref={el => (sectionRefs.current[0] = el)}
        className="py-32 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Header */}
          <div className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible[0] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-white text-sm font-semibold border border-purple-500/30 backdrop-blur-sm mb-6">
              <Code className="w-4 h-4 mr-2 text-purple-400" />
              Our Story
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
              Empowering Your Business
            </h2>

            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              We deliver innovative technology solutions that drive growth, efficiency, and success for businesses across industries.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible[0] ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-6">
                    Excellence in Every Solution
                  </h3>
                  <p className="text-lg text-white leading-relaxed mb-6">
                    At <span className="font-semibold text-white">Ecotech Global</span>, we specialize in creating powerful, scalable technology solutions that transform how businesses operate and compete in the digital marketplace.
                  </p>
                  <p className="text-lg text-white leading-relaxed">
                    Our dedicated team brings years of experience and cutting-edge expertise to every project, ensuring your business stays ahead of the curve with reliable, innovative solutions.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {[
                    "Custom software development",
                    "Cloud infrastructure & migration",
                    "AI & machine learning integration",
                    "Enterprise-grade security solutions"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white group-hover:text-white transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible[0] ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-500">
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm">
                    {/* Placeholder for team image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <Users className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                        <p className="text-white text-xl font-semibold">Our Amazing Team</p>
                        <p className="text-gray-300">Innovation • Collaboration • Excellence</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-2xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
                    <Zap className="w-12 h-12 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-cyan-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
              
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 hover:border-purple-500/30 transition-all duration-500">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {statsData.map((stat, index) => (
                    <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="mb-6 flex justify-center">
                        <div className="p-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 border border-purple-500/30">
                          <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                            {stat.icon}
                          </div>
                        </div>
                      </div>
                      <div className="text-5xl lg:text-6xl font-black text-white mb-3 group-hover:scale-110 transition-transform">
                        {counts[index]}{stat.suffix}
                      </div>
                      <div className="text-white font-medium text-sm lg:text-base group-hover:text-white transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Mission & Vision Section */}
      <section 
        ref={el => (sectionRefs.current[1] = el)}
        className="py-32 relative bg-gradient-to-b from-slate-900 to-slate-950"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-24">
            <span className="inline-flex items-center px-8 py-4 bg-white/10 rounded-full text-white text-sm font-bold border border-white/20 mb-8 shadow-lg backdrop-blur-sm">
              <Lightbulb className="w-5 h-5 mr-3" />
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
              Mission & Vision
            </h2>

            <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Driving innovation, delivering excellence, and shaping a sustainable
              future for our clients and communities.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission */}
            <div
              className={`group transform transition-all duration-700 ${
                isVisible[1]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-slate-800/60 to-blue-900/40 backdrop-blur-xl rounded-3xl p-12 border border-slate-700 hover:border-cyan-400/60 transition-all duration-500 h-full shadow-2xl">
                  <div className="flex items-center mb-8">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 border border-cyan-400/40 shadow-lg">
                      <span className="text-4xl font-black text-cyan-400">M</span>
                    </div>
                    <h3 className="ml-8 text-4xl font-bold text-white">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-300 text-xl leading-relaxed">
                    To{" "}
                    <span className="font-bold text-white">
                      empower businesses
                    </span>{" "}
                    with innovative, reliable, and efficient technology solutions
                    that drive measurable growth and create lasting impact across
                    industries worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div
              className={`group transform transition-all duration-700 delay-200 ${
                isVisible[1]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-slate-800/60 to-indigo-900/40 backdrop-blur-xl rounded-3xl p-12 border border-slate-700 hover:border-indigo-400/60 transition-all duration-500 h-full shadow-2xl">
                  <div className="flex items-center mb-8">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 border border-indigo-400/40 shadow-lg">
                      <span className="text-4xl font-black text-indigo-400">V</span>
                    </div>
                    <h3 className="ml-8 text-4xl font-bold text-white">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-300 text-xl leading-relaxed">
                    To be a{" "}
                    <span className="font-bold text-white">global leader</span> in
                    technology services, fostering innovation, sustainability, and
                    positive change for a better-connected, more prosperous future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Core Values Section */}
      <section 
        ref={el => (sectionRefs.current[2] = el)}
        className="py-32"
      >
        <div className="max-w-7xl mx-auto px-4 text-center mb-24">
          <span className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full text-emerald-300 text-sm font-bold border border-emerald-500/40 mb-8 shadow-lg">
            <Star className="w-5 h-5 mr-3" />
            What We Stand For
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
            Our Core Values
          </h2>

          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The fundamental principles that guide every decision we make and every solution we deliver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-700 ${isVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color}/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`relative ${value.bgGradient} backdrop-blur-xl p-10 rounded-3xl border ${value.borderColor} ${value.hoverBorder} transition-all duration-500 h-full group-hover:scale-105 shadow-2xl text-center`}>
                  <div className={`w-24 h-24 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fixed Why Choose Us Section */}
      <section 
        ref={el => (sectionRefs.current[3] = el)}
        className="py-32 bg-gradient-to-br from-slate-900/80 to-black/90 backdrop-blur-sm relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/10 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center mb-24">
          <span className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full text-orange-300 text-sm font-bold border border-orange-500/40 mb-8 shadow-lg">
            <Shield className="w-5 h-5 mr-3" />
            Why Partner With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
            Why Choose Ecotech Global?
          </h2>

          <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Discover the advantages that make us the preferred technology partner for businesses worldwide
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 mb-20">
          {whyChooseUs.map((reason, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-700 ${isVisible[3] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-6 bg-gradient-to-r from-slate-800/60 to-blue-900/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105 shadow-xl">
                  <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/40 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-emerald-400">
                      {reason.icon}
                    </div>
                  </div>
                  <span className="text-gray-300 font-semibold flex-1 text-lg">{reason.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
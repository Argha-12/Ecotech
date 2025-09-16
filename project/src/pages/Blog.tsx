import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Ransomware-as-a-Service: Why 2025 Is the Year Businesses Must Rethink Cybersecurity",
    intro:
      "Cybercrime is no longer the domain of elite hackers — it's now available as a subscription. Ransomware-as-a-Service (RaaS) has emerged as one of the biggest threats of 2025, enabling attackers with little technical skill to launch sophisticated attacks. For businesses, this means traditional defenses are no longer enough — a holistic, multi-layered security strategy is now essential.",
    outline: [
      "Introduction – Rise of 'as-a-service' cybercrime models.",
      "What is RaaS? – How hackers sell ransomware kits on dark web.",
      "Why It's Dangerous – Lowers entry barrier, increases attack scale.",
      "Recent Trends – Notable RaaS incidents in BFSI, Healthcare, SMBs.",
      "How Businesses Can Prepare – Zero Trust, UTM firewalls, regular backups, cyber insurance.",
      "Conclusion – The future of cybersecurity is proactive, not reactive.",
    ],
    author: "Sedinets Technologies",
    date: "August 15, 2024",
    category: "Cybersecurity",
    readTime: "8 min read",
    imageSrc: "../assets/argha.png"
  },
  {
    title: "Why Hybrid Cloud is Becoming the Default Enterprise Strategy in 2025",
    intro:
      "Gone are the days when enterprises debated between public or private cloud. In 2025, the hybrid cloud model has emerged as the clear winner, offering the best of both worlds — flexibility, scalability, and compliance. Organizations are increasingly embracing hybrid strategies to balance security with innovation, unlocking new opportunities for growth.",
    outline: [
      "Introduction – Cloud adoption maturity, shift from pure public to hybrid.",
      "What is Hybrid Cloud? – Blend of on-premise, private, and public cloud.",
      "Key Drivers – Data sovereignty, compliance, flexibility, cost control.",
      "Benefits for Enterprises – Scalability, resilience, and optimized workloads.",
      "Challenges & Solutions – Security, governance, vendor lock-in.",
      "Case Example – BFSI or Retail adopting hybrid cloud.",
      "Conclusion – Hybrid cloud as the bridge to AI-driven digital transformation.",
    ],
    author: "Sedinets Technologies",
    date: "August 10, 2024",
    category: "Cloud Computing",
    readTime: "6 min read",
    imageSrc: "../assets/argha.png"
  },
  {
    title: "Generative AI in 2025: From Chatbots to Enterprise Innovation",
    intro:
      "Generative AI is no longer just about chatbots writing text — it's becoming a core enterprise technology. From accelerating software development to strengthening cybersecurity, Generative AI is transforming the way organizations operate in 2025. The winners will be those who embrace it responsibly, combining human intelligence with AI-driven insights.",
    outline: [
      "Introduction – Generative AI hype vs. reality.",
      "Key Use Cases in Enterprises – Automated code generation & testing, AI-driven customer support, Cybersecurity anomaly detection, Marketing content & personalization, Data summarization for executives.",
      "Benefits – Efficiency, creativity, faster time-to-market.",
      "Challenges – Bias, hallucinations, data security.",
      "How Businesses Can Adopt Safely – AI governance, ethical frameworks, cloud AI platforms.",
      "Conclusion – GenAI will not replace humans, but empower them.",
    ],
    author: "Sedinets Technologies",
    date: "August 5, 2024",
    category: "Artificial Intelligence",
    readTime: "10 min read",
    imageSrc: "../assets/argha.png"
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Tech Insights 2025
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Exploring the latest trends in cybersecurity, cloud computing, and artificial intelligence
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Articles */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {blogs.map((blog, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-20 last:mb-0"
          >
            <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
              
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={blog.imageSrc} 
                    alt={blog.title} 
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wider">
                      {blog.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                {/* Article Meta */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>By {blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{blog.date}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white leading-tight">
                  {blog.title}
                </h2>

                {/* Introduction */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {blog.intro}
                </p>

                {/* Article Outline */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">
                    Article Outline:
                  </h3>
                  <div className="space-y-3">
                    {blog.outline.map((point, pointIdx) => (
                      <div key={pointIdx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Read Time */}
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <span className="text-sm text-gray-500">
                    {blog.readTime} • {blog.category}
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
              Stay Updated with Latest Tech Insights
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights on emerging technologies, industry trends, and best practices delivered to your inbox.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
              Subscribe to Newsletter
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Ransomware-as-a-Service: Why 2025 Is the Year Businesses Must Rethink Cybersecurity",
    intro:
      "Cybercrime is no longer the domain of elite hackers — it’s now available as a subscription. Ransomware-as-a-Service (RaaS) has emerged as one of the biggest threats of 2025, enabling attackers with little technical skill to launch sophisticated attacks. For businesses, this means traditional defenses are no longer enough — a holistic, multi-layered security strategy is now essential.",
    outline: [
      "Introduction – Rise of 'as-a-service' cybercrime models.",
      "What is RaaS? – How hackers sell ransomware kits on dark web.",
      "Why It’s Dangerous – Lowers entry barrier, increases attack scale.",
      "Recent Trends – Notable RaaS incidents in BFSI, Healthcare, SMBs.",
      "How Businesses Can Prepare – Zero Trust, UTM firewalls, regular backups, cyber insurance.",
      "Conclusion – The future of cybersecurity is proactive, not reactive.",
    ],
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
  },
  {
    title: "Generative AI in 2025: From Chatbots to Enterprise Innovation",
    intro:
      "Generative AI is no longer just about chatbots writing text — it’s becoming a core enterprise technology. From accelerating software development to strengthening cybersecurity, Generative AI is transforming the way organizations operate in 2025. The winners will be those who embrace it responsibly, combining human intelligence with AI-driven insights.",
    outline: [
      "Introduction – Generative AI hype vs. reality.",
      "Key Use Cases in Enterprises – Automated code generation & testing, AI-driven customer support, Cybersecurity anomaly detection, Marketing content & personalization, Data summarization for executives.",
      "Benefits – Efficiency, creativity, faster time-to-market.",
      "Challenges – Bias, hallucinations, data security.",
      "How Businesses Can Adopt Safely – AI governance, ethical frameworks, cloud AI platforms.",
      "Conclusion – GenAI will not replace humans, but empower them.",
    ],
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Tech Insights 2025
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg h-full flex flex-col">
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-purple-400">
                      {blog.title}
                    </h2>
                    <p className="text-sm text-gray-300 mb-4">{blog.intro}</p>

                    <h3 className="text-md font-medium text-blue-400 mb-2">
                      Outline:
                    </h3>
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                      {blog.outline.slice(0, 3).map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                      <li>...more</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-2">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
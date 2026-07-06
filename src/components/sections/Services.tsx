"use client";

import { motion } from "framer-motion";
import { Mic, MessageSquare, MonitorPlay, Zap, BarChart, Network } from "lucide-react";

const services = [
  {
    title: "AI Voice Agents",
    description: "Intelligent inbound & outbound calling agents that handle customer service and sales 24/7.",
    icon: Mic,
  },
  {
    title: "AI Chatbots",
    description: "Advanced conversational AI that converts visitors into leads and resolves support tickets instantly.",
    icon: MessageSquare,
  },
  {
    title: "Custom Web Development",
    description: "Premium, high-performance web applications built with modern frameworks and stunning UI.",
    icon: MonitorPlay,
  },
  {
    title: "AI Business Automation",
    description: "Streamline your operations by automating repetitive tasks, saving time and reducing costs.",
    icon: Zap,
  },
  {
    title: "Data Analytics & Reporting",
    description: "Actionable insights through AI-powered analytics dashboards that drive business decisions.",
    icon: BarChart,
  },
  {
    title: "CRM & Workflow Integrations",
    description: "Seamlessly connect your existing tools to create a unified, efficient business ecosystem.",
    icon: Network,
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-[#0A0A0A] relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Intelligent <span className="text-gradient">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            We deploy cutting-edge AI and robust software architecture to solve complex business challenges.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
              <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shine" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
      `}</style>
    </section>
  );
}

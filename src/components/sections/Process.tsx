"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Discovery", desc: "Understanding your business goals and technical requirements." },
  { id: "02", title: "Strategy", desc: "Architecting the solution and defining the implementation roadmap." },
  { id: "03", title: "Design", desc: "Creating premium user interfaces and seamless experiences." },
  { id: "04", title: "Development", desc: "Building scalable, high-performance software." },
  { id: "05", title: "AI Training", desc: "Customizing and fine-tuning AI models for your specific use cases." },
  { id: "06", title: "Testing", desc: "Rigorous quality assurance and edge-case handling." },
  { id: "07", title: "Deployment", desc: "Smooth launch with zero downtime." },
  { id: "08", title: "Continuous Optimization", desc: "Monitoring, refining, and scaling the solution." },
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-[#0A0A0A] relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our <span className="text-gradient">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl"
          >
            A meticulous, engineering-driven approach to delivering world-class software and AI solutions.
          </motion.p>
        </div>

        <div className="relative border-l border-gold/20 pl-8 md:pl-16 space-y-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-black border-2 border-gold flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                <div className="text-gold font-mono text-xl md:text-2xl font-bold shrink-0">
                  {step.id}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

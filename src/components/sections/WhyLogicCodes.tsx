"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Clock, Infinity, Smartphone, Database } from "lucide-react";

const advantages = [
  { title: "Faster response times", icon: Zap, colSpan: "md:col-span-2 md:row-span-2", bg: "bg-gradient-to-br from-black to-[#1a1a1a]" },
  { title: "Lower operational costs", icon: Database, colSpan: "md:col-span-1 md:row-span-1", bg: "bg-black/50" },
  { title: "24/7 AI support", icon: Infinity, colSpan: "md:col-span-1 md:row-span-1", bg: "bg-black/50" },
  { title: "Custom-built solutions", icon: Smartphone, colSpan: "md:col-span-1 md:row-span-1", bg: "bg-black/50" },
  { title: "Scalable infrastructure", icon: Clock, colSpan: "md:col-span-1 md:row-span-1", bg: "bg-black/50" },
  { title: "Secure architecture", icon: Shield, colSpan: "md:col-span-2 md:row-span-1", bg: "bg-gradient-to-r from-gold/10 to-black" },
];

export function WhyLogicCodes() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why Choose <span className="text-gradient">Logic Codes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            We don't just build software; we engineer competitive advantages that allow your business to outpace the competition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-6 max-w-6xl mx-auto">
          {advantages.map((adv, idx) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-3xl p-8 flex flex-col justify-between group ${adv.colSpan} ${adv.bg} relative overflow-hidden`}
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-500">
                <adv.icon size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white mt-4">{adv.title}</h3>
              
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

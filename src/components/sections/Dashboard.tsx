"use client";

import { motion } from "framer-motion";

export function Dashboard() {
  return (
    <section className="py-32 bg-background relative border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Real-time <span className="text-gradient">Analytics</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Monitor your business performance with beautiful, custom-built dashboards that provide instant actionable insights.
          </motion.p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-4 md:p-8 border border-white/10 shadow-2xl overflow-hidden max-w-5xl mx-auto"
        >
          {/* Mock Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10" />
              <div>
                <div className="h-4 w-32 bg-white/10 rounded mb-2" />
                <div className="h-3 w-20 bg-white/5 rounded" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-8 bg-white/5 rounded-full" />
              <div className="h-8 w-8 bg-white/5 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Mock Stat Cards */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-6">
                <div className="h-3 w-24 bg-white/10 rounded mb-4" />
                <div className="h-8 w-32 bg-white/20 rounded mb-2" />
                <div className="h-3 w-16 bg-gold/50 rounded" />
              </div>
            ))}
          </div>

          {/* Mock Chart Area */}
          <div className="bg-white/5 border border-white/5 rounded-2xl p-6 h-64 flex items-end justify-between gap-2 md:gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent pointer-events-none" />
            
            {/* Animated Bars */}
            {[40, 60, 45, 80, 55, 90, 70, 100, 85, 95, 75, 85].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.05 }}
                className="w-full bg-gold/80 rounded-t-sm"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

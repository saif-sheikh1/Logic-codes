"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Code, LineChart } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-semibold mb-6">
              Enterprise AI & Web Solutions
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Automate. <br />
            <span className="text-gradient">Scale.</span> Grow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
          >
            Logic Codes helps businesses automate customer interactions, streamline operations, and increase revenue using state-of-the-art AI and custom software solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contact"
              className="px-8 py-4 bg-gold text-black font-semibold rounded-full hover:bg-gold-light transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)]"
            >
              Book Free Consultation
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center justify-center"
            >
              View Our Services
            </Link>
          </motion.div>
        </div>

        {/* Right Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative hidden lg:block"
        >
          {/* Main Dashboard Card */}
          <div className="glass-card rounded-2xl p-6 relative z-20">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Active AI Agents</h3>
                  <p className="text-xs text-gray-400">Handling 432 live calls</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">Online</span>
            </div>

            <div className="space-y-4">
              {[
                { title: "Revenue Growth", value: "+248%", icon: LineChart, color: "text-blue-400", bg: "bg-blue-400/10" },
                { title: "Leads Generated", value: "1,204", icon: Bot, color: "text-purple-400", bg: "bg-purple-400/10" },
                { title: "Tasks Automated", value: "14.2k", icon: Code, color: "text-gold", bg: "bg-gold/10" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                      <stat.icon size={20} />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{stat.title}</span>
                  </div>
                  <span className="text-white font-bold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Elements behind */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass-card p-4 rounded-xl z-30"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gold animate-ping" />
              <p className="text-sm text-white font-medium">Closing deal #482</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 glass-card p-4 rounded-xl z-30"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-green-500/20 text-green-400">
                <LineChart size={16} />
              </div>
              <div>
                <p className="text-sm text-white font-medium">+ $4,200</p>
                <p className="text-xs text-gray-400">Just now</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

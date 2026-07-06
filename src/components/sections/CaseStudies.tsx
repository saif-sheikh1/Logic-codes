"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const studies = [
  {
    industry: "E-Commerce",
    challenge: "High cart abandonment and slow customer service response times.",
    solution: "Deployed an AI Chatbot and SMS cart recovery automation.",
    results: "+34% Sales Recovery, 24/7 Support Resolution.",
    metric: "+34%",
  },
  {
    industry: "Healthcare",
    challenge: "Overwhelmed front desk with appointment scheduling.",
    solution: "Custom AI Voice Agent handling inbound calls and booking.",
    results: "Reduced wait times to 0s, 40 hrs/week saved.",
    metric: "40h",
  },
  {
    industry: "Real Estate",
    challenge: "Inconsistent lead follow-up and tracking.",
    solution: "Automated CRM workflow with instant multi-channel outreach.",
    results: "3x Increase in Qualified Appointments.",
    metric: "3x",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Proven <span className="text-gradient">Results</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg"
            >
              See how we've transformed businesses across various industries with our intelligent solutions.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="#contact" className="text-gold font-semibold hover:text-gold-light flex items-center gap-2 group">
              Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {studies.map((study, idx) => (
            <motion.div
              key={study.industry}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-8 flex flex-col h-full border-t border-gold/30 hover:border-gold transition-colors duration-300"
            >
              <div className="text-sm text-gold font-bold uppercase tracking-wider mb-8">
                {study.industry}
              </div>
              
              <div className="mb-6">
                <span className="text-gray-500 text-sm block mb-1">Challenge</span>
                <p className="text-white font-medium">{study.challenge}</p>
              </div>

              <div className="mb-8">
                <span className="text-gray-500 text-sm block mb-1">Solution</span>
                <p className="text-gray-300">{study.solution}</p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-gray-500 text-sm block mb-1">Impact</span>
                  <p className="text-gold font-semibold">{study.results}</p>
                </div>
                <div className="text-3xl font-black text-white/20">
                  {study.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

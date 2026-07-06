"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is an AI Voice Agent?",
    answer: "An AI Voice Agent is an intelligent system capable of holding natural, human-like phone conversations. It can handle customer support, schedule appointments, and even conduct outbound sales calls 24/7 without fatigue.",
  },
  {
    question: "How long does a typical web development project take?",
    answer: "Depending on the complexity, a premium web application typically takes between 4 to 12 weeks from strategy to deployment. We provide a detailed timeline during the discovery phase.",
  },
  {
    question: "Can your AI solutions integrate with our existing CRM?",
    answer: "Yes. We specialize in building seamless integrations with popular CRMs like Salesforce, HubSpot, GoHighLevel, and custom systems using robust APIs.",
  },
  {
    question: "Do you offer ongoing support after deployment?",
    answer: "Absolutely. We offer comprehensive continuous optimization and support plans to ensure your software and AI agents perform perfectly as your business scales.",
  },
  {
    question: "Are your AI systems secure and compliant?",
    answer: "Security is our top priority. We implement enterprise-grade encryption, strict access controls, and ensure compliance with relevant data protection regulations (like GDPR or HIPAA when applicable).",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-6 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gold shrink-0"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechFlow",
    content: "Logic Codes transformed our customer support. The AI agent handles 80% of inquiries perfectly, allowing our human team to focus on complex issues. Incredible ROI.",
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthStack",
    content: "The custom web app they built for us is a masterpiece. It's blazing fast, stunningly beautiful, and the automated workflows they integrated saved us two full-time hires.",
  },
  {
    name: "Elena Rodriguez",
    role: "VP Operations, Nexus Real Estate",
    content: "Working with Logic Codes was the best decision we made this year. Their technical expertise is unmatched, and they delivered exactly what they promised, ahead of schedule.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Client <span className="text-gradient">Success</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col relative"
            >
              <div className="flex text-gold mb-6 gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-8 italic flex-grow">
                "{test.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full border border-white/20 flex items-center justify-center text-white font-bold">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{test.name}</h4>
                  <p className="text-gold text-sm">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

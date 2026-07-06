"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: 500, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "AI Availability", value: 24, suffix: "/7" },
  { label: "Industries Served", value: 15, suffix: "+" },
];

export function TrustedBy() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <section className="py-20 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 z-10 relative">
        <p className="text-center text-sm font-semibold text-gold tracking-widest uppercase mb-12">
          Trusted by Innovative Companies Worldwide
        </p>

        {/* Marquee Logos */}
        <div className="relative flex overflow-x-hidden mb-24 mask-image-linear">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
            {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
              <span key={`logo-1-${idx}`} className="text-2xl font-bold text-white/30 tracking-tighter">
                ACME CORP
              </span>
            ))}
            {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
              <span key={`logo-2-${idx}`} className="text-2xl font-bold text-white/30 tracking-tighter">
                GLOBAL AI
              </span>
            ))}
            {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
              <span key={`logo-3-${idx}`} className="text-2xl font-bold text-white/30 tracking-tighter">
                TECH FLOW
              </span>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 py-4">
             {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
              <span key={`logo-4-${idx}`} className="text-2xl font-bold text-white/30 tracking-tighter">
                ACME CORP
              </span>
            ))}
             {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
              <span key={`logo-5-${idx}`} className="text-2xl font-bold text-white/30 tracking-tighter">
                GLOBAL AI
              </span>
            ))}
            {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
              <span key={`logo-6-${idx}`} className="text-2xl font-bold text-white/30 tracking-tighter">
                TECH FLOW
              </span>
            ))}
          </div>
        </div>

        {/* Animated Counters */}
        {hasMounted && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center">
                  <Counter from={0} to={stat.value} duration={2} />
                  <span className="text-gold">{stat.suffix}</span>
                </div>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .mask-image-linear {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}

// Simple counter component
function Counter({ from, to, duration }: { from: number; to: number; duration: number }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [from, to, duration]);

  return <span>{count}</span>;
}

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "6+", label: "Months hands-on training", sub: "React Native • Expo • TS" },
  { value: "02", label: "Apps shipped", sub: "LAZA • Instagram Clone" },
  { value: "15+", label: "Core features built", sub: "Auth • Feeds • Cart • DMs" },
  { value: "10+", label: "Tools in daily use", sub: "Supabase • Firebase • Git" },
];

export const StatsBand: React.FC = () => {
  return (
    <section className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-[#59605D]"
        >
          Still scrolling? Good — numbers don&apos;t lie
        </motion.p>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="glass-card glass-card-hover p-6 text-center"
            >
              <div className="font-serif text-4xl sm:text-5xl text-[#1E4738]">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-[#1D1D1F]">
                {stat.label}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#9C968A]">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

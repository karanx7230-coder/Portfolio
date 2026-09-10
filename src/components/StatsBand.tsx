import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "6+", label: "Months hands-on training", sub: "React Native • Expo • TS" },
  { value: "02", label: "Resume projects", sub: "LAZA • Instagram • APK" },
  { value: "03", label: "Client apps contributed", sub: "Features • Releases • UI" },
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
        <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-[#1D1D1F]/10 divide-x divide-[#1D1D1F]/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: idx * 0.07 }}
              className="px-4 py-8 sm:py-10 text-center"
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

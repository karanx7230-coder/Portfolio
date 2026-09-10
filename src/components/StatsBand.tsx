import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { to: 6, pad: 0, suffix: "+", label: "Months hands-on training", sub: "React Native • Expo • TS" },
  { to: 2, pad: 2, suffix: "", label: "Resume projects", sub: "LAZA • Instagram • APK" },
  { to: 3, pad: 2, suffix: "", label: "Contributed builds", sub: "Features • Releases • UI" },
  { to: 10, pad: 0, suffix: "+", label: "Core technologies", sub: "Supabase • Firebase • Git" },
];

const CountUp: React.FC<{ to: number; pad: number; suffix: string }> = ({
  to,
  pad,
  suffix,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {String(val).padStart(pad, "0")}
      {suffix}
    </span>
  );
};

export const StatsBand: React.FC = () => {
  return (
    <section className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-[#1D1D1F]/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: idx * 0.07 }}
              className="group px-4 py-8 sm:py-10 text-center border-[#1D1D1F]/10 border-l first:border-l-0 max-lg:[&:nth-child(3)]:border-l-0 max-lg:[&:nth-child(n+3)]:border-t transition-colors duration-300 hover:bg-white/60"
            >
              <div className="font-serif text-4xl sm:text-5xl text-[#1E4738] group-hover:text-[#C5A059] transition-colors duration-300">
                <CountUp to={stat.to} pad={stat.pad} suffix={stat.suffix} />
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

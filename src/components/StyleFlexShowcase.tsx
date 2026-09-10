import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const StyleFlexShowcase: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="mt-5 space-y-3"
      aria-label="Styling and Flexbox capabilities"
    >
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-[#9C968A]">
        <span>STYLE SYSTEM</span>
        <span className="text-[#C5A059]">FLEX / 12 COL</span>
      </div>
      <div className="flex h-20 items-end gap-1.5 rounded-2xl bg-[#F1F3F0] p-3 overflow-hidden">
        {["w-1/4", "w-2/5", "w-1/3", "w-1/2", "w-3/4"].map((width, index) => (
          <motion.span
            key={width}
            className={`block ${width} rounded-full bg-gradient-to-t from-[#1E4738] to-[#C5A059]`}
            initial={{ height: 10, opacity: 0.45 }}
            whileInView={{
              height: [18, 30 + index * 7, 22 + index * 4],
              opacity: 1,
            }}
            viewport={{ once: true, amount: 0.6 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 1.1, delay: index * 0.1, ease: "easeOut" }
            }
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-mono text-[#9C968A]">
        <span>RESPONSIVE</span>
        <span>SPACING</span>
        <span>MOTION</span>
      </div>
    </div>
  );
};

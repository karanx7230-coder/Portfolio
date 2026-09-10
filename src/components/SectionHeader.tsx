import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}

/** Single canonical section header — one language across the whole page. */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  sub,
  align = "left",
}) => {
  const centered = align === "center";
  return (
    <div
      className={`mb-14 sm:mb-20 ${centered ? "text-center flex flex-col items-center" : "flex flex-col items-start"}`}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] mb-4"
      >
        <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
        {eyebrow}
      </motion.span>
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "110%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl font-normal text-[#1D1D1F] tracking-tight"
        >
          {title}
        </motion.h2>
      </div>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`mt-4 max-w-xl text-base sm:text-lg font-light leading-relaxed text-[#59605D] ${centered ? "text-center" : ""}`}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
};

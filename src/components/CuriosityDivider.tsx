import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface CuriosityDividerProps {
  eyebrow: string;
  title: string;
  hint: string;
  chapter: string;
}

export const CuriosityDivider: React.FC<CuriosityDividerProps> = ({
  eyebrow,
  title,
  hint,
  chapter,
}) => {
  return (
    <div className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C5A059]/40" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#C5A059]">
              {chapter} • {eyebrow}
            </span>
            <span className="h-px w-10 bg-[#C5A059]/40" />
          </div>
          <h3 className="font-serif text-2xl sm:text-4xl font-normal leading-tight text-[#1D1D1F]">
            {title}
          </h3>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-[#59605D]">
            {hint}
          </p>
          <div className="mt-6 flex justify-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A059]/30 bg-white/80 text-[#1E4738]">
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

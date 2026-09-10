import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../data/personalInfo";

export const CreativeVisualShowcase: React.FC = () => {

  return (
    <div
      className="relative mx-auto flex min-h-[430px] w-full max-w-md items-center justify-center overflow-hidden rounded-[2rem] bg-[#F1F3EE] shadow-[0_30px_80px_-42px_rgba(30,71,56,0.55)]"
      aria-label="Abstract visual composition representing thoughtful interface design"
    >
      <motion.div
        className="absolute -left-2 top-1/2 z-20 -translate-y-1/2 whitespace-nowrap font-serif text-[clamp(2.4rem,7vw,4.8rem)] font-medium leading-none tracking-[-0.04em] text-[#F8F6EF] drop-shadow-[0_8px_18px_rgba(15,23,42,0.22)]"
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {PERSONAL_INFO.name}
      </motion.div>
    </div>
  );
};

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const CreativeVisualShowcase: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative mx-auto flex min-h-[430px] w-full max-w-md items-center justify-center overflow-hidden rounded-[2rem] bg-[#F1F3EE] shadow-[0_30px_80px_-42px_rgba(30,71,56,0.55)]"
      aria-label="Abstract visual composition representing thoughtful interface design"
    >
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(30,71,56,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(30,71,56,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />

      <motion.div
        className="absolute -right-12 -top-8 h-64 w-64 rounded-[42%_58%_55%_45%] bg-[#D8E5D8] blur-[1px]"
        animate={reduceMotion ? undefined : { rotate: [0, 18, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-12 h-60 w-60 rounded-[58%_42%_38%_62%] bg-[#E7D7B5] blur-[1px]"
        animate={reduceMotion ? undefined : { rotate: [0, -16, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      <div className="relative z-10 h-[310px] w-[310px]">
        <motion.div
          className="absolute left-4 top-8 h-40 w-40 rounded-[3rem] bg-[#1E4738] shadow-[0_24px_35px_-24px_rgba(30,71,56,0.9)]"
          initial={{ opacity: 0, x: -20, rotate: -12 }}
          whileInView={{ opacity: 1, x: 0, rotate: -8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        >
          <div className="absolute inset-6 rounded-[2rem] border border-white/25" />
          <div className="absolute bottom-8 left-8 h-3 w-16 rounded-full bg-[#C5A059]" />
        </motion.div>

        <motion.div
          className="absolute bottom-4 right-2 h-48 w-48 rounded-[5rem] bg-[#C5A059] shadow-[0_24px_35px_-24px_rgba(122,91,24,0.75)]"
          initial={{ opacity: 0, x: 20, rotate: 14 }}
          whileInView={{ opacity: 1, x: 0, rotate: 8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          animate={reduceMotion ? undefined : { y: [0, 9, 0] }}
        >
          <div className="absolute left-8 top-8 h-16 w-16 rounded-full bg-[#F7F4EA]" />
          <div className="absolute bottom-8 right-8 h-3 w-20 rounded-full bg-[#1E4738]" />
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-[2.25rem] bg-[#F8F6EF] p-5 shadow-[0_25px_40px_-20px_rgba(30,71,56,0.5)]"
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex h-full flex-col justify-between">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#1E4738]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#C5A059]" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full rounded-full bg-[#DCE6DB]" />
              <div className="h-2 w-3/4 rounded-full bg-[#DCE6DB]" />
              <div className="h-2 w-1/2 rounded-full bg-[#C5A059]" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
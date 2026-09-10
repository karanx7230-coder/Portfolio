import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";
import { PERSONAL_INFO } from "../data/personalInfo";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { ReactAtom } from "./ReactAtom";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yAtom = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-32 md:pt-40 md:pb-36 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4"
            >
              <Smartphone className="w-5 h-5 text-[#C5A059]" />
              <span className="font-serif text-2xl sm:text-3xl text-[#1D1D1F]">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[#C5A059] text-lg">•</span>
              <span className="text-[#1E4738] font-mono text-xs uppercase tracking-[0.2em] font-medium">
                {PERSONAL_INFO.title}
              </span>
            </motion.div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1D1D1F] leading-[1.08] tracking-tight mb-8 max-w-4xl">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Building Clean,
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Scalable Mobile Apps
                </motion.span>
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[#59605D] text-base sm:text-lg leading-relaxed max-w-xl font-light mb-10"
            >
              React Native developer focused on building clean, responsive cross-platform apps with TypeScript, Expo, Supabase, Firebase, and REST APIs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#0B0B0D] hover:bg-[#1E4738] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] text-white font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#1D1D1F]/15 hover:border-[#1D1D1F]/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] text-[#1D1D1F] font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#1E4738]" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#1D1D1F]/15 hover:border-[#1D1D1F]/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] text-[#1D1D1F] font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#1E4738]" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: yAtom }}
            className="lg:col-span-5 w-full flex flex-col items-center gap-5"
          >
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.24em] text-[#59605D]">
              <span className="text-[11px] uppercase tracking-[0.25em]">
                Mohali • India
              </span>
            </div>
            <ReactAtom />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

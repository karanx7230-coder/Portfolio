import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Smartphone, ChevronDown } from "lucide-react";
import { PERSONAL_INFO } from "../data/personalInfo";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import SplitText from "./ReactBits/SplitText";
import BlurText from "./ReactBits/BlurText";
import { ReactAtom } from "./ReactAtom";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
              className="flex items-center gap-3 mb-4"
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
            <SplitText
              text="Building Modern Mobile Experiences"
              tag="h1"
              splitType="words"
              delay={125}
              duration={1.55}
              from={{ opacity: 0, y: 64, rotateX: -18 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1D1D1F] leading-[1.08] tracking-tight mb-8 max-w-4xl"
            />
            <BlurText
              text="Passionate cross-platform app developer focused on crafting clean, high-performance mobile interfaces using React Native, TypeScript, and Expo. Experienced with Supabase, Firebase, REST APIs, and structured navigation architectures."
              animateBy="words"
              delay={42}
              stepDuration={0.48}
              className="text-[#59605D] text-base sm:text-lg leading-relaxed max-w-xl font-light mb-10"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#1E4738] hover:bg-[#2D5D4A] text-white font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/70 hover:bg-[#E5EEE8] text-[#1D1D1F] font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#1E4738]" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/70 hover:bg-[#E5EEE8] text-[#1D1D1F] font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300"
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
            className="lg:col-span-5 w-full flex flex-col items-center gap-5"
          >
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.24em] text-[#59605D]">
              <span className="text-[11px] uppercase tracking-[0.25em]">
                Mohali • India
              </span>
            </div>
            <ReactAtom />
            <div className="glass-card px-5 py-4 text-center max-w-xs">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#1E4738]">
                Scroll — the best part is buried below
              </p>
              <p className="mt-1 text-xs text-[#59605D] font-light">
                2 resume builds • 3 client apps • keep going
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#59605D] hover:text-[#1E4738] transition-colors"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] whitespace-nowrap">
          Scroll to decode my story
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A059]/30 bg-white/80">
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </span>
      </motion.a>
    </section>
  );
};

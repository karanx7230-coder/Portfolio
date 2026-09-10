import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/personalInfo';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Cinematic Scroll-Linked Transformations
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      {/* Quiet Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Quiet Luxury Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Understated & Premium Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#121317] border border-[#C5A059]/20 text-[#C5A059] text-xs font-mono mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="uppercase tracking-[0.2em] text-[11px] font-medium text-[#D6D1C4]">
                {PERSONAL_INFO.availability}
              </span>
            </motion.div>

            {/* Sub-header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#9C968A] mb-4"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-[#C5A059]/40">•</span>
              <span className="text-[#E6E1D5] font-medium">{PERSONAL_INFO.title}</span>
            </motion.div>

            {/* Main Headline (Serif Typography) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F5F2EB] leading-[1.08] tracking-tight mb-8"
            >
              Building Modern <br />
              <span className="italic text-[#C5A059]">Mobile Experiences</span>
            </motion.h1>

            {/* Intro Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#D6D1C4] text-base sm:text-lg leading-relaxed max-w-xl font-light mb-10"
            >
              Passionate cross-platform app developer focused on crafting clean, high-performance mobile interfaces using <span className="text-[#F5F2EB] font-normal">React Native</span>, <span className="text-[#F5F2EB] font-normal">TypeScript</span>, and <span className="text-[#F5F2EB] font-normal">Expo</span>. Experienced with Supabase, Firebase, REST APIs, and structured navigation architectures.
            </motion.p>

            {/* Quiet Luxury Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-none bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0B0D] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-none bg-[#121317] border border-[#C5A059]/25 hover:border-[#C5A059]/60 text-[#E6E1D5] font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-none bg-[#121317] border border-[#C5A059]/25 hover:border-[#C5A059]/60 text-[#E6E1D5] font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>LinkedIn</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Refined Terminal Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Subtle Muted Frame */}
              <div className="relative rounded-none bg-[#121317] border border-[#C5A059]/25 shadow-2xl overflow-hidden font-mono text-xs">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0B0B0D] border-b border-[#C5A059]/15">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#7A2234]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C5A059]/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1E4738]" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#9C968A]">
                    developer.ts
                  </span>
                  <span className="text-[10px] font-mono text-[#C5A059]/70">
                    TSX
                  </span>
                </div>

                {/* Code Snippet */}
                <div className="p-6 overflow-x-auto leading-relaxed text-[#D6D1C4]">
                  <div className="flex gap-4">
                    <div className="select-none text-[#9C968A]/40 text-right pr-2 border-r border-[#C5A059]/10 flex flex-col font-mono text-xs">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                      <span>8</span>
                    </div>

                    <pre className="font-mono text-xs text-[#E6E1D5]">
                      <code>
                        <span className="text-[#C5A059]">const</span> <span className="text-[#F5F2EB]">developer</span> = &#123;{'\n'}
                        {'  '}<span className="text-[#9C968A]">name</span>: <span className="text-[#C5A059]">"Karanpreet Singh"</span>,{'\n'}
                        {'  '}<span className="text-[#9C968A]">role</span>: <span className="text-[#C5A059]">"React Native Developer"</span>,{'\n'}
                        {'  '}<span className="text-[#9C968A]">stack</span>: [{'\n'}
                        {'    '}<span className="text-[#E6E1D5]">"React Native"</span>,{'\n'}
                        {'    '}<span className="text-[#E6E1D5]">"TypeScript"</span>,{'\n'}
                        {'    '}<span className="text-[#E6E1D5]">"Expo"</span>{'\n'}
                        {'  '}]{'\n'}
                        &#125;;
                      </code>
                    </pre>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="px-4 py-2.5 bg-[#0B0B0D] border-t border-[#C5A059]/15 flex items-center justify-between text-[10px] font-mono text-[#9C968A]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E4738]" />
                    <span>Quiet Luxury Architecture</span>
                  </span>
                  <span>UTF-8</span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

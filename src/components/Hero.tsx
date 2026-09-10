import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Sparkles, Code, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/personalInfo';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rose-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold tracking-wide uppercase text-[11px]">{PERSONAL_INFO.availability}</span>
            </motion.div>

            {/* Sub-header Name & Title */}
            <div className="flex items-center gap-2 text-rose-400 font-mono text-sm sm:text-base font-medium mb-3">
              <Smartphone className="w-4 h-4 text-rose-500" />
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300 font-semibold">{PERSONAL_INFO.title}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Building Modern <br className="hidden sm:inline" />
              <span className="text-gradient-accent">Mobile Experiences</span>
            </h1>

            {/* Subtitle / Intro */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Passionate cross-platform app developer focused on crafting clean, high-performance mobile interfaces using <span className="text-white font-medium">React Native</span>, <span className="text-white font-medium">TypeScript</span>, and <span className="text-white font-medium">Expo</span>. Experienced with Supabase, Firebase, REST APIs, and structured navigation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 text-white font-medium text-sm shadow-lg shadow-rose-600/25 hover:shadow-rose-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-medium text-sm hover:bg-slate-800/80 transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-medium text-sm hover:bg-slate-800/80 transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick highlight tags */}
            <div className="mt-10 pt-6 border-t border-slate-800/60 flex flex-wrap gap-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" /> React Native CLI & Expo
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-500" /> Supabase & Firebase
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Reusable UI Architecture
              </span>
            </div>
          </motion.div>

          {/* Right Hero Code Terminal Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Terminal Frame */}
              <div className="relative rounded-2xl bg-slate-950 border border-slate-800/90 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs px-3 py-0.5 rounded-md bg-slate-950/60 border border-slate-800/80">
                    <Code className="w-3.5 h-3.5 text-rose-400" />
                    <span>developer.ts</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500">
                    <Sparkles className="w-3 h-3 text-purple-400" /> TSX
                  </div>
                </div>

                {/* Body code snippet */}
                <div className="p-5 sm:p-6 overflow-x-auto leading-relaxed text-slate-300">
                  <div className="flex gap-4">
                    <div className="select-none text-slate-600 text-right pr-2 border-r border-slate-800/80 flex flex-col font-mono text-xs">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                      <span>8</span>
                      <span>9</span>
                      <span>10</span>
                      <span>11</span>
                    </div>

                    <pre className="font-mono text-xs sm:text-sm text-slate-200">
                      <code>
                        <span className="text-purple-400">interface</span> <span className="text-amber-300">Developer</span> &#123;{'\n'}
                        {'  '}<span className="text-rose-300">name</span>: <span className="text-emerald-400">string</span>;{'\n'}
                        {'  '}<span className="text-rose-300">role</span>: <span className="text-emerald-400">string</span>;{'\n'}
                        {'  '}<span className="text-rose-300">location</span>: <span className="text-emerald-400">string</span>;{'\n'}
                        {'  '}<span className="text-rose-300">stack</span>: <span className="text-emerald-400">string</span>[];{'\n'}
                        &#125;{'\n'}{'\n'}
                        <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span>: <span className="text-amber-300">Developer</span> = &#123;{'\n'}
                        {'  '}<span className="text-rose-400">name</span>: <span className="text-emerald-300">"Karanpreet Singh"</span>,{'\n'}
                        {'  '}<span className="text-rose-400">role</span>: <span className="text-emerald-300">"React Native Developer"</span>,{'\n'}
                        {'  '}<span className="text-rose-400">stack</span>: [<span className="text-amber-300">"React Native"</span>, <span className="text-amber-300">"TypeScript"</span>, <span className="text-amber-300">"Expo"</span>]{'\n'}
                        &#125;;
                      </code>
                    </pre>
                  </div>
                </div>

                {/* Footer status bar */}
                <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Ready to build</span>
                  </span>
                  <span className="text-slate-500 font-mono">UTF-8 • TS 5.4</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, Layers, Layout, MapPin, Calendar, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/personalInfo';

const highlightCards = [
  {
    icon: Smartphone,
    title: 'React Native',
    description: 'Cross-platform iOS & Android mobile application development with CLI and Expo workflows.',
    color: 'from-rose-500/20 to-rose-600/5',
    borderColor: 'group-hover:border-rose-500/40',
    iconColor: 'text-rose-400'
  },
  {
    icon: Code,
    title: 'TypeScript',
    description: 'Strongly-typed architecture, interfaces, strict type-checking, and maintainable mobile codebase.',
    color: 'from-blue-500/20 to-blue-600/5',
    borderColor: 'group-hover:border-blue-500/40',
    iconColor: 'text-blue-400'
  },
  {
    icon: Layers,
    title: 'Cross-Platform Apps',
    description: 'Seamless navigation, state management, REST API integration, and cloud backends.',
    color: 'from-purple-500/20 to-purple-600/5',
    borderColor: 'group-hover:border-purple-500/40',
    iconColor: 'text-purple-400'
  },
  {
    icon: Layout,
    title: 'Mobile UI',
    description: 'Pixel-perfect responsive layouts, custom design systems, Flexbox engine, and smooth animations.',
    color: 'from-emerald-500/20 to-emerald-600/5',
    borderColor: 'group-hover:border-emerald-500/40',
    iconColor: 'text-emerald-400'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-rose-400 text-xs font-mono mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            <span>ABOUT ME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            React Native Developer based in Mohali
          </motion.h2>
        </div>

        {/* Top Brief Summary Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 sm:p-8 mb-12 border border-slate-800/80 bg-slate-900/60 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8">
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-4">
                {PERSONAL_INFO.summary}
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" /> {PERSONAL_INFO.location}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" /> 6 Months Practical Training
                </span>
                <span className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Award className="w-3.5 h-3.5 text-amber-400" /> Trainee @ Apptechies
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3 justify-center border-t md:border-t-0 md:border-l border-slate-800/80 pt-6 md:pt-0 md:pl-8">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Core Tech Focus</div>
              <div className="flex flex-wrap gap-1.5">
                {['React Native', 'TypeScript', 'Expo', 'Supabase', 'Firebase', 'REST APIs'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlightCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group glass-card glass-card-hover rounded-xl p-6 relative overflow-hidden flex flex-col justify-between border border-slate-800/80 ${card.borderColor}`}
              >
                {/* Background Gradient Fill on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div>
                  <div className={`w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 ${card.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-slate-300">
                  <span>RESUME SUPPORTED</span>
                  <span>✓</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Clock, Building2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/personalInfo';

export const Education: React.FC = () => {
  const edu = PERSONAL_INFO.education;

  return (
    <section id="education" className="py-20 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-purple-400 text-xs font-mono mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Education
          </motion.h2>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 bg-slate-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-purple-400 flex-shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span>{edu.institution}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
                  <Clock className="w-3 h-3" />
                  <span>{edu.status}</span>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-800 text-right">
              <span className="text-xs font-mono text-slate-400 block mb-1">Computer Science & Apps</span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 inline-block">
                IN PROGRESS
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

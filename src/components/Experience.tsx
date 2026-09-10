import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/personalInfo';

export const Experience: React.FC = () => {
  const training = PERSONAL_INFO.training;

  return (
    <section id="experience" className="py-20 relative scroll-mt-16 bg-slate-950/40 border-y border-slate-800/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-rose-400 text-xs font-mono mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL TRAINING</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Training & Experience
          </motion.h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Hands-on app development training and real project implementation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Timeline Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 bg-slate-900/60 overflow-hidden mb-8"
          >
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-medium mb-2">
                  <span>PRESENT ROLE</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  {training.role}
                </h3>
                <p className="text-base text-slate-300 font-medium">
                  {training.company}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 text-xs font-mono text-slate-400">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-rose-400" />
                  <span>{training.period}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>{training.location}</span>
                </span>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Key Responsibilities & Learning Focus
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {training.responsibilities.map((resp, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compact Training Certificate Badge */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">
                    {training.certificateTitle}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Issued by {training.issuer}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800">
                VERIFIED
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

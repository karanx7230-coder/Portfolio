import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code2, Server, Layout, Wrench, Sparkles } from 'lucide-react';
import { TECH_STACK } from '../data/technologies';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Smartphone,
  Code2,
  Server,
  Layout,
  Wrench
};

export const TechStack: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative scroll-mt-16 bg-slate-950/40 border-y border-slate-800/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-purple-400 text-xs font-mono mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECH STACK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Technologies & Mobile Skillset
          </motion.h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Grouped technologies and frameworks used to engineer cross-platform mobile apps.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((category, idx) => {
            const IconComponent = iconMap[category.iconName] || Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 bg-slate-900/50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-rose-400 group-hover:border-rose-500/50 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.2)] transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500">{category.skills.length} Items</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                          skill.featured
                            ? 'bg-slate-950 text-slate-100 border border-rose-500/30 hover:border-rose-500/60 shadow-[0_0_10px_rgba(244,63,94,0.1)]'
                            : 'bg-slate-950/60 text-slate-300 border border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {skill.featured && <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />}
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>CATEGORY {idx + 1}</span>
                  <span className="text-slate-400">VERIFIED SKILLS</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

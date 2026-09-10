import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code2, Server, Layout, Wrench } from 'lucide-react';
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
    <section id="skills" className="py-24 relative scroll-mt-16 bg-[#0B0B0D]/60 border-y border-[#C5A059]/15">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] mb-3"
          >
            02 • SKILLSET
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F2EB] tracking-tight"
          >
            Technologies & Frameworks
          </motion.h2>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((category, idx) => {
            const IconComponent = iconMap[category.iconName] || Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group glass-card glass-card-hover rounded-none p-6 border border-[#C5A059]/15 bg-[#121317]/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-[#0B0B0D] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-normal text-[#F5F2EB] group-hover:text-[#C5A059] transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[#9C968A] uppercase tracking-wider">{category.skills.length} Technologies</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#9C968A] mb-6 leading-relaxed font-light">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-3 py-1 text-xs font-mono transition-colors duration-200 ${
                          skill.featured
                            ? 'bg-[#0B0B0D] text-[#F5F2EB] border border-[#C5A059]/40'
                            : 'bg-[#0B0B0D]/60 text-[#D6D1C4] border border-[#C5A059]/15'
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-3 border-t border-[#C5A059]/15 flex items-center justify-between text-[10px] font-mono text-[#9C968A]">
                  <span className="uppercase tracking-widest">CATEGORY 0{idx + 1}</span>
                  <span className="text-[#C5A059]/80">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

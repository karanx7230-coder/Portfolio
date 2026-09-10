import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Code2,
  Server,
  Layout,
  Wrench,
  Layers,
} from "lucide-react";
import { TECH_STACK } from "../data/technologies";
import ShinyText from "./ReactBits/ShinyText";
import ScrollReveal from "./ReactBits/ScrollReveal";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Smartphone,
  Code2,
  Server,
  Layout,
  Wrench,
  Layers,
};

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null,
  );

  return (
    <section
      id="skills"
      className="py-24 relative scroll-mt-16 bg-[#F0F3F0]/70"
    >
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
            <ShinyText
              text="Technologies & Frameworks"
              color="#1E4738"
              shineColor="#C5A059"
              speed={3.5}
            />
          </motion.h2>
        </div>

        <ScrollReveal
          containerClassName="mb-8"
          textClassName="text-[#1E4738]"
          enableBlur={false}
        >
          A considered toolkit for dependable mobile products.
        </ScrollReveal>
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
                onMouseEnter={() => setActiveCategory(category.title)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`group glass-card glass-card-hover rounded-none p-6 bg-white/70 flex flex-col justify-between transition-all duration-500 ${
                  activeCategory && activeCategory !== category.title
                    ? "opacity-45 scale-[0.985]"
                    : "opacity-100"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-[#E5EEE8] flex items-center justify-center text-[#C5A059]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-normal text-[#F5F2EB] group-hover:text-[#C5A059] transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[#9C968A] uppercase tracking-wider">
                        {category.skills.length} Technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#9C968A] mb-6 leading-relaxed font-light">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`skill-tag px-3 py-1 text-xs font-mono transition-all duration-200 ${
                          skill.featured
                            ? "bg-[#E5EEE8] text-[#1D1D1F]"
                            : "bg-[#F1F3F0] text-[#59605D]"
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-3 flex items-center justify-between text-[10px] font-mono text-[#9C968A]">
                  <span className="uppercase tracking-widest">
                    CATEGORY 0{idx + 1}
                  </span>
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

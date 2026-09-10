import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Code2,
  Server,
  Layout,
  Wrench,
  Layers,
  ArrowUpRight,
  Star,
} from "lucide-react";
import { TECH_STACK } from "../data/technologies";
import ShinyText from "./ReactBits/ShinyText";
import { CodeTerminal } from "./CodeTerminal";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Smartphone,
  Code2,
  Server,
  Layout,
  Wrench,
  Layers,
};

export const TechStack: React.FC = () => {
  const totalTools = TECH_STACK.reduce((n, c) => n + c.skills.length, 0);
  const dailyDrivers = TECH_STACK.reduce(
    (n, c) => n + c.skills.filter((s) => s.featured).length,
    0,
  );

  return (
    <section
      id="skills"
      className="pt-24 sm:pt-28 pb-14 sm:pb-16 relative scroll-mt-16 overflow-hidden"
    >
      {/* Ambient styling — no boxes, just atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] mb-3"
            >
              <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
              Skillset
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1F] tracking-tight"
            >
              <ShinyText
                text="Technologies & Frameworks"
                color="#1E4738"
                shineColor="#C5A059"
                speed={3.5}
              />
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#59605D]"
          >
            <span>
              <span className="font-serif text-2xl text-[#1E4738] normal-case tracking-normal">
                {TECH_STACK.length}
              </span>{" "}
              areas
            </span>
            <span className="h-8 w-px bg-[#1D1D1F]/10" />
            <span>
              <span className="font-serif text-2xl text-[#1E4738] normal-case tracking-normal">
                {totalTools}
              </span>{" "}
              tools
            </span>
            <span className="h-8 w-px bg-[#1D1D1F]/10" />
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-[#C5A059] text-[#C5A059]" />
              <span className="font-serif text-2xl text-[#1E4738] normal-case tracking-normal">
                {dailyDrivers}
              </span>{" "}
              daily
            </span>
          </motion.div>
        </div>

        <CodeTerminal />

        {/* Styled editorial list — still no boxes */}
        <div className="border-t border-[#1D1D1F]/10">
          {TECH_STACK.map((category, idx) => {
            const IconComponent = iconMap[category.iconName] || Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.04 }}
                className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start border-b border-[#1D1D1F]/10 py-8 sm:py-9 px-2 sm:px-5 -mx-2 sm:-mx-5 overflow-hidden rounded-2xl transition-all duration-300 hover:bg-white/75 hover:shadow-[0_24px_50px_-30px_rgba(30,71,56,0.35)] hover:-translate-y-0.5"
              >
                {/* Gold accent rail */}
                <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-[#C5A059] to-[#1E4738] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

                <div className="md:col-span-4 flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A059]" />
                  <span className="relative w-11 h-11 shrink-0 rounded-full bg-gradient-to-br from-[#E5EEE8] to-white ring-1 ring-[#C5A059]/25 flex items-center justify-center text-[#1E4738] shadow-sm transition-all duration-300 group-hover:bg-[#1E4738] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_12px_24px_-10px_rgba(30,71,56,0.6)]">
                    <span aria-hidden="true" className="absolute -inset-1.5 rounded-full border border-dashed border-[#C5A059]/60 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 animate-spin-slower transition-all duration-500" />
                    <IconComponent className="w-[18px] h-[18px]" />
                  </span>
                  <div>
                    <h3 className="font-serif text-[22px] text-[#1D1D1F] leading-tight decoration-[#C5A059]/60 decoration-2 underline-offset-4 group-hover:underline">
                      {category.title}
                    </h3>
                    <span className="mt-1.5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#9C968A]">
                      <span className="h-1 w-1 rounded-full bg-[#C5A059]" />
                      {category.skills.length} technologies
                    </span>
                  </div>
                </div>

                <p className="md:col-span-3 text-sm text-[#59605D] font-light leading-relaxed md:pt-1 md:border-l md:border-[#1D1D1F]/10 md:pl-5">
                  {category.description}
                </p>

                <div className="md:col-span-5 flex flex-wrap items-center gap-x-4 gap-y-3 md:pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      title={`${skill.name} — ${skill.level}`}
                      className="group/skill relative inline-flex cursor-default items-baseline gap-1.5 pb-0.5"
                    >
                      {skill.featured && (
                        <Star className="h-3 w-3 -mb-px fill-[#C5A059] text-[#C5A059]" />
                      )}
                      <span
                        className={
                          skill.featured
                            ? "font-mono text-sm font-semibold text-[#1E4738]"
                            : "font-mono text-sm text-[#41474A] group-hover/skill:text-[#1D1D1F]"
                        }
                      >
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#9C968A]/80">
                        {skill.level}
                      </span>
                      <span
                        className={`absolute -bottom-px left-0 h-[1.5px] w-full origin-left bg-gradient-to-r from-[#C5A059] to-[#1E4738] transition-transform duration-300 ${
                          skill.featured
                            ? "scale-x-100"
                            : "scale-x-0 group-hover/skill:scale-x-100"
                        }`}
                      />
                    </span>
                  ))}
                  <ArrowUpRight className="ml-auto h-4 w-4 text-[#C5A059] opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#9C968A]">
          <span className="inline-flex items-center gap-2">
            <Star className="h-3.5 w-3.5 fill-[#C5A059] text-[#C5A059]" />
            Daily driver
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#C5A059] to-[#1E4738]" />
            Core level
          </span>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { PROJECTS, CONTRIBUTIONS } from "../data/projects";
import type { Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import ShinyText from "./ReactBits/ShinyText";
import ScrollReveal from "./ReactBits/ScrollReveal";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 sm:py-32 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] mb-3"
          >
            <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
            Portfolio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1F] tracking-tight"
          >
            <ShinyText
              text="Featured Mobile Projects"
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
          Selected work from the resume shelf — designed, coded, and running as APKs.
        </ScrollReveal>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Real client contributions — honest scope */}
        <div className="mt-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#C5A059] mb-3"
          >
            Beyond the shelf • Client work
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-serif text-2xl sm:text-3xl text-[#1D1D1F] mb-2"
          >
            Also in production
          </motion.h3>
          <p className="max-w-2xl text-sm font-light text-[#59605D] leading-relaxed mb-8">
            I&apos;ve also worked on real apps like{" "}
            <span className="font-medium text-[#1D1D1F]">
              GentleHold, Truck Compliance, and DatePalop
            </span>
            , contributing to specific features rather than building the full
            apps.
          </p>

          <div className="border-t border-[#1D1D1F]/10">
            {CONTRIBUTIONS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 border-b border-[#1D1D1F]/10 py-7"
              >
                <div className="md:col-span-4 flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A059]" />
                  <div>
                    <h4 className="font-serif text-xl text-[#1D1D1F] leading-tight">
                      {item.app}
                    </h4>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-[#9C968A]">
                      {item.role}
                    </span>
                  </div>
                </div>
                <ul className="md:col-span-8 space-y-2.5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm font-light leading-relaxed text-[#1D1D1F]"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A059]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

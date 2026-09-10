import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "../data/projects";
import type { Project } from "../data/projects";
import { ProjectModal } from "./ProjectModal";
import { SectionHeader } from "./SectionHeader";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { PERSONAL_INFO } from "../data/personalInfo";

interface StudyContent {
  techLine: string;
  highlights: string[];
}

const CONTENT: Record<string, StudyContent> = {
  laza: {
    techLine: "React Native · TypeScript · React Navigation · Firebase",
    highlights: [
      "Authentication",
      "Product discovery",
      "Cart",
      "Wishlist",
      "Checkout",
    ],
  },
  "instagram-clone": {
    techLine: "React Native · Expo · TypeScript · Supabase",
    highlights: [
      "Feed",
      "Stories",
      "Reels",
      "Profiles",
      "Search",
      "Likes",
      "Chat",
      "Supabase integration",
    ],
  },
};

const CaseStudy: React.FC<{
  project: Project;
  index: string;
  onOpen: (p: Project) => void;
}> = ({ project, index, onOpen }) => {
  const content = CONTENT[project.id];
  return (
    <div className="py-16 sm:py-20 border-t border-[#1D1D1F]/10 first:border-t-0 first:pt-0">
      <div className="max-w-3xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-6xl sm:text-7xl text-[#1D1D1F]/10"
        >
          {index}
        </motion.span>
        <div className="overflow-hidden -mt-4">
          <motion.h3
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl text-[#1D1D1F] tracking-tight"
          >
            {project.title}
          </motion.h3>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-[#C5A059]"
        >
          {project.category}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-xl font-mono text-[13px] leading-relaxed text-[#1E4738]"
        >
          {content.techLine}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-xl text-[15px] font-light leading-relaxed text-[#59605D]"
        >
          {project.description}
        </motion.p>

        <ul className="mt-8 border-t border-[#1D1D1F]/10 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10">
          {content.highlights.map((h, i) => (
            <motion.li
              key={h}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center justify-between border-b border-[#1D1D1F]/10 py-3.5"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1D1D1F]">
                {h}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => onOpen(project)}
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#0B0B0D] text-white font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1E4738] transition-colors duration-300"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#1D1D1F]/15 text-[#1D1D1F] font-mono text-xs uppercase tracking-[0.15em] hover:border-[#1D1D1F]/40 transition-colors duration-300"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

const DeveloperCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-[2rem] bg-[#0B0B0D] px-8 py-10 sm:px-12 sm:py-12 my-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(197,160,89,0.22)_0%,transparent_55%)]" />
      <div className="relative flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
        <div className="flex-1">
          <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[#D4AF37]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
            </span>
            {PERSONAL_INFO.availability}
          </p>
          <h3 className="mt-3 font-serif text-3xl sm:text-5xl text-white tracking-tight">
            {PERSONAL_INFO.name}
          </h3>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-white/60">
            {PERSONAL_INFO.title} · Mohali, India
          </p>
        </div>
        <div className="flex sm:flex-col gap-3 shrink-0">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-[0.15em] hover:border-[#C5A059] hover:text-[#D4AF37] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-[0.15em] hover:border-[#C5A059] hover:text-[#D4AF37] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="pt-14 sm:pt-16 pb-24 sm:pb-28 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects"
          sub="Selected mobile projects built with React Native, TypeScript, Expo, and real backend integrations."
        />
        {PROJECTS.map((project, i) => (
          <React.Fragment key={project.id}>
            <CaseStudy
              project={project}
              index={`0${i + 1}`}
              onOpen={setSelectedProject}
            />
            {i === 0 && <DeveloperCard />}
          </React.Fragment>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

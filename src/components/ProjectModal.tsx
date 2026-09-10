import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Layers, Cpu, Sparkles } from "lucide-react";
import type { Project } from "../data/projects";
import { GithubIcon } from "./SocialIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B0B0D]/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059]">
                  CASE STUDY: {project.title}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-[#121317] text-[#9C968A] hover:text-[#F5F2EB] transition-all focus:outline-none"
                aria-label="Close Case Study"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              {/* Cover Banner */}
              <div className="relative bg-[#F1F3F0] rounded-2xl aspect-video max-h-[340px] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121317] via-transparent to-transparent opacity-60" />
              </div>

              {/* Title & Category Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5EEE8] text-[#1E4738] text-xs font-mono mb-3">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{project.category}</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F5F2EB] mb-2">
                  {project.title}
                </h2>
                {project.subtitle && (
                  <p className="text-xs font-mono uppercase tracking-wider text-[#C5A059]/90 mb-4">
                    {project.subtitle}
                  </p>
                )}
                <p className="text-[#D6D1C4] text-base leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059] mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#C5A059]" /> Tech Stack &
                  Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full text-xs font-mono bg-[#F1F3F0] text-[#59605D]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059] mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" /> App Workflows
                  & Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#F1F3F0]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1E4738] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-[#D6D1C4] leading-normal font-light">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Highlights */}
              {project.architectureHighlights && (
                <div className="p-5 rounded-2xl bg-[#F1F3F0]">
                  <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059] mb-3">
                    Implementation & Architecture Highlights
                  </h3>
                  <ul className="space-y-2 text-xs text-[#D6D1C4] font-light">
                    {project.architectureHighlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-[#C5A059] font-mono">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#F1F3F0] flex items-center justify-between">
              <span className="text-xs font-mono text-[#9C968A] uppercase tracking-wider">
                React Native Mobile Showcase
              </span>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E5EEE8] hover:bg-[#DDEBE1] text-[#1E4738] font-mono text-xs uppercase tracking-wider transition-all"
              >
                <GithubIcon className="w-4 h-4 text-[#C5A059]" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

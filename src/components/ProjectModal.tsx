import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';
import type { Project } from '../data/projects';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
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
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
          >
            {/* Header with Close Button */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span className="font-mono text-xs text-rose-400 font-medium uppercase tracking-wider">
                  CASE STUDY: {project.title}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-950 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-rose-500/50"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              {/* Cover Image Banner */}
              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video max-h-[320px] w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              </div>

              {/* Title & Category Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono mb-3">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{project.category}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                  {project.title}
                </h2>
                {project.subtitle && (
                  <p className="text-sm font-mono text-purple-400 mb-4">{project.subtitle}</p>
                )}
                <p className="text-slate-300 text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-400" /> Technologies & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-950 text-slate-200 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-rose-400" /> App Features & Workflows
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-300 leading-normal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Highlights if any */}
              {project.architectureHighlights && (
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Technical Implementation & Architecture
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {project.architectureHighlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-rose-500 font-mono">&gt;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">React Native Mobile Showcase</span>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-mono text-xs transition-all"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import type { Project } from '../data/projects';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group glass-card rounded-2xl overflow-hidden border border-slate-800/90 bg-slate-900/60 flex flex-col hover:border-rose-500/40 hover:shadow-[0_10px_40px_-10px_rgba(244,63,94,0.2)] transition-all duration-300"
    >
      {/* Image Container with Hover Scale */}
      <div
        onClick={() => onOpenModal(project)}
        className="relative aspect-video w-full overflow-hidden cursor-pointer bg-slate-950"
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent opacity-80" />

        {/* Category Pill Badge */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs font-mono text-rose-300">
          <Layers className="w-3.5 h-3.5 text-rose-400" />
          <span>{project.category}</span>
        </div>

        {/* Click to View Overlay Cue */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600/90 text-white font-mono text-xs font-semibold shadow-lg backdrop-blur-md">
            View Case Study <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3
              onClick={() => onOpenModal(project)}
              className="text-2xl font-extrabold text-white cursor-pointer group-hover:text-rose-300 transition-colors flex items-center gap-2"
            >
              {project.title}
            </h3>
          </div>

          {project.subtitle && (
            <p className="text-xs font-mono text-purple-400 mb-3">{project.subtitle}</p>
          )}

          <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <button
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-rose-400 hover:text-rose-300 transition-colors"
          >
            <span>Read Case Study</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            title="View Code on GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

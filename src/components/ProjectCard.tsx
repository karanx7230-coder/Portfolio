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
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
      className="group glass-card rounded-none overflow-hidden border border-[#C5A059]/20 bg-[#121317]/80 flex flex-col hover:border-[#C5A059]/50 transition-all duration-500"
    >
      {/* Image Showcase Container */}
      <div
        onClick={() => onOpenModal(project)}
        className="relative aspect-video w-full overflow-hidden cursor-pointer bg-[#0B0B0D]"
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
        />
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-70" />

        {/* Category Pill */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-[#0B0B0D]/90 backdrop-blur-md border border-[#C5A059]/30 text-xs font-mono text-[#C5A059]">
          <Layers className="w-3.5 h-3.5" />
          <span>{project.category}</span>
        </div>

        {/* Hover Overlay Cue */}
        <div className="absolute inset-0 bg-[#0B0B0D]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5A059] text-[#0B0B0D] font-mono text-xs font-semibold uppercase tracking-wider">
            View Case Study <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between">
        <div>
          <h3
            onClick={() => onOpenModal(project)}
            className="font-serif text-2xl sm:text-3xl font-normal text-[#F5F2EB] cursor-pointer group-hover:text-[#C5A059] transition-colors duration-300 mb-2"
          >
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="text-xs font-mono uppercase tracking-wider text-[#C5A059]/90 mb-4">{project.subtitle}</p>
          )}

          <p className="text-[#D6D1C4] text-sm leading-relaxed mb-6 font-light line-clamp-3">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-[#0B0B0D] text-[#E6E1D5] border border-[#C5A059]/15"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#C5A059]/15 flex items-center justify-between">
          <button
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-medium text-[#C5A059] hover:text-[#D4AF37] transition-colors"
          >
            <span>Read Case Study</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 bg-[#0B0B0D] border border-[#C5A059]/20 text-[#9C968A] hover:text-[#C5A059] hover:border-[#C5A059]/50 transition-all"
            title="View Code on GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

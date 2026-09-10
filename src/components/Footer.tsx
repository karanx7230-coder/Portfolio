import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "../data/personalInfo";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { AtomMark } from "./AtomMark";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 bg-white/85 backdrop-blur-md border-t border-[#C5A059]/20 text-[#59605D] relative z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2.5 mb-1">
            <AtomMark size={30} stroke="#C5A059" spinSeconds={22} />
            <span className="font-serif text-lg font-bold tracking-widest text-[#C5A059]">
              {PERSONAL_INFO.monogram} • {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-[#9C968A] font-mono">
            {PERSONAL_INFO.title} • TypeScript • Expo • Mobile Apps
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-full bg-white/70 text-[#9C968A] hover:text-[#C5A059] transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/70 text-[#9C968A] hover:text-[#C5A059] transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/70 text-[#9C968A] hover:text-[#C5A059] transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-xs font-mono text-[#9C968A]">
          <span>© 2026 {PERSONAL_INFO.name}</span>
          <a
            href="/resume.pdf"
            download="Karanpreet-Singh-Resume.pdf"
            className="hover:text-[#C5A059] transition-colors uppercase tracking-wider"
          >
            Resume
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/70 text-[#9C968A] hover:text-[#C5A059] transition-all focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

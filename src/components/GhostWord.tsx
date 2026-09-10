import React from "react";

interface GhostWordProps {
  word: string;
  className?: string;
}

/** Oversized faint backdrop typography — fills empty space, stays quiet. */
export const GhostWord: React.FC<GhostWordProps> = ({
  word,
  className = "",
}) => {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none font-serif leading-none text-[#1D1D1F]/[0.05] ${className}`}
    >
      {word}
    </span>
  );
};

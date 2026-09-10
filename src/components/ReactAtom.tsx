import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const chips = [
  { label: "React Native", className: "left-0 top-6", delay: "0s" },
  { label: "TypeScript", className: "right-0 top-16", delay: "1.2s" },
  { label: "Expo", className: "left-4 bottom-16", delay: "0.6s" },
  { label: "Supabase", className: "right-4 bottom-6", delay: "1.8s" },
];

export const ReactAtom: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto flex h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.22)_0%,rgba(30,71,56,0.12)_42%,transparent_68%)]" />

      {/* Rotating rings */}
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 sm:inset-8"
      >
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <g
            fill="none"
            stroke="#1E4738"
            strokeOpacity="0.55"
            strokeWidth="1.4"
          >
            <ellipse cx="100" cy="100" rx="86" ry="34" />
            <ellipse
              cx="100"
              cy="100"
              rx="86"
              ry="34"
              transform="rotate(60 100 100)"
            />
            <ellipse
              cx="100"
              cy="100"
              rx="86"
              ry="34"
              transform="rotate(120 100 100)"
            />
          </g>
          <g fill="#C5A059">
            <circle cx="100" cy="14" r="4" />
            <circle cx="174" cy="143" r="4" />
            <circle cx="26" cy="143" r="4" />
          </g>
        </svg>
      </motion.div>

      {/* Counter-rotating dashed orbit */}
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? {} : { rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 sm:inset-2"
      >
        <svg viewBox="0 0 200 200" className="h-full w-full opacity-60">
          <circle
            cx="100"
            cy="100"
            r="94"
            fill="none"
            stroke="#C5A059"
            strokeOpacity="0.5"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
        </svg>
      </motion.div>

      {/* Core */}
      <motion.div
        animate={reduceMotion ? {} : { scale: [1, 1.06, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full bg-white/85 shadow-[0_20px_50px_-18px_rgba(30,71,56,0.45)] ring-1 ring-[#C5A059]/30 backdrop-blur-md"
      >
        <svg viewBox="-11.5 -10.2 23 20.4" className="h-14 w-14 sm:h-16 sm:w-16">
          <circle r="2.05" fill="#1E4738" />
          <g stroke="#1E4738" strokeWidth="1.1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
        <span className="absolute -bottom-2 rounded-full bg-[#1E4738] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
          RN • TS
        </span>
      </motion.div>

      {/* Floating chips */}
      {chips.map((chip) => (
        <span
          key={chip.label}
          style={{ animationDelay: chip.delay }}
          className={`absolute animate-float rounded-full border border-[#C5A059]/25 bg-white/85 px-3 py-1.5 font-mono text-[11px] text-[#1E4738] shadow-sm backdrop-blur-md ${chip.className}`}
        >
          {chip.label}
        </span>
      ))}
    </div>
  );
};

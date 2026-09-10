import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AtomMarkProps {
  size?: number;
  stroke?: string;
  className?: string;
  spinSeconds?: number;
}

/** Small rotating React mark — the quiet cousin of the hero atom. */
export const AtomMark: React.FC<AtomMarkProps> = ({
  size = 72,
  stroke = "#C5A059",
  className = "",
  spinSeconds = 18,
}) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      animate={reduceMotion ? {} : { rotate: 360 }}
      transition={{ duration: spinSeconds, repeat: Infinity, ease: "linear" }}
      style={{ width: size, height: size }}
      className={`shrink-0 ${className}`}
    >
      <svg viewBox="-11.5 -10.2 23 20.4" width={size} height={size}>
        <circle r="2.05" fill={stroke} />
        <g stroke={stroke} strokeWidth="1.1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    </motion.div>
  );
};

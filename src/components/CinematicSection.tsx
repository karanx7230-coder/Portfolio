import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CinematicSectionProps {
  children: React.ReactNode;
  index: number;
}

export const CinematicSection: React.FC<CinematicSectionProps> = ({
  children,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 ? 36 : -24, 0, index % 2 ? -28 : 36],
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.975, 1, 0.985]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [0.72, 1, 1, 0.76],
  );

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, opacity }}
      className="cinematic-section"
    >
      {children}
    </motion.div>
  );
};

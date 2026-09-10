import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-[#E8E8EC]">
      <motion.div
        style={{ scaleX }}
        className="h-full w-full origin-left bg-gradient-to-r from-[#1E4738] via-[#2D5D4A] to-[#C5A059]"
      />
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CursorFollower: React.FC = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 180, damping: 24, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 180, damping: 24, mass: 0.35 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!media.matches) return;

    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement | null;
      setIsHovering(
        Boolean(target?.closest("a, button, [data-cursor-hover], .group")),
      );
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-follower"
      style={{ x: springX, y: springY, scale: isHovering ? 1.8 : 1 }}
    />
  );
};

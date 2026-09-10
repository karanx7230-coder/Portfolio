import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** Faint gold dots that drift at different speeds as you scroll past. */
export const ScrollDots: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const ySlow = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const yMid = useTransform(scrollYProgress, [0, 1], [54, -54]);
  const yFast = useTransform(scrollYProgress, [0, 1], [12, -48]);

  const dots = [
    { left: "7%", top: "18%", size: 6, opacity: 0.45, y: ySlow },
    { left: "90%", top: "24%", size: 8, opacity: 0.3, y: yMid },
    { left: "78%", top: "72%", size: 5, opacity: 0.45, y: yFast },
    { left: "12%", top: "82%", size: 4, opacity: 0.35, y: yMid },
  ];

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {dots.map((d, i) => (
        <motion.span
          key={i}
          style={{ y: d.y, width: d.size, height: d.size, opacity: d.opacity }}
          className="absolute rounded-full bg-[#C5A059]"
        />
      ))}
    </div>
  );
};

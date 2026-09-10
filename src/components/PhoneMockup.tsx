import React from "react";
import { motion } from "framer-motion";

interface PhoneMockupProps {
  src: string;
  alt: string;
  /** CSS object-position to frame a region of a cover asset as a screen */
  position?: string;
  className?: string;
}

/**
 * Premium device frame. Feed it a real project asset and a focal
 * `position` — the cover is cropped by the screen, never faked.
 */
export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  src,
  alt,
  position = "center",
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, rotate: 0.5 }}
      className={`relative ${className}`}
    >
      <div className="relative rounded-[3rem] bg-[#0B0B0D] p-[10px] shadow-[0_50px_100px_-30px_rgba(11,11,13,0.45)] ring-1 ring-white/15">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[2.4rem] bg-[#E8E8EC]">
          <motion.img
            src={src}
            alt={alt}
            loading="lazy"
            style={{ objectPosition: position }}
            className="h-full w-full object-cover"
            initial={{ scale: 1.12 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Screen glare */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-[#0B0B0D]" />
        </div>
        {/* Side keys */}
        <div className="absolute -left-[2px] top-24 h-10 w-[3px] rounded-full bg-[#0B0B0D]" />
        <div className="absolute -left-[2px] top-40 h-14 w-[3px] rounded-full bg-[#0B0B0D]" />
        <div className="absolute -right-[2px] top-32 h-16 w-[3px] rounded-full bg-[#0B0B0D]" />
      </div>
    </motion.div>
  );
};

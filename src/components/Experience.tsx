import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, MapPin, Award, CheckCircle2, Star, Smartphone, Rocket } from "lucide-react";
import { PERSONAL_INFO } from "../data/personalInfo";
import ShinyText from "./ReactBits/ShinyText";

const TRAINING_BADGES = [
  { icon: Calendar, text: "Mar – Sep 2026" },
  { icon: Award, text: "Certificate · Apptechies" },
  { icon: Smartphone, text: "React Native + Expo" },
  { icon: Rocket, text: "TestFlight release support" },
];

export const Experience: React.FC = () => {
  const training = PERSONAL_INFO.training;
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.85", "end 0.55"],
  });
  const railProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
  });

  return (
    <section
      id="experience"
      className="pt-20 sm:pt-24 pb-14 sm:pb-16 relative scroll-mt-16 bg-[#F0F3F0]/70"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] mb-3"
          >
            <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
            Experience
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1F] tracking-tight"
          >
            <ShinyText
              text="Training & Practical Experience"
              color="#1E4738"
              shineColor="#C5A059"
              speed={3.5}
            />
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-10 flex flex-wrap gap-2.5">
            {TRAINING_BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.span
                  key={badge.text}
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  whileHover={{ y: -3 }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#1D1D1F]/10 bg-white/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#1E4738] hover:border-[#C5A059]/60 hover:shadow-[0_10px_25px_-12px_rgba(30,71,56,0.5)] transition-shadow"
                >
                  <Icon className="w-3.5 h-3.5 text-[#C5A059]" />
                  {badge.text}
                </motion.span>
              );
            })}
          </div>
          {/* Main Timeline Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative glass-card rounded-none p-8 sm:p-10 bg-white/80 overflow-hidden mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#E5EEE8] text-[#C5A059] text-[11px] font-mono uppercase tracking-wider mb-3">
                  TRAINING
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1D1D1F] mb-1">
                  {training.role}
                </h3>
                <p className="text-sm font-mono text-[#59605D]">
                  {training.company}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 text-xs font-mono text-[#9C968A]">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1F3F0]">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{training.period}</span>
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1F3F0]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{training.location}</span>
                </span>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059] mb-4">
                What I Worked On
              </h4>
              <div ref={listRef} className="relative pl-5">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 bottom-1 w-[2px] rounded-full bg-[#1D1D1F]/10"
                />
                <motion.span
                  aria-hidden="true"
                  style={{ scaleY: railProgress }}
                  className="absolute left-0 top-1 bottom-1 w-[2px] origin-top rounded-full bg-gradient-to-b from-[#C5A059] to-[#1E4738]"
                />
              <ul className="divide-y divide-[#1D1D1F]/10 border-y border-[#1D1D1F]/10">
                {training.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 py-4">
                    <CheckCircle2 className="w-4 h-4 text-[#1E4738] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#1D1D1F] leading-relaxed font-light">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
              </div>
            </div>

            {/* Certificate Badge */}
            <div className="pt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E5EEE8] flex items-center justify-center text-[#C5A059]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#1D1D1F]">
                    {training.certificateTitle}
                  </div>
                  <div className="text-[11px] font-mono text-[#9C968A]">
                    Issued by {training.issuer}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#E5EEE8] text-[#C5A059] uppercase tracking-widest">
                VERIFIED
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

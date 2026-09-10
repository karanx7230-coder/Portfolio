import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "../data/personalInfo";
import ShinyText from "./ReactBits/ShinyText";
import ScrollReveal from "./ReactBits/ScrollReveal";

export const Experience: React.FC = () => {
  const training = PERSONAL_INFO.training;

  return (
    <section
      id="experience"
      className="py-24 relative scroll-mt-16 bg-[#0B0B0D]/60 border-y border-[#C5A059]/15"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] mb-3"
          >
            04 • EXPERIENCE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F2EB] tracking-tight"
          >
            <ShinyText
              text="Training & Practical Experience"
              color="#1E4738"
              shineColor="#C5A059"
              speed={5}
            />
          </motion.h2>
        </div>

        <ScrollReveal
          containerClassName="mb-8"
          textClassName="text-[#1E4738]"
          enableBlur={false}
        >
          Six months of hands-on product development and delivery.
        </ScrollReveal>
        <div className="max-w-4xl mx-auto">
          {/* Main Timeline Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative glass-card rounded-none p-8 sm:p-10 border border-[#C5A059]/20 bg-[#121317]/80 overflow-hidden mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#C5A059]/15">
              <div>
                <span className="inline-block px-3 py-1 bg-[#0B0B0D] border border-[#C5A059]/30 text-[#C5A059] text-[11px] font-mono uppercase tracking-wider mb-3">
                  PRESENT ROLE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5F2EB] mb-1">
                  {training.role}
                </h3>
                <p className="text-sm font-mono text-[#D6D1C4]">
                  {training.company}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 text-xs font-mono text-[#9C968A]">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0B0B0D] border border-[#C5A059]/15">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{training.period}</span>
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0B0B0D] border border-[#C5A059]/15">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{training.location}</span>
                </span>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059] mb-4">
                Core Responsibilities & Technical Objectives
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {training.responsibilities.map((resp, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-[#0B0B0D] border border-[#C5A059]/15"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1E4738] mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-[#D6D1C4] leading-relaxed font-light">
                      {resp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate Badge */}
            <div className="pt-6 border-t border-[#C5A059]/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#0B0B0D] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F5F2EB]">
                    {training.certificateTitle}
                  </div>
                  <div className="text-[11px] font-mono text-[#9C968A]">
                    Issued by {training.issuer}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-3 py-1 bg-[#0B0B0D] text-[#C5A059] border border-[#C5A059]/20 uppercase tracking-widest">
                VERIFIED
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

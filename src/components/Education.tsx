import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, Building2 } from "lucide-react";
import { PERSONAL_INFO } from "../data/personalInfo";
import ShinyText from "./ReactBits/ShinyText";

export const Education: React.FC = () => {
  const edu = PERSONAL_INFO.education;

  return (
    <section id="education" className="py-24 relative scroll-mt-16">
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
            05 • ACADEMICS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F2EB] tracking-tight"
          >
            <ShinyText
              text="Academic Education"
              color="#1E4738"
              shineColor="#C5A059"
              speed={3.5}
            />
          </motion.h2>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-none p-8 sm:p-10 bg-white/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#E5EEE8] flex items-center justify-center text-[#C5A059] flex-shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-normal text-[#F5F2EB] mb-1">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[#D6D1C4] mb-3 font-mono">
                  <Building2 className="w-4 h-4 text-[#C5A059]" />
                  <span>{edu.institution}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5EEE8] text-[#C5A059] text-xs font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{edu.status}</span>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-auto pt-4 sm:pt-0 text-right">
              <span className="text-xs font-mono text-[#9C968A] uppercase tracking-wider block mb-2">
                Computer Science & Apps
              </span>
              <span className="text-[11px] font-mono text-[#1E4738] bg-[#DDEBE1] rounded-full px-3 py-1 uppercase tracking-widest inline-block text-[#2D5D4A]">
                IN PROGRESS
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

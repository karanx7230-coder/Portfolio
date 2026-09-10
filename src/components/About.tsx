import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Code,
  Layers,
  Layout,
  MapPin,
  Calendar,
  Award,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/personalInfo";
import BlurText from "./ReactBits/BlurText";
import ShinyText from "./ReactBits/ShinyText";
import ScrollReveal from "./ReactBits/ScrollReveal";

const highlightCards = [
  {
    icon: Smartphone,
    title: "React Native",
    description:
      "Cross-platform iOS & Android mobile application development with CLI and Expo workflows.",
    accent: "border-[#C5A059]/30 text-[#C5A059]",
  },
  {
    icon: Code,
    title: "TypeScript",
    description:
      "Strongly-typed architecture, interfaces, strict type-checking, and maintainable mobile codebase.",
    accent: "border-[#7A2234]/40 text-[#D4AF37]",
  },
  {
    icon: Layers,
    title: "Cross-Platform Apps",
    description:
      "Seamless navigation, state management, REST API integration, and cloud backends.",
    accent: "border-[#1E4738]/40 text-[#2D5D4A]",
  },
  {
    icon: Layout,
    title: "Mobile UI",
    description:
      "Pixel-perfect responsive layouts, custom design systems, Flexbox engine, and smooth animations.",
    accent: "border-[#C5A059]/30 text-[#F5F2EB]",
  },
];

export const About: React.FC = () => {
  // Line-by-line scroll animated reveal for summary text
  const summarySentences = PERSONAL_INFO.summary.match(/[^.!?]+[.!?]+/g) || [
    PERSONAL_INFO.summary,
  ];

  return (
    <section id="about" className="py-24 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] mb-3"
          >
            01 • ABOUT
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F2EB] tracking-tight"
          >
            <ShinyText
              text="React Native Developer based in Mohali"
              color="#1E4738"
              shineColor="#C5A059"
              speed={5}
            />
          </motion.h2>
        </div>

        {/* Top Brief Summary Box with Line-by-Line Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-none p-8 sm:p-10 mb-12 border border-[#C5A059]/20 bg-[#121317]/80 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              {/* Animated Text Reveal */}
              <div className="space-y-3 mb-6">
                <BlurText
                  text={summarySentences.join(" ")}
                  animateBy="words"
                  delay={35}
                  className="text-[#59605D] text-base sm:text-lg leading-relaxed font-light"
                />
              </div>

              {/* Verified Metadata Tags */}
              <div className="flex flex-wrap gap-4 text-xs font-mono text-[#9C968A] pt-4 border-t border-[#C5A059]/15">
                <span className="flex items-center gap-2 bg-[#0B0B0D] px-3.5 py-1.5 border border-[#C5A059]/20 text-[#D6D1C4]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />{" "}
                  {PERSONAL_INFO.location}
                </span>
                <span className="flex items-center gap-2 bg-[#0B0B0D] px-3.5 py-1.5 border border-[#C5A059]/20 text-[#D6D1C4]">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" /> 6 Months
                  Practical Training
                </span>
                <span className="flex items-center gap-2 bg-[#0B0B0D] px-3.5 py-1.5 border border-[#C5A059]/20 text-[#D6D1C4]">
                  <Award className="w-3.5 h-3.5 text-[#C5A059]" /> Trainee @
                  Apptechies
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-[#C5A059]/15 pt-6 lg:pt-0 lg:pl-8">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059]">
                Core Technical Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "React Native",
                  "TypeScript",
                  "Expo",
                  "Supabase",
                  "Firebase",
                  "REST APIs",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-[#0B0B0D] text-[#D6D1C4] border border-[#C5A059]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small Highlight Cards Grid */}
        <ScrollReveal
          containerClassName="hidden"
          textClassName="text-[#1E4738]"
          enableBlur={false}
        >
          About
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group glass-card glass-card-hover rounded-none p-6 flex flex-col justify-between border border-[#C5A059]/15"
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-none bg-[#0B0B0D] border ${card.accent} flex items-center justify-center mb-5`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#F5F2EB] mb-2 group-hover:text-[#C5A059] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#9C968A] leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-3 border-t border-[#C5A059]/15 flex items-center justify-between text-[10px] font-mono text-[#9C968A]">
                  <span className="uppercase tracking-wider">
                    RESUME SUPPORTED
                  </span>
                  <span>✓</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

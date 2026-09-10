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
  Star,
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
    accent: "text-[#C5A059]",
  },
  {
    icon: Code,
    title: "TypeScript",
    description:
      "Strongly-typed architecture, interfaces, strict type-checking, and maintainable mobile codebase.",
    accent: "text-[#D4AF37]",
  },
  {
    icon: Layers,
    title: "Cross-Platform Apps",
    description:
      "Seamless navigation, state management, REST API integration, and cloud backends.",
    accent: "text-[#2D5D4A]",
  },
  {
    icon: Layout,
    title: "Mobile UI",
    description:
      "Pixel-perfect responsive layouts, custom design systems, Flexbox composition, and smooth animations.",
    accent: "text-[#C5A059]",
  },
];

export const About: React.FC = () => {
  // Line-by-line scroll animated reveal for summary text
  const summarySentences = PERSONAL_INFO.summary.match(/[^.!?]+[.!?]+/g) || [
    PERSONAL_INFO.summary,
  ];

  return (
    <section id="about" className="py-28 sm:py-32 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] mb-3"
          >
            <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
            About
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1F] tracking-tight"
          >
            <ShinyText
              text="React Native Developer based in Mohali"
              color="#1E4738"
              shineColor="#C5A059"
              speed={3.5}
            />
          </motion.h2>
        </div>

        {/* Top Brief Summary Box with Line-by-Line Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-none p-8 sm:p-10 mb-12 bg-[#FDFDFC] relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              {/* Animated Text Reveal */}
              <div className="space-y-3 mb-6">
                <BlurText
                  text={summarySentences.join(" ")}
                  animateBy="words"
                  delay={48}
                  stepDuration={0.48}
                  className="text-[#59605D] text-base sm:text-lg leading-relaxed font-light"
                />
              </div>

              {/* Verified Metadata Tags */}
              <div className="flex flex-wrap gap-4 text-xs font-mono text-[#9C968A] pt-4">
                <span className="flex items-center gap-2 bg-[#F1F3F0] rounded-full px-3.5 py-1.5 text-[#59605D]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />{" "}
                  {PERSONAL_INFO.location}
                </span>
                <span className="flex items-center gap-2 bg-[#F1F3F0] rounded-full px-3.5 py-1.5 text-[#59605D]">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" /> 6 Months
                  Practical Training
                </span>
                <span className="flex items-center gap-2 bg-[#F1F3F0] rounded-full px-3.5 py-1.5 text-[#59605D]">
                  <Award className="w-3.5 h-3.5 text-[#C5A059]" /> Trainee @
                  Apptechies
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4 pt-6 lg:pt-0 lg:pl-8">
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
                    className="px-3 py-1 text-xs font-mono rounded-full bg-[#F1F3F0] text-[#59605D]"
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
        <div className="mt-4 border-t border-[#1D1D1F]/10">
          {highlightCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.06 }}
                className="group grid grid-cols-1 sm:grid-cols-12 gap-4 items-start border-b border-[#1D1D1F]/10 py-7"
              >
                <div className="sm:col-span-5 flex items-center gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A059]" />
                  <span
                    className={`w-10 h-10 rounded-full bg-[#E5EEE8] ${card.accent} flex items-center justify-center shrink-0`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <h3 className="font-serif text-xl text-[#1D1D1F]">
                    {card.title}
                  </h3>
                </div>
                <div className="sm:col-span-7">
                  <p className="text-sm text-[#59605D] leading-relaxed font-light">
                    {card.description}
                  </p>
                  {card.title === "Mobile UI" && (
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      {["Pixel-perfect", "Responsive", "60fps motion"].map(
                        (point, pIdx, arr) => (
                          <span
                            key={point}
                            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#1E4738]"
                          >
                            {point}
                            {pIdx < arr.length - 1 && (
                              <span className="h-1 w-1 rounded-full bg-[#C5A059]" />
                            )}
                          </span>
                        ),
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Copy, Check, MapPin, ArrowUpRight, ArrowDown, Star } from "lucide-react";
import { PERSONAL_INFO } from "../data/personalInfo";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { ScrollDots } from "./ScrollDots";
import { AtomMark } from "./AtomMark";
import ShinyText from "./ReactBits/ShinyText";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const rows = [
    {
      id: "email",
      icon: <Mail className="w-4 h-4" />,
      label: "Direct Email",
      value: PERSONAL_INFO.email,
      link: `https://mail.google.com/mail/?view=cm&to=${PERSONAL_INFO.email}`,
      action: (
        <span className="flex items-center gap-2">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] text-[#1E4738] hover:text-[#C5A059] transition-colors"
          >
            Send <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${PERSONAL_INFO.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] text-[#9C968A] hover:text-[#C5A059] transition-colors"
            title="Open in mail app"
          >
            App <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={handleCopyEmail}
            className="p-2 text-[#9C968A] hover:text-[#C5A059] transition-colors"
            title="Copy Email"
          >
            {copiedEmail ? (
              <Check className="w-4 h-4 text-[#1E4738]" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </span>
      ),
    },
    {
      id: "github",
      icon: <GithubIcon className="w-4 h-4" />,
      label: "GitHub",
      value: "karanx7230-coder",
      action: (
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] text-[#1E4738] hover:text-[#C5A059] transition-colors"
        >
          Repositories <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      ),
    },
    {
      id: "linkedin",
      icon: <LinkedinIcon className="w-4 h-4" />,
      label: "LinkedIn",
      value: "Karanpreet Singh",
      action: (
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] text-[#1E4738] hover:text-[#C5A059] transition-colors"
        >
          Connect <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      ),
    },
    {
      id: "phone",
      icon: <Phone className="w-4 h-4" />,
      label: "Phone / WhatsApp",
      value: PERSONAL_INFO.phone,
      action: (
        <span className="flex items-center gap-2">
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] text-[#1E4738] hover:text-[#C5A059] transition-colors"
          >
            Call <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={handleCopyPhone}
            className="p-2 text-[#9C968A] hover:text-[#C5A059] transition-colors"
            title="Copy Phone Number"
          >
            {copiedPhone ? (
              <Check className="w-4 h-4 text-[#1E4738]" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </span>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="pt-20 sm:pt-24 pb-24 sm:pb-32 relative scroll-mt-16"
    >
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-radial-glow-bottom pointer-events-none" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-1/2 -translate-y-1/2 opacity-[0.07]"
      >
        <AtomMark size={520} stroke="#1E4738" spinSeconds={40} />
      </div>
      <ScrollDots />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] mb-3"
          >
            <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
            Contact
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-normal text-[#1D1D1F] tracking-tight"
          >
            <ShinyText
              text="Let's Build Something"
              color="#1E4738"
              shineColor="#C5A059"
              speed={3.5}
            />
          </motion.h2>

          <p className="text-[#59605D] text-base sm:text-lg max-w-xl mt-4 font-light">
            Looking for a React Native developer? Open to internships, junior
            roles, freelance projects, and practical mobile development
            opportunities.
          </p>
        </div>

        {/* Single elegant list — no boxes */}
        <div className="flex justify-center mb-12">
          <motion.a
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="/resume.pdf"
            download="Karanpreet-Singh-Resume.pdf"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0B0B0D] text-white font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1E4738] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300"
          >
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </motion.a>
        </div>
        <div className="max-w-3xl mx-auto border-t border-[#1D1D1F]/10">
          {rows.map((row, idx) => (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group flex items-center gap-4 border-b border-[#1D1D1F]/10 py-5 px-2 -mx-2 rounded-xl transition-colors duration-300 hover:bg-white/70"
            >
              <span className="w-10 h-10 shrink-0 rounded-full bg-[#E5EEE8] flex items-center justify-center text-[#1E4738] transition-all duration-300 group-hover:bg-[#1E4738] group-hover:text-white group-hover:scale-110 group-hover:-rotate-12">
                {row.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9C968A]">
                  {row.label}
                </div>
                {"link" in row && row.link ? (
                  <a
                    href={(row as { link: string }).link}
                    className="truncate block font-mono text-sm text-[#1D1D1F] hover:text-[#1E4738] hover:underline underline-offset-4 transition-colors"
                  >
                    {row.value}
                  </a>
                ) : (
                  <div className="truncate font-mono text-sm text-[#1D1D1F]">
                    {row.value}
                  </div>
                )}
              </div>
              {row.action}
            </motion.div>
          ))}
        </div>

        {/* Location note */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs font-mono text-[#9C968A]">
          <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>{PERSONAL_INFO.location} • Remote & On-site Available</span>
        </div>
      </div>
    </section>
  );
};

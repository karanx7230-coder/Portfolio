import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/personalInfo';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

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

  return (
    <section id="contact" className="py-28 relative scroll-mt-16 bg-[#0B0B0D]/80 border-t border-[#C5A059]/15">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-radial-glow-bottom pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] mb-3"
          >
            06 • CONTACT
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-normal text-[#F5F2EB] tracking-tight"
          >
            Let's Build Something
          </motion.h2>

          <p className="text-[#D6D1C4] text-base sm:text-lg max-w-xl mt-4 font-light">
            Have a React Native project, full-time position, or mobile developer opportunity in mind?
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card glass-card-hover rounded-none p-6 border border-[#C5A059]/20 bg-[#121317]/80 flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 bg-[#0B0B0D] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-4">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-[#9C968A] mb-1">Direct Email</h3>
              <p className="text-xs font-mono text-[#F5F2EB] truncate mb-4">{PERSONAL_INFO.email}</p>
            </div>

            <div className="flex gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 text-center py-2 px-3 bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0B0D] font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Email
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 bg-[#0B0B0D] border border-[#C5A059]/30 text-[#9C968A] hover:text-[#C5A059] transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#1E4738]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card glass-card-hover rounded-none p-6 border border-[#C5A059]/20 bg-[#121317]/80 flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 bg-[#0B0B0D] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-4">
                <GithubIcon className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-[#9C968A] mb-1">GitHub</h3>
              <p className="text-xs font-mono text-[#F5F2EB] truncate mb-4">karanx7230-coder</p>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 px-3 bg-[#0B0B0D] hover:bg-[#1C1D24] border border-[#C5A059]/30 text-[#E6E1D5] hover:text-[#C5A059] font-mono text-xs uppercase tracking-wider transition-colors"
            >
              Repositories
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card glass-card-hover rounded-none p-6 border border-[#C5A059]/20 bg-[#121317]/80 flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 bg-[#0B0B0D] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-4">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-[#9C968A] mb-1">LinkedIn</h3>
              <p className="text-xs font-mono text-[#F5F2EB] truncate mb-4">Karanpreet Singh</p>
            </div>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 px-3 bg-[#0B0B0D] hover:bg-[#1C1D24] border border-[#C5A059]/30 text-[#E6E1D5] hover:text-[#C5A059] font-mono text-xs uppercase tracking-wider transition-colors"
            >
              Connect
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card glass-card-hover rounded-none p-6 border border-[#C5A059]/20 bg-[#121317]/80 flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 bg-[#0B0B0D] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-4">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-[#9C968A] mb-1">Phone / WhatsApp</h3>
              <p className="text-xs font-mono text-[#F5F2EB] truncate mb-4">{PERSONAL_INFO.phone}</p>
            </div>

            <div className="flex gap-2">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex-1 text-center py-2 px-3 bg-[#0B0B0D] hover:bg-[#1C1D24] border border-[#C5A059]/30 text-[#E6E1D5] hover:text-[#C5A059] font-mono text-xs uppercase tracking-wider transition-colors"
              >
                Call
              </a>
              <button
                onClick={handleCopyPhone}
                className="p-2 bg-[#0B0B0D] border border-[#C5A059]/30 text-[#9C968A] hover:text-[#C5A059] transition-colors"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-[#1E4738]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Location note */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#9C968A]">
          <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>{PERSONAL_INFO.location} • Remote & On-site Available</span>
        </div>

      </div>
    </section>
  );
};

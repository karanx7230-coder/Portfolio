import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check, Send, MapPin } from 'lucide-react';
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
    <section id="contact" className="py-24 relative scroll-mt-16 bg-slate-950/60 border-t border-slate-800/40">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-radial-glow-bottom pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-rose-400 text-xs font-mono mb-3"
          >
            <Send className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Let's Build Something
          </motion.h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mt-4">
            Have a React Native project, full-time position, or mobile developer opportunity in mind? Feel free to connect!
          </p>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/90 bg-slate-900/60 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-1">Direct Email</h3>
              <p className="text-sm font-semibold text-white truncate mb-4">{PERSONAL_INFO.email}</p>
            </div>

            <div className="flex gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 text-center py-2 px-3 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-semibold transition-all"
              >
                Send Email
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white transition-all"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/90 bg-slate-900/60 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 mb-4">
                <GithubIcon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-1">GitHub Profile</h3>
              <p className="text-sm font-semibold text-white truncate mb-4">karanx7230-coder</p>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 px-3 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-mono text-xs font-semibold transition-all"
            >
              Visit Repositories
            </a>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/90 bg-slate-900/60 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-1">LinkedIn</h3>
              <p className="text-sm font-semibold text-white truncate mb-4">Karanpreet Singh</p>
            </div>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 px-3 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-mono text-xs font-semibold transition-all"
            >
              Connect on LinkedIn
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/90 bg-slate-900/60 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-1">Phone / WhatsApp</h3>
              <p className="text-sm font-semibold text-white truncate mb-4">{PERSONAL_INFO.phone}</p>
            </div>

            <div className="flex gap-2">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex-1 text-center py-2 px-3 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-mono text-xs font-semibold transition-all"
              >
                Call
              </a>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white transition-all"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Location Footer Note */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
          <MapPin className="w-4 h-4 text-rose-500" />
          <span>{PERSONAL_INFO.location} • Available for Remote & On-site roles</span>
        </div>

      </div>
    </section>
  );
};

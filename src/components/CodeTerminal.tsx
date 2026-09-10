import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const SNIPPETS: Record<string, { tab: string; lines: string[] }> = {
  expo: {
    tab: "expo",
    lines: [
      "$ yarn start",
      "› Metro waiting on exp://192.168.1.4:8081",
      "› Scan the QR code above to open the project",
      "✓ Bundled 1247 modules in 892ms",
    ],
  },
  git: {
    tab: "git",
    lines: [
      "$ git status -sb",
      "## main...origin/main",
      " M src/screens/Cart.tsx",
      '$ git commit -m "feat: cart + wishlist flows"',
      "✓ 3 files changed — working tree clean",
    ],
  },
  api: {
    tab: "api",
    lines: [
      "$ curl /api/posts",
      '{ "posts": 42, "synced": true }',
      "✓ Supabase realtime channel connected",
    ],
  },
};

const TABS = Object.keys(SNIPPETS);

function lineColor(line: string): string {
  if (line.startsWith("$")) return "text-white font-semibold";
  if (line.startsWith("✓")) return "text-[#7FB998]";
  if (line.startsWith("›")) return "text-white/50";
  return "text-[#C5A059]";
}

export const CodeTerminal: React.FC = () => {
  const [tab, setTab] = useState("expo");
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const full = SNIPPETS[tab].lines;
    if (reduceMotion) {
      setLines(full);
      setDone(true);
      return;
    }
    setLines([]);
    setDone(false);
    let li = 0;
    let ci = 0;
    let cancelled = false;
    let timer = 0;
    const step = () => {
      if (cancelled) return;
      if (li >= full.length) {
        setDone(true);
        return;
      }
      const line = full[li];
      ci += 1;
      setLines([...full.slice(0, li), line.slice(0, ci)]);
      if (ci >= line.length) {
        li += 1;
        ci = 0;
      }
      timer = window.setTimeout(step, line.startsWith("$") ? 38 : 13);
    };
    timer = window.setTimeout(step, 350);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [tab, reduceMotion]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="mb-12 overflow-hidden rounded-2xl border border-[#0B0B0D]/10 bg-[#0B0B0D] shadow-[0_40px_80px_-40px_rgba(11,11,13,0.5)]"
    >
      {/* Chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/80" />
        <span className="ml-3 font-mono text-[11px] text-white/40">
          karan — zsh
        </span>
        <div className="ml-auto flex items-center gap-1">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-md px-3 py-1 font-mono text-[11px] transition-colors ${
                tab === t
                  ? "bg-white/10 text-[#D4AF37]"
                  : "text-white/40 hover:text-white/80"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      {/* Body */}
      <div className="h-52 sm:h-56 overflow-hidden px-5 py-4 font-mono text-[12px] sm:text-[13px] leading-[1.9]">
        {lines.map((line, i) => (
          <div key={`${tab}-${i}`} className={lineColor(line)}>
            {line || "\u00A0"}
            {i === lines.length - 1 && (
              <span
                className={`ml-1 inline-block h-4 w-2 translate-y-[3px] bg-[#D4AF37] ${done ? "animate-pulse" : ""}`}
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

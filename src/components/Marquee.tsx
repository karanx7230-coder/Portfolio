import React from "react";

const defaultItems = [
  "React Native",
  "TypeScript",
  "Expo",
  "Expo Router",
  "Supabase",
  "Firebase",
  "REST APIs",
  "Redux Toolkit",
  "React Navigation",
  "Android & iOS",
];

export const Marquee: React.FC<{ items?: string[] }> = ({
  items = defaultItems,
}) => {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-[#C5A059]/20 bg-white/70 py-4 backdrop-blur-md">
      <div className="flex w-max animate-marquee items-center gap-8 pr-8">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.25em] text-[#1E4738]"
          >
            <span>{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F5F7] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F5F5F7] to-transparent" />
    </div>
  );
};

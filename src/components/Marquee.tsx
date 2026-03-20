"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 30 }: MarqueeProps) {
  const content = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-6">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050510] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050510] to-transparent z-10" />

      <div
        className="flex items-center gap-8 whitespace-nowrap"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
        }}
      >
        {content.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-sm font-medium text-white/30 uppercase tracking-[3px]">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#7b2ff7] opacity-40" />
          </div>
        ))}
      </div>
    </div>
  );
}

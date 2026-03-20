"use client";

import { motion } from "framer-motion";

const revealUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function CTA() {
  return (
    <section className="relative z-10 w-full bg-[#020617] border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <motion.div
          {...revealUp(0)}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tighter mb-5">
            Ready to Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Extraordinary
            </span>
            ?
          </h3>
          <p className="text-slate-400 text-base mb-8 max-w-md mx-auto">
            Let&apos;s turn your vision into a digital masterpiece.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[15px] font-semibold text-white transition-all duration-300 hover:scale-[1.03] group"
            style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}
          >
            Let&apos;s Talk
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

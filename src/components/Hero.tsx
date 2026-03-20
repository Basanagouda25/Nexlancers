"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import MagneticButton from "./MagneticButton";
import Marquee from "./Marquee";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const revealUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const trustCompanies = [
  "TechVenture Labs",
  "Digital First Co.",
  "ScaleUp Studio",
  "CloudNine Systems",
  "InnovatePro",
  "DataSync AI",
  "ModernStack Inc.",
  "GrowthEngine",
];

export default function Hero() {
  const { scrollY } = useScroll();
  const indicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent pt-20 pb-24"
    >
      {/* ── High-Performance Vanta Background ── */}
      <Scene3D />

      {/* ── Unified Subtle Grid ── */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Scattered Light Particles for Density */}
      <motion.div animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-[30%] left-[10%] w-3 h-3 bg-blue-400 rounded-full blur-[2px] shadow-[0_0_20px_5px_rgba(96,165,250,0.4)] z-0 pointer-events-none" />
      <motion.div animate={{ y: [0, 40, 0], opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }} className="absolute bottom-[40%] right-[15%] w-4 h-4 bg-purple-400 rounded-full blur-[3px] shadow-[0_0_25px_5px_rgba(192,132,252,0.3)] z-0 pointer-events-none" />



      {/* ── Main Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-16">
        {/* Scroll-Reveal Staggered Content */}
        <div className="relative">
          {/* Subtle Backglow for text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none z-0" />

          {/* Badge */}
          <motion.div {...revealUp(0)} className="mb-6 relative z-10">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-semibold tracking-[2px] uppercase bg-white/[0.03] border border-white/10 text-white/60 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              </span>
              Now Building the Future
            </span>
          </motion.div>

          {/* ── Heading ── */}
          <motion.div {...revealUp(0.15)} className="relative z-10 w-full overflow-visible">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter mb-6 text-center w-full">
              <span className="block text-white">Transforming Ideas</span>
              <span className="block mt-2 overflow-visible">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 pr-4 pb-4 -mr-4 -mb-4">
                  Into Digital Reality
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            {...revealUp(0.3)}
            className="relative z-10 w-full max-w-xl mx-auto text-center text-base md:text-lg lg:text-xl text-zinc-400 leading-relaxed mb-10 font-light px-2"
          >
            We build high-performance websites, scalable applications, and custom software that visually dominate and mechanically scale.
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div
            {...revealUp(0.45)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
          >
            {/* Primary */}
            <MagneticButton
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-[15px] overflow-hidden transition-transform duration-400 hover:scale-[1.03]"
              strength={0.2}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] via-[#3b82f6] to-[#6366f1] rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] via-[#3b82f6] to-[#6366f1] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-600" />
              {/* Shimmer */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
                    animation: "shimmer 4s ease-in-out infinite",
                  }}
                />
              </span>
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </MagneticButton>

            {/* Secondary */}
            <MagneticButton
              href="#work"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-white/80 font-semibold text-[15px] transition-transform duration-400 hover:scale-[1.03] overflow-hidden"
              strength={0.2}
            >
              <span className="absolute inset-0 rounded-full border border-white/15 group-hover:border-white/25 transition-colors duration-500" />
              <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                View Work
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* ── Trust Marquee (Full Width & Bottom Anchored) ── */}
      <motion.div {...revealUp(0.6)} className="absolute bottom-20 left-0 w-full z-20 flex flex-col items-center">
        <p className="text-[10px] text-white/30 font-semibold tracking-[4px] uppercase mb-3 text-center">
          Trusted by innovative teams worldwide
        </p>
        <div className="w-full">
          <Marquee items={trustCompanies} speed={35} />
        </div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[9px] uppercase tracking-[3px] text-white/20 font-medium">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom fade matched to new background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none" />
    </section>
  );
}

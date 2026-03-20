"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ───────────────────────── REVEAL HELPERS ───────────────────────── */

const revealUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

/* ───────────────────────── PROJECT DATA ───────────────────────── */

const projects = [
  {
    id: 1,
    title: "Nova Finance",
    category: "Fintech · Dashboard",
    description:
      "A cutting-edge fintech dashboard for real-time analytics, portfolio tracking, and smart investment insights. Built for speed, clarity, and scale.",
    tech: ["Next.js", "TypeScript", "D3.js", "Supabase"],
    accentColor: "#06b6d4",
    accentGradient: "from-cyan-400 to-blue-500",
    mockType: "fintech" as const,
  },
  {
    id: 2,
    title: "FitSphere",
    category: "Health · Mobile App",
    description:
      "AI-powered fitness companion delivering personalized workouts, nutrition plans, and progress tracking — designed to feel alive in your pocket.",
    tech: ["React Native", "TensorFlow", "Node.js", "Firebase"],
    accentColor: "#3b82f6",
    accentGradient: "from-blue-400 to-indigo-500",
    mockType: "fitness" as const,
  },
  {
    id: 3,
    title: "EduFlow",
    category: "EdTech · Platform",
    description:
      "Smart e-learning platform with real-time progress tracking, adaptive quizzes, and collaborative classrooms that make education feel effortless.",
    tech: ["Next.js", "Prisma", "WebRTC", "PostgreSQL"],
    accentColor: "#818cf8",
    accentGradient: "from-indigo-400 to-purple-500",
    mockType: "edutech" as const,
  },
  {
    id: 4,
    title: "ShopVerse",
    category: "E-Commerce · Platform",
    description:
      "Modern e-commerce platform with immersive product stories, one-click checkout, and AI-driven recommendations that convert browsers into buyers.",
    tech: ["Next.js", "Stripe", "Algolia", "Sanity CMS"],
    accentColor: "#a78bfa",
    accentGradient: "from-purple-400 to-pink-500",
    mockType: "ecommerce" as const,
  },
];

/* ───────────────────────── PROJECT MOCK VISUALS ───────────────────────── */

function FintechMock({ color }: { color: string }) {
  return (
    <div className="w-full max-w-[500px] rounded-xl overflow-hidden border border-white/[0.06]" style={{ background: "rgba(15,23,42,0.85)" }}>
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <div className="space-y-1">
            <div className="h-2 rounded bg-white/10 w-20" />
            <div className="text-xl font-bold" style={{ color }}>$284,392</div>
          </div>
          <div className="px-3 py-1 rounded-full text-[10px] font-semibold" style={{ background: `${color}20`, color }}>+12.4%</div>
        </div>
        <div className="h-28 rounded-lg border border-white/[0.04] p-3 flex items-end gap-1 mb-4">
          {[30, 55, 40, 70, 45, 80, 60, 90, 65, 85, 75, 95].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: `linear-gradient(to top, ${color}55, ${color}11)` }} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Portfolio", "Analytics", "Transfers"].map((label, i) => (
            <div key={label} className="p-3 rounded-lg text-center" style={{ background: i === 0 ? `${color}15` : "rgba(255,255,255,0.02)" }}>
              <div className="text-[9px] text-white/30 mb-1">{label}</div>
              <div className="text-xs font-bold" style={{ color: i === 0 ? color : "rgba(255,255,255,0.5)" }}>
                {["$84k", "2.4k", "$12k"][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FitnessMock({ color }: { color: string }) {
  return (
    <div className="w-[240px] rounded-[28px] overflow-hidden border-2 border-white/[0.08] p-1.5" style={{ background: "rgba(15,23,42,0.9)" }}>
      <div className="rounded-[22px] overflow-hidden" style={{ background: "rgba(10,15,30,0.95)" }}>
        <div className="px-5 py-3">
          <div className="text-[8px] text-white/30 mb-1">Today&apos;s Goal</div>
          <div className="text-lg font-bold text-white mb-3">Morning Run</div>
          <div className="w-full h-2 rounded-full bg-white/[0.06] mb-4">
            <div className="h-full rounded-full" style={{ width: "72%", background: `linear-gradient(to right, ${color}, ${color}88)` }} />
          </div>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[["5.2", "km"], ["320", "cal"], ["28", "min"]].map(([val, unit]) => (
              <div key={unit} className="text-center">
                <div className="text-sm font-bold text-white">{val}</div>
                <div className="text-[8px] text-white/30">{unit}</div>
              </div>
            ))}
          </div>
          <div className="h-20 rounded-xl" style={{ background: `linear-gradient(135deg, ${color}25, ${color}08)` }} />
        </div>
      </div>
    </div>
  );
}

function EdutechMock({ color }: { color: string }) {
  return (
    <div className="w-full max-w-[500px] rounded-xl overflow-hidden border border-white/[0.06]" style={{ background: "rgba(15,23,42,0.85)" }}>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg" style={{ background: `${color}22` }} />
          <div>
            <div className="text-xs font-semibold text-white">Advanced React Patterns</div>
            <div className="text-[9px] text-white/30">Module 4 of 8</div>
          </div>
          <div className="ml-auto text-xs font-bold" style={{ color }}>72%</div>
        </div>
        <div className="w-full h-1.5 rounded-full bg-white/[0.06] mb-5">
          <div className="h-full rounded-full" style={{ width: "72%", background: `linear-gradient(to right, ${color}, ${color}88)` }} />
        </div>
        <div className="space-y-2 mb-4">
          {["Compound Components", "Render Props", "Custom Hooks", "Context API"].map((item, i) => (
            <div key={item} className="flex items-center gap-3 p-2 rounded-lg" style={{ background: i < 2 ? `${color}08` : "transparent" }}>
              <div className="w-4 h-4 rounded-full border flex items-center justify-center" style={{ borderColor: i < 2 ? color : "rgba(255,255,255,0.1)" }}>
                {i < 2 && <div className="w-2 h-2 rounded-full" style={{ background: color }} />}
              </div>
              <span className="text-xs" style={{ color: i < 2 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EcommerceMock({ color }: { color: string }) {
  return (
    <div className="w-full max-w-[500px] rounded-xl overflow-hidden border border-white/[0.06]" style={{ background: "rgba(15,23,42,0.85)" }}>
      <div className="p-5">
        <div className="h-32 rounded-xl mb-4 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${color}20, ${color}08)` }}>
          <div className="w-16 h-20 rounded-lg" style={{ background: `${color}30` }} />
        </div>
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="text-sm font-semibold text-white mb-0.5">Premium Headphones</div>
            <div className="text-[9px] text-white/30">Wireless · Noise Cancelling</div>
          </div>
          <div className="text-base font-bold" style={{ color }}>$349</div>
        </div>
        <div className="flex gap-2 mb-4">
          {["#1a1a2e", "#2d1b69", "#0f4c75"].map((bg) => (
            <div key={bg} className="w-6 h-6 rounded-full border-2 border-white/10" style={{ background: bg }} />
          ))}
        </div>
        <div className="h-10 rounded-xl flex items-center justify-center text-xs font-semibold" style={{ background: `linear-gradient(135deg, ${color}55, ${color}33)`, color: "white" }}>
          Add to Cart
        </div>
      </div>
    </div>
  );
}

const MockComponents: Record<string, React.FC<{ color: string }>> = {
  fintech: FintechMock,
  fitness: FitnessMock,
  edutech: EdutechMock,
  ecommerce: EcommerceMock,
};

/* ───────────────────────── PROJECT SLIDE ───────────────────────── */

function ProjectSlide({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const MockVisual = MockComponents[project.mockType];

  return (
    <div className="h-full w-screen flex-shrink-0 flex items-center justify-center px-6 lg:px-16 relative overflow-hidden group">
      {/* ── AMBIENT DEPTH LAYERS ── */}
      {/* Massive subtle background number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-white/[0.015] select-none pointer-events-none z-0 tracking-tighter mix-blend-screen">
        0{project.id}
      </div>

      {/* Deep ambient floating orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] pointer-events-none z-0">
        <motion.div
          animate={{ y: [-30, 30, -30], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full rounded-full blur-[150px] opacity-[0.12] will-change-transform"
          style={{ background: project.accentColor }}
        />
      </div>

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* ── Text Side ── */}
        <div>
          {/* Number + Category */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl lg:text-7xl font-extrabold tracking-tighter" style={{ color: `${project.accentColor}15`, textShadow: `0 0 40px ${project.accentColor}44` }}>
              0{project.id}
            </span>
            <div className="h-px flex-1 max-w-[40px]" style={{ background: `${project.accentColor}44` }} />
            <span className="text-xs font-bold uppercase tracking-[4px]" style={{ color: `${project.accentColor}aa` }}>
              {project.category}
            </span>
          </div>

          {/* Title with hover scale tracking */}
          <h3 className="text-4xl lg:text-5xl xl:text-6xl font-display font-black text-white tracking-tight leading-[1.05] mb-5 group-hover:tracking-normal transition-all duration-700">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-base text-zinc-400 font-light leading-relaxed mb-8 max-w-md group-hover:text-zinc-300 transition-colors duration-500">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full text-[11px] font-bold border"
                style={{
                  borderColor: `${project.accentColor}25`,
                  color: project.accentColor,
                  background: `${project.accentColor}0a`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] group/cta relative overflow-hidden shadow-2xl"
            style={{ background: `linear-gradient(135deg, ${project.accentColor}55, ${project.accentColor}22)`, boxShadow: `0 10px 40px -10px ${project.accentColor}44` }}
          >
            <div className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, ${project.accentColor}88, ${project.accentColor}44)` }} />
            <span className="relative z-10">View Case Study</span>
            <svg
              className="w-4 h-4 relative z-10 group-hover/cta:translate-x-1 transition-transform duration-300"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* ── Visual Side ── */}
        <div className="flex justify-center lg:justify-end relative">
          {/* Floating rings geometry behind visual */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none z-0">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="w-full h-full border border-white/[0.03] rounded-full border-dashed will-change-transform" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none z-0">
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="w-full h-full border border-white/[0.02] rounded-full will-change-transform" />
          </div>

          <div className="relative z-10">
            {/* Direct intense glow */}
            <div
              className="absolute -inset-10 rounded-3xl opacity-30 pointer-events-none blur-2xl transition-opacity duration-1000 group-hover:opacity-50"
              style={{ background: `radial-gradient(circle, ${project.accentColor}, transparent 60%)` }}
            />
            {/* Floating primary tech chip badge */}
            <motion.div 
              animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 z-20 px-4 py-2 rounded-2xl border font-bold text-[11px] tracking-wider backdrop-blur-xl shadow-2xl flex items-center gap-2 will-change-transform"
              style={{ background: "rgba(15,23,42,0.85)", borderColor: `${project.accentColor}55`, color: "white" }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: project.accentColor }} />
              LIVE PREVIEW
            </motion.div>

            <MockVisual color={project.accentColor} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── HORIZONTAL SCROLL SECTION ───────────────────────── */

function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll progress to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 100}%`]);
  
  // Parallax background grid movement
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Progress bar width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Current project index — properly snapped to whole numbers via Math.ceil
  const projectCounter = useTransform(scrollYProgress, (v) => {
    const idx = Math.ceil(v * projects.length) || 1;
    return String(Math.min(idx, projects.length)).padStart(2, "0");
  });

  return (
    <div
      ref={containerRef}
      style={{ height: `${projects.length * 100}vh` }}
      className="relative"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden bg-transparent">
        {/* ── Parallax Dot Grid Background ── */}
        <motion.div
          style={{ x: bgX, backgroundImage: "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          className="absolute inset-y-0 left-0 w-[200%] h-full pointer-events-none z-0 opacity-30 will-change-transform"
          // We rely on opacity fading via the general section gradient instead.
        />

        {/* ── Progress Bar ── */}
        <div className="absolute top-0 left-0 right-0 z-20 h-[2px] bg-white/[0.04]">
          <motion.div className="h-full rounded-full" style={{ width: progressWidth, background: "linear-gradient(to right, #06b6d4, #818cf8, #a78bfa)" }} />
        </div>

        {/* ── Project Counter ── */}
        <div className="absolute top-8 right-8 z-20 flex items-baseline gap-1">
          <motion.span className="text-2xl font-extrabold text-white/80 tabular-nums">
            {projectCounter}
          </motion.span>
          <span className="text-sm text-white/20 font-medium">/ {String(projects.length).padStart(2, "0")}</span>
        </div>

        {/* ── Horizontal Track ── */}
        <motion.div
          style={{ x }}
          className="flex h-full will-change-transform"
        >
          {projects.map((project, index) => (
            <ProjectSlide key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ───────────────────────── MOBILE VERTICAL LAYOUT ───────────────────────── */

function MobileProjects() {
  return (
    <div className="space-y-20 px-6 py-16">
      {projects.map((project) => {
        const MockVisual = MockComponents[project.mockType];
        return (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Number */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl font-extrabold tracking-tighter" style={{ color: `${project.accentColor}20` }}>
                0{project.id}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-white/30">
                {project.category}
              </span>
            </div>

            <h3 className="text-3xl font-extrabold text-white tracking-tighter mb-3">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Mock */}
            <div className="relative mb-6">
              <div
                className="absolute -inset-6 rounded-2xl opacity-10 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${project.accentColor}, transparent 70%)` }}
              />
              <MockVisual color={project.accentColor} />
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full text-[10px] font-medium border"
                  style={{ borderColor: `${project.accentColor}25`, color: `${project.accentColor}cc`, background: `${project.accentColor}08` }}
                >{t}</span>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: project.accentColor }}>
              View Case Study
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ───────────────────────── MAIN EXPORT ───────────────────────── */

export default function Work() {
  return (
    <section id="work" className="relative bg-transparent">

      {/* ── Section Intro ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 lg:pt-32 pb-12">
        <div className="text-center">
          <motion.p
            {...revealUp(0)}
            className="text-xs font-bold uppercase tracking-[5px] mb-5"
            style={{ background: "linear-gradient(90deg, #60a5fa, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            Selected Work
          </motion.p>
          <motion.h2
            {...revealUp(0.1)}
            className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-black text-white mb-6 tracking-tight leading-[1.05]"
          >
            Projects That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 pr-2 italic">
              Speak for Themselves
            </span>
          </motion.h2>
          <motion.p
            {...revealUp(0.2)}
            className="max-w-lg mx-auto text-slate-400 text-base lg:text-lg leading-relaxed"
          >
            Every project is a story of innovation, precision, and relentless attention to detail.
          </motion.p>
        </div>
      </div>

      {/* ── Projects: Desktop = Horizontal Scroll, Mobile = Vertical Stack ── */}
      <div className="hidden lg:block">
        <HorizontalScroll />
      </div>
      <div className="lg:hidden max-w-lg mx-auto">
        <MobileProjects />
      </div>

    </section>
  );
}

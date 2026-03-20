"use client";

import { motion } from "framer-motion";
import { useRef, useCallback } from "react";

/* ───────────────────────── REVEAL HELPERS ───────────────────────── */

const revealUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const revealLeft = (delay: number) => ({
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const revealRight = (delay: number) => ({
  initial: { opacity: 0, x: 30, scale: 0.92 },
  whileInView: { opacity: 1, x: 0, scale: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

/* ───────────────────────── DATA ───────────────────────── */
const services = [
  {
    number: "01",
    title: "Web\nDevelopment",
    subtitle: "High-performance modern websites",
    description:
      "We craft blazing-fast, responsive websites using cutting-edge frameworks. From pixel-perfect landing pages to complex web applications that scale.",
    features: [
      "Next.js & React Applications",
      "Headless CMS Integration",
      "Performance-First Architecture",
      "SEO & Core Web Vitals",
    ],
    gradient: "from-cyan-400 to-blue-500",
    accentColor: "#06b6d4",
    mockType: "browser" as const,
  },
  {
    number: "02",
    title: "Mobile\nApplications",
    subtitle: "Scalable Android & iOS apps",
    description:
      "Native and cross-platform mobile apps that deliver seamless, performant user experiences. Built to engage millions.",
    features: [
      "React Native & Flutter",
      "Offline-First Architecture",
      "Push Notifications & Analytics",
      "App Store Optimization",
    ],
    gradient: "from-blue-400 to-indigo-500",
    accentColor: "#3b82f6",
    mockType: "mobile" as const,
  },
  {
    number: "03",
    title: "Custom\nSoftware",
    subtitle: "Tailored solutions for businesses",
    description:
      "Enterprise-grade software solutions engineered to solve your unique business challenges. Built to scale infinitely and adapt to your growth.",
    features: [
      "Microservices Architecture",
      "Cloud-Native Deployment",
      "Real-Time Data Processing",
      "API Design & Integration",
    ],
    gradient: "from-indigo-400 to-purple-500",
    accentColor: "#818cf8",
    mockType: "dashboard" as const,
  },
];

const stats = [
  { value: "3+", label: "Happy Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3x", label: "Faster Delivery" },
  { value: "24/7", label: "Support" },
];

/* ───────────────────────── MOCK VISUALS ───────────────────────── */

function BrowserMock({ color }: { color: string }) {
  return (
    <div className="w-full max-w-[420px] rounded-xl overflow-hidden border border-white/[0.06]" style={{ background: "rgba(15,23,42,0.8)" }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 mx-4 h-5 rounded-md bg-white/[0.04] flex items-center px-3">
          <span className="text-[9px] text-white/20 font-mono">nexlancers.com</span>
        </div>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-lg" style={{ background: `${color}22` }} />
          <div className="space-y-1.5 flex-1">
            <div className="h-2 rounded-full bg-white/10 w-3/4" />
            <div className="h-2 rounded-full bg-white/[0.06] w-1/2" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 rounded-lg" style={{ background: `${color}${i === 1 ? '15' : '08'}` }} />
          ))}
        </div>
        <div className="space-y-2">
          <div className="h-2 rounded-full bg-white/[0.06] w-full" />
          <div className="h-2 rounded-full bg-white/[0.04] w-5/6" />
          <div className="h-2 rounded-full bg-white/[0.04] w-4/6" />
        </div>
        <div className="h-8 rounded-lg" style={{ background: `linear-gradient(135deg, ${color}44, ${color}22)` }} />
      </div>
    </div>
  );
}

function MobileMock({ color }: { color: string }) {
  return (
    <div className="w-[220px] rounded-[28px] overflow-hidden border-2 border-white/[0.08] p-1.5" style={{ background: "rgba(15,23,42,0.9)" }}>
      <div className="rounded-[22px] overflow-hidden" style={{ background: "rgba(10,15,30,0.95)" }}>
        <div className="flex justify-between items-center px-5 py-2">
          <span className="text-[8px] text-white/30 font-medium">9:41</span>
          <div className="w-16 h-4 rounded-full bg-black mx-auto" />
          <div className="flex gap-1"><div className="w-3 h-1.5 rounded-sm bg-white/20" /></div>
        </div>
        <div className="px-4 pb-5 space-y-3">
          <div className="h-28 rounded-2xl" style={{ background: `linear-gradient(135deg, ${color}30, ${color}10)` }} />
          <div className="space-y-2">
            <div className="h-2 rounded bg-white/10 w-3/4" />
            <div className="h-2 rounded bg-white/[0.06] w-1/2" />
          </div>
          <div className="flex gap-2">
            {[1, 2].map((i) => (
              <div key={i} className="flex-1 h-20 rounded-xl" style={{ background: `${color}${i === 1 ? '18' : '0a'}` }} />
            ))}
          </div>
          <div className="h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}33` }}>
            <span className="text-[9px] font-semibold" style={{ color }}>Get Started</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMock({ color }: { color: string }) {
  return (
    <div className="w-full max-w-[420px] rounded-xl overflow-hidden border border-white/[0.06]" style={{ background: "rgba(15,23,42,0.8)" }}>
      <div className="flex">
        <div className="w-12 border-r border-white/[0.06] py-4 flex flex-col items-center gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-5 h-5 rounded-md" style={{ background: i === 1 ? `${color}33` : "rgba(255,255,255,0.04)" }} />
          ))}
        </div>
        <div className="flex-1 p-4 space-y-3">
          <div className="flex justify-between items-center">
            <div className="h-2.5 rounded bg-white/10 w-24" />
            <div className="h-5 w-16 rounded-md" style={{ background: `${color}22` }} />
          </div>
          <div className="h-24 rounded-lg border border-white/[0.04] p-3 flex items-end gap-1.5">
            {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: `linear-gradient(to top, ${color}44, ${color}11)` }} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2].map((i) => (
              <div key={i} className="p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.02)" }}>
                <div className="h-2 rounded bg-white/[0.06] w-2/3 mb-2" />
                <div className="text-sm font-bold" style={{ color }}>{i === 1 ? "2.4k" : "98%"}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const MockComponents = {
  browser: BrowserMock,
  mobile: MobileMock,
  dashboard: DashboardMock,
};

/* ───────────────────────── 3D TILT CARD ───────────────────────── */

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02, 1.02, 1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
  }, []);

  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={className}
      style={{ transition: "transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)" }}
    >{children}</div>
  );
}

/* ───────────────────────── SERVICE PANEL ───────────────────────── */

function ServicePanel({ service, index }: { service: (typeof services)[0]; index: number }) {
  const MockVisual = MockComponents[service.mockType];

  return (
    <div className="relative py-14 lg:py-20 group">
      {/* ── AMBIENT BACKGROUND LAYERS ── */}
      {/* 1. Subtle moving grid matching Hero */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 top-0 h-[200%] opacity-30"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
      </div>

      {/* 2. Massive glowing background typography */}
      <div className="absolute top-1/2 lg:-right-32 -translate-y-1/2 text-[30vh] lg:text-[45vh] font-extrabold text-white/[0.015] select-none pointer-events-none z-0 tracking-tighter">
        {service.number}
      </div>

      {/* 3. Floating ambient orb */}
      <motion.div
        animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08] pointer-events-none z-0 will-change-transform"
        style={{ background: service.accentColor }}
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full lg:pl-12">
        {/* ── LEFT: Scroll-Reveal Text ── */}
        <div>
          {/* Number + Line + Tech floating badges */}
          <motion.div {...revealLeft(0)} className="flex items-center gap-4 mb-8">
            <span className="text-sm font-bold tracking-wider px-3 py-1 rounded-full border" style={{ color: service.accentColor, borderColor: `${service.accentColor}33`, background: `${service.accentColor}10` }}>
              {service.number}
            </span>
            <div className="h-px flex-1 max-w-[120px]" style={{ background: `linear-gradient(to right, ${service.accentColor}, transparent)` }} />
          </motion.div>

          {/* Title with hover tracking effect */}
          <motion.h3
            {...revealUp(0.1)}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-black text-white tracking-tight leading-[1.05] mb-5 whitespace-pre-line group-hover:tracking-normal transition-all duration-700 break-words"
          >
            {service.title}
          </motion.h3>

          {/* Subtitle with slight neon glow */}
          <motion.p {...revealUp(0.2)} className="text-lg mb-6 font-semibold" style={{ color: service.accentColor, textShadow: `0 0 20px ${service.accentColor}44` }}>
            {service.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p {...revealUp(0.3)} className="text-base md:text-lg text-zinc-400 font-light group-hover:text-zinc-300 transition-colors duration-500 leading-relaxed mb-8 max-w-md">
            {service.description}
          </motion.p>

          {/* Features — Staggered detailed list */}
          <ul className="space-y-4 mb-10">
            {service.features.map((feature, i) => (
              <motion.li
                key={feature}
                {...revealLeft(0.35 + i * 0.08)}
                className="flex items-center gap-4 text-sm font-medium text-slate-300 group/item"
              >
                <div className="relative w-7 h-7 rounded-lg flex items-center justify-center border transition-colors duration-300" style={{ borderColor: `${service.accentColor}22`, background: `${service.accentColor}0a` }}>
                  <div className="w-1.5 h-1.5 rounded-full group-hover/item:scale-150 transition-transform duration-300" style={{ background: service.accentColor }} />
                </div>
                <span className="group-hover/item:text-white transition-colors duration-300">{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            {...revealUp(0.7)}
            href="#contact"
            className="inline-flex items-center gap-3 text-sm font-semibold relative overflow-hidden group/cta"
          >
            <span className="relative z-10" style={{ color: service.accentColor }}>Explore Service</span>
            <div className="w-8 h-[1px] relative z-10 transition-all duration-300 group-hover/cta:w-12" style={{ background: service.accentColor }} />
            <svg className="w-4 h-4 relative z-10 group-hover/cta:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke={service.accentColor} strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </div>

        {/* ── RIGHT: Scroll-Reveal Visual with Density ── */}
        <motion.div
          {...revealRight(0.2)}
          className="flex justify-center flex-col items-center lg:items-end relative"
        >
          {/* Decorative drifting elements behind mockup */}
          <motion.div animate={{ rotate: 360, scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-10 -right-10 w-40 h-40 border border-white/[0.04] rounded-full pointer-events-none will-change-transform" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -bottom-10 right-20 w-32 h-32 border border-white/[0.02] rounded-full border-dashed pointer-events-none will-change-transform" />

          <TiltCard className="relative z-10">
            {/* Multi-layered dense glow */}
            <div className="absolute -inset-10 rounded-3xl opacity-20 pointer-events-none blur-xl" style={{ background: `radial-gradient(circle, ${service.accentColor}, transparent 60%)` }} />
            <div className="absolute -inset-20 rounded-3xl opacity-10 pointer-events-none blur-3xl" style={{ background: `radial-gradient(circle, ${service.accentColor}, transparent 70%)` }} />
            
            {/* Floating tech badge */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 z-20 px-4 py-2 rounded-xl border font-mono text-[10px] tracking-widest backdrop-blur-md shadow-2xl will-change-transform"
              style={{ background: "rgba(15,23,42,0.8)", borderColor: `${service.accentColor}44`, color: service.accentColor }}
            >
              {service.mockType.toUpperCase()}
            </motion.div>

            <MockVisual color={service.accentColor} />
          </TiltCard>
        </motion.div>
      </div>

      {/* Divider with glow */}
      {index < services.length - 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-px w-full overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)" }} />
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-1/4 opacity-50"
            style={{ background: `linear-gradient(to right, transparent, ${service.accentColor}, transparent)` }}
          />
        </div>
      )}
    </div>
  );
}

/* ───────────────────────── MAIN EXPORT ───────────────────────── */

export default function Services() {
  return (
    <section id="services" className="relative bg-transparent overflow-hidden">
      {/* ── Section Header ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 lg:pt-32">
        <div className="text-center mb-8 lg:mb-0">
          <motion.p
            {...revealUp(0)}
            className="text-xs font-bold uppercase tracking-[5px] mb-5"
            style={{
              background: "linear-gradient(90deg, #60a5fa, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What We Build
          </motion.p>
          <motion.h2
            {...revealUp(0.1)}
            className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-black text-white mb-6 tracking-tight leading-[1.05]"
          >
            Services That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 pr-2 italic">
              Drive Growth
            </span>
          </motion.h2>
          <motion.p
            {...revealUp(0.2)}
            className="max-w-lg mx-auto text-slate-400 text-base lg:text-lg leading-relaxed"
          >
            End-to-end digital solutions designed to elevate your brand and
            accelerate your business.
          </motion.p>
        </div>
      </div>

      {/* ── Service Panels ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {services.map((service, index) => (
          <ServicePanel key={service.title} service={service} index={index} />
        ))}
      </div>

      {/* ── Stats Bar ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 lg:pb-28 pt-8">
        <motion.div
          {...revealUp(0)}
          className="rounded-2xl p-7 lg:p-10"
          style={{ background: "rgba(15, 23, 42, 0.6)", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} {...revealUp(index * 0.1)} className="text-center">
                <div className="text-2xl lg:text-4xl font-extrabold mb-1.5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                  {stat.value}
                </div>
                <p className="text-white/30 text-xs font-medium uppercase tracking-[2px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
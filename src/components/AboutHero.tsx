'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <motion.section 
      ref={ref}
      style={{ scale, opacity }}
      className="relative flex h-[100vh] min-h-[800px] w-full items-center justify-center overflow-hidden bg-transparent"
    >
      {/* ── ALIVE BACKGROUND SYSTEM ── */}
      
      {/* 1. Deep grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_10%,transparent_100%)] opacity-50 pointer-events-none" />

      {/* 2. Massive animated gradient mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] z-0 overflow-hidden pointer-events-none blur-[120px] opacity-60 mix-blend-screen">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-blue-600 rounded-full mix-blend-multiply opacity-70"
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.3, 1] }} 
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-purple-600 rounded-full mix-blend-multiply opacity-70"
        />
        <motion.div 
          animate={{ x: ['-20%', '20%', '-20%'], y: ['20%', '-20%', '20%'] }} 
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-indigo-500 rounded-full mix-blend-multiply opacity-50"
        />
      </div>

      {/* 3. Vignette / Shadow Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_80%)] pointer-events-none" />

      {/* ── FOREGROUND CONTENT ── */}
      <motion.div 
        style={{ y }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-7xl mx-auto w-full"
      >
        {/* Pill Badge */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="mb-10"
        >
          <div className="group relative inline-flex items-center justify-center px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden cursor-default">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 text-[10px] sm:text-xs font-bold tracking-[0.3em] text-white/80 uppercase">
              Nexlancers Studio
            </span>
          </div>
        </motion.div>
        
        {/* Giant Typography */}
        <div className="overflow-hidden pb-4 text-center w-full max-w-6xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-[8vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-black tracking-tight text-white leading-[1.1] drop-shadow-2xl"
          >
            CREATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 italic pr-2">
              THE IMPOSSIBLE
            </span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-400 max-w-3xl font-light leading-relaxed tracking-wide mix-blend-plus-lighter"
        >
          We are a digital product studio blending high-end design with elite engineering to build experiences that matter.
        </motion.p>
      </motion.div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
      >
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent"
          />
        </div>
        <span className="text-[9px] tracking-[0.4em] font-bold text-zinc-600 uppercase">Scroll to explore</span>
      </motion.div>
    </motion.section>
  );
}

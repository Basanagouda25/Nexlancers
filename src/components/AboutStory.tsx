'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const bgTextX = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const paragraphLines = [
    "We are more than just a development agency.",
    "We are a collective of creators, engineers,",
    "and visionaries dedicated to pushing the",
    "boundaries of the digital world."
  ];

  return (
    <motion.section 
      ref={containerRef}
      style={{ scale, opacity }}
      className="relative flex min-h-[100vh] w-full items-center justify-center py-32 overflow-hidden origin-center"
    >
      {/* Light Sweep Background */}
      <motion.div 
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent skew-x-12 z-0 pointer-events-none"
      />

      {/* Faded Background Text */}
      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none"
      >
        <h2 className="text-[18vw] font-display font-black text-white/[0.02] tracking-tighter whitespace-nowrap drop-shadow-2xl">
          NEXLANCERS
        </h2>
      </motion.div>

      {/* Grid Animation (Visual Depth) */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_15%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Floating Shapes and Layered depth */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-[20%] w-40 h-40 border-[0.5px] border-white/10 rounded-full z-0 opacity-40 pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-[15%] w-64 h-64 border border-white/5 bg-gradient-to-br from-blue-600/5 to-transparent backdrop-blur-3xl z-0 pointer-events-none"
        style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
      />
      <motion.div 
        animate={{ rotate: 180, opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] right-[10%] w-32 h-32 border border-purple-500/10 rounded-lg z-0 pointer-events-none mix-blend-screen"
        style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
      />

      {/* Content */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 max-w-5xl px-6 flex flex-col items-center"
      >
        <div className="space-y-2 md:space-y-4 text-center">
          {paragraphLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-3xl lg:text-4xl font-display font-medium leading-[1.4] md:leading-[1.5] tracking-tight text-zinc-300"
              >
                {line}
              </motion.p>
            </div>
          ))}
        </div>
        
        <div className="overflow-hidden mt-12 md:mt-20 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block group"
          >
            <span className="relative z-10 text-xl md:text-4xl lg:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 leading-tight">
              Every line of code is a step towards the future.
            </span>
            <motion.span 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
              className="absolute bottom-1 left-0 w-full h-2 md:h-4 bg-blue-600/30 -z-10 origin-left blur-sm"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

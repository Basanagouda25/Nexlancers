'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, MousePointerClick } from 'lucide-react';
import React from 'react';

const team = [
  {
    name: 'Chirag P Shetty',
    role: 'Web Developer',
    description: 'A passionate web developer driven by creativity and precision, Chirag specializes in crafting modern, high-performance web experiences.',
    gradient: 'from-blue-500 to-cyan-400',
    linkedin: 'https://www.linkedin.com/in/chirag-p-shetty-641b372a8/',
    github: 'https://github.com/Chiragshetty2005',
  },
  {
    name: 'Basanagouda',
    role: 'App Developer',
    description: 'Passionate about building intuitive Android apps with seamless and interactive user interfaces.',
    gradient: 'from-purple-500 to-pink-500',
    linkedin: 'https://www.linkedin.com/in/basanagouda-d-b36523339/',
    github: 'https://github.com/Basanagouda25',
  },
  {
    name: 'Guru',
    role: 'Full Stack Developer',
    description: 'A versatile developer who builds scalable web applications end-to-end with a strong focus on performance and clean architecture.',
    gradient: 'from-emerald-400 to-teal-500',
    linkedin: 'https://www.linkedin.com/in/gurukumar-patil-582126327/',
    github: 'https://github.com/Gurukumarpatil',
  },
  {
    name: 'Amogh',
    role: 'Digital Marketing Lead & Full Stack Developer',
    description: 'Combines technical expertise with marketing strategy to build impactful products and drive digital growth.',
    gradient: 'from-orange-400 to-amber-500',
    linkedin: 'https://www.linkedin.com/in/amogh-b-googal-028214272/',
    github: 'https://github.com/amoghgit',
  }
];

const TiltCard = ({ member, index }: { member: typeof team[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        perspective: 1000,
      }}
      className="group relative h-full w-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          y: {
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
        className="relative h-full w-full rounded-3xl cursor-pointer"
      >
        {/* Glow Border Effect */}
        <div className="absolute -inset-[1px] rounded-3xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
        <div className={`absolute -inset-[2px] rounded-3xl bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500 z-0`} />
        
        {/* Card Body */}
        <div className="relative h-full w-full rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl p-8 md:p-10 flex flex-col items-center text-center overflow-hidden z-10 transition-colors group-hover:bg-white/[0.05]">
          
          {/* Subtle noise inside the card */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

          {/* Profile Image Placeholder */}
          <div className="relative w-32 h-32 mb-8 rounded-full p-1 group-hover:scale-105 transition-transform duration-500" style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}>
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.gradient} opacity-50 blur-md`} />
            <div className={`absolute inset-1 rounded-full bg-gradient-to-br ${member.gradient} opacity-20`} />
            <div className="relative w-full h-full rounded-full bg-[#0a0a0a] border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl">
              <span className="text-5xl font-display font-black text-white/30 group-hover:text-white/50 transition-colors">
                {member.name.charAt(0)}
              </span>
            </div>
          </div>

          <motion.div style={{ transform: "translateZ(40px)" }} className="mb-6">
            <h3 className="text-3xl font-bold text-white font-display mb-2">{member.name}</h3>
            <p className={`text-sm tracking-[0.2em] uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r ${member.gradient} inline-block`}>
              {member.role}
            </p>
          </motion.div>

          <motion.p 
            style={{ transform: "translateZ(30px)" }}
            className="text-zinc-400 font-light leading-relaxed mb-10 flex-grow max-w-sm"
          >
            {member.description}
          </motion.p>

          <motion.div 
            style={{ transform: "translateZ(40px)" }}
            className="flex items-center gap-4 mt-auto pt-8 border-t border-white/5 w-full justify-center"
          >
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
            )}
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function AboutTeam() {
  return (
    <section className="relative py-32 w-full z-10 lg:pb-52 overflow-hidden">
      {/* Background Visual Density Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,#000_10%,transparent_100%)] pointer-events-none z-0" />
      
      <motion.div 
        animate={{ rotate: 360, x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none z-0"
      />
      <motion.div 
        animate={{ rotate: -360, x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/5 to-cyan-500/5 rounded-full blur-3xl pointer-events-none z-0"
      />

      <div className="absolute top-[20%] right-[15%] w-1.5 h-1.5 bg-indigo-400 rounded-full shadow-[0_0_15px_3px_rgba(129,140,248,0.8)] opacity-40 pointer-events-none z-0" />
      <div className="absolute bottom-[30%] left-[20%] w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_20px_4px_rgba(192,132,252,0.6)] opacity-30 pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 z-10 flex flex-col items-center">
        <div className="text-center mb-24 md:mb-32 relative flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full z-0 pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-8"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-semibold tracking-[0.2em] text-zinc-300 backdrop-blur-md uppercase">
            The Experts
          </span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 tracking-tight"
        >
          Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Minds</span>
          <br className="hidden md:block"/> Behind Nexlancers
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 flex items-center justify-center gap-3 mt-4"
        >
          <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 backdrop-blur-md shadow-xl group cursor-pointer hover:bg-white/10 transition-colors">
            <MousePointerClick className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-zinc-300 text-sm md:text-base font-medium tracking-wide">Hover cards to interact</span>
          </div>
        </motion.div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 perspect w-full max-w-5xl mx-auto" style={{ perspective: 1200 }}>
          {team.map((member, index) => (
            <TiltCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
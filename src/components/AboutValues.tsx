'use client';

import { motion, Variants } from 'framer-motion';
import { Lightbulb, Target, Users, TrendingUp } from 'lucide-react';

const values = [
  {
    title: 'Innovation',
    description: 'We constantly explore new technologies to build forward-thinking solutions.',
    icon: Lightbulb,
    activeColor: 'from-blue-500/20 to-transparent',
    glowColor: 'bg-blue-500/20',
    iconColor: 'text-blue-400'
  },
  {
    title: 'Precision',
    description: 'Every pixel and line of code is crafted with meticulous attention to detail.',
    icon: Target,
    activeColor: 'from-purple-500/20 to-transparent',
    glowColor: 'bg-purple-500/20',
    iconColor: 'text-purple-400'
  },
  {
    title: 'User-Centric Design',
    description: 'We prioritize the user experience to ensure our products are intuitive and impactful.',
    icon: Users,
    activeColor: 'from-pink-500/20 to-transparent',
    glowColor: 'bg-pink-500/20',
    iconColor: 'text-pink-400'
  },
  {
    title: 'Scalability',
    description: 'Our architectures are designed to grow seamlessly alongside your business.',
    icon: TrendingUp,
    activeColor: 'from-emerald-500/20 to-transparent',
    glowColor: 'bg-emerald-500/20',
    iconColor: 'text-emerald-400'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  },
};

export default function AboutValues() {
  return (
    <section className="relative py-32 w-full z-10">
      {/* Background Visual Density */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.05)_0%,transparent_40%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.05)_0%,transparent_40%)] pointer-events-none z-0" />
      
      <motion.div 
        animate={{ y: [0, -30, 0], opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 right-[10%] w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none z-0"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-40 left-[10%] w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none z-0"
      />
      
      {/* Tiny floating particles */}
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/4 w-1 h-1 bg-purple-300 rounded-full blur-[1px] shadow-[0_0_10px_2px_rgba(192,132,252,0.6)] pointer-events-none z-0"
      />
      
      {/* Existing Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 z-10 flex flex-col items-center">
        <div className="text-center mb-20 md:mb-32 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-semibold tracking-[0.2em] text-zinc-300 mb-8 backdrop-blur-md uppercase">
              The Foundation
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 tracking-tight"
          >
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Values</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto text-xl md:text-2xl font-light leading-relaxed text-balance"
          >
            The principles that guide our work and shape every digital experience we create.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full"
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative h-full"
            >
              {/* Hover Glow Behind Card */}
              <div className={`absolute -inset-2 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 ${value.glowColor} z-0`} />
              
              {/* Card Content */}
              <div className="relative z-10 h-full p-8 md:p-10 rounded-[2rem] bg-[#0a0a0a]/80 border border-white/5 backdrop-blur-xl overflow-hidden flex flex-col items-start transition-all duration-500 group-hover:bg-[#111111]/90 group-hover:border-white/10 shadow-2xl">
                
                {/* Internal Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-b ${value.activeColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0`} />
                <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
                
                <div className="relative z-10 mb-10 p-4 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-xl">
                  <value.icon className={`w-8 h-8 ${value.iconColor} drop-shadow-lg`} />
                </div>
                
                <div className="relative z-10 mt-auto">
                  <h3 className="text-2xl font-bold text-white mb-3 font-display tracking-wide">{value.title}</h3>
                  <p className="text-zinc-500 leading-relaxed font-light text-sm md:text-base group-hover:text-zinc-300 transition-colors duration-500">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

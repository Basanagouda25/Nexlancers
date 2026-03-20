'use client';

import { motion } from 'framer-motion';

export default function BackgroundOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Top right orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -right-[20%] -top-[10%] h-[600px] w-[600px] rounded-full bg-blue-900/20 blur-[120px]"
      />
      
      {/* Bottom left orb */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute -left-[20%] -bottom-[10%] h-[700px] w-[700px] rounded-full bg-indigo-900/20 blur-[150px]"
      />
      
      {/* Center ambient orb */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
        className="absolute left-[30%] top-[30%] h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[100px]"
      />
    </div>
  );
}

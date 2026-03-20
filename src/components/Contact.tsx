'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2, Github, Linkedin, Mail, Twitter, ArrowRight, ChevronDown } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', project: '', message: '' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  // Focus the active input when step changes
  useEffect(() => {
    if (inputRef.current && currentStep > 0) {
      inputRef.current.focus();
    }
  }, [currentStep]);

  const handleNext = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (currentStep === 0 && !formData.name.trim()) return;
    if (currentStep === 1 && (!formData.email.trim() || !formData.email.includes('@'))) return;
    if (currentStep === 2 && !formData.project) return;
    
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentStep !== 3) {
      e.preventDefault();
      handleNext();
    }
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message || !formData.project) return;
    
    setFormState('loading');

    // Prepare WhatsApp message
    const phoneNumber = "917975293887";
    const message = `*New Project Inquiry from Nexlancers Studio*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Project:* ${formData.project}%0A%0A` +
      `*Message:*%0A${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    setTimeout(() => {
      setFormState('success');
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      setTimeout(() => {
        setFormState('idle');
        setFormData({ name: '', email: '', project: '', message: '' });
        setCurrentStep(0);
      }, 4000);
    }, 1500);
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@nexlancers.com' },
  ];

  const steps = [
    { id: 'name', question: "What's your name?", type: 'text', placeholder: "John Doe" },
    { id: 'email', question: "What's your email?", type: 'email', placeholder: "john@example.com" },
    { id: 'project', question: "What are you building?", type: 'select', options: ['Web App', 'Mobile App', 'UI/UX Design', 'Other'] },
    { id: 'message', question: "Tell us a bit more", type: 'textarea', placeholder: "I have this idea for..." },
  ];

  return (
    <section id="contact" className="relative flex min-h-screen w-full items-center justify-center py-16 lg:py-32 overflow-x-hidden bg-transparent">
      
      {/* ── BACKGROUND VISUALS ── */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-30 pointer-events-none" />
      
      {/* Massive Glowing Orbs */}
      <motion.div 
        animate={{ y: [0, -40, 0], x: [0, 20, 0], opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -30, 0], opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[180px] mix-blend-screen pointer-events-none z-0"
      />

      {/* Scattered Light Particles */}
      <motion.div animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-[15%] left-[20%] w-2 h-2 bg-blue-400 rounded-full blur-[2px] shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] z-0 pointer-events-none" />
      <motion.div animate={{ y: [0, 30, 0], opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute bottom-[25%] right-[25%] w-3 h-3 bg-indigo-400 rounded-full blur-[2px] shadow-[0_0_20px_5px_rgba(129,140,248,0.5)] z-0 pointer-events-none" />
      <motion.div animate={{ x: [0, -20, 0], opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }} className="absolute top-[40%] right-[5%] w-1.5 h-1.5 bg-purple-400 rounded-full blur-[1px] shadow-[0_0_10px_3px_rgba(192,132,252,0.8)] z-0 pointer-events-none" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Story / Contact Info */}
        <div className="flex flex-col justify-center h-full pt-6 lg:pt-10 lg:pr-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold tracking-[0.2em] text-blue-400 mb-5 uppercase backdrop-blur-md">
              Start a project
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-display font-black text-white leading-[1.1] tracking-tight mb-6 pb-2"
          >
            Let&apos;s Build <br className="hidden lg:block" /> Something <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 pr-4 italic">Extraordinary</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl text-zinc-400 max-w-sm font-light leading-relaxed mb-8"
          >
            Have an idea? Let's turn it into a powerful digital experience that defines your brand and drives growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {socialLinks.map((social, i) => (
              <a 
                key={social.label} 
                href={social.href}
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <social.icon className="w-5 h-5 text-zinc-400 group-hover:text-white relative z-10 transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Guided Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-lg w-full ml-auto"
        >
          {/* Subtle Form Backdrop Glow */}
          <div className="absolute -inset-10 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent blur-3xl rounded-[3rem] opacity-50 z-0 pointer-events-none" />

          <div className="relative z-10 w-full pt-8 pb-12">
            
            {/* Progress Indicator */}
            <div className="flex items-center gap-4 mb-12">
              <div className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">
                Step {currentStep + 1} <span className="text-zinc-600">/ 4</span>
              </div>
              <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((currentStep + 1) / 4) * 100}%` }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <AnimatePresence mode="popLayout">
                {steps.map((step, index) => {
                  if (index > currentStep) return null;
                  
                  const isActive = index === currentStep;
                  const isPast = index < currentStep;

                  return (
                    <motion.div 
                      key={step.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.4, 
                        y: 0, 
                        scale: 1,
                        filter: isActive ? 'blur(0px)' : 'blur(1px)'
                      }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`relative flex flex-col gap-3 ${isActive ? 'pb-4' : 'cursor-pointer'}`}
                      onClick={() => { if (isPast) setCurrentStep(index); }}
                    >
                      <label className={`font-display font-semibold transition-all duration-500 ${isActive ? 'text-2xl md:text-3xl text-white' : 'text-lg text-zinc-400'}`}>
                        {step.question}
                      </label>
                      
                      {isActive && (
                        <div className="relative w-full group">
                          {step.type === 'textarea' ? (
                            <textarea
                              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                              value={formData[step.id as keyof typeof formData]}
                              onChange={(e) => setFormData(prev => ({ ...prev, [step.id]: e.target.value }))}
                              onKeyDown={handleKeyDown}
                              placeholder={step.placeholder}
                              rows={3}
                              className="w-full bg-transparent border-b-2 border-white/20 py-3 text-xl md:text-2xl text-blue-400 placeholder:text-zinc-700 outline-none transition-all duration-300 focus:border-blue-500 resize-none font-light peer"
                            />
                          ) : step.type === 'select' ? (
                            <div className="relative w-full z-20">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsDropdownOpen(!isDropdownOpen);
                                }}
                                className={`w-full flex items-center justify-between text-left bg-transparent border-b-2 py-3 text-xl md:text-2xl outline-none transition-all duration-300 font-light group ${
                                  isDropdownOpen ? 'border-blue-500 text-blue-400' : 'border-white/20 text-blue-400 focus:border-blue-500'
                                }`}
                              >
                                <span className={!formData.project ? 'text-zinc-600' : ''}>
                                  {formData.project || 'Select an option'}
                                </span>
                                <ChevronDown className={`w-6 h-6 text-zinc-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-400' : 'group-hover:text-blue-400'}`} />
                              </button>
                              
                              <AnimatePresence>
                                {isDropdownOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 right-0 mt-3 rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-50 p-2 max-h-64 overflow-y-auto custom-scrollbar"
                                  >
                                    {step.options?.map(opt => (
                                      <button
                                        key={opt}
                                        type="button"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setFormData(prev => ({ ...prev, [step.id]: opt }));
                                          setIsDropdownOpen(false);
                                          
                                          // Short delay before auto-advancing so user sees the selection register
                                          setTimeout(() => {
                                            setCurrentStep(prev => prev < 3 ? prev + 1 : prev);
                                          }, 300);
                                        }}
                                        className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-200 text-lg mb-1 last:mb-0 ${
                                          formData.project === opt 
                                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                                            : 'text-zinc-300 hover:bg-white/10 hover:text-white border border-transparent'
                                        }`}
                                      >
                                        {opt}
                                      </button>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              
                              <input 
                                ref={inputRef as React.RefObject<HTMLInputElement>} 
                                className="sr-only" 
                                value={formData.project} 
                                readOnly 
                                onKeyDown={handleKeyDown} 
                                onFocus={() => setIsDropdownOpen(true)}
                              />
                            </div>
                          ) : (
                            <input
                              ref={inputRef as React.RefObject<HTMLInputElement>}
                              type={step.type}
                              value={formData[step.id as keyof typeof formData]}
                              onChange={(e) => setFormData(prev => ({ ...prev, [step.id]: e.target.value }))}
                              onKeyDown={handleKeyDown}
                              placeholder={step.placeholder}
                              className="w-full bg-transparent border-b-2 border-white/20 py-3 text-xl md:text-2xl text-blue-400 placeholder:text-zinc-700 outline-none transition-all duration-300 focus:border-blue-500 font-light peer"
                            />
                          )}
                          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-500 peer-focus:w-full shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
                        </div>
                      )}

                      {/* Read-only summary for past steps */}
                      {isPast && (
                        <p className="text-lg md:text-xl text-blue-400/80 font-light truncate">
                          {formData[step.id as keyof typeof formData]}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Action Buttons */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="mt-8 flex flex-wrap items-center justify-between gap-3 w-full"
            >
               {currentStep > 0 ? (
                 <button 
                   onClick={() => setCurrentStep(prev => prev - 1)}
                   className="text-sm font-semibold text-zinc-500 hover:text-white transition-colors"
                 >
                   ← Back
                 </button>
               ) : <div />}

               {currentStep < 3 ? (
                 <button
                   onClick={handleNext}
                   className="group relative inline-flex items-center gap-2 pl-5 pr-4 py-2.5 text-sm rounded-full bg-white/10 text-white font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-black"
                 >
                   Next 
                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                 </button>
               ) : (
                 <button
                   onClick={handleSubmit}
                   disabled={formState !== 'idle'}
                   className="group relative inline-flex items-center gap-2 pl-6 pr-5 py-2.5 text-sm rounded-full bg-blue-500 text-white font-semibold tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] disabled:opacity-80 disabled:hover:scale-100 overflow-hidden"
                 >
                  <AnimatePresence mode="wait">
                    {formState === 'idle' && (
                      <motion.div key="idle" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="flex items-center gap-3">
                        Launch Project <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.div>
                    )}
                    {formState === 'loading' && (
                      <motion.div key="loading" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      </motion.div>
                    )}
                    {formState === 'success' && (
                      <motion.div key="success" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="flex items-center gap-2">
                        Sent <CheckCircle2 className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                 </button>
               )}
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="min-h-[100dvh] flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-mono text-primary mb-6 flex items-center gap-2"
          >
            <span className="h-px w-8 bg-primary"></span>
            INITIALIZING_SYSTEM
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tight mb-6 text-foreground">
            Pankaj <br />
            Chaudhary<span className="text-primary">.</span>
          </h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-4xl font-mono text-muted-foreground mb-8"
          >
            &gt; Android Developer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            I build powerful tools and utilities for the Android ecosystem. 
            Precision-crafted engineering meets raw performance.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground font-mono font-bold text-sm uppercase tracking-wider rounded border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-transparent text-foreground font-mono font-bold text-sm uppercase tracking-wider rounded border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-muted-foreground flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}

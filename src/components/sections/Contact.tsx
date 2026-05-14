import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Terminal } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 bg-grid-pattern opacity-50" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <Terminal className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            Let's Build Something<span className="text-primary animate-pulse">_</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:hello@example.com"
              className="flex items-center gap-3 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium font-mono hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
            
            <a 
              href="#"
              className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card border border-border text-foreground font-medium font-mono hover:border-primary/50 hover:bg-primary/10 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            
            <a 
              href="#"
              className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card border border-border text-foreground font-medium font-mono hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

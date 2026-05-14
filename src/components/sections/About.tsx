import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-mono">
              <span className="text-primary mr-2">&gt;</span>About_
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a passionate Android developer focused on building tools, utilities, and high-performance applications for the Android ecosystem.
              </p>
              <p>
                While many focus on building typical consumer apps, my passion lies in the architecture beneath—crafting system monitors, file vaults, terminal emulators, and developer tools that require deep knowledge of the Android SDK and native subsystems.
              </p>
              <p>
                I believe in clean architecture, type safety, and pushing the boundaries of what a mobile device can compute.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-background border border-border p-6 rounded-xl hover:border-primary/50 transition-colors">
              <Terminal className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 font-mono">Tooling</h3>
              <p className="text-muted-foreground text-sm">Building utilities that empower other developers and power users.</p>
            </div>
            <div className="bg-background border border-border p-6 rounded-xl hover:border-primary/50 transition-colors mt-0 sm:mt-8">
              <Cpu className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 font-mono">System</h3>
              <p className="text-muted-foreground text-sm">Deep integration with Android internals, JNI, and low-level APIs.</p>
            </div>
            <div className="bg-background border border-border p-6 rounded-xl hover:border-primary/50 transition-colors">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 font-mono">Performance</h3>
              <p className="text-muted-foreground text-sm">Optimizing every thread, reducing overhead, and ensuring buttery smooth UI.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

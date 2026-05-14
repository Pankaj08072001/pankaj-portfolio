import React from 'react';
import { motion } from 'framer-motion';
import { Github, Play, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'DevTools Pro',
    description: 'A comprehensive suite of developer utilities for Android devices. Features include real-time layout bounds inspection, network monitoring, and an embedded shell emulator.',
    tags: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Room'],
    github: '#',
    playStore: '#'
  },
  {
    title: 'SystemMonitor X',
    description: 'Deep-level system monitoring tool providing real-time CPU, RAM, and thermal data. Built with custom native C++ libraries for low-latency metrics.',
    tags: ['C++', 'JNI', 'Kotlin', 'MVVM'],
    github: '#',
    playStore: '#'
  },
  {
    title: 'APK Analyzer',
    description: 'On-device tool to inspect installed applications. View manifest details, extract resources, and analyze permissions and dex files directly on your phone.',
    tags: ['Java', 'Android SDK', 'Retrofit'],
    github: '#',
    playStore: '#'
  },
  {
    title: 'Shell Commander',
    description: 'A robust terminal emulator for Android with custom scripting support, ssh integration, and automated task execution for power users.',
    tags: ['Kotlin', 'Coroutines', 'Flow'],
    github: '#',
    playStore: '#'
  },
  {
    title: 'File Vault',
    description: 'Secure, encrypted file manager leveraging Android Keystore for zero-knowledge local encryption and biometric authentication.',
    tags: ['Kotlin', 'Cryptography', 'Biometrics'],
    github: '#',
    playStore: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">&gt;</span>Projects_
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Selected works showcasing my focus on developer tools and system utilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-background border border-border rounded-xl p-8 hover:border-primary/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.playStore} className="text-muted-foreground hover:text-[#3DDC84] transition-colors">
                      <Play className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

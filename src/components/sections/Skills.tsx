import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Smartphone, Code2, Database } from 'lucide-react';
import { SiAndroid, SiKotlin, SiJetpackcompose, SiAndroidstudio, SiFirebase, SiGit } from 'react-icons/si';

const skills = [
  { name: 'Android SDK', icon: <SiAndroid className="w-8 h-8 text-[#3DDC84]" /> },
  { name: 'Kotlin', icon: <SiKotlin className="w-8 h-8 text-[#7F52FF]" /> },
  { name: 'Jetpack Compose', icon: <SiJetpackcompose className="w-8 h-8 text-[#4285F4]" /> },
  { name: 'Java', icon: <Code2 className="w-8 h-8 text-primary" /> },
  { name: 'MVVM & MVI', icon: <Database className="w-8 h-8 text-primary" /> },
  { name: 'Room DB', icon: <Database className="w-8 h-8 text-primary" /> },
  { name: 'Retrofit', icon: <Terminal className="w-8 h-8 text-primary" /> },
  { name: 'Coroutines', icon: <Terminal className="w-8 h-8 text-primary" /> },
  { name: 'Android Studio', icon: <SiAndroidstudio className="w-8 h-8 text-[#3DDC84]" /> },
  { name: 'Git', icon: <SiGit className="w-8 h-8 text-[#F05032]" /> },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">&gt;</span>Skills_
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            The tools I use to build robust, scalable, and high-performance Android applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all group"
            >
              <div className="group-hover:text-primary transition-colors">
                {skill.icon}
              </div>
              <span className="font-mono text-sm font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

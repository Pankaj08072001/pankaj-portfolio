import React, { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold font-mono tracking-tighter text-foreground group flex items-center gap-1">
          <span className="text-primary">{'<'}</span>
          PC
          <span className="text-primary w-2 h-4 bg-primary inline-block animate-pulse ml-1" />
          <span className="text-primary">{'>'}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-mono font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary mr-1 opacity-50">/</span>
              {link.name}
            </a>
          ))}
          
          <a 
            href="#contact"
            className="px-4 py-2 border border-primary text-primary font-mono text-sm font-medium rounded hover:bg-primary hover:text-primary-foreground transition-colors shadow-[0_0_10px_rgba(0,255,255,0.2)]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

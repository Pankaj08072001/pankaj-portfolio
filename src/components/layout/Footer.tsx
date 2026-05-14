import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-6 max-w-6xl text-center flex flex-col items-center">
        <div className="text-xl font-bold font-mono tracking-tighter text-foreground mb-6">
          <span className="text-primary">{'<'}</span>
          PC
          <span className="text-primary">{'>'}</span>
        </div>
        
        <p className="text-muted-foreground text-sm font-mono mb-2">
          Designed & Built by Pankaj Chaudhary
        </p>
        
        <p className="text-muted-foreground/50 text-xs font-mono">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

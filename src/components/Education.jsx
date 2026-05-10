import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="glass-panel p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-5 pointer-events-none text-foreground/50 hidden md:block">
        <GraduationCap size={150} />
      </div>
      
      <h3 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-6  relative z-10">
        05. Education
      </h3>

      <div className="relative z-10 w-full">
        <h3 className="text-xl md:text-2xl font-bold mb-1">Bachelor of Technology</h3>
        <h4 className="text-primary text-sm md:text-base font-medium mb-6">Computational Science</h4>
        
        <div className="space-y-4 text-xs md:text-sm opacity-80">
          <p className="flex items-center justify-between border-b border-glass-border pb-3">
            <span className="font-semibold">DYPIU, Pune</span>
            <span className="font-mono text-[10px] bg-foreground/5 rounded-full px-2 py-0.5">2022 – 2026</span>
          </p>
          <p className="flex items-center justify-between border-b border-glass-border pb-3">
            <span>Current CGPA</span>
            <span className="font-mono text-primary font-bold">7.5</span>
          </p>
          <p className="flex items-center justify-between border-b border-glass-border pb-3">
            <span>12th Grade</span>
            <span className="font-mono font-bold">79.8%</span>
          </p>
          <p className="flex items-center justify-between pb-2">
            <span>10th Grade</span>
            <span className="font-mono font-bold">90.20%</span>
          </p>
        </div>
      </div>
    </section>
  );
}

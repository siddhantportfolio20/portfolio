import { motion } from 'motion/react';
import { ChevronRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero" className="glass-panel p-8 md:p-12 relative overflow-hidden h-full flex flex-col justify-center">
      <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-2">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-blue-500 p-[3px] shrink-0">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img 
                  src="/image.jpg"
                  alt="Siddhant Tilak" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="space-y-1">
              <h1 className="text-4xl md:text-6xl font-sans font-extrabold tracking-tight">
                Siddhant <span className="text-primary">Tilak</span>
              </h1>
              <h2 className="text-sm md:text-base font-mono uppercase tracking-widest opacity-60">
                Full-Stack Dev & Data Scientist
              </h2>
            </div>
          </div>
          
          <p className="text-base md:text-lg opacity-70 max-w-2xl font-light leading-relaxed">
            I craft clean, scalable MERN stack applications and integrate real-world machine learning models. Bridging the gap between beautiful user interfaces and data-driven backend systems.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Link to="/projects" className="group flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-full font-bold text-sm transition-transform hover:scale-105 active:scale-95">
              View Work
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="/resume.pdf" download="Siddhant_Tilak_Resume.pdf" className="group flex items-center gap-2 border border-glass-border px-6 py-3 rounded-full font-medium text-sm transition-all hover:bg-white/5 active:scale-95">
              <Download size={18} className="opacity-70 group-hover:opacity-100 text-primary" />
              Resume
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

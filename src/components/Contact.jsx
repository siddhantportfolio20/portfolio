import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="glass-panel p-8 md:p-12 h-full flex flex-col md:flex-row gap-8">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-6 ">06. Contact & Network</h3>
          
          <div className="space-y-4">
            <a href="mailto:siddhantwork78@gmail.com" className="flex items-center gap-4 group">
              <div className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-primary bg-white/5 group-hover:bg-primary/20 transition-colors">
                <Mail size={16} />
              </div>
              <p className="text-sm border-b border-transparent group-hover:border-primary transition-all">siddhantwork78@gmail.com</p>
            </a>
            <a href="tel:+918830232888" className="flex items-center gap-4 group">
              <div className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-primary bg-white/5 group-hover:bg-primary/20 transition-colors">
                <Phone size={16} />
              </div>
              <p className="text-sm border-b border-transparent group-hover:border-primary transition-all">+91 8830232888</p>
            </a>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <a href="https://github.com/siddhantportfolio20" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-all">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/siddhant-tilak-439906338/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-all">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/3 flex items-center justify-center bg-white/5 rounded-2xl border border-white/5 p-8">
        <div className="text-center">
          <p className="text-5xl md:text-6xl font-bold mb-2">2+</p>
          <p className="font-mono text-[10px] md:text-xs uppercase opacity-40">Years of Practice</p>
        </div>
      </div>
    </section>
  );
}

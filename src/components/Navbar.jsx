import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ darkMode, setDarkMode }) {
  const links = ['Skills', 'Experience', 'Projects', 'Education', 'Contact'];
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-glass-border/50 transition-colors rounded-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 h-20 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-xl tracking-tight hover:text-primary transition-colors">SIDDHANT.S.TILAK</Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map(link => {
            const path = `/${link.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <Link 
                key={link} 
                to={path}
                className={`transition-all uppercase tracking-widest text-[11px] ${isActive ? 'opacity-100 text-primary font-bold' : 'opacity-70 hover:opacity-100 hover:text-primary'}`}
              >
                {link}
              </Link>
            );
          })}
        </div>

        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-glass-border transition-colors border border-transparent hover:border-glass-border"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </motion.nav>
  );
}

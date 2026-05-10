import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'motion/react';

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-[1000px] w-full mx-auto"
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/education" element={<PageWrapper><Education /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <HashRouter>
      <div className="min-h-screen transition-colors duration-300 relative overflow-hidden flex flex-col">
        {/* Ambient background glows */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute top-[-10%] sm:top-[-20%] left-[-10%] w-[40%] sm:w-[30%] h-[40%] rounded-full bg-primary/10 blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[150px] mix-blend-screen"></div>
        </div>

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="flex-1 flex flex-col justify-center px-6 py-28 items-center w-full min-h-[calc(100vh-80px)]">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

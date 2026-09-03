import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiSun, FiMoon, FiMenu, FiX, FiFileText } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';
import { useActiveSection } from '@/hooks/useActiveSection';
import profile from '@/data/profile.json';
import clsx from 'clsx';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-4 transition-all duration-300 pointer-events-none"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <nav
          className={clsx(
            'flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300',
            scrolled
              ? 'glass-strong border-surface-700/40 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
              : 'glass border-white/10'
          )}
        >
          {/* Logo */}
          <motion.button
            onClick={() => handleNav('hero')}
            className="flex items-center gap-2 font-heading font-extrabold text-xl tracking-tight text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-accent-600 to-cyan-400 flex items-center justify-center text-white text-xs font-black shadow-md">
              SC
            </span>
            <span className="hidden sm:inline-block font-extrabold tracking-normal text-surface-100">
              Sanchit<span className="text-accent-400">.</span>
            </span>
          </motion.button>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center gap-1 bg-surface-900/40 p-1 rounded-xl border border-surface-800/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={clsx(
                    'relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer',
                    isActive ? 'text-white font-semibold' : 'text-surface-400 hover:text-surface-100'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavHighlight"
                      className="absolute inset-0 bg-accent-600/80 rounded-lg shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Quick Resume Link Button */}
            <a
              href={profile.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              download="Sanchit_Chaudhary_Resume.pdf"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-accent-600/10 text-accent-400 border border-accent-500/30 hover:bg-accent-600 hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
            >
              <FiFileText size={14} />
              <span>Resume</span>
            </a>

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-surface-400 hover:text-accent-400 hover:bg-surface-800/50 transition-colors cursor-pointer border border-transparent hover:border-surface-700/50"
              whileHover={{ scale: 1.08, rotate: 15 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={18} className="text-yellow-400" /> : <FiMoon size={18} className="text-accent-600" />}
            </motion.button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2.5 rounded-xl text-surface-400 hover:text-surface-100 hover:bg-surface-800/50 transition-colors cursor-pointer border border-transparent hover:border-surface-700/50"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden mt-2 glass-strong rounded-2xl border border-surface-700/40 p-4 shadow-2xl overflow-hidden"
              initial={{ height: 0, opacity: 0, scale: 0.95 }}
              animate={{ height: 'auto', opacity: 1, scale: 1 }}
              exit={{ height: 0, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNav(link.id)}
                    className={clsx(
                      'flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer',
                      activeSection === link.id
                        ? 'text-white bg-accent-600/80 font-semibold'
                        : 'text-surface-300 hover:text-white hover:bg-surface-800/50'
                    )}
                  >
                    <span>{link.label}</span>
                    {activeSection === link.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    )}
                  </button>
                ))}

                <div className="pt-2 mt-2 border-t border-surface-800/60">
                  <a
                    href={profile.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Sanchit_Chaudhary_Resume.pdf"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold rounded-xl bg-accent-600/20 text-accent-300 border border-accent-500/30 hover:bg-accent-600 hover:text-white transition-all cursor-pointer"
                  >
                    <FiFileText size={15} />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

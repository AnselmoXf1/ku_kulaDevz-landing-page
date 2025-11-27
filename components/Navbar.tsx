import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Terminal, Sun, Moon } from 'lucide-react';
import { Language, Translation } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation['nav'];
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#about', label: t.about },
    { href: '#projects', label: t.projects },
    { href: '#team', label: t.team },
    { href: '#contact', label: t.contact },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-[2000ms] ${
        scrolled 
          ? 'bg-white/90 dark:bg-brand-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-brand-green/10 dark:bg-brand-green/20 rounded-lg flex items-center justify-center border border-brand-green transition-colors duration-[2000ms]">
              <Terminal className="text-brand-green w-6 h-6" />
            </div>
            <div className="flex flex-col">
                <span className="font-mono font-bold text-gray-900 dark:text-white text-lg tracking-wider transition-colors duration-[2000ms]">KU KULA <span className="text-brand-green">DEVZ</span></span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest hidden sm:block transition-colors duration-[2000ms]">Digital Solutions</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-brand-green dark:hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium transition-colors duration-[2000ms]"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700 transition-colors duration-[2000ms]">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, rotate: 360 }}
                  onClick={toggleTheme}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-brand-green dark:hover:text-white transition-colors duration-[2000ms] rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Toggle theme"
                >
                   <AnimatePresence mode='wait' initial={false}>
                    <motion.div
                        key={theme}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>

                <button
                  onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-full text-xs font-medium transition-colors duration-[2000ms] hover:border-brand-green"
                >
                  <Globe size={14} />
                  {lang.toUpperCase()}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <motion.button
                whileTap={{ rotate: 180 }}
                onClick={toggleTheme}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-brand-green transition-colors duration-[2000ms]"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 transition-colors duration-[2000ms]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-brand-dark border-b border-gray-200 dark:border-gray-800 transition-colors duration-[2000ms]"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 dark:text-gray-300 hover:text-brand-green dark:hover:text-brand-green block px-3 py-4 rounded-md text-base font-medium border-b border-gray-100 dark:border-gray-800 last:border-0 transition-colors duration-[2000ms]"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                    setLang(lang === 'pt' ? 'en' : 'pt');
                    setIsOpen(false);
                }}
                className="flex items-center gap-2 text-brand-green w-full px-3 py-4 text-base font-medium transition-colors duration-[2000ms]"
              >
                <Globe size={16} />
                Mudar para {lang === 'pt' ? 'Inglês' : 'Portuguese'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
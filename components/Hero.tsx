import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import MatrixRain from './MatrixRain';
import { Translation } from '../types';

interface HeroProps {
  t: Translation['hero'];
  theme: 'light' | 'dark';
}

const Hero: React.FC<HeroProps> = ({ t, theme }) => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-gray-50 dark:bg-brand-dark transition-colors duration-[2000ms] ease-in-out">
      {/* Background Effect */}
      <MatrixRain theme={theme} />
      
      {/* Overlay to ensure text readability */}
      {/* Adapts gradient to blend with the background color */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-gray-50 dark:via-brand-dark/50 dark:to-brand-dark pointer-events-none transition-colors duration-[2000ms] ease-in-out" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-mono"
        >
          Ku Kula Devz
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 transition-colors duration-[2000ms]"
        >
          {t.title.split(' ').map((word, i) => (
             <span key={i} className={i === t.title.split(' ').length - 1 ? "text-brand-green" : ""}>{word} </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-[2000ms]"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-brand-green hover:bg-green-600 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(0,166,81,0.3)] hover:shadow-[0_0_30px_rgba(0,166,81,0.5)] flex items-center justify-center gap-2"
          >
            {t.ctaPrimary}
            <ArrowRight size={20} />
          </a>
          <a
            href="#team"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:border-brand-green hover:text-brand-green dark:hover:text-brand-green font-bold rounded-lg transition-all flex items-center justify-center"
          >
            {t.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
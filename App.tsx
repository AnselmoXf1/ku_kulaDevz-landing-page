import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Team from './components/Team';
import Events from './components/Events';
import Contact from './components/Contact';
import { translations, teamMembers, projects } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  // Initialize theme based on system preference or default to dark
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
    }
    return 'dark';
  });
  
  const t = translations[lang];

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-brand-dark font-sans selection:bg-brand-green selection:text-white transition-colors duration-[2000ms] ease-in-out">
      <Navbar lang={lang} setLang={setLang} t={t.nav} theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero t={t.hero} theme={theme} />
        <About t={t.about} stats={t.stats} />
        <Projects t={t.projects} projects={projects} />
        <Team t={t.team} members={teamMembers} />
        <Events t={t.events} />
        <Contact t={t.contact} />
      </main>
    </div>
  );
};

export default App;
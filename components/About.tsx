import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Target } from 'lucide-react';
import { Translation } from '../types';

interface AboutProps {
  t: Translation['about'];
  stats: Translation['stats'];
}

const About: React.FC<AboutProps> = ({ t, stats }) => {
  const statItems = [
    { label: stats.farmers, value: '+120', color: 'text-brand-green' },
    { label: stats.members, value: '8', color: 'text-blue-500' },
    { label: stats.projects, value: '5', color: 'text-purple-500' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-brand-gray relative transition-colors duration-[2000ms] ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-brand-green pl-4 transition-colors duration-[2000ms]">
              {t.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed transition-colors duration-[2000ms]">
              {t.description}
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 dark:bg-brand-dark rounded-lg border border-gray-200 dark:border-gray-800 text-brand-green transition-colors duration-[2000ms] shadow-sm dark:shadow-none">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-semibold mb-1 transition-colors duration-[2000ms]">Missão</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-[2000ms]">{t.mission}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 dark:bg-brand-dark rounded-lg border border-gray-200 dark:border-gray-800 text-blue-500 dark:text-blue-400 transition-colors duration-[2000ms] shadow-sm dark:shadow-none">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-semibold mb-1 transition-colors duration-[2000ms]">Visão</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-[2000ms]">{t.vision}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 dark:bg-brand-dark rounded-lg border border-gray-200 dark:border-gray-800 text-purple-500 dark:text-purple-400 transition-colors duration-[2000ms] shadow-sm dark:shadow-none">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-semibold mb-1 transition-colors duration-[2000ms]">Valores</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-[2000ms]">{t.values}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Image */}
          <div className="relative">
             {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl transition-colors duration-[2000ms]"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl transition-colors duration-[2000ms]"></div>

            <div className="grid grid-cols-2 gap-4">
                {/* Simulated Image Grid */}
                <div className="space-y-4 mt-8">
                    <img src="https://picsum.photos/400/500?random=20" alt="Team meeting" className="rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:scale-105 transition-all duration-500" />
                </div>
                <div className="space-y-4">
                    <div className="bg-white dark:bg-brand-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl transition-colors duration-[2000ms]">
                        <p className="text-4xl font-bold text-brand-green">+120</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-2 transition-colors duration-[2000ms]">{stats.farmers}</p>
                    </div>
                    <img src="https://picsum.photos/400/400?random=21" alt="Jovem Criativo Event" className="rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:scale-105 transition-all duration-500" />
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { Translation } from '../types';

interface EventsProps {
  t: Translation['events'];
}

const Events: React.FC<EventsProps> = ({ t }) => {
    const images = [
        "https://picsum.photos/400/300?random=30",
        "https://picsum.photos/400/300?random=31",
        "https://picsum.photos/400/300?random=32",
        "https://picsum.photos/400/300?random=33",
    ];

  return (
    <section id="events" className="py-20 bg-gray-50 dark:bg-brand-dark overflow-hidden transition-colors duration-[2000ms] ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center transition-colors duration-[2000ms]">{t.title}</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((src, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 cursor-pointer shadow-md dark:shadow-none transition-colors duration-[2000ms]"
                >
                    <img src={src} alt="Event gallery" className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white text-xs font-mono">Jovem Criativo 2024</span>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Terminal } from 'lucide-react';
import { Translation } from '../types';

interface ContactProps {
  t: Translation['contact'];
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="bg-white dark:bg-brand-gray pt-20 pb-10 border-t border-gray-200 dark:border-gray-800 transition-colors duration-[2000ms] ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-[2000ms]">{t.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-[2000ms]">
              Tem uma ideia, um projeto ou quer fazer parte da Ku Kula Devz? 
              Entre em contacto conosco. Estamos prontos para inovar.
            </p>

            <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 transition-colors duration-[2000ms]">
                    <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-brand-dark flex items-center justify-center border border-gray-200 dark:border-gray-700 text-brand-green shadow-sm dark:shadow-none transition-colors duration-[2000ms]">
                        <Mail size={20} />
                    </div>
                    <span>kukuladevz@umum.ac.mz</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 transition-colors duration-[2000ms]">
                    <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-brand-dark flex items-center justify-center border border-gray-200 dark:border-gray-700 text-brand-green shadow-sm dark:shadow-none transition-colors duration-[2000ms]">
                        <MessageSquare size={20} />
                    </div>
                    <span>+258 84 123 4567</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 transition-colors duration-[2000ms]">
                    <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-brand-dark flex items-center justify-center border border-gray-200 dark:border-gray-700 text-brand-green shadow-sm dark:shadow-none transition-colors duration-[2000ms]">
                        <MapPin size={20} />
                    </div>
                    <span>UMUM - Maputo, Moçambique</span>
                </div>
            </div>
          </div>

          {/* Form */}
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 bg-gray-50 dark:bg-brand-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none transition-colors duration-[2000ms]"
          >
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-[2000ms]">{t.name}</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-brand-gray border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-colors duration-[2000ms]" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-[2000ms]">{t.email}</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-brand-gray border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-colors duration-[2000ms]" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-[2000ms]">{t.subject}</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-brand-gray border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-colors duration-[2000ms]" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-[2000ms]">{t.message}</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-white dark:bg-brand-gray border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-colors duration-[2000ms]"></textarea>
            </div>
            
            <button className="w-full bg-brand-green text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-brand-green/30">
                {t.send}
            </button>
          </motion.form>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-[2000ms]">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-green/20 rounded flex items-center justify-center">
                    <Terminal size={16} className="text-brand-green" />
                </div>
                <span className="font-mono font-bold text-gray-900 dark:text-white transition-colors duration-[2000ms]">KU KULA <span className="text-brand-green">DEVZ</span></span>
            </div>
            
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-right transition-colors duration-[2000ms]">
                © {new Date().getFullYear()} Ku Kula Devz. UMUM - Moçambique.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
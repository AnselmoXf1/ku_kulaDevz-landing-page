import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { Translation, Member } from '../types';

interface TeamProps {
  t: Translation['team'];
  members: Member[];
}

const Team: React.FC<TeamProps> = ({ t, members }) => {
  return (
    <section id="team" className="py-20 bg-white dark:bg-brand-gray transition-colors duration-[2000ms] ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-brand-green pl-4 transition-colors duration-[2000ms]">
                {t.title}
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 dark:bg-brand-dark rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-brand-green/50 transition-all duration-[2000ms] group shadow-sm hover:shadow-md dark:shadow-none"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 bg-brand-green/10 dark:bg-brand-green/20 rounded-full blur-lg group-hover:bg-brand-green/30 transition-all duration-[2000ms]"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-2 border-brand-green relative z-10"
                />
              </div>

              <div className="text-center">
                <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1 transition-colors duration-[2000ms]">{member.name}</h3>
                <p className="text-brand-green text-xs font-mono mb-2">{member.year}</p>
                <div className="h-px w-full bg-gray-200 dark:bg-gray-800 my-3 transition-colors duration-[2000ms]"></div>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-2 min-h-[40px] transition-colors duration-[2000ms]">{member.role}</p>
                <p className="text-gray-500 dark:text-gray-500 text-xs mb-4 line-clamp-2 transition-colors duration-[2000ms]">{member.bio}</p>
                
                <div className="flex justify-center gap-3">
                  <a href="#" className="text-gray-400 hover:text-brand-green dark:hover:text-white transition-colors duration-300">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-brand-green dark:hover:text-white transition-colors duration-300">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
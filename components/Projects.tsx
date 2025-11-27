import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';
import { Translation, Project } from '../types';

interface ProjectsProps {
  t: Translation['projects'];
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ t, projects }) => {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-brand-dark relative overflow-hidden transition-colors duration-[2000ms] ease-in-out">
        {/* Background Grid Pattern - visible in both modes with slight opacity tweak */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-soft-light pointer-events-none transition-opacity duration-[2000ms]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-[2000ms]">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-brand-gray rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md dark:shadow-none transition-colors duration-[2000ms]"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-all duration-[2000ms] z-10" />
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/90 dark:bg-brand-dark/80 backdrop-blur-sm text-brand-green text-xs font-mono rounded-full border border-brand-green/30 flex items-center gap-1 shadow-sm transition-colors duration-[2000ms]">
                            <Tag size={10} /> {tag}
                        </span>
                    ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand-green transition-colors duration-[2000ms]">
                    {project.title}
                    </h3>
                    {project.featured && (
                        <span className="px-2 py-1 bg-brand-green text-white text-[10px] font-bold uppercase rounded tracking-wider">
                            Destaque
                        </span>
                    )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 transition-colors duration-[2000ms]">
                  {project.description}
                </p>

                <button className="flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:text-brand-green dark:hover:text-brand-green transition-colors duration-[2000ms] hover:duration-300 group/btn">
                  {t.viewDetails}
                  <ExternalLink size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

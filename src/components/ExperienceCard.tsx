import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/types';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass-card p-8 group relative overflow-hidden"
      aria-labelledby={`experience-${experience.id}-title`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h3
              id={`experience-${experience.id}-title`}
              className="text-2xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors duration-300"
            >
              {experience.position}
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-primary-400 font-semibold tracking-wide uppercase text-sm">
                {experience.company}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-void-border" />
              <span className="text-gray-500 text-sm">{experience.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-gray-400 group-hover:border-primary-500/30 transition-colors">
            <span>{formatDate(experience.startDate)}</span>
            <span className="text-primary-500/50">—</span>
            <span>
              {experience.current ? (
                <span className="text-primary-400 font-bold">Present</span>
              ) : (
                formatDate(experience.endDate || '')
              )}
            </span>
          </div>
        </div>

        <ul className="space-y-4" role="list">
          {experience.description.map((item, index) => (
            <li key={index} className="text-gray-400 flex items-start gap-4 group/item">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500/40 group-hover/item:bg-primary-400 group-hover/item:scale-125 transition-all shrink-0" />
              <span className="group-hover/item:text-gray-200 transition-colors leading-relaxed font-light">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

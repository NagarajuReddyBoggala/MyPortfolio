import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { Tag } from './Tag';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className="glass-card h-full flex flex-col group relative overflow-hidden"
      aria-labelledby={`project-${project.id}-title`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex-1 p-8 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3
            id={`project-${project.id}-title`}
            className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300"
          >
            {project.name}
          </h3>
        </div>

        <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
        
        {project.longDescription && (
          <p className="text-gray-500 text-sm mb-6 font-light leading-relaxed italic border-l-2 border-primary-500/20 pl-4">
            {project.longDescription}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
          {project.tools.map((tool, index) => (
            <Tag key={index}>{tool}</Tag>
          ))}
        </div>
      </div>

      {project.links && (
        <div className="flex gap-6 p-8 pt-0 relative z-10">
          {Object.entries(project.links).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-widest uppercase text-primary-400 hover:text-primary-300 transition-all duration-300 flex items-center gap-2 group/link"
              aria-label={`View ${project.name} ${key}`}
            >
              <span className="group-hover/link:translate-x-1 transition-transform inline-block">
                {key} →
              </span>
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
};

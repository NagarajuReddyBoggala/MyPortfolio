import React from 'react';
import { Project } from '@/types';
import { Tag } from './Tag';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article
      className="card h-full flex flex-col group hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300"
      aria-labelledby={`project-${project.id}-title`}
    >
      <div className="flex-1">
        <h3
          id={`project-${project.id}-title`}
          className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors"
        >
          {project.name}
        </h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        {project.longDescription && (
          <p className="text-gray-500 text-sm mb-4">{project.longDescription}</p>
        )}
        <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
          {project.tools.map((tool, index) => (
            <Tag key={index}>{tool}</Tag>
          ))}
        </div>
      </div>
      {project.links && (
        <div className="flex gap-4 mt-4 pt-4 border-t border-gray-700">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded hover:translate-x-1 transition-transform inline-block"
              aria-label={`View ${project.name} on GitHub`}
            >
              GitHub →
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded hover:translate-x-1 transition-transform inline-block"
              aria-label={`View ${project.name} demo`}
            >
              Demo →
            </a>
          )}
          {project.links.website && (
            <a
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded hover:translate-x-1 transition-transform inline-block"
              aria-label={`Visit ${project.name} website`}
            >
              Website →
            </a>
          )}
        </div>
      )}
    </article>
  );
};

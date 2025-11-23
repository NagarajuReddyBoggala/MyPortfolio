import React from 'react';
import { Section } from '@/components/Section';
import { ProjectCard } from '@/components/ProjectCard';
import { siteData } from '@/data/site-data';

export const Projects: React.FC = () => {
  return (
    <Section id="projects" className="min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Projects
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl">
          Here are some of the projects I've worked on. Each project represents
          a unique challenge and learning experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

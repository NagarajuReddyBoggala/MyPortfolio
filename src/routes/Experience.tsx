import React from 'react';
import { Section } from '@/components/Section';
import { ExperienceCard } from '@/components/ExperienceCard';
import { siteData } from '@/data/site-data';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" className="min-h-screen flex flex-col justify-center bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Experience
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          My professional journey and the experiences that have shaped my career.
        </p>
        <div className="space-y-6">
          {siteData.experience.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </Section>
  );
};

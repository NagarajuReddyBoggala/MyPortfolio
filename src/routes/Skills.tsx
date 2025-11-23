import React from 'react';
import { Section } from '@/components/Section';
import { Tag } from '@/components/Tag';
import { siteData } from '@/data/site-data';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" className="min-h-screen flex flex-col justify-center bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Skills
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl">
          Technologies and tools I work with to build innovative solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.skills.map((skill, index) => (
            <div
              key={index}
              className="card group hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-primary-400 transition-colors">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2" role="list">
                {skill.items.map((item, itemIndex) => (
                  <Tag key={itemIndex}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};


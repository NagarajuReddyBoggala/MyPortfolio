import React from 'react';
import { Experience } from '@/types';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <article
      className="card group hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300"
      aria-labelledby={`experience-${experience.id}-title`}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3
            id={`experience-${experience.id}-title`}
            className="text-xl font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors"
          >
            {experience.position}
          </h3>
          <p className="text-primary-400 font-medium">{experience.company}</p>
          <p className="text-gray-500 text-sm mt-1">{experience.location}</p>
        </div>
        <div className="mt-2 md:mt-0 md:text-right">
          <p className="text-gray-400 text-sm">
            {formatDate(experience.startDate)} -{' '}
            {experience.current ? (
              <span className="text-primary-400">Present</span>
            ) : (
              formatDate(experience.endDate || '')
            )}
          </p>
        </div>
      </div>
      <ul className="space-y-2" role="list">
        {experience.description.map((item, index) => (
          <li key={index} className="text-gray-400 flex items-start group/item">
            <span className="text-primary-400 mr-2 mt-1.5 group-hover/item:scale-125 transition-transform">◦</span>
            <span className="group-hover/item:text-gray-300 transition-colors">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

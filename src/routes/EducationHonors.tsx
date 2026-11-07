import React from 'react';
import { Section } from '@/components/Section';
import { Education, Honor } from '@/types';

interface EducationHonorsProps {
  education: Education[];
  honors: Honor[];
}

export const EducationHonors: React.FC<EducationHonorsProps> = ({ education, honors }) => {
  return (
    <Section id="education-honors" className="min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Education & Honors
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="card group hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
                     {edu.degree}{edu.field ? ` in ${edu.field}` : ''}
                    </h4>
                    <p className="text-primary-400 font-medium">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mt-1">{edu.location}</p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="text-gray-400 text-sm">
                      {new Date(edu.startDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                      })}{' '}
                      -{' '}
                      {new Date(edu.endDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                      })}
                    </p>
                    {edu.gpa && (
                      <p className="text-primary-400 font-medium mt-1">GPA: {edu.gpa}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Certifications & Honors</h3>
          <div className="space-y-6">
            {honors.map((honor, index) => (
              <div
                key={index}
                className="glass-card p-6 group hover:scale-[1.01] hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h4 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                    {honor.title}
                  </h4>
                  {honor.date && (
                    <span className="text-xs font-mono text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20 w-fit">
                      {honor.date}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-4">{honor.description}</p>
                {honor.link && (
                  <a
                    href={honor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <span>Verify Official Credential</span>
                    <span className="text-sm">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};


import React from 'react';
import { Section } from '@/components/Section';
import { siteData } from '@/data/site-data';

export const EducationHonors: React.FC = () => {
  return (
    <Section id="education-honors" className="min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Education & Honors
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
          <div className="space-y-6">
            {siteData.education.map((edu, index) => (
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
          <h3 className="text-2xl font-semibold text-white mb-6">Honors & Awards</h3>
          <div className="space-y-6">
            {siteData.honors.map((honor, index) => (
              <div
                key={index}
                className="card group hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {honor.title}
                </h4>
                <p className="text-gray-400">{honor.description}</p>
                {honor.date && (
                  <p className="text-gray-500 text-sm mt-2">{honor.date}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};


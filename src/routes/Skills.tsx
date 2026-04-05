import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { Tag } from '@/components/Tag';
import { Skill } from '@/types';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section id="skills" className="section bg-void-base/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">
            A comprehensive overview of the technologies and methodologies I employ to architect and build high-performance systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 group relative overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-primary-500/30 group-hover:w-12 transition-all duration-500" />
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2.5" role="list">
                  {skill.items.map((item, itemIndex) => (
                    <Tag key={itemIndex}>{item}</Tag>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};


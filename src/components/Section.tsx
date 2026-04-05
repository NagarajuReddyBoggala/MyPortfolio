import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
}) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {(title || subtitle) && (
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:text-left"
          >
            {title && (
              <h2 className="section-title">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="section-subtitle">
                {subtitle}
              </p>
            )}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
};


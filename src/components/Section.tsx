import React from 'react';

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <header className="mb-12">
            {title && (
              <h2 className="section-title" id={id ? `${id}-title` : undefined}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="section-subtitle" id={id ? `${id}-subtitle` : undefined}>
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
};


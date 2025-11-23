import React from 'react';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { siteData } from '@/data/site-data';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Home: React.FC = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Hi, I'm <span className="text-primary-400 hover:text-primary-300 transition-colors inline-block hover:scale-110 transition-transform">Boggala Nagaraju Reddy</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8">
          {siteData.profile.title}
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          {siteData.profile.summary}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => scrollToSection('experience')} variant="primary">
            View Experience
          </Button>
          <Button onClick={() => scrollToSection('connect')} variant="outline">
            Get In Touch
          </Button>
        </div>
      </div>
    </Section>
  );
};

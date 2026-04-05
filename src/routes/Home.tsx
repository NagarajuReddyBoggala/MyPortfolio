import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { SiteIdentity } from '@/types';

interface HomeProps {
  identity: SiteIdentity;
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Home: React.FC<HomeProps> = ({ identity }) => {
  return (
    <Section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12">
      {/* Background Glows */}
      <div className="glow-primary -top-24 -left-24 opacity-30" />
      <div className="glow-secondary top-1/2 -right-24 opacity-20" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-indigo-400">Nagaraju Reddy</span>
          </h1>
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-mono text-sm mb-8">
            {identity.title}
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          {identity.summary}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button onClick={() => scrollToSection('experience')} variant="primary" size="lg" className="w-full sm:w-auto">
            Explore Experience
          </Button>
          <Button onClick={() => scrollToSection('projects')} variant="secondary" size="lg" className="w-full sm:w-auto">
            View Projects
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

import React from 'react';
import { Profile, SiteIdentity } from '@/types';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

interface FooterProps {
  profile: Profile;
  identity: SiteIdentity;
}

export const Footer: React.FC<FooterProps> = ({ profile, identity }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-void-base border-t border-void-border relative overflow-hidden" role="contentinfo">
      <div className="glow-secondary -top-24 -right-24 opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">
              {profile.name}
            </h2>
            <p className="text-gray-500 text-sm font-mono tracking-wider uppercase">
              {identity.title}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-8">
              {['home', 'experience', 'skills', 'projects', 'connect'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-all duration-300"
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-6">
            {Object.entries(profile.links).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-all duration-300"
                aria-label={`${key} profile`}
              >
                <span className="text-sm font-medium capitalize">{key}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-void-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-xs tracking-wide">
            © {currentYear} {profile.name}. Crafted with Precision.
          </p>
          <div className="flex gap-4 text-[10px] font-mono uppercase tracking-widest text-gray-600">
            <span>React</span>
            <span>•</span>
            <span>Tailwind</span>
            <span>•</span>
            <span>Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

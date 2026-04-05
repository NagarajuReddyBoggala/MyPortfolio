import React from 'react';
import { motion } from 'framer-motion';
import { SiteIdentity } from '@/types';

interface ProfileToggleProps {
  activeId: string;
  identities: SiteIdentity[];
  onToggle: (id: 'platform' | 'engineer') => void;
}

export const ProfileToggle: React.FC<ProfileToggleProps> = ({ activeId, identities, onToggle }) => {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="relative p-1.5 glass-card rounded-full flex items-center bg-white/5 border-white/10">
        {identities.map((identity) => (
          <button
            key={identity.id}
            onClick={() => onToggle(identity.id)}
            className={`relative z-10 px-8 py-2 text-xs font-bold tracking-widest uppercase transition-colors duration-500 rounded-full ${
              activeId === identity.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {activeId === identity.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-primary-600 rounded-full shadow-lg shadow-primary-600/20"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-20">{identity.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

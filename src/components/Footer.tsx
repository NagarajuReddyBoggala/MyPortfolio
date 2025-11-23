import React from 'react';
import { siteData } from '@/data/site-data';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {siteData.profile.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {siteData.profile.summary}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-gray-400 hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded hover:translate-x-1 transition-transform inline-block"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="text-gray-400 hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded hover:translate-x-1 transition-transform inline-block"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('connect')}
                    className="text-gray-400 hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded hover:translate-x-1 transition-transform inline-block"
                  >
                    Connect
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2" role="list">
              {siteData.profile.links.linkedin && (
                <li>
                  <a
                    href={siteData.profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded hover:translate-x-1 transition-transform inline-block"
                    aria-label="LinkedIn profile"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              {siteData.profile.links.github && (
                <li>
                  <a
                    href={siteData.profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded hover:translate-x-1 transition-transform inline-block"
                    aria-label="GitHub profile"
                  >
                    GitHub
                  </a>
                </li>
              )}
              {siteData.profile.links.leetcode && (
                <li>
                  <a
                    href={siteData.profile.links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded hover:translate-x-1 transition-transform inline-block"
                    aria-label="LeetCode profile"
                  >
                    LeetCode
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {siteData.profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

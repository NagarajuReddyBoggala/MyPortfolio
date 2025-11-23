import React, { useState, FormEvent } from 'react';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { siteData } from '@/data/site-data';

export const Connect: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    // In a real application, you would send this to your backend
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="connect" className="min-h-screen flex flex-col justify-center bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Connect
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="group">
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a
                  href={`mailto:${siteData.profile.email}`}
                  className="text-primary-400 hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded inline-block hover:translate-x-1 transition-transform"
                >
                  {siteData.profile.email}
                </a>
              </div>
              <div className="group">
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <a
                  href={`tel:${siteData.profile.phone}`}
                  className="text-primary-400 hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded inline-block hover:translate-x-1 transition-transform"
                >
                  {siteData.profile.phone}
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Location</p>
                <p className="text-gray-300">{siteData.profile.location}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Social Links</h3>
            <div className="space-y-3">
              {siteData.profile.links.linkedin && (
                <a
                  href={siteData.profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-400 hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded hover:translate-x-1 transition-transform inline-block"
                  aria-label="LinkedIn profile"
                >
                  LinkedIn →
                </a>
              )}
              {siteData.profile.links.github && (
                <a
                  href={siteData.profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-400 hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded hover:translate-x-1 transition-transform inline-block"
                  aria-label="GitHub profile"
                >
                  GitHub →
                </a>
              )}
              {siteData.profile.links.leetcode && (
                <a
                  href={siteData.profile.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-400 hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded hover:translate-x-1 transition-transform inline-block"
                  aria-label="LeetCode profile"
                >
                  LeetCode →
                </a>
              )}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card group hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300" aria-label="Contact form">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-gray-600"
              placeholder="Your name"
              aria-required="true"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-gray-600"
              placeholder="your.email@example.com"
              aria-required="true"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all hover:border-gray-600"
              placeholder="Your message..."
              aria-required="true"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            disabled={status === 'sending'}
            className="w-full hover:scale-105 transition-transform"
          >
            {status === 'sending'
              ? 'Sending...'
              : status === 'success'
              ? 'Message Sent!'
              : 'Send Message'}
          </Button>

          {status === 'error' && (
            <p className="mt-4 text-red-400 text-sm" role="alert">
              There was an error sending your message. Please try again.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
};


import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { Profile } from '@/types';

interface ConnectProps {
  profile: Profile;
}

export const Connect: React.FC<ConnectProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
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
    <Section id="connect" className="section bg-void-base relative">
      <div className="glow-primary -bottom-24 -left-24 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle mx-auto">
            Whether you have a question about a project, an opportunity, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-8 border-b border-white/5 pb-4">
                Reach Out Directly
              </h3>
              <div className="space-y-6">
                <div className="group">
                  <p className="text-void-accent text-xs font-mono uppercase tracking-widest mb-1 opacity-70">Email Address</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-xl text-white hover:text-primary-400 transition-all duration-300 font-light"
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="group">
                  <p className="text-void-accent text-xs font-mono uppercase tracking-widest mb-1 opacity-70">Phone Contact</p>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-xl text-white hover:text-primary-400 transition-all duration-300 font-light"
                  >
                    {profile.phone}
                  </a>
                </div>
                <div>
                  <p className="text-void-accent text-xs font-mono uppercase tracking-widest mb-1 opacity-70">Current Base</p>
                  <p className="text-xl text-white font-light">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 bg-primary-600/5">
              <h3 className="text-xl font-bold text-white mb-6">Digital Presence</h3>
              <div className="flex flex-wrap gap-4">
                {Object.entries(profile.links).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300 text-sm font-medium capitalize"
                  >
                    {key}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form 
              onSubmit={handleSubmit} 
              className="glass-card p-8 md:p-12 relative overflow-hidden" 
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">
                  Message Content
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 resize-none transition-all"
                  placeholder="How can I help you today?"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === 'sending'}
                className="w-full relative shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              >
                {status === 'sending'
                  ? 'Transmitting...'
                  : status === 'success'
                  ? 'Successfully Sent!'
                  : 'Establish Connection'}
              </Button>

              {status === 'error' && (
                <p className="mt-4 text-red-400 text-sm font-medium text-center" role="alert">
                  Communication failed. Please try again or use direct email.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};


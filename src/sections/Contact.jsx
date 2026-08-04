import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiSend, FiCheck, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import SectionWrapper from '@/components/SectionWrapper';
import Button from '@/components/Button';
import profile from '@/data/profile.json';

const socialIcons = {
  github: { icon: FiGithub, label: 'GitHub' },
  linkedin: { icon: FiLinkedin, label: 'LinkedIn' },
  twitter: { icon: FiTwitter, label: 'Twitter' },
  email: { icon: FiMail, label: 'Email' },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission (replace with Formspree, EmailJS, etc.)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SectionWrapper id="contact">
      {/* Blobs */}
      <div className="blob blob-violet w-[400px] h-[400px] -bottom-40 left-1/4 opacity-15" />
      <div className="blob blob-blue w-[300px] h-[300px] top-20 -right-20 opacity-10" />

      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-h2 font-bold text-gradient">Get In Touch</h2>
        <p className="text-surface-400 mt-3 max-w-xl mx-auto">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-10 lg:gap-16">
        {/* Contact form */}
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass rounded-2xl p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring', damping: 15 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', damping: 10 }}
                  >
                    <FiCheck className="text-green-400" size={32} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-surface-100">Message Sent!</h3>
                  <p className="text-surface-400 mt-2">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-surface-300 mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-surface-900/50 border border-surface-700/50
                                 text-surface-200 placeholder-surface-500
                                 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500/50
                                 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-surface-300 mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-surface-900/50 border border-surface-700/50
                                 text-surface-200 placeholder-surface-500
                                 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500/50
                                 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-surface-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-900/50 border border-surface-700/50
                                 text-surface-200 placeholder-surface-500
                                 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500/50
                                 transition-all duration-200 resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full justify-center">
                    {isSubmitting ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                    ) : (
                      <>
                        Send Message
                        <FiSend size={16} />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Social links + info */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="glass rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-surface-100 mb-2">Let's connect</h3>
              <p className="text-surface-400 text-sm leading-relaxed mb-8">
                Feel free to reach out through any of these platforms. I'm always open to discussing
                new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                {Object.entries(profile.socialLinks).map(([platform, url]) => {
                  const social = socialIcons[platform];
                  if (!social) return null;
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent-600/10
                                 transition-colors duration-200 group"
                      whileHover={{ x: 6 }}
                    >
                      <div className="p-2.5 rounded-lg bg-accent-600/10 group-hover:bg-accent-600/20 transition-colors">
                        <Icon className="text-accent-400" size={20} />
                      </div>
                      <div>
                        <p className="text-surface-200 font-medium text-sm">{social.label}</p>
                        <p className="text-surface-500 text-xs truncate max-w-[200px]">{url.replace(/https?:\/\//, '')}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Email CTA */}
            <div className="mt-8 pt-6 border-t border-surface-800/30">
              <p className="text-surface-500 text-sm mb-1">Prefer email?</p>
              <a
                href={`mailto:${profile.contactEmail}`}
                className="text-accent-400 font-semibold hover:text-accent-300 transition-colors"
              >
                {profile.contactEmail}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

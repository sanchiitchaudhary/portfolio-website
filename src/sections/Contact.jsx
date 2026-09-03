import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiSend, FiCheck, FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUpRight } from 'react-icons/fi';
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

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SectionWrapper id="contact">
      {/* Background Blobs */}
      <div className="blob blob-violet w-[450px] h-[450px] -bottom-40 left-1/4 opacity-20" />
      <div className="blob blob-blue w-[350px] h-[350px] top-20 -right-20 opacity-15" />

      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-accent-400 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full glass border border-accent-500/20 inline-block mb-3">
          Let's Work Together
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-h2 font-bold text-gradient font-heading">Get In Touch</h2>
        <p className="text-surface-400 mt-3 max-w-xl mx-auto text-base">
          Have a project in mind, an opportunity, or just want to say hello? Drop me a message.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-10 lg:gap-16">
        {/* Interactive Contact Form */}
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass glass-glow rounded-3xl p-6 sm:p-9 border border-white/10">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center py-14 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring', damping: 15 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(52,211,153,0.3)]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: 'spring', damping: 10 }}
                  >
                    <FiCheck className="text-emerald-400" size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-surface-100 font-heading">Message Sent Successfully!</h3>
                  <p className="text-surface-300 mt-2 max-w-md">Thank you for reaching out. I've received your message and will get back to you shortly.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-surface-300 mb-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Sanchit Chaudhary"
                      className="w-full px-4 py-3.5 rounded-2xl bg-surface-900/60 border border-surface-700/60
                                 text-surface-100 placeholder-surface-500 font-sans text-sm
                                 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30
                                 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono font-bold uppercase tracking-wider text-surface-300 mb-2">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sanchiitchaudhary@gmail.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-surface-900/60 border border-surface-700/60
                                 text-surface-100 placeholder-surface-500 font-sans text-sm
                                 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30
                                 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono font-bold uppercase tracking-wider text-surface-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, idea, or role..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-surface-900/60 border border-surface-700/60
                                 text-surface-100 placeholder-surface-500 font-sans text-sm
                                 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30
                                 transition-all duration-200 resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full justify-center py-4 text-base">
                    {isSubmitting ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend size={18} />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Social Links & Contact Details */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass glass-glow rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between border border-white/10">
            <div>
              <h3 className="text-2xl font-bold text-surface-100 font-heading mb-2">Direct Contact</h3>
              <p className="text-surface-400 text-sm leading-relaxed mb-8">
                Connect via social media or send an email directly. I respond quickly.
              </p>

              <div className="space-y-3">
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
                      className="flex items-center justify-between p-3.5 rounded-2xl glass hover:bg-accent-600/15 border border-surface-700/40 hover:border-accent-500/40 transition-all duration-300 group"
                      whileHover={{ x: 6 }}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="p-2.5 rounded-xl bg-accent-600/20 text-accent-300 group-hover:bg-accent-600 group-hover:text-white transition-all">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-surface-100 font-bold text-sm font-heading">{social.label}</p>
                          <p className="text-surface-400 text-xs truncate max-w-[180px]">{url.replace(/https?:\/\//, '')}</p>
                        </div>
                      </div>
                      <FiArrowUpRight className="text-surface-500 group-hover:text-accent-300 transition-colors" size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Email CTA Footer */}
            <div className="mt-8 pt-6 border-t border-surface-800/60">
              <p className="text-surface-500 text-xs font-mono uppercase tracking-wider mb-1">Direct Email</p>
              <a
                href={`mailto:${profile.contactEmail}`}
                className="text-accent-300 font-bold text-sm sm:text-base hover:text-cyan-400 transition-colors"
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

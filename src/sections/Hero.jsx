import { motion } from 'motion/react';
import { FiArrowDown, FiDownload } from 'react-icons/fi';
import ParticleCanvas from '@/components/ParticleCanvas';
import Button from '@/components/Button';
import profile from '@/data/profile.json';

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8 + i * 0.04,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Particle background */}
      <ParticleCanvas />

      {/* Gradient blobs */}
      <div className="blob blob-violet w-[500px] h-[500px] -top-40 -right-40 animate-pulse-glow" />
      <div className="blob blob-blue w-[400px] h-[400px] bottom-20 -left-40 animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="blob blob-pink w-[300px] h-[300px] top-1/2 right-1/4 animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.p
          className="text-accent-400 font-semibold text-sm sm:text-base tracking-wider uppercase mb-4"
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {profile.tagline}
        </motion.p>

        {/* Name — letter-by-letter reveal */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-display font-black tracking-tight leading-[1.1]">
          <span className="sr-only">{profile.name}</span>
          <span aria-hidden="true" className="flex flex-wrap justify-center gap-x-3">
            {profile.name.split(' ').map((word, wordIdx) => (
              <span key={wordIdx} className="inline-flex">
                {word.split('').map((char, charIdx) => {
                  const globalIdx = profile.name.indexOf(word) + charIdx;
                  return (
                    <motion.span
                      key={charIdx}
                      className="text-gradient inline-block"
                      custom={globalIdx}
                      initial="hidden"
                      animate="visible"
                      variants={letterVariants}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </span>
        </h1>

        {/* Title */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-surface-300 font-light mt-4"
          custom={1.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {profile.title}
        </motion.p>

        {/* Bio excerpt */}
        <motion.p
          className="text-surface-400 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
          custom={1.6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {profile.bio.split('.').slice(0, 2).join('.') + '.'}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10"
          custom={1.9}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Button onClick={scrollToProjects} variant="primary">
            View Projects
            <FiArrowDown size={16} />
          </Button>
          <Button href={profile.resumeLink} variant="secondary" target="_blank" rel="noopener noreferrer" download="Sanchit_Chaudhary_Resume.pdf">
            <FiDownload size={16} />
            Download Resume
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FiArrowDown className="text-surface-500" size={20} />
      </motion.div>
    </section>
  );
}

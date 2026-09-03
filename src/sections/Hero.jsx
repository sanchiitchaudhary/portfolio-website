import { motion } from 'motion/react';
import { FiArrowDown, FiDownload, FiZap, FiCode, FiCpu } from 'react-icons/fi';
import ParticleCanvas from '@/components/ParticleCanvas';
import Button from '@/components/Button';
import profile from '@/data/profile.json';

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.6 + i * 0.04,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const badgeFloat = {
  animate: (custom) => ({
    y: [0, custom.y, 0],
    rotate: [0, custom.r, 0],
    transition: {
      duration: custom.d,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: custom.delay,
    },
  }),
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-24 pb-16"
    >
      {/* Particle background */}
      <ParticleCanvas />

      {/* Dynamic Animated Blobs */}
      <div className="blob blob-violet w-[550px] h-[550px] -top-32 -right-32 animate-pulse-glow" />
      <div className="blob blob-blue w-[450px] h-[450px] bottom-10 -left-32 animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
      <div className="blob blob-pink w-[350px] h-[350px] top-1/2 right-1/4 animate-pulse-glow" style={{ animationDelay: '4.5s' }} />

      {/* Grid Mesh Overlay */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      {/* Floating Interactive Tech Badges (Desktop) */}
      <motion.div
        className="hidden lg:flex items-center gap-2 absolute top-36 left-12 glass px-3.5 py-2 rounded-2xl border-accent-500/20 text-xs font-semibold text-accent-300 shadow-xl"
        variants={badgeFloat}
        animate="animate"
        custom={{ y: -12, r: -2, d: 5.5, delay: 0 }}
      >
        <FiZap className="text-yellow-400" size={14} />
        <span>Full-Stack & ML Specialist</span>
      </motion.div>

      <motion.div
        className="hidden lg:flex items-center gap-2 absolute bottom-44 left-20 glass px-3.5 py-2 rounded-2xl border-cyan-500/20 text-xs font-semibold text-cyan-300 shadow-xl"
        variants={badgeFloat}
        animate="animate"
        custom={{ y: 14, r: 2, d: 6.5, delay: 1 }}
      >
        <FiCpu className="text-cyan-400" size={14} />
        <span>Python • FastAPI • React 19</span>
      </motion.div>

      <motion.div
        className="hidden lg:flex items-center gap-2 absolute top-40 right-16 glass px-3.5 py-2 rounded-2xl border-pink-500/20 text-xs font-semibold text-pink-300 shadow-xl"
        variants={badgeFloat}
        animate="animate"
        custom={{ y: -15, r: 3, d: 6, delay: 0.5 }}
      >
        <FiCode className="text-pink-400" size={14} />
        <span>LLM Integration & AI Systems</span>
      </motion.div>

      {/* Main Content Box */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status Pill Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent-500/30 text-accent-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-[0_0_20px_rgba(124,58,237,0.2)]"
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{profile.tagline}</span>
        </motion.div>

        {/* Name — 3D letter stagger reveal */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tight leading-[1.08] font-heading">
          <span className="sr-only">{profile.name}</span>
          <span aria-hidden="true" className="flex flex-wrap justify-center gap-x-4">
            {profile.name.split(' ').map((word, wordIdx) => (
              <span key={wordIdx} className="inline-flex">
                {word.split('').map((char, charIdx) => {
                  const globalIdx = profile.name.indexOf(word) + charIdx;
                  return (
                    <motion.span
                      key={charIdx}
                      className="text-gradient inline-block transform-gpu"
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
          className="text-xl sm:text-2xl md:text-3xl text-surface-200 font-light mt-5 tracking-wide font-heading"
          custom={1.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {profile.title}
        </motion.p>

        {/* Bio excerpt */}
        <motion.p
          className="text-surface-400 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-sans"
          custom={1.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {profile.bio.split('.').slice(0, 2).join('.') + '.'}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 mt-10"
          custom={1.7}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Button onClick={scrollToProjects} variant="primary">
            <span>View Projects</span>
            <FiArrowDown size={16} className="animate-bounce" />
          </Button>
          <Button
            href={profile.resumeLink}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            download="Sanchit_Chaudhary_Resume.pdf"
          >
            <FiDownload size={16} />
            <span>Download Resume</span>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToProjects}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] uppercase font-mono tracking-widest text-surface-500">Scroll</span>
        <FiArrowDown className="text-accent-400" size={18} />
      </motion.div>
    </section>
  );
}

import { motion } from 'motion/react';
import { FiDownload, FiAward, FiBookOpen, FiMapPin, FiCode } from 'react-icons/fi';
import SectionWrapper from '@/components/SectionWrapper';
import SkillTag from '@/components/SkillTag';
import Button from '@/components/Button';
import profile from '@/data/profile.json';
import skills from '@/data/skills.json';

const stats = [
  { icon: FiBookOpen, label: 'Education', value: 'NSUT — B.Tech IT' },
  { icon: FiAward, label: 'JEE Mains', value: '99th Percentile' },
  { icon: FiCode, label: 'Hackathon', value: "Wreckathon '25 Winner" },
];

export default function About() {
  // Flatten all skills for the tag display
  const allSkills = skills.flatMap((cat) => cat.items).slice(0, 16);

  return (
    <SectionWrapper id="about">
      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-accent-400 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full glass border border-accent-500/20 inline-block mb-3">
          Behind the Code
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-h2 font-bold text-gradient font-heading">About Me</h2>
        <p className="text-surface-400 mt-3 max-w-xl mx-auto text-base">
          Get to know the developer, engineer, and problem solver
        </p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
        {/* Photo Card with 3D perspective effect */}
        <motion.div
          className="md:col-span-2 flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative group">
            {/* Ambient neon backdrop glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent-600/40 via-cyan-500/30 to-pink-500/20 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Glass frame */}
            <div className="relative glass rounded-3xl p-3 overflow-hidden border border-white/15 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={profile.profilePhoto}
                alt={profile.name}
                className="w-64 h-72 sm:w-72 sm:h-84 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
            </div>

            {/* Floating Location Badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 glass-strong rounded-2xl px-4 py-2 text-xs font-bold text-accent-300 flex items-center gap-1.5 shadow-xl border border-accent-500/30"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FiMapPin className="text-pink-400" size={14} />
              <span>{profile.location}</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Bio + Stats + Tech tags */}
        <motion.div
          className="md:col-span-3 space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-surface-100 font-heading">
            Hello! I'm <span className="text-gradient">{profile.name.split(' ')[0]}</span>
          </h3>

          <p className="text-surface-400 leading-relaxed text-base sm:text-lg">
            {profile.bio}
          </p>

          {/* Quick Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {stats.map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={i} className="glass p-3.5 rounded-xl border-surface-700/40 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent-600/15 text-accent-400">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-surface-500">{st.label}</p>
                    <p className="text-xs font-bold text-surface-100">{st.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2">
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
          </div>

          {/* Quick tech tags */}
          <div className="pt-4">
            <p className="text-xs font-bold text-surface-500 uppercase tracking-widest mb-3 font-mono">
              Core Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {allSkills.map((skill, i) => (
                <SkillTag key={skill} name={skill} index={i} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

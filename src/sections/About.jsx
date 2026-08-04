import { motion } from 'motion/react';
import SectionWrapper from '@/components/SectionWrapper';
import SkillTag from '@/components/SkillTag';
import profile from '@/data/profile.json';
import skills from '@/data/skills.json';

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
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-h2 font-bold text-gradient">About Me</h2>
        <p className="text-surface-400 mt-3 max-w-xl mx-auto">
          Get to know the person behind the code
        </p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
        {/* Photo */}
        <motion.div
          className="md:col-span-2 flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent-600/30 to-accent-800/10 blur-xl" />
            <div className="relative glass rounded-2xl p-2 overflow-hidden">
              <img
                src={profile.profilePhoto}
                alt={profile.name}
                className="w-64 h-72 sm:w-72 sm:h-80 object-cover rounded-xl"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-3 -right-3 glass rounded-xl px-4 py-2 text-sm font-semibold text-accent-400"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              📍 {profile.location}
            </motion.div>
          </div>
        </motion.div>

        {/* Bio + Skills */}
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-surface-100 mb-4">
            Hello! I'm <span className="text-gradient">{profile.name.split(' ')[0]}</span>
          </h3>

          <p className="text-surface-400 leading-relaxed text-base sm:text-lg">
            {profile.bio}
          </p>

          {/* Quick tech tags */}
          <div className="mt-8">
            <p className="text-sm font-semibold text-surface-500 uppercase tracking-wider mb-4">
              Technologies I work with
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

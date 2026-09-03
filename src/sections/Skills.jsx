import { motion } from 'motion/react';
import { FaReact, FaServer, FaBrain, FaCloud, FaTools } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';
import GlassCard from '@/components/GlassCard';
import skills from '@/data/skills.json';

const iconMap = {
  FaReact: FaReact,
  FaServer: FaServer,
  FaBrain: FaBrain,
  FaCloud: FaCloud,
  FaTools: FaTools,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      {/* Background Blob */}
      <div className="blob blob-pink w-[450px] h-[450px] top-20 -right-20 opacity-20" />

      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-pink-400 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full glass border border-pink-500/20 inline-block mb-3">
          Tech Stack & Expertise
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-h2 font-bold text-gradient font-heading">Skills & Tools</h2>
        <p className="text-surface-400 mt-3 max-w-xl mx-auto text-base">
          Languages, frameworks, databases, and Machine Learning tools I use to build scalable software
        </p>
      </motion.div>

      {/* Asymmetric skill cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, catIdx) => {
          const Icon = iconMap[category.icon] || FaTools;

          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="h-full border border-white/10 hover:border-accent-500/40">
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-surface-800/60">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-accent-600/20 to-cyan-500/10 text-accent-400 border border-accent-500/30 shadow-[0_0_15px_rgba(124,58,237,0.25)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-surface-100 font-heading">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 text-xs sm:text-sm rounded-xl font-semibold
                                 bg-surface-900/60 text-surface-300 border border-surface-700/50
                                 hover:bg-accent-600/20 hover:text-white hover:border-accent-400/60 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]
                                 transition-all duration-200 cursor-default select-none"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIdx * 0.1 + skillIdx * 0.04 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

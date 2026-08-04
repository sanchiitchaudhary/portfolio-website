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
      {/* Blob */}
      <div className="blob blob-pink w-[400px] h-[400px] top-20 -right-20 opacity-15" />

      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-h2 font-bold text-gradient">Skills & Tools</h2>
        <p className="text-surface-400 mt-3 max-w-xl mx-auto">
          The technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((category, catIdx) => {
          const Icon = iconMap[category.icon] || FaTools;
          // Make first two categories span 2 columns on large screens for asymmetry
          const isWide = catIdx < 2;

          return (
            <motion.div
              key={category.category}
              className={isWide ? 'lg:col-span-1' : ''}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-accent-600/15">
                    <Icon className="text-accent-400" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-surface-100">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg font-medium
                                 bg-surface-800/50 text-surface-300 border border-surface-700/50
                                 hover:bg-accent-600/10 hover:text-accent-400 hover:border-accent-500/30
                                 transition-all duration-200 cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIdx * 0.1 + skillIdx * 0.04 }}
                      whileHover={{ scale: 1.05 }}
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

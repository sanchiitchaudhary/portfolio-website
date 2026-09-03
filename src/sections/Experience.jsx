import { motion } from 'motion/react';
import SectionWrapper from '@/components/SectionWrapper';
import TimelineItem from '@/components/TimelineItem';
import experience from '@/data/experience.json';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Background Blob */}
      <div className="blob blob-violet w-[450px] h-[450px] top-10 right-0 opacity-20" />

      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-accent-400 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full glass border border-accent-500/20 inline-block mb-3">
          Career Path
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-h2 font-bold text-gradient font-heading">Experience</h2>
        <p className="text-surface-400 mt-3 max-w-xl mx-auto text-base">
          My professional journey, enterprise consulting roles, and technical achievements
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Glowing vertical spine line (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent-600/40 via-cyan-400/40 to-accent-600/10 -translate-x-1/2 shadow-[0_0_12px_rgba(124,58,237,0.4)]" />

        <div className="space-y-10 md:space-y-16">
          {experience.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

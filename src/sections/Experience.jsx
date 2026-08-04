import { motion } from 'motion/react';
import SectionWrapper from '@/components/SectionWrapper';
import TimelineItem from '@/components/TimelineItem';
import experience from '@/data/experience.json';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Gradient blob */}
      <div className="blob blob-violet w-[400px] h-[400px] top-0 right-0 opacity-20" />

      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-h2 font-bold text-gradient">Experience</h2>
        <p className="text-surface-400 mt-3 max-w-xl mx-auto">
          My professional journey and the impact I've made
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-accent-600/20 -translate-x-1/2" />

        <div className="space-y-8 md:space-y-12">
          {experience.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

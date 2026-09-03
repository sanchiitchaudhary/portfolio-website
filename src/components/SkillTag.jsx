import { motion } from 'motion/react';

export default function SkillTag({ name, index = 0 }) {
  return (
    <motion.span
      className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold
                 glass text-accent-300 border border-accent-500/25
                 hover:bg-accent-600/20 hover:text-white hover:border-accent-400/60 hover:shadow-[0_0_15px_rgba(124,58,237,0.35)]
                 transition-all duration-200 cursor-default select-none"
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08, y: -2 }}
    >
      {name}
    </motion.span>
  );
}

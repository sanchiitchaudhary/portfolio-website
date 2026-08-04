import { motion } from 'motion/react';

export default function SkillTag({ name, index = 0 }) {
  return (
    <motion.span
      className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium
                 bg-accent-600/10 text-accent-400 border border-accent-500/20
                 hover:bg-accent-600/20 hover:border-accent-400/40
                 transition-colors duration-200 cursor-default"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.08 }}
    >
      {name}
    </motion.span>
  );
}

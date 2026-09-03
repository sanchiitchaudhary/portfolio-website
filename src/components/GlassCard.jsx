import { motion } from 'motion/react';
import clsx from 'clsx';

export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <motion.div
      className={clsx(
        'glass glass-glow rounded-2xl p-6 relative overflow-hidden transition-all duration-300',
        hover && 'hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_rgba(124,58,237,0.3)] hover:border-accent-500/40',
        className
      )}
      whileHover={hover ? { scale: 1.015 } : undefined}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
    >
      {/* Subtle glass reflection overlay */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
}

import { motion } from 'motion/react';

export default function Button({ children, href, onClick, variant = 'primary', className = '', type, target, rel, ...props }) {
  const base = 'relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-accent-600 text-white hover:bg-accent-500 glow-accent-hover',
    secondary: 'border border-accent-500/30 text-accent-400 hover:bg-accent-600/10 hover:border-accent-400/50',
    ghost: 'text-surface-400 hover:text-accent-400 hover:bg-surface-800/50',
  };

  const joined = [base, variants[variant], className].filter(Boolean).join(' ');

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={joined}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type || 'button'}
      onClick={onClick}
      className={joined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

import { motion } from 'motion/react';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type,
  target,
  rel,
  ...props
}) {
  const base =
    'relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer overflow-hidden group select-none font-heading';

  const variants = {
    primary:
      'bg-gradient-to-r from-accent-600 via-accent-500 to-accent-700 text-white shadow-[0_4px_20px_rgba(124,58,237,0.35)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.6)] border border-accent-400/30',
    secondary:
      'glass text-accent-300 border border-accent-500/30 hover:border-accent-400/60 hover:bg-accent-600/15 hover:text-white shadow-[0_4px_15px_rgba(0,0,0,0.2)]',
    ghost:
      'text-surface-400 hover:text-accent-300 hover:bg-surface-800/60 border border-transparent hover:border-surface-700/50',
  };

  const joined = [base, variants[variant], className].filter(Boolean).join(' ');

  const content = (
    <>
      {/* Shine shimmer highlight on primary button hover */}
      {variant === 'primary' && (
        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={joined}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type || 'button'}
      onClick={onClick}
      className={joined}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}

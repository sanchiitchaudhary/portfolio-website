import clsx from 'clsx';

export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <div
      className={clsx(
        'glass rounded-2xl p-6',
        hover && 'transition-all duration-300 hover:scale-[1.02] glow-accent-hover',
        className
      )}
    >
      {children}
    </div>
  );
}

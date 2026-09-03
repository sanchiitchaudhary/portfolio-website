import { motion } from 'motion/react';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

export default function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start gap-6 md:gap-0">
      {/* Desktop alternating layout */}
      <div className={`hidden md:flex w-full items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Content Card */}
        <motion.div
          className="w-5/12"
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass glass-glow rounded-3xl p-6 hover:-translate-y-1.5 transition-all duration-300 border border-white/10 hover:border-accent-500/40 hover:shadow-[0_15px_35px_-10px_rgba(124,58,237,0.35)] group">
            {/* Header info bar */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-600/15 text-accent-300 border border-accent-500/25 text-xs font-semibold font-mono">
                <FiCalendar size={12} className="text-accent-400" />
                {item.duration}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <FiBriefcase size={13} />
                {item.company}
              </span>
            </div>

            <h3 className="text-xl font-bold text-surface-100 font-heading group-hover:text-gradient transition-colors">
              {item.role}
            </h3>

            <p className="text-surface-400 mt-3 text-sm leading-relaxed">{item.description}</p>

            {item.points && item.points.length > 0 && (
              <ul className="mt-4 space-y-2 text-surface-300 text-sm leading-relaxed">
                {item.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-accent-400 font-extrabold shrink-0 mt-1 text-xs">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-surface-800/50">
              {item.techUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-xs font-semibold rounded-lg bg-surface-900/60 text-accent-300 border border-surface-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center glowing node dot */}
        <div className="w-2/12 flex justify-center">
          <motion.div
            className="relative mt-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, type: 'spring' }}
          >
            <div className="w-5 h-5 rounded-full bg-accent-500 border-4 border-surface-950 shadow-[0_0_15px_#8b5cf6] relative z-10" />
            <div className="absolute -inset-1.5 rounded-full bg-accent-400/40 animate-ping" />
          </motion.div>
        </div>

        {/* Empty placeholder space */}
        <div className="w-5/12" />
      </div>

      {/* Mobile stacked layout */}
      <div className="flex md:hidden gap-4 w-full">
        {/* Line + node dot */}
        <div className="flex flex-col items-center">
          <motion.div
            className="w-4 h-4 rounded-full bg-accent-500 border-2 border-surface-950 shadow-[0_0_12px_#8b5cf6] shrink-0 mt-3 relative"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          />
          <div className="w-0.5 flex-1 bg-gradient-to-b from-accent-600/40 via-cyan-400/30 to-transparent mt-2" />
        </div>

        {/* Mobile Content Card */}
        <motion.div
          className="flex-1 pb-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="glass rounded-2xl p-5 border border-white/10">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-accent-400 font-mono text-xs font-semibold">{item.duration}</span>
              <span className="text-cyan-400 font-bold text-xs">{item.company}</span>
            </div>

            <h3 className="text-lg font-bold text-surface-100 font-heading">{item.role}</h3>

            <p className="text-surface-400 mt-2 text-sm leading-relaxed">{item.description}</p>

            {item.points && item.points.length > 0 && (
              <ul className="mt-3 space-y-1.5 text-surface-300 text-xs sm:text-sm leading-relaxed">
                {item.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent-400 font-bold shrink-0 mt-0.5">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-1.5 mt-4">
              {item.techUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded-md bg-accent-600/10 text-accent-300 border border-accent-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

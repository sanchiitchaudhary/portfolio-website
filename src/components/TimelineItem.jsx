import { motion } from 'motion/react';

export default function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start gap-6 md:gap-0">
      {/* Desktop: alternating layout */}
      <div className={`hidden md:flex w-full items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Content */}
        <motion.div
          className="w-5/12"
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 glow-accent-hover">
            <span className="text-accent-400 text-sm font-semibold">{item.duration}</span>
            <h3 className="text-xl font-bold mt-1 text-surface-100">{item.role}</h3>
            <p className="text-accent-300 font-medium text-sm mt-0.5">{item.company}</p>
            <p className="text-surface-400 mt-3 text-sm leading-relaxed">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.techUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded-md bg-accent-600/10 text-accent-400 border border-accent-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center dot */}
        <div className="w-2/12 flex justify-center">
          <motion.div
            className="w-4 h-4 rounded-full bg-accent-600 border-4 border-surface-950 mt-8 relative z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
        </div>

        {/* Empty space */}
        <div className="w-5/12" />
      </div>

      {/* Mobile: stacked layout */}
      <div className="flex md:hidden gap-4 w-full">
        {/* Line + dot */}
        <div className="flex flex-col items-center">
          <motion.div
            className="w-3 h-3 rounded-full bg-accent-600 shrink-0 mt-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          />
          <div className="w-px flex-1 bg-accent-600/20 mt-2" />
        </div>

        {/* Content */}
        <motion.div
          className="flex-1 pb-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="glass rounded-2xl p-5">
            <span className="text-accent-400 text-sm font-semibold">{item.duration}</span>
            <h3 className="text-lg font-bold mt-1 text-surface-100">{item.role}</h3>
            <p className="text-accent-300 font-medium text-sm mt-0.5">{item.company}</p>
            <p className="text-surface-400 mt-3 text-sm leading-relaxed">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.techUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded-md bg-accent-600/10 text-accent-400 border border-accent-500/20"
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

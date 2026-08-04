import { motion, AnimatePresence } from 'motion/react';
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="glass-strong rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto relative"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-surface-800/50 hover:bg-surface-700/80 text-surface-300 hover:text-white transition-colors cursor-pointer"
              >
                <FiX size={20} />
              </button>

              {/* Thumbnail */}
              <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-3xl">
                <img
                  src={project.thumbnailImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/90 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-accent-400 text-sm font-semibold">{project.category}</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">{project.title}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <p className="text-surface-300 leading-relaxed">{project.longDescription}</p>

                {/* Tech stack */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-lg bg-accent-600/10 text-accent-400 border border-accent-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-8">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-600 text-white font-semibold text-sm hover:bg-accent-500 transition-colors"
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-accent-500/30 text-accent-400 font-semibold text-sm hover:bg-accent-600/10 transition-colors"
                    >
                      <FiGithub size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

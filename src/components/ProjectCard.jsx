import { motion } from 'motion/react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project, index, onClick }) {
  const isFeatured = project.featured;

  return (
    <motion.div
      className={`group relative rounded-2xl overflow-hidden cursor-pointer
                  ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      layout
    >
      {/* Thumbnail */}
      <div className={`relative overflow-hidden ${isFeatured ? 'h-72 sm:h-96' : 'h-56 sm:h-64'}`}>
        <img
          src={project.thumbnailImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/60 to-transparent
                        opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Quick links (appear on hover) */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-accent-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-accent-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub size={16} />
            </a>
          )}
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <span className="text-accent-400 text-xs font-semibold uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className={`font-bold text-white mt-1 ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'}`}>
            {project.title}
          </h3>
          <p className="text-surface-300 text-sm mt-2 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.techStack.slice(0, isFeatured ? 6 : 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs rounded-md bg-accent-600/15 text-accent-300 border border-accent-500/20"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > (isFeatured ? 6 : 3) && (
              <span className="px-2 py-0.5 text-xs rounded-md text-surface-400">
                +{project.techStack.length - (isFeatured ? 6 : 3)} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';

export default function ProjectCard({ project, index, onClick }) {
  const isFeatured = project.featured;
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const boxX = e.clientX - card.left;
    const boxY = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;

    const rotateX = (boxY - centerY) / 20;
    const rotateY = (centerX - boxX) / 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={`group relative rounded-3xl overflow-hidden cursor-pointer perspective-1000
                  ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      style={{ transformStyle: 'preserve-3d' }}
      layout
    >
      <div className="glass glass-glow rounded-3xl h-full border border-white/10 group-hover:border-accent-500/50 group-hover:shadow-[0_20px_50px_rgba(124,58,237,0.3)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
        {/* Thumbnail container */}
        <div className={`relative overflow-hidden ${isFeatured ? 'h-72 sm:h-96' : 'h-56 sm:h-64'}`}>
          <img
            src={project.thumbnailImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          
          {/* Shimmer & gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-600/20 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Featured pill badge */}
          {isFeatured && (
            <div className="absolute top-4 left-4 glass-strong px-3 py-1 rounded-full text-[11px] font-extrabold uppercase font-mono tracking-widest text-cyan-300 border border-cyan-400/30 shadow-lg">
              ★ Featured Project
            </div>
          )}

          {/* Quick link action buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-strong text-white hover:bg-accent-600 hover:text-white transition-all shadow-lg hover:scale-110"
                onClick={(e) => e.stopPropagation()}
                title="Live Demo"
              >
                <FiExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-strong text-white hover:bg-accent-600 hover:text-white transition-all shadow-lg hover:scale-110"
                onClick={(e) => e.stopPropagation()}
                title="GitHub Repo"
              >
                <FiGithub size={16} />
              </a>
            )}
          </div>

          {/* Content overlay inside card */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 flex flex-col justify-end">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-accent-400 text-xs font-mono font-extrabold uppercase tracking-widest">
                {project.category}
              </span>
              <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-surface-400 group-hover:text-accent-300 group-hover:bg-accent-600/30 transition-all">
                <FiArrowUpRight size={16} />
              </div>
            </div>

            <h3 className={`font-extrabold text-white font-heading tracking-tight ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
              {project.title}
            </h3>

            <p className="text-surface-300 text-sm mt-2 line-clamp-2 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.techStack.slice(0, isFeatured ? 6 : 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-xs font-medium rounded-lg bg-accent-600/20 text-accent-300 border border-accent-500/25"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > (isFeatured ? 6 : 3) && (
                <span className="px-2.5 py-0.5 text-xs rounded-lg bg-surface-800/60 text-surface-400 border border-surface-700/40">
                  +{project.techStack.length - (isFeatured ? 6 : 3)} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

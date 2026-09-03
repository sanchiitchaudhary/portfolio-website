import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import projects from '@/data/projects.json';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = useMemo(() => {
    const cats = [...new Set(projects.map((p) => p.category))];
    return ['All', ...cats];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <SectionWrapper id="projects">
      {/* Background Blob */}
      <div className="blob blob-blue w-[550px] h-[550px] -bottom-40 -left-40 opacity-20" />

      {/* Section header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full glass border border-cyan-500/20 inline-block mb-3">
          Featured Work
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-h2 font-bold text-gradient font-heading">Projects</h2>
        <p className="text-surface-400 mt-3 max-w-xl mx-auto text-base">
          AI platforms, full-stack web applications, and technical innovations
        </p>
      </motion.div>

      {/* Animated Filter Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 glass rounded-2xl max-w-fit mx-auto border border-surface-700/40"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {categories.map((cat) => {
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                isActive ? 'text-white' : 'text-surface-400 hover:text-surface-200'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterPill"
                  className="absolute inset-0 bg-accent-600 rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Bento grid layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-auto"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </SectionWrapper>
  );
}

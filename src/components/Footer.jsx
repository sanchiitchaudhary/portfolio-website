import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import profile from '@/data/profile.json';

const socialIcons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  email: FiMail,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-10 px-4 sm:px-6 border-t border-surface-800/40 bg-surface-950/60 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left copyright */}
        <div className="flex items-center gap-2 text-surface-400 text-sm">
          <span>© {new Date().getFullYear()} <strong className="text-surface-200">{profile.name}</strong>. Built with</span>
          <FiHeart className="text-pink-500 animate-pulse inline" size={14} />
        </div>

        {/* Center/Right Socials + Back to top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {Object.entries(profile.socialLinks).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              if (!Icon) return null;
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass text-surface-400 hover:text-accent-400 hover:border-accent-500/30 transition-all hover:scale-110"
                  aria-label={platform}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass text-accent-400 hover:bg-accent-600 hover:text-white transition-all cursor-pointer shadow-md"
            aria-label="Back to top"
            title="Back to top"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import profile from '@/data/profile.json';

const socialIcons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  email: FiMail,
};

export default function Footer() {
  return (
    <footer className="relative py-8 px-4 sm:px-6 border-t border-surface-800/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: copyright */}
        <p className="text-surface-500 text-sm flex items-center gap-1">
          © {new Date().getFullYear()} {profile.name}. Built with
          <FiHeart className="text-accent-500 inline" size={14} />
        </p>

        {/* Right: social icons */}
        <div className="flex items-center gap-4">
          {Object.entries(profile.socialLinks).map(([platform, url]) => {
            const Icon = socialIcons[platform];
            if (!Icon) return null;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface-500 hover:text-accent-400 transition-colors"
                aria-label={platform}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

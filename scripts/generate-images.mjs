import fs from 'fs';
import path from 'path';

const projects = [
  { id: 'ai-platform.jpg', title: 'AI Content Platform', color1: '#7c3aed', color2: '#ec4899', icon: '🤖' },
  { id: 'data-pipeline.jpg', title: 'Real-Time Data Pipeline', color1: '#3b82f6', color2: '#06b6d4', icon: '⚡' },
  { id: 'ecommerce-app.jpg', title: 'E-Commerce Mobile App', color1: '#f59e0b', color2: '#ef4444', icon: '🛍️' },
  { id: 'ml-marketplace.jpg', title: 'ML Model Marketplace', color1: '#8b5cf6', color2: '#6366f1', icon: '🧠' },
  { id: 'devops-dashboard.jpg', title: 'DevOps Dashboard', color1: '#10b981', color2: '#3b82f6', icon: '📊' },
  { id: 'cli-tool.jpg', title: 'Open Source CLI Tool', color1: '#64748b', color2: '#8b5cf6', icon: '💻' },
];

const dir = './public/projects';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

projects.forEach((p) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <defs>
      <linearGradient id="grad-${p.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p.color1}" stop-opacity="0.9" />
        <stop offset="100%" stop-color="${p.color2}" stop-opacity="0.7" />
      </linearGradient>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#020617" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="30" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <rect width="800" height="500" fill="url(#bg)"/>
    <!-- Mesh pattern -->
    <circle cx="200" cy="150" r="180" fill="url(#grad-${p.id})" opacity="0.3" filter="url(#glow)"/>
    <circle cx="600" cy="350" r="220" fill="url(#grad-${p.id})" opacity="0.25" filter="url(#glow)"/>
    
    <!-- Card Mockup UI -->
    <rect x="100" y="80" width="600" height="340" rx="16" fill="#1e293b" opacity="0.6" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
    <circle cx="130" cy="110" r="6" fill="#ef4444"/>
    <circle cx="150" cy="110" r="6" fill="#f59e0b"/>
    <circle cx="170" cy="110" r="6" fill="#10b981"/>
    
    <text x="400" y="240" font-family="system-ui, sans-serif" font-size="64" text-anchor="middle">${p.icon}</text>
    <text x="400" y="310" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="#f8fafc" text-anchor="middle">${p.title}</text>
    <text x="400" y="345" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8" text-anchor="middle">Interactive Demo & Case Study</text>
  </svg>`;

  fs.writeFileSync(path.join(dir, p.id.replace('.jpg', '.svg')), svg);
});

console.log('Project SVG graphics generated successfully.');

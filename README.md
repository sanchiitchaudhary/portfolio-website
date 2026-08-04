# Modern Personal Portfolio Website

A visually striking, high-performance personal portfolio built with **React**, **Vite**, **Tailwind CSS v4**, and **Motion** (Framer Motion). Dark theme default with electric violet accents, canvas particle backgrounds, bento-grid layouts, scroll-triggered reveal animations, and full dark/light mode toggling.

---

## 🚀 Content Management Guide (No Code Changes Needed!)

All website content is driven dynamically from the JSON configuration files inside `src/data/`. You can update your bio, add new projects, change skills, or update social links simply by editing these files.

### 1. Profile & Bio (`src/data/profile.json`)
Edit this file to update your personal details:
```json
{
  "name": "Sanchit Chaudhary",
  "title": "Software Engineer",
  "tagline": "Building elegant solutions to complex problems",
  "bio": "Your bio paragraph goes here...",
  "profilePhoto": "/profile.jpg",
  "resumeLink": "/resume.pdf",
  "contactEmail": "hello@sanchit.dev",
  "location": "India",
  "socialLinks": {
    "github": "https://github.com/your-username",
    "linkedin": "https://linkedin.com/in/your-username",
    "twitter": "https://twitter.com/your-handle",
    "email": "mailto:hello@sanchit.dev"
  }
}
```

### 2. Projects (`src/data/projects.json`)
To add a new project, append an object to the array in `src/data/projects.json`:
```json
{
  "id": "project-unique-id",
  "title": "Project Title",
  "description": "Short summary for the card view.",
  "longDescription": "Full case-study description shown inside the modal popup.",
  "techStack": ["React", "Node.js", "Python"],
  "thumbnailImage": "/projects/your-image.jpg",
  "images": ["/projects/your-image.jpg"],
  "liveUrl": "https://your-demo.com",
  "githubUrl": "https://github.com/your-repo",
  "featured": true,
  "category": "Full Stack"
}
```
*Note: Set `"featured": true` to make a project take up a 2x2 bento-grid cell.*
*Images should be placed inside the `public/projects/` directory.*

### 3. Work Experience (`src/data/experience.json`)
Edit your work history timeline:
```json
[
  {
    "role": "Senior Software Engineer",
    "company": "TechCorp Inc.",
    "duration": "Jan 2024 — Present",
    "description": "Your achievements and responsibilities...",
    "techUsed": ["React", "AWS", "PostgreSQL"]
  }
]
```

### 4. Skills (`src/data/skills.json`)
Group your skills into categories:
```json
[
  {
    "category": "Frontend",
    "icon": "FaReact",
    "items": ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  }
]
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📦 Deployment Ready (Vercel / Netlify)

This project is a static React application with zero server dependencies:
- **Vercel**: Import repository -> Framework Preset: `Vite` -> Deploy
- **Netlify**: Import repository -> Build command: `npm run build` -> Publish directory: `dist`

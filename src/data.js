export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
];

export const portfolioLinks = [
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Web Projects', path: '/portfolio/web' },
  { label: 'Video Editing', path: '/portfolio/video' },
];

export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'HTML5', slug: 'html5', color: 'E34F26' },
      {
        name: 'CSS3',
        slug: 'css3',
        color: '1572B6',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg',
      },
      { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
      { name: 'C++', slug: 'cplusplus', color: '00599C' },
      { name: 'PHP', slug: 'php', color: '777BB4' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Laravel', slug: 'laravel', color: 'FF2D20' },
      { name: 'Blade', slug: 'laravel', color: 'FF2D20' },
      { name: 'React', slug: 'react', color: '61DAFB' },
      { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
      { name: 'Bootstrap', slug: 'bootstrap', color: '7952B3' },
    ],
  },
  {
    title: 'Database & Backend Services',
    skills: [
      { name: 'MySQL', slug: 'mysql', color: '4479A1' },
      { name: 'Supabase', slug: 'supabase', color: '3FCF8E' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Figma', slug: 'figma', color: 'F24E1E' },
      { name: 'CapCut', iconText: 'CC', badgeColor: '#f5f5f0' },
      { name: 'Antigravity', iconText: 'AG' },
      { name: 'VS Code', iconText: 'VS', badgeColor: '#007ACC' },
      { name: 'XAMPP', slug: 'xampp', color: 'FB7A24' },
      { name: 'Canva', iconText: 'Ca', badgeColor: '#00C4CC' },
      { name: 'Claude', slug: 'claude', color: 'D97757' },
      { name: 'GPT', iconText: 'GPT', badgeColor: '#f5f5f0' },
      { name: 'Gemini', slug: 'googlegemini', color: '8E75B2' },
      { name: 'Google Stitch', iconText: 'GS' },
      { name: 'Trae', iconText: 'TR' },
    ],
  },
];

export const webProjects = [
  {
    title: 'Kpop Pocket',
    category: 'K-Pop E-Commerce Web App',
    visual: 'commerce',
    stack: ['Laravel 13', 'PHP 8.4', 'Blade', 'Tailwind CSS', 'MySQL', 'Midtrans Snap', 'Chart.js'],
    description:
      'A K-Pop merchandise store with dynamic product catalog, cart, checkout, Midtrans Sandbox payment, order history, stock handling, and admin management.',
    projectUrl: 'https://github.com/starboydingin/KpopMerchandise',
    githubUrl: 'https://github.com/starboydingin/KpopMerchandise',
  },
  {
    title: 'Web Framework Ganas',
    category: 'Laravel + React Framework Project',
    visual: 'framework',
    stack: ['Laravel 12', 'PHP 8.2', 'React', 'Inertia.js', 'Tailwind CSS', 'Vite', 'Sanctum'],
    description:
      'A modern Laravel web framework project using React and Inertia, focused on authenticated workflows, UI interactions, and full-stack development structure.',
    projectUrl: 'https://github.com/starboydingin/Web-Framework-Ganas',
    githubUrl: 'https://github.com/starboydingin/Web-Framework-Ganas',
  },
  {
    title: 'GlaucoCare',
    category: 'Flutter Health Monitoring App',
    visual: 'health',
    stack: ['Flutter', 'Dart', 'Health Tracking', 'Charts', 'Dark/Light Mode'],
    description:
      'A glaucoma monitoring app concept with IOP tracking, medication logs, symptom self-assessment, educational content, chart visualization, and theme switching.',
    projectUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Manajemen Keuangan UMKM',
    category: 'Full-Stack Financial Platform',
    visual: 'finance',
    stack: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'JWT', 'Bcrypt', 'MySQL'],
    description:
      'A financial management platform for MSMEs with transaction recording, cash-flow dashboard, profile management, JWT authentication, and automatic reports.',
    projectUrl: 'https://github.com/starboydingin/Manajemen-Keuangan-UMKM',
    githubUrl: 'https://github.com/starboydingin/Manajemen-Keuangan-UMKM',
  },
  {
    title: 'segmentasi-pengcit',
    category: 'Image Processing Project',
    visual: 'vision',
    stack: ['Image Processing', 'Computer Vision', 'Segmentation', 'Visual Data Analysis'],
    description:
      'A digital image processing project focused on image segmentation, basic computer vision workflows, and visual data analysis practice.',
    projectUrl: '#',
    githubUrl: '#',
  },
];

export const videoProjects = [
  {
    title: 'University Event Recap',
    category: 'Cinematic',
    description: 'A dynamic recap video focused on atmosphere, movement, and event highlights.',
  },
  {
    title: 'Product Promotion',
    category: 'Commercial',
    description: 'A concise promotional edit designed for social media and launch campaigns.',
  },
  {
    title: 'Vlog Series',
    category: 'Documentary',
    description: 'A narrative edit series using rhythm, pacing, and natural conversational cuts.',
  },
];

export const experiences = [
  {
    period: '2023',
    title: 'Beginner IT Learner',
    place: 'University',
    description: 'Started university and began exploring the IT field by learning programming fundamentals with C++ and Python.',
  },
  {
    period: '2024',
    title: 'Web Design & Frontend Learner',
    place: 'Personal Learning Projects',
    description: 'Started building simple websites using HTML and CSS while learning to create custom UI designs with Figma.',
  },
  {
    period: '2025',
    title: 'Full-Stack & Mobile Development Learner',
    place: 'Personal and Academic Projects',
    description: 'Started developing projects using Laravel and ReactJS, while also building several mobile applications with Flutter.',
  },
  {
    period: '2025-Present',
    title: 'Portfolio Project Developer',
    place: 'Personal Portfolio Projects',
    description: 'Actively developing web-based projects featured in the portfolio, focusing on clean interfaces, practical functionality, and modern development workflows.',
  },
];

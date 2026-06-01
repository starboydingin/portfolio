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
];

export const webProjects = [
  {
    title: 'E-Commerce Platform',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    description: 'A commerce system concept with product catalog, cart flow, and admin management screens.',
  },
  {
    title: 'Student Dashboard',
    stack: ['React', 'Supabase', 'Tailwind'],
    description: 'A clean academic dashboard for student records, task tracking, and quick campus insights.',
  },
  {
    title: 'Portfolio Website',
    stack: ['React', 'Vite', 'Tailwind'],
    description: 'A personal editorial portfolio with multi-page routing, bento layout, and subtle motion.',
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
]

/**
 * Portfolio Content — Single Source of Truth
 *
 * All personal data, project info, and experience details live here.
 * Components import from this file and never hardcode content.
 *
 * RULE: Only include verified information from the resume.
 * Never invent experience, metrics, clients, or achievements.
 */

export const personal = {
  name: 'Prince Jasani',
  title: 'Full-Stack Developer',
  location: 'Surat, Gujarat, India',
  email: 'princejasani15@gmail.com',
  phone: '+91-9662111334',
  github: 'https://github.com/PrinceJasani15',
  linkedin: 'https://www.linkedin.com/in/prince-jasani-305929420/',
  resume: '/resume.pdf',
}

export const navigation = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const externalLinks = [
  { label: 'GitHub', href: 'https://github.com/PrinceJasani15', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prince-jasani-305929420/', icon: 'linkedin' },
  { label: 'Resume', href: '/resume.pdf', icon: 'file' },
]

export const about = {
  summary:
    'Full-stack developer with hands-on experience building web and mobile applications using React.js, Node.js, Express.js, PostgreSQL, Flutter, and REST APIs. Experienced in AI API integration, responsive UI development, and AWS deployment. Passionate about building scalable, user-focused applications and solving real-world problems.',
  categories: [
    { label: 'Web Development', icon: 'globe' },
    { label: 'AI Integration', icon: 'cpu' },
    { label: 'AI Agent Builder', icon: 'bot' },
    { label: 'Frontend Development', icon: 'layout' },
    { label: 'Backend Development', icon: 'server' },
    { label: 'Database', icon: 'database' },
    { label: 'Mobile Development', icon: 'smartphone' },
    { label: 'Cloud Deployment', icon: 'cloud' },
  ],
}

export const experience = [
  {
    id: '01',
    company: 'Brands.Live',
    industry: 'IT Product & Services',
    role: 'Full Stack Web Developer',
    period: 'Feb 2026 — Jul 2026',
    startDate: '02 Feb 2026',
    endDate: '31 Jul 2026',
    responsibilities: [
      'Built and shipped features for production web applications',
      'Collaborated with the development team on sprint deliverables',
      'Integrated REST APIs and resolved frontend/backend issues',
      'Participated in code reviews and bug resolution',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Git'],
  },
  {
    id: '02',
    company: 'Parul University',
    industry: 'E-Learning / EdTech',
    role: 'Content Writer',
    period: 'Feb 2024 — Nov 2024',
    startDate: '06 Feb 2024',
    endDate: '30 Nov 2024',
    responsibilities: [
      'Authored and edited technical content and documentation',
      'Prepared operational reports and project deliverables',
      'Managed deadlines across multiple concurrent projects',
      'Improved team workflows and collaboration processes',
    ],
    tech: ['Operations Reporting', 'MS Office', 'Problem Solving', 'Creative Writing'],
  },
]

export const projects = [
  {
    id: '01',
    title: 'KamKaj',
    category: 'Full-Stack Productivity Management Website',
    period: 'Jun 2026',
    startDate: '15 Jun 2026',
    endDate: '24 Jun 2026',
    description:
      'A full-stack productivity application with task management, Kanban workflows, expense tracking, and an AI assistant — built end-to-end in 10 days.',
    features: [
      'JWT authentication & user-specific data',
      'Task management with Kanban workflow',
      'Notes & calendar events',
      'Expense tracking & analytics',
      'Profile settings with dark/light mode',
      'AI assistant UI',
    ],
    implementation: [
      'REST APIs using Node.js and Express.js',
      'React.js frontend with Axios API communication',
      'PostgreSQL data storage with JWT authentication',
      'Built with Vite and Tailwind CSS',
      'Version control with Git/GitHub',
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'JWT',
      'REST API',
      'AI Integration',
      'Vite',
      'Tailwind CSS',
    ],
    link: 'https://drive.google.com/file/d/1yHk_9EMEBr9QuC3ObdPvIo7b5AgeFHdb/view?usp=drive_link',
    github: 'https://github.com/PrinceJasani15/KamKaj',
    featured: true,
  },
  {
    id: '02',
    title: 'GST Billing System',
    category: 'Web Application',
    period: 'Dec 2024 — Mar 2025',
    startDate: '16 Dec 2024',
    endDate: '22 Mar 2025',
    description:
      'A web-based GST billing application that streamlines invoice generation and billing workflows for small businesses.',
    features: [
      'GST bill generation',
      'Billing functionality',
      'Login & registration with authentication',
      'Admin data management',
    ],
    implementation: [
      'Frontend built with HTML, CSS, and JavaScript',
      'Backend powered by Python and Django',
      'SQLite database for data persistence',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'SQLite'],
    mentor: 'Rinkal Sarvaiya',
    teamSize: 2,
    link: '',
    github: 'https://github.com/PrinceJasani15/GST-Billing-System',
    featured: true,
  },
]

export const skills = {
  frontend: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
  backend: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs'],
  databases: ['PostgreSQL', 'SQLite', 'MongoDB'],
  mobile: ['Flutter'],
  ai: ['AI API Integration', 'AI Agent Builder'],
  'cloud / tools': ['AWS', 'Git', 'GitHub', 'Axios'],
}

export const education = [
  {
    id: '01',
    institution: 'Parul University',
    degree: 'Integrated M.C.A. - Cyber Security & Forensics - PICA',
    period: '2021 — 2025',
    score: '7.69 / 10',
    scoreLabel: 'CGPA',
    primary: true,
  },
  {
    id: '02',
    institution: 'Aspire Public School, Surat',
    degree: '12th — GSEB',
    period: '2021',
    score: '64.14 / 100',
    scoreLabel: 'Percentage',
    primary: false,
  },
  {
    id: '03',
    institution: 'Aspire Public School, Surat',
    degree: '10th — GSEB',
    period: '2019',
    score: '61.83 / 100',
    scoreLabel: 'Percentage',
    primary: false,
  },
]

export const certifications = [
  {
    id: '01',
    name: 'RDBMS PostgreSQL Training',
    provider: 'Indian Institute of Technology Bombay',
    score: '92.59 / 100',
    keySkill: 'RDBMS PostgreSQL',
    skills: ['PostgreSQL'],
    topics: [
      'Relational database concepts',
      'PostgreSQL database management',
      'SQL queries',
      'Table creation',
      'Data manipulation',
      'Database operations',
    ],
  },
  {
    id: '02',
    name: 'MERN Stack Certificate',
    provider: 'Simplilearn',
    score: '',
    keySkill: '',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    topics: [
      'Frontend development',
      'Backend APIs',
      'Database integration',
      'Full-stack web development',
    ],
  },
]

export const interests = ['Learning', 'Research', 'Travel', 'Physical Activity']

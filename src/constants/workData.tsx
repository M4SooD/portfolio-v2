export interface StackItem {
  name: string;
}

export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: StackItem[];
  image: string;
  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    num: '01',
    category: 'frontend',
    title: 'Nexter',
    description:
      'Nexter is a responsive website for showcasing luxury homes, featuring a sleek design, dynamic grid layout, and smooth animations. Built using HTML, CSS, Sass, and JavaScript.',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Sass' }],
    image: '/assets/work/thumb1.png',
    live: 'https://nextteer.netlify.app/',
    github: 'https://github.com/M4SooD/Nexter',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Natours',
    description:
      'Natours is a website for booking adventure tours, designed with a clean, responsive layout and immersive visuals. Features parallax effects and smooth UX.',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    image: '/assets/work/thumb2.png',
    live: 'https://natrourss.netlify.app/',
    github: 'https://github.com/M4SooD',
  },
  {
    num: '03',
    category: 'fullstack',
    title: 'Omnifood',
    description:
      'AI-powered food delivery service. Showcases modern UI elements, smooth scrolling, and advanced CSS animations for a seamless user experience.',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind' }, { name: 'Node.js' }],
    image: '/assets/work/thumb3.png',
    live: 'https://omniifoods.netlify.app/',
    github: 'https://github.com/M4SooD/Omnifood',
  },
];

import { ReactNode } from 'react';
import {
  FaAngular,
  FaBolt,
  FaCode,
  FaDocker,
  FaJs,
  FaReact,
  FaUniversalAccess,
} from 'react-icons/fa';
import {
  SiApollographql,
  SiCypress,
  SiGit,
  SiGraphql,
  SiJest,
  SiNextdotjs,
  SiReactquery,
  SiRedux,
  SiSass,
  SiSentry,
  SiSocketdotio,
  SiStorybook,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
  SiWebpack,
} from 'react-icons/si';

export interface AboutInfoItem {
  fieldName: string;
  fieldValue: string;
}

export interface About {
  title: string;
  description: string;
  info: AboutInfoItem[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  highlights?: string[];
  badge?: string;
}

export interface Experience {
  title: string;
  description: string;
  items: ExperienceItem[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

export interface Education {
  title: string;
  description: string;
  items: EducationItem[];
}

export interface SkillItem {
  icon: ReactNode;
  name: string;
}

export interface Skills {
  title: string;
  description: string;
  skillList: SkillItem[];
}

export const about: About = {
  title: 'About me',
  description:
    'I am a Senior Front-End Engineer with 4+ years of experience building real-time fintech and SaaS products. I work across the full front-end lifecycle—from architecture, state design, and reusable component systems to accessibility, testing, performance, and production delivery. My English Literature background also makes clear documentation and cross-functional communication a natural part of how I work.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Masoud Mousavi',
    },
    {
      fieldName: 'Role',
      fieldValue: 'Senior Front-End Engineer',
    },
    {
      fieldName: 'Experience',
      fieldValue: '4+ Years',
    },
    {
      fieldName: 'Location',
      fieldValue: 'Tehran, Iran · Remote-ready',
    },
    {
      fieldName: 'Focus',
      fieldValue: 'Fintech, SaaS & real-time systems',
    },
    {
      fieldName: 'Email',
      fieldValue: 'masoud.mousavi.dev@gmail.com',
    },
    {
      fieldName: 'Availability',
      fieldValue: 'Open to senior front-end roles',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Persian (Native), English (Fluent)',
    },
  ],
};

export const experience: Experience = {
  title: 'Experience',
  description:
    'A track record of owning complex front-end work across fintech, HR SaaS, and agency products—with measurable improvements to speed, reliability, and team delivery.',
  items: [
    {
      company: 'RBTex (Arbitex)',
      position: 'Senior Front-End Developer',
      duration: 'Dec 2024 – Present',
      highlights: [
        'Own technical design through production for React 19, Next.js, and TypeScript crypto-payment and exchange workflows.',
        'Improved initial load by ~30% through route-level splitting, lazy loading, tree shaking, and performance budgets.',
        'Set shared standards for state, components, testing, CI, documentation, code review, and mentoring.',
      ],
    },
    {
      company: 'Pendar Ideas (DivanHR)',
      position: 'Front-End Developer',
      duration: 'May 2024 – Dec 2024',
      highlights: [
        'Proved and delivered a phased AngularJS/jQuery-to-React migration covering ~30 screens and 70–80% of the portal in five months.',
        'Built a versioned ui-core library of reusable components and hooks with documentation for consistent delivery.',
        'Shipped the Good Vibes recognition feed, leaderboards, and real-time notifications, contributing to ~5–8% DAU growth.',
      ],
    },
    {
      company: 'Bitbine',
      position: 'Front-End Developer',
      duration: 'May 2023 – Apr 2024',
      highlights: [
        'Built REST and WebSocket data flows with TanStack Query, throttling, snapshot/delta merging, and reconnect backoff.',
        'Kept order-book and candlestick updates responsive for 2,000–3,000 concurrent users, cutting critical transforms from ~50ms to <5ms.',
        'Added Jest, React Testing Library, and Cypress coverage in CI, helping reduce emergency rollbacks by ~50%.',
      ],
    },
    {
      company: 'IMORIT',
      position: 'Front-End Developer',
      duration: 'Apr 2022 – Mar 2023',
      highlights: [
        'Delivered 20–25 React screens across 5–6 projects from Figma, including robust RTL and mixed-direction layouts.',
        'Built a branded, animated meeting-booking calendar and reusable Sass component patterns.',
        'Created a shared component library adopted by three of the next four projects, reducing setup from 4–5 hours to about one hour.',
      ],
    },
  ],
};

export const education: Education = {
  title: 'Education',
  description:
    'Combining technical expertise with strong analytical and communication skills derived from a diverse academic background.',
  items: [
    {
      institution: 'Shahid Bahonar University',
      degree: 'Bachelor of English Literature',
      duration: '2017 – 2020',
    },
  ],
};

export const skills: Skills = {
  title: 'Skills',
  description:
    'A production-tested toolkit centered on typed React architecture, real-time data, performance, and reliable delivery.',
  skillList: [
    {
      icon: <FaReact />,
      name: 'React 19',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js · SSR/SSG',
    },
    {
      icon: <SiTypescript />,
      name: 'TypeScript',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript (ES6+)',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <SiSass />,
      name: 'Sass/SCSS',
    },
    {
      icon: <FaCode />,
      name: 'Panda CSS',
    },
    {
      icon: <SiRedux />,
      name: 'Redux Toolkit',
    },
    {
      icon: <FaCode />,
      name: 'Zustand',
    },
    {
      icon: <SiReactquery />,
      name: 'TanStack Query',
    },
    {
      icon: <FaAngular />,
      name: 'AngularJS',
    },
    {
      icon: <SiSocketdotio />,
      name: 'WebSockets',
    },
    {
      icon: <SiGraphql />,
      name: 'GraphQL',
    },
    {
      icon: <SiApollographql />,
      name: 'Apollo Client',
    },
    {
      icon: <SiCypress />,
      name: 'Cypress',
    },
    {
      icon: <SiJest />,
      name: 'Jest',
    },
    {
      icon: <SiTestinglibrary />,
      name: 'Testing Library',
    },
    {
      icon: <SiStorybook />,
      name: 'Storybook',
    },
    {
      icon: <SiVite />,
      name: 'Vite',
    },
    {
      icon: <SiWebpack />,
      name: 'Webpack',
    },
    {
      icon: <SiGit />,
      name: 'Git & CI/CD',
    },
    {
      icon: <FaDocker />,
      name: 'Docker',
    },
    {
      icon: <SiSentry />,
      name: 'Sentry',
    },
    {
      icon: <FaUniversalAccess />,
      name: 'Accessibility & RTL',
    },
    {
      icon: <FaBolt />,
      name: 'Core Web Vitals',
    },
  ],
};

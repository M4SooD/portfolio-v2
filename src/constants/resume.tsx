import { ReactNode } from 'react';
import { FaReact, FaAngular, FaFigma, FaNodeJs, FaJs } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiCypress,
  SiJest,
  SiThreedotjs,
  SiMongodb,
  SiExpress,
  SiNgrx,
  SiReactquery,
  SiReacthookform,
  SiStorybook,
  SiFramer,
  SiWebpack,
  SiSass,
  SiGit,
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
  badge?: string;
}

export interface Experience {
  icon: string;
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
  icon: string;
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
    'I am a Senior Front-End Engineer specializing in building scalable, high-performance web applications using the React and Angular ecosystems. With a background in English Literature, I bridge the gap between technical complexity and clear communication. I excel in optimizing performance, architecting complex UIs, and mentoring junior developers in agile environments.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Masood Moosavi',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+98) 916 823 8775',
    },
    {
      fieldName: 'Experience',
      fieldValue: '4+ Years',
    },
    {
      fieldName: 'Skype',
      fieldValue: 'masood.dev',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Iranian',
    },
    {
      fieldName: 'Email',
      fieldValue: 'masood.m.dev@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Persian, English (Advanced)',
    },
  ],
};

export const experience: Experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'A progressive track record of delivering enterprise-level applications, focusing on performance optimization, maintainable codebases, and seamless UI/UX implementation.',
  items: [
    {
      company: 'Pendar Ideas',
      position: 'Senior Front-End Developer',
      duration: '2024 - Present',
    },
    {
      company: 'Bitbine',
      position: 'Front-End Developer',
      duration: '2023 - 2024',
    },
    {
      company: 'Immorit',
      position: 'Front-End Developer',
      duration: '2022 - 2023',
    },
    {
      company: 'Karademy',
      position: 'MERN Stack Intern',
      duration: '2021',
    },
  ],
};

export const education: Education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description:
    'Combining technical expertise with strong analytical and communication skills derived from a diverse academic background.',
  items: [
    {
      institution: 'Karademy Bootcamp',
      degree: 'Certified MERN Stack Developer',
      duration: '2021',
    },
    {
      institution: 'Shahid Bahonar University',
      degree: 'BA in English Literature',
      duration: '2017 - 2021',
    },
  ],
};

export const skills: Skills = {
  title: 'My Skills',
  description:
    'Mastering the modern web stack with a focus on React ecosystem, Performance, and Type-Safety.',
  skillList: [
    {
      icon: <FaReact />,
      name: 'React.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
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
      icon: <SiFramer />,
      name: 'Framer Motion',
    },
    {
      icon: <SiRedux />,
      name: 'Redux Toolkit',
    },
    {
      icon: <SiReactquery />,
      name: 'React Query',
    },
    {
      icon: <SiReacthookform />,
      name: 'React Hook Form',
    },
    {
      icon: <FaAngular />,
      name: 'Angular',
    },
    {
      icon: <SiNgrx />,
      name: 'NgRx',
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
      icon: <SiStorybook />,
      name: 'Storybook',
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
      icon: <FaNodeJs />,
      name: 'Node.js',
    },
    {
      icon: <SiExpress />,
      name: 'Express.js',
    },
    {
      icon: <SiMongodb />,
      name: 'MongoDB',
    },
    {
      icon: <SiThreedotjs />,
      name: 'Three.js',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },
  ],
};

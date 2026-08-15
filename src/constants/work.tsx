export interface StackItem {
  name: string;
}

export type ProjectKind = 'professional' | 'independent';

export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: StackItem[];
  kind: ProjectKind;
  image?: string;
  imageFit?: 'cover' | 'contain';
  live?: string;
  liveLabel?: string;
  github?: string;
  role?: string;
  period?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    num: '01',
    category: 'Crypto exchange & payments',
    title: 'RBTex',
    description:
      'I own front-end delivery across cryptocurrency exchange, wallet, and payment workflows—from technical design and state architecture to testing, accessibility, and production performance.',
    stack: [{ name: 'Next.js' }, { name: 'React' }, { name: 'TypeScript' }],
    kind: 'professional',
    image: '/assets/work/rbtex.jpg',
    live: 'https://rbtex.com/',
    liveLabel: 'Visit company website',
    role: 'Senior Front-End Developer',
    period: 'Dec 2024 – Present',
    highlights: [
      '~30% faster initial load through code splitting, lazy loading, and tree shaking',
      'Performance budgets and Core Web Vitals built into delivery standards',
      'Shared state, component, testing, CI, and documentation conventions',
    ],
  },
  {
    num: '02',
    category: 'HR SaaS platform',
    title: 'Pendar Ideas · DivanHR',
    description:
      'I helped modernize DivanHR’s legacy HR portal with a phased React migration, then built a reusable UI foundation so new product work could ship consistently alongside the existing application.',
    stack: [{ name: 'React' }, { name: 'AngularJS' }, { name: 'Feature flags' }],
    kind: 'professional',
    image: '/assets/work/divanhr.jpg',
    live: 'https://divanhr.com/',
    liveLabel: 'Visit DivanHR',
    role: 'Front-End Developer',
    period: 'May – Dec 2024',
    highlights: [
      '~30 screens and 70–80% of the portal migrated in five months',
      'Versioned ui-core component and hooks library with documentation',
      'Good Vibes social feature contributed to ~5–8% DAU growth',
    ],
  },
  {
    num: '03',
    category: 'Spot & futures exchange',
    title: 'Bitbine',
    description:
      'I built resilient REST and real-time market-data flows for Bitbine’s spot and futures trading interfaces, with performance-sensitive transforms and production-focused test coverage.',
    stack: [{ name: 'React' }, { name: 'TanStack Query' }, { name: 'WebSockets' }],
    kind: 'professional',
    image: '/assets/work/bitbine.jpg',
    live: 'https://www.bitbine.com/user/main',
    liveLabel: 'Visit Bitbine',
    role: 'Front-End Developer',
    period: 'May 2023 – Apr 2024',
    highlights: [
      'Responsive order-book and candlestick updates for 2,000–3,000 concurrent users',
      'Critical widget transforms reduced from ~50ms to <5ms',
      'Jest, Testing Library, and Cypress in CI helped cut emergency rollbacks ~50%',
    ],
  },
  {
    num: '04',
    category: 'Web & app agency work',
    title: 'IMORIT',
    description:
      'I translated Figma designs into responsive React web and app products for agency clients, with particular attention to reusable Sass patterns and reliable RTL and mixed-direction layouts.',
    stack: [{ name: 'React' }, { name: 'Sass' }, { name: 'RTL/LTR' }],
    kind: 'professional',
    image: '/assets/work/imorit.jpg',
    live: 'https://imorit.com/',
    liveLabel: 'Visit company website',
    role: 'Front-End Developer',
    period: 'Apr 2022 – Mar 2023',
    highlights: [
      '20–25 production screens delivered across 5–6 projects',
      'Reusable component library adopted by three of the next four projects',
      'New-project UI setup reduced from 4–5 hours to about one hour',
    ],
  },
  {
    num: '05',
    category: 'Real-time data demo',
    title: 'Live Market Telemetry',
    description:
      'A focused React 19 dashboard consuming live Binance ticker streams. Zustand selector subscriptions isolate coin-widget updates while Panda CSS keeps the interface type-safe and responsive.',
    stack: [
      { name: 'React 19' },
      { name: 'TypeScript' },
      { name: 'Zustand' },
      { name: 'WebSockets' },
      { name: 'Panda CSS' },
    ],
    kind: 'independent',
    image: '/assets/work/telemetry-dashboard.png',
    imageFit: 'contain',
    github: 'https://github.com/M4SooD/telemetry-dashboard',
    highlights: [
      'Live BTC, ETH, SOL, BNB, and XRP ticker streams',
      'Per-symbol Zustand selectors limit unrelated component updates',
      'Small, readable public codebase that demonstrates real-time React fundamentals',
    ],
  },
  {
    num: '06',
    category: 'Frontend demo',
    title: 'Nexter',
    description:
      'A responsive luxury-property showcase with a dynamic grid layout, polished visual hierarchy, and carefully crafted interactions.',
    stack: [{ name: 'HTML 5' }, { name: 'CSS 3' }, { name: 'Sass' }],
    kind: 'independent',
    image: '/assets/work/nexter.jpg',
    live: 'https://nextteer.netlify.app/',
    liveLabel: 'View live demo',
    github: 'https://github.com/M4SooD/Nexter',
  },
  {
    num: '07',
    category: 'Frontend demo',
    title: 'Natours',
    description:
      'An adventure-tour experience with a responsive layout, immersive visuals, parallax effects, and fluid interaction details.',
    stack: [{ name: 'HTML 5' }, { name: 'CSS 3' }, { name: 'JavaScript' }],
    kind: 'independent',
    image: '/assets/work/natours.jpg',
    live: 'https://natrourss.netlify.app/',
    liveLabel: 'View live demo',
    github: 'https://github.com/M4SooD',
  },
  {
    num: '08',
    category: 'Frontend demo',
    title: 'Omnifood',
    description:
      'A modern food-delivery landing experience showcasing responsive composition, smooth scrolling, and advanced CSS animation.',
    stack: [{ name: 'HTML 5' }, { name: 'CSS 3' }, { name: 'JavaScript' }],
    kind: 'independent',
    image: '/assets/work/omnifood.jpg',
    live: 'https://omniifoods.netlify.app/',
    liveLabel: 'View live demo',
    github: 'https://github.com/M4SooD/Omnifood',
  },
];

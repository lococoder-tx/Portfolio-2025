import type { Project } from '@/types/Project';

export const projectsData: Array<Project> = [
  {
    id: 'colorfull',
    title: 'Colorfull',
    category: 'Web App',
    description:
      'AI-powered food delivery marketplace that revolutized B2B food delivery in the Austin area. Acquired by Picnic in 2025.',
    imageSrc: '/colorfull.png',
    href: 'https://app.colorfull.ai/',
    duration: '7 months',
  },
  {
    id: 'mycollegeapps',
    title: 'MyCollegeApps',
    category: 'Web App',
    description: 'AI-powered college application assistant.',
    imageSrc: '/myCollegeApps.png',
    href: 'https://app.mycollegeapps.org/',
    duration: '4 months',
  },
  {
    id: 'solace-cms',
    title: 'Solace',
    category: 'Web App',
    description:
      'All-in-one platform for hoteliers to manage their properties, bookings, and guests.',
    imageSrc: '/solace_cms.png',
    href: 'https://cms-solace.netlify.app/login',
    duration: '1 month',
    sourceUrl: 'https://github.com/lococoder-tx/solace-cms-dashboard',
  },
  {
    id: 'cards-demo',
    title: 'Super Awesome CSS Playground',
    category: 'UI/UX',
    description:
      'Interactive cards showing layered hover states, motion, and progressive disclosure patterns.',
    imageSrc: '/cardDemo.png',
    href: 'https://cards-playground.netlify.app/',
    duration: 'N/A',
    sourceUrl: 'https://github.com/lococoder-tx/yugioh-card-motion',
  },
  {
    id: 'finvalia',
    title: 'Finvalia AI',
    category: 'Web App',
    description:
      'AI-driven stock news analytics demo featuring a curated newsfeed and insights.',
    imageSrc: '/finvalia.png',
    href: 'https://finvalia.ai',
    duration: 'Ongoing',
  },
];

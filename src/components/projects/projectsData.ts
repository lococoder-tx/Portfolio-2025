import type { Project } from '@/types/Project';

export const projectsData: Array<Project> = [
  {
    id: 'colorfull',
    title: 'Colorfull',
    category: 'Web App',
    description:
      'AI-powered food delivery marketplace that revolutized B2B food delivery in the Austin area. Acquired by Picnic in 2025.',
    imageSrc: '/colorfull.png',
    href: 'https://www.colorfull.ai/',
    duration: '7 months',
    overview:
      'Traditional corporate catering often results in stale, one-size-fits-all meals. Colorfull lets every individual order their preferred meal, freshly made and tailored to their liking. Acquired by Picnic in 2025.',
    features: [
      'Work with over 40+ restaurants in the Austin + Houston area',
      'CloudKitchens and Otter Integration',
      'Custom Menu-based vector search system using Pinecone',
      'Clerk-based authentication and RBAC',
      'A lot of other stuff I am missing',
    ],
    skills: {
      frontend: [
        'React',
        'TypeScript',
        'Tailwind',
        'TanStack Query',
        'Next.js',
      ],
      backend: ['FastAPI', 'Python', 'Firebase'],
      tools: ['Vercel', 'Docker', 'Google Cloud', 'Clerk', 'Pinecone'],
    },
  },
  {
    id: 'mycollegeapps',
    title: 'MyCollegeApps',
    category: 'Web App',
    description: 'AI-powered college application assistant.',
    imageSrc: '/myCollegeApps.png',
    href: 'https://app.mycollegeapps.org/',
    duration: '4 months',
    overview:
      'MyCollegeApps is a all-in-one platform that provides comprehensive AI college counseling via personalized AI chatbots and tooling.',
    features: [
      'Automated Resume Creation',
      '3+ personalized AI college counselors',
      'AI-powered essay analysis for top-tier colleges',
      'Applcation Tracking System',
      'Guided College Selection Process',
    ],
    skills: {
      frontend: ['React', 'TypeScript', 'Tailwind', 'TanStack Query'],
      backend: ['FastAPI', 'Python', 'Supabase'],
      tools: ['Netlify', 'Docker', 'Google Cloud', 'OpenAI Assistants API'],
    },
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
    skills: {
      frontend: ['React', 'Tailwind'],
      backend: ['Supabase', 'Node.js'],
      tools: ['Netlify'],
    },
    overview:
      'All-in-one platform for hoteliers to manage their properties, bookings, and guests.',
    features: ['Property Management', 'Booking Management', 'Guest Management'],
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
    overview: 'Pretty cool CSS effects',
    features: ['Yugioh Cards'],
    skills: {
      frontend: ['React', 'Tailwind'],
    },
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
    skills: {
      frontend: ['React', 'Material UI', 'Tanstack Start', 'Tanstack Router'],
      backend: ['Python', 'Amazon RDS', 'Flask'],
      tools: ['Docker', 'AWS'],
    },
    overview:
      'AI-driven stock news analytics demo featuring a curated newsfeed and insights.',
    features: [
      'Daily curated newsfeed from over 100+ sources',
      'AI-powered news analysis and insights',
      'Custom newsfeed filtering and sorting',
      'User-friendly interface with real-time updates',
    ],
  },
];

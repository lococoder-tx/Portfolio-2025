import { Link, createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, MapPin, Twitter, Youtube } from 'lucide-react';
import Logo2 from '@/components/icons/Logo2';
import ProjectsSection from '@/components/projects/ProjectsSection';
import { projectsData } from '@/components/projects/projectsData';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -20% 0px' },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {['intro', 'work', 'projects', 'connect'].map((section) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? 'bg-foreground'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="mx-6 md:mt-3 lg:my-0 lg:mx-auto lg:container">
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
            {/* Left column: full-height image on large screens */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-3/4 overflow-hidden rounded-lg shadow">
                <img
                  src="/me.jpeg"
                  alt="Portrait photograph"
                  className="object-cover object-center w-full h-auto"
                />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t dark:from-background/70 from-black/70 to-transparent" />
              </div>
            </div>

            {/* Right column: four rows (name, description, currently, focus) */}
            <div className="grid content-center p-6 lg:p-12 gap-18">
              {/* Row 1: Name/Title */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm dark:text-white/80 text-black/80 font-mono tracking-wider">
                  <Logo2 className="h-4 w-auto" aria-label="Lococoder logo" />
                  <span>Lococoder / 2025</span>
                </div>
                <h1 className="text-7xl md:text-8xl lg:text-8xl font-light tracking-tight">
                  Elijah <span className="text-muted-foreground">Gaytan</span>
                </h1>
                <div className="text-lg md:text-xl text-muted-foreground">
                  Full-Stack Engineer | AI Engineer
                </div>
              </div>

              {/* Row 3: Currently */}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground font-mono">
                  CURRENTLY
                </div>
                <div className="p-4 border border-border rounded-lg max-w-md">
                  <div className="text-base text-foreground">
                    Full-Stack Engineer
                  </div>
                  <div className="text-sm text-muted-foreground flex flex-wrap gap-x-2">
                    <span>McCormick</span>
                    <span>•</span>
                    <span>February 2025 — Present</span>
                  </div>
                </div>

                {/* Row 2: Description */}
                <div className="space-y-6 max-w-md">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Available for work
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      San Antonio, TX
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="min-h-screen py-32 opacity-0"
        >
          <div className="space-y-16">
            <div className="flex items-end justify-between">
              <h2 className="text-4xl font-light">Selected Work</h2>
              <div className="text-sm text-muted-foreground font-mono">
                2018 — 2025
              </div>
            </div>

            <div className="space-y-12">
              {[
                {
                  year: '2025-Present',
                  role: 'Full-Stack Software Engineer (Contract)',
                  company: 'McCormick & Company',
                  description: "Lead McCormick's new AI Development team.",
                  tech: [
                    'React',
                    'TypeScript',
                    'Tailwind',
                    'TanStack Query',
                    'TanStack Router',
                    'Python',
                    'FastAPI',
                    'Azure',
                    'OpenAI',
                    'LangChain',
                  ],
                },
                {
                  year: '2024-Present',
                  role: 'Freelance Software Engineer',
                  company: 'Lococoder Labs',
                  description:
                    'Top Rated Plus & Expert Vetted – Upwork (Top 1% of freelancers globally)',
                  bullets: [
                    'Developed 10+ custom web applications for startups and SMBs in fintech and education',
                    'Led technical discovery and scoped requirements for MVPs with budgets from $5k to $50k',
                    'Independently own the entire software development lifecycle—from discovery and system design to implementation, deployment, and client training',
                  ],
                  tech: [
                    'React',
                    'TypeScript',
                    'Python',
                    'FastAPI',
                    'Langchain',
                    'Cosmos DB',
                  ],
                },
                {
                  year: '2024-2025',
                  role: 'Software Engineer (Contract)',
                  company:
                    'Colorfull - Early-stage B2C catering startup based in Austin, TX',
                  description:
                    'Collaborated directly with the CEO and CTO to spearhead end-to-end feature development in a fast-paced startup environment',
                  bullets: [
                    'Built scalable features using a modern stack: Cursor, Next.js, TypeScript, FastAPI, Firebase, Google Cloud Run and Vercel; integrated with third-party platforms including Stripe and Otter',
                    'Developed a vector search engine using Pinecone to enable semantic and keyword-based food item search, improving user discovery experience',
                    'Introduced Redis-based caching to reduce API response times and enhance system performance',
                    'Designed and implemented a customer feedback system with weekly digest emails to restaurants, closing the loop between user experience and vendor improvement',
                    'Redesigned frontend components to better follow UI/UX design principles and be mobile responsive',
                    'Overhauled UI components for mobile responsiveness and adherence to modern UX best practices using Tailwind, ShadCN, Aceternity and Framer Motion',
                    'Led security efforts by implementing RBAC authentication middleware using Clerk and JWTs, strengthening platform access control',
                  ],
                  tech: [
                    'Next.js',
                    'TypeScript',
                    'FastAPI',
                    'Firebase',
                    'Google Cloud Run',
                    'Vercel',
                    'Stripe',
                    'Pinecone',
                    'Redis',
                    'Tailwind',
                    'ShadCN',
                    'Clerk',
                  ],
                },
                {
                  year: '2020-2024',
                  role: 'Software Engineer',
                  company: 'PNC',
                  description:
                    "Collaborated with PNC's SRE team to design and build internal tooling that automated and accelerated key infrastructure workflows, reducing manual intervention",
                  bullets: [
                    'Designed and deployed a backend system using FastAPI, MySQL, and Jinja to automate ServiceNow Change Requests, reducing manual work for 30+ developers across the org',
                    'Built the backend for a centralized log query platform using Express.js, MongoDB, and the Humio API, enabling engineers to search logs without vendor-specific syntax—cutting onboarding time by dozens of hours',
                    'Maintained and led backend development for a FastAPI/MySQL application with hundreds of daily users to automate synthetic monitoring in Dynatrace, dramatically simplifying infra observability setup',
                    'Engineered internal tooling for WebSphere/Apache node management using Vue.js (Quasar) and FastAPI; introduced Kafka and Celery-based event-driven architecture for scalable background processing',
                  ],
                  tech: [
                    'Python',
                    'FastAPI',
                    'MySQL',
                    'Express.js',
                    'MongoDB',
                    'Vue.js',
                    'Kafka',
                    'Celery',
                    'SQLAlchemy',
                    'Dynatrace',
                  ],
                },
                {
                  year: '2018-2019',
                  role: 'Software Engineer - Intern',
                  company: 'Texas State VR Lab, San Marcos, TX',
                  description:
                    'Designed and implemented a virtual reality training simulation in Unity3D/C# to help train new EMS recruits in Austin, leading to a faster comprehension rate of 47% compared to the non-VR group',
                  bullets: [
                    'Developed an extensive gesture recognition framework for the Oculus Rift SDK that tracks player hand movement',
                  ],
                  tech: ['Unity3D', 'C#', 'Oculus Rift SDK'],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid grid-cols-1 lg:grid-cols-[10rem_1fr_30rem] gap-8 py-8 border-b border-border/50 hover:border-black/50 dark:hover:border-white/70 transition-colors duration-500"
                >
                  <div className="text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    {job.year}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-medium transition-transform duration-300 group-hover:scale-[1.03]">
                        {job.role}
                      </h3>
                      <div className="text-base md:text-lg text-muted-foreground transition-transform duration-300 group-hover:scale-[1.02]">
                        {job.company}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {job.description}
                    </p>
                    {job.bullets && job.bullets.length > 0 && (
                      <ul className="text-muted-foreground leading-relaxed max-w-lg space-y-2 mt-4">
                        {job.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="flex items-start gap-2 space-y-1.5"
                          >
                            <span className="text-muted-foreground text-xs">
                              •
                            </span>
                            <span className="text-sm">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex flex-wrap content-start gap-2 lg:justify-end">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded border border-muted-foreground/20 transition-all duration-300 group-hover:text-foreground group-hover:border-muted-foreground/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProjectsSection
          id="projects"
          projects={projectsData}
          sectionRef={(el) => {
            sectionsRef.current[2] = el;
          }}
        />

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and
                  conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:contact@lococoder.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-lg">contact@lococoder.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">
                ELSEWHERE
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    name: 'GitHub',
                    handle: '@lococoder-tx',
                    url: 'https://github.com/lococoder-tx',
                    icon: Github,
                  },
                  {
                    name: 'Twitter',
                    handle: '@loco_coder',
                    url: 'https://x.com/loco_coder',
                    icon: Twitter,
                  },
                  {
                    name: 'LinkedIn',
                    handle: 'Elijah Gaytan',
                    url: 'https://www.linkedin.com/in/elijahcgaytan',
                    icon: Linkedin,
                  },
                  {
                    name: 'YouTube',
                    handle: 'lococoder',
                    url: 'https://www.youtube.com/@loco-coder',
                    icon: Youtube,
                  },
                ].map((social) => (
                  <Link
                    key={social.name}
                    to={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        <social.icon className="w-4 h-4" />
                        <span>{social.name}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {social.handle}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2025 Elijah Gaytan. All rights reserved.
              </div>
              <div className="text-xs text-muted-foreground">
                Built with React + Tanstack Start
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="cursor-pointer group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}

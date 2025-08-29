import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import ProjectsSection from '@/components/projects/ProjectsSection';
import WorkSection from '@/components/work/WorkSection';
import ProfileHeader from '@/components/personal/ProfileHeader';
import ConnectSection from '@/components/personal/ConnectSection';
import { projectsData } from '@/components/projects/projectsData';
import { workData } from '@/components/work/workData';
import { personalData } from '@/components/personal/personalData';
import { socialData } from '@/components/social/socialData';

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
    console.log('help');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            setActiveSection(entry.target.id);
          }
        });
      },
      // Use pixel-based rootMargin (safer on mobile Safari) and multiple thresholds
      {
        threshold: window.innerWidth > 640 ? [0.3] : [0.1],
        rootMargin: '0px 0px -20% 0px',
      },
    );

    sectionsRef.current.forEach((section) => {
      if (!section) return;
      // Initial in-view check (helps when loading mid-page and for some mobile quirks)
      const rect = section.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const isInView = rect.top < viewportHeight - 80 && rect.bottom > 0; // 80px matches rootMargin bottom adjustment
      if (isInView) {
        section.classList.add('animate-fade-in-up');
      }
      observer.observe(section);
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
        <ProfileHeader
          personalInfo={personalData}
          sectionRef={(el) => {
            sectionsRef.current[0] = el;
          }}
        />

        <WorkSection
          workExperiences={workData}
          sectionRef={(el) => {
            sectionsRef.current[1] = el;
          }}
        />

        <ProjectsSection
          id="projects"
          projects={projectsData}
          sectionRef={(el) => {
            sectionsRef.current[2] = el;
          }}
        />

        <ConnectSection
          personalInfo={personalData}
          socialLinks={socialData}
          sectionRef={(el) => {
            sectionsRef.current[3] = el;
          }}
        />

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

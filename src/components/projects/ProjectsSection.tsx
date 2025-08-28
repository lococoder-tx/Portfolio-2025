import type { Project } from '@/types/Project';
import ProjectCard from '@/components/projects/ProjectCard';

type ProjectsSectionProps = {
  id?: string;
  title?: string;
  projects: Array<Project>;
  sectionRef?: (el: HTMLElement | null) => void;
};

export default function ProjectsSection({
  id = 'projects',
  projects,
  sectionRef,
}: ProjectsSectionProps) {
  return (
    <section
      id={id}
      ref={sectionRef}
      className="min-h-screen py-32 opacity-0 space-y-16"
    >
      <div className="flex items-center">
        <h2 className="text-4xl font-light">Recent Projects</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

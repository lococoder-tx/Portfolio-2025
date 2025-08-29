import { ExternalLink } from 'lucide-react';
import type { Project } from '@/types/Project';
import { Button } from '@/components/ui/button';
import { Github } from '@/components/icons/Github';

type ProjectDetailsProps = {
  project: Project;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const overview =
    project.overview ??
    'This is a placeholder overview for the project. It highlights the problem space, constraints, approach, and the measurable outcomes delivered for users and the business.';
  const features = project.features ?? [
    'Key feature one that demonstrates core functionality and UX flows',
    'Key feature two that showcases integration and performance considerations',
    'Key feature three that adds polish and accessibility improvements',
  ];

  const role = project.role ?? 'Full‑Stack Engineer';
  const duration = project.duration ?? '2024 — 2025';
  const skills = project.skills ?? {
    frontend: ['React', 'TypeScript', 'Tailwind', 'TanStack'],
    backend: ['FastAPI', 'Node.js', 'PostgreSQL'],
    tools: ['Vercel', 'Docker', 'GitHub Actions'],
  };

  return (
    <div className="max-h-full p-6 sm:p-8 space-y-8">
      <header className="space-y-3">
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.href && (
            <a href={project.href} target="_blank" rel="noreferrer">
              <Button size="sm" className="cursor-pointer">
                <ExternalLink className="w-4 h-4" />
                <span>Visit Project</span>
              </Button>
            </a>
          )}
          {project.sourceUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noreferrer">
              <Button variant="secondary" size="sm" className="cursor-pointer">
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </Button>
            </a>
          )}
        </div>
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
          <div className="rounded border p-3">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Role
            </div>
            <div className="text-foreground">{role}</div>
          </div>
          <div className="rounded border p-3">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Duration
            </div>
            <div className="text-foreground">{duration}</div>
          </div>
          <div className="rounded border p-3">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Type
            </div>
            <div className="text-foreground">{project.category}</div>
          </div>
        </div>
      </header>

      <section className="space-y-2">
        <h4 className="text-lg font-medium">Overview</h4>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {overview}
        </p>
      </section>

      <section className="space-y-3">
        <h4 className="text-lg font-medium">Key Features</h4>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h4 className="text-lg font-medium">Skills</h4>
        <div className="space-y-4">
          <div className="space-y-2 pb-4 border-b border-border last:border-b-0">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Frontend
            </div>
            <div className="flex flex-wrap gap-1">
              {(skills.frontend ?? []).map((s) => (
                <span key={s} className="px-2 py-0.5 text-xs border rounded">
                  {s}
                </span>
              ))}
            </div>
          </div>
          {skills.backend ? (
            <div className="space-y-2 pb-4 border-b border-border last:border-b-0">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Backend
              </div>
              <div className="flex flex-wrap gap-1">
                {skills.backend.map((s) => (
                  <span key={s} className="px-2 py-0.5 text-xs border rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          {skills.tools ? (
            <div className="space-y-2 pb-4 border-b border-border last:border-b-0">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Tools
              </div>
              <div className="flex flex-wrap gap-1">
                {(skills.tools ?? []).map((s) => (
                  <span key={s} className="px-2 py-0.5 text-xs border rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

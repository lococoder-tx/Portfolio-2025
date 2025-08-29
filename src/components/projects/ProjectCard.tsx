import { ExternalLink } from 'lucide-react';
import type { Project } from '@/types/Project';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ProjectDetails from '@/components/projects/ProjectDetails';

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300',
        'hover:-translate-y-1 hover:shadow-xl',
        className,
      )}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={project.imageSrc}
          alt={project.imageAlt ?? project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* top-left category pill */}
        <div className="pointer-events-none absolute left-4 top-4">
          <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur-md border border-border text-muted-foreground">
            {project.category}
          </span>
        </div>

        {/* Hover overlay + CTA */}
        <Dialog>
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <DialogTrigger asChild>
              <Button variant="default" className="shadow-md cursor-pointer">
                <ExternalLink className="w-4 h-4" />
                <span>View Project</span>
              </Button>
            </DialogTrigger>
          </div>
          <DialogContent className="w-[92vw] max-w-[92vw] sm:max-w-[85vw] lg:max-w-6xl h-[85vh] sm:h-[85vh] lg:h-auto lg:max-h-[90vh] p-0 overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="sr-only">{project.title}</DialogTitle>
            </DialogHeader>
            <ProjectDetails project={project} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-2 p-6">
        <h3 className="text-xl font-medium">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}

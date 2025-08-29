import type { WorkExperience } from '@/types/Work';

type WorkCardProps = {
  work: WorkExperience;
};

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="group grid grid-cols-1 lg:grid-cols-[10rem_1fr_30rem] gap-8 py-8 border-b border-border/50 hover:border-black/50 dark:hover:border-white/70 transition-colors duration-500">
      <div className="text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
        {work.year}
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-medium transition-transform duration-300 group-hover:scale-[1.03]">
            {work.role}
          </h3>
          <div className="text-base md:text-lg text-muted-foreground transition-transform duration-300 group-hover:scale-[1.02]">
            {work.company}
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-lg">
          {work.description}
        </p>
        {work.bullets && work.bullets.length > 0 && (
          <ul className="text-muted-foreground leading-relaxed max-w-lg space-y-2 mt-4">
            {work.bullets.map((bullet, bulletIndex) => (
              <li
                key={bulletIndex}
                className="flex items-start gap-2 space-y-1.5"
              >
                <span className="text-muted-foreground text-xs">•</span>
                <span className="text-sm">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-wrap content-start gap-2 lg:justify-end">
        {work.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs text-muted-foreground rounded border border-muted-foreground/20 transition-all duration-300 group-hover:text-foreground group-hover:border-muted-foreground/40"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

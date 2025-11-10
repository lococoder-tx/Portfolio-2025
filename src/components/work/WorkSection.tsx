import type { WorkExperience } from '@/types/Work';
import WorkCard from '@/components/work/WorkCard';

type WorkSectionProps = {
  id?: string;
  title?: string;
  timeRange?: string;
  workExperiences: Array<WorkExperience>;
  sectionRef?: (el: HTMLElement | null) => void;
};

export default function WorkSection({
  id = 'work',
  title = 'Selected Work',
  timeRange = '2018 — 2025',
  workExperiences,
  sectionRef,
}: WorkSectionProps) {
  return (
    <section
      id={id}
      ref={sectionRef}
      className="min-h-screen py-32 opacity-100 sm:opacity-0"
    >
      <div className="md:space-y-16">
        <div className="space-y-2 md:space-y-0 md:flex md:items-end md:justify-between">
          <h2 className="text-4xl font-light">{title}</h2>
          <div className="text-sm text-muted-foreground font-mono">
            {timeRange}
          </div>
        </div>

        <div className="space-y-12">
          {workExperiences.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

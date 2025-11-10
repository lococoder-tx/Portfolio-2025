import { MapPin } from 'lucide-react';
import type { PersonalInfo } from '@/types/Personal';
import Logo2 from '@/components/icons/Logo2';

type ProfileHeaderProps = {
  personalInfo: PersonalInfo;
  sectionRef?: (el: HTMLElement | null) => void;
};

export default function ProfileHeader({
  personalInfo,
  sectionRef,
}: ProfileHeaderProps) {
  return (
    <header
      id="intro"
      ref={sectionRef}
      className="min-h-screen flex items-center opacity-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
        {/* Left column: full-height image on large screens */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-3/4 overflow-hidden rounded-lg shadow">
            <img
              src={personalInfo.profileImage}
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
              <span>
                {personalInfo.brand.name} / {personalInfo.brand.year}
              </span>
            </div>
            <h1 className="text-7xl md:text-8xl lg:text-8xl font-light tracking-tight">
              {personalInfo.firstName}{' '}
              <span className="text-muted-foreground">
                {personalInfo.lastName}
              </span>
            </h1>
            <div className="text-lg md:text-xl text-muted-foreground">
              {personalInfo.title}
            </div>
          </div>

          {/* Row 3: Currently */}
          <div className="space-y-3">
            <div className="text-sm text-muted-foreground font-mono">
              CURRENTLY
            </div>
            <div className="p-4 border border-border rounded-lg max-w-md">
              <div className="text-base text-foreground">
                {personalInfo.subtitle}
              </div>
              <div className="text-sm text-muted-foreground flex flex-wrap gap-x-2">
                <span>{personalInfo.company}</span>
                <span>•</span>
                <span>{personalInfo.companyPeriod}</span>
              </div>
            </div>

            {/* Row 2: Description */}
            <div className="space-y-6 max-w-md">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  {personalInfo.isAvailable
                    ? 'Available for work'
                    : 'Not available'}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {personalInfo.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

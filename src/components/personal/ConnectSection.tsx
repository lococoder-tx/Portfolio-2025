import type { PersonalInfo } from '@/types/Personal';
import type { SocialLink } from '@/types/Social';
import SocialLinks from '@/components/social/SocialLinks';

type ConnectSectionProps = {
  personalInfo: PersonalInfo;
  socialLinks: Array<SocialLink>;
  sectionRef?: (el: HTMLElement | null) => void;
};

export default function ConnectSection({
  personalInfo,
  socialLinks,
  sectionRef,
}: ConnectSectionProps) {
  return (
    <section id="connect" ref={sectionRef} className="py-32 opacity-0">
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
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                <span className="text-lg">{personalInfo.email}</span>
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

        <SocialLinks socialLinks={socialLinks} />
      </div>
    </section>
  );
}

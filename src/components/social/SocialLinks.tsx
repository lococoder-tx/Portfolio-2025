import type { SocialLink } from '@/types/Social';

type SocialLinksProps = {
  socialLinks: Array<SocialLink>;
  title?: string;
};

export default function SocialLinks({
  socialLinks,
  title = 'ELSEWHERE',
}: SocialLinksProps) {
  return (
    <div className="space-y-8">
      <div className="text-sm text-muted-foreground font-mono">{title}</div>

      <div className="grid grid-cols-2 gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        ))}
      </div>
    </div>
  );
}

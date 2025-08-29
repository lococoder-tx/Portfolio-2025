import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import type { SocialLink } from '@/types/Social';

export const socialData: Array<SocialLink> = [
  {
    id: 'github',
    name: 'GitHub',
    handle: '@lococoder-tx',
    url: 'https://github.com/lococoder-tx',
    icon: Github,
  },
  {
    id: 'twitter',
    name: 'Twitter',
    handle: '@loco_coder',
    url: 'https://x.com/loco_coder',
    icon: Twitter,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'Elijah Gaytan',
    url: 'https://www.linkedin.com/in/elijahcgaytan',
    icon: Linkedin,
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: 'lococoder',
    url: 'https://www.youtube.com/@loco-coder',
    icon: Youtube,
  },
];

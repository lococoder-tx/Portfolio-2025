export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string; // public project URL
  sourceUrl?: string; // optional source code link

  // Optional detailed fields for modal
  overview?: string;
  features?: Array<string>;
  role?: string;
  duration?: string;
  skills?: {
    frontend?: Array<string>;
    backend?: Array<string>;
    tools?: Array<string>;
  };
};

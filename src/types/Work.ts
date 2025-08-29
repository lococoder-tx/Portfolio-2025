export interface WorkExperience {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
  bullets?: Array<string>;
  tech: Array<string>;
}

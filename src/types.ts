export interface Meta {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
  image: string;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  links: {
    linkedin?: string;
    github?: string;
    leetcode?: string;
    website?: string;
  };
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string[];
}

export interface Honor {
  title: string;
  description: string;
  date?: string;
  link?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  tools: string[];
  links?: {
    github?: string;
    demo?: string;
    website?: string;
  };
  image?: string;
}

export interface SiteIdentity {
  id: 'platform' | 'engineer';
  label: string;
  title: string;
  summary: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
}

export interface SiteData {
  meta: Meta;
  profile: Profile;
  identities: SiteIdentity[];
  experience: Experience[];
  education: Education[];
  honors: Honor[];
  projects: Project[];
}


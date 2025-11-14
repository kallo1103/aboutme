export interface HeroContent {
  tagline: string;
  title: string[];
  subtitle: string;
  interests: string[];
  stats: {
    projects: string;
    experienceYears: string;
  };
  cta: {
    label: string;
    href: string;
  };
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface AboutContent {
  heading: string;
  paragraphs: string[];
  focusAreas: FocusArea[];
}

export interface SkillItem {
  name: string;
  level: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  link: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  time: string;
  achievements: string[];
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
}

export interface PortfolioContent {
  hero: HeroContent;
  about: AboutContent;
  skills: SkillItem[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  contacts: ContactItem[];
  quote: string;
}


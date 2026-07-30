/* ═══════════════════════════════════════════════════════════════
   SHARED TYPESCRIPT INTERFACES
   All data shapes live here. Import from this file in data/ files
   and components. Extend as new sections are built.
═══════════════════════════════════════════════════════════════ */

/* ─── NAVIGATION ──────────────────────────────────────────────── */

export interface NavLink {
  label: string;
  anchor: string;
}

/* ─── PERSONAL ────────────────────────────────────────────────── */

export interface HeroHighlight {
  icon: string;
  label: string;
  value: string;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  fullName: string;
  initials: string;
  navSubtitle: string;      // short tag shown in navbar logo
  title: string;            // main professional title (hero h2)
  tagline: string;          // vision statement paragraph
  availabilityStatus: string;
  profileImage: string;     // relative path from src/assets/
  cvFile: string;
  heroHighlights: HeroHighlight[];
}

/* ─── CONTACT ─────────────────────────────────────────────────── */

export interface ContactInfo {
  email:              string;
  emailSecondary?:    string;
  phone:              string;
  linkedin:           string;
  github:             string;
  location:           string;
  availabilityDetail: string;
}

/* ─── EDUCATION ───────────────────────────────────────────────── */

export type EducationType = 'bac' | 'prep' | 'engineering' | 'master' | 'double-diploma';

export interface MapLocation {
  lat:   number;
  lng:   number;
  label: string;       // shown as tooltip on the map marker
}

export interface EducationEntry {
  id:          string;
  institution: string;
  degree:      string;
  field:       string;
  period:      string;
  location:    string;
  type:        EducationType;
  highlights?: string[];
  logo?:       string;
  isCurrent?:  boolean;
  mapLocations?: MapLocation[]; // one or more map pins for this entry
}

/* ─── PROFESSIONAL EXPERIENCE ─────────────────────────────────── */

export type ExperienceType = 'professional' | 'internship';

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  type: ExperienceType;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  logo?: string;
  featured?: boolean;
}

/* ─── PROJECTS ────────────────────────────────────────────────── */

export type ProjectCategory = 'bi' | 'ai' | 'data' | 'rpa' | 'software';
export type ProjectType     = 'academic' | 'professional';

export interface ProjectEntry {
  id:           string;
  title:        string;
  subtitle?:    string;
  category:     ProjectCategory;   // primary domain badge
  tags:         string[];          // for multi-filter matching (e.g. ['ai','bi'])
  type:         ProjectType;
  period:       string;
  company?:     string;            // present for professional projects
  description:  string;
  technologies: string[];
  github?:      string;
  demo?:        string;
  image?:       string;
  featured:     boolean;
}

/* ─── SKILLS ──────────────────────────────────────────────────── */

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Skill {
  name: string;
  level: SkillLevel;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  color: string;                // CSS color string or var(--token)
  skills: Skill[];
}

/* ─── SOFT SKILLS ─────────────────────────────────────────────── */

export interface SoftSkill {
  label: string;
  icon: string;
}

/* ─── LANGUAGES ───────────────────────────────────────────────── */

export type LanguageLevel = 'Native' | 'Fluent' | 'Advanced' | 'Intermediate' | 'Basic';

export interface LanguageEntry {
  language: string;
  level: LanguageLevel;
  flag: string;
  proficiency: number;          // 0–100
}

/* ─── INTERESTS ───────────────────────────────────────────────── */

export interface Interest {
  label: string;
  icon: string;
}

/* ─── CERTIFICATIONS ──────────────────────────────────────────── */

export type CertCategory =
  | 'bi'
  | 'ai'
  | 'data-science'
  | 'web-dev'
  | 'infrastructure'
  | 'soft-skills';

export interface Certification {
  id: string;
  title: string;
  provider: string;
  category: CertCategory;
  credentialUrl: string;
  date?: string;
  featured?: boolean;
}

/* ─── ABOUT ───────────────────────────────────────────────────── */

export interface Pillar {
  label: string;
  subtitle: string;
  icon: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Principle {
  icon: string;
  label: string;
  description: string;
}

export type VisionStatus = 'done' | 'current' | 'future' | 'goal';

export interface VisionStep {
  label: string;
  sub: string;
  status: VisionStatus;
  icon: string;
  year?: string;
}

export interface FrameworkStep {
  icon: string;
  label: string;
  description: string;
}

export interface AboutContent {
  paragraphs: string[];
  achievementFramework: FrameworkStep[];
  principles: Principle[];
  vision: VisionStep[];
  stats: Stat[];
}

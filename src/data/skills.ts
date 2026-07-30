import type { SkillCategory, SoftSkill, LanguageEntry, Interest } from '../types';

/* ══════════════════════════════════════════════════════════════
   TECHNICAL SKILLS — 4 domain panels
   icon: key string mapped to a Tabler icon in Skills.tsx
══════════════════════════════════════════════════════════════ */

export const technicalSkills: SkillCategory[] = [
  {
    id:       'ai-ml',
    category: 'AI & Machine Learning',
    icon:     'brain',
    color:    'var(--purple)',
    skills: [
      { name: 'Python',          level: 'advanced'      },
      { name: 'Machine Learning', level: 'intermediate' },
      { name: 'RAG',             level: 'intermediate'  },
      { name: 'NLP',             level: 'intermediate'  },
      { name: 'scikit-learn',    level: 'intermediate'  },
      { name: 'Pandas',          level: 'intermediate'  },
      { name: 'Computer Vision', level: 'beginner'      },
    ],
  },
  {
    id:       'bi-data',
    category: 'Business Intelligence',
    icon:     'chart',
    color:    'var(--gold)',
    skills: [
      { name: 'Power BI',      level: 'advanced'      },
      { name: 'Tableau',       level: 'intermediate'  },
      { name: 'Excel',         level: 'advanced'      },
      { name: 'Power Pivot',   level: 'intermediate'  },
      { name: 'DAX',           level: 'intermediate'  },
      { name: 'Data Modeling', level: 'intermediate'  },
    ],
  },
  {
    id:       'databases',
    category: 'Data & Databases',
    icon:     'database',
    color:    'var(--cyan)',
    skills: [
      { name: 'SQL',        level: 'advanced'      },
      { name: 'MySQL',      level: 'advanced'      },
      { name: 'PostgreSQL', level: 'intermediate'  },
      { name: 'SQL Server', level: 'intermediate'  },
      { name: 'SQLite',     level: 'intermediate'  },
    ],
  },
  {
    id:       'software',
    category: 'Software & Frameworks',
    icon:     'code',
    color:    'var(--blue)',
    skills: [
      { name: 'FastAPI',     level: 'intermediate' },
      { name: 'Flask',       level: 'intermediate' },
      { name: 'React',       level: 'intermediate' },
      { name: 'JavaScript',  level: 'intermediate' },
      { name: 'Java',        level: 'intermediate' },
      { name: 'Spring Boot', level: 'beginner'     },
      { name: 'C#',          level: 'beginner'     },
      { name: 'N8N',         level: 'intermediate' },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════
   SOFT SKILLS
══════════════════════════════════════════════════════════════ */

export const softSkills: SoftSkill[] = [
  { label: 'Perseverance',           icon: 'flame'   },
  { label: 'Adaptability',           icon: 'waves'   },
  { label: 'Attentive Listener',     icon: 'ear'     },
  { label: 'Active Listening',       icon: 'target'  },
  { label: 'Following Instructions', icon: 'check'   },
];

/* ══════════════════════════════════════════════════════════════
   OFFICE & TOOLS
══════════════════════════════════════════════════════════════ */

export const officeSkills: SoftSkill[] = [
  { label: 'PowerPoint', icon: 'presentation' },
  { label: 'Excel',      icon: 'table'        },
  { label: 'Canva',      icon: 'palette'      },
  { label: 'Word',       icon: 'file'         },
];

/* ══════════════════════════════════════════════════════════════
   LANGUAGES
══════════════════════════════════════════════════════════════ */

export const languages: LanguageEntry[] = [
  { language: 'Arabic',  level: 'Native',       flag: '🇲🇦', proficiency: 100 },
  { language: 'French',  level: 'Intermediate', flag: '🇫🇷', proficiency: 60  },
  { language: 'English', level: 'Intermediate', flag: '🇬🇧', proficiency: 60  },
];

/* ══════════════════════════════════════════════════════════════
   INTERESTS
══════════════════════════════════════════════════════════════ */

export const interests: Interest[] = [
  { label: 'Reading',                 icon: 'book'    },
  { label: 'Chess',                   icon: 'chess'   },
  { label: 'Fitness & Weight Training', icon: 'barbell' },
];

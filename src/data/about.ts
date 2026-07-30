import type { AboutContent } from '../types';

/**
 * About section content.
 * Edit paragraphs, principles, vision steps, and stats here.
 * The component reads everything from this file — no code changes needed.
 */
export const about: AboutContent = {

  /* ── Narrative paragraphs ────────────────────────────────────── */
  paragraphs: [
    "I'm an engineering student on a deliberate, multi-year journey to master three complementary domains: Artificial Intelligence, Data Engineering, and Business Intelligence. From Casablanca to Nice to Lyon, each step has added a new dimension to how I think about data and its potential to drive real decisions.",
    "I believe that technical expertise without character is fragile. That's why I invest as deliberately in who I am as in what I know — guided by a clear framework: strong core values, unwavering will, the right qualifications, and the right means.",
  ],

  /* ── Achievement framework ───────────────────────────────────── */
  achievementFramework: [
    {
      icon:        '🧭',
      label:       'Core Values',
      description: 'The foundation — principles that never change regardless of context',
    },
    {
      icon:        '🔥',
      label:       'Will',
      description: 'Unwavering determination and discipline toward the goal',
    },
    {
      icon:        '🎓',
      label:       'Qualifications',
      description: 'Structured knowledge, degrees, and proven competencies',
    },
    {
      icon:        '⚙️',
      label:       'Means',
      description: 'The right tools, methods, resources, and environment',
    },
  ],

  /* ── Core principles ─────────────────────────────────────────── */
  principles: [
    {
      icon:        '⚖️',
      label:       'Emotional Composure',
      description: 'No anger, no panic — maintaining clarity under any pressure',
    },
    {
      icon:        '🦁',
      label:       'Courage & Conviction',
      description: 'Bold thinking, owning decisions, and facing challenges head-on',
    },
    {
      icon:        '🎯',
      label:       'Deliberate Focus',
      description: 'Calm, methodical precision in everything I undertake',
    },
    {
      icon:        '🤝',
      label:       'Responsibility',
      description: 'Full ownership of my work and accountability for its impact',
    },
    {
      icon:        '⏳',
      label:       'Patience',
      description: 'Long-term thinking over short-term noise — trust the process',
    },
    {
      icon:        '🙏',
      label:       'Gratitude',
      description: 'Staying grounded, appreciating progress, and learning from everything',
    },
    {
      icon:        '💪',
      label:       'Self-Discipline',
      description: 'Physical, mental, and professional excellence — continuous self-improvement',
    },
    {
      icon:        '🧠',
      label:       'Mental Clarity',
      description: 'Clear thinking, articulate communication, and sharp decision-making',
    },
  ],

  /* ── Long-term vision roadmap ────────────────────────────────── */
  vision: [
    {
      label:  'Computer Science',
      sub:    'Engineering Degree — EMSI',
      status: 'done',
      icon:   '💻',
      year:   '2021 – 2026',
    },
    {
      label:  'Artificial Intelligence',
      sub:    'Double Diploma MIAGE IA — Université Côte d\'Azur',
      status: 'done',
      icon:   '🤖',
      year:   '2025 – 2026',
    },
    {
      label:  'Business Intelligence',
      sub:    'Master MIAGE — Université Claude Bernard Lyon 1',
      status: 'current',
      icon:   '📊',
      year:   '2026 – 2027',
    },
    {
      label:  'Industry Mastery',
      sub:    'Applying all 3 domains concretely in the workforce',
      status: 'future',
      icon:   '🏢',
      year:   '2027 – 2032',
    },
    {
      label:  'MBA',
      sub:    'Finance & Accounting — Business Leadership',
      status: 'future',
      icon:   '📈',
      year:   '2032+',
    },
    {
      label:  'Decision Intelligence',
      sub:    'Tech × AI × Data × Business — the full picture',
      status: 'goal',
      icon:   '🎯',
      year:   'The Goal',
    },
  ],

  /* ── Stats strip ─────────────────────────────────────────────── */
  stats: [
    { value: '6+',  label: 'Projects'       },
    { value: '45+', label: 'Certifications' },
    { value: '3',   label: 'Domains'        },
    { value: '3',   label: 'Universities'   },
  ],
};

import type { ExperienceEntry } from '../types';

/**
 * Professional experience — displayed in the Experience section.
 * Data extracted verbatim from CV.
 * Most recent first.
 */
export const experience: ExperienceEntry[] = [
  {
    id:          'cih',
    role:        'RPA & Automation Developer Intern — PFE',
    company:     'CIH Bank',
    type:        'internship',
    period:      'February 2026 – July 2026',
    location:    'Casablanca, Morocco',
    description:
      'Graduation internship (PFE) — built SmartRPA, an intelligent document processing platform automating banking form extraction and workflows, orchestrated end-to-end with N8N and a chatbot interface.',
    responsibilities: [
      'Developed a document processing platform combining OCR, NLP, and validation to automate banking form extraction.',
      'Designed REST APIs and automated workflows using Python, FastAPI, OCR technologies, and N8N for workflow orchestration.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'N8N',
      'OCR',
      'NLP',
      'REST API',
      'Chatbot',
      'RPA',
    ],
  },
  {
    id:          'aurora',
    role:        'AI & Business Intelligence Developer — PFA',
    company:     'Université Côte d\'Azur (Master 2 MIAGE-IA)',
    type:        'professional',
    period:      'February 2026 – June 2026',
    location:    'Casablanca, Morocco',
    description:
      'PFA (end-of-year project) for the UCA Master 2 MIAGE-IA — designed and delivered Aurora, an AI-powered esports analytics platform for Valorant players, including a full business plan.',
    responsibilities: [
      'Designed and developed Aurora, an AI-powered esports analytics platform combining performance analysis, interactive dashboards, and personalized recommendations for Valorant players.',
      'Integrated Business Intelligence dashboards, RAG, and machine learning to transform gameplay data into actionable insights. Delivered a full business plan alongside the technical solution.',
    ],
    technologies: ['Python', 'Power BI', 'RAG', 'Machine Learning', 'FastAPI', 'Data Analytics', 'Business Plan'],
  },
  {
    id:          'devaktus',
    role:        'AI & Data Application Developer',
    company:     'DevAktus',
    type:        'internship',
    period:      'July 2025 – August 2025',
    location:    'Remote / Morocco',
    description:
      'Developed a multimodal AI content moderation platform capable of analyzing text, images, videos, audio, and copyright infringement using advanced AI models.',
    responsibilities: [
      'Developed a multimodal AI content moderation platform capable of moderating text, images, videos, audio, and copyright using advanced AI models.',
      'Designed AI-powered REST APIs with FastAPI, developed the frontend using React, and integrated multiple AI models for intelligent content analysis and automated moderation.',
    ],
    technologies: [
      'FastAPI',
      'Python',
      'React',
      'REST API',
      'Multimodal AI',
      'Computer Vision',
      'NLP',
    ],
  },
];

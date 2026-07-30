import type { ProjectEntry } from '../types';

/**
 * All projects — displayed in the Projects section with filter/group support.
 *
 * Sources:
 *  - Professional projects: extracted from CV "Professional Experience" section
 *  - Academic projects:     extracted from CV "Academic Projects" section
 *
 * Tags are used for multi-category filter matching.
 * Most recent first within each type.
 */
export const projects: ProjectEntry[] = [

  /* ═══════════════════════════════════════════════
     PROFESSIONAL PROJECTS
  ═══════════════════════════════════════════════ */

  {
    id:          'smartrpa',
    title:       'SmartRPA — Intelligent Document Processing',
    subtitle:    'PFE — Graduation Internship',
    category:    'rpa',
    tags:        ['rpa', 'professional'],
    type:        'professional',
    period:      'February 2026 – July 2026',
    company:     'CIH Bank',
    description:
      'Built an end-to-end document processing platform that automates banking form extraction using OCR and NLP, with workflow orchestration via N8N and a chatbot interface for staff interaction.',
    technologies: ['Python', 'FastAPI', 'N8N', 'OCR', 'NLP', 'REST API', 'Chatbot'],
    featured:    true,
  },
  {
    id:          'aurora-esports',
    title:       'Aurora — Esports Analytics Platform',
    subtitle:    'PFA · UCA Master 2 MIAGE-IA · Includes Business Plan',
    category:    'ai',
    tags:        ['ai', 'bi', 'professional'],
    type:        'professional',
    period:      'February 2026 – June 2026',
    description:
      'End-of-year project (PFA) for the UCA Master 2 MIAGE-IA — built Aurora, an AI-powered esports analytics platform combining performance analysis, interactive BI dashboards, and personalized recommendations for Valorant players. Delivered with a full business plan.',
    technologies: ['Python', 'Power BI', 'RAG', 'Machine Learning', 'FastAPI', 'Data Analytics', 'Business Plan'],
    featured:    true,
  },
  {
    id:          'devaktus-moderation',
    title:       'Multimodal AI Content Moderation',
    subtitle:    'Text · Images · Video · Audio · Copyright',
    category:    'ai',
    tags:        ['ai', 'professional'],
    type:        'professional',
    period:      'July 2025 – August 2025',
    company:     'DevAktus',
    description:
      'Developed a multimodal AI content moderation platform capable of analyzing text, images, videos, audio, and copyright infringement. Built AI-powered REST APIs with FastAPI and a React frontend for intelligent automated moderation.',
    technologies: ['FastAPI', 'Python', 'React', 'REST API', 'Multimodal AI', 'Computer Vision', 'NLP'],
    featured:    true,
  },

  /* ═══════════════════════════════════════════════
     ACADEMIC PROJECTS
  ═══════════════════════════════════════════════ */

  {
    id:          'churn-prediction',
    title:       'Customer Churn Prediction',
    subtitle:    'ML predictive analytics model',
    category:    'ai',
    tags:        ['ai', 'data', 'academic'],
    type:        'academic',
    period:      'March 2025 – April 2025',
    description:
      'Developed a predictive analytics model for customer churn using machine learning techniques and customer behavior data analysis.',
    technologies: ['Python', 'Machine Learning', 'scikit-learn', 'Pandas', 'Data Analysis'],
    featured:    false,
  },
  {
    id:          'ai-assistant',
    title:       'AI Data Analysis Assistant',
    subtitle:    'Automated data visualization generation',
    category:    'ai',
    tags:        ['ai', 'academic'],
    type:        'academic',
    period:      'May 2024 – June 2024',
    description:
      'Developed an AI-powered assistant for dataset analysis and automated data visualization generation using Python, Flask, and React.',
    technologies: ['Python', 'Flask', 'React', 'Data Visualization', 'AI'],
    featured:    false,
  },
  {
    id:          'powerbi-dashboard',
    title:       'Power BI KPI Dashboard',
    subtitle:    'Interactive BI dashboards for business monitoring',
    category:    'bi',
    tags:        ['bi', 'data', 'academic'],
    type:        'academic',
    period:      'July 2024',
    description:
      'Developed interactive Business Intelligence dashboards using Power BI for KPI monitoring and data analysis.',
    technologies: ['Power BI', 'DAX', 'Excel', 'Power Pivot', 'Data Modeling'],
    featured:    false,
  },
];

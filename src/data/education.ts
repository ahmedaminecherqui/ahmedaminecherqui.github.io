import type { EducationEntry } from '../types';

/**
 * Education history — displayed in the Journey (Timeline) section.
 * Chronological order (oldest first).
 *
 * Accuracy notes:
 *  - Baccalauréat: GSB, Casablanca — not EMSI
 *  - Cycle Préparatoire: first 2 years at EMSI (part of the engineering curriculum)
 *  - EMSI has two campuses used: Roudani (380 Bd Brahim Roudani) & Maarif/Beranzan (217 Bd Bir Anzarane)
 *  - Double Diplôme Côte d'Azur: partnership with EMSI — studied in Casablanca, NOT in Nice
 *  - Master MIAGE Lyon 1: current, in-person in Lyon, France
 */
export const education: EducationEntry[] = [
  {
    id:          'bac',
    institution: 'Groupe Scolaire de Bourgogne (GSB)',
    degree:      'Baccalauréat — Sciences Physiques et Chimiques',
    field:       'Physics & Chemistry',
    period:      '2020 – 2021',
    location:    'Casablanca, Morocco',
    type:        'bac',
    highlights: [
      'Moroccan Baccalauréat with honors',
    ],
    mapLocations: [
      { lat: 33.5951, lng: -7.6188, label: 'GSB — 232 Bd Bourgogne, Casablanca' },
    ],
  },
  {
    id:          'emsi-prepa',
    institution: 'EMSI — École Marocaine des Sciences de l\'Ingénieur',
    degree:      'Cycle Préparatoire Intégré',
    field:       'Mathematics, Physics & Foundational Computer Science',
    period:      '2021 – 2023',
    location:    'Casablanca, Morocco',
    type:        'prep',
    highlights: [
      'Intensive 2-year preparatory cycle in Mathematics, Physics, and Computer Science',
    ],
    mapLocations: [
      { lat: 33.5852, lng: -7.6347, label: 'EMSI Roudani — 380 Bd Brahim Roudani' },
      { lat: 33.5875, lng: -7.6203, label: 'EMSI Maarif — 217 Bd Bir Anzarane' },
    ],
  },
  {
    id:          'emsi-engineering',
    institution: 'EMSI — École Marocaine des Sciences de l\'Ingénieur',
    degree:      'Diplôme d\'Ingénieur d\'État',
    field:       'Computer Science & Software Engineering',
    period:      '2023 – 2026',
    location:    'Casablanca, Morocco',
    type:        'engineering',
    highlights: [
      'State-accredited 5-year engineering program in Computer Science',
      'Specialization in Software Engineering and Data',
      'Graduation Project (PFE): SmartRPA — Intelligent Document Processing Platform at CIH Bank',
      'Automated banking form extraction using OCR, NLP, FastAPI and N8N workflow orchestration',
    ],
    mapLocations: [
      { lat: 33.5852, lng: -7.6347, label: 'EMSI Roudani — 380 Bd Brahim Roudani' },
      { lat: 33.5875, lng: -7.6203, label: 'EMSI Maarif — 217 Bd Bir Anzarane' },
    ],
  },
  {
    id:          'uca-double-diploma',
    institution: 'EMSI × Université Côte d\'Azur',
    degree:      'Master 2 MIAGE — Intelligence Artificielle Appliquée',
    field:       'Artificial Intelligence',
    period:      '2025 – 2026',
    location:    'Casablanca, Morocco',
    type:        'double-diploma',
    highlights: [
      'Double diploma program in Artificial Intelligence',
      'Specialization: Deep Learning, NLP, and Computer Vision',
      'Program delivered in Casablanca within EMSI\'s 5th year (partnership, not in Nice)',
    ],
    mapLocations: [
      { lat: 33.5852, lng: -7.6347, label: 'EMSI Roudani — 380 Bd Brahim Roudani' },
      { lat: 33.5875, lng: -7.6203, label: 'EMSI Maarif — 217 Bd Bir Anzarane' },
    ],
    isCurrent: false,
  },
  {
    id:          'lyon1-miage',
    institution: 'Université Claude Bernard Lyon 1',
    degree:      'Master 2 MIAGE — Méthodes Informatiques Appliquées à la Gestion des Entreprises',
    field:       'Business Intelligence',
    period:      'Sept 2026 – 2027',
    location:    'Lyon, France',
    type:        'master',
    highlights: [
      'Specialization: Business Intelligence, Data Warehousing & Mining',
      'Key subjects: ETL pipelines, OLAP, Big Data, Data Governance',
      'Part of the "BI & Systèmes Décisionnels" track',
      'In-person program at Campus La Doua, Lyon',
    ],
    mapLocations: [
      { lat: 45.7810, lng: 4.8676, label: 'Campus La Doua — Université Claude Bernard Lyon 1' },
    ],
    isCurrent: true,
  },
];

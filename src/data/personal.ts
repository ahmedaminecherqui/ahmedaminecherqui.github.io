import type { PersonalInfo } from '../types';

/**
 * Core personal identity data.
 * Used by: Navbar (logo), Hero, Footer.
 * Update once — reflects everywhere.
 *
 * NOTE: profileImage — once you have a real photo, drop it in
 *       src/assets/images/profile.jpg and update the path below.
 */
export const personal: PersonalInfo = {
  firstName:          'Ahmed',
  lastName:           'Cherqui Amine',
  fullName:           'Ahmed Cherqui Amine',
  initials:           'AC',
  navSubtitle:        'BI · Data · AI',
  title:              'Business Intelligence · Data Engineering · Artificial Intelligence',
  tagline:            'Building intelligent systems that transform raw data into actionable business decisions — across Business Intelligence, Data Engineering and Artificial Intelligence.',
  availabilityStatus: 'Available for Internship',
  profileImage:       '', // TODO: set to your photo path once added to src/assets/images/
  cvFile:             '/resume.pdf', // served from public/resume.pdf

  heroHighlights: [
    { icon: '📍', label: 'Based in',             value: 'Lyon, France'          },
    { icon: '🎓', label: 'Master MIAGE',          value: 'Business Intelligence' },
    { icon: '🏛', label: 'Université Claude Bernard', value: 'Lyon 1'           },
  ],
};

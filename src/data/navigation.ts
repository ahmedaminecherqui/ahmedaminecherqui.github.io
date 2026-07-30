import type { NavLink } from '../types';

/**
 * Navigation links for the Navbar.
 * Each anchor must match the `id` attribute of the corresponding section.
 * To add/remove/rename a nav item, edit only this file.
 */
export const navLinks: NavLink[] = [
  { label: 'About',          anchor: '#about' },
  { label: 'Journey',        anchor: '#journey' },
  { label: 'Experience',     anchor: '#experience' },
  { label: 'Projects',       anchor: '#projects' },
  { label: 'Skills',         anchor: '#skills' },
  { label: 'Certifications', anchor: '#certifications' },
  { label: 'Contact',        anchor: '#contact' },
];

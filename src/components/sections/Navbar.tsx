import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdFileDownload } from 'react-icons/md';

import { navLinks } from '../../data/navigation';
import { personal } from '../../data/personal';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const sectionIds = navLinks.map((l) => l.anchor.replace('#', ''));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  /* ── scroll detection ─────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── close mobile menu on resize to desktop ───────────────── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 920) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* ── smooth scroll helper ─────────────────────────────────── */
  const scrollTo = (anchor: string) => {
    setMenuOpen(false);
    const el = document.querySelector(anchor);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  /* ── animation variants ───────────────────────────────────── */
  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as any } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -12, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: 'easeOut' as any } },
    exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.2, ease: 'easeIn' as any } },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, x: -14 },
    show: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.045, duration: 0.22 },
    }),
  };

  return (
    <>
      {/* ═══════════ MAIN NAVBAR BAR ═══════════ */}
      <motion.header
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        variants={navVariants}
        initial="hidden"
        animate="show"
      >
        {/* ── Logo ── */}
        <a
          href="#"
          className="navbar__logo"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          aria-label="Back to top"
        >
          <div className="navbar__logo-circle">
            {personal.initials}
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">{personal.fullName}</span>
            <span className="navbar__logo-sub">{personal.navSubtitle}</span>
          </div>
        </a>

        {/* ── Desktop navigation links ── */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.anchor.replace('#', '');
            return (
              <button
                key={link.anchor}
                id={`nav-link-${link.anchor.replace('#', '')}`}
                className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
                onClick={() => scrollTo(link.anchor)}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    className="navbar__link-dot"
                    layoutId="nav-dot"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* ── Actions: CTA + hamburger ── */}
        <div className="navbar__actions">
          {/* Download CV — desktop */}
          <a
            href={personal.cvFile}
            target="_blank"
            rel="noopener noreferrer"
            download="Ahmed_Cherqui_Amine_CV.pdf"
            className="navbar__cta"
            id="navbar-download-cv"
            aria-label="Download CV"
          >
            <MdFileDownload size={17} aria-hidden="true" />
            Download CV
          </a>

          {/* Hamburger — mobile */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            id="navbar-hamburger"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'flex' }}
                >
                  <HiX size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'flex' }}
                >
                  <HiMenuAlt3 size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ═══════════ MOBILE MENU OVERLAY ═══════════ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            id="mobile-nav-menu"
            role="dialog"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.anchor.replace('#', '');
              return (
                <motion.button
                  key={link.anchor}
                  className={`mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`}
                  onClick={() => scrollTo(link.anchor)}
                  variants={linkItemVariants}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  id={`mobile-nav-link-${link.anchor.replace('#', '')}`}
                >
                  {link.label}
                </motion.button>
              );
            })}

            <div className="mobile-menu__divider" />

            <motion.a
              href={personal.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              download="Ahmed_Cherqui_Amine_CV.pdf"
              className="mobile-menu__cta"
              id="mobile-nav-download-cv"
              variants={linkItemVariants}
              custom={navLinks.length}
              initial="hidden"
              animate="show"
              aria-label="Download CV"
            >
              <MdFileDownload size={18} aria-hidden="true" />
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

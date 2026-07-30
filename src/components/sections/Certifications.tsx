import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbExternalLink, TbAward, TbStar } from 'react-icons/tb';

import { certifications } from '../../data/certifications';
import type { CertCategory } from '../../types';

/* ─── Filter config ─────────────────────────────────────────── */

interface Filter {
  id: string;
  label: string;
  match: (c: typeof certifications[number]) => boolean;
}

const FILTERS: Filter[] = [
  { id: 'all',            label: 'All',            match: () => true },
  { id: 'bi',            label: 'BI & Analytics',  match: (c) => c.category === 'bi'           },
  { id: 'ai',            label: 'AI & ML',         match: (c) => c.category === 'ai'           },
  { id: 'data-science',  label: 'Data & Python',   match: (c) => c.category === 'data-science' },
  { id: 'web-dev',       label: 'Web Dev',         match: (c) => c.category === 'web-dev'      },
  { id: 'infrastructure',label: 'Infrastructure',  match: (c) => c.category === 'infrastructure'},
  { id: 'soft-skills',   label: 'Personal Dev',    match: (c) => c.category === 'soft-skills'  },
];

/* ─── Category accent colors ────────────────────────────────── */

const catColor: Record<CertCategory, string> = {
  'bi':             'var(--gold)',
  'ai':             'var(--purple)',
  'data-science':   'var(--cyan)',
  'web-dev':        'var(--blue)',
  'infrastructure': 'var(--blue-light)',
  'soft-skills':    'hsl(142 70% 45%)',
};

/* ─── Framer variants ───────────────────────────────────────── */

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const gridVariants = {
  show: { transition: { staggerChildren: 0.04 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
  exit:   { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

/* ─── Component ────────────────────────────────────────────── */

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    const filterFn = FILTERS.find((f) => f.id === activeFilter)?.match ?? (() => true);
    return certifications.filter(filterFn);
  }, [activeFilter]);

  return (
    <section id="certifications" className="certifications" aria-label="Certifications and credentials">

      {/* ══════════ SECTION HEADER ══════════ */}
      <motion.div
        className="section-header"
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="section-eyebrow">Credentials</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          {certifications.length} verified credentials across Business Intelligence, AI,
          Data Science, Software Development, and more — all issued via Coursera.
        </p>
      </motion.div>

      {/* ══════════ FILTER PILLS ══════════ */}
      <motion.div
        className="certs__filters"
        role="tablist"
        aria-label="Filter certifications by category"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {FILTERS.map((f) => {
          const count = certifications.filter(f.match).length;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={activeFilter === f.id}
              id={`cert-filter-${f.id}`}
              className={`certs__filter-pill${activeFilter === f.id ? ' certs__filter-pill--active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
              <span className="certs__filter-count">{count}</span>
            </button>
          );
        })}
      </motion.div>

      {/* ══════════ RESULTS COUNT ══════════ */}
      <p className="certs__results-label" aria-live="polite">
        Showing <strong>{filtered.length}</strong> certification{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* ══════════ GRID ══════════ */}
      <motion.div
        className="certs__grid"
        role="tabpanel"
        variants={gridVariants}
        initial="show"
        animate="show"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((cert) => {
            const color = catColor[cert.category];
            return (
              <motion.article
                key={cert.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className={`cert-card${cert.featured ? ' cert-card--featured' : ''}`}
                style={{ '--cert-color': color } as React.CSSProperties}
                aria-label={cert.title}
              >
                {/* Left accent bar */}
                <span className="cert-card__bar" aria-hidden="true" />

                {/* Content */}
                <div className="cert-card__body">
                  {/* Top row: icon + featured star */}
                  <div className="cert-card__top">
                    <span className="cert-card__icon" aria-hidden="true">
                      <TbAward size={16} />
                    </span>
                    {cert.featured && (
                      <span className="cert-card__star" aria-label="Featured">
                        <TbStar size={13} />
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="cert-card__title">{cert.title}</h3>

                  {/* Provider */}
                  <p className="cert-card__provider">{cert.provider}</p>

                  {/* Verify link */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-card__verify"
                    aria-label={`Verify certificate: ${cert.title}`}
                  >
                    Verify <TbExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}

import { motion } from 'framer-motion';

import { education } from '../../data/education';
import type { EducationEntry } from '../../types';
import MiniMap from '../ui/MiniMap';

/* ─── School logo imports ───────────────────────────────────── */
import gsbLogo  from '../../assets/images/gsb_logo.png';
import emsiLogo from '../../assets/images/EMSI.png';
import ucaLogo  from '../../assets/images/Cote_Azure.png';
import lyonLogo from '../../assets/images/lyon_logo.png';

const schoolLogos: Record<string, string[]> = {
  'bac':                [gsbLogo],
  'emsi-prepa':         [emsiLogo],
  'emsi-engineering':   [emsiLogo],
  'uca-double-diploma': [emsiLogo, ucaLogo],
  'lyon1-miage':        [lyonLogo],
};

/* ─── Type badge config ─────────────────────────────────────── */

const typeBadge: Record<EducationEntry['type'], { label: string; color: string }> = {
  bac:           { label: 'Baccalauréat',    color: 'var(--gold)'        },
  prep:          { label: 'Cycle Prépa',      color: 'var(--cyan)'        },
  engineering:   { label: 'Diplôme Ingénieur', color: 'var(--blue)'     },
  'double-diploma': { label: 'Double Diplôme', color: 'var(--purple)'   },
  master:        { label: 'Master 2',         color: 'var(--cyan)'       },
};

/* ─── Framer Motion variants ───────────────────────────────── */

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ─── Component ────────────────────────────────────────────── */

export default function Journey() {
  // Reverse so most recent is at top
  const entries = [...education].reverse();

  return (
    <section id="journey" className="journey" aria-label="Education timeline">

      {/* ══════════ SECTION HEADER ══════════ */}
      <motion.div
        className="section-header"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="section-eyebrow">Academic Path</span>
        <h2 className="section-title">The Journey</h2>
        <p className="section-subtitle">
          From high school in Casablanca to Lyon — a step-by-step ascent
          through Computer Science, Artificial Intelligence, and Business Intelligence.
        </p>
      </motion.div>

      {/* ══════════ TIMELINE ══════════ */}
      <div className="journey__timeline">

        {/* Central spine */}
        <div className="journey__spine" aria-hidden="true" />

        {entries.map((entry, i) => {
          const badge  = typeBadge[entry.type];
          const isLeft = i % 2 === 0; // alternate sides

          return (
            <motion.div
              key={entry.id}
              className={`journey__item ${isLeft ? 'journey__item--left' : 'journey__item--right'}`}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* ── Node dot on the spine ── */}
              <div
                className={`journey__dot${entry.isCurrent ? ' journey__dot--current' : ''}`}
                aria-hidden="true"
              >
                {entry.isCurrent && <span className="journey__dot-pulse" />}
              </div>

              {/* ── Card ── */}
              <div className={`journey__card${entry.isCurrent ? ' journey__card--current' : ''}`}>

                {/* Header row */}
                <div className="journey__card-header">
                  <span
                    className="journey__badge"
                    style={{ color: badge.color, borderColor: `${badge.color}33`, background: `${badge.color}10` }}
                  >
                    {badge.label}
                  </span>
                  {entry.isCurrent && (
                    <span className="journey__current-tag">Current</span>
                  )}
                </div>

                {/* Degree */}
                <h3 className="journey__degree">{entry.degree}</h3>

                {/* Institution name with inline logo(s) */}
                <p className="journey__institution">
                  {schoolLogos[entry.id]?.map((logo, index) => (
                    <img
                      key={index}
                      src={logo}
                      alt=""
                      className="journey__institution-logo"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  ))}
                  {entry.institution}
                </p>

                {/* Meta row: period + location */}
                <div className="journey__meta">
                  <span className="journey__meta-item">
                    <span aria-hidden="true">📅</span> {entry.period}
                  </span>
                  <span className="journey__meta-divider" aria-hidden="true">·</span>
                  <span className="journey__meta-item">
                    <span aria-hidden="true">📍</span> {entry.location}
                  </span>
                </div>

                {/* Highlights */}
                {entry.highlights && entry.highlights.length > 0 && (
                  <ul className="journey__highlights">
                    {entry.highlights.map((h) => (
                      <li key={h} className="journey__highlight">
                        <span className="journey__highlight-dot" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Mini map */}
                {entry.mapLocations && entry.mapLocations.length > 0 && (
                  <MiniMap locations={entry.mapLocations} height={160} />
                )}
              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}

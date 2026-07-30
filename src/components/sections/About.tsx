import { motion } from 'framer-motion';

import { about } from '../../data/about';
import type { VisionStatus } from '../../types';

/* ─── Framer Motion variants ───────────────────────────────── */

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = (delay = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: delay },
  },
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show:   {
    opacity: 1, x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show:   {
    opacity: 1, x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ─── Vision status helpers ────────────────────────────────── */

const visionStatusConfig: Record<VisionStatus, { label: string; className: string }> = {
  done:    { label: 'Completed', className: 'about__vision-node--done'    },
  current: { label: 'In Progress', className: 'about__vision-node--current' },
  future:  { label: 'Upcoming',  className: 'about__vision-node--future'  },
  goal:    { label: 'Goal',      className: 'about__vision-node--goal'    },
};

/* ─── Component ────────────────────────────────────────────── */

export default function About() {
  return (
    <section id="about" className="about" aria-label="About me">

      {/* ══════════ SECTION HEADER ══════════ */}
      <motion.div
        className="section-header"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="section-eyebrow">Get to know me</span>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          The story behind the data — who I am, how I think, and where I'm going.
        </p>
      </motion.div>

      {/* ══════════ BLOCK 1: INTRO + FRAMEWORK ══════════ */}
      <div className="about__intro">

        {/* Left: narrative */}
        <motion.div
          className="about__narrative"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        {/* Right: achievement framework */}
        <motion.div
          className="about__framework"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="about__framework-title">How I achieve anything</h3>
          <div className="about__framework-steps">
            {about.achievementFramework.map((step, i) => (
              <div key={step.label} className="about__framework-step">
                <div className="about__framework-step-icon">{step.icon}</div>
                <div className="about__framework-step-body">
                  <strong>{step.label}</strong>
                  <span>{step.description}</span>
                </div>
                {i < about.achievementFramework.length - 1 && (
                  <div className="about__framework-arrow" aria-hidden="true">↓</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* ══════════ BLOCK 2: CORE PRINCIPLES ══════════ */}
      <motion.div
        className="about__principles-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <h3 className="about__subsection-title">Core Principles</h3>
        <p className="about__subsection-sub">
          The values I operate by — in work and in life.
        </p>

        <motion.div
          className="about__principles-grid"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {about.principles.map((p) => (
            <motion.div
              key={p.label}
              className="about__principle-card"
              variants={fadeUp}
            >
              <span className="about__principle-icon" aria-hidden="true">{p.icon}</span>
              <strong className="about__principle-label">{p.label}</strong>
              <p className="about__principle-desc">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ══════════ BLOCK 3: LONG-TERM VISION ══════════ */}
      <motion.div
        className="about__vision-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <h3 className="about__subsection-title">Long-Term Vision</h3>
        <p className="about__subsection-sub">
          A deliberate, decade-long roadmap toward mastery across technology, data, and business.
        </p>

        <div className="about__vision-track">
          {/* Connecting line */}
          <div className="about__vision-line" aria-hidden="true" />

          {about.vision.map((step, i) => {
            const cfg = visionStatusConfig[step.status];
            return (
              <motion.div
                key={step.label}
                className={`about__vision-node ${cfg.className}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay:    i * 0.1,
                  ease:     [0.22, 1, 0.36, 1],
                }}
              >
                <div className="about__vision-circle">
                  <span className="about__vision-icon" aria-hidden="true">{step.icon}</span>
                  {step.status === 'current' && (
                    <span className="about__vision-pulse" aria-hidden="true" />
                  )}
                </div>
                <div className="about__vision-content">
                  <span className="about__vision-badge">{cfg.label}</span>
                  <strong className="about__vision-label">{step.label}</strong>
                  <span className="about__vision-sub">{step.sub}</span>
                  {step.year && (
                    <span className="about__vision-year">{step.year}</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ══════════ BLOCK 4: STATS STRIP ══════════ */}
      <motion.div
        className="about__stats"
        variants={staggerContainer(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {about.stats.map((s) => (
          <motion.div
            key={s.label}
            className="about__stat"
            variants={fadeUp}
          >
            <span className="about__stat-value">{s.value}</span>
            <span className="about__stat-label">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}

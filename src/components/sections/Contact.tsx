import { motion } from 'framer-motion';
import {
  TbBrandLinkedin, TbBrandGithub, TbMail, TbMailForward,
  TbMapPin, TbArrowRight,
} from 'react-icons/tb';

import { contact } from '../../data/contact';

/* ─── Card config ───────────────────────────────────────────── */

interface ContactCard {
  id:       string;
  icon:     React.ReactNode;
  label:    string;
  value:    string;
  href:     string;
  cta:      string;
  color:    string;
  gradient: string;
}

const cards: ContactCard[] = [
  {
    id:       'linkedin',
    icon:     <TbBrandLinkedin size={26} />,
    label:    'LinkedIn',
    value:    'ahmed-amine-cherqui',
    href:     contact.linkedin,
    cta:      'Connect',
    color:    '#0A66C2',
    gradient: 'linear-gradient(135deg, rgba(10,102,194,0.15) 0%, rgba(10,102,194,0.04) 100%)',
  },
  {
    id:       'github',
    icon:     <TbBrandGithub size={26} />,
    label:    'GitHub',
    value:    'ahmedaminecherqui',
    href:     contact.github,
    cta:      'View Profile',
    color:    '#e6edf3',
    gradient: 'linear-gradient(135deg, rgba(230,237,243,0.08) 0%, rgba(230,237,243,0.02) 100%)',
  },
  {
    id:       'email-main',
    icon:     <TbMail size={26} />,
    label:    'Primary Email',
    value:    contact.email,
    href:     `mailto:${contact.email}`,
    cta:      'Send Email',
    color:    'hsl(262 80% 70%)',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.04) 100%)',
  },
  {
    id:       'email-sec',
    icon:     <TbMailForward size={26} />,
    label:    'Secondary Email',
    value:    contact.emailSecondary ?? '',
    href:     `mailto:${contact.emailSecondary}`,
    cta:      'Send Email',
    color:    'var(--cyan)',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(6,182,212,0.03) 100%)',
  },
];

/* ─── Framer variants ───────────────────────────────────────── */

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show:   (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ─── Component ────────────────────────────────────────────── */

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-label="Contact and social links">

      {/* ══════════ AVAILABILITY BADGE ══════════ */}
      <motion.div
        className="contact__status"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="contact__status-dot" aria-hidden="true" />
        <span className="contact__status-text">
          {contact.availabilityDetail}
        </span>
      </motion.div>

      {/* ══════════ SECTION HEADER ══════════ */}
      <motion.div
        className="section-header"
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Whether you have a project, an opportunity, or just want to say hi —
          I'd love to hear from you.
        </p>
      </motion.div>

      {/* ══════════ LOCATION ══════════ */}
      <motion.div
        className="contact__location"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <TbMapPin size={16} aria-hidden="true" />
        <span>{contact.location}</span>
      </motion.div>

      {/* ══════════ CONTACT CARDS ══════════ */}
      <div className="contact__grid">
        {cards.map((card, i) => (
          <motion.a
            key={card.id}
            href={card.href}
            target={card.href.startsWith('mailto') ? undefined : '_blank'}
            rel={card.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="contact-card"
            style={{
              '--card-color':    card.color,
              '--card-gradient': card.gradient,
            } as React.CSSProperties}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            aria-label={`${card.label}: ${card.value}`}
          >
            {/* Background gradient fill */}
            <span className="contact-card__bg" aria-hidden="true" />

            {/* Icon */}
            <span className="contact-card__icon" aria-hidden="true">
              {card.icon}
            </span>

            {/* Text */}
            <div className="contact-card__text">
              <p className="contact-card__label">{card.label}</p>
              <p className="contact-card__value">{card.value}</p>
            </div>

            {/* CTA */}
            <span className="contact-card__cta">
              {card.cta} <TbArrowRight size={14} aria-hidden="true" />
            </span>
          </motion.a>
        ))}
      </div>

    </section>
  );
}

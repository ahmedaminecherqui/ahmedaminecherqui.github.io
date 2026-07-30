import { TbBrandLinkedin, TbBrandGithub, TbMail } from 'react-icons/tb';
import { contact } from '../../data/contact';
import { personal } from '../../data/personal';
import { navLinks } from '../../data/navigation';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer__inner">

        {/* ── Brand ── */}
        <div className="footer__brand">
          <div className="footer__initials" aria-hidden="true">
            {personal.initials}
          </div>
          <div>
            <p className="footer__name">{personal.fullName}</p>
            <p className="footer__sub">{personal.navSubtitle}</p>
          </div>
        </div>

        {/* ── Nav links ── */}
        <nav className="footer__nav" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a key={link.anchor} href={link.anchor} className="footer__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Social icons ── */}
        <div className="footer__socials">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-icon"
            aria-label="LinkedIn profile"
          >
            <TbBrandLinkedin size={20} />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-icon"
            aria-label="GitHub profile"
          >
            <TbBrandGithub size={20} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="footer__social-icon"
            aria-label="Send email"
          >
            <TbMail size={20} />
          </a>
        </div>

      </div>

      {/* ── Copyright strip ── */}
      <div className="footer__copy">
        <p>© {year} {personal.fullName}. Built with React + Framer Motion.</p>
      </div>
    </footer>
  );
}

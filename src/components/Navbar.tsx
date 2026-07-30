import "./../styles/globals.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-circle">AC</div>

        <div>
          <h3>Ahmed Cherqui Amine</h3>
          <span>Business Intelligence • Data • AI</span>
        </div>
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#journey">Journey</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        className="download-btn"
        href="/resume.pdf"
        target="_blank"
      >
        Download CV
      </a>
    </nav>
  );
}
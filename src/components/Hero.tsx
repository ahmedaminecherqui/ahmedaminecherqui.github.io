import profile from "../assets/images/profile.png";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="availability">
          ● Available for Internship
        </span>

        <h1>
          Ahmed
          <br />
          Cherqui Amine
        </h1>

        <h2>
          Business Intelligence
          <br />
          Data Engineering
          <br />
          Artificial Intelligence
        </h2>

        <p>
          Building intelligent systems that transform raw data into
          actionable business decisions through Business Intelligence,
          Data Engineering and Artificial Intelligence.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="secondary-btn"
            target="_blank"
          >
            Download CV
          </a>

        </div>

        <div className="hero-info">

          <div className="info-card">
            <span>📍</span>
            <div>
              <strong>Based in</strong>
              <p>Lyon, France</p>
            </div>
          </div>

          <div className="info-card">
            <span>🎓</span>
            <div>
              <strong>Master MIAGE</strong>
              <p>Business Intelligence</p>
            </div>
          </div>

          <div className="info-card">
            <span>🏛</span>
            <div>
              <strong>Université Claude Bernard</strong>
              <p>Lyon 1</p>
            </div>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="profile-frame">
          <img src={profile} alt="Ahmed Cherqui" />
        </div>

      </div>

    </section>
  );
}
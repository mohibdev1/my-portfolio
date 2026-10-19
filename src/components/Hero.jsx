import "./Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hello">Hello, It's Me</p>

        <h1>Mohib Ullah</h1>

        <h2>
          I'm a <span>Frontend Developer</span>
        </h2>

        <p className="hero-description">
          I’m a Frontend Developer who turns ideas into modern, responsive, and interactive digital experiences. Passionate about clean design, smooth user experiences, and building things that make an impact.

        </p>

        <div className="social-links">
          <a
            href="https://github.com/mohibdev1"
            target="_blank"
            rel="noreferrer"
          >
          <FaGithub />

          </a>

          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
          >
             <FaLinkedin />
          </a>
        </div>
    <div className="cv-buttons">
  <a
    href="/Resume.pdf"
    className="cv-btn"
    target="_blank"
    rel="noreferrer"
  >
    View CV
  </a>

  <a
    href="/Resume.pdf"
    className="cv-btn"
    download
  >
    Download CV
  </a>
</div>
      </div>

      <div className="hero-image">
        <div className="code-circle">
          &lt;/&gt;
        </div>
      </div>
    </section>
  );
}

export default Hero;

import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <div className="about-circle">
            <span>&lt;/&gt;</span>
          </div>

         
        </div>

        <div className="about-content">
          <p className="about-subtitle">ABOUT ME</p>

          <h2>
            I'm <span>Mohib Ullah</span>
          </h2>

          <h3>Frontend Developer</h3>

          <p className="about-text">
            I'm a passionate Computer Science student and aspiring
            Frontend Developer. I enjoy creating modern, responsive
            and user-friendly websites with clean and professional
            designs.
          </p>

          <p className="about-text">
            I have experience working with HTML, CSS, JavaScript and
            React JS. I'm continuously learning new technologies and
            improving my skills by building real-world projects.
          </p>

          <div className="about-stats">
  <div className="stat">
    <h4>01+</h4>
    <p>Years Learning</p>
  </div>

  <div className="stat">
    <h4>10+</h4>
    <p>Projects</p>
  </div>

  <div className="stat">
    <h4>5+</h4>
    <p>Technologies</p>
  </div>

  <div className="stat">
    <h4>100%</h4>
    <p>Passion</p>
  </div>
</div>

          <a href="#contact" className="about-btn">
            Let's Talk
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;
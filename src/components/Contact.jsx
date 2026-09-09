import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact-content">
          <p className="section-title">CONTACT ME</p>

          <h2>Let's Work Together</h2>

          <p className="contact-text">
            Have a project or an idea in mind? Feel free to get in touch
            with me. I'm always interested in learning and working on
            new projects.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>muhammadmohibulllah@gmail.com</p>
            </div>
          <div className="contact-item">
  <h3>GitHub</h3>
  <a
    href="https://github.com/mohibdev1"
    target="_blank"
    rel="noreferrer"
  >
    github.com/mohibdev1
  </a>
</div>

            <div className="contact-item">
              <h3>Location</h3>
              <p>Pakistan</p>
            </div>
          </div>
      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadmohibulllah@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="contact-btn"
>
  Get In Touch
</a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Mohib Ullah. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Contact;
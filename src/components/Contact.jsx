import "./Contact.css";
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <p className="section-label">GET IN TOUCH</p>

        <h2>Let's Work Together</h2>

        <p className="contact-description">
          I'm open to opportunities in Java, Spring Boot,
          backend development, and full-stack development.
          Feel free to reach out!
        </p>

        <div className="contact-card">
          <h3>Contact Information</h3>

          <div className="contact-item">
            <div className="contact-icon">
              <span>✉</span>
            </div>
            <div>
              <h4>Email</h4>
              <a href="mailto:shindesurekha1101@example.com">
                shindesurekha1101@example.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <span>📍</span>
            </div>
            <div>
              <h4>Location</h4>
              <p>Brno, Czech Republic</p>
            </div>
          </div>

          <div className="contact-divider"></div>

          <h3>Connect With Me</h3>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/surekhas1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn profile"
            >
              <span className="social-logo">in</span>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/surekhas1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub profile"
            >
              <span className="social-logo">⌘</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <p className="section-label">MY WORK</p>

        <h2>Projects</h2>

        <p className="projects-intro">
          A selection of my professional experience and projects showcasing my
          backend development skills.
        </p>

        {/* Professional Journey */}
        <div className="journey-card">
          <div className="journey-content">
            <p className="journey-label">PROFESSIONAL JOURNEY</p>

            <h3>Java Software Engineer</h3>

            <p className="journey-company">KPIT Technologies Pvt. Ltd.</p>

            <p className="journey-experience">
              5+ Years of Professional Experience
            </p>

            <p className="journey-description">
              Building backend applications, REST APIs, and microservices with a
              focus on clean, scalable, and reliable software.
            </p>

            <div className="journey-skills">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST APIs</span>
              <span>Microservices</span>
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>React</span>
              <span>JavaScript</span>
            </div>

            <a href="#experience" className="journey-button">
              View Journey <span>→</span>
            </a>
          </div>

          <div className="journey-icon">
            <img src="/images/java_icon.jpg" alt="Java logo" />
          </div>
        </div>

        {/* Featured Projects */}
        <div className="featured-projects">
          <p className="section-label">FEATURED PROJECTS</p>

          <h2>Projects I've Built</h2>

          <p className="projects-intro">
            Real-world solutions and backend applications.
          </p>

          <div className="project-grid">
            {/* NK & Sons Industry */}
            <article className="project-card">
              <div className="project-card-visual nk-visual">
                <img
                  src="/images/nksons_preview.jpg"
                  alt="NK & Sons Industry homepage preview"
                />
              </div>

              <div className="project-card-content">
                <span className="project-category">CLIENT PROJECT</span>

                <h3>NK & Sons Industry</h3>

                <p>
                  An industrial business website featuring product information,
                  an admin panel, customer enquiries, and email notifications.
                </p>

                <div className="project-tech">
                  <span>Java 21</span>
                  <span>Spring Boot</span>
                  <span>MySQL</span>
                  <span>JWT</span>
                </div>

                <a
                  href="https://nkandsonsindustry.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project <span>↗</span>
                </a>
              </div>
            </article>

            {/* URL Shortener */}
            <article className="project-card">
              <div className="project-card-visual url-visual">
                <div className="url-mockup">
                  <div className="url-mockup-header">
                    <span className="url-mockup-dot"></span>
                    <span>URL Shortener</span>
                  </div>

                  <div className="url-mockup-body">
                    <p className="url-mockup-title">Shorten Your Link</p>

                    <div className="url-input-mock">
                      <span>https://example.com/your-long-url...</span>
                      <span className="url-shorten-button">Shorten</span>
                    </div>

                    <p className="url-result-label">Your shortened URL</p>

                    <div className="url-result-mock">
                      <span>short.ly/aB12xY</span>
                      <span className="url-copy-icon">▢</span>
                    </div>

                    <p className="url-mockup-note">
                      Short links · Expiration support
                    </p>
                  </div>
                </div>
              </div>

              <div className="project-card-content">
                <span className="project-category backend-category">
                  BACKEND PROJECT
                </span>

                <h3>URL Shortener</h3>

                <p>
                  A URL shortening service that generates short links, supports
                  expiration, and uses Redis caching with MySQL persistence.
                </p>

                <div className="project-tech">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>Redis</span>
                  <span>MySQL</span>
                </div>

                <a
                  href="https://github.com/surekhas1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub profile"
                >
                  GitHub link <span>↗</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

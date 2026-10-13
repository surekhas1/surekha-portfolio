import "./Resume.css";

function Resume() {
  const resumePath = "/resume/Surekha_Shinde_Java_FullStack_Developer_CV.pdf";

  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <p className="section-label">MY RESUME</p>

        <h2>Let's Explore My Experience</h2>

        <p className="resume-description">
          Interested in my professional background, technical skills, and
          project experience? View or download my resume to learn more.
        </p>

        <div className="resume-actions">
          <a
            href="/resume/Surekha_Shinde_Java_FullStack_Developer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button resume-view-button"
          >
            <span>View Resume</span>
            <span>↗</span>
          </a>

          <a
            href={resumePath}
            download="Surekha_Shinde_Java_FullStack_Developer_CV.pdf"
            className="resume-button resume-download-button"
          >
            <span>Download Resume</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;

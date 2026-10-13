import "./Experience.css";
import { useEffect, useRef, useState } from "react";

const responsibilities = [
  "Developed scalable enterprise applications using Java, Spring Boot, and microservices architecture for an automotive Engineering Diagnostics Platform supporting predictive maintenance and real-time fault analysis.",
  "Built RESTful APIs to integrate external automotive systems and diagnostic tools, enabling reliable data exchange and communication between distributed components.",
  "Contributed to responsive frontend interfaces using React, JavaScript, HTML, and CSS, integrating backend services to help engineers access and visualize diagnostic insights.",
  "Used Maven for build and dependency management and Git for version control, branching, merges, and pull request workflows.",
  "Improved application reliability by writing unit tests with JUnit and mocking dependencies with Mockito to support better test coverage and faster debugging."
];

const technologies = [
  "Java",
  "Spring Boot",
  "Microservices",
  "REST APIs",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Maven",
  "Git",
  "JUnit",
  "Mockito"
];

function Experience() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    const section = sectionRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className={`experience ${isVisible ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="experience-container">
        <p className="section-label">MY CAREER</p>

        <h2>Professional Experience</h2>

        <p className="experience-intro">
          My professional journey building enterprise applications
          and reliable software solutions.
        </p>

        <div className="experience-timeline">
          <div className="experience-marker">
            <span />
          </div>

          <article className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Software Developer</h3>
                <p className="experience-company">
                  KPIT Technologies Pvt. Ltd.
                </p>
              </div>

              <span className="experience-period">
                Nov 2020 – Dec 2025
              </span>
            </div>

            <p className="experience-project">
              Engineering Diagnostics Platform · Automotive
            </p>

            <ul className="experience-responsibilities">
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>

            <div className="experience-technologies">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;
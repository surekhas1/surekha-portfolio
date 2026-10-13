import { useEffect, useRef, useState } from "react";
import "./Education.css";

function Education() {
  const educationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = educationRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={educationRef}
      className={`education ${isVisible ? "is-visible" : ""}`}
    >
      <div className="education-container">
        <p className="section-label">MY EDUCATION</p>

        <h2>Academic Background</h2>

        <p className="education-description">
          My educational foundation in Information Technology
          helped me build the technical knowledge needed for
          my software development career.
        </p>

        <div className="education-card">
          <div className="education-icon">
            <span>🎓</span>
          </div>

          <div className="education-details">
            <p className="education-period">
              July 2017 – November 2020
            </p>

            <h3>
              Bachelor of Engineering in Information Technology
            </h3>

            <h4>Savitribai Phule Pune University</h4>

            <p className="education-location">
              <span>📍</span> Nashik, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
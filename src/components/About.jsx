import { useEffect, useRef, useState } from "react";

function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    const section = aboutRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skillGroups = [
    {
      number: "01",
      title: "Backend Development",
      skills:
        "Java 8 & 21 · Spring Boot · Spring MVC · Spring Data JPA · Hibernate · REST APIs · Microservices",
    },
    {
      number: "02",
      title: "Frontend Development",
      skills: "HTML5 · CSS3 · JavaScript · React · Responsive Design",
    },
    {
      number: "03",
      title: "Database",
      skills: "MySQL · MongoDB · SQL Queries",
    },
    {
      number: "04",
      title: "Tools & Testing",
      skills: "Git · Maven · JUnit · Mockito · SonarQube",
    },
  ];

  return (
    <section
      id="about"
      className={`about ${isVisible ? "is-visible" : ""}`}
      ref={aboutRef}
    >
      <div className="about-container">
        <div className="about-image">
          <img src="/images/Surekha.jpg" alt="Surekha Shinde" />
        </div>

        <div className="about-content">
          <p className="section-label">ABOUT ME</p>

          <h2>Who I Am</h2>

          <p className="about-text">
            I'm Surekha Shinde, a Java Full-Stack Developer with
            experience in building Full-Stack and backend applications, REST APIs,
            and microservices.
          </p>

          <div className="about-skills">
            <h3>My Skill Set</h3>

            <div className="about-skills-grid">
              {skillGroups.map((group, index) => (
                <div
                  className="about-skill-box"
                  key={group.number}
                  style={{ "--skill-index": index }}
                >
                  <span className="skill-number">
                    {group.number}
                  </span>

                  <h4>{group.title}</h4>

                  <p>{group.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
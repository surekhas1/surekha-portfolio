function Hero() {
  return (
    <section id="home" className="hero">
      <div className="sparkles">
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
      </div>

      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>

        <h1>Surekha Shinde</h1>

        <h2>Java Full Stack Developer</h2>

        <p className="hero-description">
          I build scalable backend applications, REST APIs, and microservices
          using Java and Spring Boot.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View My Work</a>
          <a href="#contact" className="your-existing-contact-button-class">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="code-card">
          <div className="code-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code-content">
            <p>
              <span>public class</span> Developer {"{"}
            </p>
            <p>
              &nbsp;&nbsp;<span>String</span> name = <b>"Surekha"</b>;
            </p>
            <p>
              &nbsp;&nbsp;<span>String</span> role = <b>"Java Developer"</b>;
            </p>
            <p>
              &nbsp;&nbsp;<span>String</span> framework = <b>"Spring Boot"</b>;
            </p>
            <p>{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

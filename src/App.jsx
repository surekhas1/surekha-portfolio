import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Resume />
      <Contact />
      <footer className="footer">
        <p>
          © 2026 Surekha Shinde. Crafted with precision and passion.
        </p>
      </footer>
    </>
  );
}

export default App;

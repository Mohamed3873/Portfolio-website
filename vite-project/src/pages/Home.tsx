import Projects from "./Projects";
import Contact from "./Contact";
import "../styles/home.css"; 

function Home() {
  return (
    <div id="home" className="home-container">
      <section className="intro-section">
        <div className="intro-content">
          <h1 className="intro-title">Welcome to my portfolio</h1>
          <p className="intro-text">
            I'm Mohamed, a Computer Engineering student passionate about building digital experiences.
          </p>
          <div className="intro-actions">
            <a href="#projects" className="cta-button primary">
              View My Work
            </a>
            <a href="#contact" className="cta-button secondary">
              Get In Touch
            </a>
          </div>
        </div>
        
      
      </section>
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
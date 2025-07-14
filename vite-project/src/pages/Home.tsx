import Projects from "./Projects";
import Contact from "./Contact";
import "../styles/home.css"; 

function Home() {
  return (
  
    <div id="home" className="home-container">
      <section  className="intro-section">
        <h1 className="intro-title">Welcome to my portfolio</h1>
        <p className="intro-text">
          I’m Mohamed, a Computer Engineering student passionate about building digital experiences.
        </p>
      </section>

      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
// This Home component serves as the main landing page for the portfolio,
// introducing the user and linking to the Projects and Contact sections.
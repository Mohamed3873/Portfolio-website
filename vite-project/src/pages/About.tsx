import React from 'react';
import "../styles/about.css";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section"> 
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="about-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">Hello, I'm Mohamed</h3>
            
            <p className="about-paragraph">
             Hi, I'm Mohamed Mahammud — a computer engineering graduate from NTNU Ålesund with a strong interest in software development and problem solving.
             I enjoy building clean, functional applications and have experience working with web technologies like JavaScript, HTML/CSS, and REST APIs. 
            
            </p>
            
            <p className="about-paragraph">
              I specialize in full-stack development, with expertise in modern frameworks 
              and technologies. I enjoy transforming complex ideas into elegant, 
              user-friendly solutions that make a difference.
            </p>
            
            <div className="skills-container">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Python</span>
              
            </div>
          </div>
          
          <div className="about-image-container">
            <div className="profile-placeholder">
              <div className="profile-icon-wrapper">
                <div className="profile-icon">
                    <img
                       src="/src/assets/profile.jpg" 
                       alt="Profile"
                      className="profile-image"
                    />
                </div>
                <p className="profile-text">Profile Image</p>
              </div>
            </div>
            
            <div className="decorative-circle-1"></div>
            <div className="decorative-circle-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
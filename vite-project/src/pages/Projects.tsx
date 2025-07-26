import React from "react";
import "../styles/projects.css";

// Enhanced project data structure
const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with React and TypeScript.",
    technologies: ["React", "TypeScript", "CSS3", "HTML5"],
    githubLink: "https://github.com/Mohamed3873/Portfolio-website",
    image: "/portfolio.png", 
    status: "Completed",
    featured: true
},
{
  title: "Learniverse",
  description: "A university course project: Learniverse is a marketplace platform where users can browse and 'purchase' academic courses. Built using Spring Boot and React.",
  technologies: ["HTML", "Spring Boot", "MySQL", "Java", "JavaScript"],
  githubLink: "https://github.com/Malmis1/learniverse-project-group12",
  image: "/learniverse.png", 
  status: "Completed",
  featured: true
},

{
  title: "Robot World Simulation and Digital Twin",
  description: "A Bachelor's thesis project: An extension for Isaac Sim creating a digital twin of Solwr's Grab robot.",
  technologies: ["Python", "Isaac Sim", "NVIDIA Omniverse", "USD", "Computer Vision", "Robotics"],
  githubLink: "https://github.com/09ejacob/Robot-World-simulation-and-digital-twin",
  image: "/robot.png", 
  status: "Completed",
  featured: true
},
];

const Projects: React.FC = () => (
  <section id="projects" className="projects-section">
    <div className="container">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">A showcase of my recent work and technical skills</p>
      
      <div className="projects-grid">
        {projects.map(({ title, description, technologies, githubLink, image, status, featured }) => (
          <div key={title} className={`project-card ${featured ? 'featured' : ''}`}>
            <div className="project-image">
              <img src={image} alt={`${title} preview`} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <span>Code</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{title}</h3>
                <span className={`project-status ${status.toLowerCase().replace(' ', '-')}`}>
                  {status}
                </span>
              </div>
              
              <p className="project-description">{description}</p>
              
              <div className="project-tech">
                {technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  </section>
);

export default Projects;
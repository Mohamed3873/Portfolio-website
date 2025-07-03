import React from "react";
import "../styles/projects.css"; // Assuming you have a CSS file for styling

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with React and TypeScript.",
    link: "https://github.com/yourusername/portfolio-website",
  },
  {
    title: "E-commerce Store",
    description: "A full-stack e-commerce application with shopping cart and payment integration.",
    link: "https://github.com/yourusername/ecommerce-store",
  },
  {
    title: "Blog Platform",
    description: "A markdown-based blog platform with user authentication and comments.",
    link: "https://github.com/yourusername/blog-platform",
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="projects-section">
    <h2 className="section-title">Projects</h2>
    <ul className="projects-list">
      {projects.map(({ title, description, link }) => (
        <li key={title} className="project-item">
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            {title}
          </a>
          <p className="project-description">{description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;

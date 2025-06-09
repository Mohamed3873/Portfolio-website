import React from 'react';

const projects = [
    {
        title: 'Personal Portfolio Website',
        description: 'A modern, responsive portfolio website built with React and TypeScript.',
        link: 'https://github.com/yourusername/portfolio-website',
    },
    {
        title: 'E-commerce Store',
        description: 'A full-stack e-commerce application with shopping cart and payment integration.',
        link: 'https://github.com/yourusername/ecommerce-store',
    },
    {
        title: 'Blog Platform',
        description: 'A markdown-based blog platform with user authentication and comments.',
        link: 'https://github.com/yourusername/blog-platform',
    },
];

const Projects: React.FC = () => (
    <section>
        <h1>Projects</h1>
        <ul>
            {projects.map((p) => (
            <li key={p.title}>
                <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title}</a>
            </li>
            ))}
        </ul>
        </section>
    );

    export default Projects;

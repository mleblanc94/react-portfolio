import React from 'react';
import Project from '../components/Project'; // Update the path accordingly

export default function PortfolioPage() {
  // Sample data for projects
  const projects = [
    { title: 'Book Review', technologies: 'Handlebars, Node.js, MySql, Express.js' },
    { title: 'Quality Restaurant Finder', technologies: 'HTML, CSS, Javascript, Rest APIs' },
    { title: 'Wather Finder', technologies: 'HTML, CSS, Javascript, Rest APIs' },
    { title: 'Progressive Web Application Text Editor', technologies: 'Lighthouse, Webpack, IndexDB API' },
    { title: 'Javascript Quiz', technologies: 'HTML, CSS, Javascript' },
  ];

  return (
    <div className="pa4 pv5 mt0 bg-light-green">
      <div className="project-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            technologies={project.technologies}
            linkToProject={project.linkToProject}
          />
        ))}
      </div>
    </div>
  );
}
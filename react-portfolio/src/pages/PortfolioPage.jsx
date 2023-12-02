import React from 'react';
import Project from '../components/Project'; // Update the path accordingly

export default function PortfolioPage() {
  // Sample data for projects
  const projects = [
    { title: 'Book Review', technologies: 'Handlebars, Node.js, MySql, Express.js', linkToProject: 'https://book-reviewer-unh-13a415d3c295.herokuapp.com/', githubRepo:'https://github.com/mleblanc94/book-reviewer' },
    { title: 'Quality Restaurant Finder', technologies: 'HTML, CSS, Javascript, Rest APIs', linkToProject: 'https://mleblanc94.github.io/quality-restaurant-finder/', githubRepo:'https://github.com/mleblanc94/quality-restaurant-finder'},
    { title: 'Weather Finder', technologies: 'HTML, CSS, Javascript, Rest APIs', linkToProject: 'https://mleblanc94.github.io/weather-dashboard/', githubRepo: 'https://github.com/mleblanc94/weather-dashboard'},
    { title: 'Progressive Web Application Text Editor', technologies: 'Lighthouse, Webpack, IndexDB API', linkToProject: 'https://text-editor-pwa-l6dx.onrender.com/', githubRepo: 'https://github.com/mleblanc94/text-editor-pwa'},
    { title: 'Javascript Quiz', technologies: 'HTML, CSS, Javascript', linkToProject: 'https://mleblanc94.github.io/javascript-quiz/', githubRepo: 'https://github.com/mleblanc94/javascript-quiz'},
    { title: 'Patriots/Mario Game', technologies: 'Kaboom.js', linkToProject: 'https://mleblanc94.github.io/My-Patriots-Game/', githubRepo:'https://github.com/mleblanc94/My-Patriots-Game'},
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
            githubRepo={project.githubRepo}
          />
        ))}
      </div>
    </div>
  );
}
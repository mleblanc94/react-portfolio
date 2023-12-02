import React from 'react';

const Project = ({ title, technologies, linkToProject }) => {
  return (
    <a href={linkToProject} target="_blank" rel="noopener noreferror">
    <div className="project-card">
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-tech">{technologies}</p>
      </div>
    </div>
    </a>
  );
};

export default Project;

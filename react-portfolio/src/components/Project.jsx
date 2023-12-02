import React from 'react';

const Project = ({ title, technologies, linkToProject }) => {
  return (
    <a href={linkToProject} target="_blank" rel="noopener noreferror">
    <div className="bg-white br3 pa3 ma3 shadow-5 w-30">
      <div className="f3 mb2">
        <h3 className="f5 gray">{title}</h3>
        <p className="project-tech">{technologies}</p>
      </div>
    </div>
    </a>
  );
};

export default Project;

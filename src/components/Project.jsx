// import React, { useState } from 'react';
// import './Project.css'; // Import your CSS file (replace 'Project.css' with your actual CSS file name and path)
// import githubLogo from '../assets/githubLogo.png'; // Import your GitHub logo image (update the path accordingly)

// const Project = ({ title, technologies, linkToProject, githubRepo, screenshot }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="project-card" style={{ flex: '0 0 48%', marginBottom: '1rem' }}>
//       <a
//         href={linkToProject}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="no-underline"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         style={{ display: 'block' }}
//       >
//         <div className="bg-white br3 pa3 ma3 shadow-5 relative" style={{ height: '250px' }}>
//           <img src={screenshot} alt={title} className="w-100 h-100 mb2" />
//           {isHovered && (
//             <div className="absolute top-0 left-0 w-100 h-100 flex flex-column items-center justify-center bg-black-70">
//               <h3 className="f5 gray tc">{title}</h3>
//               <p className="tc">{technologies}</p>
//               {githubRepo && (
//                 <a href={githubRepo} target="_blank" rel="noopener noreferrer">
//                   <img src={githubLogo} alt="GitHub" className="w3 h3 mt3" />
//                 </a>
//               )}
//             </div>
//           )}
//         </div>
//       </a>
//     </div>
//   );
// };

// export default Project;

import React, { useState } from 'react';
import './Project.css'; // Import your CSS file (replace 'Project.css' with your actual CSS file name and path)
import githubLogo from '../assets/githubLogo.png'; // Import your GitHub logo image (update the path accordingly)

const Project = ({ title, technologies, linkToProject, githubRepo, screenshot }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`project-card ${isHovered ? 'hovered' : ''}`} style={{ flex: '0 0 48%', marginBottom: '1rem' }}>
      <a
        href={linkToProject}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ display: 'block' }}
      >
        <div className="bg-white br3 pa3 ma3 shadow-5 relative" style={{ height: '250px' }}>
          <img src={screenshot} alt={title} className="w-100 h-100 mb2" />
          <div className="hover-content absolute top-0 left-0 w-100 h-100 flex flex-column items-center justify-center bg-black-70">
            <h3 className="f5 gray tc">{title}</h3>
            <p className="tc">{technologies}</p>
            {githubRepo && (
              <a href={githubRepo} target="_blank" rel="noopener noreferrer" className="github-link">
                <img src={githubLogo} alt="GitHub" className="w3 h3 mt3" />
              </a>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;




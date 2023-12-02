// import { Link } from 'react-router-dom';

// const Navigation = () => {
//   return (
//     <nav>
//     <ul className="flex justify-around list  ma0 sans-serif f3 lh-copy bg-navy pv5">
//         <li><Link to="/about" className="near-white pr3">Michael LeBlanc</Link></li>
//         <li><Link to="/about" className="near-white">About</Link></li>
//         <li><Link to="/contact" className="near-white">Contact</Link></li>
//         <li><Link to="/portfolio" className="near-white">Portfolio</Link></li>
//         <li><Link to="/resume" className="near-white">Resume</Link></li>
//         </ul>
//         </nav>
//   );
// };

// export default Navigation;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  // Function to check if the current path matches the given link
  const isCurrentPage = (link) => {
    return location.pathname === link;
  };

  return (
    <nav>
      <ul className="flex justify-around list ma0 sans-serif f3 lh-copy bg-navy pv5">
        <li>
          <Link
            to="/about"
            className={`near-white ${isCurrentPage('/about') ? 'fw8' : ''}`}
          >
            Michael LeBlanc
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`near-white ${isCurrentPage('/about') ? 'fw8' : ''}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`near-white ${isCurrentPage('/contact') ? 'fw8' : ''}`}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className={`near-white ${isCurrentPage('/portfolio') ? 'fw8' : ''}`}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={`near-white ${isCurrentPage('/resume') ? 'fw8' : ''}`}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
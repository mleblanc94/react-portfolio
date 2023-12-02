// Bringing in the required import from 'react-router-dom'
// import { Link } from 'react-router-dom';
// import Header from './Header';

// export default function Nav() {
//   // The Navbar UI component will render each of the Link elements in the links prop
//   return (
//     <Header
//       links={[
//         <Link key={1} className="nav-link text-light" to="/about">
//           Home
//         </Link>,
//         <Link key={2} className="nav-link text-light" to="/contact">
//           About Us
//         </Link>,
//         <Link key={3} className="nav-link text-light" to="/portfolio">
//         Portfolio
//       </Link>,
//       <Link key={4} className="nav-link text-light" to="/resume">
//       Portfolio
//     </Link>,
//       ]}
//     />
//   );
// }

// import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
    <ul className="flex justify-around list pl0 ma0 sans-serif f4 lh-copy bg-navy">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        </ul>
        </nav>
  );
};

export default Navigation;

// Bringing in the required import from 'react-router-dom'
// import Header from './Header';

// export default function Nav() {
//   // The Navbar UI component will render each of the Link elements in the links prop
//   return (
//     <Header
//   links={[
//     {className: "nav-link text-light", to: "/about", label: "Home"},
//     {className: "nav-link text-light", to: "/contact", label: "About Us"},
//     {className: "nav-link text-light", to: "/portfolio", label: "Portfolio"},
//     {className: "nav-link text-light", to: "/resume", label: "Resume"}
//   ]}
// />
//   );
// }
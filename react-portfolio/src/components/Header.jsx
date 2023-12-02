// export default function Header({ links }) {
//   return (
//     <nav className="navbar navbar-expand-lg bg-secondary">
//       <div className="container-fluid">
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           {links.map((link, index) => (
//           <li key={index}>{link}</li>
//         ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <Navigation />
    </header>
  );
};

export default Header;
// import { Link } from 'react-router-dom';

// export default function Nav({ links }) {
//   return (
//     <nav className="navbar navbar-expand-lg bg-secondary">
//       <div className="container-fluid">
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             {links.map((link, index) => (
//               <li key={index}>
//                 <Link className={link.className} to={link.to}>
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
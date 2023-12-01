// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
// function Navigation() {
//     return (
//       <h1>THIS IS A TEST TO SEE WHERE THIS APPEARS ON THE PAGE</h1>
//     );
//   }
  
//   export default Navigation;

// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Navigation() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Header
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          About Us
        </Link>,
      ]}
    />
  );
}
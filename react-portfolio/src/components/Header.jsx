import 'tachyons';

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Header() {
    return (
      <ul className="flex list pl0">
          <li className="ma5 p8">Michael LeBlanc</li>
          <li className="ma5">About Me</li>
          <li className="ma5">Portfolio</li>
          <li className="ma5">Contact</li>
          <li className="ma5">Resume</li>
      </ul>
    );
  }
  
  export default Header;
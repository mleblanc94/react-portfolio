// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Header() {
    return (
      <ul className="header-ul">
          <li className="list-item">Michael LeBlanc</li>
          <li className="list-item">About Me</li>
          <li className="list-item">Portfolio</li>
          <li className="list-item">Contact</li>
          <li className="list-item">Resume</li>
      </ul>
    );
  }
  
  export default Header;
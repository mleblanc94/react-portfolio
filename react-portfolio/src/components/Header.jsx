import 'tachyons';

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Header() {
    return (
      <ul className="flex justify-around list pl0 ma0 sans-serif f4 lh-copy bg-navy">
          <li className="ma5 f3 lh-copy"><a href="" className="near-white">Michael LeBlanc</a></li>
          <li className="ma5"><a href="" className="near-white">About Me</a></li>
          <li className="ma5"><a href="" className="near-white">Portfolio</a></li>
          <li className="ma5"><a href="" className="near-white">Contact</a></li>
          <li className="ma5"><a href="" className="near-white">Resume</a></li>
      </ul>
    );
  }
  
  export default Header;
import 'tachyons';
import githubLogo from '../assets/githubLogo.png';
import linkedinLogo from '../assets/linkedinLogo.png';

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function About() {
    return (
        <div className="flex center bg-light-green justify-center">
            <a href=""><img src={githubLogo} alt="" className="h3 w3 bg-white ma2"></img></a>
            <a href=""><img src={linkedinLogo} alt="" className="h3 w3 bg-white ma2"></img></a>
</div>
    );
  }
  
  export default About;
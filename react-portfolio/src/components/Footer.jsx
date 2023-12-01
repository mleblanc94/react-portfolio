import 'tachyons';
import githubLogo from '../assets/githubLogo.png';
import linkedinLogo from '../assets/linkedinLogo.png';

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function About() {
    return (
        <div className="flex center bg-light-green justify-center">
            <a href="https://github.com/mleblanc94"><img src={githubLogo} alt="Github Logo" className="h3 w3 bg-white ma2"></img></a>
            <a href="https://www.linkedin.com/in/michael-leblanc-a868869a/"><img src={linkedinLogo} alt="LinkedIn Logo" className="h3 w3 bg-white ma2"></img></a>
</div>
    );
  }
  
  export default About;
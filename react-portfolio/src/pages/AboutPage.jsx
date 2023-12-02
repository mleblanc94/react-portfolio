import MyPic from '../assets/pictureofself.jpg';

// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
    return (
        <div className="pa4 pv5 mt0 bg-light-green">
        <h2 className="sans-serif ma0">About Me</h2>
        <img className=" br-100 h3 w3 dib" src={MyPic} alt="My Picture"></img>
        <p className="black b">My name is Michael LeBlanc and I am a developer from the Boston Area. I am very
          excited to look for new opportunities in full stack web development. I have listed out some of my previous projects below in order to showcase my skillset
          in skills such as HTML, CSS, Javascript, Git, Node.js, React, SQL databases, and PHP.
          </p>
  
          <p className="black b">Some of my hobbies outside of coding include watching sports, going with friends, playing golf, and fitness. Outside of coding for work, I also love coding
              as a hobby. I love creating my own websites and small games using what I have learned!
        </p>
        </div>
    );
  }
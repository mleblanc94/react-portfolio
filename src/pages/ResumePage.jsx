import 'tachyons';
import Resume from '../assets/Resume.pdf';

export default function ResumePage() {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = Resume; // Update the path to your Resume.pdf file
        link.download = 'Resume.pdf'; // Specify the downloaded file's name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      const linkStyles = {
        cursor: 'pointer',
      };

    return (
        <div className="pa4 pv5 mt0 bg-light-green f4 lh-copy 5">
        <h2>Resume</h2>
        <h6><a rel="noreferrer" style={linkStyles} cursor="pointer" onClick={downloadResume}>Download my resume</a></h6>
        <h3>Front-end Proficiencies</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul>
            <li>APIs</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL, Sequalize</li>
            <li>MongoDB</li>
            <li>REST</li>
            <li>GraphQL</li>
        </ul>
        </div>
    );
  }
import React from 'react';
import '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/main.css';

import Resume from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/files/temp_resume.pdf';

import Button from 'react-bootstrap/Button';

import { FaAngleDown, FaLinkedin, FaGithub} from "react-icons/fa";
import { IoMdMail, IoIosArrowUp } from "react-icons/io";
import { ImLink } from 'react-icons/im';

class Footer extends React.Component {
    render() {
      return (
          <>
            <section id="footer" bg="dark">
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><IoIosArrowUp size={40}/></a></div>
                <a className="socials" href="https://www.linkedin.com/in/jjessica-li/" target="_blank"><FaLinkedin size={40}/></a>
                <a className="socials" href="https://www.github.com/jesstsomethoughts" target="_blank"><FaGithub size={40}/></a>
                <a className="socials" href="mailto: jjessicali@g.ucla.edu"><IoMdMail size={40} /></a>
                <a href={Resume} target="_blank"><Button variant="outline-primary" className="socials" id="resume_button">Resume <ImLink/></Button></a>
                <p className="bottom-text"> Made with React.js, React Bootstrap, and love by Jessica Li</p>
            </section>

          </>
      );
    }
}

export default Footer;
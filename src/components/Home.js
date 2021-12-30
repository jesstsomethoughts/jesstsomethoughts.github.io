import React from 'react';
import '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/main.css';

import Resume from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/files/RESUME_dec_2021.pdf';

import Button from 'react-bootstrap/Button';

import { FaLinkedin, FaGithub} from "react-icons/fa";
import { IoMdMail, IoIosArrowDown } from "react-icons/io";
import { ImLink } from 'react-icons/im';

class Home extends React.Component {
  render() {
    return (
        <>
        <section id="home"></section>
        <div className="home">
          <div className="banner">
            <h1>Hi, I'm Jessica!</h1>
            <h3>Simply, a human being driven by <span className="emphasis">empathy</span> and <span className="emphasis">social good</span>. Interested in the intersections of data, healthcare, education, and technology.</h3>
            <a className="socials" href="https://www.linkedin.com/in/jjessica-li/" target="_blank"><FaLinkedin size={40}/></a>
            <a className="socials" href="https://www.github.com/jesstsomethoughts" target="_blank"><FaGithub size={40}/></a>
            <a className="socials" href="mailto: jjessicali@g.ucla.edu"><IoMdMail size={40} /></a>
            <a href={Resume} target="_blank"><Button variant="outline-primary" className="socials" id="resume_button">Resume <ImLink/></Button></a>
          </div>
          <div className="scrolldown">
            <a className="smoothscroll" href="#projects"><IoIosArrowDown/></a>
          </div>
        </div>
        </>
  );
}
}

export default Home;
import React from 'react';
import '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/main.css';

import Resume from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/files/s2024_Resume.pdf';

import Button from 'react-bootstrap/Button';

import { FaLinkedin, FaGithub} from "react-icons/fa";
import { IoMdMail, IoIosArrowDown } from "react-icons/io";
import { ImLink } from 'react-icons/im';

// import all background images from folder
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../backgrounds', false, /\.(png|jpe?g|svg)$/));

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImages: images, 
      currentIndex: 5
    };
  }

  changeBackgroundImage = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1)% prevState.backgroundImages.length
    }));
  }

  preloadImages() {
    this.state.backgroundImages.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  }

  componentDidMount() {
    this.preloadImages();
    this.intervalId = setInterval(this.changeBackgroundImage, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { backgroundImages, currentIndex } = this.state;

    return (
        <>
        <section id="home"></section>
        <div 
          className="home"
          style={{ background: `#161415 url(${backgroundImages[currentIndex]}) no-repeat top center` }}
          > 
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
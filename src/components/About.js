import React from 'react';
import '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/main.css';

import Headshot from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/images/headshot.jpg';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { IoSchool, IoMusicalNotes } from 'react-icons/io5';
import { FaHiking, FaBookReader } from 'react-icons/fa';

class About extends React.Component {
    render() {
      return (
          <>
            <section id="about">
                <Container className="about-section">
                  <Row className="about-row">
                  <Col sm={2} md={4} lg={3}>
                    <img src={Headshot} className="me-img"></img>
                  </Col>
                  
                  <Col sm={7} md={7} lg={8} className="description">
                    <h1>About Me</h1>
                    <h2> <IoSchool /> &nbsp; Computational and Systems Biology Major and Digital Humanities Minor at UCLA
                    </h2>
                    <h2> <FaHiking /> &nbsp; Hiking: landscape picture above is from Mt. Tamalpais, and I'm currently hiking the Six Pack of Peaks in NorCal and SoCal!
                    </h2>
                    <h2><FaBookReader /> &nbsp; Currently reading: "Braiding Sweetgrass" by Robin Wall Kimmerer
                    </h2>
                    <h2><IoMusicalNotes /> &nbsp; Music: Piano, guitar, ukulele - currently learning Jazz
                    </h2>
                  </Col>
                  </Row>
                </Container>
                <h2 className="last-row">Feel free to contact me! I'd love to connect with you at jjessicali@g.ucla.edu or social media linked below :)</h2>
            </section>

          </>
      );
    }
}

export default About;
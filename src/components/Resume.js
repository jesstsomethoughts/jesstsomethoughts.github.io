import React from 'react';
import '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/main.css';

// react components
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { ImLink } from 'react-icons/im';
 

class Resume extends React.Component {
  render() {
    return (
        <>
        <Container id="experiences">
        <Row className="row education">
            <Col className="three columns header-col">
                <h1><span>Education</span></h1>
            </Col>
            
            <Col className="nine columns main-col" sm={9}>
                <div className="row item">
                    <div className="twelve columns">
                        <h3>University of California, Los Angeles</h3>
                        <p className="info">Bachelor of Science in Computational and Systems Biology <span>&bull;</span><em className="date">Expected March 2023</em></p>
                        <p>GPA: 4.0, Digital Humanities Minor</p>
                    </div>
                </div>
            </Col>
        </Row>

        <Row className="row work">
            <Col className="three columns header-col">
                <h1><span>Work</span></h1>
            </Col>
        </Row>
        
        <div className="resume_button">
            <Button variant="outline-primary" id="font">View Resume Here <ImLink/></Button>
        </div>
        </Container>
        </>
    );
    }
}

export default Resume;
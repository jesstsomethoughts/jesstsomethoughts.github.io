import React from 'react';
import '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/main.css';
import MetanoiaImg from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/images/metanoia.png';
import EscapeImg from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/images/escaperoom.png';
import DhImg from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/images/dh.png';
import VaxImg from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/images/vax.jpg';
import PodcastImg from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/images/kovikitalk.jpeg';

// react components
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { ImLink } from 'react-icons/im';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notHover: true,
            // projects: [
            //     {
            //         title: "Metanoia",
            //         img: {CardImage},
            //         description: "Metanoia company website"
            //     },
        
            //     {
            //         title: "Metanoia 2",
            //         img: 'src=".\backgrounds\blackmountain.jpg" alt="metanoia"',
            //         description: "Metanoia company website"
            //     },
        
            //     {
            //         title: "Metanoia 3",
            //         img: 'src=".\backgrounds\blackmountain.jpg" alt="metanoia"',
            //         description: "Metanoia company website"
            //     },
        
            //     {
            //         title: "Metanoia 4",
            //         img: 'src=".\backgrounds\blackmountain.jpg" alt="metanoia"',
            //         description: "Metanoia company website"
            //     }
            //   ]  
            };
        this.changeHover = this.changeHover.bind(this)
    }


    changeHover() {
        this.setState({ notHover: !this.state.notHover })
    }

    render() {
        return (
          <>
            <section id="projects">
                <h1>Projects</h1>
                <h6>(lab-based and backend projects available upon request)</h6>
                <Container className="card_group">
                    <Row xs={1} md={2} lg={4} className="g-4">
                    {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
                    {/* {this.state.projects.map((project) => {
                        return ( */}
                    {/* )})} */}
                        <Col>
                            <Card className="card">
                                <a href="https://github.com/StapleMink/find-my-vax-react" target="_blank">
                                <Card.Img variant="top" src={VaxImg} className="card-img" />
                                <Card.Body>
                                <Card.Title>Find My Vax SC <ImLink/></Card.Title>
                                <Card.Text>React frontend, Python and SQL backend website centralizing COVID-19 vaccine appointments</Card.Text>
                                </Card.Body>
                                </a>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <a href="https://metanoia-books.herokuapp.com/" target="_blank">
                                <Card.Img variant="top" src={MetanoiaImg} />
                                <Card.Body>
                                <Card.Title className="card-title">Metanoia <ImLink/></Card.Title>
                                <Card.Text className="card-title">React-based website for the startup company I co-founded, featuring a virtual library and subscription page</Card.Text>
                                </Card.Body>
                                </a>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <a href="https://capublichealth.humspace.ucla.edu/" target="_blank">
                                <Card.Img variant="top" src={DhImg} />
                                <Card.Body>
                                <Card.Title>Mental Health in CA <ImLink/></Card.Title>
                                <Card.Text>Digital Humanities 101 project analyzing public health dataset via R, Tableau, and other software</Card.Text>
                                </Card.Body>
                                </a>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <a href="https://jesstsomethoughts.github.io/findingbruin/" target="_blank">
                                <Card.Img variant="top" src={EscapeImg} />
                                <Card.Body>
                                <Card.Title>Finding Bruin <ImLink/></Card.Title>
                                <Card.Text>Escape room built with HTML, CSS, and Javascript for UCLA Creative Labs' Bloom Fellowship.</Card.Text>
                                </Card.Body>
                                </a>
                            </Card>
                        </Col>
                    {/* ))} */}
                    </Row>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        <Col>
                            <Card className="card">
                                <a href="https://www.youtube.com/watch?v=AajTGdUy_Y4&ab_channel=PasifikaByDesign" target="_blank">
                                <Card.Img variant="top" src={PodcastImg} />
                                <Card.Body>
                                <Card.Title>Koviki Talk Podcast <ImLink/></Card.Title>
                                <Card.Text>COVID-19 data analysis for NHPI Lab credited in the following podcast.</Card.Text>
                                </Card.Body>
                                </a>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <a href="https://www.youtube.com/watch?v=AajTGdUy_Y4&ab_channel=PasifikaByDesign" target="_blank">
                                <Card.Img variant="top" src={PodcastImg} />
                                <Card.Body>
                                <Card.Title>SIR Model <ImLink/></Card.Title>
                                <Card.Text>Python script that simulates simplified SIR model of disease spread.</Card.Text>
                                </Card.Body>
                                </a>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
          </>
      );
    }
}

export default Projects;


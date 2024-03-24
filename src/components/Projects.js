import React from 'react';
import '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/main.css';
import MetanoiaImg from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/images/metanoia.png';
// import EscapeImg from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/images/escaperoom.png';
// import DhImg from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/images/dh.png';
import VaxImg from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/images/vax.png';
// import PodcastImg from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/images/kovikitalk.jpeg';
import DashboardImg from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/images/nhpi_dashboard.png';
import sfHackImg from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/images/sfHackImg.jpeg';


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
                <h6>(more projects at my <a href="https://github.com/jesstsomethoughts?tab=repositories" target="_blank">Github</a> and upon request)</h6>
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
                                <Card.Text>React frontend connected to Python website scraper and Twitter bot centralizing COVID-19 vaccine appointments in Santa Clara County - garnered 10,000+ site visitors and collabs with Gardner Health Services</Card.Text>
                                </Card.Body>
                                </a>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <a href="https://github.com/jesstsomethoughts/metanoia" target="_blank">
                                <Card.Img variant="top" src={MetanoiaImg} />
                                <Card.Body>
                                <Card.Title className="card-title">Metanoia <ImLink/></Card.Title>
                                <Card.Text className="card-title">React-based prototype for the startup company I co-founded, featuring a virtual library aimed at fostering conversations about difficult topics for children</Card.Text>
                                </Card.Body>
                                </a>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <a href="https://healthpolicy.ucla.edu/our-work/nhpi-data-policy-lab/nhpi-data-policy-lab-data-dashboards" target="_blank">
                                <Card.Img variant="top" src={DashboardImg} />
                                <Card.Body>
                                <Card.Title>NHPI Health Dashboards <ImLink/></Card.Title>
                                <Card.Text>Processed public data using Python and R to visualize on Tableau dashboards on social determinants of health and COVID-19 deaths for the Native Hawaiian and Pacific Islander (NHPI) community</Card.Text>
                                </Card.Body>
                                </a>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <a href="https://github.com/Justinyu1618/accelSF-service-router" target="_blank">
                                <Card.Img variant="top" src={sfHackImg} />
                                <Card.Body>
                                <Card.Title>Service Router Chatbot <ImLink/></Card.Title>
                                <Card.Text>Python and LLM-based chatbot that automates the identification and matching of client needs to appropriate public benefits and services in SF</Card.Text>
                                </Card.Body>
                                </a>
                            </Card>
                        </Col>
                    {/* ))} */}
                    </Row>
                    {/* <Row xs={1} md={2} lg={4} className="g-4">
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
                    </Row> */}
                </Container>
            </section>
          </>
      );
    }
}

export default Projects;


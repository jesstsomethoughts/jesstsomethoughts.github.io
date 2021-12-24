import React from 'react';
import '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/main.css';
import InfStdPaper from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/files/infstd.pdf';
import MentalHealthPaper from '/Users/jessicali/Documents/Github/jesstsomethoughts.github.io/src/files/mentalhealth.pdf';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { ImLink } from 'react-icons/im';

class Pubs extends React.Component {
    render() {
      return (
          <>
            <section id="publications">
                <h1>Publications</h1>
                <Container className="pubs">
                    <Row className="row db">
                        <Col className="three columns header-col">
                            <h2><span>Daily Bruin</span></h2>
                        </Col>
                    
                        <Col className="nine columns main-col" sm={9}>
                            <Row className="entry">
                                <a href="https://dailybruin.com/2021/06/10/in-the-heights-seeks-to-represent-latino-community-inspire-pursuit-of-dreams" target="_blank"><h3>‘In the Heights’ seeks to represent Latino community, inspire pursuit of dreams</h3></a>
                                <p className="info">Interviewed Lin Manuel Miranda, Corey Hawkins, Leslie Grace, Melissa Barrera, and more of the cast for a feature on musical film "In the Heights."</p>
                            </Row>
                            <Row className="entry">
                                <a href="https://dailybruin.com/2020/05/28/caroline-pernick-shares-stories-explores-emotions-through-music" target="_blank"><h3>Caroline Pernick shares stories, explores emotions through music</h3></a>
                                <p className="info">In-depth feature of Caroline Pernick, an artist who performed at UCLA's annual Spring Sing event. Discussed her music for more than an hour, and called her friends and previous collaborators for more than 5 hours to paint a complete picture of her sound.</p>
                            </Row>
                            <Row className="entry">
                                <a href="https://dailybruin.com/2020/03/06/concert-review-echosmith-shines-bright-in-intimate-performance-promoting-unity-through-music" target="_blank"><h3>Concert review: Echosmith shines bright in intimate performance promoting unity through music</h3></a>
                                <p className="info">Interviewed the band Echosmith and attended their Los Angeles concert, then published the review the next day.</p>
                            </Row>
                        </Col>
                        <Row className="entry">
                        <a href="https://dailybruin.com/author/jessica-li" target="_blank"><h1 id="db_link">View more here <ImLink /></h1></a>
                        </Row>
                    </Row>

                    <Row className="row pending">
                        <Col className="three columns header-col">
                            <h2><span>In Progress</span></h2>
                            <p>Open to any feedback!</p>
                        </Col>

                        <Col className="nine columns main-col" sm={9}>
                            <Row className="entry">
                                <a href={InfStdPaper} target="_blank"><h3>Redefining Power Structures Surrounding Healthcare and Data Privacy</h3></a>
                                <p className="info">Manuscript pending publication. Originally written for a graduate seminar on Global Media and Information under Professor Ramesh Srinivasan. Focuses on the increasing shift to digital technologies in medicine and the privacy concerns that arise as a result.</p>
                            </Row>
                            <Row className="entry">
                                <a href={MentalHealthPaper} target="_blank"><h3>Mental Health in College Students Who Are Experiencing Homelessness or Housing Insecurity</h3></a>
                                <p className="info">Manuscript pending publication. Written as a part of UCLA's Depression Grand Challenge to provide a literature review to supplement the upcoming launch of the online cognitive behavioral therapy (CBT) program.</p>
                            </Row>
                            <Row className="entry">
                                <h3>Daily Bruin's The Stack - Professor Reviews</h3>
                                <p className="info">Currently analyzing professor reviews and difference in sentiments based on professor gender for the Stack, Daily Bruin's data and tech blog. Working with 5 others to create interactive visualizations and conduct interviews for the article.</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

          </>
      );
    }
}

export default Pubs;
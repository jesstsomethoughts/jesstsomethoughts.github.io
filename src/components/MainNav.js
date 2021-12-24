import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class MainNav extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
    return (
        <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                {/* <Nav.Link href="#experiences">Experiences</Nav.Link> */}
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#publications">Publications</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}
}

export default MainNav;

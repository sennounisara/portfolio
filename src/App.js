import React from 'react';
import logo from './Image/SS.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import Profile from './Screens/Profile';
import Education from "./Screens/Education";
import Experience from "./Screens/Experience";
import Skills from "./Screens/Skills";
import Project from "./Screens/Project";
import Contact from "./Screens/Contact";
import Demo from "./Screens/Demo";
function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" fixed="top" sticky="top" >
        <Container>
          <Navbar.Brand href="#home"><img alt="sennouni sara" className="image" src={logo} width={60} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="mr-auto"/>
            <Nav className="mr-sm-4">
                <Nav.Link href="#profile">Profile</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
<Profile/>
<Education/>
<Experience/>
<Project/>
<Skills/>
<Contact/>
</div>
);
}

export default App;

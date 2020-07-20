import React from 'react';
import logo from './Image/SS.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar} from "react-bootstrap";
import Profile from './Screens/Profile';
import Education from "./Screens/Education";
import Experience from "./Screens/Experience";
import Skills from "./Screens/Skills";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><img src={logo} width={60}  />SENNOUNI SARA</Navbar.Brand>
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
</Navbar>
<Profile/>
<Education/>
<Experience/>
<Skills/>
</div>
);
}

export default App;

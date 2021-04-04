import React, { useState }  from 'react';
import logoWhite from './Image/SS.png';
import logoDark from './Image/SSWhite.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import Profile from './Screens/Profile';
import Education from "./Screens/Education";
import Experience from "./Screens/Experience";
import Skills from "./Screens/Skills";
import Project from "./Screens/Project";
import Contact from "./Screens/Contact";
import {ThemeProvider} from "styled-components";
import { GlobalStyle } from "./Screens/GlobalStyle";
import { lightTheme, darkTheme } from "./Screens/theme";
import SettingsBrightnessTwoToneIcon from '@material-ui/icons/SettingsBrightnessTwoTone';

function App() {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    const logo = (theme==='light')?logoWhite:logoDark;
  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <>
              <GlobalStyle/>
    <div className="App">
      <Navbar variant={theme}  expand="lg" className='shadow-lg' >
        <Container>
          <Navbar.Brand href="#home">
              <img alt="sennouni sara" className="image" src={logo} width={60} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="mr-auto"/>
            <Nav className="mr-sm-4">
                <Nav.Link href="#profile">Profile</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link><SettingsBrightnessTwoToneIcon onClick={themeToggler}/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    <Profile theme={theme}/>
        <Skills/>

    <Experience theme={theme}/>
    <Project theme={theme}/>
        <Education/>
    <Contact theme={theme}/>
    </div>
          </>
      </ThemeProvider>
);
}

export default App;

import * as React from "react";
import software from '../Image/software_engineer.svg'
import {Button, Col, Container, Row} from "react-bootstrap";
import './style.css'

class Profile extends React.Component {
    render() {
        return (
            <div id="profile" className="pad profile">
                <style>
                    {`
                   .b{
                   margin: 10vw;
                   }
                        `}
                </style>
                <Container>
                    <Row xs={1} md={2}>
                        <Col lg={8}>
                            <h3>I'am SARA SENNOUNI</h3>
                            <p>I am a responsible, and hard-working IT person.
                                Who worked for different projects and that helped me to adapt to changes quickly and made me a mature team worker. I can work well both in a team environment as well as using my initiative.
                                I can work under pressure and adhere to strict deadlines.</p>
                            <a href="https://drive.google.com/file/d/1N6QcNdt5rUhhSQK6AH3S1-sOAdhU1DMZ/view?usp=sharing"><Button  size="lg" className="resume">
                                View Resume
                            </Button></a>
                        </Col>
                        <Col lg={4}><img alt="software engineer" src={software} width="100%"/></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Profile;

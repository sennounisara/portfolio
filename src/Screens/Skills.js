import * as React from "react";
import {Container, Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import web from '../Image/web_development.svg';
import mobile from '../Image/mobile_development.svg';
import db from '../Image/server.svg';
import prog from '../Image/proud_coder.svg';

class Skills extends React.Component {
    render() {
        return (

            <div id="skills" className="skills">
                <style type="text/css">
                    {`
                        .skills {
                          background-color: #f8f9fa;
                          padding : 50px;
                        }
                        `}
                </style>
                <Container >
                    <Row>
                        <h3>Skills</h3>
                    </Row>
                    <Row>
                        <Col lg={3}><Image src={web} class />
                            <h6>Web Development</h6>
                        </Col>
                        <Col lg={3}>
                            <Image src={mobile}/>
                            <h6>Mobile Development</h6>
                        </Col>
                        <Col lg={3}>
                            <Image src={db}/>
                            <h6>Data Base</h6>
                        </Col>
                        <Col lg={3}>
                            <Image src={prog}/>
                            <h6>Programming Language</h6>
                        </Col>
                    </Row>
                </Container>
                <p>“Sometimes the questions are complicated and the answers are simple.<br/>”Dr. Seuss</p>

            </div>
        );
    }
}
export default Skills;

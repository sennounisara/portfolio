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
                            <p>Spring, Bootstrap, React, Angular</p>
                        </Col>
                        <Col lg={3}>
                            <Image src={mobile}/>
                            <h6>Mobile Development</h6>
                            <p>Android, Ionic, React, Flutter</p>
                        </Col>
                        <Col lg={3}>
                            <Image src={db}/>
                            <h6>Data Base</h6>
                            <p>Oracle, SQL, SQLite, MySQL, SQL Server</p>
                        </Col>
                        <Col lg={3}>
                            <Image src={prog}/>
                            <h6>Programming Language</h6>
                            <p>C, C++, C#, Java, JavaScript, Python</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Skills;

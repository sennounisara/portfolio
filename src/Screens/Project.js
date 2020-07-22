import * as React from "react";
import {Container, Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import web from '../Image/web_development.svg';
import mobile from '../Image/mobile_development.svg';
import db from '../Image/server.svg';

class Project extends React.Component {
    render() {
        return (

            <div id="project" className="project">
                <style type="text/css">
                    {`
                        .project {
                          background-color: #f8f9fa;
                          padding : 50px;
                        }
                     `}
                </style>
                <Container >
                    <Row>
                        <h3>Projects</h3>
                    </Row>
                    <Row>
                        <Col lg={4}><Image src={web} class />
                            <h6>Development of a decision information system for Pexiluis Africa
                                management.</h6>
                            <p>Electron / Angular, Spring, MySQL</p>
                        </Col>
                        <Col lg={4}>
                            <Image src={mobile}/>
                            <h6>Development the Transport Management System under Dynamics 365</h6>
                            <p>Dynamics CRM 365</p>
                        </Col>
                        <Col lg={4}>
                            <Image src={db}/>
                            <h6>University project management</h6>
                            <p>Php, Bootstrap, MySQL</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Project;

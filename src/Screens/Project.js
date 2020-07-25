import * as React from "react";
import {Container, Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import dynamics from '../Image/Dynamics.PNG';
import geofit from '../Image/geofit.png'
import pfe from '../Image/pfe.png';

class Project extends React.Component {
    render() {
        return (

            <div id="project" className="project blocs" >
                <style type="text/css">
                    {`
                        .project {
                          clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%);
                           padding-top:100px;
                           padding-bottom:100px;
                        }
                     `}
                </style>
                <Container >
                    <Row>
                        <h3>Projects</h3>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <img src={geofit} width="230" height="130" />
                            <h6>Development of a decision information system for Pexiluis Africa
                                management.</h6>
                            <p>Electron / Angular, Spring, MySQL</p>
                        </Col>
                        <Col lg={4}>
                            <Image src={dynamics} width="230" height="130"/>
                            <h6>Development the Transport Management System under Dynamics 365</h6>
                            <p>Dynamics CRM 365</p>
                        </Col>
                        <Col lg={4}>
                            <img src={pfe} width="230" height="130"/>
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

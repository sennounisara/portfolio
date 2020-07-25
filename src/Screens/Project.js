import * as React from "react";
import {Container, Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import dynamics from '../Image/Dynamics.PNG';
import geofit from '../Image/geofit.png'
import pfe from '../Image/pfe.png';
import borderT from "../Image/borderT.svg";
import BorderB from "../Image/borderBottom.svg";

class Project extends React.Component {
    render() {
        return (
            <div id="project" >
                <div  className="project blocs">
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
                            <h6>Development of a Transport Management System using Dynamics 365</h6>
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
            </div>
        );
    }
}
export default Project;

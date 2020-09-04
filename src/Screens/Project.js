import * as React from "react";
import {Container, Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import dynamics from '../Image/Dynamics.PNG';
import geofit from '../Image/geofit.png'
import pfe from '../Image/pfe.png';
import smartfocus from '../Image/smartfocus.PNG';
import './style.css'

class Project extends React.Component {
    render() {
        return (
            <div id="project" >
                <div  className="project blocs">
                <Container >
                    <Row>
                        <Col> <h3>Projects</h3></Col>
                    </Row>
                    <Row>
                        <Col lg={3} md={6}>
                            <img className="zoom" src={geofit} width="230" height="130" />
                            <h6>Development of a decision information system for Pexiluis Africa
                                management.</h6>
                            <p>Desktop: Electron / Web: Angular, Spring / database: MySQL</p>
                        </Col>
                        <Col lg={3} md={6}>
                            <Image className="zoom" src={dynamics} width="230" height="130"/>
                            <h6>Development of a Transport Management System using Dynamics 365</h6>
                            <p>Dynamics CRM 365</p>
                        </Col>
                        <Col lg={3} md={6}>
                            <img className="zoom" src={pfe} width="230" height="130"/>
                            <h6>University project management</h6>
                            <p>Php, Bootstrap, MySQL</p>
                        </Col>
                        <Col lg={3} md={6}>
                            <img className="zoom" src={smartfocus} width="230" height="130"/>
                            <h6>Smart Focus</h6>
                            <p>Web: ReactJs / Mobile: Flutter </p>
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        );
    }
}
export default Project;

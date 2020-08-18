import * as React from "react";
import {Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import emsi from "../Image/Emsi.png"
import fsa from "../Image/fsa.png"
import './style.css';

class Education extends React.Component {
    render() {
        return (
            <div id="education" >

                <Container >
                    <Row>
                        <Col> <h3>Education</h3></Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6}>
                            <img src={emsi} width="350px" alt="EMSI" />
                            <h6>ECOLE MAROCAINE DES SCIENCES D'INGENIEUR - CASABLANCA</h6>
                            <p>engineering degree IT method applied to business management</p>
                        </Col>
                        <Col lg={6} md={6}>
                            <img src={fsa} width="280px" alt="FSA"/>
                            <h6>FACULTÉ DES SCIENCES - AGADIR</h6>
                            <p>Bac + 3 in software engineering</p>
                        </Col>
                    </Row>
                </Container>

                <p>“Sometimes the questions are complicated and the answers are simple.”<br/>Dr. Seuss</p>
            </div>
        );
    }
}
export default Education;

import * as React from "react";
import {Container, Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import emsi from "../Image/Emsi.png"
import fsa from "../Image/fsa.png"
import './style.css';
import BorderB from "../Image/borderBottom.svg"
import borderT from "../Image/borderT.svg"

class Education extends React.Component {
    render() {
        return (

            <div id="education" className="blocs education">

                <Container >
                    <Row>
                        <h3>Education</h3>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <img src={emsi} width="350px"  />
                            <h6>ECOLE MAROCAINE DES SCIENCES D'INGENIEUR - CASABLANCA</h6>
                            <p>engineering degree IT method applied to business management</p>
                        </Col>
                        <Col lg={6}>
                            <img src={fsa} width="280px" />
                            <h6>FACULTÉ DES SCIENCES - AGADIR</h6>
                            <p>Bac + 3 in software engineering</p>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}
export default Education;

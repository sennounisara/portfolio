import * as React from "react";
import {Container, Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import emsi from "../Image/Emsi.png"
import fsa from "../Image/fsa.png"

class Education extends React.Component {
    render() {
        return (

            <div id="education" className="education">
                <style type="text/css">
                    {`
                        .education {
                          background-color: #f8f9fa;
                          padding : 50px;
                          clip-path: polygon(0 13%, 100% 0%, 100% 87%, 0% 100%);
                          padding-top:100px;
                          padding-bottom:100px;
                        }
                    
                        .btn-xxl {
                          padding: 1rem 1.5rem;
                          font-size: 1.5rem;
                        }
                        `}
                </style>
                <Container>
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

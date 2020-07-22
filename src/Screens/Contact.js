import * as React from "react";
import {Container, Row, Col} from "react-bootstrap";
class Contact extends React.Component {
    render() {
        return (

            <div id="contact" className="contact">
                <style type="text/css">
                    {`
                        .contact {
                          background-color: #f8f9fa;
                          padding : 50px;
                        }
                    
                        .btn-xxl {
                          padding: 1rem 1.5rem;
                          font-size: 1.5rem;
                        }
                        `}
                </style>
                <Container>
                    <Row>
                        <Col lg={4}></Col>
                        <Col lg={4}></Col>
                        <Col lg={4}></Col>
                    </Row>
                </Container>
                <p>“Sometimes the questions are complicated and the answers are simple.<br/>”Dr. Seuss</p>

            </div>
        );
    }
}
export default Contact;

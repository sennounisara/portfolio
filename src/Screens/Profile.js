import * as React from "react";
import App from "../App";
import software from '../Image/software_engineer.svg'
import {Col, Container, Row} from "react-bootstrap";


class Profile extends React.Component {
    render() {
        return (
            <div id="profile" className="profil">
                <style type="text/css">
                    {`
                        .profil{
                            margin : 50px;
                        }
                        .btn-xxl {
                          padding: 1rem 1.5rem;
                          font-size: 1.5rem;
                        }
                        `}
                </style>
                <Container>
                    <Row xs={1} md={2}>
                        <Col lg={8}>
                            <h3>SENNOUNI SARA</h3>
                            <p>I am Moroccan, responsible and hard-working IT person. Being worked for
                                different projects helped me to adapt to changes quickly and made me a
                                mature team worker. I am able to work well both in a team environment as
                                well as using own initiative. I am able to work well under pressure and adhere
                                to strict deadlines.</p>
                        </Col>
                        <Col lg={4}><img src={software} width="100%"/></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Profile;

import * as React from "react";
import {Container, Row, Col} from "react-bootstrap";
import logo from '../Image/SS.png';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './style.css';

class Contact extends React.Component {
    render() {
        return (

            <div id="contact" className="blocs">

                <Container>
                    <Row>
                        <Col lg={4}>
                            <div>
                                <h6><img  alt="sennouni sara" className="image" src={logo} width={50} />SENNOUNI SARA</h6>
                            </div>
                            <div>
                                <p></p>
                            </div>
                            <div>
                                <a href="#profile">Profile</a> - <a href="#education">Education</a> - <a href="#experience">Experience</a> - <a href="#skills">Skills</a>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <LocationOnOutlinedIcon color={"primary"}/> Boulevard Laymoune - Morocco, Casablanca<br/>
                            <PhoneIphoneOutlinedIcon color={"primary"}/> +212 698-662949<br/>
                            <ContactMailOutlinedIcon color={"primary"}/> sara.sennouni1214@gmail.com
                        </Col>
                        <Col lg={4}>
                            <h6>About me</h6>
                            <p>Junior software developer</p>
                            <br/>
                            <div>
                                <CodeOutlinedIcon color={"primary"} fontSize={"large"} /><GitHubIcon color={"primary"} fontSize={"default"} />
                                <FacebookIcon color={"primary"} fontSize={"large"}/><LinkedInIcon color={"primary"} fontSize={"large"}/>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}
export default Contact;

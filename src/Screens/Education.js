import * as React from "react";
import {Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

class Education extends React.Component {
    render() {
        return (

            <div id="education" className="education">
                <style type="text/css">
                    {`
                        .education {
                          background-color: #f8f9fa;
                          padding : 50px;
                        }
                    
                        .btn-xxl {
                          padding: 1rem 1.5rem;
                          font-size: 1.5rem;
                        }
                        `}
                </style>
                <p>“Sometimes the questions are complicated and the answers are simple.<br/>”Dr. Seuss</p>

            </div>
        );
    }
}
export default Education;

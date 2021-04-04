import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function Experience() {
    const classes = useStyles();

    return (
        <div id="experience" className="pad">
            <style>
                {`
                   .languer{
                   height: 100px;
                   }
                        .btn-xxl {
                          padding: 1rem 1.5rem;
                          font-size: 1.5rem;
                        }
                        `}
            </style>
            <Container >
                <Row>
                    <Col> <h3>Work Experience</h3></Col>
                </Row>
                <Row>
        <Timeline align="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" >
                        02/2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector className="languer" />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper style={{backgroundColor:"#F8F9FA"}} elevation={3} className={classes.paper} >
                        <Typography variant="h6" component="h1">
                            Intelcia IT Solution
                        </Typography>
                        <Typography>PHP Developer</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" >
                        09/2020 - 01/2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector className="languer" />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper style={{backgroundColor:"#F8F9FA"}} elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            SAGlobal
                        </Typography>
                        <Typography>Developer CRM Dynamics 365</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" >
                        03/2020 - 08/2020
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector className="languer" />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper style={{backgroundColor:"#F8F9FA"}} elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            SAGlobal
                        </Typography>
                        <Typography>Internship - Development the Transport Management System under Dynamics 365</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" >
                        07/2020 - 09/2020
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <LaptopMacIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper style={{backgroundColor:"#F8F9FA"}} elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Pexiluis Africa
                        </Typography>
                        <Typography>
                            Internship - Development of a decision information system for Pexiluis Africa management.
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
                </Row></Container>
</div>
    );
}

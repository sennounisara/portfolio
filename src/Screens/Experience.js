import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Container, Row} from "react-bootstrap";

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
                    <h3>Work Experience</h3>
                </Row>
                <Row>
        <Timeline align="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
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
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            SAGlobal
                        </Typography>
                        <Typography>Development the Transport Management System under Dynamics 365</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        07/2020 - 09/2020
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Pexiluis Africa
                        </Typography>
                        <Typography>
                            Development of a decision information system for Pexiluis Africa management.
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
                </Row></Container>
</div>
    );
}

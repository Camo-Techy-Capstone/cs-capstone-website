import React from 'react';
import Container from "@material-ui/core/Container";
import ReactPlayer from 'react-player/vimeo';


const Donors = () => {
    return (
        <Container maxWidth="lg">
            <h1>Donors</h1>
            <p>We Would also like to give a special thank you to Checkfront for being a major sponsor of this event. Thank you!</p>
            <ReactPlayer style={{margin: "auto"}} controls={true} url='https://vimeo.com/570531995' />
        </Container>
    );
}

export default Donors;

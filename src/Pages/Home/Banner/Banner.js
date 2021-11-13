import React from 'react';
import Grid from '@mui/material/Grid';

import image3 from './../../../images/image3.png';

import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';


const bannerBg = {
    marginTop: '20px',
    backgroundColor: 'black',

}

const verticalCenter = {

    display: 'flex',
    alignItems: 'center',
    height: 500
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography style={{ color: 'white' }} variant="h3">
                            Dream as if you'll live forever. <br /> Live as if you'll die today.
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'white' }}>
                            Being a good actor isn't easy. Being a man is even harder. I want to be both before I'm done.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: 'primary.main' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '100%' }} src={image3} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;
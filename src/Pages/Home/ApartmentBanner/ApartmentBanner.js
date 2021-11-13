import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import image from './../../../images/image5.png'


const appointmentBanner = {

    backgroundColor: 'black',
    // backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}
const ApartmentBanner = () => {
    return (
        <Container>
            <Box style={{ appointmentBanner }} sx={{ flexGrow: 1 }}>

                <Typography variant="h6" sx={{ mb: 5 }} style={{ color: 'blue' }}>
                    We Are Here Making Your Success
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400, }}
                            src={image} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 5 }} style={{ color: 'blue' }}>
                                Your Dream
                            </Typography>
                            <Typography variant="h4" style={{ color: 'blue' }}>
                                Make Your Booking Today
                            </Typography>
                            <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'black', fontSize: 14, fontWeight: 300 }}>
                                Dream as if you'll live forever. <br /> Live as if you'll die today.
                            </Typography>
                            <Button variant="contained" >Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ApartmentBanner;
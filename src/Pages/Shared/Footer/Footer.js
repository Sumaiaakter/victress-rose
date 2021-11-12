import { CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import img from './../../../images/payment.png'

const Footer = () => {
    return (
        <Box>
            <Grid container spacing={2} sx={{ mt: 5, }} style={{ backgroundColor: 'blue' }}>
                <Grid item xs={6} md={4}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: 'white' }}>
                            Victress Rose
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Victress Real Estate Ltd.
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Banasree, Rampura
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Dhaka, Bangladesh-1214
                        </Typography>



                    </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: 'white' }}>
                            Our Services
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Studio
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            One Bed
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Private Hose
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Rent Apartment
                        </Typography>


                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box>
                        <CardMedia
                            component="img"
                            style={{ width: '100%', height: '200px', margin: '0 auto' }}
                            image={img}
                            alt="green iguana"
                        />


                    </Box>
                </Grid>

            </Grid>

        </Box>
    );
};

export default Footer;

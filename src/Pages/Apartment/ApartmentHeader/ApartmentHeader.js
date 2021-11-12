import React from 'react';
import { Container, Grid } from '@mui/material';
import image from './../../../images/image5.png';
import Calender from '../../Shared/Calender/Calender.js'
const ApartmentHeader = ({ date, setDate }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={image} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ApartmentHeader;
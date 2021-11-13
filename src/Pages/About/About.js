import { Container } from '@mui/material';
import React from 'react';

import Services from '../Home/Services/Services';
import { Box } from '@mui/system';

import Banner from '../Home/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import AvailableApartment from '../Apartment/AvailableApartment/AvailableApartment';


const About = () => {
    const [date,] = React.useState(new Date());
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Header></Header>
            <Container>
                <Banner></Banner>

                <AvailableApartment date={date}></AvailableApartment>
            </Container>
            <Footer></Footer>
        </Box>



    );
};

export default About;
import { Container } from '@mui/material';
import React from 'react';

import Services from '../Home/Services/Services';
import { Box } from '@mui/system';

import Banner from '../Home/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';


const About = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Header></Header>
            <Container>
                <Banner></Banner>

                <Services></Services>
            </Container>
            <Footer></Footer>
        </Box>



    );
};

export default About;
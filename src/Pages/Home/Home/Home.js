import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import ApartmentBanner from '../ApartmentBanner/ApartmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <ApartmentBanner></ApartmentBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;
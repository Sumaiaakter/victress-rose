import React from 'react';
import Banner from '../../Home/Banner/Banner';
import Header from '../../Shared/Header/Header';
import ApartmentHeader from '../ApartmentHeader/ApartmentHeader';
import AvailableApartment from '../AvailableApartment/AvailableApartment';

const Apartment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ApartmentHeader date={date} setDate={setDate}></ApartmentHeader>

            <AvailableApartment date={date}></AvailableApartment>

        </div>
    );
};

export default Apartment;
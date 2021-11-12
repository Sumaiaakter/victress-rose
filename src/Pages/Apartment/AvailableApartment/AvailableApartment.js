import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Westport Central',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 350000,
        desc: 'A palace is a grand residence, especially a royal residence, or the home of a head of state or some other high-ranking dignitary, such as a bishop or archbishop.[1] The word is derived from the Latin name palātium, for Palatine Hill in Rome which housed the Imperial residences'
    },
    {
        id: 2,
        name: 'Europa Rose Vally',
        time: '09.00 AM - 10.00 AM',
        space: 8,
        price: 320000,
        desc: 'A palace is a grand residence, especially a royal residence, or the home of a head of state or some other high-ranking dignitary, such as a bishop or archbishop.[1] The word is derived from the Latin name palātium, for Palatine Hill in Rome which housed the Imperial residences',
        rating: 4.5
    },
    {
        id: 3,
        name: 'Jannat Palace',
        time: '10.00 AM - 11.00 AM',
        space: 9,
        price: 250000,
        desc: 'A palace is a grand residence, especially a royal residence, or the home of a head of state or some other high-ranking dignitary, such as a bishop or archbishop.[1] The word is derived from the Latin name palātium, for Palatine Hill in Rome which housed the Imperial residences',
        rating: 4.6
    },
    {
        id: 4,
        name: 'Ellison Palace',
        time: '11.00 AM - 12.00 PM',
        space: 5,
        price: 355000,
        desc: 'A palace is a grand residence, especially a royal residence, or the home of a head of state or some other high-ranking dignitary, such as a bishop or archbishop.[1] The word is derived from the Latin name palātium, for Palatine Hill in Rome which housed the Imperial residences',
        rating: 5.00
    },
    {
        id: 5,
        name: 'Victress Palace',
        time: '06.00 PM - 07.00 PM',
        space: 10,
        price: 380000,
        desc: 'A palace is a grand residence, especially a royal residence, or the home of a head of state or some other high-ranking dignitary, such as a bishop or archbishop.[1] The word is derived from the Latin name palātium, for Palatine Hill in Rome which housed the Imperial residences',
        rating: 4.7
    },
    {
        id: 6,
        name: 'Mannat Palace',
        time: '07.00 PM - 08.00 PM',
        space: 10,
        price: 450000,
        desc: 'A palace is a grand residence, especially a royal residence, or the home of a head of state or some other high-ranking dignitary, such as a bishop or archbishop.[1] The word is derived from the Latin name palātium, for Palatine Hill in Rome which housed the Imperial residences',
        rating: 5.00
    },
]


const AvailableApartment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);



    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }}>Available Apartments upto {date.toDateString()}</Typography>

            {bookingSuccess &&
                <Alert severity="success">

                    successfully Booking — <strong>check it out!</strong>
                </Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}

                    ></Booking>)
                }
            </Grid>

        </Container>
    );
};

export default AvailableApartment;
import { Grid } from '@mui/material';
import React from 'react';
import Rating from 'react-rating';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';
import Typography from '@mui/material/Typography';
import './Booking.css'
import Button from '@mui/material/Button';


const Booking = ({ booking, date, setBookingSuccess }) => {

    const { name, space, time, price, desc, rating, img } = booking;

    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);



    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 5, m: 'auto' }}>
                    <Typography variant="h5" gutterBottom component="div">
                        <img style={{ width: '100%' }} src={img} alt="" />
                    </Typography>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        Price: {price}
                    </Typography>
                    <Typography sx={{ color: 'info.main', fontWeight: 400 }} variant="h6" gutterBottom component="div">
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"

                        />

                    </Typography>
                    <Typography sx={{ color: 'info.main', fontWeight: 400 }} variant="h6" gutterBottom component="div">
                        {desc}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        Left:  {space}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {time} Spaces Available
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">Book Apartment</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
                setBookingSuccess={setBookingSuccess}
            >

            </BookingModal>
        </>
    );
};

export default Booking;
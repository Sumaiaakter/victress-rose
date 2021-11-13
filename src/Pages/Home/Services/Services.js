import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import { Button, Card, CardContent, CardMedia, Container, Typography, Grid } from '@mui/material';

import './Services.css'
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';





const Services = () => {
    const [services, setServices] = useState([]);




    //------------------------//
    useEffect(() => {
        fetch("http://localhost:5000/allServices")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    console.log(services);


    //---------------------------//
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header></Header>
            <Container>
                <Typography className="service" sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES:{services.length}
                </Typography>

                <Typography className="service" sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>




                    {
                        services.map((service, index) => <Grid item xs={4} sm={4} md={4}>
                            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: '200px', margin: '0 auto' }}
                                    image={service.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {service.name}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {index}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        {service.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price:  {service.price}
                                    </Typography>
                                    <Typography sx={{ color: 'info.main', fontWeight: 400 }} variant="h6" gutterBottom component="div">
                                        <Rating
                                            initialRating={service.rating}
                                            readonly
                                            emptySymbol="far fa-star icon-color"
                                            fullSymbol="fas fa-star icon-color"

                                        />

                                    </Typography>
                                </CardContent>
                                <Link to={`/details/${service?._id}`}> <Button variant="contained">Order Now</Button></Link>
                            </Card>
                        </Grid>)
                    }
                </Grid>
            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default Services;
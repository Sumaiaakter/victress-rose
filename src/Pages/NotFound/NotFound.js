import { Button, Card, CardContent, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <Container>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                {/* <CardMedia
                    component="img"
                    style={{
                        height: "91vh",
                        background: `url(${notfound})`,
                        backgroundAttachment: "fixed",
                    }}
                    alt="green iguana"


                /> */}
                <CardContent>
                    <Typography variant="h5" component="div">
                        404
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        OPPS! PAGE NOT FOUND
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Sorry, the page you're looking for doesn't exist. you can return to
                        home and look for another.
                    </Typography>
                </CardContent>
                <Link to='/'> <Button variant="contained">Return to Home</Button></Link>
            </Card>
        </Container>
    );
};

export default NotFound;
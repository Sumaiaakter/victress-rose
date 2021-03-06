import { Container, Grid, TextField, Typography, Button, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import image from './../../../images/image6.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth()
    // send user expected page
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    // handle google sign in----------

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Please Login
                    </Typography>

                    <form onSubmit={handleLoginSubmit}>

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic" label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic" label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />




                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>

                        <NavLink style={{ textDecoration: 'none' }} to='/register'><Button variant="text">New User? Please Register</Button></NavLink>

                        {isLoading && <CircularProgress />}
                        {user?.email &&
                            <Alert severity="success">

                                successfully login ??? <strong>check it out!</strong>
                            </Alert>
                        }
                        {authError && <Alert severity="error">

                            This is an error alert ??? <strong>check it out!</strong>
                        </Alert>}

                    </form>
                    <p>--------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>

                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <img style={{ width: '80%' }} src={image} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;
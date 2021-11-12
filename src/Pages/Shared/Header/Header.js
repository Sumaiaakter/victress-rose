import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Grid } from '@mui/material';

const Header = () => {
    const { user, logOut } = useAuth();
    const { displayName, } = user;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Victress Rose
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/apartment"><Button color="inherit">Apartment</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/services"><Button color="inherit">Services</Button></Link>

                    <Typography color="inherit"></Typography>


                    {user?.email ?

                        (<Box>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'><Button color="inherit">Dashboard</Button>
                            </NavLink>
                            <Button onClick={logOut} color="inherit">Logout</Button>
                            <Grid>
                                <div className="text-center">
                                    <h6>{displayName}</h6>

                                    <button onClick={logOut} className="btn btn-primary">
                                        Sign Out
                                    </button>
                                </div>
                            </Grid>

                        </Box>) :

                        (<NavLink style={{ textDecoration: 'none', color: 'white' }} to='/login'><Button color="inherit">Login</Button>
                        </NavLink>)}


                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, } from '@mui/material';


import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import Admin from '../Admin/Admin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddApartment from '../AddApartment/AddApartment';
import useAuth from '../../../hooks/useAuth';
import AddReview from '../../AddReview/AddReview';
import Review from '../../Home/Review/Review';



const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { addAdmin } = useAuth();
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none', }} to="/apartment"><Button color="inherit">Apartment</Button></Link>

            <Link style={{ textDecoration: 'none', }} to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
            <Divider />
            <Link style={{ textDecoration: 'none', }} to={`${url}/review`}><Button color="inherit">Review</Button></Link>
            <Divider />
            <Link style={{ textDecoration: 'none', }} to={`${url}/addReview`}><Button color="inherit">Add Review</Button></Link>
            <Divider />

            {addAdmin && <Box>
                <Link style={{ textDecoration: 'none', }} to={`${url}/makeAdmin`}><Button color="inherit">Add Admin</Button></Link>

                <Link style={{ textDecoration: 'none', }} to={`${url}/addApartment`}><Button color="inherit">Add Apartment</Button></Link>
            </Box>}



        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route exact path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route exact path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute exact path={`${path}/makeAdmin`}>
                        <Admin></Admin>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/addApartment`}>
                        <AddApartment></AddApartment>
                    </AdminRoute>





                </Switch>




            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;

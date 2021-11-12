import { Grid } from '@mui/material';
import * as React from 'react';
import Calender from '../../Shared/Calender/Calender';
import Apartments from '../Apartments/Apartments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={5}>
                <Calender date={date}
                    setDate={setDate}>

                </Calender>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
                <Apartments date={date}>

                </Apartments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;
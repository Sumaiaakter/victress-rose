import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const Apartments = ({ date }) => {
    const { user } = useAuth();
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        const url = `https://desolate-beyond-86715.herokuapp.com/apartments?email=${user.email}&date=${date}`
        fetch(url)
            .then(res => res.json())
            .then(data => setApartments(data));
    }, [date, user.email])
    return (
        <div>
            <h2>apartments: {apartments.length}</h2>

            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="apartments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer Name</TableCell>
                            <TableCell align="right">Apartments Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apartments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.customerName}
                                </TableCell>
                                <TableCell align="right">{row.apartmentName}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>

                                <TableCell align="right">
                                    <Button type="submit" variant="contained">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Apartments;
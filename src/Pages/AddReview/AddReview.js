import React from 'react';
import { useForm } from "react-hook-form";

import { Link } from 'react-router-dom';
import { Container, Grid, Typography, Button } from '@mui/material';

const AddReview = () => {
    const {
        register,
        handleSubmit,


    } = useForm();

    const onSubmit = (data) => {

        console.log(data)

    }

    return (
        <Container >
            <Typography className='apartment' variant="h4" sx={{ color: 'info.main', mb: 3 }}>Please Add Review </Typography>


            <Grid className="container" container spacing={2}>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input
                        {...register("description")}
                        placeholder="Description"
                        className="p-2 m-2 w-100 input-field"
                    />



                    <input
                        type="submit"
                        value="Add"
                        className="btn btn-info w-50"
                    />
                    <br />

                    <br />
                    <Link to='/'><Button
                        sx={{ width: "50%" }}

                        variant="contained">Back</Button></Link>
                </form>


            </Grid>

        </Container>
    );
};

export default AddReview;
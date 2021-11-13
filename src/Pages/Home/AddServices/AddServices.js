import { Container, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import './AddServices.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddServices = () => {

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addServices", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data)

    }
    return (
        <Container >
            <Typography className='apartment' variant="h4" sx={{ color: 'info.main', mb: 3 }}>Please Add Services </Typography>


            <Grid className="container" container spacing={2}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name")}
                        placeholder="Name"
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("description")}
                        placeholder="Description"
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("image", { required: true })}
                        placeholder="Image Link"
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("price", { required: true })}
                        placeholder="Price"
                        type="number"
                        className="p-2 m-2 w-100 input-field"
                    />

                    <br />
                    <input
                        {...register("rating", { required: true })}
                        placeholder="Rating"
                        type="number"
                        className="p-2 m-2 w-100 input-field"
                    />

                    <br />

                    <select {...register("model")} className="p-2 m-2 w-100">
                        <option value="premium">premium</option>
                        <option value="classic">classic</option>
                        <option value="business">business</option>
                    </select>
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}

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

export default AddServices;
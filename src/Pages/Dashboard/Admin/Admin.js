import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [admin, setAdmin] = useState(false)
    const handleOnBlur = (e) => {
        setEmail(e.target.value);

    }
    const handleAdmin = e => {
        const user = { email }
        fetch('https://desolate-beyond-86715.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    setAdmin(true);
                }

            })


        e.preventDefault();
    }
    return (
        <div>
            <h2 style={{ alignItems: 'center' }}>admin</h2>
            <form onSubmit={handleAdmin}>
                <TextField
                    sx={{ width: '70%' }}
                    label="Email"
                    type="email"
                    variant="standard"
                    onBlur={handleOnBlur}

                />

                <Button type="submit" variant="contained">Add Admin</Button>
            </form>
            {admin &&
                <Alert severity="success">

                    Made Admin successfully!
                </Alert>
            }
        </div>
    );
};

export default Admin;
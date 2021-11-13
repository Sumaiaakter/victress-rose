import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('/apartments.json')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            <h2>orders</h2>
        </div>
    );
};

export default Orders;
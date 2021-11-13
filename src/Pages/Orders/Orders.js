import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import DashboardHome from '../Dashboard/DashboardHome/DashboardHome';
import Header from '../Shared/Header/Header';

const Orders = () => {
    const [orders, setOrders] = useState([])
    console.log(orders)
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
            <Header></Header>
            <DashboardHome></DashboardHome>
            <h2>orders</h2>
        </div>
    );
};

export default Orders;
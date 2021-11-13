import { useState } from 'react';
import { useEffect } from 'react';

const useOrders = () => {
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

        </div>
    );

};

export default useOrders;
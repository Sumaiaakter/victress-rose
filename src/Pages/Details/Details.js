import React from 'react';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router';





const Details = () => {
    const [details, setDetails] = useState([])
    const { detailsId } = useParams();
    console.log(detailsId)

    useEffect(() => {
        fetch(`https://desolate-beyond-86715.herokuapp.com/singleDetails/${detailsId}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data);
                console.log(data);
            })
    }, [detailsId])
    return (
        <div>
            <h2>details{details.length} </h2>

            <img width="60%" src={details[0]?.image} alt="" />
            <h2 className="text-center">{details[0]?.name}</h2>
            <p className="text-center">{details[0]?.price}</p>
            <p className="text-center">{details[0]?.description}</p>




        </div>
    );
};

export default Details;
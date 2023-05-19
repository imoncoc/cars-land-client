import React from 'react';
import './SingleToyDetails.css'
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {
    const toy = useLoaderData();
    console.log(toy)
    return (
        <div>
            <h2>This is Single Toys Details</h2>
        </div>
    );
};

export default SingleToyDetails;
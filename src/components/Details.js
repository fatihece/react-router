import React from 'react'
import { useParams } from 'react-router';

const Details = (props) => {
    const { id } = useParams();
    return (
        <div>
            <h1 style={{ color: "blue" }}>This is DETAILS Page</h1>
            <p>Details - { id }</p>
        </div>
    )
}

export default Details;

import React from 'react'

const Details = (props) => {
    return (
        <div>
            <h1 style={{ color: "blue" }}>This is DETAILS Page</h1>
            <p>{props.match.params.id}</p>
        </div>
    )
}

export default Details

import React from 'react'
import {useLocation} from "react-router"

const Home = () => {
    const { pathname } = useLocation();
    return (
        <div>
            <h1>This is HOME Page</h1>
            <p>Current URL: { pathname}</p>
        </div>
    )
}

export default Home

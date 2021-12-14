import React from 'react';
import { Link } from 'react-router-dom';
import "milligram";

function Home() {
    return (
        <>
            <Link to='Allcars'>All cars serviced in the company</Link>
            <Link to='carHistory'>Repair History</Link>
            <Link to='loginPage'>Sign in</Link>
            <Link to='registerPage'>Register</Link>
            <Link to='newCarPage'>Add new car</Link>
        </>
    );
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import "milligram";

function Home() {
    return (
        <>
            <Link to='Allcars'>All cars serviced in the company</Link>
            <Link to='carHistory'>Repair History</Link>
        </>
    );
}

export default Home;
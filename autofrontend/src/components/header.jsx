import React from 'react';
import { Link } from 'react-router-dom';
import "milligram";

const Header = () => (
    <>
        <span><Link to='Allcars'>All cars serviced in the company</Link></span>
        <span><Link to='carHistory'>Repair History</Link></span>
    </>
);

export default Header;
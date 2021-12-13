import React from 'react';
import { Link } from 'react-router-dom';
// import "milligram";
import './header.css';

const Header = () => {

    return (
        <header>
            <div className="header">
                <div className="headerNav">
                    {/* <Link to="/register">Register</Link>
          <Link to="/login">Sign in</Link> */}

                    <Link to='Allcars'>All cars</Link>
                    <Link to='carHistory'>Repair History</Link>

                </div>
            </div>

        </header>
    )
}

export default Header;
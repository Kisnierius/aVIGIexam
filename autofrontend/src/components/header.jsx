import React from 'react';
import { Link } from 'react-router-dom';
// import "milligram";
import './header.css';

const Header = () => {

    return (
        <header>
            <div className="header">
                <div className="headerNav">
                    <Link to="/registerPage">Register</Link>
          <Link to="/loginPage">Sign in</Link>

                    <Link to='Allcars'>All cars</Link>
                    <Link to='carHistory'>Repair History</Link>
                    <Link to='newCarPage'>Add new car</Link>

                </div>
            </div>

        </header>
    )
}

export default Header;
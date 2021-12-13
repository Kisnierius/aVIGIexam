import React from "react";
import ReactDOM from 'react-dom';
import Cars from '../components/carDiv';
import "milligram";
// import { Link } from 'react-router-dom';

function AllCars() {

    return (
<div>
        

            <React.StrictMode>

                <Cars />
            </React.StrictMode>,
           
        </div>
    );
}

export default AllCars;
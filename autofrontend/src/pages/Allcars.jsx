import React from "react";
import ReactDOM from 'react-dom';
import Cars from '../components/carDiv';
import "milligram";
// import { Link } from 'react-router-dom';


function AllCars() {

    return (
        ReactDOM.render(

            <React.StrictMode>

                <Cars />
            </React.StrictMode>,
            document.getElementById('root')
        )
    );
}

    export default AllCars;
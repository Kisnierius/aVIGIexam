import React, { useEffect, useState } from "react";
import Allcar from '../pages/allcar';

const AllCars = () => {

    const [allCars, setAllCars] = useState([]);


    useEffect(() => {
        fetch('http://127.0.0.1:5000/cars')
            .then(response => response.json())
            .then(data => setAllCars(data));
    }, []);



    return (
        <main>
            <h1>All cars serviced in the company</h1>
            <div>
                {allCars.lenght > 0 ?
                    allCars.map(allCar => (
                        <Allcar
                            key={allCar.id}
                            make={allCar.make}
                            model={allCar.model}
                            year={allCar.year}
                            plateNo={allCar.plateNo}
                        />)
                    ):
                    <h1>Loading...</h1>}
            </div>
        </main>
    )

}

    export default AllCars;
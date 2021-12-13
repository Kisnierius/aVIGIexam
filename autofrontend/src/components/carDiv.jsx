// import React from 'react';

import React, { useState, useEffect } from "react";
import "./carDiv.css";

const  Car = ({ make, model, year, plateNo })  => {
  return (
    <div className="carDIV">
      <h2>{plateNo}</h2>
      <p>{make}</p>
      <p>{model}</p>
      <p>{year}</p>
      {/* <p>{id}</p> */}
      
    </div>
  );
};

const Cars = () => {
  const [cars, setCars] = useState([]);

   const  fetchCars = async () => {
        await fetch('http://127.0.0.1:5000/cars')
             .then(response => response.json())
             .then(data => setCars(data));
            console.log(Cars)
     };
 

//     useEffect(() => {
//        fetchAllcars();
//     }, []);


  useEffect(() => {
      fetchCars();
    // fetch('http://127.0.0.1:5000/cars')
    //   .then((response) => response.json())
    //   .then((data) => setCars(data));
  }, []);

  return (
    <div className="flex flex-wrap">
      {cars.length > 0
        ? cars.map((car) => (
            <Car key={car.id} make={car.make} model={car.model} year={car.year} plateNo={car.plateNo} />
          ))
        : "Loading..."}
    </div>
  );
};

export default Cars;

///////////



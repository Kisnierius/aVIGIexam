import React, { useState, useEffect } from "react";
import "./carDiv.css";
import "milligram";

//////////
const Repair = ({ plateNo, id, create_time, repair_title, repair_comment, part_title, part_comment, email }) => {
  return (
    <div className="repairDIV">
      <h2>{plateNo}</h2>
      <p>{id}</p>
      <p>{create_time}</p>
      <h1>{repair_title}</h1>
      <p>{repair_comment}</p>
      <p>{part_title}</p>
      <p>{part_comment}</p>
      <p>{email}</p>
    </div>
  );
};

const Repairs = (id) => {
  const [repairs, setRepairs] = useState([]);

  const fetchRepairs = async () => {
    await fetch(`http://127.0.0.1:5000/repairscars/${id}`)
      .then(response => response.json())
      .then(data => setRepairs(data));
    console.log(repairs)
  };

  useEffect(() => {
    fetchRepairs();
  }, []);

  return (
    <div className="flex flex-wrap">

      {repairs.length > 0
        ? repairs.map((repair) => (
          <Repair plateNo={repair.plateNo} id={repair.id} create_time={repair.create_time} repair_title={repair.repair_title} repair_comment={repair.repair_comment} part_title={repair.part_title} part_comment={repair.part_comment} email={repair.email} />
        ))
        : "Loading..."}
    </div>
  );
};

///////////

const Car = ({ make, model, year, plateNo, id }) => {
  return (
    <div className="carDIV">
      <h3>{plateNo}</h3>
      <p>{make}</p>
      <p>{model}</p>
      <p>{year}</p>
      <p>view car history <button
        onClick={Repairs}
      >{id}</button></p>

    </div>
  );
};


const Cars = () => {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    await fetch('http://127.0.0.1:5000/cars')
      .then(response => response.json())
      .then(data => setCars(data));
    console.log(cars)
  };



  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div>
      <h2 className="pageTitle">All Cars serviced in the company</h2>
    <div className="flex flex-wrap">

      {cars.length > 0
        ? cars.map((car) => (
          <Car id={car.id} make={car.make} model={car.model} year={car.year} plateNo={car.plateNo} />

        ))
        : "Loading..."}

    </div>
    </div>
  );
};

export default Cars;

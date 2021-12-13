// import React from 'react';

import React, { useState, useEffect } from "react";
import "./carDiv.css";

const Car = ({ make, model, year, plateNo }) => {
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

  useEffect(() => {
    fetch('http://127.0.0.1:5000/cars')
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div className="flex flex-wrap">
      {cars.length > 0
        ? cars.map((car) => (
            <Car key={Car.id} make={Car.make} model={Car.model} year={Car.year} plateNo={Car.plateNo} />
          ))
        : "Loading..."}
    </div>
  );
};

export default Cars;

///////////


// const carBox = ({ text, clickHandler }) => (
//     <div >


//     </div>
      

// export default button;

// //////////
// pets.forEach(pet => {
//     const memBox = document.createElement("div");
  
//     const name = document.createElement('div')
//     name.innerText = pet.name;

//     const dob = document.createElement('div')
//     dob.innerText = pet.dob;

//     const client_email = document.createElement('div')
//     client_email.innerText = pet.client_email;

//     const deleteButton = document.createElement('button');
//     deleteButton.innerText = 'Delete';
//     deleteButton.addEventListener('click', async () => {
//       await deleteMember(pet.id);
//       petsLoad();
//     })

//     const logsButton = document.createElement('button');
//     logsButton.innerText = 'Health Log';
//     logsButton.addEventListener('click', async () => {

//       // !!!!! ATIDAROM NAUJA HTML SU ID KAIP QUERY PARAMETER:
//       window.location=`logs.html?id=${pet.id}`        
//     })

// ///////////

// //////////

//      memBox.append( name, dob, client_email, deleteButton, logsButton);
//       body.append(memBox);
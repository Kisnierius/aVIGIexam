import React from 'react';


// const Allcar = ({ make, model, year, plateNo }) => {


//   return (
//     <div className="product-wrapper">
//       <span>{make}</span>
//       <span>{model}</span>
//       <div>{year}</div>
//       <h3>{plateNo}</h3>
      
//     </div>
//   )
// }

console.log('allCar');
const Allcar = (allCar) => {
    console.log('allCar');

    return (
      <div className="product-wrapper">
        <span>{allCar.make}</span>
        <span>{allCar.model}</span>
        <div>{allCar.year}</div>
        <h3>{allCar.plateNo}</h3>
        
      </div>
    )
  }
  

export default Allcar;

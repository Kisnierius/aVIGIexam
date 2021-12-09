import React from 'react';


const Allcar = ({ make, model, year, plateNo }) => {


  return (
    <div className="product-wrapper">
      <span>{make}</span>
      <span>{model}</span>
      <div>{year}</div>
      <h3>{plateNo}</h3>
      
    </div>
  )
}

export default Allcar;

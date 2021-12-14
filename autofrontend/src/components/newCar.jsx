import React, { useState } from "react";
import { useNavigate  } from 'react-router';
// import "./style.scss";


  const NewCar = () => {

    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [plateNo, setPlateNo] = useState('');
    const [owner_id, setOwner_id] = useState('');

let navigate = useNavigate();

    const onClickHandler = (event) => {
      event.preventDefault();

      let newCar = {
        make: make,
        model: model,
        year: year,
        plateNo: plateNo,
        owner_id: owner_id
      };

      const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newCar),
      };

      fetch('http://localhost:5000/cars', options)
.then((response) => {
  if (!response.ok) {
    return response.json().then((data) => {
      const error = new Error('error');
      error.data = data;
      throw error;});
  }
  return response.json();
})
.then((data) => {

    setMake('');
    setModel('');
    setYear('');
    setPlateNo('');
    setOwner_id('');

  alert('Success');
  navigate('/Allcars')
})
.catch((error) => {
  alert('Register Failed');
})
};


    return (
      <form className="form"
        onSubmit={onClickHandler}>

                    <label htmlFor="make">Make</label>
                    <input type="text" name="make" placeholder="make" onChange={(e) =>
                      setMake(e.target.value)}
                      required />

                    <label htmlFor="model">Model</label>
                    <input type="text" name="model" placeholder="model" onChange={(e) =>
                      setModel(e.target.value)
                    }
                      required />

                    <label htmlFor="year">Year</label>
                    <input type="number" name="year" placeholder="2000" onChange={(e) =>
                      setYear(e.target.value)}
                      required />

                    <label htmlFor="plateNo">Plate number</label>
                    <input type="text" name="plateNo" placeholder="AAA123" onChange={(e) =>
                      setPlateNo(e.target.value)}
                      required />

                    <label htmlFor="owner_id">Owner ID</label>
                    <input type="number" name="owner_id" placeholder="0" onChange={(e) =>
                      setOwner_id(e.target.value)}
                      required />

                <button type="submit" className="btn">
                  Add new Car
                </button>
        
        </form>
    )
 } 

export default NewCar;
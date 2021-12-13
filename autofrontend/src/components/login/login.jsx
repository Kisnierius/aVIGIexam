import React, { useState } from "react";
import { useNavigate } from 'react-router';

const Login = () => {

  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onClickHandler = (e) => {
    e.preventDefault();

    let logUser = {
      email: email,
      password: password
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(logUser),
    };

    fetch('http://localhost:5000/login', options)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            const error = new Error('Something went wrong!');
            error.data = data;
            throw error;
          });
        }
        return response.json();
      })
      .then((data) => {
        setEmail('');
        setPassword('');
        localStorage.setItem('token', data.data);
        alert('Login succesfull');
        navigate('/Allcars')
      })
      .catch((error) => {
        if (error.data) {
          alert(`Failed to login!\n${error.data.details[0].message}`);
        } else {
          alert('Failed to login!\nSomething went wrong');
        }
      })
  };

  return (
<div>
    <form onSubmit={onClickHandler}>

      <input type="text" name="email" placeholder="email" onChange={(e) =>
        setEmail(e.target.value)}
        required />

      <input type="text" name="password" placeholder="password" onChange={(e) =>
         setPassword(e.target.value)} 
         required />

      <button type="submit" className="btn">
        Login
      </button>
       
        </form >
        TEST
        </div>
    )
 }

export default Login;
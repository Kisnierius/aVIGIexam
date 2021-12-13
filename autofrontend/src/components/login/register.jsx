import React, { useState } from "react";
import { useNavigate  } from 'react-router';
import "./style.scss";


  const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
let navigate = useNavigate();

    const onClickHandler = (event) => {
      event.preventDefault();

      let newUser = {
        email: email,
        password: password
      };

      const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newUser),
      };

      fetch('http://localhost:5000/register', options)
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
  setEmail('');
  setPassword('');
  alert('Success');
  navigate('/')
})
.catch((error) => {
  alert('Register Failed');
})
};


    return (
      <form
        onSubmit={onClickHandler}>

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="email" onChange={(e) =>
                      setEmail(e.target.value)}
                      required />

                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder="password" onChange={(e) =>
                      setPassword(e.target.value)
                    }
                      required />

                <button type="submit" className="btn">
                  Register
                </button>
        
        </form>
    )
 } 

export default Register;
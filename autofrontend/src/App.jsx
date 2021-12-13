import React from "react";
import "./App.scss";
//import AllCars from "./pages/Allcars"
import { Routes, Route } from 'react-router';
// import Login from './components/login';
//import Register from './components/register';
// import { useContext } from 'react';
// import { AuthProvider } from './context/auth';
import AllCars from './pages/Allcars';
//import Cars from './components/Allcars';

function App() {

  return (
    
      <div >
        <Routes>
        {/* <Route path="/" element={<AllCars />} /> */}
          {/* <Route path="/Login" element={<Login />} /> */}
          {/* <Route path="/Register" element={<Register />} /> */}
          <Route path="/Allcars" element={<AllCars />} />
        </Routes>
      </div>
  
  );
}






export default App;

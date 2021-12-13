import React from "react";
import "./App.scss";
import { Routes, Route } from 'react-router';
// import ReactDOM from 'react-dom';
// import Login from './components/login';
//import Register from './components/register';
// import { useContext } from 'react';
// import { AuthProvider } from './context/auth';
import AllCars from './pages/Allcars';
import Repairs from './pages/carHistory';
import Home from './pages/home';
// import Header from './components/header';
import "milligram";

// const HeaderLoad = () => {
  
//   return (
//       ReactDOM.render(
          
//           <React.StrictMode>
              
//             <Header />
//           </React.StrictMode>,
//           document.getElementById('root')
//         )
//   )
//   }
  
//   HeaderLoad();


function App() {

  return (
  

      <div >
        <Routes>
        {/* <Route path="/" element={<AllCars />} /> */}
          {/* <Route path="/Login" element={<Login />} /> */}
          {/* <Route path="/Register" element={<Register />} /> */}
          <Route path="/Allcars" element={<AllCars />} />
          <Route path="/carHistory" element={<Repairs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  
  );
}






export default App;

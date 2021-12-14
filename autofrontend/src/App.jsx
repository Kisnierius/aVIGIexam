import React from "react";
import "./App.scss";
import { Routes, Route } from 'react-router';
// import ReactDOM from 'react-dom';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import NewCarPage from './pages/newCarPage';
// import { useContext } from 'react';
// import { AuthProvider } from './context/auth';
import AllCars from './pages/Allcars';
import Repairs from './pages/carHistory';
import Home from './pages/home';
import Header from './components/header';
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
    <div>
<div>
  <header className="App-header">
          <Header />
        </header>
        </div>
    <div>
      <Routes>
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/Allcars" element={<AllCars />} />
        <Route path="/carHistory" element={<Repairs />} />
        <Route path="/newCarPage" element={<NewCarPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </div>
  );
}


export default App;

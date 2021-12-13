import React from "react";
import ReactDOM from 'react-dom';
import Cars from '../components/carDiv';

const AllCars = () => {
return (
    ReactDOM.render(
        <React.StrictMode>
          <Cars />
        </React.StrictMode>,
        document.getElementById('root')
      )
)

//     const [allCars, setAllCars] = useState([]);

//    const  fetchAllcars = async () => {
//         await fetch('http://127.0.0.1:5000/cars')
//              .then(response => response.json())
//              .then(data => setAllCars(data));
//             console.log(allCars)
//      };
 

//     useEffect(() => {
//        fetchAllcars();
//     }, []);

//     console.log(allCars);
//     //////// NEISVEDA I WEB???
//     return (
//         <main>
//             <h1>All cars serviced in the company</h1>
//             <div>
//                 {allCars.lenght > 0 ?
//                     allCars.map(allCar => (
//                         <Allcar
                        
//                             key={allCar.id}
//                             make={allCar.make}
//                             model={allCars.model}
//                             year={allCars.year}
//                             plateNo={allCars.plateNo}
//                         />)
//                     ):
//                     <h1>Loading...</h1>}
//             </div>
//         </main>
//     )

}

    export default AllCars;